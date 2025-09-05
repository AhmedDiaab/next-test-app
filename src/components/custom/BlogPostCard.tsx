import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

type BlogPostCardProps = {
  title: string;
  description: string;
  imageUrl: string;
  author: string;
  date: string;
  href: string;
};

export default function BlogPostCard ({
  title,
  description,
  imageUrl,
  author,
  date,
  href,
}: BlogPostCardProps) {
  return (
    <Card className="group transition-shadow hover:shadow-md">
      <Link href={href} className="block">
        <CardHeader className="p-0">
          <div className="relative h-48 w-full overflow-hidden rounded-t-md">
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </CardHeader>
        <CardContent className="p-4">
          <CardTitle className="text-lg font-semibold">{title}</CardTitle>
          <p className="mt-2 text-sm text-muted-foreground">{description}</p>
        </CardContent>
        <CardFooter className="flex justify-between px-4 pb-4 text-xs text-muted-foreground">
          <span>{author}</span>
          <span>{date}</span>
        </CardFooter>
      </Link>
    </Card>
  );
};