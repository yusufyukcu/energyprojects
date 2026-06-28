import { motion } from "framer-motion";

interface Pillar {
  title: string;
  description: string;
}

const PILLARS: Pillar[] = [
  {
    title: "Independent research",
    description: "Every story starts with primary sources, site data, and direct access to the engineers building it.",
  },
  {
    title: "Global perspective",
    description: "From offshore wind in the North Sea to grid-scale storage in the desert, we follow the energy transition worldwide.",
  },
  {
    title: "Engineering-led storytelling",
    description: "We explain how these systems actually work — the physics, the logistics, and the scale involved.",
  },
];

function About() {
  return (
    <section id="about" className="scroll-mt-24 bg-surface-alt px-6 py-28 lg:px-10 lg:py-36">
      <div className="mx-auto max-w-5xl">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-[13px] font-semibold uppercase tracking-[0.14em] text-blue-600"
        >
          About EnergyProjects
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-5 max-w-3xl text-center text-[1.75rem] font-display font-semibold leading-snug tracking-tight text-ink sm:text-[2.3rem]"
        >
          We produce deeply researched documentaries covering renewable energy,
          infrastructure, engineering, and global megaprojects.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-3 sm:gap-8"
        >
          {PILLARS.map((pillar) => (
            <div key={pillar.title} className="border-t border-line pt-6">
              <h3 className="text-base font-semibold text-ink">{pillar.title}</h3>
              <p className="mt-2.5 text-[14.5px] leading-relaxed text-ink-muted">
                {pillar.description}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default About;
