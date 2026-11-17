// components/Navbar.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  return (
    <header className="fixed top-5 inset-x-0 z-50 flex justify-center px-4">
      <motion.nav 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between gap-6 px-6 py-2.5 rounded-full bg-[#18181b]/80 border border-zinc-800 backdrop-blur-md shadow-lg"
      >
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-zinc-700 overflow-hidden">
            <img src="https://avatar.vercel.sh/alan" alt="Alan" className="w-full h-full object-cover" />
          </div>
          <span className="text-sm font-semibold text-white">Alan</span>
        </div>

        <div className="hidden md:flex items-center gap-6 text-sm text-zinc-400">
          <Link href="#about" className="hover:text-white transition-colors">Sobre mí</Link>
          <Link href="#specialties" className="hover:text-white transition-colors">Especialidades</Link>
          <Link href="#projects" className="hover:text-white transition-colors">Proyectos</Link>
          <Link href="#contact" className="hover:text-white transition-colors">Contacto</Link>
        </div>

        <a href="#contact">
          <Button size="sm" className="rounded-full bg-zinc-100 text-zinc-900 hover:bg-zinc-200 font-medium">
            Contactar
          </Button>
        </a>
      </motion.nav>
    </header>
  );
};
