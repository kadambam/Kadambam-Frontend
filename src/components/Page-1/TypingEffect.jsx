import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

const TypingEffect = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ["Group", "Architect", "Construction","Maintenance","PMC Consultancy"],
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 2000,
      loop: true,
    });

    return () => {
      typed.destroy(); // Cleanup on unmount
    };
  }, []);

  return (
    <div className=" ml-2">
        <span ref={typedRef}></span>
    </div>
  );
};

export default TypingEffect;
