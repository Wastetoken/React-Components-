
import React, { useState } from 'react';
import { COMPONENTS_DATA } from './lib/registry';
import { COMPONENT_DOCS } from './lib/docs';
import { Layout, Eye, Menu, ArrowLeft, Terminal, FileCode, Play, Copy, Check } from 'lucide-react';
import { cn } from './lib/utils';
import { ThemeProvider } from "next-themes";

// --- STRICTLY RELATIVE IMPORTS ---
import { DemoDisplayCards } from './components/ui/display-cards-demo';
import { DemoFluidBlob } from './components/ui/fluid-blob-demo';
import { DemoHorizonHero } from './components/ui/horizon-hero-section-demo';
import { DemoBloodlines } from './components/ui/bloodlines-demo';
import { DemoFlybyScroll } from './components/ui/flyby-scroll-demo';
import { DemoLiquidChrome } from './components/ui/liquid-chrome-demo';
import { DemoMilHardware } from './components/ui/mil-hardware-demo';
import { DemoSneakHover } from './components/ui/sneak-hover-demo';
import { DemoWaves } from './components/ui/waves-demo';
import { DemoWavyTextBlock } from './components/ui/wavy-text-block-demo';
import { DemoStackPilotHero } from './components/ui/hero-section-demo';
import { DemoImageTrailEffect } from './components/ui/image-trail-effect-demo';
import { DemoMenuAnimations } from './components/ui/menu-animations-demo';
import { DemoVelocityText } from './components/ui/parallax-scrolling-text-effect-demo';
import { DemoSkiper19 } from './components/ui/skiper19-demo';
import { DemoSkiper58 } from './components/ui/skiper58-demo';
import { DemoSkiper31 } from './components/ui/skiper31-demo';
import { DemoAnimatedGallery } from './components/ui/animated-gallery-demo';
import { DemoCircleAnimations1 } from './components/ui/circle-animations-collection-demo';
import { DemoCircleAnimations3 } from './components/ui/circle-animations-collection-3-demo';
import { DemoCircleAnimations4 } from './components/ui/circle-animations-collection-4-demo';
import { DemoSkiper3 } from './components/ui/skiper3-demo';
import { DemoSkiper4 } from './components/ui/skiper4-demo';
import { DemoSkiper16 } from './components/ui/skiper16-demo';
import { DemoSkiper17 } from './components/ui/skiper17-demo';
import { DemoSkiper25 } from './components/ui/skiper25-demo';
import { DemoSkiper26 } from './components/ui/skiper26-demo';
import { DemoSkiper28 } from './components/ui/skiper28-demo';
import { DemoSkiper30 } from './components/ui/skiper30-demo';
import { DemoSkiper34 } from './components/ui/skiper34-demo';
import { DemoSkiper37 } from './components/ui/skiper37-demo';
import { DemoSkiper39 } from './components/ui/skiper39-demo';
import { DemoSkiper40 } from './components/ui/skiper40-demo';
import { DemoSkiper41 } from './components/ui/skiper41-demo';
import { DemoSkiper47 } from './components/ui/skiper47-demo';
import { DemoSkiper48 } from './components/ui/skiper48-demo';
import { DemoSkiper49 } from './components/ui/skiper49-demo';
import { DemoSkiper50 } from './components/ui/skiper50-demo';
import { DemoSkiper51 } from './components/ui/skiper51-demo';
import { DemoSkiper52 } from './components/ui/skiper52-demo';
import { DemoSkiper53 } from './components/ui/skiper53-demo';
import { DemoSkiper54 } from './components/ui/skiper54-demo';
import { DemoSkiper61 } from './components/ui/skiper61-demo';
import { DemoSkiper62 } from './components/ui/skiper62-demo';
import { DemoSkiper63 } from './components/ui/skiper63-demo';
import { DemoSkiper64 } from './components/ui/skiper64-demo';
import { DemoSkiper65 } from './components/ui/skiper65-demo';
import { DemoSkiper66 } from './components/ui/skiper66-demo';
import { DemoSkiper67 } from './components/ui/skiper67-demo';
import { DemoSkiper87 } from './components/ui/skiper87-demo';

const CodeBlock = ({ code }: { code: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group rounded-lg bg-neutral-900 border border-neutral-800 overflow-hidden my-4">
      <div className="absolute right-4 top-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          onClick={handleCopy}
          className="p-2 bg-neutral-800 rounded-md text-neutral-400 hover:text-white hover:bg-neutral-700 transition-colors"
        >
          {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
        </button>
      </div>
      <div className="p-4 overflow-x-auto">
        <pre className="font-mono text-sm text-neutral-300 leading-relaxed">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
};

export default function App() {
  const [activeComponentId, setActiveComponentId] = useState(COMPONENTS_DATA[0].id);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [fullPageMode, setFullPageMode] = useState(false);
  const [activeTab, setActiveTab] = useState<'preview' | 'docs'>('preview');
  const [codeTab, setCodeTab] = useState<'component' | 'demo'>('component');

  const activeComponent = COMPONENTS_DATA.find(c => c.id === activeComponentId) || COMPONENTS_DATA[0];
  const activeDoc = COMPONENT_DOCS[activeComponentId];

  // Helper to get demo component
  const getDemoComponent = () => {
    switch (activeComponentId) {
      case 'display-cards': return <DemoDisplayCards />;
      case 'fluid-blob': return <DemoFluidBlob />;
      case 'horizon-hero': return <DemoHorizonHero />;
      case 'bloodlines': return <DemoBloodlines />;
      case 'flyby-scroll': return <DemoFlybyScroll />;
      case 'liquid-chrome': return <DemoLiquidChrome />;
      case 'mil-hardware': return <DemoMilHardware />;
      case 'sneak-hover': return <DemoSneakHover />;
      case 'waves': return <DemoWaves />;
      case 'wavy-text-block': return <DemoWavyTextBlock />;
      case 'hero-section-stackpilot': return <DemoStackPilotHero />;
      case 'image-trail': return <DemoImageTrailEffect />;
      case 'menu-animations': return <DemoMenuAnimations />;
      case 'velocity-text': return <DemoVelocityText />;
      case 'svg-follow-scroll': return <DemoSkiper19 />;
      case 'text-roll-nav': return <DemoSkiper58 />;
      case 'text-scroll-animation': return <DemoSkiper31 />;
      case 'animated-gallery': return <DemoAnimatedGallery />;
      case 'circle-animations-1': return <DemoCircleAnimations1 />;
      case 'circle-animations-3': return <DemoCircleAnimations3 />;
      case 'circle-animations-4': return <DemoCircleAnimations4 />;
      case 'skiper3': return <DemoSkiper3 />;
      case 'skiper4': return <DemoSkiper4 />;
      case 'skiper16': return <DemoSkiper16 />;
      case 'skiper17': return <DemoSkiper17 />;
      case 'skiper25': return <DemoSkiper25 />;
      case 'skiper26': return <DemoSkiper26 />;
      case 'skiper28': return <DemoSkiper28 />;
      case 'skiper30': return <DemoSkiper30 />;
      case 'skiper34': return <DemoSkiper34 />;
      case 'skiper37': return <DemoSkiper37 />;
      case 'skiper39': return <DemoSkiper39 />;
      case 'skiper40': return <DemoSkiper40 />;
      case 'skiper41': return <DemoSkiper41 />;
      case 'skiper47': return <DemoSkiper47 />;
      case 'skiper48': return <DemoSkiper48 />;
      case 'skiper49': return <DemoSkiper49 />;
      case 'skiper50': return <DemoSkiper50 />;
      case 'skiper51': return <DemoSkiper51 />;
      case 'skiper52': return <DemoSkiper52 />;
      case 'skiper53': return <DemoSkiper53 />;
      case 'skiper54': return <DemoSkiper54 />;
      case 'skiper61': return <DemoSkiper61 />;
      case 'skiper62': return <DemoSkiper62 />;
      case 'skiper63': return <DemoSkiper63 />;
      case 'skiper64': return <DemoSkiper64 />;
      case 'skiper65': return <DemoSkiper65 />;
      case 'skiper66': return <DemoSkiper66 />;
      case 'skiper67': return <DemoSkiper67 />;
      case 'skiper87': return <DemoSkiper87 />;
      default: return <div className="text-neutral-500">Component demo not found.</div>;
    }
  };

  const renderActiveComponent = () => {
    if (activeComponent.fullPage && !fullPageMode) {
      return (
        <div className="relative flex flex-col items-center justify-center h-[500px] w-full bg-neutral-900 rounded-lg border border-neutral-800 overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
          <div className="relative z-10 flex flex-col items-center space-y-6 p-8 text-center">
            <h3 className="text-3xl font-bold text-white tracking-tight drop-shadow-xl">{activeComponent.name}</h3>
            <p className="text-neutral-400 max-w-md">{activeComponent.description}</p>
            <button 
              onClick={() => setFullPageMode(true)}
              className="px-6 py-3 bg-white text-black font-bold rounded-full hover:bg-neutral-200 transition-all flex items-center gap-2 shadow-xl shadow-white/5"
            >
              <Eye className="w-4 h-4" />
              Launch Full Page Demo
            </button>
          </div>
        </div>
      );
    }
    return getDemoComponent();
  };

  if (fullPageMode) {
    return (
      <div className="relative w-full min-h-screen bg-black">
        {getDemoComponent()}
        <button
          onClick={() => setFullPageMode(false)}
          className="fixed top-6 right-6 z-[100] bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full flex items-center gap-2 border border-white/10 transition-all text-sm font-medium group mix-blend-difference"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
          Back to Library
        </button>
      </div>
    );
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <div className="flex h-screen bg-black text-white overflow-hidden font-sans selection:bg-blue-500/30">
        {/* Sidebar */}
        <aside 
          className={cn(
            "fixed inset-y-0 left-0 z-50 w-72 bg-neutral-950/95 backdrop-blur-xl border-r border-neutral-800 transform transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0 flex flex-col",
            !isSidebarOpen && "-translate-x-full lg:hidden"
          )}
        >
          <div className="flex items-center h-16 px-6 border-b border-neutral-800 bg-neutral-950">
            <Layout className="w-6 h-6 mr-3 text-blue-500" />
            <span className="text-lg font-bold tracking-tight">UI Library</span>
          </div>
          
          <div className="p-4 overflow-y-auto flex-1 custom-scrollbar space-y-1">
            {COMPONENTS_DATA.map((component) => (
              <button
                key={component.id}
                onClick={() => {
                  setActiveComponentId(component.id);
                  setFullPageMode(false);
                  setActiveTab('preview');
                }}
                className={cn(
                  "w-full flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-all text-left group border border-transparent",
                  activeComponentId === component.id 
                    ? "bg-neutral-900 text-white border-neutral-800 shadow-sm" 
                    : "text-neutral-400 hover:bg-neutral-900/50 hover:text-white"
                )}
              >
                {component.name}
                {activeComponentId === component.id && <div className="ml-auto w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />}
              </button>
            ))}
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1 flex flex-col min-w-0 bg-black">
          {/* Header */}
          <header className="flex items-center justify-between h-16 px-6 border-b border-neutral-800 bg-black/50 backdrop-blur-md sticky top-0 z-40">
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="lg:hidden text-neutral-400 hover:text-white transition-colors"
              >
                <Menu className="w-6 h-6" />
              </button>
              <h1 className="text-xl font-bold tracking-tight">{activeComponent.name}</h1>
            </div>
            
            <div className="flex items-center bg-neutral-900 rounded-lg p-1 border border-neutral-800">
              <button
                onClick={() => setActiveTab('preview')}
                className={cn(
                  "px-4 py-1.5 rounded-md text-sm font-medium transition-all flex items-center gap-2",
                  activeTab === 'preview' 
                    ? "bg-neutral-800 text-white shadow-sm" 
                    : "text-neutral-400 hover:text-white"
                )}
              >
                <Play className="w-3.5 h-3.5" />
                Preview
              </button>
              <button
                onClick={() => setActiveTab('docs')}
                className={cn(
                  "px-4 py-1.5 rounded-md text-sm font-medium transition-all flex items-center gap-2",
                  activeTab === 'docs' 
                    ? "bg-neutral-800 text-white shadow-sm" 
                    : "text-neutral-400 hover:text-white"
                )}
              >
                <FileCode className="w-3.5 h-3.5" />
                Code
              </button>
            </div>
          </header>

          {/* Content Area */}
          <main className="flex-1 overflow-y-auto p-6 lg:p-10 relative">
            <div className="max-w-6xl mx-auto">
              <div className="mb-8">
                <p className="text-lg text-neutral-400 leading-relaxed max-w-3xl">{activeComponent.description}</p>
              </div>

              {activeTab === 'preview' ? (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                  {renderActiveComponent()}
                </div>
              ) : (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-10">
                  {/* Installation */}
                  <section>
                    <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                      <Terminal className="w-5 h-5 text-blue-500" />
                      Installation
                    </h3>
                    <div className="bg-neutral-950 border border-neutral-800 rounded-lg p-4 flex items-center justify-between group shadow-lg">
                      <code className="text-sm font-mono text-green-400">
                        npm install {activeDoc?.dependencies?.join(' ') || 'lucide-react clsx tailwind-merge'}
                      </code>
                      <button 
                        onClick={() => navigator.clipboard.writeText(`npm install ${activeDoc?.dependencies?.join(' ') || 'lucide-react clsx tailwind-merge'}`)}
                        className="text-neutral-500 hover:text-white transition-colors p-2 hover:bg-neutral-900 rounded-md"
                      >
                        <Copy className="w-4 h-4" />
                      </button>
                    </div>
                  </section>

                  {/* Source Code */}
                  <section>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                        <FileCode className="w-5 h-5 text-blue-500" />
                        Source Code
                      </h3>
                      <div className="flex bg-neutral-900 rounded-lg p-1 border border-neutral-800">
                        <button
                          onClick={() => setCodeTab('component')}
                          className={cn(
                            "px-3 py-1 rounded text-xs font-medium transition-colors",
                            codeTab === 'component' ? "bg-neutral-800 text-white" : "text-neutral-400 hover:text-white"
                          )}
                        >
                          Component
                        </button>
                        <button
                          onClick={() => setCodeTab('demo')}
                          className={cn(
                            "px-3 py-1 rounded text-xs font-medium transition-colors",
                            codeTab === 'demo' ? "bg-neutral-800 text-white" : "text-neutral-400 hover:text-white"
                          )}
                        >
                          Demo
                        </button>
                      </div>
                    </div>
                    
                    {codeTab === 'component' ? (
                      <div>
                        <div className="text-xs text-neutral-500 mb-2 font-mono ml-1">components/ui/{activeComponent.id}.tsx</div>
                        <CodeBlock code={activeDoc?.componentCode || '// Component code not available'} />
                      </div>
                    ) : (
                      <div>
                        <div className="text-xs text-neutral-500 mb-2 font-mono ml-1">components/ui/{activeComponent.id}-demo.tsx</div>
                        <CodeBlock code={activeDoc?.demoCode || '// Demo code not available'} />
                      </div>
                    )}
                  </section>
                  
                  <section>
                      <h3 className="text-lg font-semibold text-white mb-4">How to Use</h3>
                      <p className="text-neutral-400 text-sm leading-relaxed mb-4">
                          Copy the source code into your project. Ensure you have the required dependencies installed.
                          You can then import the component and use it in your application as shown in the Demo tab.
                      </p>
                  </section>
                </div>
              )}
            </div>
          </main>
        </div>
      </div>
    </ThemeProvider>
  );
}