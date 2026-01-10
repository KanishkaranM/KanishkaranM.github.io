import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertMessageSchema } from "@shared/schema";
import type { CreateMessageRequest } from "@shared/routes";
import { useSendMessage } from "@/hooks/use-portfolio";
import { Mail, Send, Github, Linkedin, Terminal } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function Contact() {
  const { mutate, isPending } = useSendMessage();
  const form = useForm<CreateMessageRequest>({
    resolver: zodResolver(insertMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (data: CreateMessageRequest) => {
    mutate(data, {
      onSuccess: () => form.reset(),
    });
  };

  return (
    <section id="contact" className="py-20">
      <div className="container-section max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 font-mono text-primary">
              &lt;Initialize_Contact /&gt;
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              My inbox is always open. Whether you have a question about security, a project opportunity, or just want to say hi, I'll try my best to get back to you!
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
             {/* Contact Info */}
             <div className="md:col-span-2 space-y-6">
                <div className="glass-panel p-6 rounded-lg text-center md:text-left">
                   <h3 className="text-white font-bold mb-4 flex items-center justify-center md:justify-start gap-2">
                     <Terminal className="w-5 h-5 text-secondary" />
                     Social Uplink
                   </h3>
                   <div className="space-y-4">
                      <a href="mailto:contact@example.com" className="flex items-center gap-3 text-gray-400 hover:text-primary transition-colors">
                        <Mail className="w-5 h-5" />
                        <span>Email Me</span>
                      </a>
                      <a href="https://github.com" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-gray-400 hover:text-primary transition-colors">
                        <Github className="w-5 h-5" />
                        <span>GitHub</span>
                      </a>
                      <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-gray-400 hover:text-primary transition-colors">
                        <Linkedin className="w-5 h-5" />
                        <span>LinkedIn</span>
                      </a>
                   </div>
                </div>
             </div>

             {/* Form */}
             <div className="md:col-span-3">
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <div>
                    <Input
                      placeholder="Name"
                      className="bg-card/50 border-white/10 focus:border-primary font-mono"
                      {...form.register("name")}
                    />
                    {form.formState.errors.name && (
                      <span className="text-red-500 text-xs mt-1 block">{form.formState.errors.name.message}</span>
                    )}
                  </div>
                  <div>
                    <Input
                      placeholder="Email"
                      className="bg-card/50 border-white/10 focus:border-primary font-mono"
                      {...form.register("email")}
                    />
                    {form.formState.errors.email && (
                      <span className="text-red-500 text-xs mt-1 block">{form.formState.errors.email.message}</span>
                    )}
                  </div>
                  <div>
                    <Textarea
                      placeholder="Message"
                      className="bg-card/50 border-white/10 focus:border-primary font-mono min-h-[150px]"
                      {...form.register("message")}
                    />
                    {form.formState.errors.message && (
                      <span className="text-red-500 text-xs mt-1 block">{form.formState.errors.message.message}</span>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isPending}
                    className="w-full btn-cyber flex items-center justify-center gap-2 group"
                  >
                    {isPending ? "Transmitting..." : "Send Message"}
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
