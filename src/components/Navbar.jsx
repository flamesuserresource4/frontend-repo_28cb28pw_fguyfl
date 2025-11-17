import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-slate-200">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 grid place-items-center text-white font-black shadow-md">N</div>
          <div>
            <p className="text-slate-900 font-semibold leading-tight">Neptune Aquatics</p>
            <p className="text-xs text-slate-500 -mt-0.5">Changing lives through aquatics</p>
          </div>
        </div>

        <ul className="hidden md:flex items-center gap-8 text-sm text-slate-700">
          <li className="hover:text-blue-600 transition-colors"><a href="#services">Services</a></li>
          <li className="hover:text-blue-600 transition-colors"><a href="#impact">Impact</a></li>
          <li className="hover:text-blue-600 transition-colors"><a href="#about">About</a></li>
          <li className="hover:text-blue-600 transition-colors"><a href="#contact">Contact</a></li>
        </ul>

        <div className="flex items-center gap-3">
          <a href="#contact" className="hidden sm:inline-flex items-center rounded-full bg-blue-600 text-white px-4 py-2 text-sm font-medium shadow hover:bg-blue-700 transition-colors">Book an Intro Call</a>
          <button className="md:hidden p-2 text-slate-700" aria-label="Open Menu">
            <Menu size={22} />
          </button>
        </div>
      </nav>
    </header>
  );
}
