import React from 'react';
import { HelpCircle } from 'lucide-react';

// Sub-component FAQ Item
const FAQItem = ({ q, a }: { q: string, a: string }) => (
  <div className="bg-slate-50 rounded-lg p-6 border border-slate-100">
    <h4 className="font-bold text-slate-900 flex items-center gap-2 mb-2">
      <HelpCircle size={16} className="text-blue-600" />
      {q}
    </h4>
    <p className="text-slate-600 ml-6 text-sm leading-relaxed">{a}</p>
  </div>
);

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-white border-t border-slate-200">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-slate-900 text-center mb-10">Pertanyaan Umum (FAQ)</h2>
        <div className="space-y-4">
          <FAQItem 
            q="Apakah toolkit ini gratis?" 
            a="Ya, M2M ArchKit dirilis sebagai Open Source agar bisa digunakan oleh seluruh instansi pemerintah dan vendor TI." 
          />
          <FAQItem 
            q="Software apa yang dibutuhkan?" 
            a="Hanya Microsoft Excel (atau Google Sheets) dan VS Code (untuk diagram Mermaid). Tidak perlu instalasi server." 
          />
          <FAQItem 
            q="Apakah sesuai standar SPBE?" 
            a="Sangat sesuai. Template ADR dan Checklist kami mengacu pada prinsip interoperabilitas dan keamanan data (UU PDP)." 
          />
        </div>
      </div>
    </section>
  );
};

export default FAQ;