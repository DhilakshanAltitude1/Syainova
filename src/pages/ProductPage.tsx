import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import FadeInSection from "@/components/FadeInSection";
import NodeGraphAnimation from "@/components/NodeGraphAnimation";
import {
  Brain, FileText, BarChart3, TrendingUp, Lightbulb, ArrowRight, ArrowDown,
  Cpu, Zap, Shield, Globe, Layers, Target, Rocket, Check, Users, Clock,
  Database, LineChart, Workflow, Sparkles, BookOpen, Gauge,
} from "lucide-react";

const DASHBOARD_URL = "https://dashboard.syainova.com";

const capabilities = [
  {
    icon: Brain,
    title: "AI Startup Idea Generator",
    desc: "Transform raw concepts into validated startup ideas. Our AI cross-references market data, technology trends, and competitive landscapes to generate unique, viable business concepts.",
    details: ["Market-validated idea scoring", "Competitive gap analysis", "Technology feasibility assessment", "Target audience identification"],
  },
  {
    icon: FileText,
    title: "Product Framework Builder",
    desc: "Automatically generate structured product development frameworks with feature prioritization, user stories, and technical architecture recommendations.",
    details: ["Feature prioritization matrix", "User story generation", "Technical stack recommendations", "MVP scope definition"],
  },
  {
    icon: BarChart3,
    title: "Business Model Structuring",
    desc: "Create comprehensive business model canvases with revenue projections, cost structures, and go-to-market strategies powered by real market data.",
    details: ["Revenue model analysis", "Cost structure optimization", "Go-to-market strategy", "Unit economics calculator"],
  },
  {
    icon: TrendingUp,
    title: "Market Opportunity Discovery",
    desc: "Real-time trend analysis and market signal processing to identify emerging opportunities before they become mainstream.",
    details: ["Trend velocity tracking", "Market size estimation", "Demand signal detection", "Industry convergence mapping"],
  },
  {
    icon: Lightbulb,
    title: "Innovation Dashboard",
    desc: "Your command center for managing the entire innovation pipeline — from ideation to structured blueprint, with real-time progress tracking.",
    details: ["Pipeline visualization", "Progress tracking", "Team collaboration", "Export & sharing tools"],
  },
  {
    icon: Shield,
    title: "Startup Concept Validator",
    desc: "Stress-test your startup concepts against real-world constraints. Get viability scores, risk assessments, and actionable improvement suggestions.",
    details: ["Viability scoring algorithm", "Risk factor identification", "Improvement recommendations", "Competitor benchmarking"],
  },
];

const pipelineSteps = [
  { icon: Sparkles, label: "Idea Input", desc: "Enter your raw concept, industry problem, or technology trend. The system accepts natural language descriptions of any complexity." },
  { icon: Globe, label: "AI Trend Analysis", desc: "Our engine cross-references your input against 50,000+ data points including emerging technologies, market reports, and patent databases." },
  { icon: LineChart, label: "Market Signal Processing", desc: "Advanced NLP identifies demand signals, competitive gaps, and market timing indicators from real-time data streams." },
  { icon: Workflow, label: "Product Idea Generation", desc: "Generates 5-10 structured product concepts with feature sets, differentiation strategies, and technical feasibility scores." },
  { icon: Database, label: "Business Model Structuring", desc: "Creates complete business model canvases with revenue projections, customer segments, and channel strategies." },
  { icon: Rocket, label: "Startup Blueprint Output", desc: "Delivers a comprehensive startup blueprint including product roadmap, go-to-market plan, financial projections, and pitch deck outline." },
];

const useCases = [
  {
    icon: Users,
    title: "For Solo Founders",
    desc: "Turn your side-project idea into a structured business plan. Get the clarity and direction you need to take the leap from employee to entrepreneur.",
  },
  {
    icon: Layers,
    title: "For Product Teams",
    desc: "Accelerate your product discovery process. Generate and validate dozens of feature concepts and product extensions in hours, not weeks.",
  },
  {
    icon: Target,
    title: "For Innovation Labs",
    desc: "Scale your innovation pipeline. Process hundreds of ideas through structured frameworks and surface the highest-potential concepts automatically.",
  },
  {
    icon: BookOpen,
    title: "For Accelerators & VCs",
    desc: "Evaluate startup concepts faster. Use our AI analysis to assess market viability, competitive positioning, and growth potential of incoming applications.",
  },
];

const stats = [
  { value: "10,000+", label: "Ideas Processed" },
  { value: "500+", label: "Blueprints Generated" },
  { value: "50K+", label: "Data Points Analyzed" },
  { value: "< 5 min", label: "Average Blueprint Time" },
];

const techFeatures = [
  { icon: Cpu, title: "GPU-Accelerated Processing", desc: "Parallel AI inference for real-time idea analysis and generation." },
  { icon: Zap, title: "Sub-5 Minute Blueprints", desc: "From raw idea to complete startup blueprint in under 5 minutes." },
  { icon: Globe, title: "Real-Time Market Data", desc: "Continuously updated market signals and trend databases." },
  { icon: Shield, title: "Enterprise-Grade Security", desc: "End-to-end encryption and SOC 2 compliant infrastructure." },
  { icon: Gauge, title: "99.9% Uptime SLA", desc: "Highly available infrastructure with global CDN distribution." },
  { icon: Layers, title: "API-First Architecture", desc: "RESTful APIs for seamless integration with your existing tools." },
];

const faqs = [
  { q: "How does the AI generate startup ideas?", a: "Our AI engine combines natural language processing with a proprietary database of market trends, technology patents, and competitive intelligence. It identifies gaps and opportunities by cross-referencing your input against 50,000+ data points to generate unique, market-validated concepts." },
  { q: "What's included in a startup blueprint?", a: "Each blueprint includes: a detailed product concept with feature prioritization, business model canvas with revenue projections, competitive analysis, target customer profiles, go-to-market strategy, MVP scope definition, technical architecture recommendations, and a 12-month development roadmap." },
  { q: "Can I use Syainova for an existing product?", a: "Absolutely. Product teams use Syainova to explore new feature concepts, identify market expansion opportunities, and validate product pivots. The platform works with both greenfield ideas and existing product contexts." },
  { q: "How accurate are the market analyses?", a: "Our market analyses are powered by real-time data from multiple sources including industry reports, patent databases, social signals, and economic indicators. While no analysis can predict the future with certainty, our accuracy benchmarks consistently outperform traditional market research timelines by 10x." },
  { q: "Is my data secure?", a: "Yes. All data is encrypted at rest and in transit. We follow SOC 2 compliance standards, and your ideas and blueprints are never shared or used to train models. You retain full ownership of all generated content." },
  { q: "Can teams collaborate on the platform?", a: "Our Pro and Enterprise plans support team workspaces where multiple members can collaborate on idea generation, review blueprints, and manage the innovation pipeline together with role-based access controls." },
];

const ProductPage = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative bg-secondary text-secondary-foreground overflow-hidden py-32 lg:py-40 flex items-center min-h-[80vh]">
        <div className="absolute inset-0 opacity-15">
          <NodeGraphAnimation />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <FadeInSection>
            <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
              <Badge variant="outline" className="border-2 border-primary/50 bg-secondary/50 backdrop-blur-md shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] px-4 py-1 text-sm font-bold uppercase tracking-wider text-secondary-foreground mb-8">
                Platform Overview
              </Badge>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-8 text-secondary-foreground
                bg-secondary/40 backdrop-blur-sm px-8 py-6 rounded-2xl border-4 border-primary/30
                shadow-[12px_12px_0px_0px_rgba(0,0,0,0.3)] inline-block">
                The Syainova <span className="text-primary-bright glow-text">Innovation</span> Platform
              </h1>

              <p className="text-lg md:text-xl text-secondary-foreground/75 max-w-2xl mx-auto mb-12 font-medium leading-relaxed">
                AI-powered innovation frameworks that transform raw ideas into structured startup blueprints — complete with business models, product roadmaps, and go-to-market strategies.
              </p>

              <div className="flex flex-wrap justify-center gap-6">
                <Button variant="hero" size="xl" className="py-7 px-8 text-base font-black uppercase tracking-widest shadow-[8px_8px_0px_0px_rgba(0,0,0,0.3)] border-2 border-foreground/20" asChild>
                  <a href={DASHBOARD_URL} target="_blank" rel="noopener noreferrer">
                    Open Innovation Dashboard <ArrowRight size={20} className="ml-2" />
                  </a>
                </Button>
                <Button variant="hero-outline" size="xl" className="py-7 px-8 text-base font-black uppercase tracking-widest bg-secondary/20 backdrop-blur-sm border-2 border-primary/30 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.3)] transition-all" asChild>
                  <a href="#how-it-works">See How It Works</a>
                </Button>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-secondary py-12 border-y-4 border-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <FadeInSection key={i} delay={i * 100}>
                <div className="text-center bg-card border-3 border-foreground p-6 rounded-xl shadow-[6px_6px_0px_0px_rgba(0,0,0,0.1)]">
                  <div className="text-3xl md:text-4xl font-black text-primary mb-1 uppercase tracking-tighter">{s.value}</div>
                  <div className="text-xs font-bold text-foreground/60 uppercase tracking-widest">{s.label}</div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Problem / Solution */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <div className="flex flex-col items-center text-center mb-16">
              <Badge variant="outline" className="border-2 border-foreground bg-card shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] px-4 py-1 text-sm font-bold uppercase tracking-wider mb-6">
                Validation
              </Badge>
              <h2 className="text-3xl md:text-5xl font-black text-foreground mb-4 
                bg-card px-8 py-4 rounded-xl border-4 border-foreground
                shadow-[8px_8px_0px_0px_rgba(0,0,0,0.1)]">
                The Innovation Gap
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto font-medium mt-4">
                The distance between a great idea and a viable startup is where most founders get lost.
              </p>
            </div>
          </FadeInSection>
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <FadeInSection delay={100}>
              <div className="bg-card rounded-2xl p-10 h-full border-4 border-foreground shadow-[10px_10px_0px_0px_rgba(185,28,28,0.15)] relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-2 h-full bg-destructive" />
                <h2 className="text-2xl font-black mb-6 text-destructive uppercase tracking-tight">The Problem</h2>
                <p className="text-muted-foreground font-medium leading-relaxed mb-8 text-lg">
                  Many entrepreneurs struggle to structure early-stage ideas and validate startup concepts. Without proper frameworks, promising ideas fail before they start.
                </p>
                <ul className="space-y-4">
                  {[
                    "Weeks spent on manual market research",
                    "No structured framework for idea validation",
                    "Difficulty translating concepts into business models",
                    "Lack of data-driven decision making",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm font-bold text-muted-foreground">
                      <span className="w-6 h-6 rounded bg-destructive/10 border-2 border-destructive flex items-center justify-center text-destructive flex-shrink-0 mt-0.5">✕</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeInSection>
            <FadeInSection delay={200}>
              <div className="bg-card rounded-2xl p-10 h-full border-4 border-foreground shadow-[10px_10px_0px_0px_rgba(36,12,53,0.15)] relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-2 h-full bg-primary" />
                <h2 className="text-2xl font-black mb-6 text-primary uppercase tracking-tight">The Solution</h2>
                <p className="text-muted-foreground font-medium leading-relaxed mb-8 text-lg">
                  Syainova bridges the gap between concept and execution with AI-powered frameworks that deliver structured blueprints in minutes, not months.
                </p>
                <ul className="space-y-4">
                  {[
                    "AI-powered market analysis in seconds",
                    "Structured innovation frameworks built-in",
                    "Automated business model generation",
                    "Data-driven viability scoring",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm font-bold text-muted-foreground">
                      <span className="w-6 h-6 rounded bg-primary/10 border-2 border-primary flex items-center justify-center text-primary flex-shrink-0 mt-0.5">✓</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Detailed Capabilities */}
      <section className="py-24 bg-surface relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <FadeInSection>
            <div className="flex flex-col items-center text-center mb-16">
              <Badge variant="outline" className="border-2 border-foreground bg-card shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] px-4 py-1 text-sm font-bold uppercase tracking-wider mb-6">
                Core Capabilities
              </Badge>
              <h2 className="text-3xl md:text-5xl font-black text-foreground mb-4 
                bg-card px-8 py-4 rounded-xl border-4 border-foreground
                shadow-[8px_8px_0px_0px_rgba(0,0,0,0.1)]">
                Everything You Need to Innovate
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto font-medium mt-4">
                Six powerful modules working together to transform your innovation pipeline.
              </p>
            </div>
          </FadeInSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {capabilities.map((c, i) => (
              <FadeInSection key={i} delay={i * 100}>
                <div className="bg-card border-4 border-foreground rounded-2xl p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,0.15)] transition-all h-full flex flex-col">
                  <div className="w-16 h-16 rounded-xl bg-secondary border-3 border-foreground flex items-center justify-center mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.15)]">
                    <c.icon size={28} className="text-secondary-foreground" />
                  </div>
                  <h3 className="font-black text-2xl mb-4 text-foreground uppercase tracking-tight">{c.title}</h3>
                  <p className="text-muted-foreground font-medium leading-relaxed mb-6 flex-1">{c.desc}</p>
                  <ul className="space-y-3 border-t-2 border-foreground/10 pt-6 mt-auto">
                    {c.details.map((d, j) => (
                      <li key={j} className="flex items-center gap-3 text-sm font-bold text-muted-foreground">
                        <div className="w-5 h-5 rounded bg-primary/10 border-2 border-primary flex items-center justify-center text-primary flex-shrink-0">
                          <Check size={12} strokeWidth={4} />
                        </div>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Pipeline */}
      <section id="how-it-works" className="py-24 bg-background relative overflow-hidden">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <div className="flex flex-col items-center text-center mb-16">
              <Badge variant="outline" className="border-2 border-foreground bg-card shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] px-4 py-1 text-sm font-bold uppercase tracking-wider mb-6">
                Technical Architecture
              </Badge>
              <h2 className="text-3xl md:text-5xl font-black text-foreground mb-4 
                bg-card px-8 py-4 rounded-xl border-4 border-foreground
                shadow-[8px_8px_0px_0px_rgba(0,0,0,0.1)]">
                How the Innovation Engine Works
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto font-medium mt-4">
                A six-stage AI pipeline that processes your raw input through multiple intelligence layers to deliver comprehensive startup blueprints.
              </p>
            </div>
          </FadeInSection>

          <div className="max-w-4xl mx-auto space-y-8">
            {pipelineSteps.map((step, i) => (
              <div key={i} className="relative">
                {i < pipelineSteps.length - 1 && (
                  <div className="absolute left-10 top-20 bottom-0 w-1 border-r-4 border-dotted border-foreground flex items-center justify-center z-0 opacity-20" />
                )}
                <FadeInSection delay={i * 100}>
                  <div className="bg-card border-4 border-foreground rounded-2xl p-8 relative z-10 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,0.15)] transition-all">
                    <div className="flex items-start gap-8">
                      <div className="w-20 h-20 rounded-2xl bg-primary border-3 border-foreground flex items-center justify-center flex-shrink-0 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]">
                        <step.icon size={32} className="text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="inline-block px-3 py-1 bg-secondary-foreground rounded-lg border-2 border-foreground mb-4">
                          <div className="text-xs font-black tracking-widest uppercase text-white">Stage {i + 1}</div>
                        </div>
                        <h3 className="font-black text-2xl mb-3 text-foreground uppercase tracking-tight">{step.label}</h3>
                        <p className="text-muted-foreground font-medium text-lg leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  </div>
                </FadeInSection>
              </div>
            ))}

            <FadeInSection>
              <div className="mt-16 bg-secondary rounded-2xl p-10 text-center border-4 border-foreground shadow-[12px_12px_0px_0px_rgba(0,0,0,0.3)]">
                <div className="flex items-center justify-center gap-4 font-black text-xl uppercase tracking-[0.2em] text-primary-bright mb-4">
                  <Cpu size={32} className="animate-pulse text-primary-bright" />
                  <span className="glow-text">GPU-Accelerated AI Architecture</span>
                </div>
                <p className="text-secondary-foreground/70 text-lg max-w-2xl mx-auto font-medium">
                  Our proprietary engine processes multi-dimensional data in parallel, delivering results 100x faster than traditional research methods.
                </p>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 bg-surface relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <FadeInSection>
            <div className="flex flex-col items-center text-center mb-16">
              <Badge variant="outline" className="border-2 border-foreground bg-card shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] px-4 py-1 text-sm font-bold uppercase tracking-wider mb-6">
                Use Cases
              </Badge>
              <h2 className="text-3xl md:text-5xl font-black text-foreground mb-4 
                bg-card px-8 py-4 rounded-xl border-4 border-foreground
                shadow-[8px_8px_0px_0px_rgba(0,0,0,0.1)]">
                Built For Innovators
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto font-medium mt-4">
                Whether you're a solo founder or an enterprise innovation lab, Syainova scales to your needs.
              </p>
            </div>
          </FadeInSection>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {useCases.map((uc, i) => (
              <FadeInSection key={i} delay={i * 100}>
                <div className="bg-card border-4 border-foreground rounded-2xl p-10 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,0.15)] transition-all h-full">
                  <div className="w-16 h-16 rounded-2xl bg-primary border-3 border-foreground flex items-center justify-center mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]">
                    <uc.icon size={28} className="text-white" />
                  </div>
                  <h3 className="font-black text-2xl mb-4 text-foreground uppercase tracking-tight">{uc.title}</h3>
                  <p className="text-muted-foreground font-medium text-lg leading-relaxed">{uc.desc}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="py-24 bg-secondary text-secondary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <NodeGraphAnimation />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <FadeInSection>
            <div className="flex flex-col items-center text-center mb-16">
              <Badge variant="outline" className="border-2 border-primary/50 bg-secondary/50 backdrop-blur-md shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] px-4 py-1 text-sm font-bold uppercase tracking-wider mb-6 text-secondary-foreground">
                Infrastructure
              </Badge>
              <h1 className="text-3xl md:text-5xl font-black text-white mb-4 
                bg-secondary/40 backdrop-blur-sm px-8 py-6 rounded-2xl border-4 border-primary/30
                shadow-[12px_12px_0px_0px_rgba(0,0,0,0.3)] inline-block">
                Enterprise-Ready Technology
              </h1>
              <p className="text-secondary-foreground/60 max-w-xl mx-auto font-medium mt-4">
                Built on a robust, scalable infrastructure designed for reliability and performance.
              </p>
            </div>
          </FadeInSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {techFeatures.map((tf, i) => (
              <FadeInSection key={i} delay={i * 100}>
                <div className="bg-secondary/40 backdrop-blur-md border-4 border-primary/20 rounded-2xl p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.3)] hover:border-primary/40 transition-all h-full">
                  <div className="w-14 h-14 rounded-xl bg-primary/20 border-2 border-primary/40 flex items-center justify-center mb-6">
                    <tf.icon size={28} className="text-primary-bright" />
                  </div>
                  <h3 className="font-black text-xl mb-3 text-white uppercase tracking-tight">{tf.title}</h3>
                  <p className="text-secondary-foreground/60 font-medium leading-relaxed">{tf.desc}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <FadeInSection>
            <div className="flex flex-col items-center text-center mb-16">
              <Badge variant="outline" className="border-2 border-foreground bg-card shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] px-4 py-1 text-sm font-bold uppercase tracking-wider mb-6">
                Support
              </Badge>
              <h2 className="text-3xl md:text-5xl font-black text-foreground mb-4 
                bg-card px-8 py-4 rounded-xl border-4 border-foreground
                shadow-[8px_8px_0px_0px_rgba(0,0,0,0.1)]">
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto font-medium mt-4">
                Everything you need to know about the Syainova platform.
              </p>
            </div>
          </FadeInSection>
          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, i) => (
              <FadeInSection key={i} delay={i * 80}>
                <details className="bg-card border-4 border-foreground rounded-2xl group shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] open:shadow-[8px_8px_0px_0px_rgba(0,0,0,0.15)] transition-all">
                  <summary className="p-8 cursor-pointer font-black text-xl list-none flex items-center justify-between hover:text-primary transition-colors text-foreground uppercase tracking-tight">
                    {faq.q}
                    <div className="w-10 h-10 rounded-lg bg-secondary border-2 border-foreground flex items-center justify-center transition-transform group-open:rotate-180">
                      <ArrowDown size={20} className="text-secondary-foreground" />
                    </div>
                  </summary>
                  <div className="px-8 pb-8 text-muted-foreground font-medium text-lg leading-relaxed border-t-2 border-foreground/10 pt-6">
                    {faq.a}
                  </div>
                </details>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-secondary text-secondary-foreground relative overflow-hidden">
        <div className="absolute inset-x-0 bottom-0 top-0 opacity-15 flex items-center justify-center pointer-events-none">
          <NodeGraphAnimation />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <FadeInSection>
            <div className="max-w-4xl mx-auto bg-secondary/40 backdrop-blur-md border-4 border-primary/20 rounded-3xl p-12 md:p-20 text-center shadow-[16px_16px_0px_0px_rgba(0,0,0,0.3)]">
              <Badge variant="outline" className="border-2 border-primary/50 bg-secondary/80 px-4 py-1 text-sm font-bold uppercase tracking-wider mb-8 text-primary-bright">
                Start Today
              </Badge>

              <h2 className="text-4xl md:text-6xl font-black text-secondary-foreground mb-8 leading-tight">
                Ready to Build Your <br />
                <span className="bg-primary text-white px-4 py-1 inline-block -rotate-1 border-3 border-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] uppercase">Startup Blueprint</span>?
              </h2>

              <p className="text-secondary-foreground/70 text-xl font-medium max-w-2xl mx-auto mb-12 leading-relaxed">
                Join thousands of innovators using AI to transform ideas into actionable startup plans.
              </p>

              <div className="flex flex-wrap justify-center gap-6">
                <Button variant="hero" size="xl" className="py-7 px-10 text-lg font-black uppercase tracking-widest shadow-[8px_8px_0px_0px_rgba(0,0,0,0.3)] border-2 border-foreground/20 hover:translate-x-1 hover:translate-y-1 transition-all" asChild>
                  <a href={DASHBOARD_URL} target="_blank" rel="noopener noreferrer">
                    Open Dashboard <ArrowRight size={24} className="ml-2" />
                  </a>
                </Button>
                <Button variant="hero-outline" size="xl" className="py-7 px-10 text-lg font-black uppercase tracking-widest bg-secondary/20 backdrop-blur-sm border-2 border-primary/30 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.3)] transition-all" asChild>
                  <a href={DASHBOARD_URL} target="_blank" rel="noopener noreferrer">
                    Start Free Trial
                  </a>
                </Button>
              </div>
              <p className="text-secondary-foreground/40 text-sm mt-10 font-bold uppercase tracking-widest">No credit card required · Free tier available</p>
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
};

export default ProductPage;
