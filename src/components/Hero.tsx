import { useEffect, useRef } from "react";
import { ArrowRight, Play } from "lucide-react";
import AnimatedHeading from "./AnimatedHeading";
import FadeIn from "./FadeIn";

const VIDEO_URL =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260403_050628_c4e32401-fab4-4a27-b7a8-6e9291cd5959.mp4";

function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

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
      className="relative flex min-h-[100svh] w-full items-end overflow-hidden bg-ink"
    >
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src={VIDEO_URL} type="video/mp4" />
      </video>

      <div className="relative z-10 grid w-full max-w-7xl gap-10 px-6 py-24 sm:px-10 lg:mx-auto lg:grid-cols-2 lg:items-end lg:gap-6 lg:px-16 lg:pb-24 lg:pt-40">
        <div>
          <AnimatedHeading
            text={"Exploring The World's\nBiggest Energy Projects."}
            className="text-hero max-w-2xl font-display font-bold text-white"
          />

          <FadeIn delay={800} duration={1000}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-300 sm:text-xl">
              Documentaries covering renewable energy, infrastructure,
              engineering, and the technologies shaping our future.
            </p>
          </FadeIn>

          <FadeIn delay={1200} duration={1000}>
            <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <a
                href="#videos"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-[15px] font-semibold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/90"
              >
                <Play size={16} className="fill-ink" />
                Watch Latest Video
              </a>
              <a
                href="#topics"
                className="liquid-glass group inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-[15px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5"
              >
                Explore Projects
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5" />
              </a>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={1400} duration={1000} className="lg:justify-self-end">
          <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-gray-300">
            Renewable Energy. Infrastructure. Engineering.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

export default Hero;
