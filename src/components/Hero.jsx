import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
  FaTelegram,
  FaFilePdf
} from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 text-white px-6 pt-24"
    >
      <div className="text-center max-w-3xl">
        {/* Hero Heading */}
        <h1 className="text-5xl md:text-6xl font-extrabold">
          Hi, I’m <span className="text-yellow-300">Huzeyfa Ahmed</span>
        </h1>

        <p className="mt-6 text-lg text-gray-200">
          Full-Stack Developer | React • Node.js • MongoDB
        </p>

        {/* Buttons Section */}
        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <a
            href="#projects"
            className="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-300 transition"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="border border-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition"
          >
            Contact Me
          </a>

          <a
            href="/HuzeyfaAhmed_CV.pdf"
            download="HuzeyfaAhmed_CV.pdf"
            className="bg-green-500 text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-green-600 transition"
          >
            <FaFilePdf /> Download CV
          </a>
        </div>

        {/* Social Icons */}
        <div className="mt-10 flex justify-center gap-6 text-2xl">
          <a
            href="https://github.com/Huzeyfa88"
            target="_blank"
            className="hover:text-gray-300 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/huzeyfa-ahmed-8b5240373"
            target="_blank"
            className="hover:text-blue-500 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://instagram.com/huze_88"
            target="_blank"
            className="hover:text-pink-500 transition"
          >
            <FaInstagram />
          </a>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            className="hover:text-sky-400 transition"
          >
            <FaTwitter />
          </a>
          <a
            href="https://wa.me/251913538888"
            target="_blank"
            className="hover:text-green-500 transition"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://t.me/huzee88"
            target="_blank"
            className="hover:text-blue-400 transition"
          >
            <FaTelegram />
          </a>
        </div>
      </div>
    </section>
  );
}
