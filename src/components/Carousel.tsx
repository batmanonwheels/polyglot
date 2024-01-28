//'use client'

import { cn } from "@/lib/utils";

interface CarouselProps {
  id?: string;
  className?: React.ComponentProps<"div">["className"];
  children: React.ReactNode;
}

const Carousel = ({ id, className, children }: CarouselProps) => {
  return (
    <div
      id={id}
      className={cn(
        "grid h-36 w-full snap-x grid-flow-col grid-cols-[repeat(4,_40%)] gap-4 overflow-y-hidden overflow-x-scroll md:grid-cols-[repeat(4, 25%)]",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Carousel;
