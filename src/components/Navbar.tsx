import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavbarProps {
  activeSection?: string;
}

export default function Navbar({ activeSection = '' }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'certifications', label: 'Certs' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'projects', label: 'Projects' },
    { id: 'blog', label: 'Blog' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollToSection = (id: string) => {
    if (!isHomePage) {
      window.location.href = `/#${id}`;
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-green-900/50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <span className="text-cyan-400 text-xl">&gt;_</span>
            <span className="text-green-400 font-bold tracking-wider">CYBER<span className="text-cyan-400">SEC</span></span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-3 py-2 text-sm transition-all duration-300 relative group ${
                  activeSection === item.id
                    ? 'text-cyan-400'
                    : 'text-green-600 hover:text-green-400'
                }`}
              >
                <span className="text-green-800 mr-1">{'//'}</span>
                {item.label}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-cyan-400 transform origin-left transition-transform duration-300 ${
                  activeSection === item.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`} />
              </button>
            ))}
            <Link
              to="/blog"
              className="ml-2 px-4 py-1.5 border border-cyan-500 text-cyan-400 text-sm hover:bg-cyan-500/20 transition-all duration-300"
            >
              ./blog --all
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-green-400 p-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
        <div className="bg-black/95 border-t border-green-900/50 py-4 px-4 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`block w-full text-left px-4 py-2 transition-colors ${
                activeSection === item.id
                  ? 'text-cyan-400 bg-cyan-400/10'
                  : 'text-green-500 hover:text-green-400 hover:bg-green-400/10'
              }`}
            >
              <span className="text-green-800 mr-2">&gt;</span>
              {item.label}
            </button>
          ))}
          <Link
            to="/blog"
            className="block w-full text-left px-4 py-2 text-cyan-400 hover:bg-cyan-400/10 transition-colors"
          >
            <span className="text-green-800 mr-2">&gt;</span>
            View All Posts
          </Link>
        </div>
      </div>
    </nav>
  );
}
