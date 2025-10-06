import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, TrendingUp, ExternalLink, CheckCircle, Target, Zap, Users, BarChart3, Lightbulb, Settings, Award, Code, Database, Shield, Rocket } from 'lucide-react';
import caseStudiesData from '../data/caseStudies.json';

const iconMap = {
  Rocket,
  Shield,
  Compass: BarChart3,
  Castle: Shield,
  BarChart3,
  Cog: Settings,
  CreditCard: Zap,
  Zap,
  GitBranch: Code,
  Target,
  Map: BarChart3,
  Server: Database
};

// Comprehensive case study content
const detailedContent: { [key: string]: any } = {
  'the-launchpad': {
    spark: "Our support team was spending significant time answering the same repetitive questions about order status, course prerequisites, and CEU rules. This created a bottleneck that slowed down response times for complex issues and pulled valuable resources away from proactive customer engagement. We needed a smarter, more scalable way to provide instant answers while maintaining the personal touch our customers expected.",
    blueprint: {
      overview: "I architected an AI-powered chatbot that went far beyond simple FAQ responses. This wasn't just a chatbot—it was a CRM-aware assistant that could look up a user's order history, understand their training progress, and provide personalized guidance based on their specific needs.",
      architecture: [
        "Cloudflare Workers for edge computing and lightning-fast response times",
        "OpenAI Integration with GPT-powered natural language understanding",
        "Real-time CRM connectivity to WooCommerce, LearnDash, and FluentCRM",
        "Context-aware responses based on user's purchase history and enrollment",
        "Smart escalation logic for seamless handoff to human agents"
      ],
      features: [
        "Order status lookups with real-time shipping tracking",
        "Course prerequisite validation and personalized recommendations",
        "CEU credit calculations and compliance guidance",
        "Automated learning path suggestions based on user goals",
        "Intelligent appointment scheduling for consultations"
      ]
    },
    impact: {
      metrics: [
        { label: "Support ticket reduction", value: "70%", color: "text-green-400" },
        { label: "Response time improvement", value: "90%", color: "text-blue-400" },
        { label: "Customer satisfaction", value: "85%", color: "text-purple-400" },
        { label: "Self-service resolution", value: "40%", color: "text-cyan-400" }
      ],
      details: "By handling the majority of routine inquiries automatically, the chatbot dramatically improved our self-service rate and increased the quality of support handoffs to our human team. This created a better, faster experience for users while allowing our support team to focus on high-value, relationship-building activities."
    },
    technicalDeep: {
      title: "Technical Implementation Deep Dive",
      sections: [
        {
          title: "Edge Computing Architecture",
          content: "Deployed on Cloudflare Workers for global distribution and sub-100ms response times. The serverless architecture automatically scales with demand while maintaining consistent performance worldwide."
        },
        {
          title: "AI Integration & Prompt Engineering",
          content: "Sophisticated prompt engineering maintains brand voice while accessing live data through secure API connections. Custom context injection ensures responses are personalized and accurate."
        },
        {
          title: "Data Security & Privacy",
          content: "Implemented end-to-end encryption for all customer data access, with strict access controls and audit logging for compliance with healthcare data regulations."
        }
      ]
    }
  },
  'the-compass': {
    spark: "Multiple dashboards, inconsistent UTMs, and broken events created noise in our analytics. Marketing decisions were delayed or wrong because the data couldn't be trusted. We needed a single source of truth for attribution and campaign performance.",
    blueprint: {
      overview: "I rebuilt the entire analytics foundation with a shared event dictionary, strict UTM governance, and server-side tracking to create reliable, actionable data for marketing decisions.",
      architecture: [
        "Event dictionary with GTM templates for consistent tracking",
        "Strict UTM governance with automated link builder for campaigns",
        "Server-side events to reduce ad blocker impact and improve data quality",
        "Single source dashboards with decision annotations and context",
        "Automated data validation and quality monitoring"
      ],
      features: [
        "Normalized event schema across all touchpoints",
        "Real-time data quality monitoring and alerts",
        "Multi-touch attribution modeling with custom lookback windows",
        "Campaign performance dashboards with ROI calculations",
        "Automated reporting with executive summaries"
      ]
    },
    impact: {
      metrics: [
        { label: "Data quality improvement", value: "85%", color: "text-green-400" },
        { label: "Decision speed increase", value: "60%", color: "text-blue-400" },
        { label: "Attribution accuracy", value: "92%", color: "text-purple-400" },
        { label: "ROAS improvement", value: "45%", color: "text-cyan-400" }
      ],
      details: "Signal quality rose dramatically, modeling stability improved, and campaign decisions were made faster with confidence. Finance finally aligned on reported outcomes, creating trust in marketing metrics across the organization."
    },
    technicalDeep: {
      title: "Analytics Architecture Deep Dive",
      sections: [
        {
          title: "Event Schema Design",
          content: "Created a comprehensive event dictionary that standardizes all user interactions across web, mobile, and offline touchpoints. This ensures consistent data collection and enables accurate cross-platform attribution."
        },
        {
          title: "Server-Side Tracking Implementation",
          content: "Deployed server-side GTM container with custom PHP hooks for reliable event collection. This bypasses ad blockers and provides more accurate data while respecting user privacy preferences."
        },
        {
          title: "Attribution Modeling",
          content: "Built custom multi-touch attribution models that account for the complex B2B customer journey, including offline interactions and long consideration periods typical in healthcare education."
        }
      ]
    }
  }
};

export default function CaseStudyDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [caseStudy, setCaseStudy] = useState<any>(null);
  const [activeSection, setActiveSection] = useState('overview');

  useEffect(() => {
    const study = caseStudiesData.find((item: any) => item.slug === slug);
    setCaseStudy(study);
  }, [slug]);

  if (!caseStudy) {
    return (
      <div className="min-h-screen bg-[#0F0F0F] text-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/5 flex items-center justify-center">
            <Clock className="w-8 h-8 text-slate-400" />
          </div>
          <h2 className="text-xl font-semibold mb-2">Loading case study...</h2>
          <p className="text-slate-400">Please wait while we fetch the details.</p>
        </div>
      </div>
    );
  }

  const IconComponent = iconMap[caseStudy.icon as keyof typeof iconMap] || Zap;
  const content = detailedContent[slug || ''] || {};

  return (
    <main className="min-h-screen bg-[#0F0F0F] text-white">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-6 overflow-hidden">
        <div className="max-w-4xl mx-auto">
          {/* Back Navigation */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <Link
              to="/case-studies"
              className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Case Studies
            </Link>
          </motion.div>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center">
              <IconComponent className="w-10 h-10 text-white" />
            </div>
            
            <div className="inline-block px-4 py-2 bg-cyan-400/10 border border-cyan-400/20 rounded-full text-cyan-400 text-sm font-semibold mb-4">
              {caseStudy.category}
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {caseStudy.title}
            </h1>
            <p className="text-xl text-slate-300 mb-6 max-w-2xl mx-auto">
              {caseStudy.subtitle}
            </p>
            
            {/* Key Metrics */}
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">{caseStudy.impact}</div>
                <div className="text-sm text-slate-400">Primary Impact</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-400">8-12 min</div>
                <div className="text-sm text-slate-400">Read Time</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">{caseStudy.tags.length}</div>
                <div className="text-sm text-slate-400">Technologies</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="px-6 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-[1fr_300px] gap-12">
            {/* Main Content */}
            <div className="space-y-12">
              {/* Overview */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="p-8 bg-white/5 border border-white/10 rounded-2xl"
              >
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <Target className="w-6 h-6 text-cyan-400" />
                  Project Overview
                </h2>
                <p className="text-slate-300 leading-relaxed text-lg">
                  {caseStudy.description}
                </p>
              </motion.div>

              {/* Challenge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="p-8 bg-red-500/5 border border-red-500/20 rounded-2xl"
              >
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <Users className="w-6 h-6 text-red-400" />
                  The Challenge
                </h2>
                <p className="text-slate-300 leading-relaxed">
                  {caseStudy.details?.challenge || "Challenge details coming soon..."}
                </p>
              </motion.div>

              {/* Solution */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="p-8 bg-green-500/5 border border-green-500/20 rounded-2xl"
              >
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  The Solution
                </h2>
                <p className="text-slate-300 leading-relaxed mb-6">
                  {caseStudy.details?.solution || "Solution details coming soon..."}
                </p>
                
                {/* Technologies Used */}
                {caseStudy.details?.technologies && (
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-green-400">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {caseStudy.details.technologies.map((tech: string, index: number) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-full text-sm text-green-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>

              {/* Results & Impact */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="p-8 bg-cyan-500/5 border border-cyan-500/20 rounded-2xl"
              >
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <TrendingUp className="w-6 h-6 text-cyan-400" />
                  Results & Impact
                </h2>
                <div className="text-center p-6 bg-cyan-500/10 rounded-xl">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">
                    {caseStudy.impact}
                  </div>
                  <p className="text-slate-300">Primary measurable outcome</p>
                </div>
              </motion.div>

              {/* Toolbox Links */}
              {caseStudy.details?.toolboxLinks && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="p-8 bg-purple-500/5 border border-purple-500/20 rounded-2xl"
                >
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                    <ExternalLink className="w-6 h-6 text-purple-400" />
                    Related Toolbox Items
                  </h2>
                  <div className="space-y-3">
                    {caseStudy.details.toolboxLinks.map((link: string, index: number) => (
                      <Link
                        key={index}
                        to="/toolbox"
                        className="block p-4 bg-purple-500/10 border border-purple-500/20 rounded-lg hover:bg-purple-500/20 transition-colors group"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-purple-300 group-hover:text-purple-200">
                            {link}
                          </span>
                          <ExternalLink className="w-4 h-4 text-purple-400 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Project Tags */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="p-6 bg-white/5 border border-white/10 rounded-2xl"
              >
                <h3 className="text-lg font-semibold mb-4">Project Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {caseStudy.tags.map((tag: string, index: number) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-white/10 border border-white/10 rounded-full text-sm text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Quick Stats */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="p-6 bg-white/5 border border-white/10 rounded-2xl"
              >
                <h3 className="text-lg font-semibold mb-4">Quick Stats</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Category</span>
                    <span className="text-white">{caseStudy.category}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Featured</span>
                    <span className="text-white">{caseStudy.featured ? 'Yes' : 'No'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Technologies</span>
                    <span className="text-white">{caseStudy.details?.technologies?.length || caseStudy.tags.length}</span>
                  </div>
                </div>
              </motion.div>

              {/* Navigation */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="p-6 bg-white/5 border border-white/10 rounded-2xl"
              >
                <h3 className="text-lg font-semibold mb-4">Explore More</h3>
                <div className="space-y-3">
                  <Link
                    to="/case-studies"
                    className="block px-4 py-2 bg-cyan-500/20 border border-cyan-500/30 rounded-lg text-cyan-400 hover:bg-cyan-500/30 transition-colors text-center"
                  >
                    All Case Studies
                  </Link>
                  <Link
                    to="/toolbox"
                    className="block px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white hover:bg-white/20 transition-colors text-center"
                  >
                    View Toolbox
                  </Link>
                  <Link
                    to="/contact"
                    className="block px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white hover:bg-white/20 transition-colors text-center"
                  >
                    Discuss Project
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
