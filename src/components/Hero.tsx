import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDown, Download, Github, Linkedin, Mail, Eye, Sparkles } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Jenil_Kukadiya_Resume.pdf';
    link.download = 'Jenil_Kukadiya_Resume.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const viewResume = () => {
    window.open('https://drive.google.com/file/d/1fQV8T_vO6jJQF86lJWo5BWYq236qw7F4/view?usp=sharing', '_blank');
  };

  const techStack = ['React', 'Next.js', 'Node.js', 'Python', '.NET', 'TypeScript', 'Azure', 'PostgreSQL'];

  const stats = [
    { value: '50+', label: 'Projects Delivered' },
    { value: '6+', label: 'Years Experience' },
    { value: '15+', label: 'Technologies' },
  ];

  const reduceMotion = useReducedMotion();

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: reduceMotion ? 0 : 0.12,
        delayChildren: reduceMotion ? 0 : 0.1,
      },
    },
  };
  const item = {
    hidden: reduceMotion ? { opacity: 1 } : { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: reduceMotion ? 0 : 0.6, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0 -z-10 bg-grid" />
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-400/30 rounded-full blur-3xl animate-blob" />
        <div className="absolute top-1/3 -right-24 w-96 h-96 bg-purple-400/30 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-cyan-300/30 rounded-full blur-3xl animate-blob animation-delay-4000" />
      </div>

      <motion.div
        className="max-w-5xl mx-auto text-center"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Profile Image */}
        <motion.div variants={item} className="mb-8">
          <div className="relative inline-block animate-float">
            <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-blue-600 via-indigo-500 to-purple-600 blur-md opacity-70" />
            <img
              src="https://res.cloudinary.com/drqkgzors/image/upload/WhatsApp_Image_2025-06-24_at_10.15.00_PM_ciyp4c"
              alt="Jenil Kukadiya"
              className="relative w-40 h-40 md:w-48 md:h-48 rounded-full object-cover mx-auto shadow-2xl ring-4 ring-white"
              onError={(e) => {
                e.currentTarget.src =
                  'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400';
              }}
            />
          </div>
        </motion.div>

        {/* Availability badge */}
        <motion.div variants={item} className="flex justify-center mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/70 backdrop-blur-md border border-blue-200 text-sm font-medium text-gray-700 shadow-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
            </span>
            Available for freelance &amp; full-time work
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={item}
          className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-tight tracking-tight"
        >
          Hi, I'm <span className="text-gradient animate-gradient-x bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">Jenil Kukadiya</span>
        </motion.h1>

        <motion.p variants={item} className="mt-4 text-xl md:text-2xl font-semibold text-gray-700">
          Full Stack Developer
          <span className="text-gray-400 mx-2">·</span>
          <span className="text-gray-600">Building Production-Grade Web Platforms</span>
        </motion.p>

        <motion.p variants={item} className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          I design and ship scalable, end-to-end web platforms — from multi-tenant ERP and
          order-management systems to AI-powered tools and mobile apps. I turn complex business
          problems into clean, reliable software that real teams use every day.
        </motion.p>

        {/* Tech pills */}
        <motion.div variants={item} className="mt-8 flex flex-wrap justify-center gap-2.5">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="px-4 py-1.5 rounded-full text-sm font-medium text-gray-700 bg-white/70 backdrop-blur-sm border border-gray-200 hover:border-blue-300 hover:text-blue-700 hover:shadow-md transition-all duration-200"
            >
              {tech}
            </span>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div variants={item} className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={scrollToContact}
            className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3.5 rounded-full font-semibold shadow-lg shadow-blue-600/25 hover:shadow-xl hover:shadow-purple-600/30 transform hover:scale-105 transition-all duration-200 flex items-center gap-2"
          >
            <Sparkles size={20} className="group-hover:rotate-12 transition-transform" />
            Hire Me
          </button>
          {/* Resume buttons temporarily hidden (remove the `hidden` class to re-enable) */}
          <button
            onClick={viewResume}
            className="hidden bg-white text-gray-800 px-8 py-3.5 rounded-full font-semibold border border-gray-200 shadow-sm hover:shadow-md hover:border-blue-300 transform hover:scale-105 transition-all duration-200 items-center gap-2"
          >
            <Eye size={20} />
            View Resume
          </button>
          <button
            onClick={downloadResume}
            className="hidden text-gray-700 px-6 py-3.5 rounded-full font-semibold hover:text-blue-600 transition-all duration-200 items-center gap-2"
          >
            <Download size={20} />
            Download CV
          </button>
        </motion.div>

        {/* Social Links */}
        <motion.div variants={item} className="mt-8 flex justify-center gap-5">
          {[
            { Icon: Github, href: 'https://github.com/jenilkukadiya', label: 'GitHub' },
            { Icon: Linkedin, href: 'https://www.linkedin.com/in/jenil-kukadiya-341925210/', label: 'LinkedIn' },
            { Icon: Mail, href: 'mailto:jenilkukadiya82@gmail.com', label: 'Email' },
          ].map(({ Icon, href, label }, i) => (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              title={label}
              className="p-3 rounded-full bg-white/70 backdrop-blur-sm border border-gray-200 text-gray-600 hover:text-blue-600 hover:border-blue-300 hover:shadow-md transform hover:-translate-y-1 transition-all duration-200"
            >
              <Icon size={22} />
            </a>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div variants={item} className="mt-14 grid grid-cols-3 gap-4 max-w-xl mx-auto">
          {stats.map((s) => (
            <div key={s.label} className="glass rounded-2xl py-5 px-3 shadow-sm">
              <div className="text-2xl md:text-3xl font-extrabold text-gradient">{s.value}</div>
              <div className="text-xs md:text-sm text-gray-600 mt-1">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-gray-400 hover:text-blue-600 transition-colors animate-bounce"
        aria-label="Scroll to about"
      >
        <ArrowDown size={26} />
      </button>
    </section>
  );
};

export default Hero;
