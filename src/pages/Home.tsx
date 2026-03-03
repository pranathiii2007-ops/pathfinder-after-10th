import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Briefcase, GraduationCap, Map, Shield, Wrench, Laptop, Globe, Cpu, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-white overflow-hidden py-20 sm:py-32 border-b border-slate-200">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/abstract/1920/1080?blur=10')] opacity-5 bg-cover bg-center" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6"
            >
              Where are you in your <span className="text-primary-600">journey?</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg sm:text-xl text-slate-600 mb-12 leading-relaxed"
            >
              Select your current educational stage to get personalized career roadmaps, stream options, and professional courses tailored for you.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto"
            >
              {/* After 10th Card */}
              <Link to="/streams" className="group relative bg-white border-2 border-slate-200 rounded-3xl p-8 hover:border-primary-500 hover:shadow-xl transition-all text-left overflow-hidden">
                <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                  <BookOpen size={80} className="text-primary-600 transform group-hover:scale-110 transition-transform" />
                </div>
                <div className="relative z-10">
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">Foundation</span>
                  <h3 className="text-3xl font-bold text-slate-900 mb-3">After 10th</h3>
                  <p className="text-slate-600 mb-6 min-h-[48px]">Explore Science, Commerce, Arts, or vocational diplomas to set your base.</p>
                  <div className="inline-flex items-center text-primary-600 font-semibold group-hover:translate-x-2 transition-transform">
                    Explore 10th Options <ArrowRight className="ml-2 h-5 w-5" />
                  </div>
                </div>
              </Link>

              {/* After 12th Card */}
              <Link to="/after-12th" className="group relative bg-white border-2 border-slate-200 rounded-3xl p-8 hover:border-emerald-500 hover:shadow-xl transition-all text-left overflow-hidden">
                <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                  <GraduationCap size={80} className="text-emerald-600 transform group-hover:scale-110 transition-transform" />
                </div>
                <div className="relative z-10">
                  <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold mb-4">Specialization</span>
                  <h3 className="text-3xl font-bold text-slate-900 mb-3">After 12th</h3>
                  <p className="text-slate-600 mb-6 min-h-[48px]">Discover degrees, professional courses, and entrance exams for your career.</p>
                  <div className="inline-flex items-center text-emerald-600 font-semibold group-hover:translate-x-2 transition-transform">
                    Explore 12th Options <ArrowRight className="ml-2 h-5 w-5" />
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Career Chooser Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight mb-4">Quick Career Chooser</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Select an area of interest to see detailed roadmaps and next steps.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Science', icon: BookOpen, desc: 'Engineering, Medical, Research', link: '/streams#science', color: 'bg-blue-50 text-blue-600' },
              { title: 'Commerce', icon: Briefcase, desc: 'CA, CS, Business, Finance', link: '/streams#commerce', color: 'bg-emerald-50 text-emerald-600' },
              { title: 'Arts', icon: Map, desc: 'Law, Design, Humanities, Media', link: '/streams#arts', color: 'bg-purple-50 text-purple-600' },
              { title: 'Polytechnic', icon: Wrench, desc: '3-Year Engineering Diplomas', link: '/alternatives#polytechnic', color: 'bg-orange-50 text-orange-600' },
              { title: 'Vocational', icon: GraduationCap, desc: 'Skill-based short courses', link: '/alternatives#vocational', color: 'bg-pink-50 text-pink-600' },
              { title: 'Defense', icon: Shield, desc: 'NDA, Army, Navy, Airforce', link: '/alternatives#defense', color: 'bg-slate-100 text-slate-700' },
            ].map((item, i) => (
              <Link key={i} to={item.link} className="group block bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:shadow-md hover:border-primary-300 transition-all">
                <div className={`inline-flex p-3 rounded-xl ${item.color} mb-4 group-hover:scale-110 transition-transform`}>
                  <item.icon size={24} />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-500 mb-4">{item.desc}</p>
                <div className="flex items-center text-primary-600 font-medium text-sm">
                  View Path <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 2026 Internship Trends Section */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-800 mb-4">
              <TrendingUp size={16} className="mr-2" />
              Future-Proof Your Career
            </span>
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight mb-4">Top Internship Trends for 2026</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              The job market is evolving rapidly. Here are the most in-demand internship domains you should aim for during your college years.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'AI & Automation', icon: Cpu, desc: 'Prompt engineering, AI model fine-tuning, and automation workflows.', color: 'bg-indigo-50 text-indigo-600 border-indigo-100' },
              { title: 'Remote Global', icon: Globe, desc: 'Working with international startups remotely across time zones.', color: 'bg-teal-50 text-teal-600 border-teal-100' },
              { title: 'Digital Strategy', icon: Laptop, desc: 'Data-driven marketing, growth hacking, and digital content strategy.', color: 'bg-rose-50 text-rose-600 border-rose-100' },
              { title: 'FinTech & ESG', icon: Briefcase, desc: 'Blockchain accounting, sustainable finance, and ESG consulting.', color: 'bg-amber-50 text-amber-600 border-amber-100' },
            ].map((trend, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <div className={`inline-flex p-3 rounded-xl ${trend.color} mb-4`}>
                  <trend.icon size={24} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{trend.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{trend.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight mb-10 text-center">Why use Pathfinder?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: 'Structured Roadmaps', desc: 'Visual, step-by-step guides similar to roadmap.sh, tailored for the Indian education system.' },
                { title: 'Clear Eligibility Info', desc: 'No more guessing. Know exactly what percentage, subjects, and entrance exams are required.' },
                { title: 'Outcome Clarity', desc: 'Understand the career scope, salary ranges, and job roles before committing to a path.' },
              ].map((feature, i) => (
                <div key={i} className="flex flex-col items-center text-center bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                  <div className="flex-shrink-0 mb-4">
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary-100 text-primary-600 font-bold text-lg">
                      {i + 1}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">{feature.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-primary-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/pattern/1920/1080?blur=4')] opacity-10 mix-blend-overlay" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Start Planning Your Future Today</h2>
          <p className="text-primary-100 text-lg mb-10 max-w-2xl mx-auto">
            Don't leave your career to chance. Explore the roadmaps, understand your options, and make a decision you'll be proud of.
          </p>
          <Link to="/streams" className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-xl text-primary-900 bg-white hover:bg-primary-50 shadow-lg transition-all hover:scale-105">
            View Career Roadmaps
          </Link>
        </div>
      </section>
    </div>
  );
}
