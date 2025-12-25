import React from 'react';
// Kita tidak butuh ikon Users lagi karena akan diganti foto
// import { Users } from 'lucide-react';

// --- 1. Definisi Tipe Data Anggota Tim ---
type TeamMemberProps = {
  name: string;
  role: string;
  imageUrl: string; // Menambahkan properti untuk URL gambar
};

// --- 2. Data Anggota Tim (Edit foto di sini) ---
const teamData: TeamMemberProps[] = [
  {
    name: "Dimas Firmansyah",
    role: "Leader Tim & Researcher",
    imageUrl: "/team/dimasfir.jpeg",
  },
  {
    name: "Agus Setiawan",
    role: "Researcher",
    imageUrl: "/team/agus.jpeg",
  },
  {
    name: "Najwa Iffa Fadhila",
    role: "Researcher",
    imageUrl: "https://avatars.githubusercontent.com/u/3?v=4", // Placeholder gambar
  },
];


// --- 3. Sub-component TeamMember (Updated) ---
const TeamMember = ({ name, role, imageUrl }: TeamMemberProps) => (
  <div className="flex items-center gap-4 bg-slate-50 px-6 py-4 rounded-xl border border-slate-100 hover:shadow-md transition-all">
    {/* Container Foto */}
    <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-slate-200 shadow-sm">
      <img
        src={imageUrl}
        alt={`Foto ${name}`}
        className="w-full h-full object-cover"
      />
    </div>
    
    <div className="text-left">
      <h4 className="font-bold text-slate-900 text-lg">{name}</h4>
      <p className="text-xs text-slate-500 uppercase tracking-wide font-medium">{role}</p>
    </div>
  </div>
);

// --- 4. Main Component ---
const Team = () => {
  return (
    <section id="team" className="py-24 max-w-7xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-slate-900">Tim Pengembang</h2>
        <p className="text-slate-600 mt-3 text-lg">
          Didukung oleh para ahli arsitektur sistem pemerintahan.
        </p>
      </div>
      
      {/* Looping data tim */}
      <div className="flex flex-wrap justify-center gap-8">
        {teamData.map((member, index) => (
          <TeamMember 
            key={index}
            name={member.name}
            role={member.role}
            imageUrl={member.imageUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default Team;