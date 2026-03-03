import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Search, Filter, Clock, FileText, Briefcase, IndianRupee, ArrowRight } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';
import { Link, useLocation } from 'react-router-dom';

const after12thData = [
  // Science
  {
    id: 'engineering',
    title: 'Engineering (B.Tech/B.E)',
    stream: 'Science',
    duration: '4 Years',
    exams: 'JEE Main, JEE Advanced, BITSAT, State CETs',
    scope: 'Software, Core Engineering, Data Science, AI/ML',
    salary: '₹4L - ₹20L+ per annum',
    tags: ['tech', '4 years', 'entrance required']
  },
  {
    id: 'mbbs',
    title: 'Medicine (MBBS)',
    stream: 'Science',
    duration: '5.5 Years',
    exams: 'NEET UG',
    scope: 'Doctor, Surgeon, Medical Research, Hospital Administration',
    salary: '₹8L - ₹30L+ per annum',
    tags: ['medical', '5+ years', 'entrance required']
  },
  {
    id: 'bds',
    title: 'Dentistry (BDS)',
    stream: 'Science',
    duration: '5 Years',
    exams: 'NEET UG',
    scope: 'Dentist, Dental Surgeon, Private Practice',
    salary: '₹3L - ₹15L+ per annum',
    tags: ['medical', '5 years', 'entrance required']
  },
  {
    id: 'bsc',
    title: 'Bachelor of Science (B.Sc)',
    stream: 'Science',
    duration: '3-4 Years',
    exams: 'CUET, Merit-based',
    scope: 'Research, Teaching, Data Analysis, Lab Technician',
    salary: '₹2.5L - ₹8L per annum',
    tags: ['research', '3 years', 'merit based']
  },
  {
    id: 'pharmacy',
    title: 'Pharmacy (B.Pharm)',
    stream: 'Science',
    duration: '4 Years',
    exams: 'State CETs, BITSAT',
    scope: 'Pharmacist, Drug Inspector, R&D, Clinical Research',
    salary: '₹3L - ₹10L per annum',
    tags: ['medical', '4 years', 'entrance required']
  },
  {
    id: 'nursing',
    title: 'Nursing (B.Sc Nursing)',
    stream: 'Science',
    duration: '4 Years',
    exams: 'State level exams, Merit-based',
    scope: 'Staff Nurse, Healthcare Administration, Military Nursing',
    salary: '₹3L - ₹8L per annum',
    tags: ['medical', '4 years', 'merit based']
  },
  {
    id: 'bca',
    title: 'Computer Applications (BCA)',
    stream: 'Science',
    duration: '3 Years',
    exams: 'CUET, Merit-based',
    scope: 'Software Developer, System Analyst, IT Support',
    salary: '₹3L - ₹10L per annum',
    tags: ['tech', '3 years', 'merit based']
  },

  // Commerce
  {
    id: 'bcom',
    title: 'Bachelor of Commerce (B.Com)',
    stream: 'Commerce',
    duration: '3-4 Years',
    exams: 'CUET, Merit-based',
    scope: 'Accounting, Finance, Taxation, Banking',
    salary: '₹2.5L - ₹8L per annum',
    tags: ['business', '3 years', 'merit based']
  },
  {
    id: 'bba',
    title: 'Business Administration (BBA)',
    stream: 'Commerce',
    duration: '3-4 Years',
    exams: 'CUET, IPMAT, Merit-based',
    scope: 'Management, HR, Marketing, Sales, Operations',
    salary: '₹3L - ₹12L per annum',
    tags: ['business', '3 years', 'entrance required']
  },
  {
    id: 'ca',
    title: 'Chartered Accountancy (CA)',
    stream: 'Commerce',
    duration: '4.5 - 5 Years',
    exams: 'CA Foundation, Inter, Final',
    scope: 'Audit, Taxation, Financial Advisory, CFO',
    salary: '₹8L - ₹25L+ per annum',
    tags: ['finance', '5+ years', 'entrance required']
  },
  {
    id: 'cs',
    title: 'Company Secretary (CS)',
    stream: 'Commerce',
    duration: '3 - 4 Years',
    exams: 'CSEET, Executive, Professional',
    scope: 'Corporate Governance, Legal Compliance, Board Advisor',
    salary: '₹6L - ₹18L+ per annum',
    tags: ['law', '3 years', 'entrance required']
  },
  {
    id: 'economics',
    title: 'BA/B.Sc Economics',
    stream: 'Commerce',
    duration: '3-4 Years',
    exams: 'CUET, Merit-based',
    scope: 'Economist, Data Analyst, Policy Advisor, Consulting',
    salary: '₹4L - ₹15L per annum',
    tags: ['finance', '3 years', 'merit based']
  },
  {
    id: 'banking',
    title: 'Banking & Finance (BBI)',
    stream: 'Commerce',
    duration: '3 Years',
    exams: 'Merit-based',
    scope: 'Retail Banking, Investment Banking, Insurance',
    salary: '₹3L - ₹10L per annum',
    tags: ['finance', '3 years', 'merit based']
  },

  // Arts
  {
    id: 'ba',
    title: 'Bachelor of Arts (BA)',
    stream: 'Arts',
    duration: '3-4 Years',
    exams: 'CUET, Merit-based',
    scope: 'Civil Services, Teaching, Content Writing, Research',
    salary: '₹2L - ₹6L per annum',
    tags: ['humanities', '3 years', 'merit based']
  },
  {
    id: 'law',
    title: 'Law (BA LLB / BBA LLB)',
    stream: 'Arts',
    duration: '5 Years',
    exams: 'CLAT, AILET, LSAT',
    scope: 'Corporate Lawyer, Litigation, Judiciary, Legal Advisor',
    salary: '₹5L - ₹20L+ per annum',
    tags: ['law', '5 years', 'entrance required']
  },
  {
    id: 'journalism',
    title: 'Journalism & Mass Comm (BJMC)',
    stream: 'Arts',
    duration: '3 Years',
    exams: 'CUET, University specific exams',
    scope: 'Reporter, Editor, PR Professional, Digital Media',
    salary: '₹3L - ₹10L per annum',
    tags: ['media', '3 years', 'entrance required']
  },
  {
    id: 'psychology',
    title: 'BA/B.Sc Psychology',
    stream: 'Arts',
    duration: '3-4 Years',
    exams: 'CUET, Merit-based',
    scope: 'Clinical Psychologist, HR, Counselor, Researcher',
    salary: '₹3L - ₹12L per annum',
    tags: ['medical', '3 years', 'merit based']
  },
  {
    id: 'hotel-management',
    title: 'Hotel Management (BHM)',
    stream: 'Arts',
    duration: '3-4 Years',
    exams: 'NCHMCT JEE',
    scope: 'Hotel Manager, Chef, Event Manager, Tourism',
    salary: '₹3L - ₹12L per annum',
    tags: ['hospitality', '3 years', 'entrance required']
  },
  {
    id: 'social-work',
    title: 'Social Work (BSW)',
    stream: 'Arts',
    duration: '3 Years',
    exams: 'Merit-based, CUET',
    scope: 'NGO Worker, CSR Manager, Community Organizer',
    salary: '₹2.5L - ₹6L per annum',
    tags: ['social', '3 years', 'merit based']
  }
];

export default function After12th() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeStream, setActiveStream] = useState('All');
  const [activeFilter, setActiveFilter] = useState('all');
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          // Highlight the element briefly
          element.classList.add('ring-2', 'ring-primary-500', 'ring-offset-2');
          setTimeout(() => {
            element.classList.remove('ring-2', 'ring-primary-500', 'ring-offset-2');
          }, 2000);
        }
      }, 100);
    }
  }, [location]);

  const streams = ['All', 'Science', 'Commerce', 'Arts'];
  const filters = [
    { id: 'all', label: 'All Options' },
    { id: 'entrance required', label: 'Entrance Required' },
    { id: 'merit based', label: 'Merit Based' },
    { id: '3 years', label: '3 Years' },
    { id: '4 years', label: '4 Years' },
    { id: '5 years', label: '5+ Years' },
  ];

  const filteredData = after12thData.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          item.scope.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStream = activeStream === 'All' || item.stream === activeStream;
    const matchesFilter = activeFilter === 'all' || item.tags.includes(activeFilter);
    return matchesSearch && matchesStream && matchesFilter;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Breadcrumbs />
      
      <div className="mb-12">
        <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-4">Options After 12th</h1>
        <p className="text-lg text-slate-600 max-w-3xl">
          Discover the wide range of degree programs and professional courses available after completing your 12th standard. Filter by your stream to see relevant options.
        </p>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col gap-4 mb-12 bg-white p-4 rounded-2xl shadow-sm border border-slate-200">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-grow">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-slate-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-3 border border-slate-200 rounded-xl leading-5 bg-slate-50 placeholder-slate-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500 sm:text-sm transition-colors"
              placeholder="Search courses, careers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          {/* Stream Tabs */}
          <div className="flex bg-slate-100 p-1 rounded-xl overflow-x-auto hide-scrollbar">
            {streams.map(stream => (
              <button
                key={stream}
                onClick={() => setActiveStream(stream)}
                className={`px-6 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                  activeStream === stream
                    ? 'bg-white text-primary-700 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {stream}
              </button>
            ))}
          </div>
        </div>

        {/* Filter Chips */}
        <div className="flex items-center gap-2 overflow-x-auto pt-2 pb-2 md:pb-0 hide-scrollbar border-t border-slate-100 mt-2">
          <Filter className="h-4 w-4 text-slate-400 flex-shrink-0 mr-2" />
          <span className="text-sm text-slate-500 mr-2">Filters:</span>
          {filters.map(filter => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors border ${
                activeFilter === filter.id
                  ? 'bg-primary-50 border-primary-200 text-primary-700'
                  : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Options */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredData.length > 0 ? (
          filteredData.map((item, index) => (
            <motion.div 
              key={item.id}
              id={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md hover:border-primary-300 transition-all flex flex-col h-full"
            >
              <div className="p-6 flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    item.stream === 'Science' ? 'bg-blue-100 text-blue-800' :
                    item.stream === 'Commerce' ? 'bg-emerald-100 text-emerald-800' :
                    'bg-purple-100 text-purple-800'
                  }`}>
                    {item.stream}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-6 leading-tight">{item.title}</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Clock size={18} className="text-slate-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Duration</p>
                      <p className="text-sm text-slate-800 font-medium">{item.duration}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <FileText size={18} className="text-slate-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Entrance Exams</p>
                      <p className="text-sm text-slate-800 font-medium">{item.exams}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Briefcase size={18} className="text-slate-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Career Scope</p>
                      <p className="text-sm text-slate-800 font-medium leading-snug">{item.scope}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <IndianRupee size={18} className="text-slate-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Starting Salary</p>
                      <p className="text-sm text-slate-800 font-medium">{item.salary}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-4 border-t border-slate-100 bg-slate-50 mt-auto">
                <Link 
                  to={`/professional#${item.id}`} 
                  className="flex items-center justify-center w-full py-2.5 px-4 rounded-xl text-sm font-medium text-primary-700 bg-primary-50 hover:bg-primary-100 transition-colors"
                >
                  View Full Roadmap
                  <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </motion.div>
          ))
        ) : (
          <div className="col-span-full text-center py-20 bg-white rounded-3xl border border-slate-200">
            <p className="text-slate-500 text-lg">No options found matching your search criteria.</p>
            <button 
              onClick={() => {setSearchTerm(''); setActiveStream('All'); setActiveFilter('all');}}
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
