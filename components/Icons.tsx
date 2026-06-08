"use client";

/* Small inline UI icons (currentColor). Keeps the bundle tiny — no icon lib. */

export const ArrowRight = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2}>
    <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const Download = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2}>
    <path d="M12 4v11m0 0 4-4m-4 4-4-4M5 19h14" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const ArrowUpRight = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2}>
    <path d="M7 17 17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const Mail = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
    <path d="M4 6h16v12H4z M4 7l8 6 8-6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const Phone = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
    <path
      d="M5 4h4l2 5-3 2a11 11 0 0 0 5 5l2-3 5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const LinkedIn = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
    <path
      d="M6 9v9M6 6v0M11 18v-5a2 2 0 0 1 4 0v5M11 11v7M18 18v-4a3 3 0 0 0-3-3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Globe = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
    <circle cx="12" cy="12" r="9" />
    <path
      d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Pin = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
    <path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11z" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);

export const Upwork = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.56 6.02c-2.22 0-3.94 1.45-4.72 3.86-.66-1.27-1.19-2.72-1.55-4.18H9.78v6.9c0 1.45-.67 2.34-1.86 2.34s-1.9-.89-1.9-2.34V5.7H3.5v6.98c0 2.83 1.76 4.57 4.42 4.57s4.38-1.74 4.38-4.57v-1.11c.4.8.88 1.55 1.43 2.21l-1.41 6.02h2.57l1.02-4.42c.82.43 1.7.66 2.62.66 2.77 0 4.72-2.08 4.72-5.01s-1.95-5.01-4.69-5.01Zm-.02 7.72c-.67 0-1.31-.2-1.9-.58l.12-.53c.43-1.91 1.09-4.33 2.78-4.33 1.22 0 2.06 1.08 2.06 2.73s-.84 2.71-2.06 2.71Z" />
  </svg>
);
