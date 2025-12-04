import React from 'react';

export default function Projects() {
  const projects = [
    {
      title: 'MathTrade',
      description:
        'MathTrade is a dynamic web application built with React.js and Tailwind CSS, designed to make practicing math concepts engaging and user‑friendly. With a responsive layout that adapts to both desktop and mobile screens, MathTrade offers a clean and intuitive interface that encourages consistent learning.',
      tech: ['React', 'Tailwind', 'JavaScript'],
      link: 'https://mathtrade1.netlify.app/',
    },
    {
      title: 'Chat App',
      description:
        'A modern full-stack chat application built with React.js, Node.js, Express, and MongoDB. Chatify allows users to register, log in, and chat in real-time with other users securely. The app features a responsive design, real-time messaging, and user authentication, demonstrating a complete understanding of frontend and backend development.',
      tech: ['React', 'CSS', 'JavaScript'],
      link: 'https://chat-app-server-5hcy.onrender.com',
    },
    {
      title: 'AAM Tech Solution',
      description:
        'AAM Tech Solution is a company specializing in trucks and truck-related products. They supply heavy-duty trucks, spare parts, and accessories to commercial and industrial customers, and offer sales, maintenance support, and customized fleet solutions. The website highlights their product catalog, services, and contact options for inquiries and orders.',
      tech: ['MERN Stack'],
      link: 'https://www.aammg.com',
    },
    {
      title: 'Employee Salary Management System',
      description:
        "An Employee Salary Management System is a web-based application designed to streamline and automate the process of managing employee salaries within an organization. Built using the MERN stack (MongoDB, Express.js, React.js, Node.js), this system provides a user-friendly interface for HR personnel and administrators to efficiently handle salary calculations, deductions, bonuses, and generate payslips.",
      tech: ['MERN Stack'],
      link: '',
    }
  ];

  return (
    <section id="Project" className="pt-12 scroll-mt-20 px-4 sm:px-6 lg:px-8">
      {/* Centered the heading */}
      <h2 className="text-4xl font-semibold mb-6 text-center">Projects</h2>

      {/* Centering Changes:
          1. mx-auto: Centers the block element horizontally.
          2. max-w-4xl: Sets a maximum width so it doesn't span the full screen.
          3. grid-cols-1: Ensure cards stack on small screens (default).
      */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border border-slate-200 dark:border-slate-800 rounded-xl p-5 bg-white dark:bg-slate-900 shadow-sm hover:shadow-md transition"
          >
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-slate-600 dark:text-slate-300 mb-3">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-3">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="text-xs px-2 py-1 bg-sky-100 dark:bg-sky-800 text-sky-700 dark:text-sky-200 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="text-sky-500 hover:underline"
              >
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}