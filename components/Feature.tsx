import React from 'react';

interface FeatureProps {
  title: string;
  description: string;
  svgPath: string;
}

const Feature = ({ title, description, svgPath }: FeatureProps) => (
  <div className="bg-white p-8 shadow-lg rounded-xl hover:shadow-2xl transition-shadow duration-300 border border-gray-200">
    <div className="mb-6 bg-red-50 p-4 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
      <svg className="w-12 h-12 text-red-600 animate-bounce-slow" fill="currentColor" viewBox="0 0 24 24" aria-label={title}>
        <path d={svgPath} />
      </svg>
    </div>
    <h4 className="text-2xl font-bold text-gray-900 mb-4 text-center">{title}</h4>
    <p className="text-gray-600 text-center leading-relaxed">{description}</p>
  </div>
);

export default Feature;
