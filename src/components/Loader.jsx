import { motion } from "framer-motion";
import logo from "../assets/logo.png";

function Loader() {
  return (
    <div className="flex items-center justify-center h-screen w-screen bg-white">
      <div className="relative w-[100px] h-[100px]">
        <motion.div
          className="absolute w-full h-full rounded-full border-8 border-t-red-900 border-red-200 "
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
        />

        <motion.img
          src={logo}
          alt="Logo"
          className="w-[70px] h-[70px] opacity-35 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "easeInOut",
          }}
        />
      </div>
    </div>
  );
}

export default Loader;
