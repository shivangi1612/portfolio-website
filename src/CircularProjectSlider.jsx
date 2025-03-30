import { motion } from "framer-motion";

const projects = [
  { id: 1, img: "port1.png", title: "Music Visualizer", url: "https://visualizethemusic.netlify.app/" },
  { id: 2, img: "port2.png", title: "Block Game", url: "https://pixiblock.netlify.app/" },
  { id: 3, img: "port3.png", title: "Art Editor", url: "https://pixelifytheart.netlify.app/" },
  { id: 4, img: "port4.png", title: "Blog Website", url: "https://pixelwisdom.netlify.app/" },
  { id: 5, img: "port5.png", title: "Clothing Store", url: "https://thesoulstore.netlify.app/" },
];

const CircularProjectSlider = () => {
  return (
    <div className="overflow-hidden w-full py-10 flex justify-center relative">
      <motion.div
        className="flex space-x-6"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 10,
        }}
        style={{ display: "flex", width: "200%" }}
      >
        {[...projects, ...projects].map((project, index) => (
          <div key={index} className="relative w-[360px] h-[450px] flex-shrink-0 flex flex-col items-center p-4 rounded-xl shadow-lg">
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-[240px] object-cover rounded-lg"
            />
            <div className="w-full flex items-center justify-between mt-4 px-2">
              <p className="text-white text-lg font-semibold">{project.title}</p>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 bg-cyan-500 hover:bg-cyan-600 text-white px-2 py-1 rounded-lg transition"
            >
              View Project
            </a>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default CircularProjectSlider;
