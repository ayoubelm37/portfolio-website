import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <div className="mb-10 text-center">
      <h2 className="text-3xl font-semibold capitalize tracking-tight sm:text-4xl">
        {children}
      </h2>
      <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500" />
    </div>
  );
}
