import { cn } from "@/lib/utils";

interface MainProps {
  className?: React.ComponentProps<"div">["className"];
  children: React.ReactNode;
}

export const Main = ({className, children}: MainProps) => {

	return(<section className={cn("flex h-[calc(100svh-8rem)] w-full flex-col gap-3 px-5 py-2 md:h-[calc(100svh-5rem)] max-w-7xl mx-auto ", className)}>{children}</section>)
}
