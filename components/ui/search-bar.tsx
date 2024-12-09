"use client";

import { Search } from "lucide-react";

export function SearchBar() {
  return (
    <div className="relative flex items-center max-w-xl w-full">
      <div className="absolute left-4">
        <Search className="w-5 h-5 text-gray-400" />
      </div>
      <input
        type="text"
        placeholder="Search Capetown"
        className="w-full py-2.5 pl-12 pr-4 bg-gray-100 hover:bg-gray-200/70 focus:bg-white border border-transparent focus:border-gray-300 rounded-full outline-none transition-colors"
      />
      <div className="absolute right-4 text-sm text-gray-400">/</div>
    </div>
  );
}