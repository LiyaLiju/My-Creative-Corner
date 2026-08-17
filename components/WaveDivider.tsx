/* ============================================
   WAVE DIVIDER
   
   Creates the torn-paper transition between
   sections. The SVG path is a hand-drawn wavy
   line that gives the scrapbook feel from your
   Pinterest inspo.
   
   Props:
   - topColor: the color of the section ABOVE
   - bottomColor: the color of the section BELOW
   - flip: if true, flips the wave vertically
     (useful when going from colored → white)
   
   The SVG uses preserveAspectRatio="none" so it
   stretches to fill the full width regardless
   of screen size.
   ============================================ */

interface WaveDividerProps {
  topColor?: string;
  bottomColor?: string;
  flip?: boolean;
  className?: string;
}

export default function WaveDivider({
  topColor = "#FFFCF7",
  bottomColor = "#B6BB79",
  flip = false,
  className = "",
}: WaveDividerProps) {
  return (
    <div
      className={`wave-divider ${className}`}
      aria-hidden="true"
      style={flip ? { transform: "scaleY(-1)" } : undefined}
    >
      <svg
        viewBox="0 0 1440 56"
        preserveAspectRatio="none"
        className="w-full h-6 md:h-8"
      >
        {/* Top half — color of the section above */}
        <path
          d="M0,40 C120,15 240,50 360,30 C480,10 600,45 720,25 C840,5 960,40 1080,25 C1200,10 1320,35 1440,20 L1440,0 L0,0 Z"
          fill={topColor}
        />
        {/* Bottom half — color of the section below */}
        <path
          d="M0,40 C120,15 240,50 360,30 C480,10 600,45 720,25 C840,5 960,40 1080,25 C1200,10 1320,35 1440,20 L1440,56 L0,56 Z"
          fill={bottomColor}
        />
      </svg>
    </div>
  );
}
