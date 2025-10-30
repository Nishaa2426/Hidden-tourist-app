import * as React from "react";
import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users, MapPin, Check } from "lucide-react";
import { Link } from "react-router-dom";

const Packages = () => {
  const packages = [
    {
      id: "1",
      title: "Coastal Heritage Trail",
      duration: "5 Days / 4 Nights",
      groupSize: "Max 12 People",
      price: "₹12,999",
      description: "Explore hidden beaches, ancient temples, and fishing villages along the Tamil Nadu coast.",
      highlights: [
        "Visit 3 secret beach coves",
        "Traditional fishing village experience",
        "Seafood cooking class",
        "Beachside camping",
      ],
      badge: "Popular",
    },
    {
      id: "2",
      title: "Hill Station Discovery",
      duration: "4 Days / 3 Nights",
      groupSize: "Max 10 People",
      price: "₹15,999",
      description: "Journey through misty mountains, tea estates, and tribal villages in the Western Ghats.",
      highlights: [
        "Trek to hidden waterfalls",
        "Tea plantation tour",
        "Tribal village homestay",
        "Wildlife spotting",
      ],
      badge: "Adventure",
    },
    {
      id: "3",
      title: "Temple Circuit Exclusive",
      duration: "6 Days / 5 Nights",
      groupSize: "Max 15 People",
      price: "₹10,999",
      description: "Discover lesser-known temples and spiritual sites across central Tamil Nadu.",
      highlights: [
        "Visit 8 hidden temples",
        "Traditional rituals experience",
        "Local cuisine tasting",
        "Heritage walks",
      ],
      badge: "Cultural",
    },
    {
      id: "4",
      title: "Rural Immersion",
      duration: "3 Days / 2 Nights",
      groupSize: "Max 8 People",
      price: "₹8,999",
      description: "Experience authentic village life with farming, pottery, and traditional crafts.",
      highlights: [
        "Farm-to-table meals",
        "Pottery workshop",
        "Bullock cart rides",
        "Village festival experience",
      ],
      badge: "Authentic",
    },
    {
      id: "5",
      title: "Wildlife & Nature",
      duration: "4 Days / 3 Nights",
      groupSize: "Max 12 People",
      price: "₹18,999",
      description: "Explore forests, sanctuaries, and nature reserves off the beaten path.",
      highlights: [
        "Safari in hidden reserves",
        "Bird watching tours",
        "Nature photography",
        "Eco-lodge stays",
      ],
      badge: "Nature",
    },
    {
      id: "6",
      title: "Food Trail Adventure",
      duration: "3 Days / 2 Nights",
      groupSize: "Max 10 People",
      price: "₹9,999",
      description: "A culinary journey through Tamil Nadu's hidden food gems and local eateries.",
      highlights: [
        "Street food tours",
        "Cooking classes",
        "Local market visits",
        "Home-cooked meals",
      ],
      badge: "Foodie",
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
              Tour Packages
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Carefully curated experiences for authentic Tamil Nadu adventures
            </p>
          </div>

          {/* Packages Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {packages.map((pkg, index) => (
              <Card
                key={pkg.id}
                className="border-border/50 hover:shadow-[var(--shadow-elegant)] transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <CardTitle className="text-2xl text-foreground">{pkg.title}</CardTitle>
                    {pkg.badge && (
                      <Badge className="bg-accent text-accent-foreground">{pkg.badge}</Badge>
                    )}
                  </div>
                  <p className="text-muted-foreground">{pkg.description}</p>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div className="grid grid-cols-3 gap-4 py-4 border-y border-border">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span className="text-sm font-medium">{pkg.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-primary" />
                      <span className="text-sm font-medium">{pkg.groupSize}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span className="text-sm font-medium">Multi-city</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-foreground">Highlights</h4>
                    <ul className="space-y-2">
                      {pkg.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div>
                      <p className="text-sm text-muted-foreground">Starting from</p>
                      <p className="text-3xl font-bold text-primary">{pkg.price}</p>
                      <p className="text-xs text-muted-foreground">per person</p>
                    </div>
                    <Button asChild variant="hero" size="lg">
                      <Link to={`/booking?package=${pkg.id}`}>Book Now</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Packages;
