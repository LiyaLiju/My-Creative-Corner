"use client";
/* ============================================
   HOMEPAGE — app/page.tsx (Phase 2 update)
   
   Now includes all 3 content sections below
   the hero. This file became a client component
   ("use client") because we need useState for
   the modal open/close state.
   
   Structure:
   1. Hero (from Phase 1)
   2. Baking section (white bg)
   3. Wave divider → green
   4. Crochet section (green bg)
   5. Wave divider → white
   6. Code section (white bg)
   7. Wave divider → pink
   8. Placeholder for Phase 4 order CTA (pink bg)
   ============================================ */

import { useState } from "react";
import Portrait from "@/components/Portrait";
import FlowerIcon from "@/components/FlowerIcon";
import SectionHeader from "@/components/SectionHeader";
import WaveDivider from "@/components/WaveDivider";
import ProjectCard from "@/components/ProjectCard";
import ProjectModal from "@/components/ProjectModal";
import {
  getFeaturedByCategory,
  type Project,
} from "@/lib/projects";

export default function Home() {
  /* ============================================
     MODAL STATE
     
     selectedProject: which project to show in
       the modal (null = no modal open)
     
     When a baking/crochet card is clicked, we
     set selectedProject to that card's data.
     The modal reads isOpen from whether
     selectedProject is not null.
     ============================================ */
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Get featured projects for each section
  const bakingFeatured = getFeaturedByCategory("baking");
  const crochetFeatured = getFeaturedByCategory("crochet");
  const codeFeatured = getFeaturedByCategory("code");

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

      {/* ==========================================
           BAKING SECTION (white background)
           ========================================== */}
      <section id="baking" className="bg-white-warm py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-6">
          <SectionHeader title="from the oven" className="mb-8" />

          {/* Grid of baking cards — 1 column on mobile,
              2 on tablet, 3 on desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {bakingFeatured.map((project) => (
              <ProjectCard
                key={project.slug}
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Wave: white → green */}
      <WaveDivider topColor="#FFFCF7" bottomColor="#B6BB79" />

      {/* ==========================================
           CROCHET SECTION (green background)
           ========================================== */}
      <section id="crochet" className="bg-green-dark py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-6">
          <SectionHeader
            title="yarn projects"
            variant="light"
            className="mb-8"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {crochetFeatured.map((project) => (
              <ProjectCard
                key={project.slug}
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Wave: green → white */}
      <WaveDivider topColor="#B6BB79" bottomColor="#FFFCF7" />

      {/* ==========================================
           CODE SECTION (white background)
           
           Code cards don't open modals — in Phase 3
           they'll link to individual case study pages.
           For now they're just visual.
           ========================================== */}
      <section id="code" className="bg-white-warm py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-6">
          <SectionHeader title="code projects" className="mb-8" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {codeFeatured.map((project) => (
              <ProjectCard
                key={project.slug}
                project={project}
                /* No onClick for code cards yet —
                   Phase 3 will add navigation to
                   case study pages */
              />
            ))}
          </div>
        </div>
      </section>

      {/* Wave: white → pink (for the order CTA coming in Phase 4) */}
      <WaveDivider topColor="#FFFCF7" bottomColor="#F297A0" />

      {/* ==========================================
           PLACEHOLDER for order CTA (Phase 4)
           ========================================== */}
      <section className="bg-pink py-12 text-center">
        <p className="text-white/60 text-sm italic">
          ✨ order form coming soon — Phase 4 ✨
        </p>
      </section>

      {/* Wave: pink → cream (before footer) */}
      <WaveDivider topColor="#F297A0" bottomColor="#6B7040" />

      {/* ==========================================
           MODAL
           
           Only one modal instance for the whole page.
           It reads which project to show from state.
           ========================================== */}
      <ProjectModal
        project={selectedProject}
        isOpen={selectedProject !== null}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}
