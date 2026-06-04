import React from 'react';
import { Code, Cloud, Database, Zap } from 'lucide-react';
import Reveal from './Reveal';

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Full Stack Development",
      description: "Expert in React, Node.js, Spring Boot and modern web technologies"
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Cloud Solutions",
      description: "Experience with AWS, Firebase, and Azure cloud platforms"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Database Design",
      description: "Proficient in SQL, NoSQL, and database optimization"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "No-Code/Low-Code",
      description: "Experience with Bubble.io and rapid application development"
    }
  ];

  return (
    <section id="about" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute -top-10 -left-20 w-80 h-80 bg-blue-200/30 rounded-full blur-3xl -z-0" />
      <div className="relative max-w-7xl mx-auto">
        <Reveal className="text-center mb-16">
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full text-sm font-semibold text-blue-700 bg-blue-100/70 border border-blue-200">
            About Me
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A full stack engineer focused on building reliable, scalable software that drives real business results
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900">
                Building Software Teams Rely On
              </h3>
              <p className="text-gray-700 leading-relaxed">
                I'm a Full Stack Developer who turns business ideas into production-grade software.
                After earning my Computer Engineering degree from Nirma University, I've spent the last
                several years designing, building, and shipping web platforms that real teams depend on
                every day — from multi-tenant ERP and order-management systems to AI-powered tools.
              </p>
              <p className="text-gray-700 leading-relaxed">
                I work end-to-end: React, Next.js and TypeScript on the frontend; Node.js, Spring Boot
                and .NET on the backend; and cloud platforms like Azure and AWS for deployment. I care
                about clean, maintainable code and clear communication, so clients always know exactly
                where their project stands. When speed matters most, I also build rapid MVPs on
                No-Code/Low-Code platforms like Bubble.io.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-gray-900">Key Strengths:</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  Problem-solving and analytical thinking
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  Full-stack development expertise
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  Continuous learning and adaptation
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  Team collaboration and leadership
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column - Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
              >
                <div className="text-blue-600 mb-4">
                  {highlight.icon}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {highlight.title}
                </h4>
                <p className="text-gray-600 text-sm">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;