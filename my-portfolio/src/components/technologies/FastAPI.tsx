import React from 'react';

export default function FastAPI({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="12" fill="#009688" />
      <path
        d="M11.376 21.62v-7.528H7.19L13.203 2.38v7.528h4.029L11.376 21.62z"
        fill="#ffffff"
      />
    </svg>
  );
}
