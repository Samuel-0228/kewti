'use client';
import { cn } from '@/lib/utils';
import { useTheme } from 'next-themes';
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

type DottedSurfaceProps = Omit<React.ComponentProps<'div'>, 'ref'>;

export function DottedSurface({ className, ...props }: DottedSurfaceProps) {
  const { resolvedTheme } = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);
  const stateRef = useRef({ count: 0 });
  const sceneRef = useRef<{
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    renderer: THREE.WebGLRenderer;
    particles: THREE.Points[];
    animationId: number;
  } | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;

    // Use container dimensions for strict hero scoping
    const width  = container.offsetWidth;
    const height = container.offsetHeight;

    const SEPARATION = 120, AMOUNTX = 50, AMOUNTY = 70;
    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0xffffff, 2000, 10000);

    const camera = new THREE.PerspectiveCamera(60, width / height, 1, 10000);
    camera.position.set(0, 355, 1220);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    const positions: number[] = [];
    const colors: number[] = [];
    const geometry = new THREE.BufferGeometry();

    for (let ix = 0; ix < AMOUNTX; ix++) {
      for (let iy = 0; iy < AMOUNTY; iy++) {
        positions.push(
          ix * SEPARATION - (AMOUNTX * SEPARATION) / 2,
          0,
          iy * SEPARATION - (AMOUNTY * SEPARATION) / 2
        );
        const c = resolvedTheme === 'dark' ? 0.8 : 0;
        colors.push(c, c, c);
      }
    }

    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geometry.setAttribute('color',    new THREE.Float32BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 4, vertexColors: true,
      transparent: true, opacity: 0.7, sizeAttenuation: true,
    });
    const points = new THREE.Points(geometry, material);
    scene.add(points);

    const animate = () => {
      const animationId = requestAnimationFrame(animate);
      if (sceneRef.current) sceneRef.current.animationId = animationId;
      
      const pos = geometry.attributes.position.array as Float32Array;
      const c = stateRef.current.count;
      
      let i = 0;
      for (let ix = 0; ix < AMOUNTX; ix++) {
        for (let iy = 0; iy < AMOUNTY; iy++) {
          pos[i * 3 + 1] =
            Math.sin((ix + c) * 0.3) * 50 +
            Math.sin((iy + c) * 0.5) * 50;
          i++;
        }
      }
      geometry.attributes.position.needsUpdate = true;
      renderer.render(scene, camera);
      stateRef.current.count += 0.05;
    };

    const handleResize = () => {
      if (!container) return;
      const w = container.offsetWidth;
      const h = container.offsetHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);
    const animationId = requestAnimationFrame(animate);

    sceneRef.current = { scene, camera, renderer, particles: [points], animationId };

    return () => {
      window.removeEventListener('resize', handleResize);
      if (sceneRef.current) {
        cancelAnimationFrame(sceneRef.current.animationId);
        sceneRef.current.scene.traverse((obj) => {
          if (obj instanceof THREE.Points) {
            obj.geometry.dispose();
            Array.isArray(obj.material)
              ? obj.material.forEach(m => m.dispose())
              : obj.material.dispose();
          }
        });
        sceneRef.current.renderer.dispose();
        if (container && sceneRef.current.renderer.domElement) {
          container.removeChild(sceneRef.current.renderer.domElement);
        }
      }
    };
  }, [resolvedTheme]);

  return (
    <div
      ref={containerRef}
      className={cn('pointer-events-none absolute inset-0 z-0 h-full w-full opacity-60', className)}
      {...props}
    />
  );
}