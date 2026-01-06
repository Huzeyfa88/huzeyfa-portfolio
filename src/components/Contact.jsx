import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 bg-gray-100 px-6"
    >
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-10 text-center">
        
        <h2 className="text-4xl font-bold mb-6">
          Contact Me
        </h2>

        <p className="text-gray-600 mb-10 text-lg">
          Feel free to reach out to me directly via phone or email.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-6">

          {/* Phone */}
          <a
            href="tel:+251913538888"
            className="flex items-center justify-center gap-4 bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-blue-700 transition"
          >
            <FaPhoneAlt />
            +251913538888
          </a>

          {/* Email */}
          <a
            href="mailto:huzeyfaahmed1@gmail.com"
            className="flex items-center justify-center gap-4 bg-gray-900 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-800 transition"
          >
            <FaEnvelope />
            huzeyfaahmed1@gmail.com
          </a>

        </div>
      </div>
    </section>
  );
}
