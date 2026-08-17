"use client";
/* ============================================
   PROJECT CARD
   
   The reusable card shown in every section.
   Same structure everywhere, different colors
   per category:
   
   baking  → pink-pale background, pink tags
   crochet → cream/sage background, green tags
   code    → sage/cream background, green tags
   
   Props:
   - project: the data object from lib/projects.ts
   - onClick: what happens when clicked
     (baking/crochet → open modal, code → navigate)
   
   Uses Framer Motion for the hover lift effect.
   ============================================ */

import Image from "next/image";
import { motion } from "framer-motion";
import type { Project } from "@/lib/projects";

interface ProjectCardProps {
  project: Project;
  onClick?: () => void;
}

/* ============================================
   CATEGORY STYLES
   
   Maps each category to its color scheme.
   This object keeps the JSX clean — instead of
   a chain of if/else, we just look up the category.
   ============================================ */
const categoryStyles = {
  baking: {
    imageBg: "bg-pink-pale",
    tagBg: "bg-pink-light",
    tagText: "text-[#8B4560]",
  },
  crochet: {
    imageBg: "bg-cream",
    tagBg: "bg-cream",
    tagText: "text-green-deep",
  },
  code: {
    imageBg: "bg-cream",
    tagBg: "bg-[#E5E7C4]",
    tagText: "text-green-deep",
  },
};

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  const styles = categoryStyles[project.category];

  return (
    <motion.article
      /* Framer Motion props:
         whileHover lifts the card up 4px
         transition uses a spring for a natural feel */
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      onClick={onClick}
      className={`
        bg-white-warm border border-cream rounded-card
        overflow-hidden cursor-pointer
        shadow-sm hover:shadow-md transition-shadow
      `}
    >
      {/* ---- IMAGE AREA ---- */}
      <div
        className={`
          ${styles.imageBg} h-40 md:h-48
          relative overflow-hidden
        `}
      >
        {/* Next.js Image with fill mode — it stretches
            to cover the container while maintaining
            aspect ratio. object-cover crops the excess. */}
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>

      {/* ---- TEXT CONTENT ---- */}
      <div className="p-4">
        <h3 className="font-sans text-sm font-medium text-brown mb-1">
          {project.title}
        </h3>
        <p className="text-xs text-brown-light leading-relaxed mb-3">
          {project.description}
        </p>

        {/* ---- TAGS ---- */}
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className={`
                ${styles.tagBg} ${styles.tagText}
                text-[10px] font-medium px-2.5 py-0.5
                rounded-pill
              `}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
