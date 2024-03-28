"use client";

const Noise = () => <svg className="pointer-events-none absolute isolate opacity-70 mix-blend-soft-light" width="100%" height="100%">
    <filter id="filter">
        <feTurbulence type="fractalNoise" baseFrequency="0.60" numOctaves="4" stitchTiles="stitch" />
    </filter>
    <rect width="100%" height="100%" filter="url(#filter)" />
</svg>;

export default Noise