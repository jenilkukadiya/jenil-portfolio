import React from 'react';
import { Award, ExternalLink, Calendar, CheckCircle } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: "AWS Certified Solutions Architect - Associate",
      issuer: "Amazon Web Services",
      date: "2023",
      credentialId: "AWS-SAA-2023-001",
      image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Validates expertise in designing distributed systems on AWS platform",
      skills: ["AWS Architecture", "Cloud Security", "Cost Optimization", "High Availability"],
      verifyLink: "https://aws.amazon.com/verification",
      status: "Active"
    },
    {
      title: "AWS Certified Developer - Associate",
      issuer: "Amazon Web Services",
      date: "2022",
      credentialId: "AWS-DEV-2022-001",
      image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Demonstrates proficiency in developing applications on AWS",
      skills: ["Lambda Functions", "API Gateway", "DynamoDB", "S3"],
      verifyLink: "https://aws.amazon.com/verification",
      status: "Active"
    },
    {
      title: "Google Cloud Professional Cloud Architect",
      issuer: "Google Cloud",
      date: "2023",
      credentialId: "GCP-PCA-2023-001",
      image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Validates ability to design and manage Google Cloud solutions",
      skills: ["GCP Architecture", "Kubernetes", "BigQuery", "Cloud Functions"],
      verifyLink: "https://cloud.google.com/certification",
      status: "Active"
    },
    {
      title: "Microsoft Azure Fundamentals",
      issuer: "Microsoft",
      date: "2022",
      credentialId: "AZ-900-2022-001",
      image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Foundational knowledge of cloud services and Azure",
      skills: ["Azure Services", "Cloud Concepts", "Security", "Pricing"],
      verifyLink: "https://docs.microsoft.com/en-us/learn/certifications",
      status: "Active"
    },
    {
      title: "MongoDB Certified Developer",
      issuer: "MongoDB University",
      date: "2021",
      credentialId: "MDB-DEV-2021-001",
      image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Expertise in MongoDB database development and operations",
      skills: ["MongoDB", "Aggregation", "Indexing", "Schema Design"],
      verifyLink: "https://university.mongodb.com/certification",
      status: "Active"
    },
    {
      title: "React Developer Certification",
      issuer: "Meta (Facebook)",
      date: "2021",
      credentialId: "META-REACT-2021-001",
      image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Advanced React development skills and best practices",
      skills: ["React", "Redux", "Hooks", "Testing"],
      verifyLink: "https://developers.facebook.com/certification",
      status: "Active"
    }
  ];

  const upcomingCerts = [
    "AWS Certified Solutions Architect - Professional",
    "Kubernetes Certified Application Developer",
    "Docker Certified Associate"
  ];

  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Certifications & <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Credentials</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional certifications that validate my expertise in cloud technologies and development
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              {/* Certificate Header */}
              <div className="relative h-32 bg-gradient-to-br from-blue-500 to-purple-600 p-6 flex items-center justify-center">
                <Award className="w-12 h-12 text-white" />
                <div className="absolute top-4 right-4">
                  <span className="bg-white/20 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                    <CheckCircle size={12} />
                    {cert.status}
                  </span>
                </div>
              </div>

              {/* Certificate Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight">{cert.title}</h3>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-blue-600 font-semibold">{cert.issuer}</span>
                  <div className="flex items-center gap-1 text-gray-500 text-sm">
                    <Calendar size={14} />
                    <span>{cert.date}</span>
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{cert.description}</p>

                {/* Skills */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Skills:</h4>
                  <div className="flex flex-wrap gap-1">
                    {cert.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Credential ID */}
                <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                  <span className="text-xs text-gray-500">Credential ID:</span>
                  <p className="text-sm font-mono text-gray-700">{cert.credentialId}</p>
                </div>

                {/* Verify Button */}
                <a 
                  href={cert.verifyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm font-medium"
                >
                  <ExternalLink size={16} />
                  Verify Certificate
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Upcoming Certifications */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Upcoming Certifications</h3>
          <div className="grid md:grid-cols-3 gap-4">
            {upcomingCerts.map((cert, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 p-4 rounded-xl border border-blue-100">
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <Award className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">{cert}</h4>
                    <span className="text-blue-600 text-xs">In Progress</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certification Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">6+</div>
            <div className="text-gray-600">Active Certifications</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">3</div>
            <div className="text-gray-600">Cloud Platforms</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">2023</div>
            <div className="text-gray-600">Latest Certification</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">100%</div>
            <div className="text-gray-600">Pass Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;