"use client";

import { motion } from "framer-motion"

const Draggable = ({
    children,
    label,
    dragConstraints
}: Readonly<{
    children: React.ReactNode;
    label: string | null,
    dragConstraints: any;
}>) =>
    <motion.div
        drag
        whileHover={{
            scale: 1.025,
        }}
        whileDrag={{
            scale: 1.05,
            rotate: -3,
            z: 20
        }}
        dragMomentum={false}
        className="group relative inline-block before:invisible hover:before:visible before:pointer-events-none before:absolute before:-inset-[0.55rem] before:border before:border-orange-500"
        dragConstraints={dragConstraints}
    >
        <div className="absolute invisible group-hover:visible -top-7 -left-2 text-xs text-neutral-200 tracking-wide">{label}</div>
        <div className="relative before:invisible after:invisible group-hover:before:visible group-hover:after:visible group-hover:before:absolute before:-left-3 before:-top-3 before:w-2 before:h-2 before:bg-white before:ring-1 before:ring-neutral-400 before:z-10 after:absolute after:-right-3 after:-top-3 after:w-2 after:h-2 after:bg-white after:ring-1 after:ring-neutral-400 after:z-10">
            <div className="relative before:invisible after:invisible group-hover:before:visible group-hover:after:visible before:absolute before:-left-3 before:-bottom-3 before:w-2 before:h-2 before:bg-white before:ring-1 before:ring-neutral-400 before:z-10 after:absolute after:-right-3 after:-bottom-3 after:w-2 after:h-2 after:bg-white after:ring-1 after:ring-neutral-400 after:z-10">
                {children}
            </div>
        </div>
    </motion.div>

export default Draggable