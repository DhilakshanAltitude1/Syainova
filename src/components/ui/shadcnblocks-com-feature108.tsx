import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Layout, Pointer, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface TabContent {
    badge: string;
    title: string;
    description: string;
    buttonText: string;
    imageSrc: string;
    imageAlt: string;
}

interface Tab {
    value: string;
    icon: React.ReactNode;
    label: string;
    content: TabContent;
}

interface Feature108Props {
    badge?: string;
    heading?: string;
    description?: string;
    tabs?: Tab[];
    showButton?: boolean;
}

const BackgroundEffects = () => (
    <>
        <div className="absolute inset-0 pointer-events-none">
            {[...Array(20)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-foreground/5 rounded-full"
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                        y: [0, -20, 0],
                        opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{
                        duration: 4 + Math.random() * 2,
                        repeat: Infinity,
                    }}
                />
            ))}
        </div>
        <div className="absolute inset-0 pointer-events-none" style={{
            backgroundImage: "linear-gradient(var(--foreground), transparent 1px), linear-gradient(90deg, var(--foreground), transparent 1px)",
            backgroundSize: "32px 32px",
            opacity: 0.02
        }} />
    </>
);

const Feature108 = ({
    badge = "Features",
    heading = "Powerful Innovation Tools",
    description = "Everything you need to turn ideas into reality.",
    showButton = false,
    tabs = [],
}: Feature108Props) => {
    return (
        <section id="features" className="py-24 bg-surface relative overflow-hidden">
            <BackgroundEffects />
            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col items-center gap-4 text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center"
                    >
                        <Badge variant="outline" className="border-2 border-foreground bg-card shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] px-4 py-1 text-sm font-bold uppercase tracking-wider mb-6">
                            {badge}
                        </Badge>
                        <h2 className="text-3xl md:text-5xl font-black text-foreground mb-4 
                            bg-card px-8 py-4 rounded-xl border-4 border-foreground
                            shadow-[8px_8px_0px_0px_rgba(0,0,0,0.1)]">
                            {heading}
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto font-medium">
                            {description}
                        </p>
                    </motion.div>
                </div>

                <Tabs defaultValue={tabs?.[0]?.value} className="w-full">
                    <TabsList className="flex flex-wrap items-center justify-center gap-3 h-auto bg-transparent mb-12">
                        {tabs?.map((tab) => (
                            <TabsTrigger
                                key={tab.value}
                                value={tab.value}
                                className="group flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-bold border-2 border-foreground/10
                                    bg-transparent hover:bg-card hover:border-foreground/50
                                    data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:border-foreground data-[state=active]:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)]
                                    transition-all duration-200"
                            >
                                <span className="opacity-70 group-data-[state=active]:opacity-100">{tab.icon}</span>
                                {tab.label}
                            </TabsTrigger>
                        ))}
                    </TabsList>

                    <div className="max-w-6xl mx-auto">
                        {tabs?.map((tab) => (
                            <TabsContent
                                key={tab.value}
                                value={tab.value}
                                className="bg-card rounded-2xl p-8 lg:p-16 border-4 border-foreground shadow-[12px_12px_0px_0px_rgba(0,0,0,0.1)]
                                    grid place-items-center gap-12 lg:grid-cols-2 lg:gap-16 focus-visible:outline-none 
                                    data-[state=inactive]:hidden"
                            >
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className="flex flex-col gap-6"
                                >
                                    <Badge variant="outline" className="w-fit border-2 border-foreground bg-primary/10 px-3 py-1 font-black text-xs uppercase tracking-widest text-primary">
                                        {tab.content.badge}
                                    </Badge>
                                    <h3 className="text-3xl font-black lg:text-5xl leading-tight">
                                        {tab.content.title}
                                    </h3>
                                    <p className="text-muted-foreground lg:text-lg font-medium leading-relaxed">
                                        {tab.content.description}
                                    </p>
                                    {showButton && (
                                        <Button className="mt-4 w-fit py-6 px-8 rounded-xl border-3 border-foreground shadow-[6px_6px_0px_0px_rgba(0,0,0,0.1)] font-black uppercase tracking-wider" variant="hero">
                                            {tab.content.buttonText}
                                        </Button>
                                    )}
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="relative group w-full"
                                >
                                    <div className="absolute -inset-4 bg-primary/20 rounded-2xl blur-2xl group-hover:bg-primary/30 transition-all duration-500 opacity-0 group-hover:opacity-100" />
                                    <img
                                        src={tab.content.imageSrc}
                                        alt={tab.content.imageAlt}
                                        className="relative rounded-2xl w-full border-4 border-foreground shadow-[8px_8px_0px_0px_rgba(0,0,0,0.1)] grayscale hover:grayscale-0 transition-all duration-500"
                                    />
                                </motion.div>
                            </TabsContent>
                        ))}
                    </div>
                </Tabs>
            </div>
        </section>
    );
};

export { Feature108 };
