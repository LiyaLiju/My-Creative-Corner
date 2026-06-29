/* ============================================
   FLOWER ICON
   The little 5-petal flower motif used across
   the site

   Props:
   - size: width/height in pixels (default 20)
   - petalColor: outer petals (default pink light)
   - centerColor: center dot (default pink)
   - className: extra Tailwind classes
   ============================================ */

interface FlowerIconProps {
  size?: number;
  petalColor?: string;
  centerColor?: string;
  className?: string;
}

export default function FlowerIcon({
  size = 20,
  petalColor = "#F9D0CE",
  centerColor = "#F297A0",
  className = "",
}: FlowerIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 30 30"
      className={className}
      aria-hidden="true" // decorative, screen readers skip it
    >
      {/* 5 petals arranged in a circle */}
      <circle cx="15" cy="7" r="5.5" fill={petalColor} />
      <circle cx="22" cy="12" r="5.5" fill={petalColor} />
      <circle cx="20" cy="21" r="5.5" fill={petalColor} />
      <circle cx="10" cy="21" r="5.5" fill={petalColor} />
      <circle cx="8" cy="12" r="5.5" fill={petalColor} />

      {/* Center circle */}
      <circle cx="15" cy="14.5" r="4.5" fill={centerColor} />
    </svg>
  );
}
