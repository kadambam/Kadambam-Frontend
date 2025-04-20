import React from "react";

const steps = [
    { id: 1, title: "Choose Your Drawing", icon: "📐" },
    { id: 2, title: "Click to Buy", icon: "🛒" },
    { id: 3, title: "Make Payment", icon: "💳" },
    { id: 4, title: "Download It", icon: "⬇️" }
];

const HowWeWork = () => {
    return (
        <section className="bg-white text-center py-12">
            {/* Heading */}
            <h2 className="text-3xl font-bold text-gray-900">How We Work?</h2>
            <p className="text-gray-600 mt-2">Quick and easy steps to get your perfect drawing.</p>

            {/* Steps */}
            <div className="mt-10 flex flex-wrap justify-center gap-6">
                {steps.map((step) => (
                    <div 
                        key={step.id} 
                        className="bg-white shadow-md rounded-lg p-6 w-[250px] text-center relative hover:shadow-lg transition-all"
                    >
                        <div className="text-4xl">{step.icon}</div>
                        <span className="absolute top-2 right-2 text-gray-300 text-4xl font-bold">{step.id}</span>
                        <p className="mt-3 text-gray-800 font-semibold">{step.title}</p>
                    </div>
                ))}
            </div>

            {/* Demo Video Section */}
            <div className="mt-20 px-4 md:px-12 flex justify-center">
                <div className="w-full max-w-5xl">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">Watch Demo</h3>
                    <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
                        <iframe
                            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                            title="Demo Video"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowWeWork;
