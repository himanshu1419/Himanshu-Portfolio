import { FaReact, FaNodeJs, FaJsSquare, FaCss3Alt, FaBootstrap } from "react-icons/fa";
import { SiRedux, SiExpress, SiMongodb, SiTailwindcss } from "react-icons/si";

const skills = [
  { name: "React.js", icon: <FaReact className="text-blue-400" /> },
  { name: "Redux", icon: <SiRedux className="text-purple-500" /> },
  { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-blue-500" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-500" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
  { name: "Bootstrap", icon: <FaBootstrap className="text-purple-600" /> },
];

const About = () => {
  return (
    <div className="p-10 text-center bg-gray-800 text-white">
      <h2 className="text-4xl font-bold mb-6 text-amber-400">About Me</h2>

      <p className="text-lg text-left leading-relaxed">
        I’m <span className="font-semibold">Himanshu Negi</span>, a passionate 
        <span className="font-semibold"> Web Developer</span> with a strong foundation in 
        <span className="font-semibold"> MERN Stack</span> technologies. As a <span className="font-semibold">fresher</span>, 
        I have hands-on experience working with 
        <span className="font-semibold"> React.js, Redux, Node.js, Express.js, JavaScript, MongoDB, and Tailwind CSS</span>, 
        allowing me to build dynamic, responsive, and user-friendly web applications.
      </p>

      <br />

      <p className="text-lg text-left leading-relaxed">
        I enjoy solving complex problems, optimizing performance, and creating 
        <span className="font-semibold"> seamless user experiences</span>. My goal is to continuously 
        <span className="font-semibold"> learn and grow</span> in the ever-evolving field of web development. 
        I’m eager to contribute my skills to <span className="font-semibold"> real-world projects</span>, 
        collaborate with like-minded professionals, and bring innovative ideas to life.
      </p>

      <br />

      <p className="text-lg text-left leading-relaxed font-semibold">
        Let’s connect and create something amazing together! 
      </p>

      {/* Skills Section */}
      <div className="mt-10">
        <h3 className="text-3xl font-bold mb-4 text-amber-400">My Skills</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 justify-center">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center group">
              <div className="text-5xl transition-transform transform group-hover:scale-110">
                {skill.icon}
              </div>
              <p className="mt-2 font-semibold group-hover:text-blue-400 transition-colors">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;