import { CircleAnimationsGrid } from "@/components/ui/circle-animations-collection";

const DemoCircleAnimations1 = () => {
  return (
    <div className="relative w-full bg-neutral-900 rounded-lg border border-neutral-800 h-[600px] overflow-y-auto custom-scrollbar">
        <CircleAnimationsGrid />
    </div>
  );
};

export { DemoCircleAnimations1 };