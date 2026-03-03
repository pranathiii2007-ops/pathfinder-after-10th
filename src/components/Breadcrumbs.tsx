import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export default function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  if (pathnames.length === 0) return null;

  return (
    <nav className="flex items-center space-x-2 text-sm text-slate-500 mb-8" aria-label="Breadcrumb">
      <Link to="/" className="hover:text-primary-600 transition-colors flex items-center gap-1">
        <Home size={16} />
        <span className="sr-only">Home</span>
      </Link>
      
      {pathnames.map((value, index) => {
        const last = index === pathnames.length - 1;
        const to = `/${pathnames.slice(0, index + 1).join('/')}`;
        
        // Format the string: replace dashes with spaces and capitalize
        const formattedValue = value
          .split('-')
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ');

        return (
          <div key={to} className="flex items-center space-x-2">
            <ChevronRight size={16} className="text-slate-400" />
            {last ? (
              <span className="text-slate-900 font-medium" aria-current="page">
                {formattedValue}
              </span>
            ) : (
              <Link to={to} className="hover:text-primary-600 transition-colors">
                {formattedValue}
              </Link>
            )}
          </div>
        );
      })}
    </nav>
  );
}
