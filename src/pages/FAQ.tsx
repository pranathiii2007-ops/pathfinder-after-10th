import { useState } from 'react';
import { motion } from 'motion/react';
import Breadcrumbs from '../components/Breadcrumbs';
import { ChevronDown, MessageCircle, Send } from 'lucide-react';

const faqs = [
  {
    question: 'Is Science mandatory for success?',
    answer: 'No. Success depends on your skills, interest, and dedication, not just your stream. Commerce and Arts offer equally lucrative and fulfilling career paths like CA, Law, Design, and Management.'
  },
  {
    question: 'Is Polytechnic better than Intermediate (11th/12th)?',
    answer: 'It depends on your goals. Polytechnic is great if you want practical, industry-ready skills and a job immediately after 3 years. Intermediate is better if you want to pursue higher academic degrees (B.Tech, MBBS, etc.) through competitive exams.'
  },
  {
    question: 'How to choose the right stream?',
    answer: 'Consider three things: 1) Your interest in the core subjects (e.g., do you actually like Math/Science?), 2) Your career goals, and 3) Your aptitude. Don\'t choose a stream just because your friends are doing it or due to peer pressure.'
  },
  {
    question: 'What if I’m confused between two streams?',
    answer: 'Speak to a career counselor, take an aptitude test, and talk to professionals working in fields you are considering. You can also look at the syllabus for 11th grade subjects to see if they genuinely interest you.'
  },
  {
    question: 'Can I change my stream after 11th or 12th?',
    answer: 'Changing from Science to Commerce/Arts after 12th is common and allowed for most courses. However, changing from Commerce/Arts to Science is generally not possible for degree courses like Engineering or Medicine.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Breadcrumbs />
      
      <div className="mb-16 text-center">
        <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-4">Frequently Asked Questions</h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Common questions students and parents have when making career decisions after 10th and 12th.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* FAQ Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            <MessageCircle className="text-primary-500" />
            Common Queries
          </h2>
          
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left px-6 py-5 flex justify-between items-center focus:outline-none focus:bg-slate-50 hover:bg-slate-50 transition-colors"
                aria-expanded={openIndex === index}
              >
                <span className="font-semibold text-slate-900 pr-8">{faq.question}</span>
                <ChevronDown 
                  className={`flex-shrink-0 text-slate-400 transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-primary-500' : ''}`} 
                  size={20} 
                />
              </button>
              
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-slate-600 leading-relaxed pt-2 border-t border-slate-100">
                  {faq.answer}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact Form Section */}
        <div id="contact" className="bg-white rounded-3xl shadow-sm border border-slate-200 p-8 sm:p-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Still Confused?</h2>
          <p className="text-slate-600 mb-8">Drop us a message and our career counselors will get back to you.</p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors outline-none"
                placeholder="John Doe"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors outline-none"
                placeholder="john@example.com"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
                Your Question / Message
              </label>
              <textarea
                id="message"
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors outline-none resize-none"
                placeholder="I am confused between Science and Commerce..."
              />
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full flex items-center justify-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-sm font-medium text-white transition-all ${
                isSubmitting ? 'bg-primary-400 cursor-not-allowed' : 'bg-primary-600 hover:bg-primary-700 hover:shadow-md'
              }`}
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </span>
              ) : submitStatus === 'success' ? (
                <span className="flex items-center gap-2">
                  <CheckCircle size={20} />
                  Message Sent!
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <Send size={20} />
                  Send Message
                </span>
              )}
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-slate-100">
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex gap-3">
              <div className="text-amber-600 flex-shrink-0 mt-0.5">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-sm text-amber-800 leading-relaxed">
                <span className="font-semibold">Disclaimer:</span> This platform provides general guidance based on common educational paths in India. Students should verify specific eligibility criteria, exam dates, and course details from official university or board websites before making final decisions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
