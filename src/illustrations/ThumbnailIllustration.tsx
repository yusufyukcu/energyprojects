type Variant = "offshore" | "grid" | "storage";

function OffshoreScene({ uid }: { uid: string }) {
  return (
    <>
      <defs>
        <linearGradient id={`sky-${uid}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#CFE1EE" />
          <stop offset="55%" stopColor="#FBE3C7" />
          <stop offset="100%" stopColor="#F7C9A8" />
        </linearGradient>
        <linearGradient id={`sea-${uid}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F2D2B8" />
          <stop offset="35%" stopColor="#CFD9E6" />
          <stop offset="100%" stopColor="#AFC2D8" />
        </linearGradient>
        <linearGradient id={`tower-${uid}`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#CBD2E0" />
        </linearGradient>
        <radialGradient id={`sun-${uid}`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFF3DA" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#FFF3DA" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="480" height="270" fill={`url(#sky-${uid})`} />
      <circle cx="345" cy="118" r="120" fill={`url(#sun-${uid})`} />
      <circle cx="345" cy="118" r="22" fill="#FFEFD4" opacity="0.9" />
      <rect y="168" width="480" height="102" fill={`url(#sea-${uid})`} />
      {[0, 1, 2].map((i) => (
        <ellipse key={i} cx={120 + i * 130} cy={196 + i * 14} rx="70" ry="2.4" fill="#FFFFFF" opacity="0.35" />
      ))}
      <g transform="translate(150 178)" opacity="0.75">
        <line x1="0" y1="0" x2="0" y2="-58" stroke="#9FB0CC" strokeWidth="2.2" strokeLinecap="round" />
        <g stroke="#9FB0CC" strokeWidth="2" strokeLinecap="round" transform="rotate(12 0 -58)">
          <line x1="0" y1="-58" x2="0" y2="-100" />
          <line x1="0" y1="-58" x2="36" y2="-38" />
          <line x1="0" y1="-58" x2="-36" y2="-38" />
        </g>
      </g>
      <g transform="translate(305 196)">
        <ellipse cx="0" cy="6" rx="34" ry="5" fill="#7E94B8" opacity="0.25" />
        <line x1="0" y1="0" x2="0" y2="-86" stroke={`url(#tower-${uid})`} strokeWidth="6" strokeLinecap="round" />
        <g transform="rotate(18 0 -86)">
          <g transform="rotate(0)"><path d="M0,-86 C-12,-100 -10,-128 0,-140 C10,-128 12,-100 0,-86 Z" fill="#FFFFFF" /></g>
          <g transform="rotate(120 0 -86)"><path d="M0,-86 C-12,-100 -10,-128 0,-140 C10,-128 12,-100 0,-86 Z" fill="#F1F3F8" /></g>
          <g transform="rotate(240 0 -86)"><path d="M0,-86 C-12,-100 -10,-128 0,-140 C10,-128 12,-100 0,-86 Z" fill="#E5E9F0" /></g>
        </g>
        <circle cx="0" cy="-86" r="5.5" fill="#EDEFF4" />
        <rect x="-4" y="-90" width="22" height="8" rx="4" fill="#E9ECF2" />
      </g>
    </>
  );
}

function GridScene({ uid }: { uid: string }) {
  return (
    <>
      <defs>
        <linearGradient id={`sky-${uid}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#E4EAF6" />
          <stop offset="100%" stopColor="#C7D5EC" />
        </linearGradient>
        <linearGradient id={`hill-${uid}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#B9CBE8" />
          <stop offset="100%" stopColor="#9FB5DC" />
        </linearGradient>
      </defs>
      <rect width="480" height="270" fill={`url(#sky-${uid})`} />
      <ellipse cx="120" cy="80" rx="110" ry="26" fill="#FFFFFF" opacity="0.5" />
      <path d="M0,210 C100,185 180,200 280,190 C360,182 420,196 480,188 L480,270 L0,270 Z" fill={`url(#hill-${uid})`} />
      {[
        { x: 110, h: 70, t: "#AEB9CE" },
        { x: 245, h: 96, t: "#8B97B3" },
        { x: 375, h: 122, t: "#67738F" },
      ].map((p, i) => (
        <g key={i} transform={`translate(${p.x} ${206 - p.h})`}>
          <path
            d={`M-6,0 L6,0 L20,${p.h} L-20,${p.h} Z`}
            fill="none"
            stroke={p.t}
            strokeWidth="2.4"
          />
          <line x1={-28} y1={p.h * 0.22} x2={28} y2={p.h * 0.22} stroke={p.t} strokeWidth="2.4" strokeLinecap="round" />
          <line x1={-16} y1={p.h * 0.4} x2={16} y2={p.h * 0.4} stroke={p.t} strokeWidth="2.4" strokeLinecap="round" />
        </g>
      ))}
      <path d="M84,148 C160,175 200,180 219,166" fill="none" stroke="#8B97B3" strokeWidth="1.6" opacity="0.8" />
      <path d="M256,134 C300,162 330,168 349,150" fill="none" stroke="#67738F" strokeWidth="1.6" opacity="0.8" />
    </>
  );
}

function StorageScene({ uid }: { uid: string }) {
  const bars = [
    { x: 70, h: 70, accent: false },
    { x: 142, h: 108, accent: true },
    { x: 214, h: 86, accent: false },
    { x: 286, h: 130, accent: true },
    { x: 358, h: 96, accent: false },
  ];
  return (
    <>
      <defs>
        <linearGradient id={`sky-${uid}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#EAEEF6" />
          <stop offset="100%" stopColor="#D7DEEF" />
        </linearGradient>
        <linearGradient id={`bar-${uid}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#D6DBE6" />
        </linearGradient>
        <linearGradient id={`accent-${uid}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#EAF7F0" />
          <stop offset="100%" stopColor="#CDEBDC" />
        </linearGradient>
      </defs>
      <rect width="480" height="270" fill={`url(#sky-${uid})`} />
      <rect y="206" width="480" height="64" fill="#E4E9F1" />
      {bars.map((b, i) => (
        <rect
          key={i}
          x={b.x}
          y={206 - b.h}
          width="52"
          height={b.h}
          rx="10"
          fill={b.accent ? `url(#accent-${uid})` : `url(#bar-${uid})`}
          stroke="#C7CEDC"
          strokeWidth="1"
        />
      ))}
      {bars.map((b, i) => (
        <rect key={`top-${i}`} x={b.x + 8} y={206 - b.h + 10} width="36" height="3" rx="1.5" fill={b.accent ? "#2F9D6C" : "#AEB7CC"} opacity="0.7" />
      ))}
      <g stroke="#9AA6C0" strokeWidth="1.4" opacity="0.7">
        <line x1="96" y1="60" x2="158" y2="86" />
        <line x1="158" y1="86" x2="230" y2="56" />
        <line x1="230" y1="56" x2="312" y2="78" />
      </g>
      {[
        [96, 60],
        [158, 86],
        [230, 56],
        [312, 78],
      ].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="4.5" fill="#2F9D6C" opacity="0.85" />
      ))}
    </>
  );
}

interface ThumbnailIllustrationProps {
  variant: Variant;
  className?: string;
}

function ThumbnailIllustration({ variant, className = "" }: ThumbnailIllustrationProps) {
  const uid = variant;
  return (
    <svg viewBox="0 0 480 270" className={className} xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">
      {variant === "offshore" && <OffshoreScene uid={uid} />}
      {variant === "grid" && <GridScene uid={uid} />}
      {variant === "storage" && <StorageScene uid={uid} />}
    </svg>
  );
}

export default ThumbnailIllustration;
