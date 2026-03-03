import { useState } from 'react';
import { motion } from 'motion/react';
import { Search, Cpu, Briefcase, Palette, Code, Stethoscope, LineChart, Megaphone, Globe, Zap, ArrowRight, CheckCircle } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';

const internshipData = [
  // Science - Tech
  {
    id: 'ai-prompt',
    title: 'AI Prompt Engineer Intern',
    stream: 'Science',
    category: 'Tech',
    icon: Cpu,
    stipend: '₹15k - ₹30k / month',
    skills: ['LLMs', 'Python', 'Creative Writing', 'Logic'],
    why2026: 'As AI integrates into every product, companies need specialists to interact with and fine-tune AI models.',
    color: 'bg-blue-50 text-blue-600 border-blue-100',
    link: 'https://www.linkedin.com/jobs/search/?keywords=AI%20Prompt%20Engineer%20Intern'
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity Analyst Intern',
    stream: 'Science',
    category: 'Tech',
    icon: Shield,
    stipend: '₹10k - ₹25k / month',
    skills: ['Network Security', 'Ethical Hacking', 'Linux'],
    why2026: 'With rising digital threats and data privacy laws, security is a top priority for all tech firms in 2026.',
    color: 'bg-slate-50 text-slate-700 border-slate-200',
    link: 'https://internshala.com/internships/cyber-security-internship/'
  },
  // Science - Medical/Bio
  {
    id: 'healthtech',
    title: 'HealthTech Product Intern',
    stream: 'Science',
    category: 'Medical',
    icon: Stethoscope,
    stipend: '₹10k - ₹20k / month',
    skills: ['Healthcare Knowledge', 'Data Analysis', 'Product Management'],
    why2026: 'The intersection of healthcare and technology (telemedicine, wearable tech) is booming.',
    color: 'bg-emerald-50 text-emerald-600 border-emerald-100',
    link: 'https://wellfound.com/role/product-manager'
  },
  // Commerce
  {
    id: 'fintech',
    title: 'FinTech Operations Intern',
    stream: 'Commerce',
    category: 'Finance',
    icon: LineChart,
    stipend: '₹12k - ₹25k / month',
    skills: ['Financial Modeling', 'Blockchain Basics', 'Excel/SQL'],
    why2026: 'Digital banking, crypto regulations, and micro-investing platforms are reshaping traditional finance.',
    color: 'bg-amber-50 text-amber-600 border-amber-100',
    link: 'https://www.linkedin.com/jobs/search/?keywords=FinTech%20Intern'
  },
  {
    id: 'esg-analyst',
    title: 'ESG Consultant Intern',
    stream: 'Commerce',
    category: 'Business',
    icon: Globe,
    stipend: '₹15k - ₹25k / month',
    skills: ['Sustainability Reporting', 'Research', 'Corporate Law'],
    why2026: 'Environmental, Social, and Governance (ESG) compliance is now mandatory for large corporations.',
    color: 'bg-teal-50 text-teal-600 border-teal-100',
    link: 'https://www.linkedin.com/jobs/search/?keywords=ESG%20Intern'
  },
  {
    id: 'growth-hacker',
    title: 'Digital Growth Hacker',
    stream: 'Commerce',
    category: 'Marketing',
    icon: Zap,
    stipend: '₹10k - ₹30k / month',
    skills: ['Data Analytics', 'SEO/SEM', 'A/B Testing'],
    why2026: 'Companies are moving away from traditional marketing to data-driven, rapid-experimentation growth strategies.',
    color: 'bg-rose-50 text-rose-600 border-rose-100',
    link: 'https://internshala.com/internships/digital-marketing-internship/'
  },
  // Arts
  {
    id: 'ux-spatial',
    title: 'UX/UI Designer (Spatial/AR)',
    stream: 'Arts',
    category: 'Design',
    icon: Palette,
    stipend: '₹15k - ₹35k / month',
    skills: ['Figma', '3D Modeling', 'User Psychology'],
    why2026: 'With the rise of AR/VR headsets, designing for 3D spatial environments is the next frontier for designers.',
    color: 'bg-purple-50 text-purple-600 border-purple-100',
    link: 'https://wellfound.com/role/ui-ux-designer'
  },
  {
    id: 'ai-content',
    title: 'AI Content Strategist',
    stream: 'Arts',
    category: 'Media',
    icon: Megaphone,
    stipend: '₹10k - ₹20k / month',
    skills: ['Copywriting', 'AI Tools (Midjourney, ChatGPT)', 'Editing'],
    why2026: 'Content creation is now hybrid. Human creativity paired with AI generation speed is highly sought after.',
    color: 'bg-pink-50 text-pink-600 border-pink-100',
    link: 'https://internshala.com/internships/content-writing-internship/'
  }
];

// Helper icon component since Shield was missing in the import above
function Shield(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    </svg>
  );
}

export default function Internships() {
  const [activeStream, setActiveStream] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const streams = ['All', 'Science', 'Commerce', 'Arts'];

  const filteredInternships = internshipData.filter(internship => {
    const matchesStream = activeStream === 'All' || internship.stream === activeStream;
    const matchesSearch = internship.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          internship.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesStream && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Breadcrumbs />
      
      <div className="text-center max-w-3xl mx-auto mb-16 mt-8">
        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-800 mb-4">
          <Zap size={16} className="mr-2" />
          2026 Edition
        </span>
        <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-6">
          Internships for the Future
        </h1>
        <p className="text-xl text-slate-600 leading-relaxed">
          Discover the most in-demand internship roles across Science, Commerce, and Arts for 2026. Build the skills that tomorrow's employers actually want.
        </p>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-12">
        <div className="flex space-x-2 overflow-x-auto pb-2 w-full md:w-auto hide-scrollbar">
          {streams.map(stream => (
            <button
              key={stream}
              onClick={() => setActiveStream(stream)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                activeStream === stream
                  ? 'bg-primary-600 text-white shadow-md'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              {stream}
            </button>
          ))}
        </div>
        
        <div className="relative w-full md:w-72">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-slate-400" />
          </div>
          <input
            type="text"
            placeholder="Search roles or skills..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="block w-full pl-10 pr-3 py-2.5 border border-slate-200 rounded-xl leading-5 bg-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 sm:text-sm transition-all shadow-sm"
          />
        </div>
      </div>

      {/* Internships Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
        {filteredInternships.length > 0 ? (
          filteredInternships.map((internship, index) => (
            <motion.div
              key={internship.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col h-full overflow-hidden"
            >
              <div className="p-6 flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <div className={`inline-flex p-3 rounded-xl ${internship.color}`}>
                    <internship.icon size={24} />
                  </div>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-800">
                    {internship.stream}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-2">{internship.title}</h3>
                <p className="text-sm font-medium text-primary-600 mb-4">{internship.stipend}</p>
                
                <div className="mb-4">
                  <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Why in 2026?</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">{internship.why2026}</p>
                </div>

                <div>
                  <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Key Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {internship.skills.map(skill => (
                      <span key={skill} className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-slate-50 border border-slate-200 text-slate-600">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 mt-auto">
                <a 
                  href={internship.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center text-sm font-medium text-primary-700 hover:text-primary-800 transition-colors"
                >
                  Find on {internship.link.includes('linkedin') ? 'LinkedIn' : internship.link.includes('internshala') ? 'Internshala' : 'Wellfound'} <ArrowRight size={16} className="ml-1" />
                </a>
              </div>
            </motion.div>
          ))
        ) : (
          <div className="col-span-full text-center py-12 bg-white rounded-2xl border border-slate-200 border-dashed">
            <Briefcase className="mx-auto h-12 w-12 text-slate-300 mb-4" />
            <h3 className="text-lg font-medium text-slate-900 mb-1">No internships found</h3>
            <p className="text-slate-500">Try adjusting your search or filter criteria.</p>
          </div>
        )}
      </div>

      {/* How to Land Section */}
      <div className="bg-primary-900 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/pattern/1920/1080?blur=4')] opacity-10 mix-blend-overlay" />
        <div className="relative z-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">How to Land a 2026 Internship</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
              <div className="bg-white/20 w-10 h-10 rounded-full flex items-center justify-center mb-4">
                <span className="font-bold">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Build Proof of Work</h3>
              <p className="text-primary-100 text-sm leading-relaxed">
                Resumes are out. Portfolios are in. Build projects, write case studies, or create content demonstrating your skills in public.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
              <div className="bg-white/20 w-10 h-10 rounded-full flex items-center justify-center mb-4">
                <span className="font-bold">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Master AI Tools</h3>
              <p className="text-primary-100 text-sm leading-relaxed">
                Regardless of your stream, knowing how to use AI tools (ChatGPT, Claude, Midjourney) to 10x your productivity is a baseline requirement.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
              <div className="bg-white/20 w-10 h-10 rounded-full flex items-center justify-center mb-4">
                <span className="font-bold">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Cold Outreach</h3>
              <p className="text-primary-100 text-sm leading-relaxed">
                Don't just apply on portals. Find founders and hiring managers on LinkedIn or Twitter and send them a personalized pitch.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
