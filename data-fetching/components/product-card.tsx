import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image, { ImageProps } from "next/image";
import AddCartBtn from "./add-cart-btn";
import Link from "next/link";

type Props = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  imageProps?: Omit<ImageProps, "src" | "alt">;
};

const ProductCard = ({
  id,
  title,
  image,
  price,
  category,
  imageProps,
}: Props) => {
  return (
    <Card className="max-w-sm cursor-default hover:shadow-lg transition-shadow duration-300">
      <Link href={`/products/${id}`}>
        <CardHeader>
          <CardTitle className="truncate">{title}</CardTitle>
          <CardDescription>{category}</CardDescription>
          <CardAction className="font-bold ml-2">${price}</CardAction>
        </CardHeader>
        <CardContent className="relative m-auto aspect-auto w-20 h-20 px-6">
          <Image src={image} alt={title} fill {...imageProps} />
        </CardContent>
      </Link>
      <CardFooter>
        <AddCartBtn />
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
