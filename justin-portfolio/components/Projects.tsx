"use client";

import React from "react";
import { ExternalLink } from "lucide-react";

interface Project {
  title: string;
  url: string;
  description: string;
  tags: string[];
}

const projects: Project[] = [
  {
    title: "ABICPH",
    url: "https://www.abicph.com/",
    description: "Professional website showcasing services and portfolio",
    tags: ["Next.js", "Laravel", "MySQL"],
  },
  {
    title: "Alfimar Realty Inc",
    url: "https://www.alfimarealtyinc.com/",
    description: "Real estate property listing and management platform",
    tags: ["Next.js", "TypeScript", "MySQL"],
  },
  {
    title: "Anila Os Diving Center",
    url: "https://anilaoscubadivingcenter.vercel.app/",
    description: "Diving center website with booking and service information",
    tags: ["Next.js", "React", "Tailwind CSS"],
  },
  {
    title: "Skybound Travel",
    url: "https://skybound-travel.vercel.app/",
    description: "Travel booking platform with destination guides",
    tags: ["Next.js", "TypeScript", "API Integration"],
  },
  {
    title: "Hilee Thumbler Demo",
    url: "https://hilee-thumbler-demo.vercel.app/",
    description: "Interactive product demonstration website",
    tags: ["React", "CSS", "JavaScript"],
  },
  {
    title: "Ipponyari Restaurant",
    url: "https://ipponyari-japanese-restaurant.vercel.app/",
    description: "Japanese restaurant website with menu and reservations",
    tags: ["Next.js", "Tailwind CSS", "Responsive Design"],
  },
];

export function Projects() {
  return (
    <section className="py-20 px-4 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            A selection of projects I&apos;ve built showcasing expertise in
            full-stack development, responsive design, and modern web
            technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-card border border-border rounded-lg overflow-hidden hover:border-accent transition-all duration-300 hover:shadow-lg hover:shadow-accent/10"
            >
              <div className="p-6 h-full flex flex-col">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors flex-1">
                    {project.title}
                  </h3>
                  <ExternalLink
                    size={20}
                    className="text-muted-foreground group-hover:text-accent transition-colors flex-shrink-0 ml-2"
                  />
                </div>

                <p className="text-muted-foreground text-sm mb-4 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-accent/20 text-accent text-xs rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
