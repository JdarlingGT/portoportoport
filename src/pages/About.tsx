
import { motion } from "framer-motion";
import AnchorTOC from "../components/ui/AnchorTOC";
import ProgressBar from "../components/ui/ProgressBar";
import HighlightChips from "../sections/HighlightChips";
import PrinciplesGrid from "../sections/PrinciplesGrid";
import StackTiles from "../sections/StackTiles";
import TimelineVertical from "../sections/TimelineVertical";
import Partnerships from "../sections/Partnerships";
import TestimonialsCarousel from "../sections/TestimonialsCarousel";
import CTACluster from "../sections/CTACluster";
import { PhotoGallery } from "../components/PhotoGallery";
import { fadeIn, slideUp, staggerContainer } from "../styles/animations";

export default function About() {
  return (
    <main className="min-h-screen bg-[#0F0F0F] text-white">
      <ProgressBar />
      {/* HERO */}
      <section id="story" className="relative pt-28 pb-16">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-[240px_1fr] gap-8">
          <div className="hidden lg:block"><AnchorTOC /></div>

          <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true }} className="space-y-6">
            {/* Professional Headshot */}
            <motion.div variants={fadeIn} className="flex justify-center lg:justify-start mb-8">
              <div className="relative">
                <img 
                  src="/assets/personal/professional-headshot.jpg" 
                  alt="Jacob Darling - Professional Headshot"
                  className="w-32 h-32 rounded-full object-cover border-4 border-cyan-400/20 shadow-2xl"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-400/20 to-transparent"></div>
              </div>
            </motion.div>

            <motion.h1 variants={slideUp} className="text-4xl sm:text-5xl font-bold">
              Where Marketing Vision <span className="text-cyan-400">Meets Technical Reality</span>
            </motion.h1>

            <motion.p variants={fadeIn} className="text-gray-300 max-w-3xl">
              Great marketing ideas often break at the handoff—the critical point where a creative vision meets the complex reality of technical execution. My entire career has been built to solve this problem.
            </motion.p>

            <motion.p variants={fadeIn} className="text-gray-300 max-w-3xl">
              I'm Jacob Darling, a marketing leader who operates as both a brand strategist and a systems architect. On one side, I direct bold rebrands and craft compelling narratives. On the other, I personally engineer the underlying technical infrastructure—the CRM logic, marketing automation workflows, and full-stack web architecture—that makes those campaigns scalable, measurable, and sustainable.
            </motion.p>

            <motion.p variants={fadeIn} className="text-gray-300 max-w-3xl">
              With a deep proficiency in data analysis and a validated expertise in teamwork, my hybrid approach creates integrated solutions that don't just look good, but function brilliantly. Whether migrating from Mailchimp to a tag-based FluentCRM system with 400+ automations or launching an OpenAI-powered assistant, I turn abstract goals into revenue-focused engines.
            </motion.p>

            <div className="flex flex-wrap gap-3">
              <a href="/contact" className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 transition-colors">Schedule a Call</a>
              <a href="/resume" className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 transition-colors">Download Résumé</a>
            </div>

            <HighlightChips chips={[
              "70% support ticket reduction",
              "40% e-commerce lift", 
              "86% cache hit rate",
              "Unified data pipeline (web → LMS → CRM → analytics)"
            ]} />
          </motion.div>
        </div>
      </section>

      {/* Mobile TOC */}
      <div className="lg:hidden max-w-6xl mx-auto px-6">
        <AnchorTOC />
      </div>

      {/* PRINCIPLES */}
      <section id="principles" className="py-16 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-6">The Principles That Drive My Work</h2>
          <PrinciplesGrid />
        </div>
      </section>

      {/* STACK */}
      <section id="stack" className="py-16 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-2">My Interactive MarTech Stack</h2>
          <p className="text-gray-400 mb-6">I don't just use tools—I build integrated ecosystems.</p>
          <StackTiles />
        </div>
      </section>

      {/* JOURNEY */}
      <section id="journey" className="py-16 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-6">Professional Journey & Impact</h2>
          <TimelineVertical />
        </div>
      </section>

      {/* PARTNERSHIPS */}
      <section id="partnerships" className="py-16 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-6">Ongoing Strategic Partnerships</h2>
          <Partnerships />
        </div>
      </section>

      {/* PHOTO GALLERY */}
      <section id="gallery" className="py-16 border-t border-white/5">
        <PhotoGallery />
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="py-16 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-6">What Colleagues & Clients Say</h2>
          <TestimonialsCarousel />
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-16 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <CTACluster />
        </div>
      </section>
    </main>
  );
}
