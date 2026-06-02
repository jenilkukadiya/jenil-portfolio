import React from 'react';
import { GraduationCap, MapPin, Award, ExternalLink } from 'lucide-react';
import Reveal from './Reveal';

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Engineering in Computer Engineering",
      institution: "Nirma University",
      location: "Ahmedabad, Gujarat, India",
      grade: "CGPA: 9.6/10",
      description: "Specialized in software engineering, data structures, algorithms, and computer systems. Completed projects in web development, database management, and software design.",
      highlights: [
        "President of CodeAdda - Provided environment for DSA practice",
        "Helped juniors solve programming problems and improve coding skills",
        "Hackathon Winner - Inter-college programming competition",
        "Strong foundation in computer science fundamentals"
      ],
      coursework: [
        "Data Structures & Algorithms",
        "Software Engineering",
        "Database Management Systems",
        "Computer Networks",
        "Operating Systems",
        "Web Technologies"
      ],
      codingProfiles: [
        { name: "LeetCode", url: "https://leetcode.com/jenilkukadiya/" },
        { name: "Codeforces", url: "https://codeforces.com/profile/jenil_kukadiya" },
        { name: "CodeChef", url: "https://www.codechef.com/users/jenil_kukadiya" }
      ]
    }
  ];

  const achievements = [
    {
      title: "President of CodeAdda",
      description: "Led the coding club, organized DSA practice sessions and helped juniors with problem-solving"
    },
    {
      title: "Hackathon Winner",
      description: "First place in inter-college programming competition for innovative solution"
    },
    {
      title: "Academic Excellence",
      description: "Maintained consistent academic performance with 9.6 CGPA throughout the program"
    }
  ];

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <Reveal className="text-center mb-16">
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full text-sm font-semibold text-blue-700 bg-blue-100/70 border border-blue-200">
            Academics
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Education & <span className="text-gradient">Achievements</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My academic background and notable accomplishments
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Education Details */}
          <div className="lg:col-span-2">
            {education.map((edu, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <GraduationCap className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{edu.degree}</h3>
                    <h4 className="text-xl text-blue-600 font-semibold mb-2">{edu.institution}</h4>
                    <div className="flex items-center gap-1 text-gray-600 mb-2">
                      <MapPin size={16} />
                      <span>{edu.location}</span>
                    </div>
                    <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium inline-block mb-4">
                      {edu.grade}
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed">{edu.description}</p>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h5 className="text-lg font-semibold text-gray-900 mb-3">Academic Highlights:</h5>
                    <ul className="space-y-2">
                      {edu.highlights.map((highlight, hIndex) => (
                        <li key={hIndex} className="flex items-start gap-2 text-gray-700">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h5 className="text-lg font-semibold text-gray-900 mb-3">Key Coursework:</h5>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course, cIndex) => (
                        <span 
                          key={cIndex}
                          className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Coding Profiles */}
                <div>
                  <h5 className="text-lg font-semibold text-gray-900 mb-3">Coding Profiles:</h5>
                  <div className="flex flex-wrap gap-3">
                    {edu.codingProfiles.map((profile, pIndex) => (
                      <a 
                        key={pIndex}
                        href={profile.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-2 rounded-lg hover:bg-blue-100 transition-colors duration-200"
                      >
                        <ExternalLink size={16} />
                        <span className="font-medium">{profile.name}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Achievements Sidebar */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Notable Achievements</h3>
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start gap-3 mb-3">
                  <div className="bg-yellow-100 p-2 rounded-full">
                    <Award className="w-5 h-5 text-yellow-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-900">{achievement.title}</h4>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{achievement.description}</p>
              </div>
            ))}

            {/* Additional Info */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-100">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Academic Stats</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Overall CGPA</span>
                  <span className="font-semibold text-blue-600">9.6/10</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Specialization</span>
                  <span className="font-semibold text-blue-600">Computer Engineering</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Academic Projects</span>
                  <span className="font-semibold text-blue-600">Multiple</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;