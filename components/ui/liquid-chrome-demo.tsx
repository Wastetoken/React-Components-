import LiquidChrome from "@/components/ui/liquid-chrome";

const DemoLiquidChrome = () => {
  return (
    <div className="relative h-[600px] w-full bg-black rounded-lg overflow-hidden border border-neutral-800">
      <div className="w-full h-full">
        <LiquidChrome />
      </div>
    </div>
  );
};

export { DemoLiquidChrome };