import React from 'react';
import { Heart, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { icon: <Github size={20} />, href: 'https://github.com/jenilkukadiya', name: 'GitHub' },
    { icon: <Linkedin size={20} />, href: 'https://www.linkedin.com/in/jenil-kukadiya-341925210/', name: 'LinkedIn' },
    { icon: <Mail size={20} />, href: 'mailto:jenilkukadiya82@gmail.com', name: 'Email' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Jenil Kukadiya
              </h3>
              <p className="text-gray-400 mt-2">Full Stack Developer</p>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Passionate about creating innovative web solutions and scalable applications. 
              Always learning, always building, always improving.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 transition-colors duration-200 transform hover:scale-110"
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.querySelector(link.href);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-3 text-gray-400">
              <p>Gujarat, India</p>
              <p>jenilkukadiya82@gmail.com</p>
              <p>+91 9909072743</p>
            </div>
            <div className="mt-6">
              <span className="inline-flex items-center gap-2 bg-green-600 text-white px-3 py-1 rounded-full text-sm">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                Available for work
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 text-gray-400 mb-4 md:mb-0">
              <span>© {currentYear} Jenil Kukadiya. Made with</span>
              <Heart size={16} className="text-red-500 fill-current" />
              <span>and lots of coffee</span>
            </div>
            
            <button
              onClick={scrollToTop}
              className="bg-blue-600 hover:bg-blue-700 p-3 rounded-full transition-colors duration-200 transform hover:scale-110"
              title="Back to top"
            >
              <ArrowUp size={20} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;