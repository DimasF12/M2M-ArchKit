'use client';
import React, { useState } from 'react';
import { 
  Folder, 
  FileSpreadsheet, 
  FileCode, 
  FileText, 
  ChevronRight, 
  ChevronDown,
  Layout,
  CheckSquare
} from 'lucide-react';

// --- DATA STRUKTUR FILE ---
const files = [
  {
    id: 'strategy',
    name: '01-Strategy',
    file: 'decomposition.xlsx',
    type: 'excel',
    desc: 'Matriks penilaian risiko & seleksi modul.',
    icon: <FileSpreadsheet size={16} className="text-green-600" />
  },
  {
    id: 'visuals',
    name: '02-Visuals',
    file: 'c4-diagram.mermaid',
    type: 'code',
    desc: 'Kode diagram arsitektur otomatis.',
    icon: <FileCode size={16} className="text-blue-600" />
  },
  {
    id: 'decisions',
    name: '03-Decisions',
    file: 'M2M-ArchKit_v1.0.xlsx',
    type: 'excel',
    desc: 'Dashboard status ADR warna-warni.',
    icon: <Layout size={16} className="text-green-600" />
  }
];

const Preview = () => {
  const [activeId, setActiveId] = useState('decisions');

  // Cari file yang sedang aktif
  const activeFile = files.find(f => f.id === activeId) || files[0];

  return (
    <section id="preview" className="py-24 bg-slate-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900">Intip Isi Toolkit</h2>
          <p className="text-slate-600 mt-2">Klik folder di bawah untuk melihat preview dokumen asli.</p>
        </div>

        {/* --- WINDOW CONTAINER (Mirip VS Code / Mac Finder) --- */}
        <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col md:flex-row h-[500px]">
          
          {/* 1. SIDEBAR (File Explorer) */}
          <div className="w-full md:w-1/3 bg-slate-50 border-r border-slate-200 flex flex-col">
            {/* Window Dots */}
            <div className="h-12 border-b border-slate-200 flex items-center px-4 gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
              <span className="ml-2 text-xs text-slate-400 font-mono">M2M-Explorer</span>
            </div>

            {/* List Folder */}
            <div className="p-4 space-y-2 overflow-y-auto">
              <div className="text-xs font-bold text-slate-400 mb-2 uppercase tracking-wider">Project Files</div>
              
              {files.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveId(item.id)}
                  className={`w-full flex items-center gap-3 px-3 py-3 rounded-lg text-sm transition-all duration-200 group ${
                    activeId === item.id 
                      ? 'bg-blue-50 text-blue-700 border border-blue-100 shadow-sm' 
                      : 'hover:bg-white hover:shadow-sm text-slate-600 border border-transparent'
                  }`}
                >
                  {/* Folder Icon Animation */}
                  <div className={`transition-transform duration-200 ${activeId === item.id ? 'rotate-90' : ''}`}>
                    {activeId === item.id ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
                  </div>
                  
                  <Folder size={18} className={`${activeId === item.id ? 'text-blue-500 fill-blue-100' : 'text-slate-400 group-hover:text-blue-400'}`} />
                  
                  <div className="flex flex-col items-start">
                    <span className="font-medium">{item.name}</span>
                    <span className="text-[10px] opacity-70 flex items-center gap-1">
                      {item.icon} {item.file}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* 2. PREVIEW AREA (Kanan) */}
          <div className="w-full md:w-2/3 bg-white relative flex flex-col">
            
            {/* Header File Name */}
            <div className="h-12 border-b border-slate-100 flex items-center justify-between px-6 bg-white">
              <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
                {activeFile.icon}
                {activeFile.file}
              </div>
              <span className="text-xs text-slate-400">{activeFile.desc}</span>
            </div>

            {/* Content Area (Scrollable) */}
            <div className="flex-1 p-8 bg-slate-50/50 overflow-y-auto flex items-center justify-center">
              {/* TIPE 1: DASHBOARD EXCEL */}
              {activeFile.type === 'dashboard' && (
                <div className="w-full max-w-md bg-white rounded-lg shadow-lg border border-slate-200 p-1 animate-fade-in-up">
                  <div className="bg-green-600 h-8 rounded-t flex items-center px-3 text-white text-xs font-bold">Microsoft Excel</div>
                  <div className="p-4 grid gap-3">
                    <div className="flex gap-2 mb-2">
                       <div className="h-8 w-24 bg-green-100 rounded text-green-800 text-xs flex items-center justify-center font-bold">Accepted</div>
                       <div className="h-8 w-24 bg-red-100 rounded text-red-800 text-xs flex items-center justify-center font-bold">Rejected</div>
                    </div>
                    {/* Fake Rows */}
                    {[1, 2, 3, 4].map(i => (
                      <div key={i} className="flex gap-2 items-center text-xs text-slate-600 border-b border-slate-100 pb-2">
                        <span className="w-16 font-mono text-slate-400">ADR-00{i}</span>
                        <div className="flex-1 h-2 bg-slate-100 rounded-full"></div>
                        <div className={`w-16 h-4 rounded ${i===3 ? 'bg-red-200' : 'bg-green-200'}`}></div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TIPE 2: CODE / MERMAID (IMAGE PREVIEW) */}
              {activeFile.type === 'code' && (
                <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden animate-fade-in-up">
                  
                  {/* Header Window ala VS Code Preview */}
                  <div className="bg-slate-800 px-4 py-2 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                       <span className="text-xs text-slate-400">Mermaid Preview</span>
                    </div>
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-600"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-600"></div>
                    </div>
                  </div>

                  {/* Area Gambar Diagram */}
                  <div className="relative bg-slate-50 p-4 flex items-center justify-center min-h-[300px]">
                    {/* Background Grid Pattern supaya terlihat teknis */}
                    <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                    <img 
                      src="/c4-diagram.png" 
                      alt="C4 Container Diagram Preview" 
                      className="max-w-full h-auto shadow-sm rounded border border-slate-200"
                    />
                  </div>
                </div>
              )}

              {/* TIPE 3: EXCEL BIASA */}
              {activeFile.type === 'excel' && (
                <div className="w-full max-w-md bg-white rounded-lg shadow-lg border border-slate-200 animate-fade-in-up">
                  <div className="grid grid-cols-4 border-b border-slate-200 bg-slate-50 text-[10px] text-slate-500 font-bold p-2">
                    <span>Modul</span>
                    <span>Risiko</span>
                    <span>Kompleksitas</span>
                    <span>Keputusan</span>
                  </div>
                  <div className="p-2 space-y-3">
                    <div className="grid grid-cols-4 items-center text-xs gap-2">
                       <span className="font-bold">Payment</span>
                       <span className="bg-red-100 text-red-600 px-1 rounded text-center">Critical</span>
                       <div className="w-full h-1 bg-slate-200 rounded"><div className="w-3/4 h-full bg-blue-500 rounded"></div></div>
                       <span className="text-green-600 font-bold">GO</span>
                    </div>
                    <div className="grid grid-cols-4 items-center text-xs gap-2">
                       <span className="font-bold">Report</span>
                       <span className="bg-green-100 text-green-600 px-1 rounded text-center">Low</span>
                       <div className="w-full h-1 bg-slate-200 rounded"><div className="w-1/4 h-full bg-blue-500 rounded"></div></div>
                       <span className="text-green-600 font-bold">GO</span>
                    </div>
                    <div className="grid grid-cols-4 items-center text-xs gap-2 opacity-50">
                       <span className="font-bold">Payroll</span>
                       <span className="bg-red-100 text-red-600 px-1 rounded text-center">High</span>
                       <div className="w-full h-1 bg-slate-200 rounded"><div className="w-full h-full bg-red-500 rounded"></div></div>
                       <span className="text-slate-600 font-bold">HOLD</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Preview;