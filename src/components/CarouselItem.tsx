/* eslint-disable @next/next/no-img-element */

import { cn } from '@/lib/utils';
import Link from 'next/link';

interface CarouselItemProps {
	title: string;
	subtitle?: string;
	image: string;
	icon?: string;
	link?: string;
	type: 'lesson' | 'course';
	className?: React.ComponentProps<'a'>['className'];
}

const CarouselItem = ({
	title,
	subtitle,
	image,
	icon,
	type,
	link,
	className,
}: CarouselItemProps) => {
	if (type === 'course') {
		return (
			<Link
				href={link ? link : ''}
				className={cn(
					'h-3/4 aspect-[3/2] text-center snap-center flex flex-col gap-1 ',
					className
				)}
			>
				<img
					src={image}
					alt={title + ' image'}
					className='w-full h-full border rounded-xl '
				/>
				<h2 className='w-full'>{title}</h2>
			</Link>
		);
	}

	return (
		<Link
			href=''
			className='relative snap-start grid grid-flow-row grid-rows-2 p-4 align-bottom h-full'
		>
			<img
				src={image}
				alt={title}
				className='absolute rounded-3xl -z-10 h-full w-full'
			/>
			{icon && (
				<img
					src={icon}
					className='row-start-1 w-8 h-8 rounded-full'
					alt={title + ' icon'}
				/>
			)}
			<div className='row-start-2 flex flex-col align-bottom justify-end'>
				<h2 className='text-base font-extrabold'>{title}</h2>
				{subtitle && <p className='text-xs truncate'>{subtitle}</p>}
			</div>
		</Link>
	);
};

export default CarouselItem;
