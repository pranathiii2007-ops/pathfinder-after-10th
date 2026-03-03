import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Search, Filter, ArrowRight, Beaker, Calculator, Palette } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';
import { Link, useLocation } from 'react-router-dom';

const streamsData = [
  {
    id: 'science',
    title: 'Science',
    icon: Beaker,
    color: 'bg-blue-50 text-blue-600 border-blue-200',
    description: 'For students interested in technology, medicine, research, and pure sciences.',
    subjects: ['Physics', 'Chemistry', 'Mathematics (PCM)', 'Biology (PCB)', 'Computer Science'],
    suits: ['Analytical thinkers', 'Problem solvers', 'Tech enthusiasts', 'Future doctors/engineers'],
    nextSteps: [
      { name: 'Engineering (B.Tech/B.E)', link: '/after-12th#engineering' },
      { name: 'Medicine (MBBS/BDS)', link: '/after-12th#mbbs' },
      { name: 'Pure Sciences (B.Sc)', link: '/after-12th#bsc' },
      { name: 'Pharmacy (B.Pharm)', link: '/after-12th#pharmacy' },
      { name: 'Computer Applications (BCA)', link: '/after-12th#bca' },
    ],
    tags: ['tech', 'medical', 'research', 'engineering']
  },
  {
    id: 'commerce',
    title: 'Commerce',
    icon: Calculator,
    color: 'bg-emerald-50 text-emerald-600 border-emerald-200',
    description: 'For students interested in business, finance, economics, and corporate management.',
    subjects: ['Accountancy', 'Business Studies', 'Economics', 'Mathematics', 'Informatics Practices'],
    suits: ['Number crunchers', 'Business-minded', 'Organized planners', 'Future entrepreneurs'],
    nextSteps: [
      { name: 'Bachelor of Commerce (B.Com)', link: '/after-12th#bcom' },
      { name: 'Business Administration (BBA)', link: '/after-12th#bba' },
      { name: 'Chartered Accountancy (CA)', link: '/professional#ca' },
      { name: 'Company Secretary (CS)', link: '/professional#cs' },
      { name: 'Banking & Finance', link: '/after-12th#banking' },
    ],
    tags: ['business', 'finance', 'management', 'accounting']
  },
  {
    id: 'arts',
    title: 'Arts & Humanities',
    icon: Palette,
    color: 'bg-purple-50 text-purple-600 border-purple-200',
    description: 'For students interested in society, culture, law, media, and creative fields.',
    subjects: ['History', 'Political Science', 'Geography', 'Psychology', 'Sociology', 'Literature'],
    suits: ['Creative thinkers', 'Strong communicators', 'Socially aware', 'Future writers/lawyers'],
    nextSteps: [
      { name: 'Bachelor of Arts (BA)', link: '/after-12th#ba' },
      { name: 'Law (BA LLB)', link: '/after-12th#law' },
      { name: 'Journalism & Mass Comm.', link: '/after-12th#journalism' },
      { name: 'Psychology', link: '/after-12th#psychology' },
      { name: 'Hotel Management', link: '/alternatives#hotel-management' },
      { name: 'Social Work (BSW)', link: '/after-12th#social-work' },
    ],
    tags: ['creative', 'law', 'media', 'social']
  }
];

export default function Streams() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          element.classList.add('ring-2', 'ring-primary-500', 'ring-offset-2');
          setTimeout(() => {
            element.classList.remove('ring-2', 'ring-primary-500', 'ring-offset-2');
          }, 2000);
        }
      }, 100);
    }
  }, [location]);

  const filters = [
    { id: 'all', label: 'All Streams' },
    { id: 'tech', label: 'Technology' },
    { id: 'medical', label: 'Medical' },
    { id: 'business', label: 'Business' },
    { id: 'creative', label: 'Creative' },
  ];

  const filteredStreams = streamsData.filter(stream => {
    const matchesSearch = stream.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          stream.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          stream.subjects.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesFilter = activeFilter === 'all' || stream.tags.includes(activeFilter);
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Breadcrumbs />
      
      <div className="mb-12">
        <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-4">Choose Your Stream</h1>
        <p className="text-lg text-slate-600 max-w-3xl">
          The stream you choose after 10th grade sets the foundation for your future career. 
          Explore the core subjects, suitability, and career options for each major stream.
        </p>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row gap-4 mb-12 bg-white p-4 rounded-2xl shadow-sm border border-slate-200">
        <div className="relative flex-grow">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-slate-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-3 border border-slate-200 rounded-xl leading-5 bg-slate-50 placeholder-slate-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500 sm:text-sm transition-colors"
            placeholder="Search streams, subjects, or careers..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.onChange)}
          />
        </div>
        <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 hide-scrollbar">
          <Filter className="h-5 w-5 text-slate-400 flex-shrink-0 mr-2" />
          {filters.map(filter => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                activeFilter === filter.id
                  ? 'bg-slate-800 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      {/* Streams Roadmaps */}
      <div className="space-y-16">
        {filteredStreams.length > 0 ? (
          filteredStreams.map((stream, index) => (
            <motion.div 
              key={stream.id}
              id={stream.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden"
            >
              <div className={`p-6 sm:p-10 border-b ${stream.color} bg-opacity-50`}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-white rounded-2xl shadow-sm">
                    <stream.icon size={32} />
                  </div>
                  <h2 className="text-3xl font-bold">{stream.title}</h2>
                </div>
                <p className="text-lg opacity-90 max-w-3xl">{stream.description}</p>
              </div>

              <div className="p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-3 gap-10">
                {/* Left Column: Subjects & Suitability */}
                <div className="lg:col-span-1 space-y-8">
                  <div>
                    <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">What You Study</h3>
                    <ul className="space-y-3">
                      {stream.subjects.map((subject, i) => (
                        <li key={i} className="flex items-center gap-3 text-slate-700 bg-slate-50 px-4 py-2 rounded-lg border border-slate-100">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary-400" />
                          {subject}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">Who It Suits</h3>
                    <ul className="space-y-3">
                      {stream.suits.map((suit, i) => (
                        <li key={i} className="flex items-center gap-3 text-slate-700">
                          <div className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0">
                            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                          </div>
                          {suit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right Column: Roadmap / Next Steps */}
                <div className="lg:col-span-2">
                  <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-6">Top Next Steps (After 12th)</h3>
                  
                  <div className="relative border-l-2 border-slate-200 ml-3 md:ml-0 space-y-6">
                    {stream.nextSteps.map((step, i) => (
                      <div key={i} className="relative pl-8 md:pl-10">
                        {/* Timeline dot */}
                        <div className="absolute left-[-9px] top-1.5 w-4 h-4 rounded-full bg-white border-2 border-primary-500 shadow-sm" />
                        
                        <Link 
                          to={step.link}
                          className="group block bg-white border border-slate-200 rounded-xl p-4 hover:border-primary-300 hover:shadow-md transition-all"
                        >
                          <div className="flex justify-between items-center">
                            <span className="font-semibold text-slate-800 text-lg group-hover:text-primary-600 transition-colors">{step.name}</span>
                            <ArrowRight size={20} className="text-slate-400 group-hover:text-primary-600 group-hover:translate-x-1 transition-all" />
                          </div>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))
        ) : (
          <div className="text-center py-20 bg-white rounded-3xl border border-slate-200">
            <p className="text-slate-500 text-lg">No streams found matching your search criteria.</p>
            <button 
              onClick={() => {setSearchTerm(''); setActiveFilter('all');}}
              className="mt-4 text-primary-600 font-medium hover:underline"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
