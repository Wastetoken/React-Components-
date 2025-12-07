import { LavaLamp } from "@/components/ui/fluid-blob";

const DemoFluidBlob = () => {
  return (
    <div className="relative h-[600px] w-full bg-black rounded-lg overflow-hidden border border-neutral-800">
      <LavaLamp />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <h1 className="text-4xl font-bold text-white mix-blend-exclusion opacity-50">Fluid Shader</h1>
      </div>
    </div>
  );
};

export { DemoFluidBlob };