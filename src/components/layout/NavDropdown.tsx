"use client";

import Link from "next/link";
import {
  useId,
  useState,
  type FocusEvent,
  type KeyboardEvent,
} from "react";
import type { NavItem } from "@/types/portfolio";

interface NavDropdownProps {
  label: string;
  href: string;
  links: NavItem[];
}

export function NavDropdown({ label, href, links }: NavDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const menuId = useId();

  function handleBlur(event: FocusEvent<HTMLDivElement>) {
    if (!event.currentTarget.contains(event.relatedTarget)) setIsOpen(false);
  }

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === "Escape") setIsOpen(false);
    if (event.key === "ArrowDown" && !isOpen) {
      event.preventDefault();
      setIsOpen(true);
    }
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      onFocus={() => setIsOpen(true)}
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
    >
      <Link
        href={href}
        aria-expanded={isOpen}
        aria-controls={menuId}
        className="inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition duration-200 hover:text-foreground focus-visible:outline-2 focus-visible:outline-accent"
      >
        {label}
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`size-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </Link>

      <div id={menuId} hidden={!isOpen} className="absolute top-full left-0 pt-2">
        <ul className="min-w-44 rounded-lg border border-border bg-surface p-1 shadow-md motion-safe:animate-fade-up">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block rounded-md px-3 py-2 text-sm text-muted-foreground transition duration-200 hover:bg-muted hover:text-foreground focus-visible:outline-2 focus-visible:outline-accent"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
