// data/projects.ts

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string; // URL de Cloudinary
  githubUrl: string;
  demoUrl?: string;
  technologies: string[];
  category?: string;
}

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Pipeline ETL para Data Engineering",
    description: "Plataforma web de ingeniería de datos y desarrollo backend que permite procesar y analizar grandes archivos de datos (Big Data) en memoria sin necesidad de descargarlos previamente.",
    image: "https://res.cloudinary.com/dfx3io0iv/image/upload/v1794946257/pipeline_ets_bwbtrt.jpg",
    githubUrl: "https://github.com/AlanBenjaDev/Pipeline-ETL.git",
    technologies: ["Backend", "Node.js", "TypeScript", "Express", "DuckDB", "Next.js", "Tailwind CSS"],
    category: "Backend & Data Engineering"
  },
  {
    id: "2",
    title: "Sistema ERM con Monitoreo IoT de Presencia",
    description: "Sistema integral de gestión de clientes, empleados y ventas con panel administrativo en tiempo real, integrando un sensor magnético de presencia física para la detección y registro automatizado del personal.",
    image: "https://res.cloudinary.com/dfx3io0iv/image/upload/v1794946319/pipeline_ets_rfid_hckz6z.jpg",
    githubUrl: "https://github.com/AlanBenjaDev/Sistema-ERM-IoT.git",
    
    technologies: ["IoT", "Sensores / Hardware", "Backend", "Node.js", "TypeScript", "MySQL", "Next.js", "Tailwind CSS"],
    category: "IoT & Full Stack"
  }
];
