import { motion } from "framer-motion";
import { useProjects } from "@/hooks/use-portfolio";
import { Github, ExternalLink, Loader2, FolderLock } from "lucide-react";

export function Projects() {
  const { data: projects, isLoading } = useProjects();

  return (
    <section id="projects" className="py-20 bg-black/20">
      <div className="container-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-12 flex items-center">
            <span className="text-primary mr-2">03.</span> Projects & Labs
            <div className="h-px bg-white/10 flex-grow ml-6"></div>
          </h2>

          {isLoading ? (
            <div className="flex justify-center py-20">
              <Loader2 className="w-10 h-10 text-primary animate-spin" />
            </div>
          ) : !projects?.length ? (
            <div className="text-center py-20 text-muted-foreground font-mono border border-dashed border-white/10 rounded-lg">
              <FolderLock className="w-12 h-12 mx-auto mb-4 opacity-50" />
              &lt;No projects deployed yet /&gt;
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, idx) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="glass-panel rounded-xl overflow-hidden flex flex-col group neon-border"
                >
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex justify-between items-start mb-4">
                      <FolderLock className="w-10 h-10 text-primary" />
                      <div className="flex gap-4">
                        <a 
                          href={project.link} 
                          target="_blank" 
                          rel="noreferrer" 
                          className="text-gray-400 hover:text-white transition-colors"
                        >
                          {project.link.includes('github') ? <Github className="w-5 h-5" /> : <ExternalLink className="w-5 h-5" />}
                        </a>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    
                    <div className="mb-4">
                       <span className="text-xs font-mono text-secondary uppercase tracking-wide border border-secondary/30 px-2 py-0.5 rounded">
                         {project.category}
                       </span>
                    </div>

                    <p className="text-muted-foreground text-sm mb-6 flex-1">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.techStack.map((tech) => (
                        <span key={tech} className="text-xs font-mono text-gray-400">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
