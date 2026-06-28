import { motion } from "framer-motion";
import { Play } from "lucide-react";
import ThumbnailIllustration from "../illustrations/ThumbnailIllustration";
import { videos, type Video } from "../data/videos";

function VideoCard({ video, index }: { video: Video; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="liquid-glass group overflow-hidden rounded-3xl border border-white/15 transition-all duration-500 hover:-translate-y-1.5 hover:border-white/30"
    >
      <div className="relative aspect-video overflow-hidden">
        <ThumbnailIllustration
          variant={video.variant}
          className="h-full w-full scale-100 transition-transform duration-700 ease-out group-hover:scale-[1.06]"
        />
        <div className="absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/10" />
        <span className="absolute bottom-3 right-3 rounded-md bg-ink/70 px-2 py-1 text-xs font-medium text-white backdrop-blur">
          {video.duration}
        </span>
        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-400 group-hover:opacity-100">
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 shadow-lift">
            <Play size={20} className="fill-ink text-ink" />
          </span>
        </div>
      </div>

      <div className="p-7">
        <h3 className="text-[1.05rem] font-semibold leading-snug tracking-tight text-white">
          {video.title}
        </h3>
        <p className="mt-3 text-[14.5px] leading-relaxed text-gray-400">
          {video.description}
        </p>
        <button
          type="button"
          className="mt-6 inline-flex items-center gap-2 text-[14.5px] font-semibold text-blue-400 transition-colors duration-200 hover:text-blue-300"
        >
          <Play size={14} className="fill-blue-400" />
          Watch Now
        </button>
      </div>
    </motion.article>
  );
}

function FeaturedVideos() {
  return (
    <section id="videos" className="scroll-mt-24 border-t border-white/10 bg-ink px-6 py-28 lg:px-10 lg:py-36">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-[13px] font-semibold uppercase tracking-[0.14em] text-blue-400"
          >
            Featured Videos
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="text-section-title mt-3 font-medium text-white"
          >
            Latest documentaries
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-lg text-gray-400"
          >
            Deeply researched stories from the front lines of the energy transition.
          </motion.p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {videos.map((video, index) => (
            <VideoCard key={video.id} video={video} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedVideos;
