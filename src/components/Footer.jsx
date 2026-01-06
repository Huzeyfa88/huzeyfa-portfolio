import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
  FaTelegram,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-2xl font-bold mb-2">
          Huzeyfa Ahmed
        </h2>

        <p className="text-gray-400 mb-6">
          Full-Stack Developer | React • Node.js • MongoDB
        </p>

        <div className="flex justify-center gap-6 text-2xl mb-6">
          <a href="#"><FaGithub /></a>
          <a href="#"><FaLinkedin /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaWhatsapp /></a>
          <a href="#"><FaTelegram /></a>
        </div>

        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Huzeyfa Ahmed. All rights reserved.
        </p>

      </div>
    </footer>
  );
}
