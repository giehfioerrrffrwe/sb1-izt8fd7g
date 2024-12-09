"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { SearchBar } from "@/components/ui/search-bar";

interface NavLink {
  href: string;
  icon: string;
  label: string;
  count: number;
}

const navLinks: NavLink[] = [
  {
    href: "/places-to-eat",
    icon: "/icons/restaurants.svg",
    label: "Restaurants",
    count: 17,
  },
  {
    href: "/places-to-stay",
    icon: "/icons/hotels.svg",
    label: "Hotels",
    count: 17,
  },
];

export function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 gap-8">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center">
              <div className="w-8 h-8 relative">
                <Image
                  src="/logo.png"
                  alt="Best Capetown"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>

            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:text-gray-900"
              >
                <span className="font-medium">Explore</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isDropdownOpen && (
                <div className="absolute left-0 mt-1 w-64 bg-white rounded-lg shadow-lg border animate-in fade-in slide-in-from-top-2">
                  <div className="py-2">
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="flex items-center justify-between px-4 py-3 hover:bg-gray-50"
                      >
                        <div className="flex items-center space-x-3">
                          <div className="w-5 h-5 relative">
                            <Image
                              src={link.icon}
                              alt={link.label}
                              fill
                              className="object-contain"
                            />
                          </div>
                          <span className="text-gray-700">{link.label}</span>
                        </div>
                        <span className="text-sm text-gray-500">{link.count}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center gap-4 flex-1 justify-center">
            <SearchBar />
          </div>

          <div className="flex items-center gap-4">
            <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full transition-colors">
              Submit
            </button>
            <button className="flex items-center gap-2 text-gray-700 hover:text-gray-900">
              <Image
                src="https://lh3.googleusercontent.com/a/default-user"
                alt="Google Login"
                width={24}
                height={24}
                className="rounded-full"
              />
              <span>Login</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}