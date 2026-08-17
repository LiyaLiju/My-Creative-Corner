/* ============================================
   SECTION HEADER
   
   The consistent heading used for each content
   section: a flower icon + title text.
   
   Props:
   - title: the section name ("from the oven", etc.)
   - variant: controls the flower and text colors
     to match the section's background
   
   "default" = brown text, pink flower (for white bg)
   "light"   = white text, light flower (for green/pink bg)
   ============================================ */

import FlowerIcon from "./FlowerIcon";

interface SectionHeaderProps {
  title: string;
  variant?: "default" | "light";
  className?: string;
}

export default function SectionHeader({
  title,
  variant = "default",
  className = "",
}: SectionHeaderProps) {
  const isLight = variant === "light";

  return (
    <h2
      className={`
        font-serif text-xl md:text-2xl font-semibold
        flex items-center gap-3
        ${isLight ? "text-white" : "text-brown"}
        ${className}
      `}
    >
      <FlowerIcon
        size={22}
        petalColor={
          isLight ? "rgba(255,255,255,0.3)" : "#F9D0CE"
        }
        centerColor={
          isLight ? "rgba(255,255,255,0.55)" : "#F297A0"
        }
      />
      {title}
    </h2>
  );
}
