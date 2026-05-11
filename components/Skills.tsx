"use client";

import React from "react";

interface SkillCategory {
  category: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    category: "Frontend",
    skills: [
      "Next.js",
      "React",
      "TypeScript",
      "CSS",
      "Tailwind CSS",
      "JavaScript",
    ],
  },
  {
    category: "Backend",
    skills: ["Laravel", "Node.js", "REST APIs"],
  },
  {
    category: "Database",
    skills: ["MySQL", "Firebase"],
  },
  {
    category: "Tools & Platforms",
    skills: ["Git", "Vercel", "VS Code"],
  },
];

export function Skills() {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Skills & Expertise
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            A comprehensive set of technologies and tools I&apos;ve mastered
            over my 2+ years of professional development experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-secondary/40 border border-border rounded-lg p-6 hover:border-accent/50 transition-colors"
            >
              <h3 className="text-xl font-bold text-foreground mb-4">
                {category.category}
              </h3>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li
                    key={skillIndex}
                    className="flex items-center gap-3 text-muted-foreground"
                  >
                    <span className="w-2 h-2 bg-accent rounded-full"></span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Experience Summary */}
        <div className="mt-16 bg-card border border-border rounded-lg p-8 md:p-10">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Professional Summary
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            With over 2 years of professional experience, I have successfully
            developed and deployed multiple web applications across various
            industries including real estate, hospitality, and tourism. My
            expertise spans the entire full-stack development lifecycle, from
            initial project architecture and database design to frontend
            implementation and deployment.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            As a Junior IT Manager, I have also gained experience in team
            coordination, project management, and IT infrastructure maintenance.
            I&apos;m committed to writing clean, maintainable code and staying
            current with industry best practices and emerging technologies.
          </p>
        </div>
      </div>
    </section>
  );
}
