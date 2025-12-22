import React from 'react';
import { 
  AlertTriangle, 
  Server, 
  Database, 
  Globe, 
  Cpu, 
  Activity, 
  Lock, 
  ShoppingCart, 
  Users 
} from 'lucide-react';

const VisualComparison = () => {
  return (
    <section className="py-24 bg-slate-50 border-y border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900">Evolusi Arsitektur</h2>
          <p className="text-slate-600 mt-2">Lihat perbedaan dampak kegagalan sistem secara real-time.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* --- LEFT: MONOLITH (The Chaos) --- */}
          <div className="relative group">
            {/* Background Glow Merah */}
            <div className="absolute inset-0 bg-red-500/10 blur-[60px] rounded-full group-hover:bg-red-500/20 transition-all duration-500"></div>
            
            <div className="bg-white/80 backdrop-blur-sm border border-red-100 rounded-3xl p-8 relative shadow-xl overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-orange-500"></div>
              
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h3 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
                    Monolithic
                    <span className="bg-red-100 text-red-700 text-[10px] px-2 py-1 rounded-full border border-red-200 uppercase tracking-wide">Legacy</span>
                  </h3>
                  <p className="text-sm text-slate-500 mt-1">Satu error = Total Blackout</p>
                </div>
                <AlertTriangle className="text-red-500 animate-pulse" />
              </div>

              {/* Visualisasi Spaghetti Code */}
              <div className="h-64 bg-slate-100 rounded-2xl relative flex items-center justify-center border-2 border-dashed border-red-200">
                
                {/* SVG Kabel Semrawut (Background) */}
                <svg className="absolute inset-0 w-full h-full opacity-30 pointer-events-none">
                  <path d="M100,150 Q150,50 200,150 T300,150" fill="none" stroke="#ef4444" strokeWidth="2" />
                  <path d="M120,100 Q180,200 220,100" fill="none" stroke="#ef4444" strokeWidth="2" />
                  <path d="M250,80 Q200,180 150,80" fill="none" stroke="#ef4444" strokeWidth="2" />
                  <circle cx="200" cy="130" r="80" fill="none" stroke="#ef4444" strokeWidth="1" strokeDasharray="5,5" className="animate-[spin_10s_linear_infinite]" />
                </svg>

                {/* Cluster Icons (Tumpuk-tumpuk) */}
                <div className="relative z-10 w-32 h-32">
                   {/* Modul yang saling menempel rapat */}
                   <div className="absolute top-0 left-4 bg-white p-3 rounded-lg shadow-md border border-slate-200">
                      <Users size={20} className="text-slate-400" />
                   </div>
                   <div className="absolute top-8 right-0 bg-white p-3 rounded-lg shadow-md border border-slate-200">
                      <ShoppingCart size={20} className="text-slate-400" />
                   </div>
                   <div className="absolute bottom-2 left-2 bg-white p-3 rounded-lg shadow-md border border-slate-200">
                      <Database size={20} className="text-slate-400" />
                   </div>
                   
                   {/* ERROR CENTER */}
                   <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-500 text-white p-4 rounded-full shadow-[0_0_30px_rgba(239,68,68,0.5)] animate-bounce z-20">
                      <AlertTriangle size={32} />
                   </div>
                </div>

                {/* Overlay System Down */}
                {/* <div className="absolute inset-0 bg-red-900/10 backdrop-blur-[2px] flex items-center justify-center z-30">
                  <div className="bg-red-600 text-white px-6 py-2 rounded-lg font-bold shadow-2xl transform -rotate-6 border-2 border-white">
                    SYSTEM CRASH
                  </div>
                </div> */}
              </div>
            </div>
          </div>


          {/* --- RIGHT: MICROSERVICES (The Future) --- */}
          <div className="relative group">
             {/* Background Glow Biru */}
             <div className="absolute inset-0 bg-blue-500/10 blur-[60px] rounded-full group-hover:bg-blue-500/20 transition-all duration-500"></div>

             <div className="bg-white/80 backdrop-blur-sm border border-blue-100 rounded-3xl p-8 relative shadow-xl overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-500"></div>

              <div className="flex justify-between items-start mb-8">
                <div>
                  <h3 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
                    Microservices
                    <span className="bg-blue-100 text-blue-700 text-[10px] px-2 py-1 rounded-full border border-blue-200 uppercase tracking-wide">M2M Standard</span>
                  </h3>
                  <p className="text-sm text-slate-500 mt-1">Fault Isolation: Satu mati, yang lain jalan.</p>
                </div>
                <div className="flex items-center gap-2">
                    <span className="flex h-3 w-3 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                    <span className="text-xs font-bold text-green-600">Operational</span>
                </div>
              </div>

              {/* Visualisasi Distributed Topology */}
              <div className="h-64 bg-slate-50 rounded-2xl relative flex flex-col items-center justify-center border border-slate-200">
                
                {/* 1. API GATEWAY (Top) */}
                <div className="z-20 bg-slate-900 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg mb-8 flex items-center gap-2">
                   <Globe size={16} /> API Gateway
                </div>

                {/* Connecting Lines (SVG) */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                  {/* Line to User */}
                  <line x1="50%" y1="35%" x2="20%" y2="70%" stroke="#94a3b8" strokeWidth="2" strokeDasharray="6" />
                  {/* Line to Payment (Error) */}
                  <line x1="50%" y1="35%" x2="50%" y2="70%" stroke="#f87171" strokeWidth="2" strokeDasharray="6" className="opacity-50" /> 
                  {/* Line to Data */}
                  <line x1="50%" y1="35%" x2="80%" y2="70%" stroke="#94a3b8" strokeWidth="2" strokeDasharray="6" />
                </svg>

                {/* 2. SERVICES (Bottom Row) */}
                <div className="flex w-full justify-around px-8 z-10">
                   
                   {/* Service A: User (Alive) */}
                   <div className="flex flex-col items-center gap-2">
                      <div className="w-14 h-14 bg-white border-2 border-green-500 rounded-xl flex items-center justify-center shadow-md relative">
                        <Users className="text-green-600" size={24} />
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                      </div>
                      <span className="text-xs font-bold text-slate-600">Identity</span>
                   </div>

                   {/* Service B: Payment (DEAD/ERROR) */}
                   <div className="flex flex-col items-center gap-2">
                      <div className="w-14 h-14 bg-red-50 border-2 border-red-500 rounded-xl flex items-center justify-center shadow-md relative animate-pulse">
                        <AlertTriangle className="text-red-500" size={24} />
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></div>
                      </div>
                      <span className="text-xs font-bold text-red-600">Payment</span>
                   </div>

                   {/* Service C: Data (Alive) */}
                   <div className="flex flex-col items-center gap-2">
                      <div className="w-14 h-14 bg-white border-2 border-green-500 rounded-xl flex items-center justify-center shadow-md relative">
                        <Database className="text-green-600" size={24} />
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                      </div>
                      <span className="text-xs font-bold text-slate-600">Reporting</span>
                   </div>

                </div>

                {/* Traffic Animation Particles (Opsional, visual effect) */}
                <div className="absolute top-[35%] left-[50%] w-2 h-2 bg-blue-500 rounded-full animate-[ping_1s_infinite]"></div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default VisualComparison;