import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import TargetCursor from './components/TargetCursor.tsx';

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="overflow-x-hidden relative">
      <TargetCursor
        spinDuration={2}
        hideDefaultCursor
        parallaxOn
        hoverDuration={0.2}
      />
      <App />
    </div>
  </StrictMode>,
);
