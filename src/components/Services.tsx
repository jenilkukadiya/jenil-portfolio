import React from 'react';
import { Code2, LayoutDashboard, Sparkles, Smartphone, Cloud, Plug } from 'lucide-react';
import Reveal from './Reveal';

const Services = () => {
  const services = [
    {
      icon: <Code2 className="w-7 h-7" />,
      title: 'Full-Stack Web Development',
      description:
        'End-to-end web applications with React, Next.js, Node.js and .NET — responsive, fast, and engineered to scale with your business.',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <LayoutDashboard className="w-7 h-7" />,
      title: 'Business Software & ERP',
      description:
        'Custom ERP, admin dashboards and management systems that automate operations, replace spreadsheets, and give you real-time control.',
      gradient: 'from-indigo-500 to-purple-500',
    },
    {
      icon: <Sparkles className="w-7 h-7" />,
      title: 'AI-Powered Solutions',
      description:
        'AI agents, computer-vision tools and smart automation that add real intelligence to your product and save hours of manual work.',
      gradient: 'from-pink-500 to-rose-500',
    },
    {
      icon: <Smartphone className="w-7 h-7" />,
      title: 'Mobile App Development',
      description:
        'Cross-platform mobile apps with Flutter — a single codebase delivering a polished native experience on both Android and iOS.',
      gradient: 'from-emerald-500 to-teal-500',
    },
    {
      icon: <Cloud className="w-7 h-7" />,
      title: 'Cloud & DevOps',
      description:
        'Deployment, CI/CD pipelines and cloud infrastructure on Azure and AWS for reliable, automated, and secure delivery.',
      gradient: 'from-orange-500 to-red-500',
    },
    {
      icon: <Plug className="w-7 h-7" />,
      title: 'API Development & Integration',
      description:
        'Robust REST APIs and third-party integrations — payments, marketplaces, notifications and more — connecting your systems seamlessly.',
      gradient: 'from-violet-500 to-fuchsia-500',
    },
  ];

  return (
    <section id="services" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50 overflow-hidden">
      <div className="absolute top-1/3 -right-20 w-80 h-80 bg-blue-200/30 rounded-full blur-3xl -z-0" />
      <div className="relative max-w-7xl mx-auto">
        <Reveal className="text-center mb-16">
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full text-sm font-semibold text-blue-700 bg-blue-100/70 border border-blue-200">
            What I Do
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Services I <span className="text-gradient">Offer</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From idea to launch — I help businesses and founders turn their vision into reliable, production-ready software.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Reveal
              key={index}
              delay={(index % 3) * 0.08}
              className="group bg-white rounded-2xl shadow-lg p-8 hover:shadow-glow transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
            >
              <div
                className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} text-white shadow-md mb-5 group-hover:scale-110 transition-transform duration-300`}
              >
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </Reveal>
          ))}
        </div>

        {/* CTA */}
        <Reveal className="mt-14 text-center">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3.5 rounded-full font-semibold shadow-lg shadow-blue-600/25 hover:shadow-xl transform hover:scale-105 transition-all duration-200"
          >
            <Sparkles size={20} />
            Have a project in mind? Let's talk
          </a>
        </Reveal>
      </div>
    </section>
  );
};

export default Services;
