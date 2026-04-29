import React from "react";

export default function Footer() {
  return (
    <footer className="mb-10 mt-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs tracking-wide">
        &copy; 2025 Ayoub. All rights reserved.
      </small>
      <p className="mx-auto max-w-2xl text-xs leading-6">
        <span className="font-semibold">About this website:</span> built with
        React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS,
        Framer Motion, React Email & Resend, Vercel hosting.
      </p>
    </footer>
  );
}
