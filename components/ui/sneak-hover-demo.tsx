import { Component as SneakHover } from "@/components/ui/sneak-hover";

const DemoSneakHover = () => {
  return (
    <div className="relative min-h-[600px] w-full bg-neutral-900 rounded-lg overflow-hidden border border-neutral-800 flex items-center justify-center">
      <div className="w-full h-full">
        <SneakHover />
      </div>
    </div>
  );
};

export { DemoSneakHover };