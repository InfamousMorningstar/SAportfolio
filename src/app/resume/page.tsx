'use client';

import { FaGithub, FaLinkedin, FaEnvelope, FaGlobe, FaPrint, FaArrowLeft, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import Link from 'next/link';

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-white text-black print:p-0 p-8 font-sans selection:bg-black selection:text-white">
      
      {/* Print/Nav Controls - Hidden during print */}
      <div className="max-w-[21cm] mx-auto mb-8 flex justify-between items-center print:hidden">
        <Link href="/" className="flex items-center gap-2 text-sm font-medium text-zinc-600 hover:text-black transition-colors">
            <FaArrowLeft /> Back to Portfolio
        </Link>
        <button 
            onClick={() => window.print()} 
            className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-full text-sm font-medium hover:bg-zinc-800 transition-colors shadow-lg"
        >
            <FaPrint /> Download / Print PDF
        </button>
      </div>

      {/* Resume Page - A4 Dimensions */}
      <div className="max-w-[21cm] mx-auto bg-white shadow-2xl print:shadow-none print:w-full min-h-[29.7cm] p-[2cm] relative">
        
        {/* Header */}
        <header className="border-b-2 border-black pb-6 mb-8">
            <h1 className="text-4xl font-black uppercase tracking-tight mb-2 text-center">Salman Ahmad</h1>
            <p className="text-center text-sm font-bold uppercase tracking-widest mb-4">
                Aspiring DevOps Engineer | Containerization | Automation | Homelab Enthusiast
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-zinc-600">
                <span className="flex items-center gap-1"><FaMapMarkerAlt size={10} /> Calgary, AB T1Y 6W9</span>
                <a href="mailto:s.ahmad0147@gmail.com" className="hover:text-black flex items-center gap-1"><FaEnvelope size={10} /> s.ahmad0147@gmail.com</a>
                <span className="flex items-center gap-1"><FaPhone size={10} /> +1-587-500-1477</span>
            </div>
        </header>

        {/* Professional Summary */}
        <section className="mb-8">
            <h2 className="text-lg font-black uppercase border-b border-black mb-3">Professional Summary</h2>
            <p className="text-sm text-zinc-700 text-justify leading-relaxed">
                Motivated and technically skilled IT professional pursuing a Bachelor’s in Computer Information Systems, with a completed Diploma in Software Development. 
                Hands-on experience with containerized environments, server architecture, and systems optimization — including deploying a full-featured home lab using Kubernetes, Docker, and automation scripts. 
                Strong communicator with a background in high-volume service and production settings. Adept at bridging technical solutions with user needs, and passionate about secure, self-hosted, and cost-efficient infrastructure. 
                Eager to apply infrastructure automation and system reliability skills in a DevOps or Site Reliability Engineering role within a fast-paced, collaborative team.
            </p>
        </section>

        {/* 2-Column Layout for Main Content */}
        <div className="grid grid-cols-[1fr_250px] gap-8">
            
            {/* Left Column: Experience & Projects */}
            <main className="flex flex-col gap-6">

                 {/* Technical Projects */}
                 <section>
                    <h2 className="text-lg font-black uppercase border-b border-black mb-4">Selected Projects</h2>
                    
                    {/* Home Lab - Infrastructure */}
                    <div className="mb-5">
                        <div className="flex justify-between items-baseline mb-1">
                            <h3 className="font-bold text-base">TrueNAS SCALE Homelab Cluster</h3>
                            <span className="text-sm font-mono text-zinc-500">Ops & Infrastructure</span>
                        </div>
                        <ul className="list-disc list-outside ml-4 text-sm text-zinc-700 space-y-1 mt-2">
                            <li>Architected a self-hosted <span className="font-semibold">TrueNAS SCALE</span> environment running 10+ microservices including Plex, Sonarr/Radarr, and heavy-duty storage arrays.</li>
                            <li>Orchestrated container orchestration using <span className="font-semibold">Kubernetes</span> and <span className="font-semibold">Docker</span>, streamlining application lifecycle management.</li>
                            <li>Designed a secure networking mesh using <span className="font-semibold">Tailscale VPN</span>, detailed firewall rules, and reverse proxies with Let’s Encrypt TLS termination.</li>
                            <li>Implemented <span className="font-semibold">Netdata</span> and <span className="font-semibold">Prometheus</span> for real-time fleet observability and resource monitoring.</li>
                            <li>Automated offsite backups to Storj and Google Drive using cron jobs and custom Bash scripts.</li>
                        </ul>
                    </div>

                    {/* Inter-Freight Auto - Full Stack */}
                    <div className="mb-5">
                         <div className="flex justify-between items-baseline mb-1">
                            <h3 className="font-bold text-base">Inter-Freight Auto Sales Platform</h3>
                            <span className="text-sm font-mono text-zinc-500">Next.js • Supabase • PostgreSQL</span>
                        </div>
                         <div className="flex justify-between items-baseline mb-2">
                             <a href="https://interfreightautosales.ca" target="_blank" className="text-xs text-blue-600 hover:underline">interfreightautosales.ca</a>
                         </div>
                        <ul className="list-disc list-outside ml-4 text-sm text-zinc-700 space-y-1">
                            <li>Engineered a production-grade automotive dealership platform using <span className="font-semibold">Next.js 15</span> and <span className="font-semibold">Supabase</span> backend.</li>
                            <li>Developed a secure internal dashboard for inventory management, integrating <span className="font-semibold">Zod</span> for runtime schema validation.</li>
                            <li>Implemented intelligent lead tracking and automated CARFAX report integration, improving sales workflow efficiency by 40%.</li>
                        </ul>
                    </div>

                     {/* Starlight Tours - Frontend */}
                     <div className="mb-4">
                        <div className="flex justify-between items-baseline mb-1">
                            <h3 className="font-bold text-base">Starlight Tours Education Platform</h3>
                            <span className="text-sm font-mono text-zinc-500">React 19 • Three.js • WebGL</span>
                        </div>
                        <div className="flex justify-between items-baseline mb-2">
                             <a href="https://starlight-eight-ruby.vercel.app" target="_blank" className="text-xs text-blue-600 hover:underline">starlight-eight-ruby.vercel.app</a>
                         </div>
                        <ul className="list-disc list-outside ml-4 text-sm text-zinc-700 space-y-1">
                            <li>Built an immersive 3D educational experience documenting historical social justice issues using <span className="font-semibold">Three.js</span> and <span className="font-semibold">React Three Fiber</span>.</li>
                            <li>Optimized WebGL performance for smooth rendering of complex particle systems and interactive timelines on consumer hardware.</li>
                        </ul>
                    </div>

                </section>

                {/* Technical Writing */}
                <section>
                     <h2 className="text-lg font-black uppercase border-b border-black mb-4">Technical Writing</h2>
                     <div className="mb-2">
                        <a href="https://medium.com/@Infamous_Morningstar/how-to-run-qbittorrent-with-nordvpn-on-truenas-scale-25-04-0-via-portainer-ca5d7610d4bf" target="_blank" className="font-bold text-sm block hover:underline">
                            How to Run qBittorrent with NordVPN on TrueNAS SCALE via Portainer
                        </a>
                        <p className="text-xs text-zinc-500 italic">Published on Medium</p>
                        <p className="text-sm text-zinc-700 mt-1">
                            Authored a detailed guide covering VPN-secured Docker container deployment using Portainer on TrueNAS SCALE, including network setup, persistent volumes, and recovery strategies.
                        </p>
                     </div>
                </section>
                
                {/* employment - renamed to Professional Experience for ATS */}
                <section>
                    <h2 className="text-lg font-black uppercase border-b border-black mb-4">Professional Experience</h2>
                    
                    <div className="mb-4">
                        <div className="flex justify-between items-baseline mb-1">
                            <h3 className="font-bold text-base">Assembler</h3>
                            <span className="text-sm font-mono text-zinc-500">Sep 2023 - Aug 2024</span>
                        </div>
                        <div className="flex justify-between items-baseline mb-2">
                            <span className="text-sm font-semibold text-zinc-700">DIRTT Environmental Solutions</span>
                            <span className="text-xs text-zinc-500">Calgary, AB</span>
                        </div>
                        <ul className="list-disc list-outside ml-4 text-sm text-zinc-700 space-y-1">
                            <li>Operated Haas CNC and saw machines to process 300+ aluminum components daily.</li>
                            <li>Collaborated with a cross-functional team of 8–10 to maintain 100% production continuity.</li>
                            <li>Enforced 5S organizational practices and safety compliance options.</li>
                            <li>Diagnosed production issues in real time to minimize rework.</li>
                        </ul>
                    </div>

                    <div className="mb-4">
                        <div className="flex justify-between items-baseline mb-1">
                            <h3 className="font-bold text-base">Customer Service Representative</h3>
                            <span className="text-sm font-mono text-zinc-500">Jul 2017 - Dec 2024</span>
                        </div>
                        <div className="flex justify-between items-baseline mb-2">
                            <span className="text-sm font-semibold text-zinc-700">Circle K</span>
                            <span className="text-xs text-zinc-500">Calgary, AB</span>
                        </div>
                        <ul className="list-disc list-outside ml-4 text-sm text-zinc-700 space-y-1">
                            <li>Delivered daily customer service to 150+ patrons in a high-volume environment.</li>
                            <li>Processed POS transactions and inventory audits with 100% accuracy.</li>
                            <li>Trained and onboarded new team members.</li>
                        </ul>
                    </div>
                </section>


            </main>

            {/* Right Column: Skills, Education, Certs */}
            <aside className="flex flex-col gap-6">
                
                {/* Education */}
                <section>
                    <h2 className="text-lg font-black uppercase border-b border-black mb-4">Education</h2>
                    
                    <div className="mb-4">
                        <h3 className="font-bold text-sm">BSc in Computer Information Systems</h3>
                        <p className="text-xs text-zinc-600">Mount Royal University</p>
                        <p className="text-xs font-mono text-zinc-500">Sep 2024 - Jan 2027</p>
                        <p className="text-xs text-zinc-500 mt-1">Focus: Systems Admin, Cloud Infra, DevOps</p>
                    </div>

                    <div className="mb-4">
                        <h3 className="font-bold text-sm">Diploma in Software Development</h3>
                        <p className="text-xs text-zinc-600">SAIT</p>
                        <p className="text-xs font-mono text-zinc-500">Jan 2020 - Jan 2023</p>
                        <p className="text-xs text-zinc-500 mt-1">Focus: Java, Relational DBs, Agile</p>
                    </div>
                </section>

                {/* Technical Skills */}
                <section>
                    <h2 className="text-lg font-black uppercase border-b border-black mb-4">Technical Skills</h2>
                    
                    <div className="mb-3">
                        <h3 className="text-xs font-bold uppercase text-zinc-500 mb-1">Programming</h3>
                        <p className="text-xs text-zinc-700">JavaScript, Java, HTML, MySQL, Bash</p>
                    </div>

                    <div className="mb-3">
                        <h3 className="text-xs font-bold uppercase text-zinc-500 mb-1">Systems & Cloud</h3>
                        <p className="text-xs text-zinc-700">Linux, Docker, Kubernetes, Portainer, TrueNAS</p>
                    </div>

                    <div className="mb-3">
                        <h3 className="text-xs font-bold uppercase text-zinc-500 mb-1">Networking</h3>
                        <p className="text-xs text-zinc-700">Tailscale, ZFS, Reverse Proxy, Firewall Config</p>
                    </div>
                </section>

                {/* Certifications */}
                <section>
                    <h2 className="text-lg font-black uppercase border-b border-black mb-4">Certifications</h2>
                    <ul className="space-y-2">
                        <li className="text-xs">
                            <strong className="block text-black">AWS Certified Cloud Practitioner</strong>
                        </li>
                         <li className="text-xs">
                            <strong className="block text-black">Linux Essentials – LPI</strong>
                            <span className="text-zinc-500 italic">In Progress</span>
                        </li>
                        <li className="text-xs">
                            <strong className="block text-black">Docker for Beginners</strong>
                            <span className="text-zinc-500">Coursera</span>
                        </li>
                        <li className="text-xs">
                            <strong className="block text-black">CI/CD Pipelines with Jenkins</strong>
                            <span className="text-zinc-500">LinkedIn Learning</span>
                        </li>
                         <li className="text-xs">
                            <strong className="block text-black">First Aid Certification</strong>
                            <span className="text-zinc-500">2023</span>
                        </li>
                    </ul>
                </section>

            </aside>
        </div>

        {/* Footer */}
        <div className="absolute bottom-[1.5cm] left-[2cm] right-[2cm] border-t border-dashed border-zinc-300 pt-4 text-center">
             <p className="text-[10px] text-zinc-400 font-mono">
                Resume generated via Live Portfolio at portfolio.ahmxd.net
             </p>
        </div>

      </div>
      
      <style jsx global>{`
        @media print {
            @page {
                size: A4;
                margin: 0;
            }
            body {
                print-color-adjust: exact;
                -webkit-print-color-adjust: exact;
            }
        }
      `}</style>
    </div>
  );
}
