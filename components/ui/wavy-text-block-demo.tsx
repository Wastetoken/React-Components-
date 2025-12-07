import { WavyBlock, WavyBlockItem } from "@/components/ui/wavy-text-block";

const DemoWavyTextBlock = () => {
  return (
    <div className="relative h-[600px] w-full bg-neutral-950 rounded-lg overflow-y-auto border border-neutral-800 custom-scrollbar">
      <div className="min-h-[1200px] p-12 flex flex-col items-center gap-32">
        <div className="text-neutral-500 animate-bounce mt-20">Scroll Down ↓</div>
        
        <WavyBlock className="flex flex-col gap-4 items-center">
            <WavyBlockItem index={0} className="text-6xl font-bold text-white">Unleash</WavyBlockItem>
            <WavyBlockItem index={1} className="text-6xl font-bold text-neutral-400">Your</WavyBlockItem>
            <WavyBlockItem index={2} className="text-6xl font-bold text-blue-500">Creativity</WavyBlockItem>
        </WavyBlock>

        <div className="h-40" />

        <WavyBlock className="flex flex-col gap-2 items-center">
          {['React', 'Motion', 'Scroll', 'Animation'].map((text, i) => (
            <WavyBlockItem 
              key={text} 
              index={i} 
              className="text-4xl font-medium text-neutral-300 bg-neutral-900 px-6 py-2 rounded-full border border-neutral-800"
            >
              {text}
            </WavyBlockItem>
          ))}
        </WavyBlock>
      </div>
    </div>
  );
};

export { DemoWavyTextBlock };