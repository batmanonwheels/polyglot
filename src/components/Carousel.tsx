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
				'flex w-full overflow-x-scroll overflow-y-hidden h-1/5 gap-4 snap-x',
				className
			)}
		>
			{children}
		</div>
	);
};

export default Carousel;
