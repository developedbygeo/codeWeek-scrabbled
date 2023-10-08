import { RefObject, useEffect } from 'react';

type FollowMouseOptions = {
  containerRef: RefObject<HTMLElement | null>;
  eyeRadius?: number;
};

const useFollowMouse = ({ containerRef, eyeRadius = 5 }: FollowMouseOptions) => {
  const handleMouseMove = (e: MouseEvent) => {
    const svgContainer = containerRef.current;
    if (!svgContainer) return;

    // Find the center of the container
    const rect = svgContainer.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Determine the angle from the center of the container to the mouse
    const deltaX = e.clientX - centerX;
    const deltaY = e.clientY - centerY;
    const angle = Math.atan2(deltaY, deltaX);

    // Convert the angle to an eye offset
    const offsetX = Math.cos(angle) * eyeRadius;
    const offsetY = Math.sin(angle) * eyeRadius;

    const eyeGroup = svgContainer.querySelector('#eyes');
    const eyeElements = eyeGroup?.querySelectorAll('path') || [];

    eyeElements.forEach((eye, index) => {
      const eyeBox = eye.getBBox();
      const eyeCenterX = eyeBox.x + eyeBox.width / 2;
      const eyeCenterY = eyeBox.y + eyeBox.height / 2;

      // Check angle from the center of the eye to the mouse
      const deltaX = e.clientX - (svgContainer.getBoundingClientRect().left + eyeCenterX);
      const deltaY = e.clientY - (svgContainer.getBoundingClientRect().top + eyeCenterY);
      const angle = Math.atan2(deltaY, deltaX);

      // Converting angle to offset in relation to the eye
      const offsetX = Math.cos(angle) * eyeRadius;
      const offsetY = Math.sin(angle) * eyeRadius;

      eye.setAttribute('transform', `translate(${offsetX}, ${offsetY})`);
    });
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [containerRef.current, eyeRadius]);
};

export default useFollowMouse;
