import { motion } from "framer-motion";
import { 
  SiKalilinux, SiWireshark, SiBurpsuite, SiGnubash, 
  SiPython, SiJavascript, SiLinux, SiHackthebox, 
  SiTryhackme, SiOwasp 
} from "react-icons/si";
import { FaNetworkWired, FaServer } from "react-icons/fa";

export function Skills() {
  const skills = [
    { name: "Burp Suite", icon: SiBurpsuite, color: "text-orange-500" },
    { name: "Wireshark", icon: SiWireshark, color: "text-blue-500" },
    { name: "Metasploit", icon: SiKalilinux, color: "text-blue-400" }, // Using Kali icon as proxy
    { name: "Nmap", icon: FaNetworkWired, color: "text-green-500" },
    { name: "Linux", icon: SiLinux, color: "text-yellow-500" },
    { name: "Bash", icon: SiGnubash, color: "text-gray-400" },
    { name: "Python", icon: SiPython, color: "text-yellow-300" },
    { name: "OWASP Top 10", icon: SiOwasp, color: "text-blue-300" },
  ];

  const platforms = [
    { name: "TryHackMe", icon: SiTryhackme, color: "text-red-500", label: "Top 5%" },
    { name: "Hack The Box", icon: SiHackthebox, color: "text-green-500", label: "Script Kiddie" },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-12 flex items-center">
            <span className="text-primary mr-2">02.</span> Skills & Arsenal
            <div className="h-px bg-white/10 flex-grow ml-6"></div>
          </h2>

          <div className="mb-12">
            <h3 className="text-xl font-mono text-secondary mb-6 flex items-center gap-2">
              <FaServer /> Technical Tools
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.05)" }}
                  className="glass-panel p-4 rounded-lg flex flex-col items-center justify-center gap-3 border border-white/5 hover:border-primary/50 transition-colors"
                >
                  <skill.icon className={`w-10 h-10 ${skill.color}`} />
                  <span className="font-mono text-sm text-gray-300">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
             {/* Platforms */}
             <div>
                <h3 className="text-xl font-mono text-secondary mb-6">Training Platforms</h3>
                <div className="grid gap-4">
                  {platforms.map((p) => (
                    <div key={p.name} className="glass-panel p-4 flex items-center justify-between rounded-lg">
                      <div className="flex items-center gap-4">
                        <p.icon className={`w-8 h-8 ${p.color}`} />
                        <span className="font-bold">{p.name}</span>
                      </div>
                      <span className="text-xs font-mono bg-white/10 px-2 py-1 rounded text-primary border border-primary/20">
                        {p.label}
                      </span>
                    </div>
                  ))}
                </div>
             </div>
             
             {/* Live TryHackMe Profile */}
             <div>
                <h3 className="text-xl font-mono text-secondary mb-6">Live Stats</h3>
                <div className="glass-panel rounded-lg overflow-hidden border border-white/10 h-[250px] relative">
                    <iframe 
                      src="https://tryhackme.com/api/v2/badges/public-profile?id=787360" 
                      className="w-full h-full border-none"
                      title="TryHackMe Profile"
                    ></iframe>
                    {/* Fallback if iframe fails to load visually */}
                    <div className="absolute inset-0 -z-10 flex items-center justify-center text-muted-foreground">
                      Loading Profile...
                    </div>
                </div>
             </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
