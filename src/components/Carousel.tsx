//'use client'

import { cn } from '@/lib/utils';

interface CarouselProps {
	id?: string;
	className?: React.ComponentProps<'div'>['className'];
	children: React.ReactNode;
}

const Carousel = ({ id, className, children }: CarouselProps) => {
	return (
		<div
			id={id}
			className={cn(
				'grid h-36 grid-cols-[repeat(4,_40%)] w-full snap-x grid-flow-col gap-4 items-center overflow-y-hidden overflow-x-scroll',
				className
			)}
		>
			{children}
		</div>
	);
};

export default Carousel;
