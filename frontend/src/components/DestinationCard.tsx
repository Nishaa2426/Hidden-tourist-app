import * as React from "react";
import { Link } from "react-router-dom";
import { MapPin, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface DestinationCardProps {
  id: string;
  title: string;
  location: string;
  description: string;
  image: string;
  rating: number;
  badge?: string;
}

const DestinationCard: React.FC<DestinationCardProps> = ({
  id,
  title,
  location,
  description,
  image,
  rating,
  badge,
}) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        {badge && (
          <Badge className="absolute top-4 right-4" variant="default">
            {badge}
          </Badge>
        )}
      </div>
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="flex items-center gap-2">
          <MapPin className="w-4 h-4" />
          {location}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex items-center gap-2 mb-4">
          <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
          <span className="font-semibold">{rating}</span>
        </div>
      </CardContent>
      <CardFooter>
        <Link to={`/destinations/${id}`} className="w-full">
          <Button className="w-full">View Details</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default DestinationCard;

