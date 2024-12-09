"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin, Star } from "lucide-react";

interface Place {
  id: string;
  name: string;
  image: string;
  location: string;
  googleMapsUrl: string;
  isOpen: boolean;
  priceRange: string;
  category: string;
  rating: number;
  badges: {
    isGem: boolean;
    isBest100: boolean;
  };
}

interface PlacesSectionProps {
  title: string;
  places: Place[];
}

export function PlacesSection({ title, places }: PlacesSectionProps) {
  return (
    <section className="py-8">
      <div className="max-w-[1200px] mx-auto px-4">
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
            href="#"
            className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900"
          >
            <span>See All</span>
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="m22.414 10.586-7-7a2 2 0 0 0-2.828 2.828l3.586 3.586h-13.172a2 2 0 0 0 0 4h13.172l-3.586 3.586a2 2 0 1 0 2.828 2.828l7-7a2 2 0 0 0 0-2.828z" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {places.map((place) => (
            <div key={place.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden">
              <div className="relative h-44">
                {(place.badges.isGem || place.badges.isBest100) && (
                  <div className="absolute top-3 left-3 flex gap-2">
                    {place.badges.isGem && (
                      <div className="bg-[#D6006E] rounded-full px-3 py-1 flex items-center gap-1.5">
                        <div className="w-3 h-3 bg-white rounded-full" />
                        <span className="text-xs font-medium text-white">Gem</span>
                      </div>
                    )}
                    {place.badges.isBest100 && (
                      <div className="bg-[#003B95] rounded-full px-3 py-1 flex items-center gap-1.5">
                        <div className="w-3 h-3 bg-white rounded-full" />
                        <span className="text-xs font-medium text-white">Best 100</span>
                      </div>
                    )}
                  </div>
                )}
                <Image
                  src={place.image}
                  alt={place.name}
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="p-4">
                <Link href={`/place/${place.id}`}>
                  <h3 className="text-base font-medium text-gray-900 mb-1.5">
                    {place.name}
                  </h3>
                </Link>
                
                <div className="flex items-center text-gray-500 mb-3">
                  <MapPin className="w-3.5 h-3.5 mr-1" />
                  <Link href={place.googleMapsUrl} className="text-sm hover:text-gray-700">
                    {place.location}
                  </Link>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2 text-gray-600">
                    <span className={`${place.isOpen ? 'text-green-500' : 'text-red-500'}`}>
                      {place.isOpen ? 'Open' : 'Closed'}
                    </span>
                    <span>•</span>
                    <span>{place.priceRange}</span>
                    <span>•</span>
                    <span>{place.category}</span>
                  </div>
                  
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 mr-1" />
                    <span className="font-medium">{place.rating.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}