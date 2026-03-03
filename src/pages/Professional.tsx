import { motion } from 'motion/react';
import Breadcrumbs from '../components/Breadcrumbs';
import { CheckCircle, Clock, BookOpen, Briefcase, ChevronDown, Search } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const professionalCourses = [
  // SCIENCE
  {
    id: 'engineering',
    title: 'Engineering (B.Tech/B.E)',
    description: 'A 4-year undergraduate degree in engineering and technology.',
    eligibility: '12th Pass (PCM)',
    duration: '4 Years',
    outcome: 'Software Engineer, Mechanical Engineer, Civil Engineer, etc.',
    color: 'blue',
    steps: [
      { title: 'Entrance Exams', desc: 'Clear JEE Main, JEE Advanced, BITSAT, or State CETs.', duration: '12th Grade', type: 'exam' },
      { title: 'First Year (Common)', desc: 'Study basic sciences and introductory engineering concepts.', duration: 'Year 1', type: 'training' },
      { title: 'Core Engineering', desc: 'Dive into specialized subjects of your chosen branch.', duration: 'Year 2 & 3', type: 'training' },
      { title: 'Internship & Projects', desc: 'Gain practical experience through industry internships and final year projects.', duration: 'Year 3 & 4', type: 'training' },
      { title: 'Graduation & Placement', desc: 'Complete degree and secure a job through campus placements or off-campus.', duration: 'Goal', type: 'milestone' }
    ]
  },
  {
    id: 'mbbs',
    title: 'Medicine (MBBS)',
    description: 'Bachelor of Medicine and Bachelor of Surgery.',
    eligibility: '12th Pass (PCB)',
    duration: '5.5 Years',
    outcome: 'Doctor, Medical Officer, Surgeon (after PG)',
    color: 'emerald',
    steps: [
      { title: 'NEET UG', desc: 'Clear the National Eligibility cum Entrance Test.', duration: '12th Grade', type: 'exam' },
      { title: 'Pre-Clinical', desc: 'Study Anatomy, Physiology, and Biochemistry.', duration: 'Year 1', type: 'training' },
      { title: 'Para-Clinical', desc: 'Study Pathology, Microbiology, Pharmacology, etc.', duration: 'Year 2', type: 'training' },
      { title: 'Clinical', desc: 'Study Medicine, Surgery, Pediatrics, Gynecology, etc.', duration: 'Year 3 & 4', type: 'training' },
      { title: 'Compulsory Internship', desc: '1-year mandatory rotating internship in a hospital.', duration: '1 Year', type: 'training' },
      { title: 'Registration', desc: 'Register with the Medical Council and start practicing or prepare for NEET PG.', duration: 'Goal', type: 'milestone' }
    ]
  },
  {
    id: 'bds',
    title: 'Dentistry (BDS)',
    description: 'Bachelor of Dental Surgery.',
    eligibility: '12th Pass (PCB)',
    duration: '5 Years',
    outcome: 'Dentist, Dental Surgeon',
    color: 'emerald',
    steps: [
      { title: 'NEET UG', desc: 'Clear the National Eligibility cum Entrance Test.', duration: '12th Grade', type: 'exam' },
      { title: 'Basic Sciences', desc: 'Study general medical subjects and basic dental sciences.', duration: 'Year 1 & 2', type: 'training' },
      { title: 'Clinical Dentistry', desc: 'Learn clinical procedures and patient management.', duration: 'Year 3 & 4', type: 'training' },
      { title: 'Internship', desc: '1-year mandatory clinical internship.', duration: '1 Year', type: 'training' },
      { title: 'Practice', desc: 'Start private practice or pursue MDS.', duration: 'Goal', type: 'milestone' }
    ]
  },
  {
    id: 'bsc',
    title: 'Bachelor of Science (B.Sc)',
    description: 'Undergraduate degree in pure or applied sciences.',
    eligibility: '12th Pass (Science)',
    duration: '3-4 Years',
    outcome: 'Researcher, Lab Technician, Data Analyst, Teacher',
    color: 'blue',
    steps: [
      { title: 'Admission', desc: 'Through CUET or merit-based admission in colleges.', duration: 'Entry', type: 'exam' },
      { title: 'Core Subjects', desc: 'Study chosen major (Physics, Chem, Math, Biology, CS, etc.).', duration: 'Year 1 & 2', type: 'training' },
      { title: 'Specialization/Projects', desc: 'Advanced topics and final year project/dissertation.', duration: 'Year 3', type: 'training' },
      { title: 'Graduation', desc: 'Complete degree. Can pursue M.Sc or enter the workforce.', duration: 'Goal', type: 'milestone' }
    ]
  },
  {
    id: 'pharmacy',
    title: 'Pharmacy (B.Pharm)',
    description: 'Undergraduate degree in pharmaceutical sciences.',
    eligibility: '12th Pass (PCM/PCB)',
    duration: '4 Years',
    outcome: 'Pharmacist, Drug Inspector, R&D Scientist',
    color: 'emerald',
    steps: [
      { title: 'Entrance Exams', desc: 'Clear State CETs, BITSAT, or other university exams.', duration: 'Entry', type: 'exam' },
      { title: 'Basic Pharmacy', desc: 'Study Pharmaceutics, Pharmaceutical Chemistry, Pharmacognosy.', duration: 'Year 1 & 2', type: 'training' },
      { title: 'Advanced Pharmacy', desc: 'Study Pharmacology, Industrial Pharmacy, etc.', duration: 'Year 3 & 4', type: 'training' },
      { title: 'Industrial Training', desc: 'Mandatory training in a pharmaceutical company or hospital.', duration: 'During Course', type: 'training' },
      { title: 'Licensing', desc: 'Register with the State Pharmacy Council.', duration: 'Goal', type: 'milestone' }
    ]
  },
  {
    id: 'nursing',
    title: 'Nursing (B.Sc Nursing)',
    description: 'Professional nursing and healthcare degree.',
    eligibility: '12th Pass (PCB)',
    duration: '4 Years',
    outcome: 'Registered Nurse, Healthcare Administrator',
    color: 'emerald',
    steps: [
      { title: 'Entrance Exams', desc: 'Clear state or university level nursing entrance exams.', duration: 'Entry', type: 'exam' },
      { title: 'Foundations', desc: 'Study Anatomy, Physiology, Nutrition, and Nursing Foundations.', duration: 'Year 1', type: 'training' },
      { title: 'Clinical Specialties', desc: 'Medical-Surgical, Pediatric, Psychiatric, and OBG Nursing.', duration: 'Year 2 & 3', type: 'training' },
      { title: 'Internship', desc: 'Intensive clinical practice in hospitals.', duration: 'Year 4', type: 'training' },
      { title: 'Registration', desc: 'Register as a Nurse and Midwife with the Nursing Council.', duration: 'Goal', type: 'milestone' }
    ]
  },
  {
    id: 'bca',
    title: 'Computer Applications (BCA)',
    description: 'Undergraduate degree in computer science and software development.',
    eligibility: '12th Pass (Any stream, Math preferred)',
    duration: '3 Years',
    outcome: 'Software Developer, System Analyst, IT Support',
    color: 'blue',
    steps: [
      { title: 'Admission', desc: 'Through CUET, university exams, or merit-based.', duration: 'Entry', type: 'exam' },
      { title: 'Programming Basics', desc: 'Learn C, C++, Data Structures, and Web Basics.', duration: 'Year 1', type: 'training' },
      { title: 'Advanced Computing', desc: 'Java, Databases, Networking, and Software Engineering.', duration: 'Year 2', type: 'training' },
      { title: 'Projects & Internships', desc: 'Develop software projects and gain industry exposure.', duration: 'Year 3', type: 'training' },
      { title: 'Graduation', desc: 'Enter IT industry or pursue MCA.', duration: 'Goal', type: 'milestone' }
    ]
  },

  // COMMERCE
  {
    id: 'bcom',
    title: 'Bachelor of Commerce (B.Com)',
    description: 'Undergraduate degree in commerce, accounting, and finance.',
    eligibility: '12th Pass (Commerce preferred)',
    duration: '3-4 Years',
    outcome: 'Accountant, Financial Analyst, Tax Consultant',
    color: 'emerald',
    steps: [
      { title: 'Admission', desc: 'Through CUET or merit-based admission.', duration: 'Entry', type: 'exam' },
      { title: 'Core Commerce', desc: 'Study Accounting, Business Law, Economics, and Management.', duration: 'Year 1 & 2', type: 'training' },
      { title: 'Specialization', desc: 'Focus on Taxation, Finance, or Auditing.', duration: 'Year 3', type: 'training' },
      { title: 'Graduation', desc: 'Enter corporate sector or pursue M.Com/MBA/CA.', duration: 'Goal', type: 'milestone' }
    ]
  },
  {
    id: 'bba',
    title: 'Business Administration (BBA)',
    description: 'Undergraduate degree in business management.',
    eligibility: '12th Pass (Any stream)',
    duration: '3-4 Years',
    outcome: 'Management Trainee, HR Executive, Marketing Executive',
    color: 'emerald',
    steps: [
      { title: 'Entrance Exams', desc: 'Clear CUET, IPMAT, SET, or merit-based admission.', duration: 'Entry', type: 'exam' },
      { title: 'Business Fundamentals', desc: 'Study Principles of Management, Marketing, HR, and Finance.', duration: 'Year 1 & 2', type: 'training' },
      { title: 'Specialization & Internships', desc: 'Choose a major and complete corporate internships.', duration: 'Year 3', type: 'training' },
      { title: 'Graduation', desc: 'Start working or pursue an MBA.', duration: 'Goal', type: 'milestone' }
    ]
  },
  {
    id: 'ca',
    title: 'Chartered Accountancy (CA)',
    description: 'A prestigious professional course in accounting, taxation, and auditing conducted by ICAI.',
    eligibility: '12th Pass (Any stream, Commerce preferred)',
    duration: '4.5 to 5 Years',
    outcome: 'Chartered Accountant, Auditor, Tax Consultant, CFO',
    color: 'emerald',
    steps: [
      { title: 'CA Foundation', desc: 'Entry-level exam. 4 papers (Accounting, Law, Quant, Economics).', duration: '6 Months prep', type: 'exam' },
      { title: 'CA Intermediate', desc: 'Second level. 6 papers divided into 2 groups.', duration: '8 Months prep', type: 'exam' },
      { title: 'Articleship Training', desc: 'Practical training under a practicing CA.', duration: '2 Years (Practical)', type: 'training' },
      { title: 'CA Final', desc: 'Final level exam. 6 papers divided into 2 groups.', duration: 'During/After Articleship', type: 'exam' },
      { title: 'ICAI Membership', desc: 'Become a certified Chartered Accountant.', duration: 'Goal', type: 'milestone' }
    ]
  },
  {
    id: 'cs',
    title: 'Company Secretary (CS)',
    description: 'Expert in corporate laws, corporate governance, and compliance conducted by ICSI.',
    eligibility: '12th Pass (Any stream) or Graduates',
    duration: '3 to 4 Years',
    outcome: 'Company Secretary, Legal Advisor, Corporate Planner',
    color: 'blue',
    steps: [
      { title: 'CSEET', desc: 'CS Executive Entrance Test. 4 papers.', duration: 'Entry Level', type: 'exam' },
      { title: 'CS Executive', desc: 'Second level. 7 papers divided into 2 modules.', duration: '9 Months prep', type: 'exam' },
      { title: 'Practical Training', desc: 'Management training in a company or under a practicing CS.', duration: '21 Months', type: 'training' },
      { title: 'CS Professional', desc: 'Final level. 7 papers divided into 2 modules + 2 electives.', duration: 'During/After Training', type: 'exam' },
      { title: 'ICSI Membership', desc: 'Become a certified Company Secretary.', duration: 'Goal', type: 'milestone' }
    ]
  },
  {
    id: 'cma',
    title: 'Cost & Management Accountancy (CMA)',
    description: 'Specialized course in cost management, pricing, and financial planning by ICMAI.',
    eligibility: '12th Pass (Any stream)',
    duration: '3 to 4 Years',
    outcome: 'Cost Accountant, Financial Analyst, Management Consultant',
    color: 'purple',
    steps: [
      { title: 'CMA Foundation', desc: 'Entry-level exam. 4 papers.', duration: 'Entry Level', type: 'exam' },
      { title: 'CMA Intermediate', desc: 'Second level. 8 papers divided into 2 groups.', duration: '10 Months prep', type: 'exam' },
      { title: 'Practical Training', desc: 'Mandatory practical training.', duration: '15 Months', type: 'training' },
      { title: 'CMA Final', desc: 'Final level. 8 papers divided into 2 groups.', duration: 'During/After Training', type: 'exam' },
      { title: 'ICMAI Membership', desc: 'Become a certified Cost Management Accountant.', duration: 'Goal', type: 'milestone' }
    ]
  },
  {
    id: 'economics',
    title: 'BA/B.Sc Economics',
    description: 'Undergraduate degree focusing on economic theory, data analysis, and policy.',
    eligibility: '12th Pass (Math preferred)',
    duration: '3-4 Years',
    outcome: 'Economist, Data Analyst, Policy Advisor',
    color: 'emerald',
    steps: [
      { title: 'Admission', desc: 'Through CUET or merit-based.', duration: 'Entry', type: 'exam' },
      { title: 'Core Economics', desc: 'Micro/Macroeconomics, Statistics, and Mathematics.', duration: 'Year 1 & 2', type: 'training' },
      { title: 'Advanced Topics', desc: 'Econometrics, International Trade, and Public Finance.', duration: 'Year 3', type: 'training' },
      { title: 'Graduation', desc: 'Work in finance/consulting or pursue MA Economics.', duration: 'Goal', type: 'milestone' }
    ]
  },
  {
    id: 'banking',
    title: 'Banking & Finance (BBI)',
    description: 'Specialized degree in banking, insurance, and financial services.',
    eligibility: '12th Pass (Commerce preferred)',
    duration: '3 Years',
    outcome: 'Banker, Financial Advisor, Insurance Agent',
    color: 'emerald',
    steps: [
      { title: 'Admission', desc: 'Merit-based admission in colleges.', duration: 'Entry', type: 'exam' },
      { title: 'Banking Fundamentals', desc: 'Study Principles of Banking, Insurance, and Accounting.', duration: 'Year 1 & 2', type: 'training' },
      { title: 'Specialized Finance', desc: 'Financial Markets, Risk Management, and Auditing.', duration: 'Year 3', type: 'training' },
      { title: 'Graduation', desc: 'Join banks, financial institutions, or prepare for Bank PO exams.', duration: 'Goal', type: 'milestone' }
    ]
  },

  // ARTS
  {
    id: 'ba',
    title: 'Bachelor of Arts (BA)',
    description: 'Undergraduate degree in humanities, social sciences, or languages.',
    eligibility: '12th Pass (Any stream)',
    duration: '3-4 Years',
    outcome: 'Civil Servant, Teacher, Content Writer, Researcher',
    color: 'purple',
    steps: [
      { title: 'Admission', desc: 'Through CUET or merit-based.', duration: 'Entry', type: 'exam' },
      { title: 'Core Subjects', desc: 'Study chosen majors (History, Pol Science, English, etc.).', duration: 'Year 1 & 2', type: 'training' },
      { title: 'Specialization', desc: 'Deep dive into major subjects and electives.', duration: 'Year 3', type: 'training' },
      { title: 'Graduation', desc: 'Prepare for UPSC, pursue MA, B.Ed, or enter the workforce.', duration: 'Goal', type: 'milestone' }
    ]
  },
  {
    id: 'law',
    title: 'Law (BA LLB / BBA LLB)',
    description: 'Integrated 5-year undergraduate law degree.',
    eligibility: '12th Pass (Any stream)',
    duration: '5 Years',
    outcome: 'Lawyer, Legal Advisor, Judge',
    color: 'purple',
    steps: [
      { title: 'Entrance Exams', desc: 'Clear CLAT, AILET, LSAT, or state law entrance exams.', duration: '12th Grade', type: 'exam' },
      { title: 'Foundation', desc: 'Study BA/BBA subjects along with basic law courses.', duration: 'Year 1 & 2', type: 'training' },
      { title: 'Core Law', desc: 'Constitutional Law, Criminal Law, Corporate Law, etc.', duration: 'Year 3 & 4', type: 'training' },
      { title: 'Moot Courts & Internships', desc: 'Practical experience through moot courts and internships under lawyers.', duration: 'Year 4 & 5', type: 'training' },
      { title: 'Bar Council Registration', desc: 'Clear AIBE and register with the Bar Council of India.', duration: 'Goal', type: 'milestone' }
    ]
  },
  {
    id: 'journalism',
    title: 'Journalism & Mass Comm (BJMC)',
    description: 'Degree in media, journalism, and mass communication.',
    eligibility: '12th Pass (Any stream)',
    duration: '3 Years',
    outcome: 'Journalist, PR Professional, Content Creator',
    color: 'purple',
    steps: [
      { title: 'Admission', desc: 'Through CUET or university specific entrance exams.', duration: 'Entry', type: 'exam' },
      { title: 'Media Basics', desc: 'Reporting, Writing, Media History, and Ethics.', duration: 'Year 1', type: 'training' },
      { title: 'Specializations', desc: 'Print, Broadcast, Digital Media, PR, and Advertising.', duration: 'Year 2', type: 'training' },
      { title: 'Internships & Portfolios', desc: 'Work with media houses and build a portfolio.', duration: 'Year 3', type: 'training' },
      { title: 'Graduation', desc: 'Join news agencies, PR firms, or digital media companies.', duration: 'Goal', type: 'milestone' }
    ]
  },
  {
    id: 'psychology',
    title: 'BA/B.Sc Psychology',
    description: 'Study of human mind and behavior.',
    eligibility: '12th Pass (Any stream)',
    duration: '3-4 Years',
    outcome: 'Counselor, HR Professional, Clinical Psychologist (after MA/M.Phil)',
    color: 'purple',
    steps: [
      { title: 'Admission', desc: 'Through CUET or merit-based.', duration: 'Entry', type: 'exam' },
      { title: 'Core Psychology', desc: 'General Psychology, Developmental, and Social Psychology.', duration: 'Year 1 & 2', type: 'training' },
      { title: 'Applied Psychology', desc: 'Abnormal Psychology, Organizational Behavior, and Research Methods.', duration: 'Year 3', type: 'training' },
      { title: 'Graduation', desc: 'Pursue MA/M.Sc in Psychology for clinical or counseling roles.', duration: 'Goal', type: 'milestone' }
    ]
  },
  {
    id: 'hotel-management',
    title: 'Hotel Management (BHM)',
    description: 'Degree in hospitality and hotel administration.',
    eligibility: '12th Pass (Any stream)',
    duration: '3-4 Years',
    outcome: 'Hotel Manager, Chef, Event Manager',
    color: 'purple',
    steps: [
      { title: 'Entrance Exams', desc: 'Clear NCHMCT JEE or university exams.', duration: 'Entry', type: 'exam' },
      { title: 'Core Hospitality', desc: 'Food Production, F&B Service, Front Office, Housekeeping.', duration: 'Year 1 & 2', type: 'training' },
      { title: 'Industrial Training', desc: 'Mandatory 6-month internship in a 5-star hotel.', duration: 'Year 2/3', type: 'training' },
      { title: 'Specialization', desc: 'Focus on culinary arts, management, or operations.', duration: 'Year 3/4', type: 'training' },
      { title: 'Graduation', desc: 'Join hotels, cruise lines, or event management companies.', duration: 'Goal', type: 'milestone' }
    ]
  },
  {
    id: 'social-work',
    title: 'Social Work (BSW)',
    description: 'Degree focusing on social welfare and community development.',
    eligibility: '12th Pass (Any stream)',
    duration: '3 Years',
    outcome: 'Social Worker, NGO Manager, CSR Executive',
    color: 'purple',
    steps: [
      { title: 'Admission', desc: 'Through CUET or merit-based.', duration: 'Entry', type: 'exam' },
      { title: 'Foundations', desc: 'Sociology, Psychology, and Social Work Principles.', duration: 'Year 1', type: 'training' },
      { title: 'Field Work', desc: 'Concurrent field work with NGOs and communities.', duration: 'Year 2 & 3', type: 'training' },
      { title: 'Graduation', desc: 'Work in social sector or pursue MSW.', duration: 'Goal', type: 'milestone' }
    ]
  },

  // DEFENSE
  {
    id: 'nda',
    title: 'National Defence Academy (NDA)',
    description: 'Gateway to join the Indian Army, Navy, and Air Force as an officer.',
    eligibility: '12th Pass (PCM required for Navy/Air Force, Any stream for Army). Unmarried males & females.',
    duration: '3 Years (NDA) + 1 Year (IMA/INA/AFA)',
    outcome: 'Commissioned Officer',
    color: 'slate',
    steps: [
      { title: 'NDA Written Exam', desc: 'Conducted by UPSC twice a year. Math & General Ability Test.', duration: 'Step 1', type: 'exam' },
      { title: 'SSB Interview', desc: '5-day rigorous psychological, physical, and personal interview process.', duration: 'Step 2', type: 'exam' },
      { title: 'Medical Examination', desc: 'Strict medical fitness test by military hospitals.', duration: 'Step 3', type: 'exam' },
      { title: 'NDA Training (Pune)', desc: '3 years of joint training for Army, Navy, and Air Force cadets. Earn a degree.', duration: '3 Years', type: 'training' },
      { title: 'Specialized Academy', desc: '1 year at IMA (Dehradun) / INA (Ezhimala) / AFA (Dundigal).', duration: '1 Year', type: 'training' },
      { title: 'Commissioning', desc: 'Pass out as an Officer in the Armed Forces.', duration: 'Goal', type: 'milestone' }
    ]
  }
];

export default function Professional() {
  const [expandedCourse, setExpandedCourse] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const location = useLocation();

  useEffect(() => {
    // Handle hash navigation
    if (location.hash) {
      const id = location.hash.replace('#', '');
      setExpandedCourse(id);
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, [location]);

  const toggleCourse = (id: string) => {
    if (expandedCourse === id) {
      setExpandedCourse(null);
    } else {
      setExpandedCourse(id);
    }
  };

  const getColorClasses = (color: string) => {
    const map: Record<string, { bg: string, text: string, border: string, light: string }> = {
      emerald: { bg: 'bg-emerald-500', text: 'text-emerald-700', border: 'border-emerald-200', light: 'bg-emerald-50' },
      blue: { bg: 'bg-blue-500', text: 'text-blue-700', border: 'border-blue-200', light: 'bg-blue-50' },
      purple: { bg: 'bg-purple-500', text: 'text-purple-700', border: 'border-purple-200', light: 'bg-purple-50' },
      slate: { bg: 'bg-slate-700', text: 'text-slate-800', border: 'border-slate-300', light: 'bg-slate-100' },
    };
    return map[color] || map.blue;
  };

  const filteredCourses = professionalCourses.filter(course => 
    course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.outcome.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Breadcrumbs />
      
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-4">Career Roadmaps</h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Step-by-step visual guides to completing India's top degrees, professional courses, and certifications.
        </p>
      </div>

      {/* Search Bar */}
      <div className="mb-10 relative max-w-2xl mx-auto">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-slate-400" />
        </div>
        <input
          type="text"
          className="block w-full pl-11 pr-4 py-4 border border-slate-200 rounded-2xl leading-5 bg-white shadow-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 sm:text-base transition-colors"
          placeholder="Search for a career roadmap (e.g., Engineering, CA, MBBS)..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="space-y-6">
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course, index) => {
            const colors = getColorClasses(course.color);
            const isExpanded = expandedCourse === course.id;

            return (
              <motion.div 
                key={course.id}
                id={course.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: Math.min(index * 0.05, 0.5) }}
                className={`bg-white rounded-3xl shadow-sm border ${isExpanded ? colors.border : 'border-slate-200'} overflow-hidden transition-all`}
              >
                {/* Header / Accordion Toggle */}
                <button 
                  onClick={() => toggleCourse(course.id)}
                  className={`w-full text-left p-6 sm:p-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 hover:bg-slate-50 transition-colors ${isExpanded ? colors.light : ''}`}
                >
                  <div>
                    <h2 className={`text-2xl font-bold ${isExpanded ? colors.text : 'text-slate-900'}`}>{course.title}</h2>
                    <p className="text-slate-600 mt-2 max-w-3xl">{course.description}</p>
                  </div>
                  <div className={`p-2 rounded-full ${isExpanded ? 'bg-white shadow-sm' : 'bg-slate-100'} transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
                    <ChevronDown size={24} className={isExpanded ? colors.text : 'text-slate-500'} />
                  </div>
                </button>

                {/* Expanded Content */}
                {isExpanded && (
                  <div className="p-6 sm:p-8 border-t border-slate-100">
                    {/* Quick Info Bar */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12 bg-slate-50 rounded-2xl p-6 border border-slate-200">
                      <div className="flex items-start gap-3">
                        <CheckCircle size={20} className={`${colors.text} mt-0.5`} />
                        <div>
                          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Eligibility</p>
                          <p className="text-sm font-medium text-slate-800 mt-1">{course.eligibility}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Clock size={20} className={`${colors.text} mt-0.5`} />
                        <div>
                          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Duration</p>
                          <p className="text-sm font-medium text-slate-800 mt-1">{course.duration}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Briefcase size={20} className={`${colors.text} mt-0.5`} />
                        <div>
                          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Outcome</p>
                          <p className="text-sm font-medium text-slate-800 mt-1">{course.outcome}</p>
                        </div>
                      </div>
                    </div>

                    {/* Roadmap Flow */}
                    <div className="relative py-8">
                      {/* Vertical Line */}
                      <div className="absolute left-[27px] sm:left-1/2 top-0 bottom-0 w-1 bg-slate-200 transform sm:-translate-x-1/2 rounded-full" />

                      <div className="space-y-12 relative">
                        {course.steps.map((step, stepIdx) => {
                          const isEven = stepIdx % 2 === 0;
                          const isLast = stepIdx === course.steps.length - 1;
                          
                          return (
                            <div key={stepIdx} className="relative flex items-center justify-start sm:justify-center w-full group">
                              
                              {/* Desktop Layout: Alternating sides */}
                              <div className={`hidden sm:flex w-full ${isEven ? 'justify-end pr-[50%] mr-8' : 'justify-start pl-[50%] ml-8'}`}>
                                <div className={`w-full max-w-md bg-white p-6 rounded-2xl border-2 ${isLast ? colors.border : 'border-slate-200'} shadow-sm hover:shadow-md transition-all relative`}>
                                  {/* Arrow pointing to center line */}
                                  <div className={`absolute top-1/2 -translate-y-1/2 w-8 h-0.5 bg-slate-200 ${isEven ? '-right-8' : '-left-8'}`} />
                                  
                                  <div className="flex justify-between items-start mb-2">
                                    <h3 className={`text-lg font-bold ${isLast ? colors.text : 'text-slate-900'}`}>{step.title}</h3>
                                    <span className="text-xs font-semibold px-2 py-1 bg-slate-100 text-slate-600 rounded-md whitespace-nowrap ml-4">
                                      {step.duration}
                                    </span>
                                  </div>
                                  <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
                                </div>
                              </div>

                              {/* Mobile Layout: Left aligned */}
                              <div className="flex sm:hidden w-full pl-16 pr-4">
                                <div className={`w-full bg-white p-5 rounded-2xl border-2 ${isLast ? colors.border : 'border-slate-200'} shadow-sm relative`}>
                                  {/* Arrow pointing to center line */}
                                  <div className="absolute top-1/2 -translate-y-1/2 w-6 h-0.5 bg-slate-200 -left-6" />
                                  
                                  <h3 className={`text-lg font-bold mb-1 ${isLast ? colors.text : 'text-slate-900'}`}>{step.title}</h3>
                                  <span className="inline-block text-xs font-semibold px-2 py-1 bg-slate-100 text-slate-600 rounded-md mb-3">
                                    {step.duration}
                                  </span>
                                  <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
                                </div>
                              </div>

                              {/* Center Dot */}
                              <div className={`absolute left-[16px] sm:left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full border-4 border-white shadow-sm z-10 flex items-center justify-center ${isLast ? colors.bg : 'bg-slate-300'}`}>
                                {isLast && <div className="w-2 h-2 bg-white rounded-full" />}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })
        ) : (
          <div className="text-center py-20 bg-white rounded-3xl border border-slate-200">
            <p className="text-slate-500 text-lg">No roadmaps found matching your search criteria.</p>
            <button 
              onClick={() => setSearchTerm('')}
              className="mt-4 text-primary-600 font-medium hover:underline"
            >
              Clear search
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
