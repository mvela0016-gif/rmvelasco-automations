import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = ["About", "Portfolio", "Contact"];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-strong">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="font-display text-xl font-semibold text-foreground tracking-tight">
          Ray Velasco
        </button>
        <div className="hidden md:flex items-center gap-2">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className="px-4 py-2 rounded-xl text-sm font-body font-medium text-muted-foreground hover:text-foreground hover:neu-flat-sm transition-all duration-200"
            >
              {item}
            </button>
          ))}
          <a
            href="mailto:mvela0016@gmail.com?subject=Automation%20Request&body=Hi%20Ray%2C%0A%0AI%27d%20like%20a%20sample%20automation%20workflow%20for%3A%0A%0A"
            className="ml-2 px-4 py-2 rounded-xl text-sm font-body font-semibold bg-accent text-accent-foreground glass-sm hover:translate-y-0.5 transition-all duration-200"
          >
            Get a Free Sample
          </a>
        </div>
        <button className="md:hidden p-2 rounded-xl neu-flat-sm text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden glass-strong px-6 py-4 flex flex-col gap-2">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left px-4 py-2 rounded-xl hover:neu-flat-sm"
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
