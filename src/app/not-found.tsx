import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";

export default function NotFound() {
  return (
    <section className="section-padding min-h-screen flex flex-col justify-center items-center text-center">
      <FadeIn>
        <h1 className="heading-xl mb-6">404</h1>
        <p className="text-muted text-lg mb-12 max-w-md">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="text-sm px-6 py-3 rounded-full bg-foreground text-background hover:opacity-80 transition-opacity"
        >
          Back to Home
        </Link>
      </FadeIn>
    </section>
  );
}
