// components/Hero.tsx
"use client";

import { motion } from "framer-motion";
import { AuroraText } from "@/components/ui/aurora-text";

export const Hero = () => {
  return (
    <section id="about" className="pt-40 pb-16 px-6 max-w-4xl mx-auto text-left">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
          Hola, soy Alan. <br />
          <AuroraText>Full Stack Developer</AuroraText>
        </h1>
        
        <p className="text-lg md:text-xl text-zinc-300 max-w-2xl font-normal leading-relaxed mb-6">
          Desarrollador de software enfocado en crear productos y ayudar a las personas a resolver problemas. Muy activo en la comunidad y siempre construyendo algo nuevo.
        </p>

        <p className="text-sm text-zinc-500 font-mono">
          Especializado en Next.js, Node.js y el ecosistema moderno de JavaScript.
        </p>
      </motion.div>
    </section>
  );
};