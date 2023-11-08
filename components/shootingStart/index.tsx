'use client'
import React, { useEffect, useRef } from 'react';
import generatePoissonDiskSampling from '@/public/utils/utils';

const ShootingStar: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const staticStarsRef = useRef<{ x: number; y: number; opacity: number }[]>([]);
  const shootingStarRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const shootingStarSpeed = 1;

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');

    if (!canvas || !context) {
      return;
    }

    const drawStar = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      // Draw static stars using Poisson Disk Sampling
      if (staticStarsRef.current.length === 0) {
        const points = generatePoissonDiskSampling(canvas.width, canvas.height, 90, 30);
        staticStarsRef.current = points.map((point: any) => ({ ...point, opacity: Math.random() }));
      }

      context.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas

      for (const star of staticStarsRef.current) {
        // Twinkling effect: Change opacity slowly
        star.opacity += (Math.random() - 0.5) * 0.10;
        star.opacity = Math.max(0.2, Math.min(1, star.opacity));

        context.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        context.beginPath();
        context.arc(star.x, star.y, 1, 0, Math.PI * 2);
        context.fill();
      }

      // Draw the shooting star
      const centerX = shootingStarRef.current.x;
      const centerY = shootingStarRef.current.y;

      context.fillStyle = 'white';
      context.beginPath();
      context.arc(centerX, centerY, 2, 0, Math.PI * 2);
      context.fill();

      // Move the shooting star
      shootingStarRef.current.x += shootingStarSpeed;
      shootingStarRef.current.y += shootingStarSpeed;

      // Reset the shooting star's position when it goes out of bounds
      if (shootingStarRef.current.x > canvas.width || shootingStarRef.current.y > canvas.height) {
        shootingStarRef.current.x = -5;
        shootingStarRef.current.y = Math.random() * canvas.height;
      }

      requestAnimationFrame(drawStar);
    };

    // Add mouse interaction to make stars follow the cursor
    canvas.addEventListener('mousemove', (event) => {
      shootingStarRef.current.x = event.clientX;
      shootingStarRef.current.y = event.clientY;
    });

    drawStar();
  }, []);

  return <canvas ref={canvasRef} style={{ position: 'absolute', top: 0, left: 0, zIndex: -1 }} />;
};

export default ShootingStar;
