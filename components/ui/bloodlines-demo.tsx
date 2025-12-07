import Bloodlines from "@/components/ui/bloodlines";

const DemoBloodlines = () => {
  return (
    <div className="relative h-[600px] w-full bg-black rounded-lg overflow-hidden border border-neutral-800">
      <div className="w-full h-full">
        <Bloodlines />
      </div>
    </div>
  );
};

export { DemoBloodlines };