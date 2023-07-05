import React, { useEffect, useRef } from "react";

const CircleCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");

    if (!canvas || !context) {
      return;
    }

    const randomRange = (min: number, max: number) => {
      return Math.random() * (max - min) + min;
    };

    // Function to spawn circles
    const spawnCircle = () => {
      const x = canvas.width / 2;
      const y = canvas.height / 2;
      const radius = randomRange(10, 50);
      const color = "#ff0000"; // Fixed color (red)

      const dx = randomRange(-5, 5); // Horizontal velocity
      const dy = randomRange(-5, 5); // Vertical velocity

      // Animation loop
      const animate = () => {
        context.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas

        // Update circle position
        const newX = x + dx;
        const newY = y + dy;

        // Draw circle
        context.beginPath();
        context.arc(newX, newY, radius, 0, Math.PI * 2);
        context.fillStyle = color;
        context.fill();

        // Check if circle reached the edges
        if (
          newX - radius < 0 ||
          newX + radius > canvas.width ||
          newY - radius < 0 ||
          newY + radius > canvas.height
        ) {
          cancelAnimationFrame(animationId); // Stop animation
        } else {
          requestAnimationFrame(animate); // Continue animation
        }
      };

      const animationId = requestAnimationFrame(animate); // Start animation
    };

    spawnCircle(); // Initial circle spawn
  }, []);

  return <canvas ref={canvasRef} /* width={500} height={500}  */style={{width:"100vw" ,height:"100vw",zIndex:"0"}}/>;
};

export default CircleCanvas;
