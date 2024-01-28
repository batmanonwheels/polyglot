/* eslint-disable @next/next/no-img-element */

import { cn } from "@/lib/utils";
import Link from "next/link";

interface CarouselItemProps {
  title: string;
  subtitle?: string;
  image: string;
  icon?: string;
  link?: string;
  type: "lesson" | "course";
  className?: React.ComponentProps<"a">["className"];
}

const CarouselItem = ({
  title,
  subtitle,
  image,
  icon,
  type,
  link,
  className,
}: CarouselItemProps) =>  {
  if (type === "course") {
    return (
      <Link
        href={link ? link : ""}
        className={cn(
          "flex aspect-[3/2] h-3/4 snap-center flex-col gap-1 text-center ",
          className,
        )}
      >
        <img
          src={image}
          alt={title + " image"}
          className="h-full w-full rounded-xl border "
        />
        <h2 className="w-full">{title}</h2>
      </Link>
    );
  }

  return (
    <Link
      href=""
      className="relative grid h-full snap-start grid-flow-row grid-rows-2 p-4 align-bottom"
    >
      <img
        src={image}
        alt={title}
        className="absolute -z-10 h-full w-full rounded-3xl"
      />
      {icon && (
        <img
          src={icon}
          className="row-start-1 h-8 w-8 rounded-full"
          alt={title + " icon"}
        />
      )}
      <div className="row-start-2 flex flex-col justify-end align-bottom">
        <h2 className="text-base font-extrabold">{title}</h2>
        {subtitle && <p className="truncate text-xs">{subtitle}</p>}
      </div>
    </Link>
  );
};

export default CarouselItem;
