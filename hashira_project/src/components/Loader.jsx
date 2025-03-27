import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Loader = () => {
  const containerRef = useRef(null);
  const lettersRef = useRef([]);

  useEffect(() => {
    const letters = lettersRef.current;
    
    const tl = gsap.timeline({
      repeat: -1,
      repeatDelay: 0.5
    });

    // Initial setup
    gsap.set(letters, {
      opacity: 0,
      y: 50
    });

    // Animate each letter
    tl.to(letters, {
      duration: 0.5,
      opacity: 1,
      y: 0,
      stagger: {
        each: 0.1,
        ease: "power2.out"
      }
    })
    .to(letters, {
      duration: 0.3,
      scale: 1.2,
      color: "#4F46E5", // Indigo color
      stagger: {
        each: 0.1,
        repeat: 1,
        yoyo: true
      }
    })
    .to(letters, {
      duration: 0.5,
      opacity: 0,
      y: -50,
      stagger: {
        each: 0.1,
        ease: "power2.in"
      },
      delay: 1
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-90 z-50"
    >
      <div className="flex flex-col items-center">
        <div className="flex space-x-2">
          {'HASHIRAS'.split('').map((letter, index) => (
            <span
              key={index}
              ref={el => lettersRef.current[index] = el}
              className="text-4xl md:text-6xl font-bold text-white"
              style={{ textShadow: '0 0 10px rgba(255,255,255,0.3)' }}
            >
              {letter}
            </span>
          ))}
        </div>
        <div className="mt-4 w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-pulse rounded-full"></div>
      </div>
    </div>
  );
};

export default Loader;