import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import TargetCursor from './components/TargetCursor.tsx';
import GradualBlurMemo from './components/GradualBlur.tsx';

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="overflow-x-hidden relative bg-[#060010]">
      <TargetCursor
        spinDuration={2}
        hideDefaultCursor
        parallaxOn
        hoverDuration={0.2}
      />
      <App />
      <GradualBlurMemo
        target="page"
        position="bottom"
        height="7rem"
        strength={2}
        divCount={5}
        curve="bezier"
        exponential
        opacity={1}
      />
    </div>
  </StrictMode>,
);
