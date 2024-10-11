import React from 'react';
import Feature from './Feature'; // Assuming Feature is a reusable component

const FeatureSection = () => {
  const featureData = [
    {
      title: "Instant Connectivity",
      description: "Achieve instantaneous connectivity with our advanced networking solutions, ensuring your business operates without interruptions.",
      svgPath: "M12 3C8.14 3 5 6.14 5 10c0 2.36 1.07 4.49 2.74 5.84a1 1 0 01.26 1.29 1 1 0 01-1.29.26C4.53 15.11 3 12.24 3 10c0-4.42 3.58-8 8-8s8 3.58 8 8c0 2.24-1.53 5.11-3.71 6.09a1 1 0 01-1.29-.26 1 1 0 01.26-1.29C18.93 14.49 20 12.36 20 10c0-3.86-3.14-7-7-7z", // Icon for "Connectivity"
    },
    {
      title: "Advanced Analytics",
      description: "Harness the power of AI-driven analytics to unlock insights and make data-driven decisions that propel your business forward.",
      svgPath: "M12 2a10 10 0 100 20 10 10 0 000-20zm1 15.5l-4-4h3V7h2v10.5h1z", // Icon for "Data Analytics"
    },
    {
      title: "Uncompromising Security",
      description: "Protect your sensitive information with state-of-the-art security protocols designed to guard against emerging threats.",
      svgPath: "M12 1C7.5 1 4 4.5 4 9v6.7c0 2.8 2.2 5.3 5 5.8v1.5h6v-1.5c2.8-.5 5-3 5-5.8V9c0-4.5-3.5-8-8-8zm0 16.7c-1.2 0-2.3-.5-3.1-1.4-.8-.9-1.2-2.1-1.2-3.3v-3c0-1.8 1.5-3.3 3.3-3.3h2.8c1.8 0 3.3 1.5 3.3 3.3v3c0 1.2-.4 2.4-1.2 3.3-.8.9-1.9 1.4-3.1 1.4z", // Icon for "Security"
    },
    {
      title: "User-Friendly Interface",
      description: "Enjoy a clean and intuitive user interface that simplifies navigation and enhances user experience, making tasks effortless.",
      svgPath: "M3 3h18v18H3V3zm2 2v14h14V5H5zm4 3h6v2H9V8zm0 4h6v2H9v-2zm0 4h6v2H9v-2z", // New icon path for "User-Friendly Interface"
    },
    {
      title: "24/7 Customer Support",
      description: "Experience peace of mind with our round-the-clock customer support, ready to assist you whenever you need help.",
      svgPath: "M12 2a10 10 0 100 20 10 10 0 000-20zm1 15l-4-4h3V7h2v10h1z", // New icon path for "Customer Support"
    },
    {
      title: "Scalability",
      description: "Scale your operations effortlessly with our flexible solutions that grow with your business, no matter the size.",
      svgPath: "M12 1c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 19.627 0 13 5.373 1 12 1z", // New icon path for "Scalability"
    },
  ];

  return (
    <section id="feature-section" className="py-16 bg-gray-50">
      <div className="container mx-auto text-center">
        <h3 className="text-2xl text-teal-600 font-bold mb-8">Our Features</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featureData.map((feature, idx) => (
            <Feature
              key={idx}
              title={feature.title}
              description={feature.description}
              svgPath={feature.svgPath}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
