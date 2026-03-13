"use client"
import React, { useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform, animate } from 'framer-motion'
import { cn } from '@/lib/utils';

export interface PricingPlan {
    name: string;
    monthlyPrice: number;
    yearlyPrice: number;
    features: string[];
    isPopular?: boolean;
    accent: string;
    rotation?: number;
    description?: string;
    priceLabel?: string;
}

interface PricingProps {
    title?: string;
    plans: PricingPlan[];
    className?: string;
}

// Counter Component
const Counter = ({ from, to }: { from: number; to: number }) => {
    const nodeRef = useRef<HTMLSpanElement>(null);
    React.useEffect(() => {
        const node = nodeRef.current;
        if (!node) return;
        const controls = animate(from, to, {
            duration: 1,
            onUpdate(value) {
                node.textContent = value.toFixed(0);
            },
        });
        return () => controls.stop();
    }, [from, to]);
    return <span ref={nodeRef} />;
};

// Header Component
const PricingHeader = ({ title }: { title: string }) => (
    <div className="text-center mb-8 sm:mb-12 relative z-10">
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block"
        >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground 
                bg-card px-8 py-4 rounded-xl border-4 border-foreground
                shadow-[8px_8px_0px_0px_rgba(0,0,0,0.1)]
                transform transition-transform hover:translate-x-1 hover:translate-y-1 mb-3 relative">
                {title}
            </h2>
            <motion.div
                className="h-2 bg-gradient-to-r from-primary via-muted-foreground to-primary rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.5 }}
            />
        </motion.div>
    </div>
);

// Toggle Component
const PricingToggle = ({ isYearly, onToggle }: { isYearly: boolean; onToggle: () => void }) => (
    <div className="flex justify-center items-center gap-4 mb-8 relative z-10">
        <span className={`text-muted-foreground font-bold ${!isYearly ? 'text-foreground' : ''}`}>Monthly</span>
        <motion.button
            className="w-16 h-8 flex items-center bg-muted rounded-full p-1 border-2 border-foreground shadow-[2px_2px_0px_0px_rgba(0,0,0,0.1)]"
            onClick={onToggle}
        >
            <motion.div
                className="w-6 h-6 bg-card rounded-full border-2 border-foreground"
                animate={{ x: isYearly ? 32 : 0 }}
            />
        </motion.button>
        <span className={`text-muted-foreground font-bold ${isYearly ? 'text-foreground' : ''}`}>Yearly</span>
        {isYearly && (
            <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-primary font-black text-sm bg-card/80 px-2 py-0.5 rounded border border-foreground shadow-[2px_2px_0px_0px_rgba(0,0,0,0.1)]"
            >
                Save 20%
            </motion.span>
        )}
    </div>
);

// Background Effects Component
const BackgroundEffects = () => (
    <>
        <div className="absolute inset-0">
            {[...Array(30)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-foreground/5 rounded-full"
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                        y: [0, -30, 0],
                        x: [0, Math.random() * 20 - 10, 0],
                        scale: [1, 1.5, 1],
                        opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                        duration: 3 + Math.random() * 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            ))}
        </div>
        <div className="absolute inset-0" style={{
            backgroundImage: "linear-gradient(var(--foreground), transparent 1px), linear-gradient(90deg, var(--foreground), transparent 1px)",
            backgroundSize: "24px 24px",
            opacity: 0.03
        }} />
    </>
);

// Pricing Card Component
const PricingCard = ({
    plan,
    isYearly,
    index
}: {
    plan: PricingPlan;
    isYearly: boolean;
    index: number
}) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const springConfig = { damping: 15, stiffness: 150 };
    const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [7, -7]), springConfig);
    const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-7, 7]), springConfig);

    const currentPrice = isYearly ? plan.yearlyPrice : plan.monthlyPrice;
    const previousPrice = !isYearly ? plan.yearlyPrice : plan.monthlyPrice;

    const isCustom = plan.priceLabel === "Custom";

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            style={{
                rotateX,
                rotateY,
                perspective: 1000,
            }}
            onMouseMove={(e) => {
                if (!cardRef.current) return;
                const rect = cardRef.current.getBoundingClientRect();
                const centerX = rect.x + rect.width / 2;
                const centerY = rect.y + rect.height / 2;
                mouseX.set((e.clientX - centerX) / rect.width);
                mouseY.set((e.clientY - centerY) / rect.height);
            }}
            onMouseLeave={() => {
                mouseX.set(0);
                mouseY.set(0);
            }}
            className={`relative w-full bg-card rounded-xl p-8 border-3 border-foreground
                shadow-[8px_8px_0px_0px_rgba(0,0,0,0.1)]
                hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,0.15)]
                transition-all duration-200`}
        >
            {/* Price Badge */}
            <motion.div
                className={cn(
                    `absolute -top-4 -right-4 w-20 h-20 
                    rounded-full flex items-center justify-center border-4 border-foreground
                    shadow-[4px_4px_0px_0px_rgba(34,40,49,0.2)]`
                    , plan.accent)}
                animate={{
                    rotate: [0, 10, 0, -10, 0],
                    scale: [1, 1.1, 0.9, 1.1, 1],
                    y: [0, -5, 5, -3, 0]
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: [0.76, 0, 0.24, 1]
                }}
            >
                <div className="text-center text-white">
                    {isCustom ? (
                        <div className="text-sm font-black uppercase">Custom</div>
                    ) : (
                        <>
                            <div className="text-xl font-black">$
                                <Counter from={previousPrice} to={currentPrice} />
                            </div>
                            <div className="text-[10px] font-bold">/{isYearly ? 'yr' : 'mo'}</div>
                        </>
                    )}
                </div>
            </motion.div>

            {/* Plan Name and Popular Badge */}
            <div className="mb-6">
                <h3 className="text-2xl font-black text-foreground mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm font-medium mb-4">{plan.description}</p>
                {plan.isPopular && (
                    <motion.span
                        className={cn(
                            `inline-block px-3 py-1 text-white
                            font-black rounded-md text-xs border-2 border-foreground
                            shadow-[3px_3px_0px_0px_rgba(34,40,49,0.2)]`
                            , plan.accent)}
                        animate={{
                            y: [0, -3, 0],
                            scale: [1, 1.05, 1]
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity
                        }}
                    >
                        MOST POPULAR
                    </motion.span>
                )}
            </div>

            {/* Features List */}
            <div className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                    <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        whileHover={{
                            x: 5,
                            scale: 1.02,
                            transition: { type: "spring", stiffness: 400 }
                        }}
                        className={`flex items-center gap-3 p-2.5 bg-muted rounded-xl border-2 border-foreground
                            shadow-[3px_3px_0px_0px_rgba(0,0,0,0.1)]`}
                    >
                        <motion.span
                            whileHover={{ scale: 1.2, rotate: 360 }}
                            className={cn(
                                `w-6 h-6 rounded-md flex items-center justify-center
                                text-white font-bold text-sm border-2 border-foreground
                                shadow-[1px_1px_0px_0px_rgba(0,0,0,0.1)] flex-shrink-0`
                                , plan.accent)}
                        >
                            ✓
                        </motion.span>
                        <span className="text-foreground font-bold text-sm">{feature}</span>
                    </motion.div>
                ))}
            </div>

            {/* CTA Button */}
            <motion.button
                className={cn(
                    `w-full py-4 rounded-xl text-white font-black text-base
                    border-3 border-foreground shadow-[6px_6px_0px_0px_rgba(0,0,0,0.1)]
                    hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,0.15)]
                    active:shadow-[2px_2px_0px_0px_rgba(0,0,0,0.05)]
                    transition-all duration-200 uppercase tracking-wider`
                    , plan.accent)}
                whileHover={{
                    scale: 1.02,
                }}
                whileTap={{
                    scale: 0.95,
                }}
            >
                {isCustom ? "Contact US" : "Get Started"}
            </motion.button>
        </motion.div>
    );
};

// Main Container Component
export const PricingContainer = ({ title = "Pricing Plans", plans, className = "" }: PricingProps) => {
    const [isYearly, setIsYearly] = useState(false);

    return (
        <section id="pricing" className={cn("py-24 bg-surface relative overflow-hidden", className)}>
            <BackgroundEffects />
            <div className="container mx-auto px-4 relative z-10">
                <PricingHeader title={title} />
                <PricingToggle isYearly={isYearly} onToggle={() => setIsYearly(!isYearly)} />

                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                    {plans.map((plan, index) => (
                        <PricingCard
                            key={plan.name}
                            plan={plan}
                            isYearly={isYearly}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
