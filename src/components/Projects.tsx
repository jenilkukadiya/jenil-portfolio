import React from 'react';
import { Star, Code, Database, Globe, Shield, Link, Stethoscope, Shirt } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Library Management System",
      description: "A comprehensive library management system built with React and Node.js. Features include book catalog management, member registration, book borrowing/returning, automated email notifications, and admin dashboard for complete library operations.",
      icon: <Database className="w-8 h-8" />,
      iconColor: "text-blue-600",
      iconBg: "bg-blue-100",
      technologies: ["React", "Node.js", "MongoDB", "Express.js", "EmailJS", "JWT"],
      features: [
        "Book catalog with search and filters",
        "Member registration and management",
        "Book borrowing and returning system",
        "Automated email notifications",
        "Admin dashboard for library operations",
        "Fine calculation for overdue books"
      ],
      status: "Completed",
      statusColor: "bg-green-100 text-green-800"
    },
    {
      title: "SecureShort - Photo Gallery Management",
      description: "A secure photo gallery management system where admins can create password-protected galleries and share them with users. Built with Spring Boot backend and React frontend, featuring secure access control and user-friendly interface.",
      icon: <Shield className="w-8 h-8" />,
      iconColor: "text-purple-600",
      iconBg: "bg-purple-100",
      technologies: ["React", "Spring Boot", "MySQL", "JWT", "Cloudinary", "Bootstrap"],
      features: [
        "Admin can create password-protected galleries",
        "Photo upload and management system",
        "Secure user access with password verification",
        "Download and view options for users",
        "Gallery sharing via secure links",
        "Responsive design for all devices"
      ],
      status: "Completed",
      statusColor: "bg-green-100 text-green-800"
    },
    {
      title: "URL Shortener Service",
      description: "A simple and efficient URL shortening service with user-friendly interface. Features custom short URLs, click tracking, and basic analytics for monitoring link performance.",
      icon: <Link className="w-8 h-8" />,
      iconColor: "text-orange-600",
      iconBg: "bg-orange-100",
      technologies: ["React", "Node.js", "MongoDB", "Express.js", "Chart.js", "JWT"],
      features: [
        "Custom short URL generation",
        "Click tracking and analytics",
        "User dashboard with statistics",
        "Link management interface",
        "Simple and clean design",
        "Fast URL redirection"
      ],
      status: "Completed",
      statusColor: "bg-green-100 text-green-800"
    },
    {
      title: "Doctor Appointment System",
      description: "A modern doctor appointment booking system built with Next.js and Spring Boot. Features include doctor profiles, appointment scheduling, patient management, and secure file uploads for medical documents.",
      icon: <Stethoscope className="w-8 h-8" />,
      iconColor: "text-red-600",
      iconBg: "bg-red-100",
      technologies: ["Next.js", "Spring Boot", "MongoDB", "Cloudinary", "JWT", "Tailwind CSS"],
      features: [
        "Doctor profile management",
        "Online appointment booking",
        "Patient registration and login",
        "Medical document upload",
        "Appointment history tracking",
        "Email notifications for appointments"
      ],
      status: "Completed",
      statusColor: "bg-green-100 text-green-800"
    },
    {
      title: "Textile Company Website",
      description: "A professional website for a textile and clothing company built with Next.js. Features modern design showcasing sarees, dresses, fabrics, and clothing collections. Includes product catalogs, company information, and contact forms. Successfully deployed and optimized for performance.",
      icon: <Shirt className="w-8 h-8" />,
      iconColor: "text-indigo-600",
      iconBg: "bg-indigo-100",
      technologies: ["Next.js", "React", "Tailwind CSS", "Vercel", "EmailJS", "Framer Motion"],
      features: [
        "Modern and responsive design",
        "Clothing and fabric showcase",
        "Saree and dress collections",
        "Product catalog with categories",
        "Company information and heritage",
        "Contact forms with email integration",
        "SEO optimized for fashion industry",
        "Fast loading and performance optimized"
      ],
      status: "Production",
      statusColor: "bg-blue-100 text-blue-800"
    },
    {
      title: "Diamond Company Website",
      description: "An elegant and sophisticated website for a diamond company showcasing their premium collection. Built with Next.js featuring stunning product galleries, company heritage, and luxury design elements. Successfully deployed with optimal performance.",
      icon: <Star className="w-8 h-8" />,
      iconColor: "text-yellow-600",
      iconBg: "bg-yellow-100",
      technologies: ["Next.js", "React", "Tailwind CSS", "Vercel", "EmailJS", "Framer Motion"],
      features: [
        "Luxury design with premium aesthetics",
        "Diamond collection showcase",
        "Interactive product galleries",
        "Company heritage and story pages",
        "Contact and inquiry forms",
        "Mobile-responsive luxury experience"
      ],
      status: "Production",
      statusColor: "bg-blue-100 text-blue-800"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of my recent work and technical achievements
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              {/* Project Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className={`${project.iconBg} p-3 rounded-xl ${project.iconColor}`}>
                    {project.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${project.statusColor}`}>
                      {project.status}
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">{project.description}</p>

              {/* Features */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Features:</h4>
                <ul className="space-y-2">
                  {project.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="text-sm font-semibold text-gray-900 mb-3">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium hover:bg-blue-100 hover:text-blue-700 transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact for More Projects */}
        <div className="text-center mt-12">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Code className="w-8 h-8 text-blue-600" />
              <h3 className="text-2xl font-bold text-gray-900">Interested in More Projects?</h3>
            </div>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              I have worked on various other projects including web applications, APIs, and enterprise solutions. 
              Feel free to reach out to discuss my work in detail or explore collaboration opportunities.
            </p>
            <a 
              href="#contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              Get In Touch
            </a>
          </div>
        </div>

        {/* Project Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center bg-white rounded-xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-blue-600 mb-2">6+</div>
            <div className="text-gray-600">Projects Completed</div>
          </div>
          <div className="text-center bg-white rounded-xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-green-600 mb-2">4</div>
            <div className="text-gray-600">Production Sites</div>
          </div>
          <div className="text-center bg-white rounded-xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-purple-600 mb-2">10+</div>
            <div className="text-gray-600">Technologies Used</div>
          </div>
          <div className="text-center bg-white rounded-xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-orange-600 mb-2">100%</div>
            <div className="text-gray-600">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;