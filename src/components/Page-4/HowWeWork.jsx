import React from "react";

const steps = [
    { id: 1, title: "Your Requirement", icon: "📋" },
    { id: 2, title: "Cost Estimation", icon: "💰" },
    { id: 3, title: "Schedule Visit", icon: "🏡" },
    { id: 4, title: "Work Execution", icon: "⚙️" },
    { id: 5, title: "Satisfied Delivery", icon: "✨" }
];

const HowWeWork = () => {
    return (
        <section className=" bg-white text-center ">
            {/* Heading */}
            <h2 className="text-3xl font-bold text-gray-900">How We Work?</h2>
            <p className="text-gray-600 mt-2">We turn your building ideas into solid structures.</p>

            {/* Steps */}
            <div className="mt-8 flex flex-wrap justify-center gap-6">
                {steps.map((step) => (
                    <div 
                        key={step.id} 
                        className="bg-white shadow-md rounded-lg p-6 w-[250px] text-center relative hover:shadow-lg transition-all"
                    >
                        {/* Icon */}
                        <div className="text-4xl">{step.icon}</div>
                        
                        {/* Step Number */}
                        <span className="absolute top-2 right-2 text-gray-300 text-4xl font-bold">
                            {step.id}
                        </span>

                        {/* Title */}
                        <p className="mt-3 text-gray-800 font-semibold">{step.title}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default HowWeWork;
