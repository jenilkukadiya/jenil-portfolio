import React from 'react';
import { Code, Shield, Stethoscope, Factory, Package, Gem, Sparkles } from 'lucide-react';
import Reveal from './Reveal';

const Projects = () => {
  const projects = [
    {
      title: "EmbroidAI – AI Embroidery Sample Generator",
      description: "An AI-powered tool that generates photorealistic embroidery sample previews directly from a design image — eliminating the cost and turnaround time of producing physical samples. The system auto-detects color zones in a design using computer-vision segmentation, maps each zone to a chosen material from a reusable library (thread, jari, dori, sequence), and renders a lifelike preview complete with 3D thread texture, metallic highlights, and drop shadows.",
      icon: <Sparkles className="w-8 h-8" />,
      iconColor: "text-pink-600",
      iconBg: "bg-pink-100",
      technologies: ["Python", "FastAPI", "OpenCV", "scikit-image", "NumPy", "Pillow", "SQLAlchemy", "Computer Vision"],
      features: [
        "Generates photorealistic embroidery previews from a single design photo",
        "Computer-vision color-zone segmentation (one needle per detected color)",
        "Reusable material library — thread, jari, dori & sequence",
        "Per-zone material assignment for fully customized previews",
        "Dual rendering pipelines for line-art and filled-region designs",
        "3D thread texture, metallic highlights & shadows for realism",
        "Instant PNG export and shareable client previews",
        "Removes the need for costly, time-consuming physical samples"
      ],
      status: "Completed",
      statusColor: "bg-green-100 text-green-800"
    },
    {
      title: "StitchFlow ERP – Garment Manufacturing Platform",
      description: "A full-stack, multi-tenant SaaS ERP that digitizes end-to-end operations for garment and stitching manufacturers — from design and production tracking to workforce, inventory, and financial reporting. Engineered on Next.js 15 and React 19 with a PostgreSQL backend, organization-level data isolation, granular role-based access, and AI-assisted insights.",
      icon: <Factory className="w-8 h-8" />,
      iconColor: "text-blue-600",
      iconBg: "bg-blue-100",
      technologies: ["Next.js 15", "React 19", "TypeScript", "PostgreSQL", "Drizzle ORM", "Firebase Auth", "AWS S3", "Tailwind CSS", "Recharts", "Genkit AI"],
      features: [
        "Multi-tenant architecture with organization-level data isolation",
        "Role-based access control for Super-Admin, Admin, Employee & Worker",
        "Design, challan & production tracking with piece allocation",
        "Live stock, fabric, cutting & dispatch management",
        "Worker, machine/press scheduling & salary processing",
        "Monthly profit & loss and financial reporting",
        "PDF/Excel exports and barcode scanning",
        "End-to-end tested with Playwright for production reliability"
      ],
      status: "Production",
      statusColor: "bg-blue-100 text-blue-800"
    },
    {
      title: "OMS – Multi-Channel Order Management",
      description: "A centralized order management system that unifies sales across Meesho, Amazon, Flipkart, Myntra and Ajio into a single dashboard. Delivers real-time inventory synchronization, SKU mapping, returns handling, and profit analytics tailored for garment businesses — built on Next.js with a Supabase (PostgreSQL) backend.",
      icon: <Package className="w-8 h-8" />,
      iconColor: "text-purple-600",
      iconBg: "bg-purple-100",
      technologies: ["Next.js 14", "React", "TypeScript", "Supabase", "Firebase", "TanStack Query", "Zustand", "Tailwind CSS", "Recharts"],
      features: [
        "Unified multi-marketplace integration (Meesho, Amazon, Flipkart, Myntra, Ajio)",
        "Centralized SKU management with barcode/QR generation",
        "Real-time inventory tracking & cross-platform sync",
        "Unified order dashboard with advanced filtering and search",
        "Returns processing and refund tracking",
        "Profit & margin analysis per order and design",
        "Design-wise order grouping and analytics",
        "Role-based access with sync logs and audit trail"
      ],
      status: "Production",
      statusColor: "bg-blue-100 text-blue-800"
    },
    {
      title: "Diamond Business Management Portal",
      description: "A full-stack, database-driven management portal for a diamond trading business — far beyond a static site. Features secure authentication, a dynamic admin dashboard, inventory and catalog management, party (supplier/customer) tracking, and transaction handling, all backed by a live database and REST APIs for a complete back-office solution.",
      icon: <Gem className="w-8 h-8" />,
      iconColor: "text-yellow-600",
      iconBg: "bg-yellow-100",
      technologies: ["Next.js", "React", "TypeScript", "Node.js", "MongoDB", "JWT", "Tailwind CSS", "Framer Motion"],
      features: [
        "Secure authentication with role-based admin access",
        "Dynamic, database-driven product and inventory catalog",
        "Admin dashboard for managing collections and stock",
        "Party (supplier/customer) and transaction tracking",
        "Inquiry & lead management with email notifications",
        "Premium, responsive luxury UI with smooth animations"
      ],
      status: "Production",
      statusColor: "bg-blue-100 text-blue-800"
    },
    {
      title: "Doctor Appointment System",
      description: "A modern doctor appointment booking platform built with Next.js and Spring Boot. Provides doctor profiles, real-time appointment scheduling, patient management, and secure file uploads for medical documents — with automated email notifications throughout the booking lifecycle.",
      icon: <Stethoscope className="w-8 h-8" />,
      iconColor: "text-red-600",
      iconBg: "bg-red-100",
      technologies: ["Next.js", "Spring Boot", "MongoDB", "Cloudinary", "JWT", "Tailwind CSS"],
      features: [
        "Doctor profile management",
        "Online appointment booking and scheduling",
        "Patient registration and authentication",
        "Secure medical document upload",
        "Appointment history tracking",
        "Automated email notifications"
      ],
      status: "Completed",
      statusColor: "bg-green-100 text-green-800"
    },
    {
      title: "Secure Photo Gallery System",
      description: "A secure photo gallery management system where administrators create password-protected galleries and share them with clients via secure links. Built with a Spring Boot backend and React frontend, with cloud-based media storage and granular access control.",
      icon: <Shield className="w-8 h-8" />,
      iconColor: "text-emerald-600",
      iconBg: "bg-emerald-100",
      technologies: ["React", "Spring Boot", "MySQL", "JWT", "Cloudinary", "Bootstrap"],
      features: [
        "Admin-created, password-protected galleries",
        "Cloud-based photo upload and management",
        "Secure user access with password verification",
        "Download and view options for clients",
        "Gallery sharing via secure links",
        "Fully responsive across devices"
      ],
      status: "Completed",
      statusColor: "bg-green-100 text-green-800"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <Reveal className="text-center mb-16">
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full text-sm font-semibold text-blue-700 bg-blue-100/70 border border-blue-200">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A selection of full-stack platforms and applications I've designed, built, and shipped to production.
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Reveal key={index} delay={(index % 2) * 0.08} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-glow transition-all duration-300 transform hover:-translate-y-1">
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
            </Reveal>
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
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="text-center bg-white rounded-xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
            <div className="text-gray-600">Projects Completed</div>
          </div>
          <div className="text-center bg-white rounded-xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-purple-600 mb-2">15+</div>
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