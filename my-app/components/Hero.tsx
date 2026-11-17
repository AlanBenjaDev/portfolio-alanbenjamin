// components/Hero.tsx
"use client";

import { motion } from "framer-motion";
import { AuroraText } from "@/components/ui/aurora-text";
import { Cpu, Server, CircuitBoard, Layers } from "lucide-react";

export const Hero = () => {
  return (
    <section id="about" className="pt-40 pb-16 px-6 max-w-4xl mx-auto text-left">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-800/80 border border-zinc-700/60 text-xs text-zinc-300 mb-6 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-mono">Técnico en Electrónica • IoT & Backend</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
          Hola, soy Alan. <br />
          <AuroraText>Full Stack Developer</AuroraText>{" "}
          <span className="block text-2xl md:text-4xl text-zinc-400 font-bold mt-2">
            &amp; Técnico en Electrónica
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-zinc-300 max-w-2xl font-normal leading-relaxed mb-6">
          Desarrollador de software y técnico especializado en la <strong className="text-white font-medium">programación IoT</strong> y el <strong className="text-white font-medium">desarrollo Backend</strong>. Me enfoco en conectar sensores y hardware físico con sistemas en la nube a través de APIs de alto rendimiento, pipelines de datos y plataformas web completas.
        </p>

        <p className="text-sm text-zinc-400 font-mono mb-8">
          Especializado en arquitecturas Backend (Node.js, Express, bases de datos), integración de dispositivos IoT y el ecosistema moderno de TypeScript y Next.js.
        </p>

        <div className="flex flex-wrap gap-2.5">
          <div className="px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300 flex items-center gap-2">
            <Cpu className="w-4 h-4 text-emerald-400" />
            <span>Programación IoT & Sensores</span>
          </div>
          <div className="px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300 flex items-center gap-2">
            <Server className="w-4 h-4 text-sky-400" />
            <span>Especialista en Backend</span>
          </div>
          <div className="px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300 flex items-center gap-2">
            <CircuitBoard className="w-4 h-4 text-amber-400" />
            <span>Técnico en Electrónica</span>
          </div>
          <div className="px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300 flex items-center gap-2">
            <Layers className="w-4 h-4 text-purple-400" />
            <span>Full Stack Developer</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
