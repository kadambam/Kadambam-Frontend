import React, { useState, useEffect, useRef } from 'react';
import { ClipboardList, Calculator, CalendarDays, Settings, Home } from 'lucide-react';

const steps = [
  { id: 1, title: "Your Requirement", icon: <ClipboardList size={30} color="#ff4a2a" /> },
  { id: 2, title: "Cost Estimation", icon: <Calculator size={30} color="#ff4a2a" /> },
  { id: 3, title: "Schedule Visit", icon: <CalendarDays size={30} color="#ff4a2a" /> },
  { id: 4, title: "Work Execution", icon: <Settings size={30} color="#ff4a2a" /> },
  { id: 5, title: "Satisfied Delivery", icon: <Home size={30} color="#ff4a2a" /> },
];

const HowWeWork = () => {
  const containerRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const isMobile = window.innerWidth < 768; // Adjust breakpoint as needed

    if (isMobile && containerRef.current) {
      const containerWidth = containerRef.current.scrollWidth;
      const stepWidth = containerRef.current.offsetWidth;
      let animationFrameId;
      let startTime;
      const duration = 20000; // Adjust duration for speed (milliseconds)

      const animateScroll = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const scrollAmount = progress * (containerWidth - stepWidth);

        setScrollPosition(scrollAmount);
        containerRef.current.scrollLeft = scrollAmount;

        if (progress < 1) {
          animationFrameId = requestAnimationFrame(animateScroll);
        } else {
          // Loop back to the start after completion
          startTime = null;
          requestAnimationFrame(animateScroll);
        }
      };

      animationFrameId = requestAnimationFrame(animateScroll);

      return () => {
        cancelAnimationFrame(animationFrameId);
      };
    }
  }, []);

  return (
    <section className="py-12 bg-white">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold">How We Work?</h2>
        <p className="text-gray-500">We turn your building ideas into solid structures.</p>
      </div>

      <div
        ref={containerRef}
        className="flex justify-start md:justify-center gap-4 md:gap-6 overflow-x-auto pb-4 scrollbar-hide"
      >
        {steps.map((step) => (
          <div
            key={step.id}
            className="bg-white shadow-lg rounded-lg p-4 md:p-6 w-40 md:w-52 text-center relative flex-shrink-0"
          >
            <div className="absolute top-2 right-2 text-3xl md:text-4xl font-extrabold text-gray-200">{step.id}</div>
            <div className="mb-2 md:mb-4 flex justify-center">{step.icon}</div>
            <h3 className="text-sm md:text-lg font-semibold">{step.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowWeWork;