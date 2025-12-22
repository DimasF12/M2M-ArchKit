import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-md border-b border-slate-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-700 rounded-lg flex items-center justify-center text-white font-bold">M</div>
          <span className="font-bold text-xl tracking-tight text-slate-800">M2M ArchKit</span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
          <a href="#Hero" className="hover:text-blue-700 transition-colors">Fitur</a>
          <a href="#preview" className="hover:text-blue-700 transition-colors">Preview</a>
          <a href="#team" className="hover:text-blue-700 transition-colors">Tim</a>
          <a href="#faq" className="hover:text-blue-700 transition-colors">FAQ</a>
        </div>
        <a href="/ToolKit-M2M-ArchKit.zip" download className="bg-blue-700 hover:bg-blue-800 text-white px-5 py-2 rounded-full text-sm font-medium transition-all shadow-md hover:shadow-lg">
          Download v1.0
        </a>
      </div>
    </nav>
  );
};

export default Navbar;