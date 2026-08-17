"use client";
/* ============================================
   PROJECT MODAL
   
   A fullscreen overlay that slides up from the
   bottom when you click a baking or crochet card.
   
   Features:
   - Framer Motion slide-up + fade animation
   - Locks page scroll while open
   - Closes on: X button, Escape key, backdrop click
   - Enlarged project image at the top
   - Full recipe OR crochet tutorial below
   - Matches the pink/cream/green palette
   
   Props:
   - project: the project data to display
   - isOpen: whether the modal is visible
   - onClose: function to call when closing
   ============================================ */

import { useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import type { Project } from "@/lib/projects";
import FlowerIcon from "./FlowerIcon";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({
  project,
  isOpen,
  onClose,
}: ProjectModalProps) {
  /* ============================================
     SCROLL LOCK + ESCAPE KEY
     
     When the modal opens:
     - document.body.overflow = "hidden" prevents
       the page behind from scrolling
     - We add a keydown listener for Escape
     
     When it closes, we clean up both.
     The return function in useEffect is the
     cleanup — it runs when isOpen changes.
     ============================================ */
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";

      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === "Escape") onClose();
      };
      window.addEventListener("keydown", handleEscape);

      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleEscape);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen, onClose]);

  // Don't render anything if no project is selected
  if (!project) return null;

  const isBaking = project.category === "baking";
  const isCrochet = project.category === "crochet";

  return (
    /* AnimatePresence lets Framer Motion animate
       the exit (fade out) when isOpen becomes false.
       Without it, the modal would just vanish. */
    <AnimatePresence>
      {isOpen && (
        <>
          {/* ---- BACKDROP ----
              Semi-transparent dark overlay behind the modal.
              Clicking it closes the modal. */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 z-40"
            aria-hidden="true"
          />

          {/* ---- MODAL PANEL ----
              The actual content container. Slides up
              from the bottom and centers on screen. */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 28,
            }}
            className="
              fixed inset-4 md:inset-x-auto md:inset-y-6
              md:max-w-2xl md:mx-auto
              bg-white-warm rounded-2xl
              shadow-2xl z-50 overflow-hidden
              flex flex-col
            "
            role="dialog"
            aria-modal="true"
            aria-label={project.title}
          >
            {/* ---- CLOSE BUTTON ---- */}
            <button
              onClick={onClose}
              className="
                absolute top-4 right-4 z-10
                w-8 h-8 rounded-full
                bg-white-warm/80 backdrop-blur-sm
                flex items-center justify-center
                text-brown hover:text-pink
                transition-colors
                border border-cream
              "
              aria-label="Close modal"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>

            {/* ---- SCROLLABLE CONTENT ---- */}
            <div className="overflow-y-auto flex-1">
              {/* ---- HERO IMAGE ---- */}
              <div
                className={`
                  relative h-56 md:h-72
                  ${isBaking ? "bg-pink-pale" : "bg-cream"}
                `}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 640px"
                  priority
                />
              </div>

              {/* ---- TEXT CONTENT ---- */}
              <div className="p-6 md:p-8">
                {/* Title + tags */}
                <div className="flex items-start gap-3 mb-4">
                  <FlowerIcon
                    size={24}
                    petalColor={isBaking ? "#F9D0CE" : "#D4D88A"}
                    centerColor={isBaking ? "#F297A0" : "#B6BB79"}
                  />
                  <div>
                    <h2 className="font-serif text-2xl font-semibold text-brown">
                      {project.title}
                    </h2>
                    <p className="text-sm text-brown-light mt-1">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* ---- BAKING: Metadata + Recipe ---- */}
                {isBaking && (
                  <>
                    {/* Time/servings badges */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.prepTime && (
                        <span className="bg-pink-pale text-[#8B4560] text-xs font-medium px-3 py-1 rounded-pill">
                          ⏱ Prep: {project.prepTime}
                        </span>
                      )}
                      {project.cookTime && (
                        <span className="bg-pink-pale text-[#8B4560] text-xs font-medium px-3 py-1 rounded-pill">
                          🔥 Cook: {project.cookTime}
                        </span>
                      )}
                      {project.servings && (
                        <span className="bg-pink-pale text-[#8B4560] text-xs font-medium px-3 py-1 rounded-pill">
                          🍰 {project.servings}
                        </span>
                      )}
                    </div>

                    {/* Recipe text */}
                    {project.recipe && (
                      <div className="bg-cream-light rounded-card p-5 border border-cream">
                        <h3 className="font-serif text-lg font-semibold text-brown mb-3">
                          Recipe
                        </h3>
                        <div className="text-sm text-brown-light leading-relaxed whitespace-pre-line">
                          {project.recipe}
                        </div>
                      </div>
                    )}
                  </>
                )}

                {/* ---- CROCHET: Materials + Tutorial Link ---- */}
                {isCrochet && (
                  <>
                    {/* Difficulty + creator badges */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.difficulty && (
                        <span className="bg-cream text-green-deep text-xs font-medium px-3 py-1 rounded-pill">
                          📊 {project.difficulty}
                        </span>
                      )}
                      {project.tutorialBy && (
                        <span className="bg-cream text-green-deep text-xs font-medium px-3 py-1 rounded-pill">
                          🧶 Tutorial by {project.tutorialBy}
                        </span>
                      )}
                    </div>

                    {/* Materials list */}
                    {project.materials && project.materials.length > 0 && (
                      <div className="bg-cream-light rounded-card p-5 border border-cream mb-6">
                        <h3 className="font-serif text-lg font-semibold text-brown mb-3">
                          Materials
                        </h3>
                        <ul className="space-y-1.5">
                          {project.materials.map((m, i) => (
                            <li
                              key={i}
                              className="text-sm text-brown-light flex items-start gap-2"
                            >
                              <span className="text-green mt-0.5">•</span>
                              {m}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Tutorial button */}
                    {project.tutorialUrl && (
                      <a
                        href={project.tutorialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          inline-flex items-center gap-2
                          bg-green text-white
                          font-medium text-sm
                          px-6 py-3 rounded-card
                          hover:bg-green-dark transition-colors
                        "
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                        Watch Tutorial
                      </a>
                    )}
                  </>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
