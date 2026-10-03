"use client";

import Link from "next/link";
import { useState, type KeyboardEvent } from "react";
import type { NavItem } from "@/types/portfolio";

interface MobileNavProps {
  items: NavItem[];
}

export function MobileNav({ items }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === "Escape") setIsOpen(false);
  }

  return (
    <div className="md:hidden" onKeyDown={handleKeyDown}>
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls="mobile-nav"
        onClick={() => setIsOpen((open) => !open)}
        className="inline-flex size-11 items-center justify-center rounded-lg border border-border transition duration-200 hover:bg-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        <span className="sr-only">{isOpen ? "Close menu" : "Open menu"}</span>
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          className="size-5"
        >
          {isOpen ? (
            <path d="M6 6l12 12M18 6L6 18" />
          ) : (
            <path d="M4 7h16M4 12h16M4 17h16" />
          )}
        </svg>
      </button>

      <nav
        id="mobile-nav"
        aria-label="Mobile"
        hidden={!isOpen}
        className="absolute inset-x-0 top-full border-b border-border bg-background shadow-sm"
      >
        <ul className="mx-auto flex max-w-5xl flex-col px-5 py-2 sm:px-8">
          {items.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block rounded-md py-3 font-medium text-muted-foreground transition duration-200 hover:text-foreground focus-visible:outline-2 focus-visible:outline-accent"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
