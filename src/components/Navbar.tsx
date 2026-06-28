import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

interface NavLink {
  label: string;
  href: string;
}

const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "Videos", href: "#videos" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pendingHrefRef = useRef<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="fixed inset-x-0 top-0 z-50 px-6 pt-6 md:px-12 lg:px-16">
      <header
        className={`liquid-glass mx-auto max-w-7xl rounded-xl text-white shadow-soft transition-colors duration-300 ${
          scrolled ? "bg-black/50!" : "bg-black/30!"
        }`}
      >
        <nav aria-label="Primary" className="flex items-center justify-between px-4 py-2">
          <a
            href="#home"
            className="flex items-center gap-2.5 text-[15px] font-semibold tracking-tight"
          >
            <Logo className="h-7 w-7" />
            EnergyProjects
          </a>

          <ul className="hidden items-center gap-9 md:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-[14.5px] font-medium opacity-80 transition-opacity duration-200 hover:opacity-100"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#videos"
            className="hidden rounded-lg bg-white px-6 py-2 text-sm font-medium text-ink transition-opacity hover:opacity-90 md:inline-flex"
          >
            Watch Now
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Toggle menu"
            className="-mr-1.5 inline-flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:opacity-80 md:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        <AnimatePresence
          onExitComplete={() => {
            if (pendingHrefRef.current) {
              document.querySelector(pendingHrefRef.current)?.scrollIntoView({ behavior: "smooth", block: "start" });
              pendingHrefRef.current = null;
            }
          }}
        >
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden border-t border-white/15 md:hidden"
            >
              <ul className="flex flex-col px-4 py-2">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        pendingHrefRef.current = link.href;
                        document.body.style.overflow = "";
                        setOpen(false);
                      }}
                      className="block py-3 text-[15px] font-medium opacity-80 transition-opacity hover:opacity-100"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </div>
  );
}

export default Navbar;
