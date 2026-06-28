import { motion } from "framer-motion";
import { topics } from "../data/topics";

function Topics() {
  return (
    <section id="topics" className="scroll-mt-24 bg-surface px-6 py-28 lg:px-10 lg:py-36">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-[13px] font-semibold uppercase tracking-[0.14em] text-blue-600"
          >
            Topics We Cover
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="text-section-title mt-3 font-display font-bold text-ink"
          >
            Built around the energy transition
          </motion.h2>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
          {topics.map((topic, index) => {
            const Icon = topic.icon;
            return (
              <motion.div
                key={topic.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (index % 4) * 0.07, ease: [0.16, 1, 0.3, 1] }}
                className="group rounded-2xl border border-line bg-white p-6 transition-all duration-400 hover:-translate-y-1 hover:shadow-card"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white">
                  <Icon size={20} strokeWidth={1.8} />
                </div>
                <h3 className="mt-5 text-[15px] font-semibold text-ink">{topic.title}</h3>
                <p className="mt-1.5 text-[13.5px] leading-relaxed text-ink-muted">
                  {topic.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Topics;
