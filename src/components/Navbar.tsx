import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Home, Zap, Cpu, Tag, Info, Mail, Rocket } from "lucide-react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { ExpandableTabs } from "@/components/ui/expandable-tabs";
import { cn } from "@/lib/utils";

const DASHBOARD_URL = "https://dashboard.syainova.com";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<number | null>(0);

  const navItems = [
    { title: "Home", href: "/#home", icon: Home },
    { title: "Features", href: "/#features", icon: Zap },
    { title: "Engine", href: "/#innovation-engine", icon: Cpu },
    { title: "Pricing", href: "/#pricing", icon: Tag },
    { title: "About", href: "/#about", icon: Info },
    { title: "Contact", href: "/#contact", icon: Mail },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Intersection Observer for active section tracking
  useEffect(() => {
    if (location.pathname !== "/") {
      setActiveTab(null);
      return;
    }

    const sections = navItems
      .filter(item => item.href.includes("#"))
      .map(item => item.href.split("#")[1]);

    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -40% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          const index = navItems.findIndex(item => item.href.endsWith(`#${id}`));
          if (index !== -1) setActiveTab(index);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [location.pathname]);

  const handleNavClick = (index: number | null) => {
    if (index === null) return;
    const item = navItems[index];
    setMobileOpen(false);

    if (item.href.startsWith("/#")) {
      const hash = item.href.split("#")[1];
      if (location.pathname === "/") {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", `#${hash}`);
      } else {
        navigate(item.href);
      }
    } else {
      navigate(item.href);
    }
    setActiveTab(index);
  };

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      scrolled ? "py-2 glass-dark shadow-xl" : "py-4 bg-transparent"
    )}>
      <div className="container mx-auto flex items-center justify-between px-4 h-16">
        <Link
          to="/"
          className="font-heading text-2xl font-bold text-secondary-foreground tracking-tight drop-shadow-sm flex items-center gap-2"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center border-2 border-foreground/20 shadow-sm">
            <Rocket size={18} className="text-white" />
          </div>
          Syainova
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:block">
          <ExpandableTabs
            tabs={navItems}
            activeTab={activeTab}
            onChange={handleNavClick}
            className={cn(
              "border-secondary-foreground/10 transition-all duration-300",
              scrolled ? "bg-secondary/40 backdrop-blur-md" : "bg-card/50 backdrop-blur-sm"
            )}
            activeColor="text-primary-bright"
          />
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <Button variant="nav" size="sm" asChild className="font-bold border-2 border-primary/30">
            <a href={DASHBOARD_URL} target="_blank" rel="noopener noreferrer">Launch Dashboard</a>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-secondary-foreground p-2 rounded-xl bg-card/40 backdrop-blur-md border-2 border-foreground/10"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden glass-dark border-t-2 border-foreground/10 px-4 pb-8 mt-2 animate-in slide-in-from-top duration-300 shadow-2xl">
          <div className="flex flex-col gap-2 mt-6">
            {navItems.map((item, idx) => (
              <button
                key={item.title}
                onClick={() => handleNavClick(idx)}
                className={cn(
                  "flex items-center gap-4 w-full text-left px-5 py-4 text-base font-bold rounded-2xl transition-all",
                  activeTab === idx
                    ? "bg-primary text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] border-2 border-foreground/20"
                    : "text-secondary-foreground/70 hover:bg-card/40 hover:text-primary-bright active:scale-95"
                )}
              >
                <item.icon size={22} />
                {item.title}
              </button>
            ))}
          </div>
          <Button variant="nav" size="lg" className="mt-8 w-full py-6 text-lg font-black uppercase tracking-widest border-3 border-foreground/20 shadow-lg" asChild>
            <a href={DASHBOARD_URL} target="_blank" rel="noopener noreferrer">Innovation Builder</a>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;