import Logo from "./Logo";
import YoutubeIcon from "./icons/YoutubeIcon";
import { site } from "../data/site";

interface FooterLink {
  label: string;
  href: string;
}

const FOOTER_LINKS: FooterLink[] = [
  { label: "Home", href: "#home" },
  { label: "Videos", href: "#videos" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-ink px-6 py-12 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 sm:flex-row sm:items-center sm:justify-between">
        <a href="#home" className="flex items-center gap-2.5 text-[15px] font-semibold tracking-tight text-white">
          <Logo className="h-6 w-6" />
          {site.name}
        </a>

        <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
          {FOOTER_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-[14px] font-medium text-gray-400 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={site.youtubeUrl}
          target="_blank"
          rel="noreferrer"
          aria-label="EnergyProjects on YouTube"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-gray-400 transition-colors hover:border-white/30 hover:text-white"
        >
          <YoutubeIcon size={16} />
        </a>
      </div>

      <p className="mt-10 text-center text-[13px] text-gray-500">
        © {year} {site.name}. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
