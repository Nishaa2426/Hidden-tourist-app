import * as React from "react";
import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Award, Globe } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Authentic Experiences",
      description: "We believe in showcasing the real Tamil Nadu, beyond tourist hotspots.",
    },
    {
      icon: Users,
      title: "Community First",
      description: "Supporting local communities and promoting sustainable tourism.",
    },
    {
      icon: Award,
      title: "Quality Service",
      description: "Committed to providing exceptional experiences every single time.",
    },
    {
      icon: Globe,
      title: "Cultural Preservation",
      description: "Helping preserve Tamil Nadu's rich heritage for future generations.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in-up max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              About Thirai Thedal
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We're passionate about unveiling the hidden treasures of Tamil Nadu - the places that
              don't make it to typical travel guides but hold the essence of our rich culture and
              heritage.
            </p>
          </div>

          {/* Mission Section */}
          <Card className="mb-16 border-border/50 shadow-[var(--shadow-elegant)] animate-scale-in">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-6 text-foreground">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Thirai Thedal, meaning "Screen Search" or "Hidden Discovery," was born from a simple
                idea: Tamil Nadu has countless beautiful places that remain unknown to most travelers.
                From secret waterfalls to ancient temples tucked away in remote villages, from pristine
                beaches to misty mountain hamlets - these gems deserve to be discovered responsibly.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We work closely with local communities across all 38 districts of Tamil Nadu to create
                authentic travel experiences that benefit both travelers and local populations. Every
                destination we feature has been personally verified and curated by our team of local
                experts.
              </p>
            </CardContent>
          </Card>

          {/* Values */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-foreground">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card
                  key={index}
                  className="text-center border-border/50 hover:shadow-[var(--shadow-card)] transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary-glow mb-4">
                      <value.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Team Section */}
          <Card className="border-border/50 bg-gradient-to-br from-primary/5 to-accent/5">
            <CardContent className="p-8 md:p-12 text-center">
              <h2 className="text-3xl font-bold mb-6 text-foreground">Join Our Journey</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-3xl mx-auto">
                Whether you're a Tamil Nadu native looking to rediscover your homeland or a traveler
                seeking authentic experiences, we invite you to join us in exploring the hidden
                corners of this beautiful state. Let's preserve and promote Tamil Nadu's incredible
                heritage together.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;
