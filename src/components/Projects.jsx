export default function Projects() {
  const projects = [
    {
      name: "Portfolio Website",
      description: "My personal portfolio built with React, Tailwind, and Vite.",
      link: "https://huzeyfa-portfolio-three.vercel.app",
    },
    {
      name: "Salary Analysis",
      description: "Demonstrates Data cleaning, transformation, and professional visualization skills",
      link: "https://github.com/Huzeyfa88/Salary-analysis",
    },
    {
      name: "Clinic Website",
      description: "Full-stack website for Dr. Feysel Dermatology Clinic.",
      link: "https://lovable.dev/projects/2173df7d-dbe1-4583-a531-873c8aa19922",
    },
    {
      name: "Shuzi E-commerce",
      description: "E-commerce website using Node.js, Express, React, MongoDB.",
      link: "#",
    },
  ];

  return (
    <section
  id="projects"
  data-aos="zoom-in"
  className="min-h-screen flex flex-col justify-center items-center text-center px-4 bg-white"
>

      <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Projects</h2>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl">
        {projects.map((project) => (
          <div key={project.name} className="p-6 bg-gray-100 rounded-lg shadow-md hover:scale-105 transition">
            <h3 className="text-2xl font-semibold mb-2">{project.name}</h3>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <a
              href={project.link}
              className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
