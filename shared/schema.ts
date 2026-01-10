import { pgTable, text, serial, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// === TABLE DEFINITIONS ===

// Contact form messages
export const messages = pgTable("messages", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

// Projects to showcase
export const projects = pgTable("projects", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  techStack: text("tech_stack").array().notNull(), // Array of strings for tags
  link: text("link").notNull(), // GitHub or live link
  category: text("category").notNull(), // e.g., "Penetration Testing", "CTF"
});

// === SCHEMAS ===

export const insertMessageSchema = createInsertSchema(messages).omit({ 
  id: true, 
  createdAt: true 
});

export const insertProjectSchema = createInsertSchema(projects).omit({ 
  id: true 
});

// === EXPLICIT API TYPES ===

export type Message = typeof messages.$inferSelect;
export type InsertMessage = z.infer<typeof insertMessageSchema>;

export type Project = typeof projects.$inferSelect;
export type InsertProject = z.infer<typeof insertProjectSchema>;

// Request types
export type CreateMessageRequest = InsertMessage;

// Response types
export type ProjectResponse = Project;
export type ProjectsListResponse = Project[];
