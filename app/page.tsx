import { HeroSection } from "@/components/home/HeroSection";
import { PlacesSection } from "@/components/home/PlacesSection";
import { RestaurantSection } from "@/components/home/RestaurantSection";
import { Footer } from "@/components/layout/Footer";

const demoPlaces = [
  {
    id: "dubai-mall",
    name: "The Dubai Mall",
    image: "https://cdn.prod.website-files.com/66ea98adc4621bf417aa311c/67237d68fc92b0e27f0e46d9_Dubai%20mall%20expansion%201.webp",
    location: "Downtown Dubai",
    googleMapsUrl: "https://maps.google.com/?q=25.1972295,55.279747",
    isOpen: true,
    priceRange: "$$$",
    category: "Lifestyle Malls",
    rating: 9.12,
    badges: {
      isGem: true,
      isBest100: true,
    },
  },
];

const demoRestaurants = [
  {
    id: "hoseki",
    name: "Hōseki",
    image: "https://cdn.prod.website-files.com/66ea98adc4621bf417aa311c/restaurant_image.webp",
    location: "Downtown Dubai",
    googleMapsUrl: "https://maps.google.com/?q=25.1972295,55.279747",
    priceRange: "$$$",
    cuisine: "Japanese",
    rating: 9.46,
  },
];

export default function Home() {
  return (
    <main>
      <HeroSection />
      <PlacesSection 
        title="Shop at the Best Malls"
        places={demoPlaces}
      />
      <RestaurantSection 
        restaurants={demoRestaurants}
      />
      <Footer />
    </main>
  );
}