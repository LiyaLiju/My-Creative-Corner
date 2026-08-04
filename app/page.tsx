/* HOMEPAGE — app/page.tsx */

import Portrait from "@/components/Portrait";
import FlowerIcon from "@/components/FlowerIcon";

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative bg-pink-light overflow-hidden">
        {/* Decorative Flowers */}
        <FlowerIcon
          size={34}
          className="absolute top-6 right-16 opacity-80"
        />
        <FlowerIcon
          size={24}
          // petalColor="#D4D88A"
          // centerColor="#B6BB79"
          className="absolute bottom-24 left-8 opacity-50"
        />
        <FlowerIcon
          size={16}
          className="absolute top-12 left-24 opacity-30"
        />
        <FlowerIcon
          size={20}
          // petalColor="#D4D88A"
          // centerColor="#B6BB79"
          className="absolute top-20 right-40 opacity-25"
        />

        {/* Hero content */}
        <div className="max-w-5xl mx-auto px-6 py-9 md:py-2">
          {/* Portrait + headline side-by-side on desktop,
              stacked and centered on mobile */}
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-16">
            <Portrait />

            <div className="text-center md:text-left">
              {/* Headline */}
              <h1 className="font-serif text-3xl md:text-4xl font-semibold text-green-deep mb-3">
                baker, maker &amp;{" "}
                <em className="text-pink italic">coder</em>
              </h1>

              {/* Subtitle */}
              <p className="text-brown-light text-sm md:text-base max-w-md leading-relaxed mx-auto md:mx-0">
                Welcome to my little corner of the internet — where
                flour-dusted fingers meet crochet hooks and keyboards.
              </p>
            </div>
          </div>

          {/* Scroll hint — little arrow pointing down */}
          <div className="mt-4 md:mt-2 flex justify-center animate-bounce">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#eb869d"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="opacity-70"
            >
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </div>
        </div>

        {/* Wavy bottom edge */}
        <div className="wave-divider">
          <svg
            viewBox="0 0 1040 56"
            preserveAspectRatio="none"
            className="w-full h-6 md:h-8"
          >
            <path
              d="M0,40 C120,15 240,50 360,30 C480,10 600,45 720,25 C840,5 960,40 1080,25 C1200,10 1320,35 1440,20 L1440,56 L0,56 Z"
              fill="#FFFCF7"
            />
          </svg>
        </div>
      </section>

    </>
  );
}
