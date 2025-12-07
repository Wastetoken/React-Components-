
export interface ComponentDoc {
  id: string;
  name: string;
  description: string;
  dependencies: string[];
  componentCode: string;
  demoCode: string;
  usage?: string;
}

export const COMPONENT_DOCS: Record<string, ComponentDoc> = {
  "horizon-hero": {
    id: "horizon-hero",
    name: "Horizon Hero",
    description: "A comprehensive scrollytelling section with 3D starfield, mountains, and camera animations.",
    dependencies: ["three", "gsap", "@types/three", "clsx", "tailwind-merge"],
    componentCode: `// See components/ui/horizon-hero-section.tsx for full code`,
    demoCode: `import { HorizonHero } from "@/components/ui/horizon-hero-section";\n\nexport function Demo() {\n  return <HorizonHero />;\n}`
  },
  "hero-section-stackpilot": {
    id: "hero-section-stackpilot",
    name: "StackPilot Hero",
    description: "Modern SaaS hero with animated words and floating elements.",
    dependencies: ["clsx", "tailwind-merge"],
    componentCode: `// See components/ui/hero-section.tsx`,
    demoCode: `import { Component } from "@/components/ui/hero-section";\n\nexport function Demo() {\n  return <Component />;\n}`
  },
  "mil-hardware": {
    id: "mil-hardware",
    name: "Military Hardware",
    description: "Interactive dashboard with functional knobs and radar.",
    dependencies: ["clsx", "tailwind-merge"],
    componentCode: `// See components/ui/mil-hardware.tsx`,
    demoCode: `import MilHardware from "@/components/ui/mil-hardware";\n\nexport function Demo() {\n  return <MilHardware />;\n}`
  },
  "bloodlines": {
    id: "bloodlines",
    name: "Bloodlines Shader",
    description: "Organic fluid WebGL shader.",
    dependencies: ["react"],
    componentCode: `// See components/ui/bloodlines.tsx`,
    demoCode: `import Bloodlines from "@/components/ui/bloodlines";\n\nexport function Demo() {\n  return <Bloodlines />;\n}`
  },
  "liquid-chrome": {
    id: "liquid-chrome",
    name: "Liquid Chrome",
    description: "Metallic fluid simulation.",
    dependencies: ["react"],
    componentCode: `// See components/ui/liquid-chrome.tsx`,
    demoCode: `import LiquidChrome from "@/components/ui/liquid-chrome";\n\nexport function Demo() {\n  return <LiquidChrome />;\n}`
  },
  "waves": {
    id: "waves",
    name: "Waves Shader",
    description: "Wave distortion shader.",
    dependencies: ["react"],
    componentCode: `// See components/ui/waves.tsx`,
    demoCode: `import Waves from "@/components/ui/waves";\n\nexport function Demo() {\n  return <Waves />;\n}`
  },
  "flyby-scroll": {
    id: "flyby-scroll",
    name: "Flyby Scroll",
    description: "Spline 3D iframe embed.",
    dependencies: ["clsx", "tailwind-merge"],
    componentCode: `// See components/ui/flyby-scroll.tsx`,
    demoCode: `import { Component } from "@/components/ui/flyby-scroll";\n\nexport function Demo() {\n  return <Component />;\n}`
  },
  "sneak-hover": {
    id: "sneak-hover",
    name: "Sneak Hover",
    description: "3D Text reveal on hover.",
    dependencies: ["three", "@types/three"],
    componentCode: `// See components/ui/sneak-hover.tsx`,
    demoCode: `import { Component } from "@/components/ui/sneak-hover";\n\nexport function Demo() {\n  return <Component />;\n}`
  },
  "wavy-text-block": {
    id: "wavy-text-block",
    name: "Wavy Text Block",
    description: "Scroll-driven text wave animation.",
    dependencies: ["motion", "clsx", "tailwind-merge"],
    componentCode: `// See components/ui/wavy-text-block.tsx`,
    demoCode: `import { WavyBlock, WavyBlockItem } from "@/components/ui/wavy-text-block";\n\nexport function Demo() {\n  return (\n    <WavyBlock className="flex flex-col gap-4 items-center">\n      <WavyBlockItem index={0} className="text-4xl font-bold">Hello</WavyBlockItem>\n      <WavyBlockItem index={1} className="text-4xl font-bold">World</WavyBlockItem>\n    </WavyBlock>\n  );\n}`
  },
  "image-trail": {
    id: "image-trail",
    name: "Image Trail Effect",
    description: "Cursor movement spawns image trail.",
    dependencies: ["gsap"],
    componentCode: `// See components/ui/image-trail-effect.tsx`,
    demoCode: `import TrailWrapper from "@/components/ui/image-trail-effect";\n\nexport function Demo() {\n  return (\n    <TrailWrapper images={['/img1.jpg', '/img2.jpg']}>\n      <h1>Hover Me</h1>\n    </TrailWrapper>\n  );\n}`
  },
  "menu-animations": {
    id: "menu-animations",
    name: "Menu Animations",
    description: "Micro-interactions for menu icons.",
    dependencies: ["gsap"],
    componentCode: `// See components/ui/menu-animations.tsx`,
    demoCode: `import { MenuAnimation } from "@/components/ui/menu-animations";\n\nexport function Demo() {\n  return <MenuAnimation title="Dots" animationId="dots-grid" />;\n}`
  },
  "velocity-text": {
    id: "velocity-text",
    name: "Velocity Text",
    description: "Scroll speed controlled text skew.",
    dependencies: ["motion"],
    componentCode: `// See components/ui/parallax-scrolling-text-effect.tsx`,
    demoCode: `import { VelocityText } from "@/components/ui/parallax-scrolling-text-effect";\n\nexport function Demo() {\n  return <VelocityText />;\n}`
  },
  "svg-follow-scroll": {
    id: "svg-follow-scroll",
    name: "SVG Path Scroll",
    description: "Path drawing animation on scroll.",
    dependencies: ["motion"],
    componentCode: `// See components/ui/svg-follow-scroll.tsx`,
    demoCode: `import { Skiper19 } from "@/components/ui/svg-follow-scroll";\n\nexport function Demo() {\n  return <Skiper19 />;\n}`
  },
  "text-roll-nav": {
    id: "text-roll-nav",
    name: "Text Roll Nav",
    description: "3D rolling text effect on hover.",
    dependencies: ["motion", "clsx", "tailwind-merge"],
    componentCode: `// See components/ui/text-roll-navigation.tsx`,
    demoCode: `import { Skiper58 } from "@/components/ui/text-roll-navigation";\n\nexport function Demo() {\n  return <Skiper58 />;\n}`
  },
  "text-scroll-animation": {
    id: "text-scroll-animation",
    name: "Text Scroll Animation",
    description: "Character transformations based on scroll.",
    dependencies: ["motion", "lenis", "clsx", "tailwind-merge"],
    componentCode: `// See components/ui/text-scroll-animation.tsx`,
    demoCode: `import { Skiper31 } from "@/components/ui/text-scroll-animation";\n\nexport function Demo() {\n  return <Skiper31 />;\n}`
  },
  "animated-gallery": {
    id: "animated-gallery",
    name: "Animated Gallery",
    description: "3D perspective gallery on scroll.",
    dependencies: ["motion", "clsx", "tailwind-merge"],
    componentCode: `// See components/ui/animated-gallery.tsx`,
    demoCode: `// See components/ui/animated-gallery-demo.tsx`
  },
  "circle-animations-1": {
    id: "circle-animations-1",
    name: "Circle Animations 1",
    description: "Canvas based circle micro-interactions.",
    dependencies: ["react"],
    componentCode: `// See components/ui/circle-animations-collection.tsx`,
    demoCode: `import { CircleAnimationsGrid } from "@/components/ui/circle-animations-collection";\n\nexport function Demo() {\n  return <CircleAnimationsGrid />;\n}`
  },
  "circle-animations-3": {
    id: "circle-animations-3",
    name: "Circle Animations 3",
    description: "Monochrome canvas shockwaves.",
    dependencies: ["react"],
    componentCode: `// See components/ui/circle-animations-collection-3.tsx`,
    demoCode: `import { CircleAnimationsGrid } from "@/components/ui/circle-animations-collection-3";\n\nexport function Demo() {\n  return <CircleAnimationsGrid />;\n}`
  },
  "circle-animations-4": {
    id: "circle-animations-4",
    name: "Circle Animations 4",
    description: "Advanced 3D canvas animations.",
    dependencies: ["react"],
    componentCode: `// See components/ui/circle-animations-collection-4.tsx`,
    demoCode: `import { CircleAnimationsGrid } from "@/components/ui/circle-animations-collection-4";\n\nexport function Demo() {\n  return <CircleAnimationsGrid />;\n}`
  },
  "skiper3": {
    id: "skiper3",
    name: "Skiper 3",
    description: "Dynamic expandable toggle button.",
    dependencies: ["motion", "clsx", "tailwind-merge"],
    componentCode: `// See components/ui/skiper3.tsx`,
    demoCode: `import { Skiper3 } from "@/components/ui/skiper3";\n\nexport function Demo() {\n  return <Skiper3 />;\n}`
  },
  "skiper4": {
    id: "skiper4",
    name: "Skiper 4",
    description: "Theme toggle variations.",
    dependencies: ["motion", "lucide-react", "clsx", "tailwind-merge"],
    componentCode: `// See components/ui/skiper4.tsx`,
    demoCode: `import { Skiper4 } from "@/components/ui/skiper4";\n\nexport function Demo() {\n  return <Skiper4 />;\n}`
  },
  "skiper16": {
    id: "skiper16",
    name: "Skiper 16",
    description: "Sticky stacking card scroll effect.",
    dependencies: ["motion", "lenis"],
    componentCode: `// See components/ui/skiper16.tsx`,
    demoCode: `import { Skiper16 } from "@/components/ui/skiper16";\n\nexport function Demo() {\n  return <Skiper16 />;\n}`
  },
  "skiper17": {
    id: "skiper17",
    name: "Skiper 17",
    description: "GSAP powered sticky card rotation.",
    dependencies: ["gsap", "@gsap/react", "lenis", "clsx", "tailwind-merge"],
    componentCode: `// See components/ui/skiper17.tsx`,
    demoCode: `import { Skiper17 } from "@/components/ui/skiper17";\n\nexport function Demo() {\n  return <Skiper17 />;\n}`
  },
  "skiper25": {
    id: "skiper25",
    name: "Skiper 25",
    description: "Audio visualization button.",
    dependencies: ["motion", "use-sound"],
    componentCode: `// See components/ui/skiper25.tsx`,
    demoCode: `import { Skiper25 } from "@/components/ui/skiper25";\n\nexport function Demo() {\n  return <Skiper25 />;\n}`
  },
  "skiper26": {
    id: "skiper26",
    name: "Skiper 26",
    description: "View transition theme toggles.",
    dependencies: ["motion", "next-themes", "lucide-react", "clsx", "tailwind-merge"],
    componentCode: `// See components/ui/skiper26.tsx`,
    demoCode: `import { Skiper26 } from "@/components/ui/skiper26";\n\nexport function Demo() {\n  return <Skiper26 />;\n}`
  },
  "skiper28": {
    id: "skiper28",
    name: "Skiper 28",
    description: "3D Perspective text scroll.",
    dependencies: ["motion", "lenis"],
    componentCode: `// See components/ui/skiper28.tsx`,
    demoCode: `import { Skiper28 } from "@/components/ui/skiper28";\n\nexport function Demo() {\n  return <Skiper28 />;\n}`
  },
  "skiper30": {
    id: "skiper30",
    name: "Skiper 30",
    description: "Parallax column gallery.",
    dependencies: ["motion", "lenis"],
    componentCode: `// See components/ui/skiper30.tsx`,
    demoCode: `import { Skiper30 } from "@/components/ui/skiper30";\n\nexport function Demo() {\n  return <Skiper30 />;\n}`
  },
  "skiper34": {
    id: "skiper34",
    name: "Skiper 34",
    description: "Sticky rotating card effect.",
    dependencies: ["motion", "lenis"],
    componentCode: `// See components/ui/skiper34.tsx`,
    demoCode: `import { Skiper34 } from "@/components/ui/skiper34";\n\nexport function Demo() {\n  return <Skiper34 />;\n}`
  },
  "skiper37": {
    id: "skiper37",
    name: "Skiper 37",
    description: "Number flow animations.",
    dependencies: ["motion", "@number-flow/react", "lucide-react", "react-intersection-observer"],
    componentCode: `// See components/ui/skiper37.tsx`,
    demoCode: `import { Skiper37 } from "@/components/ui/skiper37";\n\nexport function Demo() {\n  return <Skiper37 />;\n}`
  },
  "skiper39": {
    id: "skiper39",
    name: "Skiper 39",
    description: "Canvas crowd simulation.",
    dependencies: ["gsap"],
    componentCode: `// See components/ui/skiper39.tsx`,
    demoCode: `import { Skiper39 } from "@/components/ui/skiper39";\n\nexport function Demo() {\n  return <Skiper39 />;\n}`
  },
  "skiper40": {
    id: "skiper40",
    name: "Skiper 40",
    description: "Creative link hover effects.",
    dependencies: ["next", "clsx", "tailwind-merge"],
    componentCode: `// See components/ui/skiper40.tsx`,
    demoCode: `import { Skiper40 } from "@/components/ui/skiper40";\n\nexport function Demo() {\n  return <Skiper40 />;\n}`
  },
  "skiper41": {
    id: "skiper41",
    name: "Skiper 41",
    description: "Progressive blur masks.",
    dependencies: ["react"],
    componentCode: `// See components/ui/skiper41.tsx`,
    demoCode: `import { Skiper41 } from "@/components/ui/skiper41";\n\nexport function Demo() {\n  return <Skiper41 />;\n}`
  },
  "skiper47": {
    id: "skiper47",
    name: "Skiper 47",
    description: "Coverflow Swiper slider.",
    dependencies: ["swiper", "motion", "lucide-react", "clsx", "tailwind-merge"],
    componentCode: `// See components/ui/skiper47.tsx`,
    demoCode: `import { Skiper47 } from "@/components/ui/skiper47";\n\nexport function Demo() {\n  return <Skiper47 />;\n}`
  },
  "skiper48": {
    id: "skiper48",
    name: "Skiper 48",
    description: "Cards effect Swiper slider.",
    dependencies: ["swiper", "motion", "lucide-react", "clsx", "tailwind-merge"],
    componentCode: `// See components/ui/skiper48.tsx`,
    demoCode: `import { Skiper48 } from "@/components/ui/skiper48";\n\nexport function Demo() {\n  return <Skiper48 />;\n}`
  },
  "skiper49": {
    id: "skiper49",
    name: "Skiper 49",
    description: "Angled Coverflow Swiper.",
    dependencies: ["swiper", "motion", "lucide-react", "clsx", "tailwind-merge"],
    componentCode: `// See components/ui/skiper49.tsx`,
    demoCode: `import { Skiper49 } from "@/components/ui/skiper49";\n\nexport function Demo() {\n  return <Skiper49 />;\n}`
  },
  "skiper50": {
    id: "skiper50",
    name: "Skiper 50",
    description: "Creative transition Swiper.",
    dependencies: ["swiper", "motion", "lucide-react", "clsx", "tailwind-merge"],
    componentCode: `// See components/ui/skiper50.tsx`,
    demoCode: `import { Skiper50 } from "@/components/ui/skiper50";\n\nexport function Demo() {\n  return <Skiper50 />;\n}`
  },
  "skiper51": {
    id: "skiper51",
    name: "Skiper 51",
    description: "Creative depth Swiper.",
    dependencies: ["swiper", "motion", "lucide-react", "clsx", "tailwind-merge"],
    componentCode: `// See components/ui/skiper51.tsx`,
    demoCode: `import { Skiper51 } from "@/components/ui/skiper51";\n\nexport function Demo() {\n  return <Skiper51 />;\n}`
  },
  "skiper52": {
    id: "skiper52",
    name: "Skiper 52",
    description: "Accordion style hover expand.",
    dependencies: ["motion", "clsx", "tailwind-merge"],
    componentCode: `// See components/ui/skiper52.tsx`,
    demoCode: `import { Skiper52 } from "@/components/ui/skiper52";\n\nexport function Demo() {\n  return <Skiper52 />;\n}`
  },
  "skiper53": {
    id: "skiper53",
    name: "Skiper 53",
    description: "Vertical accordion hover expand.",
    dependencies: ["motion", "clsx", "tailwind-merge"],
    componentCode: `// See components/ui/skiper53.tsx`,
    demoCode: `import { Skiper53 } from "@/components/ui/skiper53";\n\nexport function Demo() {\n  return <Skiper53 />;\n}`
  },
  "skiper54": {
    id: "skiper54",
    name: "Skiper 54",
    description: "Embla carousel with blur reveal.",
    dependencies: ["embla-carousel-react", "embla-carousel-autoplay", "motion", "lucide-react", "clsx", "tailwind-merge"],
    componentCode: `// See components/ui/skiper54.tsx\n// Also requires components/ui/carousel.tsx`,
    demoCode: `import { Skiper54 } from "@/components/ui/skiper54";\n\nexport function Demo() {\n  return <Skiper54 />;\n}`
  },
  "skiper58": {
    id: "skiper58",
    name: "Skiper 58",
    description: "Text Roll Navigation (Duplicate of Text Roll Nav).",
    dependencies: ["motion", "clsx", "tailwind-merge"],
    componentCode: `// See components/ui/skiper58.tsx`,
    demoCode: `import { Skiper58 } from "@/components/ui/skiper58";\n\nexport function Demo() {\n  return <Skiper58 />;\n}`
  },
  "skiper61": {
    id: "skiper61",
    name: "Skiper 61",
    description: "Spring based mouse follow.",
    dependencies: ["motion"],
    componentCode: `// See components/ui/skiper61.tsx`,
    demoCode: `import { Skiper61 } from "@/components/ui/skiper61";\n\nexport function Demo() {\n  return <Skiper61 />;\n}`
  },
  "skiper62": {
    id: "skiper62",
    name: "Skiper 62",
    description: "Text loop hook.",
    dependencies: ["motion"],
    componentCode: `// See components/ui/skiper62.tsx`,
    demoCode: `import { Skiper62 } from "@/components/ui/skiper62";\n\nexport function Demo() {\n  return <Skiper62 />;\n}`
  },
  "skiper63": {
    id: "skiper63",
    name: "Skiper 63",
    description: "Squircle SVG Filter.",
    dependencies: ["motion", "lucide-react", "clsx", "tailwind-merge"],
    componentCode: `// See components/ui/skiper63.tsx`,
    demoCode: `import { Skiper63 } from "@/components/ui/skiper63";\n\nexport function Demo() {\n  return <Skiper63 />;\n}`
  },
  "skiper64": {
    id: "skiper64",
    name: "Skiper 64",
    description: "Gooey SVG Filter.",
    dependencies: ["motion"],
    componentCode: `// See components/ui/skiper64.tsx`,
    demoCode: `import { Skiper64 } from "@/components/ui/skiper64";\n\nexport function Demo() {\n  return <Skiper64 />;\n}`
  },
  "skiper65": {
    id: "skiper65",
    name: "Skiper 65",
    description: "Tailwind breakpoint indicator.",
    dependencies: ["clsx", "tailwind-merge"],
    componentCode: `// See components/ui/skiper65.tsx`,
    demoCode: `import { Skiper65 } from "@/components/ui/skiper65";\n\nexport function Demo() {\n  return <Skiper65 />;\n}`
  },
  "skiper66": {
    id: "skiper66",
    name: "Skiper 66",
    description: "SVG Clip Path mask.",
    dependencies: ["clsx", "tailwind-merge"],
    componentCode: `// See components/ui/skiper66.tsx`,
    demoCode: `import { Skiper66 } from "@/components/ui/skiper66";\n\nexport function Demo() {\n  return <Skiper66 />;\n}`
  },
  "skiper67": {
    id: "skiper67",
    name: "Skiper 67",
    description: "Custom Video Player Controls.",
    dependencies: ["motion", "media-chrome", "lucide-react", "clsx", "tailwind-merge"],
    componentCode: `// See components/ui/skiper67.tsx`,
    demoCode: `import { Skiper67 } from "@/components/ui/skiper67";\n\nexport function Demo() {\n  return <Skiper67 />;\n}`
  },
  "skiper87": {
    id: "skiper87",
    name: "Skiper 87",
    description: "Scroll Area with Fade.",
    dependencies: ["@radix-ui/react-scroll-area", "clsx", "tailwind-merge"],
    componentCode: `// See components/ui/skiper87.tsx\n// Requires components/ui/scroll-area.tsx`,
    demoCode: `import { Skiper87 } from "@/components/ui/skiper87";\n\nexport function Demo() {\n  return <Skiper87 />;\n}`
  }
};
