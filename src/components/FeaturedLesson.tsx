/* eslint-disable @next/next/no-img-element */

import { cn } from "@/lib/utils";
import Link from "next/link";

interface FeaturedLessonProps {
  title: string;
  subtitle: string;
  image: string;
  className?: React.ComponentProps<"div">["className"];
}

const FeaturedLesson = ({
  title,
  subtitle,
  image,
  className,
}: FeaturedLessonProps) => {
  return (
    <div
      className={cn(
        "wgrid-flow-row relative grid h-3/6 w-full grid-cols-2 grid-rows-2 rounded-3xl px-4 py-7 text-center",
        className,
      )}
    >
      <img
        src={image}
        alt={title + " image"}
        className="absolute -z-10 h-full w-full rounded-3xl"
      />
      <div className="left-5 top-5 row-span-2 flex flex-col text-left">
        <h2 className="text-2xl font-bold ">{title}</h2>
        <p className="w-full truncate text-lg">{subtitle}</p>
      </div>
      <Link
        className="col-start-2 row-span-1 row-start-2 w-40 self-end justify-self-end rounded-3xl bg-black p-3 text-xl font-bold text-white sm:w-1/2"
        href={""}
      >
        Start lesson
      </Link>
    </div>
  );
};

export default FeaturedLesson;
