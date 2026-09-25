// data/projects.ts

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string; // URL de Cloudinary
  githubUrl: string;
  demoUrl?: string;
  technologies: string[];
}

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Pipeline ETL para Data Engineering",
    description: "Una plataforma web que permite a analistas de sistemas y cientificos de datos, analizar grandes archivos big data sin tener que descargarlos.",
    image: "https://res.cloudinary.com/demo/image/upload/v1680000000/algochurn-preview.jpg",
    githubUrl: "https://github.com/alan/algochurn",
    demoUrl: "https://algochurn.com",
    technologies: ["Node.js", "TypeScript", "Express", "DuckDB", "Nextjs", "Tailwind CSS"]
  },
  {
    id: "2",
    title: "Sistema ERM para gestión de clientes",
    description: "Sistema de gestión de CLientes, empleados, y ventas, con panel de administración y reportes en tiempo real, usado un sensor magnetico para detectar la presencia de empleados.",
    image: "https://res.cloudinary.com/demo/image/upload/v1680000000/aceternity-preview.jpg",
    githubUrl: "https://github.com/alan/aceternity",
    demoUrl: "https://ui.aceternity.com",
    technologies: ["Node.js", "Typescript", "MySQL", "Next.js", "Tailwind CSS"]
  }
];