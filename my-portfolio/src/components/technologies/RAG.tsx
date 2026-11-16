import React from 'react';

export default function RAG({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5v14c0 1.66 4.03 3 9 3 1.5 0 2.91-.12 4.14-.35" />
      <path d="M3 12c0 1.66 4.03 3 9 3 1.05 0 2.06-.06 3-.18" />
      <circle cx="18" cy="18" r="3" />
      <path d="m21.5 21.5-1.5-1.5" />
    </svg>
  );
}
