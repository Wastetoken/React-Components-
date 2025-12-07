import Waves from "@/components/ui/waves";

const DemoWaves = () => {
  return (
    <div className="relative h-[600px] w-full bg-black rounded-lg overflow-hidden border border-neutral-800">
      <div className="w-full h-full">
        <Waves />
      </div>
    </div>
  );
};

export { DemoWaves };