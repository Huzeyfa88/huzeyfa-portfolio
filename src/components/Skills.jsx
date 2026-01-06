const skills = [
  "HTML", "CSS", "JavaScript", "React",
  "Node.js", "Express", "MongoDB",
  "Tailwind CSS", "Git", "GitHub"
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-white px-6">
      <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>
      <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
        {skills.map(skill => (
          <div key={skill} className="bg-gray-100 p-6 rounded-xl text-center font-semibold shadow hover:scale-105 transition">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
