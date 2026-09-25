// components/Projects.tsx
"use client";

import { motion } from "framer-motion";
import { PROJECTS, Project } from "@/data/projects";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

// Componente SVG nativo para evitar el error de importación con lucide-react
const GithubIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      clipRule="evenodd"
    />
  </svg>
);

export const Projects = () => {
  return (
    <section id="projects" className="py-16 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-white mb-2">Estuve construyendo bastantes proyectos</h2>
      <p className="text-zinc-400 mb-10">Una selección de mis proyectos más recientes como Desarrollador Full Stack.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="bg-[#18181b] border-zinc-800 text-white overflow-hidden hover:border-zinc-700 transition-all group h-full flex flex-col justify-between">
        <div>
          {/* Contenedor de la Imagen desde Cloudinary */}
          <div className="relative h-48 w-full overflow-hidden bg-zinc-900">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>

          <CardHeader className="pb-2">
            <CardTitle className="text-xl font-semibold text-zinc-100">{project.title}</CardTitle>
          </CardHeader>

          <CardContent>
            <p className="text-zinc-400 text-sm mb-4 line-clamp-3">{project.description}</p>
            <div className="flex flex-wrap gap-1.5 mb-2">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="secondary" className="bg-zinc-800 text-zinc-300 text-xs hover:bg-zinc-700">
                  {tech}
                </Badge>
              ))}
            </div>
          </CardContent>
        </div>

        <CardFooter className="flex items-center justify-between border-t border-zinc-800/80 pt-4 mt-auto">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs text-zinc-400 hover:text-white transition-colors"
          >
            <GithubIcon className="w-4 h-4" />
            <span>Ver Código</span>
          </a>

          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-sky-400 hover:text-sky-300 font-medium transition-colors"
            >
              <span>Ver Demo</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
};