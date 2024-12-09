"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin, Star } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";

interface Restaurant {
  id: string;
  name: string;
  image: string;
  location: string;
  googleMapsUrl: string;
  priceRange: string;
  cuisine: string;
  rating: number;
}

interface RestaurantSectionProps {
  restaurants: Restaurant[];
}

export function RestaurantSection({ restaurants }: RestaurantSectionProps) {
  return (
    <section className="py-8">
      <div className="max-w-[1200px] mx-auto px-4">
        <SectionHeader 
          title="Award Winning Restaurants"
          seeAllLink="/restaurants"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {restaurants.map((restaurant) => (
            <div key={restaurant.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden">
              <div className="relative h-44">
                <div className="absolute top-3 left-3 flex gap-2">
                  <div className="bg-[#003B95] rounded-full px-3 py-1 flex items-center gap-1.5">
                    <div className="w-3 h-3 bg-white rounded-full" />
                    <span className="text-xs font-medium text-white">Best 100</span>
                  </div>
                  <div className="bg-white/90 backdrop-blur-sm rounded-full w-7 h-7 flex items-center justify-center">
                    <Image
                      src="/michelin-star.svg"
                      alt="Michelin Star"
                      width={16}
                      height={16}
                    />
                  </div>
                </div>
                <Image
                  src={restaurant.image}
                  alt={restaurant.name}
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="p-4">
                <Link href={`/restaurants/${restaurant.id}`}>
                  <h3 className="text-base font-medium text-gray-900 mb-1.5">
                    {restaurant.name}
                  </h3>
                </Link>
                
                <div className="flex items-center text-gray-500 mb-3">
                  <MapPin className="w-3.5 h-3.5 mr-1" />
                  <Link href={restaurant.googleMapsUrl} className="text-sm hover:text-gray-700">
                    {restaurant.location}
                  </Link>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2 text-gray-600">
                    <span>{restaurant.priceRange}</span>
                    <span>•</span>
                    <span>{restaurant.cuisine}</span>
                  </div>
                  
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 mr-1" />
                    <span className="font-medium">{restaurant.rating.toFixed(2)}</span>
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