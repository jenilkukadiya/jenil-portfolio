import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Software Developer (SDE-1)",
      company: "Ajmera Infotech",
      location: "Ahmedabad, Gujarat",
      period: "Jul 2022 - Present",
      type: "Full-time",
      description: "Working as a Software Developer on multiple enterprise projects, developing scalable web applications and backend systems using modern technologies.",
      achievements: [
        "Developed RedPen project as Backend Developer using Spring Boot and MySQL",
        "Built Assetron application as .NET Developer with C# and SQL Server",
        "Created TMS (Team Management System) - Complete employee management solution",
        "Implemented features for tracking work hours, client/project details, roles, skills, and billing rates"
      ],
      technologies: ["Spring Boot", "Java", ".NET", "C#", "MySQL", "SQL Server", "React", "JavaScript"],
      projects: [
        {
          name: "RedPen",
          role: "Backend Developer",
          description: "Enterprise application for document management and workflow automation"
        },
        {
          name: "Assetron",
          role: ".NET Developer", 
          description: "Asset management system for tracking and managing company resources"
        },
        {
          name: "TMS (Team Management System)",
          role: "Full Stack Developer",
          description: "Complete employee management system with work hour tracking, project management, billing rates, and role-based access control"
        }
      ]
    },
    {
      title: "Software Developer Intern",
      company: "Ajmera Infotech",
      location: "Ahmedabad, Gujarat",
      period: "Jan 2022 - Jun 2022",
      type: "Internship",
      description: "Started as an intern and gained hands-on experience in enterprise software development. Worked on real-world projects and learned industry best practices.",
      achievements: [
        "Learned enterprise-level software development practices",
        "Contributed to backend development using Spring Boot",
        "Gained experience with database design and optimization",
        "Collaborated with senior developers on project requirements"
      ],
      technologies: ["Java", "Spring Boot", "MySQL", "HTML", "CSS", "JavaScript"]
    },
    {
      title: "Full Stack Developer",
      company: "Self Employed (Freelancing)",
      location: "Remote",
      period: "2021 - Present",
      type: "Freelance",
      description: "Working as a freelance full stack developer, creating custom web applications and solutions for various clients. Specializing in modern web technologies and delivering end-to-end solutions.",
      achievements: [
        "Developed custom web applications for multiple clients",
        "Created responsive and user-friendly interfaces using React and Next.js",
        "Built robust backend systems with Node.js and Spring Boot",
        "Successfully delivered projects on time and within budget",
        "Maintained long-term client relationships through quality work"
      ],
      technologies: ["React", "Next.js", "Node.js", "Spring Boot", "MongoDB", "MySQL", "JavaScript", "TypeScript"]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Work <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My professional journey and key contributions in software development
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;