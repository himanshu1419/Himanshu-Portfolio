import { motion } from "framer-motion";


const Hero = () => {
  return (
    <div className="h-screen flex flex-col md:flex-row items-center justify-center bg-gray-800 text-white p-10">
      
      {/* Left Side - Text Content */}
      <div className="md:w-1/2 text-left">
        {/* First Line */}
        <motion.h1
          className="text-2xl sm:text-2xl text-amber-400"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hello, I'm
        </motion.h1>

        {/* Second Line - Name */}
        <motion.h2
          className="text-6xl sm:text-7xl font-bold mt-2  text-amber-400"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Himanshu Negi
        </motion.h2>

        {/* Third Line - Description */}
        <motion.p
          className="text-2xl sm:text-2xl text-gray-300 mt-4"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          Enthusiastic Web Developer crafting scalable and user-friendly applications.
        </motion.p>
      </div>

      {/* Right Side - Image */}
      <motion.div
        className="md:w-1/2 flex justify-center mt-8 md:mt-0"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <img
          src="Himanshu_img.jpg"
          alt="Himanshu Negi"
          className="w-60 h-60 md:w-80 md:h-80 object-cover rounded-full border-4 border-gray-600 shadow-lg"
        />
      </motion.div>

    </div>
  );
};

export default Hero;