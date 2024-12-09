"use client";

import Image from "next/image";
import Link from "next/link";

interface SectionHeaderProps {
  title: string;
  seeAllLink: string;
}

export function SectionHeader({ title, seeAllLink }: SectionHeaderProps) {
  return (
    <div className="flex justify-between items-center mb-6">
      <div className="flex items-center gap-3">
        <Image
          src="/emblem.svg"
          alt="Best Capetown"
          width={24}
          height={24}
          className="w-6 h-6"
        />
        <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
      </div>
      <Link
        href={seeAllLink}
        className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900"
      >
        <span>See All</span>
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="m22.414 10.586-7-7a2 2 0 0 0-2.828 2.828l3.586 3.586h-13.172a2 2 0 0 0 0 4h13.172l-3.586 3.586a2 2 0 1 0 2.828 2.828l7-7a2 2 0 0 0 0-2.828z" />
        </svg>
      </Link>
    </div>
  );
}