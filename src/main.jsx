import React from 'react'
import ReactDOM from 'react-dom/client'
import { FluidFieldBackground } from "@designcodeio/threeui/components/FluidFieldBackground";
import "@designcodeio/threeui/style.css";

ReactDOM.createRoot(document.getElementById('threeui-root')).render(
  <React.StrictMode>
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 0, pointerEvents: 'none', background: 'linear-gradient(135deg, #e0f2fe 0%, #fce7f3 100%)' }}>
        <FluidFieldBackground hue={0.8} saturation={0.7} />
    </div>
  </React.StrictMode>,
)
