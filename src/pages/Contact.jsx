import { FaPhone } from "react-icons/fa";
const Contact = () => (
  <div className="p-10 text-center bg-gray-800 text-white">
    <h2 className="text-4xl font-bold mb-6 text-amber-400">Contact Me</h2>
    <div className="space-y-4">
      {/* Gmail */}
      <a
        href="mailto:himanshunegi1419@gmail.com"
        className="flex justify-center items-center space-x-3 text-lg"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg"
          alt="Gmail"
          className="w-8 h-8"
        />
        <span>himanshunegi1419@gmail.com</span>
      </a>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/himanshunegi7"
        target="_blank"
        rel="noopener noreferrer"
        className="flex justify-center items-center space-x-3 text-lg"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
          alt="LinkedIn"
          className="w-8 h-8"
        />
        <span>linkedin.com/in/himanshunegi7</span>
      </a>
      <p className="flex justify-center items-center gap-2 text-lg text-gray-300">
        <FaPhone className="text-lg" /> 98057-78581
      </p>
    </div>
  </div>
);

export default Contact;