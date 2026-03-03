import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Compass, User, LogOut } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useAuth } from '../context/AuthContext';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Streams', path: '/streams' },
  { name: 'Alternatives', path: '/alternatives' },
  { name: 'After 12th', path: '/after-12th' },
  { name: 'Roadmaps', path: '/professional' },
  { name: 'Internships \'26', path: '/internships' },
  { name: 'FAQ', path: '/faq' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { user, logout } = useAuth();

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-primary-500 text-white p-1.5 rounded-lg">
                <Compass size={24} />
              </div>
              <span className="font-bold text-xl tracking-tight text-slate-900">Pathfinder</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-primary-50 text-primary-700'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            
            <div className="ml-4 pl-4 border-l border-slate-200 flex items-center space-x-4">
              {user ? (
                <div className="flex items-center space-x-4">
                  <span className="text-sm font-medium text-slate-700 flex items-center">
                    <User size={16} className="mr-2" />
                    {user.name}
                  </span>
                  <button
                    onClick={logout}
                    className="text-sm font-medium text-slate-500 hover:text-slate-700 flex items-center transition-colors"
                  >
                    <LogOut size={16} className="mr-1" />
                    Logout
                  </button>
                </div>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
                  >
                    Sign in
                  </Link>
                  <Link
                    to="/register"
                    className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-primary-600 hover:bg-primary-700 shadow-sm transition-colors"
                  >
                    Sign up
                  </Link>
                </>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-slate-500 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden bg-white border-b border-slate-200"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`block px-3 py-2 rounded-md text-base font-medium ${
                      isActive
                        ? 'bg-primary-50 text-primary-700'
                        : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              
              <div className="mt-4 pt-4 border-t border-slate-200">
                {user ? (
                  <>
                    <div className="px-3 py-2 text-base font-medium text-slate-800 flex items-center">
                      <User size={18} className="mr-2 text-slate-500" />
                      {user.name}
                    </div>
                    <button
                      onClick={() => {
                        logout();
                        setIsOpen(false);
                      }}
                      className="w-full text-left block px-3 py-2 rounded-md text-base font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 flex items-center"
                    >
                      <LogOut size={18} className="mr-2" />
                      Logout
                    </button>
                  </>
                ) : (
                  <div className="flex flex-col space-y-2 px-3">
                    <Link
                      to="/login"
                      onClick={() => setIsOpen(false)}
                      className="block w-full text-center px-4 py-2 border border-slate-300 rounded-lg text-base font-medium text-slate-700 bg-white hover:bg-slate-50"
                    >
                      Sign in
                    </Link>
                    <Link
                      to="/register"
                      onClick={() => setIsOpen(false)}
                      className="block w-full text-center px-4 py-2 border border-transparent rounded-lg text-base font-medium text-white bg-primary-600 hover:bg-primary-700"
                    >
                      Sign up
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
