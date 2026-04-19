import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Zap,
  Sparkles,
  ArrowUpRight,
  Monitor,
  ShieldCheck
} from 'lucide-react';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
    setActiveTab(id);
  }
};

  const team = [
    {
      name: "Shivam Mishra",
      role: "Frontend Architect",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400&h=500",
      skills: ["React.js", "Redux", "Framer Motion", "UI/UX"],
      tagline: "Bridging human emotion with pixel perfection.",
      links: { github: "Mishra010405", linkedin: "mshiv05" }
    },
    {
      name: "Rahul Pal",
      role: "Lead Systems Engineer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400&h=500",
      skills: ["Next.js", "PostgreSQL", "Docker", "DevOps"],
      tagline: "Engineering high-availability digital backbones.",
      links: { github: "rahulholkar16", linkedin: "rahulpal01" }
    },
    {
      name: "Harshit Garg",
      role: "Full Stack / AI Specialist",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400&h=500",
      skills: ["Gemini AI", "TanStack Query", "Zustand", "Node.js"],
      tagline: "Infusing intelligence into modern web apps.",
      links: { github: "harshitgarg-03", linkedin: "dev~harsh" }
    }
  ];

  const projects = [
    {
      title: "Path Shala",
      desc: "An enterprise-grade LMS with role-based auth and automated analytics.",
      tech: ["MERN", "Cloudinary", "JWT"],
      type: "LMS Platform",
      link: "https://pathshal-fr.onrender.com/",
    },
    {
      title: "AI Quiz Engine",
      desc: "Generative AI assessment tool utilizing the Gemini API for smart learning.",
      tech: ["Gemini AI", "React", "Node.js"],
      type: "AI Solution",
      link: "https://ai-quiz-frontend-red.vercel.app/",
    },
    {
      title: "Code Master",
      desc: "Advanced coding sandbox and interview preparation ecosystem.",
      tech: ["Next.js", "Prisma", "Docker"],
      type: "Dev Tool",
      link: "https://github.com/rahulholkar16/Code-Master",
    },
    {
      title: "MindVault",
      desc: "Personal knowledge and note management system.",
      tech: ["React", "Node.js", "MongoDB"],
      type: "Productivity App",
      link: "https://mindvault-kappa.vercel.app/",
    },
  ];

  const services = [
    { icon: <Monitor className="w-6 h-6" />, title: "Custom Web Apps", text: "End-to-end MERN & Next.js solutions." },
    { icon: <ShieldCheck className="w-6 h-6" />, title: "Secure Architectures", text: "Robust JWT & Role-based security." },
    { icon: <Sparkles className="w-6 h-6" />, title: "AI Integration", text: "LLM-powered features for your business." }
  ];

  return (
    <div className="min-h-screen bg-[#020205] text-slate-100 font-sans selection:bg-blue-500/30 overflow-x-hidden">
      {/* Dynamic Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-600/10 blur-[150px] rounded-full animate-pulse delay-1000" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
      </div>

      {/* Header */}
      <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 ${isScrolled ? 'py-4 bg-black/50 backdrop-blur-xl border-b border-white/5' : 'py-8 bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <motion.div
            onClick={() => scrollToSection("home")}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 cursor-pointer"
          >
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-tr from-blue-600 to-indigo-500 rounded-xl rotate-12 absolute inset-0 blur-sm opacity-50 group-hover:opacity-100 transition-opacity" />
              <div className="w-10 h-10 bg-gradient-to-tr from-blue-600 to-indigo-500 rounded-xl relative flex items-center justify-center border border-white/20">
                <Zap size={22} className="text-white fill-white" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tighter leading-none">NAVORISE IT</span>
              <span className="text-[10px] tracking-[0.2em] font-bold text-blue-400">CORE WEB TEAM</span>
            </div>
          </motion.div>

          <div className="hidden md:flex items-center gap-8 bg-white/5 px-6 py-2.5 rounded-full border border-white/10 backdrop-blur-md">
            {['home', 'team', 'work'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`text-xs font-bold uppercase tracking-widest transition-all ${activeTab === item ? 'text-blue-400' : 'text-slate-400 hover:text-white'}`}
              >
                {item}
              </button>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block px-6 py-2.5 bg-blue-600 rounded-full text-xs font-black uppercase tracking-widest hover:bg-blue-500 transition-colors shadow-lg shadow-blue-600/20"
          >
            Start Project
          </motion.button>
        </div>
      </nav>

      {/* Hero Section */}
      <header id="home" className="relative pt-48 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold tracking-[0.2em] uppercase mb-8">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              Innovating at NavoRise IT
            </div>
            <h1 className="text-6xl md:text-9xl font-black tracking-tighter mb-8 leading-[0.9]">
              WE RISE <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500">THROUGH CODE.</span>
            </h1>
            <p className="max-w-2xl text-slate-400 text-lg md:text-xl leading-relaxed mb-12">
              The specialized engineering collective within NavoRise IT. We transform ambitious ideas into high-performance digital ecosystems.
            </p>

            <div className="flex flex-wrap gap-12 border-t border-white/10 pt-12">
              {['MERN Stack', 'Next.js 14', 'PostgreSQL', 'AI & Automation'].map((tech) => (
                <div key={tech} className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-widest font-bold text-slate-500 mb-1">Expertise</span>
                  <span className="text-sm font-bold">{tech}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </header>

      {/* Team Showcase */}
      <section id="team" className="py-24 px-6 bg-gradient-to-b from-transparent to-blue-600/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4">THE CORE TEAM</h2>
              <p className="text-slate-400 max-w-md">The masterminds behind every successful deployment at NavoRise.</p>
            </div>
            <div className="text-right">
              <span className="text-6xl font-black text-white/5 select-none">3 ENGINEERS</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, idx) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/10 mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-1">{member.role}</p>
                    <h3 className="text-2xl font-black tracking-tight">{member.name}</h3>
                  </div>
                  <div className="absolute top-6 right-6 flex flex-col gap-3 translate-x-12 group-hover:translate-x-0 transition-transform duration-500">
                    <a href={`https://github.com/${member.links.github}`} className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center hover:bg-blue-600 transition-colors">
                      <Github size={18} />
                    </a>
                    <a href={`https://linkedin.com/in/${member.links.linkedin}`} className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center hover:bg-blue-600 transition-colors">
                      <Linkedin size={18} />
                    </a>
                  </div>
                </div>
                <div className="px-2">
                  <p className="text-sm text-slate-400 mb-4 italic">"{member.tagline}"</p>
                  <div className="flex flex-wrap gap-2">
                    {member.skills.map(s => (
                      <span key={s} className="px-2 py-1 bg-white/5 border border-white/5 rounded text-[10px] font-bold text-slate-500 uppercase">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Scroller */}
      <section id="work" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-black tracking-tighter mb-8 leading-none">
                CRAFTING <br />
                <span className="text-blue-500">SUCCESS</span> STORIES.
              </h2>
              <div className="space-y-8">
                {projects.map((p, idx) => (
                  <motion.div
                    key={p.title}
                    onClick={() => window.open(p.link, "_blank")}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="p-8 bg-white/[0.02] cursor-pointer border border-white/5 rounded-[2rem] hover:bg-white/[0.04] transition-colors group"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest">{p.type}</span>
                        <h4 className="text-2xl font-bold mt-1 group-hover:text-blue-400 transition-colors">{p.title}</h4>
                      </div>
                      <ArrowUpRight className="text-slate-600 group-hover:text-white transition-colors" />
                    </div>
                    <p className="text-slate-400 text-sm mb-6 leading-relaxed">{p.desc}</p>
                    <div className="flex gap-4">
                      {p.tech.map(t => (
                        <span key={t} className="text-xs font-mono text-slate-500">{t}</span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="sticky top-48 aspect-square rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl shadow-blue-500/10">
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800"
                  className="w-full h-full object-cover"
                  alt="Development setup"
                />
                <div className="absolute inset-0 bg-blue-600/20 mix-blend-overlay" />
                <div className="absolute inset-0 p-12 flex flex-col justify-end">
                  <div className="bg-black/60 backdrop-blur-xl border border-white/10 p-8 rounded-3xl">
                    <p className="text-2xl font-bold mb-2">The NavoRise Advantage</p>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      We don't just write code; we engineer scalable solutions that solve real-world problems.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Matrix */}
      <section className="py-24 px-6 border-y border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {services.map((s) => (
            <div key={s.title} className="text-center md:text-left">
              <div className="w-12 h-12 bg-blue-600/10 rounded-2xl flex items-center justify-center text-blue-500 mb-6 mx-auto md:mx-0 border border-blue-500/20 shadow-lg shadow-blue-500/5">
                {s.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 uppercase tracking-tighter">{s.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6 overflow-hidden relative">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-5xl md:text-8xl font-black tracking-tighter mb-12"
          >
            READY TO <br /> <span className="text-blue-500 underline decoration-blue-500/30">SCALE?</span>
          </motion.h2>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <button className="px-10 py-5 bg-white text-black font-black uppercase tracking-widest rounded-2xl hover:bg-blue-500 hover:text-white transition-all transform hover:scale-105 active:scale-95 shadow-xl shadow-white/5">
              Hire NavoRise Core
            </button>
            <button className="px-10 py-5 bg-white/5 border border-white/10 font-black uppercase tracking-widest rounded-2xl hover:bg-white/10 transition-all">
              Meet The Founders
            </button>
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <Zap size={20} className="text-blue-500" />
            <span className="text-lg font-black tracking-tighter">NAVORISE IT</span>
          </div>
          <div className="text-slate-500 text-[10px] font-bold tracking-[0.3em] uppercase">
            © 2026 Core Dev Team | Engineering Excellence
          </div>
          <div className="flex gap-6">
            <a href="https://x.com/Navorise" target="_blank" className="text-slate-400 hover:text-white transition-colors"><Twitter size={18} /></a>
            <a href="https://www.linkedin.com/in/navorise-it-244527404" target="_blank" className="text-slate-400 hover:text-white transition-colors"><Linkedin size={18} /></a>
            <a
              href="https://github.com/navoriseit"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
            >
              <Github size={18} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Mock icons as they were removed from lucide-react
const Twitter = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>
);

const Github = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
);

const Linkedin = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
);

// const SocialLinks = () => {
//   return (
//     <div className="flex gap-4">

//       {/* Twitter / X */}
//       <motion.a
//         href="https://x.com/Navorise"
//         target="_blank"
//         rel="noopener noreferrer"
//         whileHover={{ scale: 1.2 }}
//         className="text-gray-600 hover:text-black"
//       >
//         <Twitter size={24} />
//       </motion.a>

//       {/* GitHub */}
//       <motion.a
//         href="https://github.com/navoriseit"
//         target="_blank"
//         rel="noopener noreferrer"
//         whileHover={{ scale: 1.2 }}
//         className="text-gray-600 hover:text-black"
//       >
//         <Github size={24} />
//       </motion.a>

//       {/* LinkedIn */}
//       <motion.a
//         href="https://www.linkedin.com/in/navorise-it-244527404"
//         target="_blank"
//         rel="noopener noreferrer"
//         whileHover={{ scale: 1.2 }}
//         className="text-gray-600 hover:text-black"
//       >
//         <Linkedin size={24} />
//       </motion.a>

//     </div>
//   );
// };

export default App;