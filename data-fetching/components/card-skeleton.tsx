import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

import React from "react";

const CardSkeleton = () => {
  return (
    <Card className="max-w-sm cursor-default hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <CardTitle className="truncate">
          <Skeleton className="w-full h-5" />
        </CardTitle>
        <CardDescription>
          <Skeleton className="w-full h-5" />
        </CardDescription>
        <CardAction className="font-bold ml-2">
          <Skeleton className="w-full h-5" />
        </CardAction>
      </CardHeader>
      <CardContent className="relative m-auto aspect-auto w-20 h-20 px-6">
        <Skeleton className="w-full h-20" />
      </CardContent>
      <CardFooter>
        <Skeleton className="w-full h-5" />
      </CardFooter>
    </Card>
  );
};

export default CardSkeleton;
