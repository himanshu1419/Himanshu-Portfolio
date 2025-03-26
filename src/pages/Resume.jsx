import {
    FaDownload,
    FaEnvelope,
    FaLinkedin,
    FaGithub,
    FaPhone,
  } from "react-icons/fa";
  
  const Resume = () => {
    return (
      <div>
        {/* Resume Header */}
        <div className="p-5 bg-gray-800 text-white">
          <h2 className="text-4xl font-bold pb-2 text-center text-amber-400">
            Resume
          </h2>
          <div className="p-2 bg-gray-900 text-white border-amber-400 border-1 flex flex-col md:flex-row justify-center gap-10">
            {/* Left Column - Summary, Skills, Projects */}
            <div className="md:w-1/3 w-full space-y-6">
              {/* Summary Section */}
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold border-b-2 pb-2 text-amber-400">
                  Summary
                </h3>
                <p className="mt-2">
                  Passionate and detail-oriented Full Stack Developer skilled in
                  building responsive and efficient web applications using the
                  MERN stack. Proficient in creating user-friendly interfaces and
                  scalable backend solutions. Enthusiastic about solving problems
                  and learning new technologies to enhance development efficiency.
                </p>
              </div>
  
              {/* Skills Section */}
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold border-b-2 pb-2 text-amber-400">
                  Skills
                </h3>
                <p className="mt-3">
                  <span className="font-semibold">Frontend:</span> React.js, Redux
                  Toolkit, JavaScript, Tailwind CSS, Bootstrap
                </p>
                <p>
                  <span className="font-semibold">Backend:</span> Node.js,
                  Express.js
                </p>
                <p>
                  <span className="font-semibold">Database:</span> MongoDB
                </p>
              </div>
  
              {/* Projects Section */}
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold border-b-2 pb-2 text-amber-400">
                  Projects
                </h3>
                {[
                  {
                    name: "1. BookMart-App",
                    desc: "An online bookstore with an admin panel.",
                    tech: "React.js, Redux Toolkit, Tailwind CSS, Node.js, Express.js, MongoDB",
                    live: "https://bookmart-app.vercel.app",
                    repo: "https://github.com/himanshu1419/MERN-BookMart-App",
                  },
                  {
                    name: "2. TrendSphere-App",
                    desc: "Full-stack MERN e-commerce platform with PayPal checkout.",
                    tech: "React.js, Redux Toolkit, React Router, Tailwind CSS, Node.js, Express.js, MongoDB",
                    live: "https://trendsphere-app.vercel.app",
                    repo: "https://github.com/himanshu1419/MERN-TrendSphere-App",
                  },
                ].map(({ name, desc, tech, live, repo }, i) => (
                  <div key={i} className="mt-4">
                    <p className="text-lg font-semibold">{name}</p>
                    <p className="mt-1">{desc}</p>
                    <p className="text-sm m-1">
                      <span className="font-semibold">Tech Stack:</span> {tech}
                    </p>
                    <p className="mx-1">
                      Live Demo:
                      <a
                        href={live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:underline ml-0.5"
                      >
                        {live}
                      </a>
                      <br />
                      GitHub Repo:{" "}
                      <a
                        href={repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:underline ml-0.5"
                      >
                        {repo}
                      </a>
                    </p>
                  </div>
                ))}
              </div>
            </div>
  
            {/* Right Column - Certifications, Education, Contact */}
            <div className="md:w-2/3 w-full space-y-6">
              {/* Certifications Section */}
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold border-b-2 pb-2 text-amber-400">
                  Certifications
                </h3>
                <ul className="mt-2 space-y-2">
                  <li>Front End Web Development - Simplilearn</li>
                  <li>Full Stack Web Development - Udemy</li>
                </ul>
              </div>
  
              {/* Education Section */}
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold border-b-2 pb-2 text-amber-400">
                  Education
                </h3>
                <p className="mt-2">
                  <span className="font-semibold">
                    B.Tech (Mechanical Engineering)
                  </span>
                  <br />
                  H.P.T.U, Sundarnagar, H.P (Sept 2017 - Aug 2021)
                </p>
              </div>
  
              {/* Contact Section */}
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg md:order-none order-last">
                <a
                  href="mailto:himanshunegi1419@gmail.com"
                  className="flex items-center gap-2 text-lg hover:underline"
                >
                  <FaEnvelope className="text-lg" /> himanshunegi1419@gmail.com
                </a>
                <a
                  href="https://www.linkedin.com/in/himanshunegi7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-lg hover:underline"
                >
                  <FaLinkedin className="text-lg" />{" "}
                  linkedin.com/in/himanshunegi7
                </a>
                <a
                  href="https://github.com/himanshu1419"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-lg text-gray-300 hover:underline"
                >
                  <FaGithub className="text-lg" /> github.com/himanshu1419
                </a>
                <p className="flex items-center gap-2 text-lg text-gray-300">
                  <FaPhone className="text-lg" /> 98057-78581
                </p>
              </div>
            </div>
          </div>
  
          {/* Resume Download Button */}
          <div className="flex justify-center mt-6">
            <a
              href="/Himanshunegi_resume.pdf"
              download
              className="inline-flex items-center bg-blue-500 px-6 py-3 rounded-md text-lg font-semibold hover:bg-blue-600 transition"
            >
              <FaDownload className="mr-2" /> Download Resume
            </a>
          </div>
        </div>
      </div>
    );
  };
  
  export default Resume;