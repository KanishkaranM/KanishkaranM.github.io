import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

async function seedDatabase() {
  const existingProjects = await storage.getProjects();
  if (existingProjects.length === 0) {
    await storage.createProject({
      title: "Network Vulnerability Scanner",
      description: "A Python-based scanner that identifies open ports and potential security weaknesses in local networks. automated reporting.",
      techStack: ["Python", "Nmap", "Scapy"],
      link: "https://github.com/example/net-scanner",
      category: "Network Security"
    });
    
    await storage.createProject({
      title: "Web App Penetration Test",
      description: "Conducted a full security audit of a mock e-commerce platform. Identified and patched SQL Injection and XSS vulnerabilities.",
      techStack: ["Burp Suite", "OWASP ZAP", "SQLMap"],
      link: "https://github.com/example/pentest-report",
      category: "Web Security"
    });
    
    await storage.createProject({
      title: "Corporate Phishing Simulation",
      description: "Designed a social engineering campaign to test employee awareness. Achieved 85% reporting rate after training intervention.",
      techStack: ["GoPhish", "HTML/CSS", "Email Security"],
      link: "#",
      category: "Social Engineering"
    });
  }
}

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  // Seed data on startup
  seedDatabase();

  app.post(api.messages.create.path, async (req, res) => {
    try {
      const input = api.messages.create.input.parse(req.body);
      const message = await storage.createMessage(input);
      res.status(201).json(message);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      throw err;
    }
  });

  app.get(api.projects.list.path, async (req, res) => {
    const projects = await storage.getProjects();
    res.json(projects);
  });

  return httpServer;
}
