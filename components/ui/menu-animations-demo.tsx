import { MenuAnimation } from "@/components/ui/menu-animations";

const DemoMenuAnimations = () => {
  return (
    <div className="relative w-full bg-neutral-900 rounded-lg border border-neutral-800 p-8 overflow-y-auto custom-scrollbar h-[600px]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {['dots-grid', 'text-morph', 'plus-morph', 'circle-pulse', 'cube-spin', 'stacked-circles', 'rotating-circles', 'isometric-cube', 'expanding-circles'].map(id => (
            <MenuAnimation key={id} title={id.replace('-', ' ')} animationId={id as any} />
        ))}
      </div>
    </div>
  );
};

export { DemoMenuAnimations };