import { useState } from 'react';
import KewtiPage from './kewtiPage/KewtiPage';
import KewtiDocumentation from './kewti-documentation/component';
import KewtiSlidesPage from './kewtiPage/SlidesPage';
import { KewtiCursor } from '@/components/kewti/KewtiCursor';
import { ThemeToggle } from '@/components/kewti/ThemeToggle';

import DottedSurfaceDemo from './kewtiDemo/dotted-surface-demo';

export function App() {
  const [route, setRoute] = useState<'home' | 'docs' | 'slides' | 'dotted-surface'>('home');

  return (
    <>
      {route === 'home' && (
        <KewtiPage
          onNavigate={(r: string) => {
            if (r === 'docs') setRoute('docs');
            if (r === 'slides') setRoute('slides');
            if (r === 'dotted-surface') setRoute('dotted-surface');
          }}
        />
      )}
      {route === 'slides' && (
        <div className="kewti-noise kewti-custom-cursor relative min-h-screen bg-background font-body text-foreground">
          <KewtiCursor />
          <KewtiSlidesPage onBack={() => setRoute('home')} />
          <ThemeToggle />
        </div>
      )}
      {route === 'docs' && (
        <div className="kewti-noise kewti-custom-cursor relative min-h-screen bg-background font-body text-foreground">
          <KewtiCursor />
          <KewtiDocumentation onBack={() => setRoute('home')} />
          <ThemeToggle />
        </div>
      )}
      {route === 'dotted-surface' && (
        <div className="relative min-h-screen bg-background font-body text-foreground">
          <DottedSurfaceDemo />
          <button 
            onClick={() => setRoute('home')}
            className="absolute top-4 left-4 z-10 px-4 py-2 bg-primary text-primary-foreground rounded-md shadow-md hover:opacity-90 transition-opacity"
          >
            Back to Home
          </button>
          <ThemeToggle />
        </div>
      )}
    </>
  );
}

export default App;
