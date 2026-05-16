import { useState } from 'react';
import KewtiPage from './kewtiPage/KewtiPage';
import KewtiDocumentation from './kewti-documentation/component';
import KewtiSlidesPage from './kewtiPage/SlidesPage';
import { KewtiCursor } from '@/components/kewti/KewtiCursor';
import { ThemeToggle } from '@/components/kewti/ThemeToggle';

export function App() {
  const [route, setRoute] = useState<'home' | 'docs' | 'slides'>('home');

  return (
    <>
      {route === 'home' ? (
        <KewtiPage
          onNavigate={(r: string) => {
            if (r === 'docs') setRoute('docs');
            if (r === 'slides') setRoute('slides');
          }}
        />
      ) : route === 'slides' ? (
        <div className="kewti-noise kewti-custom-cursor relative min-h-screen bg-background font-body text-foreground">
          <KewtiCursor />
          <KewtiSlidesPage onBack={() => setRoute('home')} />
          <ThemeToggle />
        </div>
      ) : (
        <div className="kewti-noise kewti-custom-cursor relative min-h-screen bg-background font-body text-foreground">
          <KewtiCursor />
          <KewtiDocumentation onBack={() => setRoute('home')} />
          <ThemeToggle />
        </div>
      )}
    </>
  );
}

export default App;
