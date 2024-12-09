"use client";

import Image from "next/image";
import Link from "next/link";

interface QuickLink {
  text: string;
  href: string;
}

const quickLinks: QuickLink[] = [
  {
    text: "Fine Dining",
    href: "/places-to-eat/experiences/fine-dining-restaurants",
  },
  {
    text: "Padel Courts",
    href: "/things-to-do/sports-fitness/facilities/padel-courts",
  },
  {
    text: "Best Malls",
    href: "/things-to-do/shopping/malls",
  },
];

export function HeroSection() {
  return (
    <div className="relative bg-[#0A1D3B] py-24 px-4">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/50 to-blue-950/80" />
      <div className="relative max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <Image
            src="/logo-light.svg"
            alt="Best Capetown"
            width={240}
            height={72}
            className="mx-auto mb-8"
          />
          <h1 className="text-6xl font-bold text-white mb-6">
            Discover Capetown
          </h1>
        </div>
        
        <p className="text-xl text-gray-200 mb-12 max-w-2xl mx-auto">
          Discover the best things to do in Capetown, scored by public reviews,
          expert tastings, and social signals.
        </p>

        <div className="flex flex-col items-center space-y-4">
          <span className="text-gray-300">Try</span>
          <div className="flex flex-wrap justify-center gap-3">
            {quickLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                <span>"{link.text}"</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}