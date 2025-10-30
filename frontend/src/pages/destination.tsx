import * as React from "react";
import Navbar from "@/components/Navbar";
import DestinationCard from "@/components/DestinationCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter } from "lucide-react";
import destination1 from "@/assets/destination-1.jpg";
import destination2 from "@/assets/destination-2.jpg";
import destination3 from "@/assets/destination-3.jpg";

const Destinations = () => {
  const allDestinations = [
    {
      id: "1",
      title: "Hidden Waterfalls",
      location: "Coimbatore District",
      description: "Discover pristine waterfalls nestled in lush green forests, away from the tourist crowds.",
      image: destination1,
      rating: 4.8,
      badge: "Hidden Gem",
    },
    {
      id: "2",
      title: "Ancient Hill Temple",
      location: "Dindigul District",
      description: "Experience the mystical atmosphere of ancient temples hidden in the hills of Tamil Nadu.",
      image: destination2,
      rating: 4.9,
      badge: "Cultural",
    },
    {
      id: "3",
      title: "Secret Beach Cove",
      location: "Ramanathapuram District",
      description: "Relax on pristine beaches untouched by commercialization, perfect for peaceful getaways.",
      image: destination3,
      rating: 4.7,
      badge: "Serene",
    },
    {
      id: "4",
      title: "Mountain Village",
      location: "Nilgiris District",
      description: "Experience traditional village life in the misty mountains with breathtaking views.",
      image: destination1,
      rating: 4.6,
      badge: "Adventure",
    },
    {
      id: "5",
      title: "Heritage Fort",
      location: "Thanjavur District",
      description: "Explore lesser-known forts with rich history and architectural marvels.",
      image: destination2,
      rating: 4.8,
      badge: "Historical",
    },
    {
      id: "6",
      title: "Eco Farm Stay",
      location: "Salem District",
      description: "Immerse yourself in organic farming and rural Tamil Nadu lifestyle.",
      image: destination3,
      rating: 4.5,
      badge: "Nature",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in-up">
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Hidden Destinations
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore secret spots across all 38 districts of Tamil Nadu
            </p>
          </div>

          {/* Search and Filter */}
          <div className="max-w-4xl mx-auto mb-12 animate-fade-in">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  placeholder="Search destinations..."
                  className="pl-10 h-12"
                />
              </div>
              <Button variant="outline" size="lg" className="sm:w-auto">
                <Filter className="w-5 h-5 mr-2" />
                Filters
              </Button>
            </div>
          </div>

          {/* Destinations Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allDestinations.map((destination, index) => (
              <div
                key={destination.id}
                className="animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <DestinationCard {...destination} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destinations;
