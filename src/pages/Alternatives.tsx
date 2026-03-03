import Breadcrumbs from '../components/Breadcrumbs';
import { motion } from 'motion/react';
import { Wrench, GraduationCap, Shield, ArrowRight, Clock, CheckCircle, Briefcase } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const alternativesData = [
  {
    id: 'polytechnic',
    title: 'Polytechnic Diplomas',
    icon: Wrench,
    color: 'bg-orange-50 text-orange-600 border-orange-200',
    description: '3-year engineering diploma courses that provide practical, industry-ready skills right after 10th.',
    duration: '3 Years',
    eligibility: '10th Pass (Minimum 35-50% depending on state/college)',
    options: ['Civil Engineering', 'Mechanical Engineering', 'Computer Engineering', 'Electrical Engineering', 'Electronics & Communication'],
    outcomes: ['Junior Engineer roles in Govt/Private sector', 'Direct admission to 2nd year B.Tech (Lateral Entry)', 'Technical supervisor roles'],
  },
  {
    id: 'vocational',
    title: 'Vocational & Skill-Based',
    icon: GraduationCap,
    color: 'bg-pink-50 text-pink-600 border-pink-200',
    description: 'Short-term, job-oriented courses focusing on specific trades and practical skills.',
    duration: '6 Months to 2 Years',
    eligibility: '10th Pass',
    options: ['Hotel Management & Catering', 'Fashion Design & Tailoring', 'Animation & Graphic Design', 'Paramedical (Nursing Assistant, Lab Tech)', 'Agriculture & Farming Tech'],
    outcomes: ['Immediate employment in specialized sectors', 'Self-employment / Freelancing', 'Entry-level technician roles'],
  },
  {
    id: 'defense',
    title: 'Defense Preparation',
    icon: Shield,
    color: 'bg-slate-100 text-slate-700 border-slate-300',
    description: 'Early preparation for a disciplined and prestigious career in the Indian Armed Forces.',
    duration: 'Varies (Preparation phase)',
    eligibility: '10th Pass (for specific trades) / 12th Pass (for NDA)',
    options: ['NDA (National Defence Academy) Prep', 'Indian Army (Soldier General Duty/Tradesman)', 'Indian Navy (Matric Recruit)', 'Indian Airforce (Group Y Non-Technical)'],
    outcomes: ['Commissioned Officer (via NDA after 12th)', 'Non-Commissioned Ranks (direct entry after 10th)', 'Job security and national service'],
  }
];

export default function Alternatives() {
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

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Breadcrumbs />
      
      <div className="mb-12">
        <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-4">Alternative Career Paths</h1>
        <p className="text-lg text-slate-600 max-w-3xl">
          Not interested in the traditional 11th and 12th route? Explore these practical, skill-based, and direct-employment options available right after 10th grade.
        </p>
      </div>

      <div className="space-y-12">
        {alternativesData.map((alt, index) => (
          <motion.div 
            key={alt.id}
            id={alt.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden"
          >
            <div className={`p-6 sm:p-8 border-b ${alt.color} bg-opacity-50 flex items-center gap-4`}>
              <div className="p-3 bg-white rounded-2xl shadow-sm">
                <alt.icon size={32} />
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold">{alt.title}</h2>
                <p className="text-base sm:text-lg opacity-90 mt-1 max-w-3xl">{alt.description}</p>
              </div>
            </div>

            <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Info Column */}
              <div className="space-y-6">
                <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100">
                  <div className="flex items-center gap-3 mb-2 text-slate-700 font-semibold">
                    <Clock size={20} className="text-primary-500" />
                    Duration
                  </div>
                  <p className="text-slate-600 pl-8">{alt.duration}</p>
                </div>
                
                <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100">
                  <div className="flex items-center gap-3 mb-2 text-slate-700 font-semibold">
                    <CheckCircle size={20} className="text-green-500" />
                    Eligibility
                  </div>
                  <p className="text-slate-600 pl-8">{alt.eligibility}</p>
                </div>
              </div>

              {/* Options Column */}
              <div>
                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">Popular Courses / Routes</h3>
                <ul className="space-y-3">
                  {alt.options.map((option, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary-400 mt-2 flex-shrink-0" />
                      <span className="leading-relaxed">{option}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Outcomes Column */}
              <div>
                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">Career Outcomes</h3>
                <div className="space-y-4">
                  {alt.outcomes.map((outcome, i) => (
                    <div key={i} className="flex items-start gap-3 bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
                      <Briefcase size={20} className="text-primary-500 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700 font-medium text-sm leading-snug">{outcome}</span>
                    </div>
                  ))}
                </div>
                
                {alt.id === 'defense' && (
                  <Link to="/professional#nda" className="mt-6 inline-flex items-center justify-center w-full px-4 py-3 border border-transparent text-sm font-medium rounded-xl text-white bg-slate-800 hover:bg-slate-900 shadow-sm transition-all">
                    View NDA Roadmap
                    <ArrowRight className="ml-2 -mr-1 h-4 w-4" />
                  </Link>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
