"use client";

import Link from "next/link";
import { siteConfig } from "@/data/site";

export function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="border-t border-border section-padding pb-8!">
      <div className="container-wide">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <div>
            <Link href="/" className="text-display text-2xl! md:text-3xl! uppercase font-medium link-hover">
              ©{siteConfig.name}
            </Link>
            <p className="text-muted text-sm mt-4 max-w-xs">
              {siteConfig.description}
            </p>
          </div>

          <div>
            <p className="text-lg text-foreground mb-4 uppercase font-semibold font-mono">Navigation</p>
            <nav className="flex flex-col gap-2">
              {siteConfig.nav.map((item) => (
                <Link key={item.href} href={item.href} className="text-base link-hover">
                  {item.label}
                </Link>
              ))}
              <Link href="/contact" className="text-base link-hover">
                Contact
              </Link>
            </nav>
          </div>

          <div>
            <p className="text-lg text-foreground mb-4 uppercase font-semibold font-mono">Social</p>
            <nav className="flex flex-col gap-2">
              {siteConfig.socials.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base link-hover font-medium"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="flex flex-col items-start md:items-end justify-between">
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-lg font-semibold font-mono link-hover"
            >
              {siteConfig.email}
            </a>
            {/* <button
              onClick={scrollToTop}
              className="text-sm text-muted link-hover mt-8"
            >
              Back to Top ↑
            </button> */}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex sm:flex-row justify-center gap-4 text-sm text-muted">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          {/* <p>Built with Next.js</p> */}
        </div>
      </div>
    </footer>
  );
}
