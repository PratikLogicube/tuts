import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";

type Props = {
  title: string;
  imageUrl: string;
  price: number;
  category: string;
};

const ProductCard = ({ title, imageUrl, price, category }: Props) => {
  return (
    <Card className="max-w-sm hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <CardTitle className="truncate">{title}</CardTitle>
        <CardDescription>{category}</CardDescription>
        <CardAction className="font-bold ml-2">${price}</CardAction>
      </CardHeader>
      <CardContent className="relative m-auto aspect-auto w-20 h-20 px-6">
        <Image src={imageUrl} alt={title} fill />
      </CardContent>
      <CardFooter>
        <Button className="cursor-pointer">Add To Cart +</Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
