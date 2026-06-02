import React from 'react';
import {
  SiReact, SiNextdotjs, SiJavascript, SiTypescript, SiHtml5, SiCss, SiTailwindcss, SiBootstrap,
  SiNodedotjs, SiExpress, SiSpringboot, SiOpenjdk, SiPython, SiGraphql, SiDotnet,
  SiFirebase, SiDocker, SiGithubactions, SiGit, SiGithub,
  SiMongodb, SiPostgresql, SiMysql, SiPostman, SiCloudinary, SiIntellijidea,
  SiRedis, SiVercel, SiSlack, SiJira, SiFramer, SiJsonwebtokens,
} from 'react-icons/si';
import { FaAws, FaMicrosoft } from 'react-icons/fa';
import { Boxes, Code2, Network } from 'lucide-react';
import Reveal from './Reveal';

type IconComp = React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
type Skill = { name: string; Icon: IconComp; color: string };

const Skills = () => {
  const skillCategories: { title: string; color: string; skills: Skill[] }[] = [
    {
      title: 'Frontend Development',
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'React.js', Icon: SiReact, color: '#61DAFB' },
        { name: 'Next.js', Icon: SiNextdotjs, color: '#111827' },
        { name: 'JavaScript', Icon: SiJavascript, color: '#F7DF1E' },
        { name: 'TypeScript', Icon: SiTypescript, color: '#3178C6' },
        { name: 'HTML5', Icon: SiHtml5, color: '#E34F26' },
        { name: 'CSS3', Icon: SiCss, color: '#663399' },
        { name: 'Tailwind CSS', Icon: SiTailwindcss, color: '#06B6D4' },
        { name: 'Bootstrap', Icon: SiBootstrap, color: '#7952B3' },
      ],
    },
    {
      title: 'Backend Development',
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Node.js', Icon: SiNodedotjs, color: '#5FA04E' },
        { name: 'Express.js', Icon: SiExpress, color: '#111827' },
        { name: 'Spring Boot', Icon: SiSpringboot, color: '#6DB33F' },
        { name: 'Java', Icon: SiOpenjdk, color: '#E76F00' },
        { name: 'Python', Icon: SiPython, color: '#3776AB' },
        { name: '.NET / C#', Icon: SiDotnet, color: '#512BD4' },
        { name: 'REST APIs', Icon: Network, color: '#6366F1' },
        { name: 'GraphQL', Icon: SiGraphql, color: '#E10098' },
      ],
    },
    {
      title: 'Cloud & DevOps',
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'AWS', Icon: FaAws, color: '#FF9900' },
        { name: 'Azure', Icon: FaMicrosoft, color: '#0078D4' },
        { name: 'Firebase', Icon: SiFirebase, color: '#FFCA28' },
        { name: 'Docker', Icon: SiDocker, color: '#2496ED' },
        { name: 'CI/CD', Icon: SiGithubactions, color: '#2088FF' },
        { name: 'Git', Icon: SiGit, color: '#F05032' },
        { name: 'GitHub', Icon: SiGithub, color: '#111827' },
      ],
    },
    {
      title: 'Databases & Tools',
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'MongoDB', Icon: SiMongodb, color: '#47A248' },
        { name: 'PostgreSQL', Icon: SiPostgresql, color: '#4169E1' },
        { name: 'MySQL', Icon: SiMysql, color: '#4479A1' },
        { name: 'IntelliJ IDEA', Icon: SiIntellijidea, color: '#111827' },
        { name: 'Bubble.io', Icon: Boxes, color: '#3B82F6' },
        { name: 'Postman', Icon: SiPostman, color: '#FF6C37' },
        { name: 'Cloudinary', Icon: SiCloudinary, color: '#3448C5' },
      ],
    },
  ];

  const additional: Skill[] = [
    { name: 'JWT', Icon: SiJsonwebtokens, color: '#111827' },
    { name: 'Redis', Icon: SiRedis, color: '#FF4438' },
    { name: 'Framer Motion', Icon: SiFramer, color: '#0055FF' },
    { name: 'Jira', Icon: SiJira, color: '#0052CC' },
    { name: 'Slack', Icon: SiSlack, color: '#4A154B' },
    { name: 'VS Code', Icon: Code2, color: '#007ACC' },
    { name: 'Vercel', Icon: SiVercel, color: '#111827' },
  ];

  return (
    <section id="skills" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      <div className="absolute top-20 -right-20 w-80 h-80 bg-purple-200/30 rounded-full blur-3xl -z-0" />
      <div className="relative max-w-7xl mx-auto">
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
            <Reveal
              key={categoryIndex}
              delay={(categoryIndex % 2) * 0.08}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-glow transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
            >
              <div className="mb-8">
                <h3 className={`text-2xl font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                  {category.title}
                </h3>
                <div className={`mt-3 h-1 w-20 bg-gradient-to-r ${category.color} rounded-full`} />
              </div>

              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill, skillIndex) => {
                  const { Icon } = skill;
                  return (
                    <div
                      key={skillIndex}
                      className="group flex items-center gap-3 p-3 rounded-xl border border-gray-100 hover:border-gray-200 hover:bg-gray-50 transition-all duration-200"
                    >
                      <Icon
                        className="w-6 h-6 flex-shrink-0 group-hover:scale-110 transition-transform duration-200"
                        style={{ color: skill.color }}
                      />
                      <span className="text-gray-800 font-medium text-sm">{skill.name}</span>
                    </div>
                  );
                })}
              </div>
            </Reveal>
          ))}
        </div>

        {/* Additional Skills */}
        <Reveal className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8">Additional Technologies &amp; Tools</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {additional.map((tech, index) => {
              const { Icon } = tech;
              return (
                <div
                  key={index}
                  className="bg-white px-5 py-2.5 rounded-full shadow-sm hover:shadow-md transform hover:scale-105 transition-all duration-200 border border-gray-200 flex items-center gap-2"
                >
                  <Icon className="w-5 h-5" style={{ color: tech.color }} />
                  <span className="text-gray-700 font-medium text-sm">{tech.name}</span>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Skills;
