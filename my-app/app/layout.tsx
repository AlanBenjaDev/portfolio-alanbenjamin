import './globals.css'
import { JetBrains_Mono } from "next/font/google";
import { cn } from "@/lib/utils";

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'], 
  variable: '--font-mono' 
});

export const metadata = {
  title: 'Alan - Full Stack Developer Portfolio',
  description: 'Portfolio profesional de Alan, Full Stack Developer de 18 años. Especializado en Next.js, React, Node.js y desarrollo web moderno.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={cn("scroll-smooth dark", "font-mono", jetbrainsMono.variable)}>
      <body className="bg-[#121212] text-zinc-100 antialiased selection:bg-sky-500 selection:text-white">
        {children}
      </body>
    </html>
  )
}