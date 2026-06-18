import React from "react";

/**
 * AssetIllustration component.
 * Renders an inline SVG that replicates the Figma illustration.
 * Keeps illustration logic isolated so it can be swapped out easily.
 */
const AssetIllustration = ({ className = "" }) => {
  return (
    <div
      className={className}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        maxWidth: "320px",
        height: "auto",
        margin: "0 auto",
      }}
    >
      <svg
        viewBox="0 0 280 220"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "100%", height: "auto" }}
      >
        <defs>
          {/* Subtle Drop Shadow for the front-most card */}
          <filter id="card-shadow" x="85" y="15" width="120" height="150" filterUnits="userSpaceOnUse">
            <feDropShadow
              dx="2"
              dy="8"
              stdDeviation="8"
              floodColor="#0f172a"
              floodOpacity="0.08"
            />
            <feDropShadow
              dx="0"
              dy="2"
              stdDeviation="3"
              floodColor="#0f172a"
              floodOpacity="0.04"
            />
          </filter>
        </defs>

        {/* 1. Orange Dotted Connector Arch at the bottom */}
        <path
          d="M 80 170 Q 140 205 200 172"
          stroke="#f59e0b"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="4 4"
        />
        <circle cx="80" cy="170" r="3" fill="#f59e0b" />
        <circle cx="200" cy="172" r="3" fill="#f59e0b" />

        {/* 2. Left Background Document Card (Light Blue/Lavender) */}
        <g id="bg-left-card">
          <rect
            x="45"
            y="45"
            width="82"
            height="115"
            rx="12"
            fill="#eff6ff"
            stroke="#dbeafe"
            strokeWidth="1.5"
          />
          {/* Mock Lines inside the background card */}
          <rect x="57" y="60" width="30" height="4" rx="2" fill="#bfdbfe" />
          <rect x="57" y="72" width="45" height="4" rx="2" fill="#bfdbfe" />
          <rect x="57" y="84" width="40" height="4" rx="2" fill="#bfdbfe" />
          {/* Lower layout element */}
          <rect x="57" y="100" width="58" height="20" rx="4" fill="#dbeafe" />
          <rect x="57" y="128" width="28" height="12" rx="4" fill="#3b82f6" />
        </g>

        {/* 3. Purple/Indigo Dotted Connector (Front card to green badge) */}
        <path
          d="M 135 110 Q 165 92 195 115"
          stroke="#818cf8"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeDasharray="3 3"
        />

        {/* 4. Right Background Circular Badge (Green Document) */}
        <g id="bg-right-badge">
          {/* Outer circle container */}
          <circle cx="210" cy="120" r="32" fill="#f0fdf4" stroke="#dcfce7" strokeWidth="1.5" />
          {/* Green file icon inside circle */}
          <path
            d="M 198 108 L 214 108 L 222 116 L 222 134 L 198 134 Z"
            fill="#ffffff"
            stroke="#86efac"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          {/* Document lines */}
          <line x1="203" y1="118" x2="212" y2="118" stroke="#86efac" strokeWidth="1.2" strokeLinecap="round" />
          <line x1="203" y1="124" x2="217" y2="124" stroke="#86efac" strokeWidth="1.2" strokeLinecap="round" />
          <line x1="203" y1="129" x2="210" y2="129" stroke="#86efac" strokeWidth="1.2" strokeLinecap="round" />
        </g>

        {/* 5. Tilted Front Document Card (White with Yellow Details & Drop Shadow) */}
        <g id="front-tilted-card" filter="url(#card-shadow)">
          <g transform="translate(108, 40) rotate(8)">
            <rect
              x="0"
              y="0"
              width="80"
              height="112"
              rx="12"
              fill="#ffffff"
              stroke="#e2e8f0"
              strokeWidth="1.5"
            />
            {/* Top yellow/orange line indicators */}
            <rect x="10" y="14" width="45" height="5" rx="2.5" fill="#fef08a" />
            <rect x="10" y="24" width="35" height="5" rx="2.5" fill="#fef08a" />
            
            {/* Center block frame */}
            <rect
              x="10"
              y="38"
              width="60"
              height="48"
              rx="8"
              fill="#fffbeb"
              stroke="#fef3c7"
              strokeWidth="1.2"
            />
            
            {/* Blue Node representing linkage */}
            <circle cx="28" cy="62" r="4.5" fill="#4f46e5" />
            <circle cx="28" cy="62" r="1.5" fill="#ffffff" />
          </g>
        </g>

        {/* 6. Overlapping Dark Blue Circle Badge (Checkmark) */}
        <g id="check-badge">
          <circle cx="224" cy="112" r="13" fill="#4f46e5" stroke="#ffffff" strokeWidth="2.5" />
          <path
            d="M 219 112 L 222 115 L 229 108"
            stroke="#ffffff"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    </div>
  );
};

export default AssetIllustration;
