import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#education', label: 'Education' },
    { href: '#contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Scroll-spy: find the section currently in view
      const offset = window.scrollY + 120;
      let current = 'home';
      for (const item of navItems) {
        const el = document.querySelector(item.href) as HTMLElement | null;
        if (el && el.offsetTop <= offset) {
          current = item.href.replace('#', '');
        }
      }
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-lg shadow-gray-900/5' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button onClick={() => scrollToSection('#home')} className="flex-shrink-0">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center shadow-md shadow-blue-600/20">
                <span className="text-white font-bold text-lg">JK</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Jenil Kukadiya</span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                    isActive ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute left-3 right-3 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600" />
                  )}
                </button>
              );
            })}
            <button
              onClick={() => scrollToSection('#contact')}
              className="ml-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 py-2 rounded-full text-sm font-semibold shadow-md shadow-blue-600/20 hover:shadow-lg hover:scale-105 transition-all duration-200"
            >
              Hire Me
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-md rounded-2xl mt-2 shadow-lg border border-gray-100">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.replace('#', '');
                return (
                  <button
                    key={item.href}
                    onClick={() => scrollToSection(item.href)}
                    className={`block px-4 py-2.5 text-base font-medium w-full text-left rounded-xl transition-colors duration-200 ${
                      isActive ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
              <button
                onClick={() => scrollToSection('#contact')}
                className="mt-2 w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2.5 rounded-xl text-base font-semibold"
              >
                Hire Me
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
