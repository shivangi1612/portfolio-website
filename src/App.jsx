import React from 'react';
import { motion } from 'framer-motion';
import ScrollVelocity from './ScrollVelocity';
import { Linkedin , Mail } from 'lucide-react';
import { FaGithub, FaXTwitter } from "react-icons/fa6";
import { Card, CardFooter, Image, Button } from "@heroui/react";
import CircularProjectSlider from './CircularProjectSlider';
function App() {

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-black/50 backdrop-blur-lg z-50">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img
              src="mypicture.jpg"
              alt="Profile"
              className="w-10 h-10 rounded-full"
            />
            <motion.span 
              className="text-xl font-bold bg-gradient-to-r from-cyan-500 to-teal-500 bg-clip-text text-transparent"
              {...fadeIn}
            >
              Shivangi
            </motion.span>
          </div>
          
          <div className="flex items-center space-x-8">
            <div className="hidden md:flex space-x-8">
              {['About', 'Projects', 'Connect'].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-cyan-400 transition-colors hover:scale-105"
                  whileHover={{ scale: 1.05 }}
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen pt-20">
        <div className="max-w-6xl mx-auto px-4 py-20 md:flex items-center justify-between">
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              I'm Shivangi Singh.
              <span className="block mt-2">I live in Bengaluru, India</span>
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-teal-500">
                where I build the web.
              </span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl mb-8">
              A passionate frontend developer crafting beautiful and functional digital experiences
              with modern web technologies.
            </p>
          </motion.div>

          <motion.div
            className="md:w-1/2 flex justify-center mt-10 md:mt-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-80 h-80">
              <img
                src="mypicture.jpg"
                alt="Profile"
                className="w-full h-full object-cover rounded-2xl transform rotate-3 transition-transform hover:rotate-0"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
<section id="about" className="py-20 bg-[#111111] flex justify-center items-center">
  <motion.div
    className="max-w-6xl mx-auto px-4 text-center"
    variants={staggerContainer}
    initial="initial"
    whileInView="animate"
    viewport={{ once: true }}
  >
    {/* About Me Title */}
    <motion.h2 
      className="text-3xl font-bold mb-8"
      variants={fadeIn}
    >
      About Me
    </motion.h2>

    {/* About Me Description */}
    <motion.p 
      className="text-gray-300 text-lg mb-10"
      variants={fadeIn}
    >
      I am currently in my pre-final year of engineering. I started my journey in web development
      2 years ago, driven by a passion for creating intuitive and engaging user experiences.
      My very recent contribution has been building the frontend of an early stage EdTech Startup - Joblient.
    </motion.p>

    <motion.p 
      className="text-gray-300 text-lg mb-12"
      variants={fadeIn}
    >
      My approach combines clean code practices with modern design principles,
      ensuring that every project I work on is both beautiful and functional.
    </motion.p>

    {/* Tech Stack Below */}
      <h3 className="text-3xl font-bold mb-6">Tech Stack</h3>
      <ScrollVelocity/>
  </motion.div>
</section>

      {/* Projects Section */}
<section id="projects" className="py-20 max-h-[580px]">
  <div className="max-w-6xl mx-auto px-4">
    <motion.h2
      className="text-3xl mb-6 font-bold text-center"
      variants={fadeIn}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      Featured Projects
    </motion.h2>
      <CircularProjectSlider />
    </div>
  </section>

      {/* Connect Section */}
      <section id="connect" className="py-20 bg-[#111111]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto px-4 text-center"
        >
          <h2 className="text-3xl font-bold mb-8">Let's Connect</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-12">
            I'm always interested in hearing about new projects and opportunities.
            Feel free to reach out if you'd like to work together!
          </p>
          <div className="flex justify-center space-x-8">
            {[
              { icon: FaGithub, link: "https://github.com/shivangi1612", label: "GitHub" },
              { icon: Linkedin, link: "https://www.linkedin.com/in/shivangisingh1612004?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ", label: "LinkedIn" },
              { icon: FaXTwitter, link: "https://x.com/i_shivangisingh?t=DYF5OVIPaR2Gjn8zxYHPRg&s=08 ", label: "Twitter" },
              { icon: Mail, link: "mailto:shivangi.singh161204@gmail.com", label: "Email" }
            ].map(({ icon: Icon, link, label }) => (
              <motion.a
                key={label}
                href={link}
                whileHover={{ scale: 1.1 }}
                className="text-gray-400 hover:text-cyan-400 transition-colors"
                aria-label={label}
              >
                <Icon size={24} />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </section>

      <footer className="py-8 text-center text-gray-400 text-sm">
        <p>© {new Date().getFullYear()} Shivangi Singh. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;