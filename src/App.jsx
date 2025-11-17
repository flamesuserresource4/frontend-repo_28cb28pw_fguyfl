import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Impact from "./components/Impact";
import Contact from "./components/Contact";
import AnimatedBackground from "./components/AnimatedBackground";
import ValuesMarquee from "./components/ValuesMarquee";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 relative">
      <AnimatedBackground />
      <Navbar />
      <main>
        <Hero />
        <ValuesMarquee />
        <Services />
        <Impact />
        <Testimonials />
        <CTA />
        <Contact />
        <footer id="about" className="py-10 border-t border-slate-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-sm text-slate-600">Neptune Aquatics is a UK social enterprise. Every booking helps fund subsidised hydrotherapy places for our community.</p>
            <p className="mt-2 text-xs text-slate-500">© {new Date().getFullYear()} Neptune Aquatics. All rights reserved.</p>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App