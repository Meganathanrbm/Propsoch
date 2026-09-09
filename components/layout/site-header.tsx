"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";
import {
  ChevronDownIcon,
  CloseIcon,
  HeartIcon,
  MenuIcon,
  SearchIcon,
  ShareIcon,
  WhatsAppIcon,
} from "@/components/ui/icons";
import { navMenu } from "@/lib/content";
import type { NavLink } from "@/lib/types";
import { cn } from "@/lib/utils";

const iconButtonClasses =
  "inline-flex h-9 w-9 items-center justify-center rounded-md text-coolgrey-90 hover:bg-primarylight hover:text-primary-ink";

function NavDropdownLink({
  link,
  className,
}: {
  link: NavLink;
  className: string;
}) {
  return (
    <Link
      href="#"
      className={className}
      {...(link.external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : null)}
    >
      <span className="flex w-full items-center justify-between gap-2">
        <span className="text-sm font-medium text-coolgrey-100">
          {link.label}
        </span>
        {link.badge && (
          <span className="rounded-full bg-primarylight px-2 py-[3px] text-[10px] font-semibold text-primary-ink">
            {link.badge}
          </span>
        )}
      </span>
      {link.description && (
        <span className="mt-1 block text-xs leading-[1.2rem] text-muted">
          {link.description}
        </span>
      )}
    </Link>
  );
}

function ShareButton() {
  return (
    <button
      type="button"
      className={iconButtonClasses}
      aria-label="Share this page"
    >
      <ShareIcon />
      <span aria-live="polite" className="sr-only"></span>
    </button>
  );
}

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [mobileSection, setMobileSection] = useState<string | null>(null);
  const [pinned, setPinned] = useState(false);

  const navId = useId();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const desktopNavRef = useRef<HTMLUListElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const heroSection = document.getElementById("hero-section");
    if (!heroSection) {
      setPinned(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;
        setPinned(!entry.isIntersecting && entry.boundingClientRect.top < 0);
      },
      { threshold: 0 },
    );

    observer.observe(heroSection);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (menuOpen && !dialog.open) dialog.showModal();
    if (!menuOpen && dialog.open) dialog.close();
  }, [menuOpen]);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
    menuButtonRef.current?.focus();
  }, []);

  useEffect(() => {
    if (!openSection) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      setOpenSection(null);
      desktopNavRef.current
        ?.querySelector<HTMLButtonElement>("[aria-expanded='true']")
        ?.focus();
    }

    function onPointerDown(event: PointerEvent) {
      if (desktopNavRef.current?.contains(event.target as Node)) return;
      setOpenSection(null);
    }

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [openSection]);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-100 flex w-full flex-col items-center transition-[background-color,box-shadow] duration-300 ease-out",
          pinned ? "bg-background shadow-md" : "bg-surface-soft",
        )}
      >
        <nav
          className="flex w-full max-w-(--breakpoint-xl) items-center justify-between px-4 py-3 md:px-8 xl:px-0 xl:py-4"
          aria-label="Main"
        >
          <Link
            href="/"
            aria-label="Propsoch home"
            className="flex items-center"
          >
            <Logo className="h-6 w-auto xl:h-8" />
          </Link>

          {/* Desktop nav */}
          <ul ref={desktopNavRef} className="hidden items-center gap-1 xl:flex">
            {navMenu.map((section) => {
              const panelId = `${navId}-${section.heading.toLowerCase()}`;
              const open = openSection === section.heading;
              return (
                <li
                  key={section.heading}
                  className="relative"
                  onMouseEnter={() => setOpenSection(section.heading)}
                  onMouseLeave={() =>
                    setOpenSection((current) =>
                      current === section.heading ? null : current,
                    )
                  }
                >
                  <button
                    type="button"
                    aria-expanded={open}
                    aria-controls={panelId}
                    onClick={() =>
                      setOpenSection(open ? null : section.heading)
                    }
                    className="inline-flex h-9 w-max cursor-pointer items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium hover:bg-primarylight hover:text-accent-foreground"
                  >
                    {section.heading}
                    <ChevronDownIcon
                      className={cn(
                        "relative top-px ml-1 size-3 transition duration-300",
                        open && "rotate-180",
                      )}
                    />
                  </button>
                  {open && (
                    <div
                      id={panelId}
                      className="border-lightborder bg-background absolute left-0 top-full z-50 w-80 rounded-xl border p-2 shadow-lg"
                    >
                      <p className="text-muted px-4 pt-2 pb-1 text-[10px] font-semibold tracking-wide uppercase">
                        {section.heading}
                      </p>
                      <div className="flex flex-col gap-1">
                        {section.links.map((link) => (
                          <NavDropdownLink
                            key={link.label}
                            link={link}
                            className="rounded-lg px-4 py-3 hover:bg-primarylight"
                          />
                        ))}
                      </div>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-1 xl:gap-2">
            <Link
              href="#"
              aria-label="Search properties"
              className={iconButtonClasses}
            >
              <SearchIcon />
            </Link>
            <div className="hidden xl:flex xl:items-center xl:gap-1">
              <ShareButton />
              <Link
                href="#"
                aria-label="Saved properties"
                className={iconButtonClasses}
              >
                <HeartIcon />
              </Link>
            </div>

            <Button href="#" size="sm" className="hidden xl:inline-flex">
              Get Started
            </Button>

            <button
              ref={menuButtonRef}
              type="button"
              aria-label="Open navigation menu"
              aria-expanded={menuOpen}
              aria-haspopup="dialog"
              onClick={() => setMenuOpen(true)}
              className="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-md xl:hidden"
            >
              <MenuIcon />
            </button>
          </div>
        </nav>
      </header>

      <dialog
        ref={dialogRef}
        onClose={() => setMenuOpen(false)}
        onClick={(event) => {
          if (event.target === dialogRef.current) closeMenu();
        }}
        aria-label="Site navigation"
        className="hide-scrollbar bg-background m-0 ml-auto h-dvh max-h-none w-[88vw] max-w-sm overflow-y-auto p-0 shadow-lg backdrop:bg-black/50 xl:hidden"
      >
        {menuOpen && (
          <div className="flex flex-col gap-4 p-4">
            <div className="flex items-center justify-between">
              <Logo className="h-6 w-auto" />
              <button
                type="button"
                onClick={closeMenu}
                aria-label="Close navigation menu"
                className={iconButtonClasses}
              >
                <CloseIcon />
              </button>
            </div>

            <Button href="#" size="md" className="flex w-full">
              Get Started
            </Button>

            <ul className="flex flex-col gap-3">
              {navMenu.map((section) => {
                const panelId = `${navId}-m-${section.heading.toLowerCase()}`;
                const open = mobileSection === section.heading;
                return (
                  <li
                    key={section.heading}
                    className="border-lightborder border-b pb-3 last:border-none"
                  >
                    <button
                      type="button"
                      aria-expanded={open}
                      aria-controls={panelId}
                      className="flex w-full cursor-pointer items-center justify-between py-2 text-sm font-semibold"
                      onClick={() =>
                        setMobileSection(open ? null : section.heading)
                      }
                    >
                      {section.heading}
                      <ChevronDownIcon
                        className={cn("transition", open && "rotate-180")}
                      />
                    </button>
                    <ul
                      id={panelId}
                      hidden={!open}
                      className="flex flex-col gap-2 pt-2"
                    >
                      {section.links.map((link) => (
                        <li
                          key={link.label}
                          className="bg-primarylight w-full rounded-xl"
                        >
                          <NavDropdownLink
                            link={link}
                            className="block px-4 py-3"
                          />
                        </li>
                      ))}
                    </ul>
                  </li>
                );
              })}
              <li>
                <Link href="#" className="block py-2 text-sm font-semibold">
                  Sign In
                </Link>
              </li>
            </ul>
          </div>
        )}
      </dialog>
    </>
  );
}
