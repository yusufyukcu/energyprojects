import type { ComponentType } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import YoutubeIcon from "./icons/YoutubeIcon";
import { site } from "../data/site";

type IconComponent = ComponentType<{ size?: number; strokeWidth?: number; className?: string }>;

interface Channel {
  label: string;
  value: string;
  href: string;
  icon: IconComponent;
}

const CHANNELS: Channel[] = [
  {
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
    icon: Mail,
  },
  {
    label: "YouTube",
    value: site.youtubeHandle,
    href: site.youtubeUrl,
    icon: YoutubeIcon,
  },
];

function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 border-t border-white/10 bg-ink px-6 py-28 lg:px-10 lg:py-36">
      <div className="mx-auto max-w-5xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-[13px] font-semibold uppercase tracking-[0.14em] text-blue-400"
        >
          Get In Touch
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="text-section-title mt-3 font-medium text-white"
        >
          Business Inquiries
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mt-4 max-w-xl text-lg text-gray-400"
        >
          For partnerships, sponsorships, and media requests, reach out through
          either channel below.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-14 grid max-w-xl grid-cols-1 gap-5 sm:grid-cols-2"
        >
          {CHANNELS.map((channel) => {
            const Icon = channel.icon;
            return (
              <a
                key={channel.label}
                href={channel.href}
                target={channel.label === "YouTube" ? "_blank" : undefined}
                rel={channel.label === "YouTube" ? "noreferrer" : undefined}
                className="liquid-glass group flex items-center justify-between rounded-2xl border border-white/15 p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:border-white/30"
              >
                <span className="flex min-w-0 items-center gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-400/10 text-blue-400">
                    <Icon size={19} strokeWidth={1.8} />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[13px] font-medium text-gray-500">
                      {channel.label}
                    </span>
                    <span className="block truncate text-[15px] font-semibold text-white">
                      {channel.value}
                    </span>
                  </span>
                </span>
                <ArrowUpRight
                  size={18}
                  className="shrink-0 text-gray-500 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white"
                />
              </a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
