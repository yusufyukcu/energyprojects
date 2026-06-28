function Logo({ className = "h-8 w-8" }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M16 16C13 13 13 5 16 2C19 5 19 13 16 16Z" fill="#1C3FB0" />
      <path
        d="M16 16C13 13 13 5 16 2C19 5 19 13 16 16Z"
        fill="#2954D6"
        transform="rotate(120 16 16)"
      />
      <path
        d="M16 16C13 13 13 5 16 2C19 5 19 13 16 16Z"
        fill="#2F9D6C"
        transform="rotate(240 16 16)"
      />
    </svg>
  );
}

export default Logo;
