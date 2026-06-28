type IconProps = { className?: string };

export function Icon({ name, className }: { name: string; className?: string }) {
  const map: Record<string, ReturnType<typeof Compression>> = {
    compression: <Compression className={className} />,
    minerals: <Minerals className={className} />,
    comfort: <Comfort className={className} />,
    steady: <Steady className={className} />,
  };
  return map[name] ?? <Steady className={className} />;
}

const base = "h-6 w-6";

export function Compression({ className = base }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 3h6l-1 7a4 4 0 0 1-4 0L9 3Z" />
      <path d="M10 12l-1 6 1 3M14 12l1 6-1 3" />
    </svg>
  );
}

export function Minerals({ className = base }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3c4 4.5 6 7.5 6 10.5A6 6 0 0 1 6 13.5C6 10.5 8 7.5 12 3Z" />
      <path d="M9.5 14a2.5 2.5 0 0 0 2.5 2.5" />
    </svg>
  );
}

export function Comfort({ className = base }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 20s-7-4.3-7-9a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 4.7-7 9-7 9Z" />
    </svg>
  );
}

export function Steady({ className = base }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3v18M5 8l7-5 7 5M7 21h10" />
    </svg>
  );
}

export function Star({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="m12 2 2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17l-5.9 3 1.2-6.5L2.5 8.9 9 8l3-6Z" />
    </svg>
  );
}

export function Check({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export function Plus({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

export function ChevronDown({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}
