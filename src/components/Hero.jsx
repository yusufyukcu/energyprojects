import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

function Hero() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      video.pause();
      video.loop = false;
    }
  }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] w-full items-center justify-center overflow-hidden bg-surface-alt"
    >
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-white/55" />

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center px-6 py-32 text-center sm:py-40">
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
            className="group inline-flex items-center gap-2 rounded-full bg-green-600 px-7 py-3.5 text-[15px] font-semibold text-white shadow-lift transition-all duration-300 hover:-translate-y-0.5 hover:bg-green-500"
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
    </section>
  );
}

export default Hero;
