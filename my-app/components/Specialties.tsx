"use client";

import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cpu, Server, Layers } from "lucide-react";

export const Specialties = () => {
  const specialties = [
    {
      id: "iot",
      icon: Cpu,
      title: "Electrónica & Programación IoT",
      subtitle: "Técnico en Electrónica",
      description:
        "Diseño e integración de soluciones IoT que conectan el mundo físico con la red. Experiencia en lectura y procesamiento de sensores, telemetría en tiempo real, microcontroladores y protocolos de comunicación para dispositivos conectados.",
      tags: [
        "IoT",
        "Técnico en Electrónica",
        "Sensores & Actuadores",
        "Microcontroladores",
        "Telemetría",
        "Protocolos IoT"
      ],
      glowColor: "from-emerald-500/10 to-transparent",
      iconColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20"
    },
    {
      id: "backend",
      icon: Server,
      title: "Especialización en Backend",
      subtitle: "Arquitectura & APIs Escalables",
      description:
        "Desarrollo de servicios backend de alto rendimiento, diseño de APIs RESTful, pipelines ETL para procesamiento de grandes volúmenes de datos y modelado eficiente de bases de datos relacionales y analíticas.",
      tags: [
        "Node.js",
        "TypeScript",
        "Express",
        "DuckDB / Big Data",
        "MySQL",
        "Pipelines ETL",
        "APIs RESTful"
      ],
      glowColor: "from-sky-500/10 to-transparent",
      iconColor: "text-sky-400 bg-sky-500/10 border-sky-500/20"
    },
    {
      id: "fullstack",
      icon: Layers,
      title: "Desarrollo Full Stack",
      subtitle: "Soluciones de Extremo a Extremo",
      description:
        "Construcción integral de productos digitales: desde la adquisición de señales de hardware o la lógica backend, hasta paneles de administración interactivos, modernos y responsivos.",
      tags: [
        "Full Stack Developer",
        "Next.js",
        "React",
        "Tailwind CSS",
        "Framer Motion",
        "Shadcn UI"
      ],
      glowColor: "from-purple-500/10 to-transparent",
      iconColor: "text-purple-400 bg-purple-500/10 border-purple-500/20"
    }
  ];

  return (
    <section id="specialties" className="py-16 px-6 max-w-6xl mx-auto">
      <div className="mb-12">
        <Badge className="bg-zinc-800 text-zinc-300 border-zinc-700 px-3 py-1 text-xs mb-3">
          Especialización
        </Badge>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 tracking-tight">
          Áreas de Especialización
        </h2>
        <p className="text-zinc-400 max-w-2xl text-sm md:text-base leading-relaxed">
          La formación técnica en electrónica junto al desarrollo de software me permite unir hardware, programación IoT y arquitecturas backend robustas en proyectos reales.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {specialties.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-[#18181b] border-zinc-800 text-white hover:border-zinc-700 transition-all h-full flex flex-col justify-between relative overflow-hidden group">
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${item.glowColor} rounded-full blur-2xl pointer-events-none group-hover:scale-125 transition-transform duration-500`} />
                
                <div>
                  <CardHeader className="pb-3">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center border mb-3 ${item.iconColor}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono text-zinc-400 tracking-wider uppercase">
                      {item.subtitle}
                    </span>
                    <CardTitle className="text-xl font-bold text-zinc-100 mt-1">
                      {item.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="pb-4">
                    <p className="text-zinc-400 text-sm leading-relaxed mb-5">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {item.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="bg-zinc-800/80 text-zinc-300 text-xs hover:bg-zinc-700 border border-zinc-700/50"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
