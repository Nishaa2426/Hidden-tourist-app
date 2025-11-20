// src/pages/DestinationDetail.tsx

import * as React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { MapPin, Star, Calendar, Clock, DollarSign, ArrowLeft, Heart, Share2, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import kovai1 from "../assets/kovai-1.jpg";
import kovai2 from "../assets/Kovai-2.jpg";
import kovai3 from "../assets/Kovai-3.jpg";
import dindugal1 from "../assets/dindugal-1.jpg";
import ramanathapuram2 from "../assets/ramanathapuram-2.jpg";
import ramanathapuram3 from "../assets/ramanathapuram-3.jpg";
import ramanathapuram4 from "../assets/ramanathapuram-4.jpg";
import nilgiris1 from "../assets/nilgiris-1.jpg";
import nilgiris2 from "../assets/nilgiris-2.jpg";
import nilgiris3 from "../assets/nilgiris-3.jpg";
import nilgiris4 from "../assets/nilgiris-4.jpg";
import thanjavur1 from "../assets/thanjavur-1.jpg";
import thanjavur2 from "../assets/thanjavur-2.jpg";
import thanjavur3 from "../assets/thanjavur-3.jpg";
import thanjavur4 from "../assets/thanjavur-4.jpg";
import salem1 from "../assets/salem-1.jpg";
import salem2 from "../assets/salem-2.jpg";
import salem3 from "../assets/salem-3.jpg";
import salem4 from "../assets/salem-4.jpg";

// Types
interface Destination {
  id: string;
  title: string;
  location: string;
  description: string;
  image: string;
  rating: number;
  badge?: string;
  fullDescription: string;
  highlights: string[];
  bestTimeToVisit: string;
  activities: string[];
  gallery: string[];
  priceRange: string;
  duration: string;
  price: number;
}
// Sample Data - Replace with your actual data source
const destinations: Destination[] = [
  {
    id: "1",
    title: "Kovai Kutralam",
    location: "Coimbatore, India",
    description: "Kovai Kutralam Waterfalls - Roaming OwlsKovai Kutralam is a scenic waterfall in the Siruvani hills, located about 35 km from Coimbatore, Tamil Nadu",
    image: kovai1,
    rating: 4.8,
    badge: "Popular",
    fullDescription: "Kovai kutralam also known as siruvani water falls through world's 2nd sweetest water, best place to go with family and friends located at forest and best place for weekends plans",
    highlights: [
      "Sweetest Water in the World",
      "Located Inside Reserved Forest",
      "Crystal-Clear Waterfall",
      "Surrounded by Wildlife & Lush Green Hills",
      "Famous Weekend Spot Near Coimbatore"
    ],
    bestTimeToVisit: "June to January",
    activities: [
      "Enjoying the Waterfalls",
      "Forest Walk",
      "Photography",
      "Picnic with Family & Friends",
      "Nature Relaxation",
      "Visit Siruvani Dam"
    ],
    gallery: [
      kovai1,
      kovai2,
      kovai3,
    ],
    priceRange: "₹",
    duration: "3-5 days",
    price: 1299
  },
  {
    id: "2",
    title: "Ancient Hill Template",
    location: "Dindugal, India",
    description: "Dindugal (also spelled Dindigul) is a historic and culturally rich city in Tamil Nadu, known for its ancient temples, scenic hill ranges, and traditional craftsmanship. The city is crowned by the iconic Dindugal Rock Fort, a massive 17th-century hill fort that offers panoramic views of the entire region.",
    image: dindugal1,
    rating: 4.7,
    badge: "Trending",
    fullDescription: "At the heart of the city stands the iconic Dindugal Rock Fort, a massive rocky hill fort built during the Pandya period and later strengthened by Tipu Sultan",
     highlights: [
       "Sacred Shiva Lingam Hill",
      "Ancient Swayambhu Temple",
      "Mystical Legends & Siddhar Caves",
      "Traditional Balinese ceremonies and dances",
      "Hilltop Viewpoint"
    ],
    bestTimeToVisit: "October to February",
    activities: [
      "Temple visits and spiritual tours",
      "Surfing lessons for all skill levels",
      "Rice terrace trekking in Tegallalang",
      "Traditional Kecak dance performances",
      "Snorkeling and diving in crystal waters",
      "Yoga and meditation retreats"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800",
      "https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=800",
      "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=800",
      "https://images.unsplash.com/photo-1559628376-f3fe5f782a2e?w=800"
    ],
    priceRange: "₹",
    duration: "1.5 to 2 hours",
    price: 899
  },
  {
    id: "3",
    title: "Secret Beach Cove",
    location: "Ramanathapuram, India",
    description: "The Ramanathapuram District Tourism page mentions major spots like Rameswaram, Devipattinam, and Thiru Uthirakosamangai, but no “beach cave.”",
    image: ramanathapuram2,
    rating: 4.9,
    fullDescription: "White sand, blue sea, clean beach.. It's a hidden beach behind Vivekanadha Mandapam.. Its isolated so it's not advisable to go alone.. But it's a must visit place",
    highlights: [
      "Hidden & Untouched Beauty",
      "Crystal-Clear Shallow Waters",
      "Stunning Sunrise & Sunset Views",
      "Rich Marine Life Nearby",
      "Perfect for Photography"
    ],
    bestTimeToVisit: "November to February",
    activities: [
      "Beach Walking & Relaxing",
      "Sunrise & Sunset Watching",
      "Shell Collecting",
      "Meditation & Quiet Time",
      "Shallow Water Play",
      "Bird Watching"
    ],
    gallery: [
      ramanathapuram2,
      ramanathapuram3,
      ramanathapuram4,
    ],
    priceRange: "₹",
    duration: "1.5 to 2 Hours",
    price: 1599
  },
  {
    id: "4",
    title: "Mountains",
    location: "Nilgiris, India",
    description: "The Nilgiris, also known as the Blue Mountains, are a breathtaking mountain range located in the Western Ghats of Tamil Nadu. Famous for their mist-covered peaks, rolling green hills, lush tea estates, and cool climate, the Nilgiris are one of South India’s most loved hill regions.",
    image: nilgiris1,
    rating: 4.8,
    badge: "Classic",
    fullDescription: "Doddabetta is the highest mountain in the Nilgiri Mountains at 2,637 metres. There is a reserved forest area around the peak. It is 9 km from Ooty, on the Ooty-Kotagiri Road in the Nilgiris District of Tamil Nadu, India. It is a popular tourist attraction with road access to the summit",
    highlights: [
      "Mist-Covered Blue Mountains",
      "Beautiful Hill Stations",
      "Lush Tea Plantations",
      "Rich Wildlife & Forests",
      "Pleasant Weather All Year"
    ],
    bestTimeToVisit: "October to May",
    activities: [
      "Explore Tea Plantations",
      "Nilgiri Mountain Railway",
      "Trekking & Nature Trails",
      "Boating on Lakes",
      "Wildlife Spotting",
      "Camping & Bonfire"
    ],
    gallery: [
      nilgiris1,
      nilgiris2,
      nilgiris3,
      nilgiris4
    ],
    priceRange: "₹",
    duration: "2-3 days",
    price: 1399
  },
  {
    id: "5",
    title: "Heritage Fort",
    location: "Thanjavur, India",
    description: "Thanjavur is also known as Thanjai. This city was also known as Tanjore in the olden times and is an important centre of southern Indian religion, art, and architecture.",
    image: thanjavur1,
    rating: 4.6,
    badge: "Historic",
    fullDescription: "The ancient historical town of Thanjavur is located in the Indian state of Tamil Nadu and is situated in the Cauvery delta at a distance of about 350 km south-west of Chennai",
    highlights: [
      "UNESCO World Heritage Site",
      "Monolithic Nandi Statue",
      "Temple Built Entirely with Granites",
      "Shadow Mystery",
      "Pleasant Cultural Atmosphere"
    ],
    bestTimeToVisit: "October to March",
    activities: [
      "Explore the Temple Architecture",
      "Darshan & Spiritual Visit",
      "Attend Cultural Programs",
      "Visit the Temple Museum",
      "Evening Light Viewing",
      "View the Chola Frescoes"
    ],
    gallery: [
      thanjavur1,
      thanjavur2,
      thanjavur3,
      thanjavur4,
    ],
    priceRange: "₹",
    duration: "2–3 Hours",
    price: 0
  },
  {
    id: "6",
    title: "Eco Farm Stay",
    location: "Salem, India",
    description: "A beautiful lush green farm stay with farm actitivies.",
    image: salem1,
    rating: 4.9,
    badge: "Romantic",
    fullDescription: "The Salem district in Tamil Nadu is part of the Eastern Ghats, with scenic hills like the Pachamalai range and several forested eco-tourism spots One eco-tourism initiative in the region — the Mayambadi Eco Tourism site — offers nature-centric stays, trekking, and waterfalls.",
    highlights: [
      "Peaceful Nature Retreat",
      "Authentic Farm Experience",
      "Lush Green Surroundings",
      "Organic Farming Activities",
      "Stargazing Opportunities"
    ],
    bestTimeToVisit: "October to March",
    activities: [
      "Organic Farm Walks",
      "Bird Watching",
      "Nature Photography",
      "Cycling Around the Farm"
    ],
    gallery: [
      salem1,
      salem2,
      salem3,
      salem4
    ],
    priceRange: "₹",
    duration: "1-2 days",
    price: 2299
  }
];

// Helper function to get destination by ID
const getDestinationById = (id: string): Destination | undefined => {
  return destinations.find(dest => dest.id === id);
};

const DestinationDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = React.useState(0);
  const [isFavorite, setIsFavorite] = React.useState(false);
  
  const destination = id ? getDestinationById(id) : undefined;

  if (!destination) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center p-8">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Destination Not Found</h2>
          <p className="text-gray-600 mb-6 text-lg">
            The destination you're looking for doesn't exist or has been removed.
          </p>
          <Button onClick={() => navigate("/")} size="lg">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sticky Header */}
      <div className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Button 
            variant="ghost" 
            onClick={() => navigate(-1)}
            className="hover:bg-gray-100"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
          <div className="flex gap-2">
            <Button 
              variant="outline" 
              size="icon"
              onClick={() => setIsFavorite(!isFavorite)}
              className={isFavorite ? "text-red-500 border-red-500" : ""}
            >
              <Heart className={`w-5 h-5 ${isFavorite ? 'fill-red-500' : ''}`} />
            </Button>
            <Button variant="outline" size="icon">
              <Share2 className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Hero Image Gallery */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-8">
          {/* Main Image */}
          <div className="lg:col-span-3">
            <div className="relative h-96 lg:h-[600px] rounded-2xl overflow-hidden shadow-xl">
              <img
                src={destination.gallery[selectedImage]}
                alt={destination.title}
                className="w-full h-full object-cover"
              />
              {destination.badge && (
                <Badge className="absolute top-6 right-6 text-base px-4 py-2 shadow-lg">
                  {destination.badge}
                </Badge>
              )}
              {/* Image Counter */}
              <div className="absolute bottom-6 right-6 bg-black/70 text-white px-4 py-2 rounded-full text-sm">
                {selectedImage + 1} / {destination.gallery.length}
              </div>
            </div>
          </div>
          
          {/* Thumbnail Gallery */}
          <div className="grid grid-cols-4 lg:grid-cols-1 gap-4">
            {destination.gallery.map((img, idx) => (
              console.log("imgg",img),
              console.log("idxx",idx),
              <button
                key={idx}
                onClick={() => setSelectedImage(idx)}
                className={`relative h-24 lg:h-36 rounded-xl overflow-hidden transition-all ${
                  selectedImage === idx 
                    ? 'ring-4 ring-blue-500 scale-105' 
                    : 'hover:scale-105 hover:shadow-lg'
                }`}
              >
                <img
                  src={img}
                  alt={`${destination.title} ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
                {selectedImage === idx && (
                  <div className="absolute inset-0 bg-blue-500/20 flex items-center justify-center">
                    <Check className="w-6 h-6 text-white" />
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Title Section */}
            <div className="bg-white rounded-2xl p-8 shadow-md">
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">{destination.title}</h1>
              <div className="flex flex-wrap items-center gap-6 text-gray-600">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <span className="text-lg font-medium">{destination.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                  <span className="text-lg font-semibold">{destination.rating}</span>
                  <span className="text-gray-500">(2,847 reviews)</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <Card className="shadow-md">
              <CardContent className="pt-6">
                <h2 className="text-3xl font-bold mb-4">About This Destination</h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {destination.fullDescription}
                </p>
              </CardContent>
            </Card>

            {/* Highlights */}
            <Card className="shadow-md">
              <CardContent className="pt-6">
                <h2 className="text-3xl font-bold mb-6">Highlights</h2>
                <div className="space-y-4">
                  {destination.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-4 p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors">
                      <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-800 text-lg">{highlight}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Activities */}
            <Card className="shadow-md">
              <CardContent className="pt-6">
                <h2 className="text-3xl font-bold mb-6">Popular Activities</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {destination.activities.map((activity, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl hover:shadow-md transition-shadow border border-green-200"
                    >
                      <div className="w-3 h-3 bg-green-500 rounded-full flex-shrink-0" />
                      <span className="text-gray-800 font-medium">{activity}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* What's Included */}
            <Card className="shadow-md">
              <CardContent className="pt-6">
                <h2 className="text-3xl font-bold mb-6">What's Included</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Round-trip flights",
                    "Airport transfers",
                    "Hotel accommodation",
                    "Daily breakfast",
                    "Guided tours",
                    "Travel insurance",
                    "24/7 support",
                    "Local SIM card"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar - Booking Card */}
          <div className="space-y-6">
            <Card className="sticky top-24 shadow-xl border-2 border-blue-100">
              <CardContent className="pt-6 space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-6">Travel Information</h3>
                  
                  <div className="space-y-5">
                    <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                      <Calendar className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-sm text-gray-500 mb-1">Best Time to Visit</p>
                        <p className="text-gray-900 font-medium">{destination.bestTimeToVisit}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                      <Clock className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-sm text-gray-500 mb-1">Recommended Duration</p>
                        <p className="text-gray-900 font-medium">{destination.duration}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                      <DollarSign className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-sm text-gray-500 mb-1">Price Range</p>
                        <p className="text-gray-900 font-medium">{destination.priceRange}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t-2">
                  <div className="text-center mb-6">
                    <p className="text-sm text-gray-500 mb-2">Starting from</p>
                    <div className="flex items-baseline justify-center gap-2">
                      <span className="text-5xl font-bold text-blue-600">
                        ${destination.price}
                      </span>
                      <span className="text-gray-500">/person</span>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <Button className="w-full py-6 text-lg font-semibold" size="lg">
                      Book Now
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full py-6 text-lg font-semibold border-2" 
                      size="lg"
                    >
                      Contact Us
                    </Button>
                  </div>

                  <p className="text-center text-sm text-gray-500 mt-4">
                    Free cancellation up to 48 hours before departure
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Additional Info Card */}
            <Card className="shadow-md bg-gradient-to-br from-blue-50 to-indigo-50">
              <CardContent className="pt-6">
                <h3 className="font-bold text-lg mb-3">Need Help Planning?</h3>
                <p className="text-gray-700 mb-4">
                  Our travel experts are here to help you create the perfect itinerary.
                </p>
                <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
                  Chat with Expert
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationDetail;