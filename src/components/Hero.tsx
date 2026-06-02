import React from 'react';
import { ArrowDown, Download, Github, Linkedin, Mail, Eye } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadResume = () => {
    // Create a link to download the resume
    const link = document.createElement('a');
    link.href = '/Jenil_Kukadiya_Resume.pdf';
    link.download = 'Jenil_Kukadiya_Resume.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const viewResume = () => {
    // Open Google Drive resume in new tab
    window.open('https://drive.google.com/file/d/1fQV8T_vO6jJQF86lJWo5BWYq236qw7F4/view?usp=sharing', '_blank');
  };
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          {/* Profile Image */}
          <div className="mb-8">
            <div className="relative inline-block">
              <img
                src="https://res.cloudinary.com/drqkgzors/image/upload/WhatsApp_Image_2025-06-24_at_10.15.00_PM_ciyp4c"
                alt="Jenil Kukadiya"
                className="w-48 h-48 rounded-full object-cover mx-auto shadow-2xl ring-4 ring-white"
                onError={(e) => {
                  // Fallback image if Cloudinary fails
                  e.currentTarget.src = "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400";
                }}
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/20 to-purple-500/20"></div>
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
                Jenil <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Kukadiya</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 font-medium">
                Full Stack Developer · Building Production-Grade Web Platforms
              </p>
            </div>

            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              I design and ship scalable, end-to-end web platforms — from multi-tenant ERP and order-management
              systems to dynamic business portals. Experienced across React, Next.js, Node.js and Spring Boot,
              with a focus on robust backends, clean architecture, and exceptional user experiences.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
              <button 
                onClick={viewResume}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center gap-2"
              >
                <Eye size={20} />
                View Resume
              </button>
              <button 
                onClick={downloadResume}
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-600 hover:text-white transform hover:scale-105 transition-all duration-200 flex items-center gap-2"
              >
                <Download size={20} />
                Download Resume
              </button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-6 mt-8">
              <a 
                href="https://github.com/jenilkukadiya" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-600 hover:text-blue-600 transform hover:scale-110 transition-all duration-200"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/in/jenil-kukadiya-341925210/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transform hover:scale-110 transition-all duration-200"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="mailto:jenilkukadiya82@gmail.com"
                className="text-gray-600 hover:text-blue-600 transform hover:scale-110 transition-all duration-200"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;