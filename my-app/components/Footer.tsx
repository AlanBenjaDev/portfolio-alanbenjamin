// components/Footer.tsx
"use client";

import { motion } from "framer-motion";
import { Mail, FileText } from "lucide-react";
import { Badge } from "@/components/ui/badge";

// Icono SVG nativo para GitHub
const GithubIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path
      fillRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      clipRule="evenodd"
    />
  </svg>
);

// Icono SVG nativo para LinkedIn
const LinkedinIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.7a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26Z" />
  </svg>
);

export const Footer = () => {
  return (
    <footer id="contact" className="py-20 px-6 max-w-4xl mx-auto text-center flex flex-col items-center">
      {/* Tarjeta de Contacto en Modo Oscuro */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative w-full max-w-2xl bg-[#18181b] border border-zinc-800 rounded-2xl p-8 md:p-12 shadow-2xl mb-16 overflow-hidden"
      >
        {/* Glow sutil de fondo */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-60 h-60 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex justify-center mb-4">
          <Badge className="bg-zinc-800 text-zinc-300 border-zinc-700 px-3 py-1 text-xs">
            Contacto
          </Badge>
        </div>

        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
          Ponete en contacto
        </h2>

        <p className="text-zinc-400 text-sm md:text-base max-w-md mx-auto leading-relaxed mb-6">
          ¿Buscás desarrollar una solución IoT, arquitectura Backend o un proyecto Full Stack? Hablemos de cómo llevarlo a la práctica.
        </p>

        <a
          href="mailto:alan@ejemplo.com"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-zinc-900 font-medium text-sm hover:bg-zinc-200 transition-colors shadow-lg"
        >
          <Mail className="w-4 h-4" />
          <span>Enviar mensaje</span>
        </a>
      </motion.div>

      {/* Dock / Navbar Flotante Inferior estilo Magic UI */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex items-center justify-center gap-4 px-6 py-3 rounded-full bg-[#18181b]/90 border border-zinc-800 backdrop-blur-md shadow-xl"
      >
        <SocialLink href="https://github.com" label="GitHub">
          <GithubIcon className="w-4 h-4" />
        </SocialLink>
        <SocialLink href="https://linkedin.com" label="LinkedIn">
          <LinkedinIcon className="w-4 h-4" />
        </SocialLink>
        <div className="w-[1px] h-4 bg-zinc-800" />
        <SocialLink href="/cv.pdf" label="CV">
          <FileText className="w-4 h-4" />
        </SocialLink>
      </motion.div>

      <p className="text-xs text-zinc-600 mt-8 font-mono">
        © {new Date().getFullYear()} Alan • Full Stack Developer & Técnico en Electrónica (IoT & Backend).
      </p>
    </footer>
  );
};

const SocialLink = ({
  href,
  children,
  label,
}: {
  href: string;
  children: React.ReactNode;
  label: string;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="text-zinc-400 hover:text-white p-2 rounded-full hover:bg-zinc-800/80 transition-all duration-200"
  >
    {children}
  </a>
);
