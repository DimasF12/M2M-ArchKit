import React from 'react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

const FeatureCard = ({ icon, title, desc }: FeatureCardProps) => (
  <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
    <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-4">
      {icon}
    </div>
    <h3 className="font-bold text-lg text-slate-900 mb-2">{title}</h3>
    <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
  </div>
);

export default FeatureCard;