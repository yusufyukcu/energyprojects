interface YoutubeIconProps {
  size?: number;
  strokeWidth?: number;
  className?: string;
}

function YoutubeIcon({ size = 20, strokeWidth = 1.8, className = "" }: YoutubeIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="2" y="5" width="20" height="14" rx="5" />
      <path d="M10.5 9.2L15.3 12L10.5 14.8Z" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default YoutubeIcon;
