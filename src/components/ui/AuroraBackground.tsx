"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { cn } from "@/lib/utils";
import { useTheme } from "../ThemeProvider";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  showRadialGradient?: boolean;
}

export const AuroraBackground = ({
  className,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef(0);
  const { theme } = useTheme();

  useEffect(() => {
    if (!containerRef.current) return;

    // --- Scene Setup ---
    const container = containerRef.current;
    
    // Cleanup previous children if any (strict mode double-render fix)
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }

    const scene = new THREE.Scene();
    
    // Orthographic camera for 2D shader plane covering the viewport
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10);
    camera.position.z = 1;

    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true,
      powerPreference: "high-performance" 
    });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5)); // Cap pixel ratio for performance
    container.appendChild(renderer.domElement);

    // --- Shaders ---
    
    // Vertex Shader: Pass-through
    const vertexShader = `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `;

    // Fragment Shader: Generative Aurora
    const fragmentShader = `
      uniform float uTime;
      uniform vec2 uResolution;
      uniform float uScroll;
      
      varying vec2 vUv;

      // GLSL Simplex/Perlin Noise helpers
      // Standard noise function for organic generation
      vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
      vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
      vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }

      float snoise(vec2 v) {
        const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
        vec2 i  = floor(v + dot(v, C.yy) );
        vec2 x0 = v - i + dot(i, C.xx);
        vec2 i1;
        i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
        vec4 x12 = x0.xyxy + C.xxzz;
        x12.xy -= i1;
        i = mod289(i);
        vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 )) + i.x + vec3(0.0, i1.x, 1.0 ));
        vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
        m = m*m ;
        m = m*m ;
        vec3 x = 2.0 * fract(p * C.www) - 1.0;
        vec3 h = abs(x) - 0.5;
        vec3 ox = floor(x + 0.5);
        vec3 a0 = x - ox;
        m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
        vec3 g;
        g.x  = a0.x  * x0.x  + h.x  * x0.y;
        g.yz = a0.yz * x12.xz + h.yz * x12.yw;
        return 130.0 * dot(m, g);
      }

      void main() {
        vec2 uv = vUv;
        
        // Background color (Deep dark void, matching design constraint)
        // #050608 -> vec3(0.02, 0.024, 0.031)
        vec3 bgColor = vec3(0.02, 0.024, 0.031);
        
        vec3 finalColor = bgColor;
        
        // --- Color Palette Shift based on Scroll ---
        
        // Base Colors
        vec3 green = vec3(0.2, 0.75, 0.65);
        vec3 purple = vec3(0.45, 0.3, 0.8);
        vec3 blue = vec3(0.2, 0.4, 0.9);
        vec3 cyan = vec3(0.1, 0.8, 0.8);
        
        // Smoothly interpolate based on scroll magnitude
        // Scroll 0.0 -> Green/Purple
        // Scroll 0.5 -> Purple/Blue
        // Scroll 1.0 -> Blue/Cyan
        
        // Factor determines how much we've moved away from the start
        float factor = smoothstep(0.0, 1.0, uScroll);
        
        vec3 colorA = mix(green, purple, factor * 0.8);
        vec3 colorB = mix(purple, cyan, factor);

        // --- Aurora Generation ---
        
        // We will layer a few "curtains" of light
        float aurora = 0.0;
        
        // Loop for 3 layers of aurora curtains
        for (float i = 0.0; i < 3.0; i++) {
          // Time offset for each layer so they move independently
          // Scroll accelerates the time slightly for kinetic feeling
          float t = uTime * (0.1 + uScroll * 0.05) + i * 100.0;
          
          // Domain warping (curving the space)
          // The 'y' coordinate is shifted by a sine wave of 'x' to create the winding ribbon shape
          // Scroll adds a slight offset to 'uv.x' to simulate parallax movement
          float x_noise = snoise(vec2(uv.x * 0.4 + uScroll * 0.2, t * 0.1)); 
          
          // Widen the curves as we scroll deeper?
          float waviness = 0.15 + (uScroll * 0.05);
          float y_curve = sin(uv.x * 1.5 + t * 0.3) * waviness + (x_noise * 0.05); 
          
          // The base position of this curtain in Y space (lower layers to upper layers)
          float base_y = 0.4 + y_curve + (i * 0.2) - (uScroll * 0.15); // Move up slightly
          
          // Distance from the ribbon center
          float dist = uv.y - base_y;
          
          // "Verticality" / Curtain Folds
          // High frequency scale on X (20.0), stretched infinitely along Y (0.0 influence)
          // This ensures the noise creates VERTICAL streaks/folds
          float folds = snoise(vec2(uv.x * 10.0 + t, t * 0.05));
          
          // Intensity/Glow calculation
          
          // Softness calculation
          float glow = 0.01 / (abs(dist) * (1.0 + folds * 0.5) + 0.015);
          
          // Cutoff: prevent glow from filling the entire screen, limit it to the ribbon area
          glow *= smoothstep(0.4, 0.0, abs(dist));
          
          // Add detailed vertical streaks (Physics: field lines)
          float streaks = snoise(vec2(uv.x * 20.0 + t * 2.0, i));
          glow *= (0.7 + 0.6 * streaks); // Increases contrast of the light pillar
          
          // Accumulate the light
          aurora += glow * 0.4;
        }

        // --- Coloring ---
        
        // Vertical gradient logic for the light itself:
        // Oxygen (Green) is usually lower, Nitrogen (Purple/Blue) is higher
        // uv.y varies 0 to 1.
        vec3 mixedAuroraColor = mix(colorA, colorB, smoothstep(0.2, 0.9, uv.y));
        
        // Apply aurora to background (Additive mixing)
        finalColor += mixedAuroraColor * aurora * 0.8; 
        
        // Dither to prevent banding in dark gradients (Essential for dark mode backgrounds)
        float dither = fract(sin(dot(uv.xy, vec2(12.9898,78.233))) * 43758.5453);
        finalColor += dither * 0.02;

        gl_FragColor = vec4(finalColor, 1.0);
      }
    `;

    const uniforms = {
      uTime: { value: 0 },
      uResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
      uScroll: { value: 0 }
    };

    const geometry = new THREE.PlaneGeometry(2, 2);
    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms,
      depthWrite: false,
      depthTest: false,
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);
    
    // --- Scroll Handler ---
    const handleScroll = () => {
        // Calculate 0..1 scroll progress
        const maxScroll = document.body.scrollHeight - window.innerHeight;
        const progress = maxScroll > 0 ? window.scrollY / maxScroll : 0;
        scrollRef.current = progress;
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });

    // --- Animation Loop ---
    let animationId: number;
    const startTime = Date.now();

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      
      const elapsedTime = (Date.now() - startTime) / 1000;
      material.uniforms.uTime.value = elapsedTime;
      // Sync Uniform
      material.uniforms.uScroll.value = scrollRef.current;
      
      renderer.render(scene, camera);
    };

    animate();

    // --- Cleanup & Resize ---
    const handleResize = () => {
      if (!containerRef.current) return;
      
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
      material.uniforms.uResolution.value.set(width, height);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll); // Remove scroll listener
      cancelAnimationFrame(animationId);
      if (container && renderer.domElement) {
        // Safe check for removal
        if (container.contains(renderer.domElement)) {
            container.removeChild(renderer.domElement);
         }
      }
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn(
        "fixed inset-0 -z-10 pointer-events-none opacity-0 dark:opacity-100 transition-opacity duration-1000",
        "bg-background",
        className
      )}
      {...props}
    >
        {/* Optional Semantic Noise Texture Overlay for film grain effect if desired */}
    </div>
  );
};
