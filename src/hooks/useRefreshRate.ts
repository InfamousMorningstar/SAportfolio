'use client';

import { useEffect, useState } from 'react';

/**
 * Hook to detect the device's refresh rate and provide optimized animation settings
 * Automatically adapts animations for 60Hz, 90Hz, 120Hz, 144Hz+ displays
 */
export function useRefreshRate() {
  const [refreshRate, setRefreshRate] = useState(60);
  const [animationMultiplier, setAnimationMultiplier] = useState(1);

  useEffect(() => {
    let frameCount = 0;
    let lastTime = performance.now();
    let rafId: number;

    const measureRefreshRate = () => {
      frameCount++;
      const currentTime = performance.now();
      const elapsed = currentTime - lastTime;

      // Measure over 1 second
      if (elapsed >= 1000) {
        const measuredRate = Math.round(frameCount);
        
        // Determine closest standard refresh rate
        let detectedRate = 60;
        if (measuredRate >= 140) detectedRate = 144;
        else if (measuredRate >= 115) detectedRate = 120;
        else if (measuredRate >= 85) detectedRate = 90;
        else if (measuredRate >= 70) detectedRate = 75;
        else detectedRate = 60;

        setRefreshRate(detectedRate);
        
        // Set animation multiplier for smoother high-refresh animations
        // Higher refresh rates can handle more frames, so we can make animations slightly faster
        const multiplier = detectedRate >= 120 ? 0.9 : 1;
        setAnimationMultiplier(multiplier);
        
        console.log(`🖥️ Detected ${detectedRate}Hz display (measured: ${measuredRate}fps)`);
        return;
      }

      rafId = requestAnimationFrame(measureRefreshRate);
    };

    rafId = requestAnimationFrame(measureRefreshRate);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return {
    refreshRate,
    animationMultiplier,
    isHighRefreshRate: refreshRate >= 90,
    is120Hz: refreshRate >= 120,
    is144Hz: refreshRate >= 144,
  };
}
