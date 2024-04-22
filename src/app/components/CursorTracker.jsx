import React, { useEffect, useRef } from 'react';

const CursorTracker = () => {
  // Using useRef to create references to the DOM nodes
  const spotlightRef = useRef(null);
  const spotlightChildRef = useRef(null);
  const mainRef = useRef(null); // Ensure you have a 'main' container in your actual application

   // Function to move the spotlight effect
   const moveSpotlight = (e) => {
    e.preventDefault();
    const x = e.clientX - 300; // Horizontal offset adjustment
    const y = e.clientY - 350 + window.scrollY; // Vertical offset adjustment including scroll

    if (spotlightRef.current && spotlightChildRef.current) {
      spotlightRef.current.style.left = `${x}px`;
      spotlightRef.current.style.top = `${y}px`;
      spotlightChildRef.current.style.left = `${x}px`;
      spotlightChildRef.current.style.top = `${y}px`;
    }
  };

  useEffect(() => {
    // Main should refer to the outer container where mousemove is to be tracked, adjust accordingly
    const main = document.querySelector('body'); // You might want to reference a specific part of your app
    main.addEventListener('mousemove', moveSpotlight);
    main.addEventListener('touchmove', moveSpotlight);

    // Removing event listeners on cleanup
    return () => {
      main.removeEventListener('mousemove', moveSpotlight);
      main.removeEventListener('touchmove', moveSpotlight);
    };
  }, []);

  return (
    <div className="cursor-box z-50" ref={spotlightRef} >
      <div className="cursor-box-child" ref={spotlightChildRef}  />
    </div>
  );
};

export default CursorTracker;
