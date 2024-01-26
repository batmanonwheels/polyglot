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
				'grid grid-flow-col grid-cols-[repeat(4,_40%)] w-full overflow-x-scroll overflow-y-hidden h-36 gap-4 snap-x',
				className
			)}
		>
			{children}
		</div>
	);
};

export default Carousel;
