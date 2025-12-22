import React from 'react';
import { Download, ShieldCheck, Github } from 'lucide-react';

const Hero = () => {
  return (
    <header id="Hero" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold mb-6 border border-blue-100">
        <ShieldCheck size={14} />
        <span>Standardized for SPBE & Enterprise</span>
      </div>
      <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
        Migrasi Monolith ke Microservices <br/> 
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-500">Tanpa Drama, Siap Audit.</span>
      </h1>
      <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
        Toolkit arsitektur lengkap untuk Unit TI Pemerintah & Vendor. 
        Cegah <i>Vendor Lock-in</i> dengan standar M2M.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <a href="/ToolKit-M2M-ArchKit.zip" download className="flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all shadow-xl hover:translate-y-[-2px]">
          <Download size={20} />
          Download Toolkit Gratis
        </a>
        <a href="https://github.com/DimasF12/ToolkitM2M" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 px-8 py-4 rounded-xl text-lg font-bold transition-all">
          <Github size={20} />
          Lihat Repo
        </a>
      </div>
    </header>
  );
};

export default Hero;