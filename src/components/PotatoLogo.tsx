import { useEffect, useState } from "react";

export const PotatoLogo = ({ className = "h-7 w-7" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 32 32"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {/* steam wisp */}
    <path d="M14 5c0 1.5 1 2 1 3.5S14 10 14 11.5" opacity="0.7" />
    <path d="M18 4.5c0 1.5 1 2 1 3.5s-1 2-1 3.5" opacity="0.5" />
    {/* potato silhouette - irregular rounded rect */}
    <path
      d="M9 14.5c0-3.6 2.8-6.5 7.2-6.5 4.6 0 7.3 2.8 7.3 6.4 0 1.6-.2 3.2-.6 4.8-.7 2.7-2.8 4.8-6.7 4.8-4.2 0-6.3-2.1-6.9-4.7-.4-1.6-.3-3.3-.3-4.8z"
      fill="currentColor"
      fillOpacity="0.12"
    />
    {/* small cut on top */}
    <path d="M14 10.5c1 .8 2.5 1 3.8.5" opacity="0.6" />
  </svg>
);
