import * as React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Package, Shield, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import DestinationCard from "@/components/DestinationCard";
import heroBg from "@/assets/hero-bg.jpg";
import destination1 from "@/assets/destination-1.jpg";
import destination2 from "@/assets/destination-2.jpg";
import destination3 from "@/assets/destination-3.jpg";

const Index = () => {
  const featuredDestinations = [
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
  ];

  const features = [
    {
      icon: MapPin,
      title: "Hidden Locations",
      description: "Explore secret spots across all 38 districts of Tamil Nadu",
    },
    {
      icon: Package,
      title: "Curated Packages",
      description: "Carefully designed tours for authentic experiences",
    },
    {
      icon: Shield,
      title: "Safe & Secure",
      description: "Verified locations with complete safety measures",
    },
    {
      icon: Star,
      title: "Expert Guides",
      description: "Local guides who know every hidden corner",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section with Animated Background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/30 to-background z-10" />
          <img
            src={heroBg}
            alt="Tamil Nadu Landscapes"
            className="w-full h-full object-cover animate-ken-burns"
          />
        </div>

        <div className="relative z-20 container mx-auto px-4 text-center animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Discover Hidden Tamil Nadu
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-3xl mx-auto">
            Explore the unexplored. Find secret destinations across all districts of Tamil Nadu that
            locals cherish and travelers dream about.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="hero" size="lg">
              <Link to="/destinations">
                Explore Destinations <ArrowRight className="ml-2" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-2">
              <Link to="/packages">View Packages</Link>
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float z-20">
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-primary rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Why Choose Thirai Thedal?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We bring you closer to Tamil Nadu's best-kept secrets
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-card border border-border hover:shadow-[var(--shadow-card)] transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary-glow mb-4">
                  <feature.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Destinations Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Featured Hidden Spots</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Handpicked destinations that showcase the untouched beauty of Tamil Nadu
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredDestinations.map((destination, index) => (
              <div
                key={destination.id}
                className="animate-scale-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <DestinationCard {...destination} />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button asChild variant="hero" size="lg">
              <Link to="/destinations">
                View All Destinations <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary-glow to-accent relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-5" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-6 text-primary-foreground">
            Ready to Start Your Adventure?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Sign up now and unlock access to exclusive hidden destinations across Tamil Nadu
          </p>
          <Button
            asChild
            size="lg"
            className="bg-background text-primary hover:bg-background/90 shadow-lg"
          >
            <Link to="/auth">Get Started Today</Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-card border-t border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="p-2 rounded-lg bg-gradient-to-br from-primary to-primary-glow">
                  <MapPin className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  THIRAI THEDAL
                </span>
              </div>
              <p className="text-muted-foreground mb-4">
                Discover the hidden gems of Tamil Nadu with expertly curated tours and authentic
                local experiences.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-foreground">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/destinations" className="text-muted-foreground hover:text-primary transition-colors">
                    Destinations
                  </Link>
                </li>
                <li>
                  <Link to="/packages" className="text-muted-foreground hover:text-primary transition-colors">
                    Packages
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                    About Us
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-foreground">Contact</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>Email: info@thiraithedal.com</li>
                <li>Phone: +91 12345 67890</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-border text-center text-muted-foreground">
            <p>&copy; 2025 Thirai Thedal. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
