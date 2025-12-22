import React from 'react';
import { Users } from 'lucide-react';

// Sub-component kecil untuk item tim (Internal use only)
const TeamMember = ({ name, role }: { name: string, role: string }) => (
  <div className="flex items-center gap-4 bg-slate-50 px-6 py-4 rounded-xl border border-slate-100">
    <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center text-slate-500">
      <Users size={24} />
    </div>
    <div className="text-left">
      <h4 className="font-bold text-slate-900">{name}</h4>
      <p className="text-xs text-slate-500 uppercase tracking-wide">{role}</p>
    </div>
  </div>
);

const Team = () => {
  return (
    <section id="team" className="py-20 max-w-7xl mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-slate-900">Tim Pengembang</h2>
        <p className="text-slate-600 mt-2">Didukung oleh para ahli arsitektur sistem pemerintahan.</p>
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        <TeamMember name="Anda (Lead Architect)" role="Creator & Maintainer" />
        <TeamMember name="M2M Community" role="Open Source Contributors" />
        <TeamMember name="AI Assistant" role="Technical Co-Pilot" />
      </div>
    </section>
  );
};

export default Team;