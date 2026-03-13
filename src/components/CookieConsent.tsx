import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X } from "lucide-react";

const CookieConsent = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem("cookie-consent");
        if (!consent) {
            // Show banner after a short delay for better UX
            const timer = setTimeout(() => {
                setIsVisible(true);
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem("cookie-consent", "accepted");
        setIsVisible(false);
    };

    const handleDecline = () => {
        localStorage.setItem("cookie-consent", "declined");
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    className="fixed bottom-6 left-6 right-6 md:left-auto md:max-w-md z-[100]"
                >
                    <div className="bg-card border-4 border-foreground rounded-2xl p-6 shadow-[12px_12px_0px_0px_rgba(0,0,0,0.2)] relative overflow-hidden group">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-xl bg-primary border-2 border-foreground flex items-center justify-center flex-shrink-0 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] group-hover:rotate-12 transition-transform duration-500">
                                <Cookie size={24} className="text-white" />
                            </div>
                            <div className="flex-1">
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="font-black text-xl uppercase tracking-tight text-foreground">Cookie Policy</h3>
                                    <button
                                        onClick={() => setIsVisible(false)}
                                        className="text-muted-foreground hover:text-foreground transition-colors p-1 md:hidden"
                                    >
                                        <X size={20} />
                                    </button>
                                </div>
                                <p className="text-muted-foreground text-sm font-medium leading-relaxed mb-6">
                                    We use cookies to enhance your experience, analyze site traffic, and personalize content. By clicking "Accept", you agree to our use of cookies.
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <Button
                                        onClick={handleAccept}
                                        className="flex-1 font-black uppercase tracking-wider py-5 border-2 border-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] active:translate-y-1 active:shadow-none transition-all"
                                    >
                                        Accept
                                    </Button>
                                    <Button
                                        variant="hero-outline"
                                        onClick={handleDecline}
                                        className="flex-1 font-black uppercase tracking-wider py-5 border-2 border-primary-bright shadow-[4px_4px_0px_0px_rgba(0,0,0,0.05)] active:translate-y-1 active:shadow-none transition-all"
                                    >
                                        Decline
                                    </Button>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsVisible(false)}
                                className="hidden md:block text-muted-foreground hover:text-foreground transition-colors p-1"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        <div className="absolute top-0 right-0 -mr-4 -mt-4 w-16 h-16 bg-primary/10 rounded-full blur-2xl pointer-events-none" />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default CookieConsent;
