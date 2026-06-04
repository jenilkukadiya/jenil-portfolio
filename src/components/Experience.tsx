import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import Reveal from './Reveal';

const Experience = () => {
  const experiences = [
    {
      title: "Full Stack Developer (Freelance)",
      company: "Self-Employed",
      location: "Remote",
      period: "2021 - Present",
      type: "Freelance",
      description: "Designing and shipping end-to-end web and software products for clients across industries — from AI-powered tools and ERP systems to e-commerce and management platforms — owning everything from architecture and development to deployment and support.",
      achievements: [
        "Delivered end-to-end products including ERP, order-management, and AI-powered applications",
        "Engineered full-stack solutions with React, Next.js, Node.js and Python (FastAPI)",
        "Designed scalable database schemas across PostgreSQL, MongoDB and Supabase",
        "Owned the complete product lifecycle: requirements, architecture, development, deployment & maintenance",
        "Built long-term client relationships through reliable, high-quality delivery"
      ],
      technologies: ["React", "Next.js", "Node.js", "Python", "FastAPI", "PostgreSQL", "MongoDB", "TypeScript", "Tailwind CSS"]
    },
    {
      title: "Senior Software Engineer (Senior SDE)",
      company: "Ajmera Infotech",
      location: "Ahmedabad, Gujarat",
      period: "2022 - 2023",
      type: "Full-time",
      description: "Led end-to-end design and delivery of features for Assetron (app.assetron.dev), a cloud-based asset management platform — driving full-stack development, mobile delivery, DevOps on Microsoft Azure, and AI-agent integration across the product.",
      achievements: [
        "Architected and shipped major features end-to-end across the Assetron web app, REST APIs, and Flutter mobile app",
        "Owned DevOps on Microsoft Azure — CI/CD pipelines, environment configuration, and production deployments",
        "Designed and integrated AI-agent capabilities to automate workflows and accelerate user productivity",
        "Improved application performance, reliability, and automated test coverage (Playwright & Appium) across web and mobile",
        "Mentored junior engineers and led technical design and code-review discussions"
      ],
      technologies: ["React", "TypeScript", ".NET", "C#", "Azure", "CI/CD", "Flutter", "Firebase", "REST APIs", "AI Agents", "SQL Server"],
      projects: [
        {
          name: "Assetron — Web Platform",
          role: "Senior Full Stack Engineer",
          description: "End-to-end feature delivery on a React + .NET cloud asset-management platform serving enterprise users"
        },
        {
          name: "Assetron — Mobile App",
          role: "Mobile Developer",
          description: "Cross-platform Flutter application with push notifications and a seamless offline-capable experience"
        },
        {
          name: "Azure DevOps & AI",
          role: "DevOps / AI Engineer",
          description: "CI/CD pipelines on Azure and AI-agent automation integrated directly into the product workflow"
        }
      ]
    },
    {
      title: "Software Engineer II (SDE II)",
      company: "Ajmera Infotech",
      location: "Ahmedabad, Gujarat",
      period: "2020 - 2022",
      type: "Full-time",
      description: "Built and scaled core features of the Assetron platform end-to-end — spanning the React/TypeScript frontend, .NET backend services, and the Flutter mobile application with real-time push notifications.",
      achievements: [
        "Developed core Assetron modules end-to-end — from UI components to backend REST APIs and database design",
        "Built and shipped the Flutter mobile app, including FCM push notifications and device management",
        "Implemented a robust notifications system and secure authentication/logout flows across web and mobile",
        "Authored automated E2E tests (Playwright, Appium) to safeguard critical user journeys",
        "Collaborated in an agile team using Azure-hosted development environments and CI workflows"
      ],
      technologies: ["React", "TypeScript", ".NET", "C#", "Flutter", "Dart", "Firebase (FCM)", "Azure", "REST APIs", "SQL Server"],
      projects: [
        {
          name: "Assetron — Core Features",
          role: "Full Stack Developer",
          description: "Built end-to-end web modules with React and .NET, including dashboards and asset workflows"
        },
        {
          name: "Assetron — Mobile",
          role: "Mobile Developer",
          description: "Flutter app with FCM push notifications, device registration, and notification preferences"
        },
        {
          name: "TMS (Team Management System)",
          role: "Full Stack Developer",
          description: "Employee management system with time tracking, project & billing management, and role-based access"
        }
      ]
    },
    {
      title: "Software Engineer I (SDE I)",
      company: "Ajmera Infotech",
      location: "Ahmedabad, Gujarat",
      period: "2019 - 2020",
      type: "Full-time",
      description: "Began my engineering career building enterprise web applications and backend services, quickly taking ownership of features while adopting industry best practices in a fast-paced product team.",
      achievements: [
        "Developed backend services and REST APIs using Java/Spring Boot and .NET/C#",
        "Contributed to the RedPen platform for document management and workflow automation",
        "Designed and optimized relational database schemas in MySQL and SQL Server",
        "Built responsive UI features and resolved defects across the full stack",
        "Adopted enterprise practices: version control, code reviews, and agile delivery"
      ],
      technologies: ["Java", "Spring Boot", "C#", ".NET", "MySQL", "SQL Server", "JavaScript", "HTML/CSS"],
      projects: [
        {
          name: "RedPen",
          role: "Backend Developer",
          description: "Enterprise document management and workflow automation platform built with Spring Boot and MySQL"
        }
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <Reveal className="text-center mb-16">
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full text-sm font-semibold text-blue-700 bg-blue-100/70 border border-blue-200">
            Career Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My professional journey and key contributions in software development
          </p>
        </Reveal>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Reveal key={index} delay={index * 0.05} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-glow transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{exp.title}</h3>
                  <div className="flex items-center gap-2 text-blue-600 font-semibold mb-2">
                    <span>{exp.company}</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-gray-600 mb-4">
                    <div className="flex items-center gap-1">
                      <MapPin size={16} />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      <span>{exp.period}</span>
                    </div>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {exp.type}
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">{exp.description}</p>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Achievements:</h4>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="flex items-start gap-2 text-gray-700">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Projects worked on */}
              {exp.projects && (
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Projects Worked On:</h4>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {exp.projects.map((project, projIndex) => (
                      <div key={projIndex} className="bg-gray-50 p-4 rounded-lg">
                        <h5 className="font-semibold text-gray-900 mb-1">{project.name}</h5>
                        <p className="text-blue-600 text-sm font-medium mb-2">{project.role}</p>
                        <p className="text-gray-600 text-sm">{project.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-blue-100 hover:text-blue-700 transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;