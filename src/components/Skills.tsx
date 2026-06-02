import React from 'react';
import Reveal from './Reveal';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      color: "from-blue-500 to-cyan-500",
      icon: "🎨",
      skills: [
        { name: "React.js", icon: "⚛️" },
        { name: "Next.js", icon: "▲" },
        { name: "JavaScript (ES6+)", icon: "🟨" },
        { name: "TypeScript", icon: "🔷" },
        { name: "HTML5 & CSS3", icon: "🌐" },
        { name: "Tailwind CSS", icon: "💨" },
        { name: "Bootstrap", icon: "🅱️" }
      ]
    },
    {
      title: "Backend Development",
      color: "from-green-500 to-emerald-500",
      icon: "⚙️",
      skills: [
        { name: "Node.js", icon: "🟢" },
        { name: "Express.js", icon: "🚀" },
        { name: "Spring Boot", icon: "🍃" },
        { name: "Java", icon: "☕" },
        { name: "Python", icon: "🐍" },
        { name: "RESTful APIs", icon: "🔗" },
        { name: "GraphQL", icon: "📊" }
      ]
    },
    {
      title: "Cloud & DevOps",
      color: "from-orange-500 to-red-500",
      icon: "☁️",
      skills: [
        { name: "AWS", icon: "☁️" },
        { name: "Firebase", icon: "🔥" },
        { name: "Azure", icon: "🌐" },
        { name: "Docker", icon: "🐳" },
        { name: "CI/CD", icon: "🔄" },
        { name: "Git & GitHub", icon: "📚" }
      ]
    },
    {
      title: "Database & Tools",
      color: "from-purple-500 to-pink-500",
      icon: "🛠️",
      skills: [
        { name: "MongoDB", icon: "🍃" },
        { name: "PostgreSQL", icon: "🐘" },
        { name: "MySQL", icon: "🗄️" },
        { name: "IntelliJ IDEA", icon: "💡" },
        { name: "Bubble.io", icon: "🫧" },
        { name: "Postman", icon: "📮" },
        { name: "Cloudinary", icon: "☁️" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <Reveal className="text-center mb-16">
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full text-sm font-semibold text-blue-700 bg-blue-100/70 border border-blue-200">
            Tech Stack
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My expertise across different technologies and development tools
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{category.icon}</span>
                  <h3 className={`text-2xl font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                    {category.title}
                  </h3>
                </div>
                <div className={`h-1 w-20 bg-gradient-to-r ${category.color} rounded-full`}></div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group">
                    <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-all duration-200">
                      <span className="text-2xl group-hover:scale-110 transition-transform duration-200">
                        {skill.icon}
                      </span>
                      <span className="text-gray-800 font-medium group-hover:text-gray-900 transition-colors">
                        {skill.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8">Additional Technologies & Tools</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: "JWT", icon: "🔐" },
              { name: "Redis", icon: "🗃️" },
              { name: "EmailJS", icon: "📧" },
              { name: "Framer Motion", icon: "🎭" },
              { name: "Jira", icon: "📋" },
              { name: "Slack", icon: "💬" },
              { name: "VS Code", icon: "💻" },
              { name: "Vercel", icon: "▲" }
            ].map((tech, index) => (
              <div 
                key={index}
                className="bg-white px-6 py-3 rounded-full shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200 border border-gray-200 flex items-center gap-2"
              >
                <span className="text-lg">{tech.icon}</span>
                <span className="text-gray-700 font-medium">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;