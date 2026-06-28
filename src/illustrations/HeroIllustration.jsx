const TOWER_H = 300;
const TOWER_TOP_W = 7;
const TOWER_BASE_W = 16;
const NACELLE_W = 30;
const NACELLE_H = 12;
const BLADE_LEN = 230;
const BLADE_W = 17;

function bladePath() {
  const w = BLADE_W;
  const l = BLADE_LEN;
  return `M0,0 C${-w},${-l * 0.2} ${-w * 0.55},${-l * 0.72} 0,${-l} C${w * 0.55},${-l * 0.72} ${w},${-l * 0.2} 0,0 Z`;
}

function OffshoreTurbine({ x, baseY, scale, rotation = 8, fillId, reflection = true }) {
  const hubY = baseY - TOWER_H * scale;
  const towerPath = `M${-TOWER_TOP_W / 2},0 L${TOWER_TOP_W / 2},0 L${TOWER_BASE_W / 2},${TOWER_H} L${-TOWER_BASE_W / 2},${TOWER_H} Z`;

  return (
    <g>
      {reflection && (
        <ellipse
          cx={x}
          cy={baseY + 14 * scale}
          rx={70 * scale}
          ry={10 * scale}
          fill="#7E94B8"
          opacity="0.18"
          filter="url(#blurSoft)"
        />
      )}
      <g transform={`translate(${x} ${hubY}) scale(${scale})`}>
        <path d={towerPath} fill="url(#towerShade)" />
        <g transform={`rotate(${rotation})`}>
          <path d={bladePath()} fill="url(#bladeShade)" transform="rotate(0)" />
          <path d={bladePath()} fill="url(#bladeShade)" transform="rotate(120)" />
          <path d={bladePath()} fill="url(#bladeShade)" transform="rotate(240)" />
        </g>
        <circle r="9" fill="#E7EAF1" stroke="#C3CADC" strokeWidth="1.5" />
        <rect
          x={-NACELLE_W * 0.32}
          y={-NACELLE_H / 2}
          width={NACELLE_W}
          height={NACELLE_H}
          rx={NACELLE_H / 2}
          fill="url(#nacelleShade)"
        />
      </g>
    </g>
  );
}

function OnshoreTurbine({ x, baseY, scale, rotation = 10, tone = "#A9BEE0", opacity = 0.85 }) {
  const towerH = 150 * scale;
  const bladeLen = 58 * scale;
  return (
    <g transform={`translate(${x} ${baseY - towerH})`} opacity={opacity}>
      <line x1="0" y1="0" x2="0" y2={towerH} stroke={tone} strokeWidth={3 * scale} strokeLinecap="round" />
      <g transform={`rotate(${rotation})`} stroke={tone} strokeWidth={2.6 * scale} strokeLinecap="round">
        <line x1="0" y1="0" x2="0" y2={-bladeLen} />
        <line x1="0" y1="0" x2={-bladeLen} y2="0" transform="rotate(120)" />
        <line x1="0" y1="0" x2={-bladeLen} y2="0" transform="rotate(240)" />
      </g>
      <circle r={3.2 * scale} fill={tone} />
    </g>
  );
}

function TransmissionTower({ x, baseY, scale, tone = "#8693AC" }) {
  const h = 190 * scale;
  const topW = 14 * scale;
  const baseW = 46 * scale;
  const armW = 64 * scale;
  const armY = h * 0.22;

  return (
    <g transform={`translate(${x} ${baseY - h})`}>
      <path
        d={`M${-topW / 2},0 L${topW / 2},0 L${baseW / 2},${h} L${-baseW / 2},${h} Z`}
        fill="none"
        stroke={tone}
        strokeWidth={2.2 * scale}
      />
      <line x1={-armW / 2} y1={armY} x2={armW / 2} y2={armY} stroke={tone} strokeWidth={2.2 * scale} strokeLinecap="round" />
      <line
        x1={-armW * 0.34}
        y1={armY * 1.7}
        x2={armW * 0.34}
        y2={armY * 1.7}
        stroke={tone}
        strokeWidth={2.2 * scale}
        strokeLinecap="round"
      />
      <path d={`M${-topW / 2},${h * 0.15} L${baseW * 0.3},${h * 0.6}`} stroke={tone} strokeWidth={1.4 * scale} opacity="0.6" />
      <path d={`M${topW / 2},${h * 0.15} L${-baseW * 0.3},${h * 0.6}`} stroke={tone} strokeWidth={1.4 * scale} opacity="0.6" />
      <circle cx={-armW / 2} cy={armY} r={3 * scale} fill={tone} />
      <circle cx={armW / 2} cy={armY} r={3 * scale} fill={tone} />
      <circle cx={-armW * 0.34} cy={armY * 1.7} r={3 * scale} fill={tone} />
      <circle cx={armW * 0.34} cy={armY * 1.7} r={3 * scale} fill={tone} />
    </g>
  );
}

function HeroIllustration({ className = "" }) {
  return (
    <svg
      viewBox="0 0 1600 900"
      preserveAspectRatio="xMidYMax slice"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Illustration of offshore and onshore wind turbines, transmission towers, and mountains under a clear sky"
    >
      <defs>
        <linearGradient id="towerShade" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="48%" stopColor="#F0F2F7" />
          <stop offset="100%" stopColor="#C7CEDC" />
        </linearGradient>
        <linearGradient id="bladeShade" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#D8DCE7" />
        </linearGradient>
        <linearGradient id="nacelleShade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FAFBFD" />
          <stop offset="100%" stopColor="#CDD3E0" />
        </linearGradient>
        <linearGradient id="waterGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#DCE8F0" />
          <stop offset="100%" stopColor="#B9D0E0" />
        </linearGradient>
        <linearGradient id="mountainBack" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#D6E1F0" />
          <stop offset="100%" stopColor="#C3D3EA" />
        </linearGradient>
        <linearGradient id="mountainFront" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#C2D4EC" />
          <stop offset="100%" stopColor="#A9C0E0" />
        </linearGradient>
        <radialGradient id="sunGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFF6DE" stopOpacity="0.95" />
          <stop offset="55%" stopColor="#FFF1CE" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#FFF1CE" stopOpacity="0" />
        </radialGradient>
        <filter id="blurSoft" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="6" />
        </filter>
        <filter id="blurMed" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="14" />
        </filter>
      </defs>

      <circle cx="1180" cy="190" r="230" fill="url(#sunGlow)" />
      <ellipse cx="300" cy="160" rx="120" ry="34" fill="#FFFFFF" opacity="0.55" filter="url(#blurMed)" />
      <ellipse cx="980" cy="120" rx="150" ry="30" fill="#FFFFFF" opacity="0.45" filter="url(#blurMed)" />

      <path
        d="M0,520 C180,460 320,470 460,500 C620,535 740,440 900,460 C1060,480 1180,430 1320,455 C1420,473 1520,450 1600,470 L1600,620 L0,620 Z"
        fill="url(#mountainBack)"
        opacity="0.75"
        filter="url(#blurSoft)"
      />

      <path
        d="M0,580 C140,520 260,560 400,545 C540,530 640,470 800,505 C940,535 1060,500 1200,520 C1340,540 1480,510 1600,540 L1600,640 L0,640 Z"
        fill="url(#mountainFront)"
        opacity="0.9"
      />

      <OnshoreTurbine x={110} baseY={552} scale={0.85} rotation={9} />
      <OnshoreTurbine x={205} baseY={560} scale={0.65} rotation={12} tone="#B7C8E5" opacity={0.7} />
      <OnshoreTurbine x={1430} baseY={548} scale={0.9} rotation={7} />
      <OnshoreTurbine x={1530} baseY={558} scale={0.6} rotation={11} tone="#B7C8E5" opacity={0.65} />
      <OnshoreTurbine x={650} baseY={538} scale={0.5} rotation={10} tone="#C2D2EA" opacity={0.55} />

      <TransmissionTower x={430} baseY={612} scale={0.62} tone="#A6B3CC" />
      <TransmissionTower x={660} baseY={636} scale={0.8} tone="#8FA0BE" />
      <TransmissionTower x={900} baseY={664} scale={1} tone="#71819E" />

      <path
        d="M430,565 C520,600 580,610 660,597 C730,615 830,635 900,624"
        fill="none"
        stroke="#8FA0BE"
        strokeWidth="1.6"
        opacity="0.8"
      />
      <path
        d="M430,580 C520,612 580,622 660,610 C730,628 830,646 900,636"
        fill="none"
        stroke="#8FA0BE"
        strokeWidth="1.6"
        opacity="0.8"
      />

      <rect x="0" y="660" width="1600" height="240" fill="url(#waterGrad)" />
      <path d="M0,660 C260,645 420,675 700,658 C980,641 1200,668 1600,652 L1600,660 L0,660 Z" fill="#E8F0F6" opacity="0.6" />

      {[710, 845, 1010, 1180, 1340].map((cx, i) => (
        <ellipse key={cx} cx={cx} cy={700 + i * 22} rx="120" ry="3" fill="#FFFFFF" opacity="0.3" />
      ))}

      <OffshoreTurbine x={400} baseY={700} scale={0.62} rotation={6} />
      <OffshoreTurbine x={1185} baseY={742} scale={1} rotation={10} />
    </svg>
  );
}

export default HeroIllustration;
