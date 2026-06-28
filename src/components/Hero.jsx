import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import HeroIllustration from "../illustrations/HeroIllustration";

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] w-full flex-col overflow-hidden bg-gradient-to-b from-white via-[#eef3fb] to-[#dbe7f6]"
    >
      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center px-6 pt-24 text-center sm:pt-28">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 inline-flex items-center rounded-full border border-line bg-white/70 px-4 py-1.5 text-[13px] font-medium text-ink-muted backdrop-blur"
        >
          A documentary media brand
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
          className="text-hero max-w-4xl font-display font-bold text-ink"
        >
          Exploring The World's Biggest Energy Projects.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 max-w-2xl text-balance text-lg leading-relaxed text-ink-muted sm:text-xl"
        >
          Documentaries covering renewable energy, infrastructure, engineering,
          and the technologies shaping our future.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <a
            href="#videos"
            className="group inline-flex items-center gap-2 rounded-full bg-blue-600 px-7 py-3.5 text-[15px] font-semibold text-white shadow-lift transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700"
          >
            <Play size={16} className="fill-white" />
            Watch Latest Video
          </a>
          <a
            href="#topics"
            className="group inline-flex items-center gap-2 rounded-full border border-line bg-white/80 px-7 py-3.5 text-[15px] font-semibold text-ink backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-ink/20 hover:bg-white"
          >
            Explore Projects
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5" />
          </a>
        </motion.div>
      </div>

      <div className="relative mt-6 min-h-[340px] flex-1 sm:min-h-[420px]">
        <HeroIllustration className="absolute inset-0 h-full w-full" />
      </div>
    </section>
  );
}

export default Hero;
