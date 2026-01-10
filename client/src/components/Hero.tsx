import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { Terminal, ShieldCheck, Lock } from "lucide-react";

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background Matrix Effect */}
      <div className="absolute inset-0 cyber-grid z-0 opacity-20" />
      
      {/* Animated Glow Orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary/20 rounded-full blur-[100px] animate-pulse delay-1000" />

      <div className="container-section relative z-10 w-full">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary font-mono text-sm mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            System Online
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 font-mono"
          >
            <span className="text-white">Cyber Security</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-green-400 to-secondary neon-text">
              Analyst & Hacker
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 font-mono"
          >
            &gt; Securing the Digital World_
            <span className="animate-pulse">|</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <ScrollLink
              to="projects"
              smooth={true}
              duration={500}
              offset={-70}
              className="btn-cyber cursor-pointer text-center"
            >
              View Projects
            </ScrollLink>
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              offset={-70}
              className="px-6 py-3 rounded-none border border-white/20 text-white font-mono hover:bg-white/5 hover:border-white/50 transition-all duration-300 cursor-pointer text-center"
            >
              Contact Me
            </ScrollLink>
          </motion.div>
          
          <div className="mt-20 grid grid-cols-3 gap-8 md:gap-16 opacity-50">
             <div className="flex flex-col items-center gap-2">
                <Terminal className="w-8 h-8 text-primary" />
                <span className="font-mono text-xs text-primary">PEN_TEST</span>
             </div>
             <div className="flex flex-col items-center gap-2">
                <ShieldCheck className="w-8 h-8 text-secondary" />
                <span className="font-mono text-xs text-secondary">SECURE</span>
             </div>
             <div className="flex flex-col items-center gap-2">
                <Lock className="w-8 h-8 text-primary" />
                <span className="font-mono text-xs text-primary">ENCRYPT</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
