"use client";

import NextLink from "next/link";
import { ReactNode } from "react";

type LinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  isActive?: boolean;
  isNextLink?: boolean;
};

export default function Link({
  className = "",
  href,
  isActive = false,
  isNextLink = false,
  children,
}: LinkProps) {
  const baseStyles = `
    relative inline-flex items-center
    text-gray-200
    transition-all duration-300
    ${!isActive ? `
      after:absolute
      after:left-0
      after:bottom-0
      after:h-[1px]
      after:w-full
      after:bg-stone-300
      after:z-[1]
      before:absolute
      before:left-0
      before:bottom-0
      before:h-[1px]
      before:w-full
      before:bg-stone-800
      before:opacity-0
      before:z-[2]
      hover:before:opacity-100
      hover:text-white
      hover:before:[animation:sweep_2s_ease-in-out_infinite]
    ` : ""}
    ${className}
  `.trim();

  return (
    <>
      <style jsx global>{`
        @keyframes sweep {
          0% {
            transform: scaleX(0);
            transform-origin: left;
          }
          50% {
            transform: scaleX(1);
            transform-origin: left;
          }
          50.1% {
            transform: scaleX(1);
            transform-origin: right;
          }
          100% {
            transform: scaleX(0);
            transform-origin: right;
          }
        }
      `}</style>

      {isNextLink ? (
        <NextLink href={href} className={baseStyles}>
          {children}
        </NextLink>
      ) : (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={baseStyles}
        >
          {children}
        </a>
      )}
    </>
  );
}
