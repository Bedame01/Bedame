"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/data/site";
import { ThemeToggle } from "./ThemeToggle";

import CustomButton from "@/components/kokonutui/CustomButton/CustomButton";

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background">
      <div className="container-wide flex items-center justify-between h-20 px-6 md:px-8 lg:px-20">
        <Link href="/" className="text-display text-4xl! font-medium link-hover uppercase">
          {siteConfig.name}
        </Link>

        <nav className="hidden md:flex items-center gap-6 lg:gap-12 lg:ml-10">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-base font-medium link-hover ${
                pathname === item.href ? "text-foreground" : "text-muted"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-8 lg:gap-12">
          <CustomButton 
              text="Let's Talk" 
              // hoverText="Book a Table" 
              href="/contact" 
              variant="ghost" 
              className="min-w-35! py-5 px-1 text-center"
          />
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col gap-1.5 w-9"
            aria-label="Toggle menu"
          >
            {/* <span
              className={`block h-0.5 bg-foreground transition-transform ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            /> */}
            <span
              className={`block h-0.5 bg-foreground transition-transform ${
                menuOpen ? "-rotate-20 translate-y-1" : ""
              }`}
            />
            <span
              className={`block h-0.5 bg-foreground transition-transform ${
                menuOpen ? "rotate-20 -translate-y-1" : ""
              }`}
            />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden min-h-screen bg-background border-t border-border overflow-hidden flex items-start justify-center"
          >
            <nav className="flex flex-col justify-center items-center px-6 py-8 gap-4.5 mt-20">
              {siteConfig.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`text-5xl! hover:text-muted text-display font-medium uppercase ${
                    pathname === item.href ? "text-muted" : "text-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              {/* <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="text-2xl text-display font-medium"
              >
                Let&apos;s Talk
              </Link> */}
              <CustomButton 
                text="Let's Talk" 
                // hoverText="Book a Table" 
                onClick={() => setMenuOpen(false)}
                href="/contact" 
                variant="primary" 
                className="min-w-35! text-xl mt-8 py-6 px-1 text-center"
              />
              <p className="text-xs font-medium mt-5 text-muted/60 text-center uppercase">@Bedame Visuals 🎨💻</p>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
