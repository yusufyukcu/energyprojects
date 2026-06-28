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
    <section id="contact" className="scroll-mt-24 bg-surface-alt px-6 py-28 lg:px-10 lg:py-36">
      <div className="mx-auto max-w-5xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-[13px] font-semibold uppercase tracking-[0.14em] text-blue-600"
        >
          Get In Touch
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="text-section-title mt-3 font-display font-bold text-ink"
        >
          Business Inquiries
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mt-4 max-w-xl text-lg text-ink-muted"
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
                className="group flex items-center justify-between rounded-2xl border border-line bg-white p-6 text-left shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
              >
                <span className="flex items-center gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <Icon size={19} strokeWidth={1.8} />
                  </span>
                  <span>
                    <span className="block text-[13px] font-medium text-ink-faint">
                      {channel.label}
                    </span>
                    <span className="block text-[15px] font-semibold text-ink">
                      {channel.value}
                    </span>
                  </span>
                </span>
                <ArrowUpRight
                  size={18}
                  className="text-ink-faint transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-ink"
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
