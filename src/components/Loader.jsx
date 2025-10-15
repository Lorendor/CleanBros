import React, { useEffect, useState } from 'react';

const CloudLoader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => (p >= 100 ? 100 : p + 2));
    }, 30);
    return () => clearInterval(interval);
  }, []);

  const fillPercent = Math.min(100, progress);
  const vbWidth = 200;
  const vbHeight = 200;
  const radius = 80; // bubble radius
  const cx = 100;
  const cy = 100;
  const waterLevelY = vbHeight - (fillPercent / 100) * (radius * 2) - (vbHeight - (cy + radius));

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-blue">
      <div className="relative w-64 h-64">
        <svg viewBox={`0 0 ${vbWidth} ${vbHeight}`} className="w-full h-full">
          {/* Bubble outer circle */}
          <defs>
            <radialGradient id="bubble-gloss" cx="30%" cy="20%" r="60%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
              <stop offset="60%" stopColor="#ffffff" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0.05" />
            </radialGradient>
            <linearGradient id="water-fill" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#e0f2fe" />
              <stop offset="100%" stopColor="#60a5fa" />
            </linearGradient>
            <clipPath id="bubble-clip">
              <circle cx={cx} cy={cy} r={radius} />
            </clipPath>
          </defs>

          {/* Bubble base */}
          <circle cx={cx} cy={cy} r={radius} fill="#f8fafc" stroke="#e2e8f0" strokeWidth="3" />

          {/* Water group clipped to bubble */}
          <g clipPath="url(#bubble-clip)">
            {/* Static water fill to current level */}
            <rect x="0" y={waterLevelY} width={vbWidth} height={vbHeight} fill="url(#water-fill)" />

            {/* Waves */}
            <g opacity="0.9">
              <path
                d={`M0 ${waterLevelY} Q 25 ${waterLevelY - 6}, 50 ${waterLevelY} T 100 ${waterLevelY} T 150 ${waterLevelY} T 200 ${waterLevelY}`}
                fill="none"
                stroke="#93c5fd"
                strokeWidth="6"
              >
                <animateTransform attributeName="transform" type="translate" from="0 0" to="-50 0" dur="2s" repeatCount="indefinite" />
              </path>
              <path
                d={`M0 ${waterLevelY + 4} Q 25 ${waterLevelY - 2}, 50 ${waterLevelY + 4} T 100 ${waterLevelY + 4} T 150 ${waterLevelY + 4} T 200 ${waterLevelY + 4}`}
                fill="none"
                stroke="#60a5fa"
                strokeWidth="6"
                opacity="0.75"
              >
                <animateTransform attributeName="transform" type="translate" from="0 0" to="-80 0" dur="2.4s" repeatCount="indefinite" />
              </path>
            </g>
          </g>

          {/* Gloss highlight */}
          <circle cx={cx - 28} cy={cy - 28} r={22} fill="url(#bubble-gloss)" />
        </svg>

      </div>
    </div>
  );
};

export default CloudLoader;


