import React from "react";

// Single-file React component portfolio for NARMADHA C
// Uses Tailwind CSS utility classes (no external CSS import required here)

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <header className="max-w-4xl mx-auto p-6 flex items-center gap-6">
        <div className="w-28 h-28 rounded-full bg-gray-200 dark:bg-gray-800 flex-shrink-0 overflow-hidden shadow-lg">
          {/* Placeholder portrait */}
          <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <rect width="100" height="100" fill="none" />
            <g fill="#cbd5e1">
              <circle cx="50" cy="34" r="18" />
              <rect x="20" y="58" width="60" height="28" rx="6" />
            </g>
          </svg>
        </div>

        <div className="flex-1">
          <h1 className="text-5xl font-extrabold leading-tight tracking-tight">NARMADHA C</h1>
          <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">An enthusiastic IT student passionate about coding and creative problem-solving.</p>

          <div className="mt-4 flex flex-wrap gap-3 items-center">
            <a href="#projects" className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg shadow">View Projects</a>
            <a href="#contact" className="px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg">Contact</a>
            <a href="/resume.pdf" className="px-4 py-2 text-sm rounded-lg bg-gray-200 dark:bg-gray-800">Download Resume</a>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto p-6 space-y-10">
        {/* About */}
        <section id="about" className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow">
          <h2 className="text-2xl font-semibold mb-3">About Me</h2>
          <p className="text-gray-700 dark:text-gray-300">Hi! I’m Narmadha, an IT student with a strong interest in web development, algorithms, and building useful tools. I enjoy solving problems through code and learning new technologies. This portfolio showcases my projects, skills, and academic background.</p>
        </section>

        {/* Education & Skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <section id="education" className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-2">Education</h3>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li>
                <div className="font-medium">Bachelor of Science / B.Tech in Information Technology</div>
                <div className="text-sm">Your College Name — Expected Graduation: 2026</div>
              </li>
            </ul>
          </section>

          <section id="skills" className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-2">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {['HTML', 'CSS', 'JavaScript', 'React', 'Python', 'Data Structures'].map(skill => (
                <span key={skill} className="text-sm px-3 py-1 bg-gray-100 dark:bg-gray-900 rounded-full border border-gray-200 dark:border-gray-700">{skill}</span>
              ))}
            </div>
          </section>
        </div>

        {/* Projects */}
        <section id="projects" className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow">
          <h2 className="text-2xl font-semibold mb-4">Projects</h2>

          <div className="space-y-4">
            <article className="p-4 border border-gray-100 dark:border-gray-700 rounded-lg">
              <h4 className="font-semibold">Project Title One</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">A short description of the project, the tech used, and what you learned.</p>
              <div className="mt-3 text-xs">
                <a href="#" className="underline">View code</a>
                <span className="mx-2">•</span>
                <a href="#" className="underline">Live demo</a>
              </div>
            </article>

            <article className="p-4 border border-gray-100 dark:border-gray-700 rounded-lg">
              <h4 className="font-semibold">Project Title Two</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">A short description of the project, the tech used, and what you learned.</p>
              <div className="mt-3 text-xs">
                <a href="#" className="underline">View code</a>
                <span className="mx-2">•</span>
                <a href="#" className="underline">Live demo</a>
              </div>
            </article>
          </div>
        </section>

        {/* Certifications */}
        <section id="certs" className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow">
          <h2 className="text-2xl font-semibold mb-3">Certifications</h2>
          <ul className="text-gray-700 dark:text-gray-300 space-y-2">
            <li>Certification Name — Issuer</li>
            <li>Certification Name — Issuer</li>
          </ul>
        </section>

        {/* Contact */}
        <section id="contact" className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow">
          <h2 className="text-2xl font-semibold mb-3">Contact</h2>
          <p className="text-gray-700 dark:text-gray-300">Email: <a href="mailto:narmathachinnadurai2007@gmail.com" className="underline">narmathachinnadurai2007@gmail.com</a></p>

          <form className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
            <input placeholder="Your name" className="p-3 rounded-md border border-gray-200 dark:border-gray-700 bg-transparent" />
            <input placeholder="Your email" className="p-3 rounded-md border border-gray-200 dark:border-gray-700 bg-transparent" />
            <textarea placeholder="Message" className="p-3 rounded-md border border-gray-200 dark:border-gray-700 bg-transparent col-span-1 md:col-span-2" rows={4}></textarea>
            <button type="button" className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md">Send Message</button>
          </form>
        </section>
      </main>

      <footer className="max-w-4xl mx-auto p-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} NARMADHA C — Built with ❤️
      </footer>
    </div>
  );
}
