import { Link } from 'react-router-dom';
import { Compass, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="bg-primary-500 text-white p-1.5 rounded-lg">
                <Compass size={20} />
              </div>
              <span className="font-bold text-lg tracking-tight text-slate-900">Pathfinder</span>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed">
              Helping Indian students find their direction after 10th and 12th with structured, clear, and actionable career roadmaps.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-900 tracking-wider uppercase mb-4">Explore</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/streams" className="text-slate-500 hover:text-primary-600 text-sm transition-colors">
                  Streams after 10th
                </Link>
              </li>
              <li>
                <Link to="/alternatives" className="text-slate-500 hover:text-primary-600 text-sm transition-colors">
                  Alternative Options
                </Link>
              </li>
              <li>
                <Link to="/after-12th" className="text-slate-500 hover:text-primary-600 text-sm transition-colors">
                  Options after 12th
                </Link>
              </li>
              <li>
                <Link to="/professional" className="text-slate-500 hover:text-primary-600 text-sm transition-colors">
                  Career Roadmaps
                </Link>
              </li>
              <li>
                <Link to="/internships" className="text-slate-500 hover:text-primary-600 text-sm transition-colors">
                  2026 Internships
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-900 tracking-wider uppercase mb-4">Support</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/faq" className="text-slate-500 hover:text-primary-600 text-sm transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/faq#contact" className="text-slate-500 hover:text-primary-600 text-sm transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <a href="#" className="text-slate-500 hover:text-primary-600 text-sm transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-500 hover:text-primary-600 text-sm transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-900 tracking-wider uppercase mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-slate-500 text-sm">
                <Mail size={16} className="text-slate-400" />
                <span>hello@careercompass.in</span>
              </li>
              <li className="flex items-center gap-2 text-slate-500 text-sm">
                <Phone size={16} className="text-slate-400" />
                <span>+91 7416403722</span>
              </li>
              <li className="flex items-center gap-2 text-slate-500 text-sm">
                <MapPin size={16} className="text-slate-400" />
                <span>Vizag, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm text-center md:text-left">
              &copy; {new Date().getFullYear()} Pathfinder. All rights reserved.
            </p>
            <p className="text-slate-400 text-xs text-center md:text-right max-w-md">
              Disclaimer: This platform provides guidance only. Students should verify details from official sources before making career decisions.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
