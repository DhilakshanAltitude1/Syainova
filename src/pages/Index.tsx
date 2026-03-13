import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import RotatingEarth from "@/components/ui/wireframe-dotted-globe";
import avatarSarah from "@/assets/avatar-sarah.jpg";
import avatarMarcus from "@/assets/avatar-marcus.jpg";
import avatarAisha from "@/assets/avatar-aisha.jpg";
import FadeInSection from "@/components/FadeInSection";
import heroBg from "@/assets/hero-bg.jpg";
import {
  Lightbulb, Brain, FileText, TrendingUp, BarChart3, ShieldCheck, ArrowRight, ArrowDown, Cpu,
  Target, Rocket, Check, Mail, Send, Phone, MapPin,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Feature108 } from "@/components/ui/shadcnblocks-com-feature108";
import { PricingContainer, PricingPlan } from "@/components/ui/pricing-container";

const steps = [
  { icon: Lightbulb, title: "Idea Input", desc: "Users enter a startup idea, concept, or industry problem." },
  { icon: Brain, title: "AI Innovation Engine", desc: "AI analyzes trends, technologies, and market opportunities." },
  { icon: FileText, title: "Startup Blueprint", desc: "The system generates structured product ideas, feature frameworks, and business models." },
];

const features = [
  { icon: Brain, title: "AI Startup Idea Generator", desc: "Generate validated startup concepts from raw ideas." },
  { icon: FileText, title: "Product Roadmap Builder", desc: "Build structured development roadmaps automatically." },
  { icon: BarChart3, title: "Business Model Generator", desc: "Create comprehensive business model frameworks." },
  { icon: TrendingUp, title: "Market Opportunity Analyzer", desc: "Discover trends and market signals with AI." },
  { icon: Lightbulb, title: "Innovation Dashboard", desc: "Command center for your innovation pipeline." },
  { icon: ShieldCheck, title: "Startup Concept Validator", desc: "Validate and stress-test your startup concepts." },
];

const pipelineSteps = [
  { label: "Idea Input", desc: "Raw concept, industry problem, or technology trend." },
  { label: "AI Trend Analysis", desc: "Cross-references emerging trends, technologies, and markets." },
  { label: "Market Signal Processing", desc: "Identifies demand signals and competitive landscape." },
  { label: "Product Idea Generation", desc: "Generates structured product concepts and features." },
  { label: "Business Model Structuring", desc: "Creates revenue models, go-to-market strategies." },
  { label: "Startup Blueprint Output", desc: "Delivers complete startup blueprint with roadmap." },
];




const aboutSections = [
  { icon: Target, title: "Our Mission", text: "Empowering innovators with AI-powered idea development. We believe every great startup begins with a structured idea—and AI can help you get there faster." },
  { icon: Lightbulb, title: "Why Innovation Needs Structure", text: "Inspiration alone isn't enough. Turning creative ideas into viable businesses requires structured frameworks, market analysis, and clear roadmaps." },
  { icon: Rocket, title: "Our Vision", text: "Building the future of AI-assisted startup creation. We envision a world where every entrepreneur has access to the same caliber of innovation tools." },
];

const DASHBOARD_URL = "https://dashboard.syainova.com";

const Index = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message! We'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div>
      <section id="home" className="relative text-secondary-foreground overflow-hidden min-h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-secondary/85" />
        </div>
        <div className="absolute inset-x-0 bottom-0 top-0 opacity-30 flex items-center justify-center lg:justify-end lg:-mr-48 overflow-hidden pointer-events-none">
          <RotatingEarth width={1000} height={1000} className="scale-150 lg:scale-110" />
        </div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <FadeInSection>
            <div className="max-w-4xl">
              <div className="flex flex-col items-start gap-6">
                <Badge variant="outline" className="border-2 border-primary/50 bg-secondary/50 backdrop-blur-md shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] px-4 py-1 text-sm font-bold uppercase tracking-wider text-secondary-foreground">
                  AI-Powered Innovation Platform
                </Badge>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] mb-4 text-secondary-foreground
                  bg-secondary/40 backdrop-blur-sm px-8 py-6 rounded-2xl border-4 border-primary/30
                  shadow-[12px_12px_0px_0px_rgba(0,0,0,0.2)] inline-block">
                  The First <span className="text-primary-bright glow-text">GPU-Accelerated</span> <br className="hidden md:block" /> AI Innovation Builder
                </h1>

                <p className="text-lg md:text-xl text-secondary-foreground/80 font-medium mb-10 max-w-2xl leading-relaxed">
                  Syainova transforms early-stage ideas into structured startup concepts using artificial intelligence and innovation frameworks.
                </p>

                <div className="flex flex-wrap gap-6">
                  <Button variant="hero" size="xl" className="py-7 px-8 text-base font-black uppercase tracking-widest shadow-[6px_6px_0px_0px_rgba(0,0,0,0.3)] border-2 border-foreground/20" asChild>
                    <Link to="/product">Explore Platform <ArrowRight size={20} className="ml-2" /></Link>
                  </Button>
                  <Button variant="hero-outline" size="xl" className="py-7 px-8 text-base font-black uppercase tracking-widest bg-secondary/20 backdrop-blur-sm border-2 border-primary/30 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.3)] transition-all" asChild>
                    <a href="#features">See Features</a>
                  </Button>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-5" style={{
          backgroundImage: "linear-gradient(90deg, var(--foreground) 1px, transparent 1px), linear-gradient(var(--foreground) 1px, transparent 1px)",
          backgroundSize: "40px 40px"
        }} />
        <div className="container mx-auto px-4 relative z-10">
          <FadeInSection>
            <div className="flex flex-col items-center text-center mb-16">
              <Badge variant="outline" className="border-2 border-foreground bg-card shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] px-4 py-1 text-sm font-bold uppercase tracking-wider mb-6">
                Process
              </Badge>
              <h2 className="text-3xl md:text-5xl font-black text-foreground mb-4 
                bg-card px-8 py-4 rounded-xl border-4 border-foreground
                shadow-[8px_8px_0px_0px_rgba(0,0,0,0.1)]">
                Innovation Pipeline
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto font-medium mt-4">Three steps from raw idea to structured startup blueprint.</p>
            </div>
          </FadeInSection>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {steps.map((step, i) => (
              <FadeInSection key={i} delay={i * 150}>
                <div className="bg-card border-4 border-foreground rounded-2xl p-8 text-center shadow-[10px_10px_0px_0px_rgba(0,0,0,0.1)] hover:shadow-[14px_14px_0px_0px_rgba(0,0,0,0.15)] transition-all h-full flex flex-col items-center">
                  <div className="w-20 h-20 rounded-2xl bg-primary border-3 border-foreground flex items-center justify-center mb-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,0.2)]">
                    <step.icon size={36} className="text-white" />
                  </div>
                  <div className="inline-block px-3 py-1 bg-secondary-foreground rounded-lg border-2 border-foreground mb-4">
                    <div className="text-xs font-black tracking-widest uppercase text-white">Step {i + 1}</div>
                  </div>
                  <h3 className="text-2xl font-black mb-4 text-foreground uppercase tracking-tight">{step.title}</h3>
                  <p className="text-muted-foreground font-medium leading-relaxed">{step.desc}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <Feature108
        badge="Core Features"
        heading="Everything You Need to Build"
        description="Go from raw idea to structured startup concept with our integrated toolset."
        showButton={false}
        tabs={[
          {
            value: "idea-gen",
            icon: <Brain className="h-auto w-4 shrink-0" />,
            label: "Idea Generator",
            content: {
              badge: "Creation",
              title: "AI Startup Idea Generator",
              description: "Generate validated startup concepts from raw ideas using multi-dimensional analysis.",
              buttonText: "",
              imageSrc: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
              imageAlt: "Idea Generation",
            },
          },
          {
            value: "roadmap",
            icon: <FileText className="h-auto w-4 shrink-0" />,
            label: "Roadmap Builder",
            content: {
              badge: "Strategy",
              title: "Product Roadmap Builder",
              description: "Build structured development roadmaps automatically from your project blueprints.",
              buttonText: "",
              imageSrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
              imageAlt: "Roadmap Building",
            },
          },
          {
            value: "business",
            icon: <BarChart3 className="h-auto w-4 shrink-0" />,
            label: "Model Generator",
            content: {
              badge: "Monetization",
              title: "Business Model Generator",
              description: "Create comprehensive business model frameworks centered on real-world demand.",
              buttonText: "",
              imageSrc: "https://images.unsplash.com/photo-1551288049-bbdac8626ad1?auto=format&fit=crop&q=80&w=800",
              imageAlt: "Business Modeling",
            },
          },
          {
            value: "market",
            icon: <TrendingUp className="h-auto w-4 shrink-0" />,
            label: "Market Analyzer",
            content: {
              badge: "Intelligence",
              title: "Market Opportunity Analyzer",
              description: "Discover trends and market signals with AI to validate your concepts.",
              buttonText: "",
              imageSrc: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
              imageAlt: "Market Analysis",
            },
          },
          {
            value: "dashboard",
            icon: <Lightbulb className="h-auto w-4 shrink-0" />,
            label: "Innovation Dashboard",
            content: {
              badge: "Control",
              title: "Innovation Dashboard",
              description: "Command center for your innovation pipeline, tracking every concept from start to finish.",
              buttonText: "",
              imageSrc: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
              imageAlt: "Dashboard View",
            },
          },
          {
            value: "validator",
            icon: <ShieldCheck className="h-auto w-4 shrink-0" />,
            label: "Concept Validator",
            content: {
              badge: "Validation",
              title: "Startup Concept Validator",
              description: "Validate and stress-test your startup concepts before committing resources.",
              buttonText: "",
              imageSrc: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
              imageAlt: "Concept Validation",
            },
          },
        ]}
      />

      {/* Innovation Engine */}
      <section id="innovation-engine" className="py-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-20" style={{
          backgroundImage: "radial-gradient(circle at 2px 2px, var(--foreground) 1px, transparent 0)",
          backgroundSize: "40px 40px"
        }} />

        <div className="container mx-auto px-4 relative z-10">
          <FadeInSection>
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center"
              >
                <Badge variant="outline" className="border-2 border-foreground bg-card shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] px-4 py-1 text-sm font-bold uppercase tracking-wider mb-6">
                  Architecture
                </Badge>
                <h2 className="text-3xl md:text-5xl font-black text-foreground mb-4 
                  bg-card px-8 py-4 rounded-xl border-4 border-foreground
                  shadow-[8px_8px_0px_0px_rgba(0,0,0,0.1)]">
                  Innovation Engine
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto font-medium mt-4">
                  A multi-stage AI pipeline that transforms raw ideas into structured startup blueprints.
                </p>
              </motion.div>
            </div>
          </FadeInSection>

          <div className="max-w-3xl mx-auto space-y-6">
            {pipelineSteps.map((step, i) => (
              <div key={i} className="relative">
                {i < pipelineSteps.length - 1 && (
                  <div className="absolute left-6 top-16 bottom-0 w-1 border-r-4 border-dotted border-foreground flex items-center justify-center z-0 opacity-20" />
                )}
                <FadeInSection delay={i * 100}>
                  <motion.div
                    whileHover={{ x: 10 }}
                    className="bg-card border-4 border-foreground rounded-2xl p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,0.15)] transition-all relative z-10"
                  >
                    <div className="flex items-start gap-6">
                      <div className="w-12 h-12 rounded-xl bg-primary border-3 border-foreground flex items-center justify-center flex-shrink-0 text-white font-black text-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]">
                        {i + 1}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-black text-xl mb-2 text-foreground uppercase tracking-tight">{step.label}</h3>
                        <p className="text-muted-foreground font-medium">{step.desc}</p>
                      </div>
                      <div className="hidden sm:block opacity-20">
                        <ArrowRight size={24} className="text-foreground rotate-45" />
                      </div>
                    </div>
                  </motion.div>
                </FadeInSection>
              </div>
            ))}

            <FadeInSection>
              <div className="mt-16 bg-secondary rounded-2xl p-8 text-center border-4 border-foreground shadow-[10px_10px_0px_0px_rgba(0,0,0,0.3)]">
                <div className="flex items-center justify-center gap-4 font-black text-xl uppercase tracking-[0.2em] text-primary-bright">
                  <Cpu size={32} className="animate-pulse text-primary-bright" />
                  <span className="glow-text">GPU-Accelerated AI Architecture</span>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <PricingContainer
        title="Pricing"
        plans={[
          {
            name: "Starter",
            monthlyPrice: 0,
            yearlyPrice: 0,
            description: "Get started with basic innovation tools.",
            features: ["Free idea generation", "Basic innovation insights", "Limited idea processing"],
            isPopular: false,
            accent: "bg-sage-600",
            priceLabel: "Free"
          },
          {
            name: "Pro",
            monthlyPrice: 49,
            yearlyPrice: 490,
            description: "Full access to the innovation engine.",
            features: ["Full innovation engine", "Product roadmap generator", "Market opportunity analysis", "Startup blueprint builder"],
            isPopular: true,
            accent: "bg-primary"
          },
          {
            name: "Enterprise",
            monthlyPrice: 0,
            yearlyPrice: 0,
            description: "Team workspaces and advanced analytics.",
            features: ["Team innovation workspace", "Advanced analytics", "Enterprise startup labs", "API integration"],
            isPopular: false,
            accent: "bg-secondary-foreground",
            priceLabel: "Custom"
          }
        ]}
      />

      {/* Testimonials */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-5" style={{
          backgroundImage: "linear-gradient(45deg, var(--foreground) 1px, transparent 1px), linear-gradient(-45deg, var(--foreground) 1px, transparent 1px)",
          backgroundSize: "20px 20px"
        }} />
        <div className="container mx-auto px-4 relative z-10">
          <FadeInSection>
            <div className="flex flex-col items-center text-center mb-16">
              <Badge variant="outline" className="border-2 border-foreground bg-card shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] px-4 py-1 text-sm font-bold uppercase tracking-wider mb-6">
                Testimonials
              </Badge>
              <h2 className="text-3xl md:text-5xl font-black text-foreground mb-4 
                bg-card px-8 py-4 rounded-xl border-4 border-foreground
                shadow-[8px_8px_0px_0px_rgba(0,0,0,0.1)]">
                What Innovators Say
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto font-medium mt-4">Trusted by founders and product builders worldwide.</p>
            </div>
          </FadeInSection>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { name: "Sarah Chen", role: "Founder, TechLaunch", quote: "Syainova turned my rough concept into a complete startup blueprint in under an hour. The AI analysis was spot-on.", avatar: avatarSarah },
              { name: "Marcus Rivera", role: "Product Lead, InnoVault", quote: "The innovation engine identified market opportunities we hadn't even considered. Game-changing for our product strategy.", avatar: avatarMarcus },
              { name: "Aisha Patel", role: "CEO, NexGen Labs", quote: "We replaced weeks of manual research with Syainova's AI pipeline. Our team ships ideas 10x faster now.", avatar: avatarAisha },
            ].map((t, i) => (
              <FadeInSection key={i} delay={i * 150}>
                <div className="bg-card border-4 border-foreground rounded-2xl p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,0.15)] transition-all h-full flex flex-col">
                  <div className="text-primary text-4xl font-black mb-4">"</div>
                  <p className="text-muted-foreground font-medium leading-relaxed flex-1 mb-8 italic">
                    {t.quote}
                  </p>
                  <div className="flex items-center gap-4 mt-auto">
                    <img src={t.avatar} alt={t.name} className="w-14 h-14 rounded-full object-cover border-3 border-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)]" />
                    <div>
                      <div className="font-black text-foreground text-sm uppercase tracking-tight">{t.name}</div>
                      <div className="text-xs font-bold text-primary uppercase">{t.role}</div>
                    </div>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 bg-surface relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-10" style={{
          backgroundImage: "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
          backgroundSize: "60px 60px"
        }} />
        <div className="container mx-auto px-4 relative z-10">
          <FadeInSection>
            <div className="flex flex-col items-center text-center mb-16">
              <Badge variant="outline" className="border-2 border-foreground bg-card shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] px-4 py-1 text-sm font-bold uppercase tracking-wider mb-6">
                Our Story
              </Badge>
              <h2 className="text-3xl md:text-5xl font-black text-foreground mb-4 
                bg-card px-8 py-4 rounded-xl border-4 border-foreground
                shadow-[8px_8px_0px_0px_rgba(0,0,0,0.1)]">
                About Syainova
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto font-medium mt-4">The AI innovation platform transforming how startups are built.</p>
            </div>
          </FadeInSection>
          <div className="max-w-4xl mx-auto space-y-8">
            {aboutSections.map((s, i) => (
              <FadeInSection key={i} delay={i * 150}>
                <div className="bg-card border-4 border-foreground rounded-2xl p-10 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,0.15)] transition-all flex flex-col md:flex-row items-start gap-8">
                  <div className="w-16 h-16 rounded-2xl bg-primary border-3 border-foreground flex items-center justify-center flex-shrink-0 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]">
                    <s.icon size={32} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-foreground uppercase tracking-tight mb-4">{s.title}</h3>
                    <p className="text-muted-foreground font-medium leading-relaxed text-lg">{s.text}</p>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-5" style={{
          backgroundImage: "radial-gradient(circle at 2px 2px, var(--foreground) 1px, transparent 0)",
          backgroundSize: "30px 30px"
        }} />
        <div className="container mx-auto px-4 relative z-10">
          <FadeInSection>
            <div className="flex flex-col items-center text-center mb-16">
              <Badge variant="outline" className="border-2 border-foreground bg-card shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] px-4 py-1 text-sm font-bold uppercase tracking-wider mb-6">
                Get in Touch
              </Badge>
              <h2 className="text-3xl md:text-5xl font-black text-foreground mb-4 
                bg-card px-8 py-4 rounded-xl border-4 border-foreground
                shadow-[8px_8px_0px_0px_rgba(0,0,0,0.1)]">
                Contact Us
              </h2>
              <p className="text-muted-foreground max-w-lg mx-auto font-medium mt-4">We'd love to hear from you. Get in touch with our team.</p>
            </div>
          </FadeInSection>

          <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* Contact Info & Map */}
            <FadeInSection delay={100}>
              <div className="space-y-8 h-full">
                <div className="bg-card border-4 border-foreground rounded-2xl p-10 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.1)] space-y-8">
                  <h3 className="text-2xl font-black text-foreground uppercase tracking-tight mb-8">Contact Information</h3>

                  <div className="space-y-6">
                    <div className="flex items-center gap-6 group">
                      <div className="w-16 h-16 rounded-2xl bg-primary border-3 border-foreground flex items-center justify-center flex-shrink-0 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] group-hover:bg-primary/90 transition-colors">
                        <Phone size={28} className="text-white" />
                      </div>
                      <div>
                        <div className="font-black text-foreground uppercase text-sm tracking-widest">Phone</div>
                        <p className="text-muted-foreground font-bold text-lg">+1 (555) 123-4567</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-6 group">
                      <div className="w-16 h-16 rounded-2xl bg-secondary-foreground border-3 border-foreground flex items-center justify-center flex-shrink-0 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] group-hover:bg-secondary-foreground/90 transition-colors">
                        <Mail size={28} className="text-white" />
                      </div>
                      <div>
                        <div className="font-black text-foreground uppercase text-sm tracking-widest">Email</div>
                        <a href="mailto:support@syainova.com" className="text-muted-foreground font-bold text-lg hover:text-primary transition-colors">support@syainova.com</a>
                      </div>
                    </div>

                    <div className="flex items-center gap-6 group">
                      <div className="w-16 h-16 rounded-2xl bg-primary/20 border-3 border-foreground flex items-center justify-center flex-shrink-0 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] group-hover:bg-primary/30 transition-colors">
                        <MapPin size={28} className="text-primary" />
                      </div>
                      <div>
                        <div className="font-black text-foreground uppercase text-sm tracking-widest">Location</div>
                        <p className="text-muted-foreground font-bold text-lg">123 Innovation Drive, Tech City, ST 12345</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map Integration */}
                <div className="bg-card border-4 border-foreground rounded-2xl overflow-hidden h-[350px] relative shadow-[8px_8px_0px_0px_rgba(0,0,0,0.1)]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100939.27302484435!2d-122.507640204439!3d37.75781499660972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1710321234567!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Syainova Office Location"
                    className="opacity-70 grayscale hover:grayscale-0 transition-all duration-500"
                  ></iframe>
                </div>
              </div>
            </FadeInSection>

            {/* Contact Form */}
            <FadeInSection delay={200}>
              <div className="bg-card border-4 border-foreground rounded-2xl p-10 h-full shadow-[10px_10px_0px_0px_rgba(0,0,0,0.1)]">
                <h3 className="text-3xl font-black text-foreground uppercase tracking-tight mb-8">Send us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-black uppercase tracking-widest mb-2">Name</label>
                    <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-5 py-4 rounded-xl border-3 border-foreground bg-background text-foreground text-base focus:outline-none focus:ring-4 focus:ring-primary/20 transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,0.05)]"
                      placeholder="Your Name" />
                  </div>
                  <div>
                    <label className="block text-sm font-black uppercase tracking-widest mb-2">Email</label>
                    <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-5 py-4 rounded-xl border-3 border-foreground bg-background text-foreground text-base focus:outline-none focus:ring-4 focus:ring-primary/20 transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,0.05)]"
                      placeholder="your.email@example.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-black uppercase tracking-widest mb-2">Message</label>
                    <textarea required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-5 py-4 rounded-xl border-3 border-foreground bg-background text-foreground text-base focus:outline-none focus:ring-4 focus:ring-primary/20 resize-none transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,0.05)]"
                      placeholder="How can we help you?" />
                  </div>
                  <Button variant="hero" size="xl" className="w-full py-8 text-lg font-black uppercase tracking-widest shadow-[6px_6px_0px_0px_rgba(0,0,0,0.2)] border-3 border-foreground" type="submit">
                    Send Message <Send size={20} className="ml-3" />
                  </Button>
                </form>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      <section className="py-24 bg-secondary text-secondary-foreground relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <FadeInSection>
            <div className="max-w-4xl mx-auto bg-secondary/40 backdrop-blur-md border-4 border-primary/20 rounded-3xl p-10 md:p-16 text-center shadow-[16px_16px_0px_0px_rgba(0,0,0,0.3)]">
              <Badge variant="outline" className="border-2 border-primary/50 bg-secondary/80 px-4 py-1 text-sm font-bold uppercase tracking-wider mb-8 text-primary-bright">
                Final Call
              </Badge>

              <h2 className="text-3xl md:text-5xl font-black text-secondary-foreground mb-8 leading-tight">
                Ready to Build Your <br />
                <span className="bg-primary text-white px-4 py-1 inline-block -rotate-1 border-3 border-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]">Next Big Idea?</span>
              </h2>

              <p className="text-secondary-foreground/70 text-lg md:text-xl font-medium max-w-xl mx-auto mb-12 leading-relaxed">
                Join innovators using Syainova to transform concepts into actionable startup blueprints.
              </p>

              <Button variant="hero" size="xl" className="py-7 px-10 text-lg font-black uppercase tracking-widest shadow-[8px_8px_0px_0px_rgba(0,0,0,0.3)] border-2 border-foreground/20 hover:translate-x-1 hover:translate-y-1 transition-all" asChild>
                <a href={DASHBOARD_URL} target="_blank" rel="noopener noreferrer">
                  Start Building Now <ArrowRight size={24} className="ml-2" />
                </a>
              </Button>
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
};

export default Index;
