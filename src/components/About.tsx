import React from 'react';
import { Code, Cloud, Database, Zap } from 'lucide-react';

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
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A dedicated software engineer with a passion for creating innovative solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900">
                Crafting Digital Experiences
              </h3>
              <p className="text-gray-700 leading-relaxed">
                I'm a passionate Full Stack Developer with experience building scalable web applications 
                and modern software solutions. My journey in technology started with a curiosity about 
                how things work, which led me to pursue computer engineering at Nirma University and 
                specialize in modern web technologies.
              </p>
              <p className="text-gray-700 leading-relaxed">
                I believe in writing clean, maintainable code and creating user-centric applications that
                solve real-world problems. My experience spans frontend development with React, Next.js and
                TypeScript to backend services with Node.js, Spring Boot, and cloud platforms — and I've
                delivered full-scale ERP and management systems running in production for real businesses.
                I also have hands-on experience with No-Code/Low-Code platforms like Bubble.io for rapid prototyping.
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