'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SYSTEM_PHRASES = [
  "INITIALIZING REACTOR CORE",
  "DECRYPTING ARCHIVES",
  "ESTABLISHING NEURAL LINK",
  "BUFFERING HOLO-INTERFACE",
  "SYNCHRONIZING..."
];

// Canvas-based Particle Stream (Background Texture)
const AnimusDigitalRain = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const container = containerRef.current;
        if (!canvas || !container) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let particles: { x: number; y: number; speed: number; length: number; opacity: number }[] = [];

        const resizeCanvas = () => {
            canvas.width = container.clientWidth;
            canvas.height = container.clientHeight;
        };

        const createParticle = (isInitial = false) => {
            return {
                x: Math.random() * canvas.width,
                y: isInitial ? Math.random() * canvas.height : canvas.height + 100,
                speed: 1 + Math.random() * 3,
                length: 5 + Math.random() * 20,
                opacity: 0.05 + Math.random() * 0.10 
            };
        };

        const initParticles = () => {
            particles = [];
            const count = Math.floor(canvas.width / 15);
            for (let i = 0; i < count; i++) {
                particles.push(createParticle(true));
            }
        };

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = '#8b5cf6'; // Violet tint for particles too

            particles.forEach((p, i) => {
                p.y -= p.speed;
                if (p.y < -p.length) {
                    particles[i] = createParticle();
                }
                ctx.globalAlpha = p.opacity;
                ctx.fillRect(p.x, p.y, 1, p.length);
            });

            animationFrameId = requestAnimationFrame(draw);
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();
        initParticles();
        draw();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div ref={containerRef} className="absolute inset-0 z-0 pointer-events-none mix-blend-screen opacity-20">
            <canvas ref={canvasRef} className="w-full h-full" />
        </div>
    );
};

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Cycle phrases
  useEffect(() => {
      if (!isLoading) return;
      const interval = setInterval(() => {
          setPhraseIndex((prev) => (prev + 1) % SYSTEM_PHRASES.length);
      }, 450);
      return () => clearInterval(interval);
  }, [isLoading]);

  // Main Loading Logic & Complex Animation Sequence
  useEffect(() => {
    // Session Storage Check
    const hasLoaded = typeof window !== 'undefined' ? sessionStorage.getItem('portfolio-animus-loaded') : null;
    
    if (hasLoaded) {
      setIsLoading(false);
      return;
    }

    const startTimestamp = Date.now();
    let animFrame: number;
    const canvas = canvasRef.current;
    
    // --- PHASE 1 DATA: Text Particles ---
    let textParticles: {x: number, y: number, delay: number}[] = [];
    
    // --- PHASE 2 DATA: Timeline Clips ---
    let timelineClips: {x: number, row: number, width: number, shade: number}[] = [];

    // --- PHASE 4 DATA: 3D Geometries --- 
    // Icosahedron (Outer Shell)
    const t = (1 + Math.sqrt(5)) / 2;
    const icoVertices = [
        {x: -1, y:  t, z: 0}, {x: 1, y:  t, z: 0}, {x: -1, y: -t, z: 0}, {x: 1, y: -t, z: 0},
        {x: 0, y: -1, z: t}, {x: 0, y:  1, z: t}, {x: 0, y: -1, z: -t}, {x: 0, y:  1, z: -t},
        {x: t, y:  0, z: -1}, {x: t, y:  0, z: 1}, {x: -t, y:  0, z: -1}, {x: -t, y:  0, z: 1}
    ];

    const icoEdges: [number, number][] = [];
    for(let i=0; i<icoVertices.length; i++){
        for(let j=i+1; j<icoVertices.length; j++){
            const dx = icoVertices[i].x - icoVertices[j].x;
            const dy = icoVertices[i].y - icoVertices[j].y;
            const dz = icoVertices[i].z - icoVertices[j].z;
            const dist = Math.sqrt(dx*dx + dy*dy + dz*dz);
            if(Math.abs(dist - 2) < 0.1) {
                icoEdges.push([i, j]);
            }
        }
    }

    // Inner Rings (Orbitals) - Generated procedurally in render loop
    // HUD Data
    const hexChars = "0123456789ABCDEF";
    const getRandomHex = (len: number) => Array.from({length: len}, () => hexChars[Math.floor(Math.random() * 16)]).join('');
    
    // Memory Blocks
    const memoryBlocks = Array.from({length: 20}, () => Math.random());

    const init = () => {
        if (!canvas) return;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        // Init Phase 1 Text
        const tmp = document.createElement('canvas');
        tmp.width = canvas.width;
        tmp.height = canvas.height;
        const tCtx = tmp.getContext('2d');
        if (tCtx) {
            tCtx.fillStyle = 'white';
            tCtx.textAlign = 'center';
            tCtx.textBaseline = 'middle';
            const fontSize = Math.min(canvas.width * 0.15, 120);
            tCtx.font = `900 ${fontSize}px sans-serif`;
            tCtx.fillText("LOADING", canvas.width/2, canvas.height/2 - 20);
            
            const idata = tCtx.getImageData(0, 0, tmp.width, tmp.height);
            const data = idata.data;
            const step = 6; // slightly coarser for performance
            textParticles = [];
            for (let y = 0; y < tmp.height; y += step) {
                for (let x = 0; x < tmp.width; x += step) {
                    if (data[(y * tmp.width + x) * 4] > 100) {
                        textParticles.push({
                            x, y, delay: Math.random() * 800
                        });
                    }
                }
            }
        }

        // Init Phase 2 Timeline
        timelineClips = [];
        const rows = 2;
        let startX = canvas.width * 0.1;
        const totalW = canvas.width * 0.8;
        for (let r=0; r<rows; r++) {
            let cx = startX;
            while(cx < startX + totalW) {
                const w = 20 + Math.random() * 80;
                timelineClips.push({
                    x: cx,
                    row: r,
                    width: w,
                    shade: 20 + Math.random() * 80
                });
                cx += w + 2;
            }
        }
    };

    init();
    
    const ctx = canvas?.getContext('2d');

    const render = () => {
        if (!canvas || !ctx) return;
        const now = Date.now();
        const elapsed = now - startTimestamp;

        const width = canvas.width;
        const height = canvas.height;
        const centerX = width / 2;
        const centerY = height / 2;
        
        // Brand Colors
        const VIOLET = '#8b5cf6'; 
        const TEAL = '#2dd4bf';   
        const WHITE = '#ffffff';

        // ACCESSIBILITY: No global flashing or camera shake
        
        ctx.clearRect(0, 0, width, height);

        // --- HUD ELEMENTS (Always persistent in background) ---
        // Top Left Hex Stream
        ctx.font = '10px monospace';
        ctx.fillStyle = `rgba(139, 92, 246, 0.4)`;
        ctx.fillText(`MEM_ADDR: 0x${getRandomHex(8)}`, 50, 50);
        ctx.fillText(`BUFFER:   0x${getRandomHex(8)}`, 50, 65);
        ctx.fillText(`KERNEL:   STABLE`, 50, 80);

        // Bottom Right Build Info
        ctx.textAlign = 'right';
        ctx.fillText("BUILD: v.2.0.4-RELEASE", width - 50, height - 50);
        ctx.fillText(`T: ${elapsed}ms`, width - 50, height - 35);
        ctx.textAlign = 'left';

        // --- PHASE 1: Loading Text (0ms - 1300ms) ---
        if (elapsed < 1400) {
            const opacity = elapsed > 1150 ? 1 - (elapsed - 1150)/250 : 1;
            if (opacity > 0) {
                ctx.save();
                // NO CAMERA SHAKE (Removed for accessibility)

                ctx.fillStyle = `rgba(139, 92, 246, ${opacity})`; 
                textParticles.forEach(p => {
                    if (elapsed > p.delay) {
                        ctx.fillRect(p.x, p.y, 2, 2); // Tiny squares
                    }
                });
                
                // NO RGB SPLIT GHOST (Removed for accessibility)
                ctx.restore();
            }
        }

        // --- PHASE 2: Timeline & Memory Bar (650ms - 1500ms) ---
        if (elapsed > 650 && elapsed < 1600) {
             let alpha = 0;
             if (elapsed < 1000) alpha = (elapsed - 650) / 350;
             else if (elapsed > 1300) alpha = 1 - (elapsed - 1300) / 300;
             else alpha = 1;

             if (alpha > 0) {
                 const timelineY = centerY + 100;
                 
                 ctx.save();
                 ctx.globalAlpha = alpha;
                 
                 // Existing Timeline
                 ctx.fillStyle = 'rgba(255,255,255,0.7)';
                 ctx.font = '12px monospace';
                 ctx.fillText("SEQUENCE_01", width * 0.1, timelineY - 15);
                 
                 timelineClips.forEach(clip => {
                     const scrollOffset = (elapsed - 650) * 0.15; // Faster scroll
                     const x = clip.x - scrollOffset;
                     const y = timelineY + (clip.row * 25);
                     
                     // NO GLITCHY HEIGHT (Clean blocks)
                     const h = 22;
                     
                     ctx.fillStyle = `rgba(255,255,255,${clip.shade/255})`;
                     ctx.fillRect(x, y, clip.width, h);
                 });

                 // Memory Usage Bar (Animated)
                 const memY = timelineY + 60;
                 const memW = 4;        
                 const memGap = 2;
                 let headerX = width * 0.1;
                 
                 // Label
                 ctx.fillStyle = TEAL;
                 ctx.font = '10px monospace';
                 ctx.fillText("MEMORY_ALLOC:", headerX, memY - 5);

                 // Bars
                 for(let i=0; i<memoryBlocks.length; i++) {
                     const barH = 10 + Math.sin(elapsed * 0.01 + i) * 10;
                     ctx.fillStyle = `rgba(45, 212, 191, ${0.3 + memoryBlocks[i]*0.7})`;
                     ctx.fillRect(headerX + (i * (memW + memGap)), memY, memW, barH);
                 }

                 ctx.restore();
             }
        }

        // --- PHASE 3: Streaks (1150ms - 1800ms) ---
        if (elapsed > 1150 && elapsed < 2000) {
            const streakProgress = Math.max(0, (elapsed - 1150) / 600); 
            if (streakProgress < 1.4) {
                ctx.save();
                
                const angle = -Math.PI / 4;
                ctx.translate(centerX, centerY);
                ctx.rotate(angle);
                
                // Streak 1 (Violet)
                const s1Pos = (streakProgress * width * 2.2) - width;
                const s1Alpha = streakProgress < 0.8 ? 1 : 1 - (streakProgress - 0.8)*2;

                ctx.shadowColor = VIOLET;
                ctx.shadowBlur = 60;
                ctx.fillStyle = VIOLET;
                
                if (s1Alpha > 0) {
                    ctx.globalAlpha = s1Alpha;
                    const h = 120; // NO HEIGHT GLITCH
                    ctx.fillRect(s1Pos, -150, width, h);
                }

                // Streak 2 (Teal)
                const s2Pos = (streakProgress * width * 2.0) - width - 200;
                const s2Alpha = streakProgress < 0.9 ? 1 : 1 - (streakProgress - 0.9)*2;
                
                if (s2Alpha > 0) {
                     ctx.globalAlpha = s2Alpha;
                     ctx.fillStyle = TEAL;
                     ctx.shadowColor = TEAL; 
                     ctx.fillRect(s2Pos, 50, width, 50);
                }
                
                ctx.restore();
            }
        }

        // --- PHASE 4: GYROSCOPIC CORE (1650ms - 2750ms + Fade out) ---
        if (elapsed > 1650) {
            let phase4Alpha = 1;
            if (elapsed > 2750) phase4Alpha = 1 - (elapsed - 2750) / 300; 

            if (phase4Alpha > 0) {
                const scaleBase = Math.min(width, height) * 0.13; 
                ctx.save();
                ctx.translate(centerX, centerY);

                // --- 1. Reactore Core (Steady Glow, no flash) ---
                const pulse = (Math.sin(elapsed * 0.003) + 1) * 0.3; // Slower, subtle pulse
                const coreSize = 8 + pulse * 6;
                // Draw layers
                const grad = ctx.createRadialGradient(0, 0, 0, 0, 0, coreSize * 4);
                grad.addColorStop(0, WHITE);
                grad.addColorStop(0.2, VIOLET);
                grad.addColorStop(1, 'transparent');
                
                ctx.fillStyle = grad;
                ctx.globalAlpha = phase4Alpha;
                ctx.beginPath();
                ctx.arc(0, 0, coreSize * 4, 0, Math.PI * 2);
                ctx.fill();

                ctx.fillStyle = WHITE;
                ctx.beginPath();
                ctx.arc(0, 0, coreSize, 0, Math.PI * 2);
                ctx.fill();
                
                // Helper to project 3D point
                const project3D = (x:number, y:number, z:number, rx:number, ry:number, rz:number) => {
                    let y1 = y*Math.cos(rx) - z*Math.sin(rx);
                    let z1 = y*Math.sin(rx) + z*Math.cos(rx);
                    let x2 = x*Math.cos(ry) - z1*Math.sin(ry);
                    let z2 = x*Math.sin(ry) + z1*Math.cos(ry);
                    let x3 = x2*Math.cos(rz) - y1*Math.sin(rz);
                    let y3 = x2*Math.sin(rz) + y1*Math.cos(rz);
                    
                    const dist = 5;
                    const scale = scaleBase / (z2 + dist);
                    return { x: x3 * scale * 400, y: y3 * scale * 400, z: z2 };
                };

                // --- 2. Inner Orbitals (Rings) ---
                const t = elapsed * 0.001;
                
                ctx.strokeStyle = `rgba(45, 212, 191, ${phase4Alpha * 0.6})`; // Teal
                ctx.lineWidth = 1;
                ctx.beginPath();
                for(let a=0; a<=Math.PI*2; a+=0.1) {
                    const r = 1.2;
                    const px = Math.cos(a) * r;
                    const py = Math.sin(a) * r;
                    const p = project3D(px, py, 0, t*2, t, 0); 
                    if (a===0) ctx.moveTo(p.x, p.y);
                    else ctx.lineTo(p.x, p.y);
                }
                ctx.stroke();

                ctx.strokeStyle = `rgba(139, 92, 246, ${phase4Alpha * 0.6})`; // Violet
                ctx.beginPath();
                for(let a=0; a<=Math.PI*2; a+=0.1) {
                    const r = 1.5;
                    const px = Math.cos(a) * r;
                    const pz = Math.sin(a) * r; 
                    const p = project3D(px, 0, pz, t, -t*1.5, 0); 
                    if (a===0) ctx.moveTo(p.x, p.y);
                    else ctx.lineTo(p.x, p.y);
                }
                ctx.stroke();

                // --- 3. Outer Icosahedron Shell ---
                const rotX = -t * 0.5;
                const rotY = -t * 0.8;
                
                const projectedIco = icoVertices.map(v => 
                     project3D(v.x, v.y, v.z, rotX, rotY, 0)
                );

                ctx.strokeStyle = `rgba(255, 255, 255, ${phase4Alpha * 0.3})`;
                ctx.lineWidth = 1;
                
                // NO RGB SPLIT on edges (Clean lines)
                ctx.beginPath();
                icoEdges.forEach(edge => {
                    const p1 = projectedIco[edge[0]];
                    const p2 = projectedIco[edge[1]];
                    ctx.moveTo(p1.x, p1.y);
                    ctx.lineTo(p2.x, p2.y);
                });
                ctx.stroke();

                // Nodes
                ctx.fillStyle = WHITE;
                projectedIco.forEach((p, i) => {
                    const size = 2;
                    ctx.fillRect(p.x - size/2, p.y - size/2, size, size);
                });
                
                ctx.restore();

                // --- 4. CYBERPUNK NAME DECODE (Accessible Version) ---
                const textAlpha = Math.min(1, Math.max(0, (elapsed - 1800) / 500)) * phase4Alpha;
                if (textAlpha > 0) {
                    ctx.save();
                    ctx.textAlign = 'right';
                    
                    const name = "SALMAN AHMAD";
                    // Only "decode" for the first 800ms
                    const decodeProgress = Math.min(1, Math.max(0, (elapsed - 1800) / 800));
                    
                    // We calculate how many chars should be revealed based on progress
                    const charsRevealed = Math.floor(decodeProgress * name.length);
                    
                    let displayText = "";
                    let currentXOffset = 0; // Needed if we were drawing individually, but fillText does it in one go.
                    // Actually, to color glitch individual chars, we need to loop.
                    // Simplified: Construct the string with random chars for unrevealed part.
                    
                    const randomChar = () => String.fromCharCode(33 + Math.floor(Math.random() * 93)); // ASCII printable
                    
                    if (decodeProgress < 1) {
                        const scrambled = name.split('').map((char, index) => {
                            if (index < charsRevealed) return char; // Revealed
                            return randomChar(); // Scrambled
                        }).join('');
                        displayText = scrambled;
                    } else {
                        displayText = name;
                    }

                    // Draw Name
                    ctx.shadowColor = TEAL;
                    ctx.shadowBlur = 10;
                    ctx.fillStyle = WHITE;
                    ctx.font = '300 24px sans-serif';
                    ctx.letterSpacing = '6px';
                    
                    // ACCESSIBILITY: Instead of full screen flash, we just color the "decoding" characters differently?
                    // Canvas text API makes multicolor strings hard. 
                    // Let's just draw the full string in white with the shadow.
                    ctx.fillText(displayText, width - 40, height - 40);
                    
                    // Draw a subtle "cursor" block at the decoding position
                    if (decodeProgress < 1) {
                         const totalW = ctx.measureText(displayText).width;
                         // Approx width per char (spaced)
                         const charW = totalW / name.length;
                         const cursorX = (width - 40) - totalW + (charsRevealed * charW);
                         
                         ctx.fillStyle = TEAL;
                         ctx.fillRect(cursorX, height - 60, 12, 24);
                    }
                    
                    ctx.shadowBlur = 0;
                    ctx.font = '12px monospace';
                    ctx.fillStyle = VIOLET;
                    ctx.fillText("SYSTEM ONLINE // READY", width - 40, height - 25);
                    
                    ctx.restore();
                }
            }
        }

        // --- FADE OUT OVERLAY (2750ms - 3200ms) ---
        if (elapsed > 2750) {
            const fadeAlpha = (elapsed - 2750) / 450;
            ctx.fillStyle = `rgba(0,0,0,${Math.min(1, fadeAlpha)})`;
            ctx.fillRect(0, 0, width, height);
            
            // NO FINAL RGB FLASH (Removed for accessibility)
        }

        // End trigger
        if (elapsed > 3200 && !isExiting) {
             setIsExiting(true);
             setTimeout(() => {
                 setIsLoading(false);
                 if (typeof window !== 'undefined') {
                     sessionStorage.setItem('portfolio-animus-loaded', 'true');
                 }
             }, 500); 
        }

        if (isLoading) {
            animFrame = requestAnimationFrame(render);
        }
    };

    window.addEventListener('resize', init);
    render();

    return () => {
        window.removeEventListener('resize', init);
        cancelAnimationFrame(animFrame);
    };

  }, [isLoading, isExiting]);


  if (!isLoading) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[9999] overflow-hidden bg-[#050607] text-white font-mono"
      initial={{ opacity: 1 }}
      animate={isExiting ? { opacity: 0, filter: "blur(10px)" } : { opacity: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      
      {/* 1) Canvas Data Up-Stream (Background Texture) */}
      <AnimusDigitalRain />
      
      {/* 2) Main Animation Canvas */}
      <canvas 
        ref={canvasRef}
        className="absolute inset-0 z-10 w-full h-full"
      />

       <div 
        className="absolute inset-0 z-20 pointer-events-none opacity-20"
        style={{ 
            background: 'repeating-linear-gradient(0deg, transparent 0px, transparent 1px, rgba(139, 92, 246, 0.05) 2px, rgba(139, 92, 246, 0.05) 3px)',
            backgroundSize: '100% 3px'
        }}
       />

      {/* 3) Status Phrases */}
      <div className="absolute bottom-10 left-0 right-0 z-30 flex items-center justify-center pointer-events-none">
        <AnimatePresence mode="wait">
          <motion.p
            key={phraseIndex}
            className="text-[10px] md:text-xs tracking-[0.3em] text-violet-500/60 font-bold uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {SYSTEM_PHRASES[phraseIndex]}
          </motion.p>
        </AnimatePresence>
      </div>

      {/* Exit Flash - KEEPING IT GENTLE OR REMOVING? User said "remove flashing". 
          The white flash in the markup is currently `animate={{ opacity: [0, 0.2, 0] }}` which is soft (20% opacity).
          But to be totally safe, let's remove the flash div entirely. 
      */}
    </motion.div>
  );
}
