import { useEffect, useRef } from "react";
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
      className="relative flex min-h-[100svh] w-full flex-col overflow-hidden bg-ink"
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

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-end px-6 pb-12 md:px-12 lg:grid lg:grid-cols-2 lg:items-end lg:px-16 lg:pb-16">
        <div>
          <AnimatedHeading
            text={"Exploring The World's\nBiggest Energy Projects."}
            className="mb-4 text-4xl font-normal text-white md:text-5xl lg:text-6xl xl:text-7xl"
            style={{ letterSpacing: "-0.04em" }}
          />

          <FadeIn delay={800} duration={1000}>
            <p className="mb-5 max-w-xl text-base text-gray-300 md:text-lg">
              Documentaries covering renewable energy, infrastructure,
              engineering, and the technologies shaping our future.
            </p>
          </FadeIn>

          <FadeIn delay={1200} duration={1000}>
            <div className="flex flex-wrap gap-4">
              <a
                href="#videos"
                className="rounded-lg bg-white px-8 py-3 font-medium text-black transition-colors hover:bg-gray-100"
              >
                Watch Latest Video
              </a>
              <a
                href="#topics"
                className="liquid-glass rounded-lg border border-white/20 px-8 py-3 font-medium text-white transition-colors hover:bg-white hover:text-black"
              >
                Explore Projects
              </a>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={1400} duration={1000} className="flex items-end justify-start lg:justify-end">
          <div className="liquid-glass rounded-xl border border-white/20 px-6 py-3">
            <p className="text-lg font-light text-white md:text-xl lg:text-2xl">
              Renewable Energy. Infrastructure. Engineering.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

export default Hero;
