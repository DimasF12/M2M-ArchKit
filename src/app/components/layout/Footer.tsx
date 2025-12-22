import React from 'react';
import { Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Punya Pertanyaan?</h2>
          <p className="mb-6">Tim kami siap membantu implementasi di instansi Anda.</p>
          <a href="mailto:support@m2m-archkit.id" className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-bold transition-colors">
            <Mail size={18} />
            Hubungi Kami via Email
          </a>
        </div>
        
        <hr className="border-slate-800 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>© 2024 M2M ArchKit. MIT License.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">GitHub</a>
            <a href="#" className="hover:text-white">Panduan Penggunaan</a>
            <a href="#" className="hover:text-white">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;