import { Mail } from "lucide-react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const DASHBOARD_URL = "https://dashboard.syainova.com";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLinkClick = (href: string) => {
    if (href.startsWith("/#")) {
      const hash = href.split("#")[1];
      if (location.pathname === "/") {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", `#${hash}`);
      } else {
        navigate(href);
      }
    } else {
      navigate(href);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-secondary text-secondary-foreground border-t-4 border-foreground/10">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <Link to="/" className="font-heading text-3xl font-black mb-6 inline-block uppercase tracking-tighter">
              Syainova
            </Link>
            <p className="text-secondary-foreground/70 text-lg font-medium max-w-xs mb-8 leading-relaxed">
              AI-powered innovation platform transforming ideas into structured startup blueprints.
            </p>
            <div className="flex items-center gap-3 text-sm font-bold text-primary-bright">
              <div className="w-8 h-8 rounded-lg bg-primary/10 border-2 border-primary/20 flex items-center justify-center">
                <Mail size={16} />
              </div>
              <a href="mailto:support@syainova.com" className="hover:underline transition-all">support@syainova.com</a>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-black mb-6 text-primary uppercase tracking-widest text-sm">Navigation</h4>
            <ul className="space-y-4 text-base font-bold text-secondary-foreground/70">
              {[
                { label: "Home", href: "/#home" },
                { label: "Features", href: "/#features" },
                { label: "Innovation Engine", href: "/#innovation-engine" },
                { label: "Pricing", href: "/#pricing" },
              ].map((l) => (
                <li key={l.label}>
                  <button
                    onClick={() => handleLinkClick(l.href)}
                    className="hover:text-primary-bright transition-all transform hover:translate-x-1 inline-block"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-black mb-6 text-primary uppercase tracking-widest text-sm">Platform</h4>
            <ul className="space-y-4 text-base font-bold text-secondary-foreground/70">
              <li><button onClick={() => handleLinkClick("/#contact")} className="hover:text-primary-bright transition-all inline-block hover:translate-x-1 transform transition-transform">Contact Us</button></li>
              <li><button onClick={() => handleLinkClick("/#about")} className="hover:text-primary-bright transition-all inline-block hover:translate-x-1 transform transition-transform">Our Story</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-black mb-6 text-primary uppercase tracking-widest text-sm">Newsletter</h4>
            <p className="text-sm font-medium text-secondary-foreground/60 mb-6 font-medium">Join 2,000+ innovators getting weekly startup insights.</p>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="founder@syainova.com"
                className="w-full px-4 py-3 rounded-xl bg-card/20 border-2 border-foreground/20 text-sm font-bold text-white placeholder:text-white/20 focus:outline-none focus:border-primary transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)]"
              />
              <Button className="w-full font-black uppercase tracking-widest shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)]">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t-2 border-foreground/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-xs font-bold uppercase tracking-widest text-secondary-foreground/40">
          <p>© 2026 Syainova Innovation Lab. All rights reserved.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <span className="hover:text-white cursor-pointer transition-colors">Privacy</span>
            <span className="hover:text-white cursor-pointer transition-colors">Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;