// app/page.tsx
import { Navbar } from "@/components/NavBar";
import { Hero } from "@/components/Hero";
import { Specialties } from "@/components/Specialties";
import { Projects } from "@/components/Proyects";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#121212] text-zinc-100 font-sans selection:bg-sky-500 selection:text-white">
      <Navbar />
      <Hero />
      <Specialties />
      <Projects />
      <Footer />
    </main>
  );
}
