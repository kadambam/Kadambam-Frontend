import React from 'react';
import { ClipboardList, Calculator, CalendarDays, Settings, Home } from 'lucide-react';

const steps = [
  { id: 1, title: "Your Requirement", icon: <ClipboardList size={40} color="#ff4a2a" /> },
  { id: 2, title: "Cost Estimation", icon: <Calculator size={40} color="#ff4a2a" /> },
  { id: 3, title: "Schedule Visit", icon: <CalendarDays size={40} color="#ff4a2a" /> },
  { id: 4, title: "Work Execution", icon: <Settings size={40} color="#ff4a2a" /> },
  { id: 5, title: "Satisfied Delivery", icon: <Home size={40} color="#ff4a2a" /> },
];

const HowWeWork = () => {
  return (
    <section className="py-12 bg-white">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold">How We Work?</h2>
        <p className="text-gray-500">We turn your building ideas into solid structures.</p>
      </div>

      <div className="flex justify-center gap-6 flex-wrap">
        {steps.map((step) => (
          <div key={step.id} className="bg-white shadow-lg rounded-lg p-6 w-52 text-center relative">
            <div className="absolute top-4 right-4 text-4xl font-extrabold text-gray-200">{step.id}</div>
            <div className="mb-4 flex justify-center">{step.icon}</div>
            <h3 className="text-lg font-semibold">{step.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowWeWork;
