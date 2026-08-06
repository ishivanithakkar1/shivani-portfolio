"use client";

import { ReactNode } from "react";
import { motion } from "motion/react";

type FadeInProps = {
    children: ReactNode;
    delay?: number;
};

export function FadeIn({
    children,
    delay = 0,
}: FadeInProps) {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: 20,
            }}
            animate={{
                opacity: 1,
                y: 0,
            }}
            transition={{
                duration: 0.8,
                delay,
                ease: [0.22, 1, 0.36, 1],
            }}
        >
            {children}
        </motion.div>
    );
}