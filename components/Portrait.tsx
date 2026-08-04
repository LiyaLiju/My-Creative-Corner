"use client";

import Image from "next/image";

interface PortraitProps {
  src?: string;
  alt?: string;
}

export default function Portrait({
  src = "/images/portrait.jpg",
  alt = "Portrait photo",
}: PortraitProps) {
  return (
    /* Outer container */
    <div className="relative w-43 h-65 md:w-98 md:h-128 mx-auto">
      {/* Portrait Photo */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="w-[70%] h-[78%] relative overflow-hidden"
          style={{
            clipPath: "url(#diagonal-oval-clip)",
          }}
        >
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover"
            priority 
            sizes="392px"
          />
        </div>
      </div>
      <svg
        viewBox="0 0 100 120"
        className="absolute inset-0 w-full h-full"
        aria-hidden="true"
      >
        <defs>
          {/* Diagonal oval clip path for the portrait */}
          <clipPath id="diagonal-oval-clip" clipPathUnits="objectBoundingBox">
            <ellipse
              cx="0.5"
              cy="0.5"
              rx="0.4"
              ry="0.46"
              transform="rotate(-55 0.5 0.5)"
            />
          </clipPath>
        </defs>

        {/* Offset oval ring around portrait */}
        <ellipse
          cx="50"
          cy="60"
          rx="33"
          ry="46"
          fill="none"
          stroke="#eb869d"
          opacity="0.9"
          strokeWidth="0.6"
          transform="rotate(-30 50 60)"
        />
      </svg>

    </div>
  );
}
