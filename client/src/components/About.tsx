import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 bg-black/20">
      <div className="container-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-12 flex items-center">
            <span className="text-primary mr-2">01.</span> About Me
            <div className="h-px bg-white/10 flex-grow ml-6"></div>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-muted-foreground">
              <p>
                Hello! I'm a passionate <span className="text-primary font-medium">Cyber Security Analyst</span> and Ethical Hacker based in India. 
                I enjoy hunting for vulnerabilities and securing digital infrastructure against modern threats.
              </p>
              <p>
                My journey began with a curiosity about how systems break, which led me to pursue a rigorous education in computer science
                and security protocols. I'm currently finishing my degree at <span className="text-secondary font-medium">Alagappa University</span>.
              </p>
              <p>
                I actively participate in CTF challenges on platforms like TryHackMe and HackTheBox to keep my skills sharp and up-to-date
                with the latest attack vectors.
              </p>
            </div>

            <div className="grid gap-6">
              {/* Education Card */}
              <div className="glass-panel p-6 rounded-lg relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <GraduationCap className="w-24 h-24 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Education</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-primary font-mono">Alagappa University</h4>
                    <p className="text-white text-sm mt-1">B.Sc Cyber Security</p>
                    <p className="text-muted-foreground text-sm font-mono mt-1">2021 — 2025</p>
                  </div>
                  <div>
                    <p className="text-sm border-l-2 border-secondary pl-3 text-gray-400">
                      High GPA • Security Labs • Advanced Networking
                    </p>
                  </div>
                </div>
              </div>

              {/* Achievement Card */}
              <div className="glass-panel p-6 rounded-lg group relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Award className="w-24 h-24 text-secondary" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Focus Areas</h3>
                <ul className="space-y-2 font-mono text-sm text-gray-300">
                  <li className="flex items-center">
                    <span className="text-primary mr-2">▹</span> Penetration Testing
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary mr-2">▹</span> Network Security
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary mr-2">▹</span> Vulnerability Assessment
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
