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
					'flex snap-center flex-col gap-1 text-center align-middle h-28',
					className
				)}
			>
				<img
					src={image}
					alt={title + ' image'}
					className='w-full rounded-xl border object-cover'
				/>
				<h2 className='w-full text-sm'>{title}</h2>
			</Link>
		);
	}

	return (
		<Link
			href=''
			className='relative grid h-[90%] snap-start grid-flow-row grid-rows-2 p-4 align-bottom '
		>
			<img
				src={image}
				alt={title}
				className='absolute -z-10 h-full w-full rounded-3xl object-cover'
			/>
			{icon && (
				<img
					src={icon}
					className='row-start-1 h-8 w-8 rounded-full md:h-14 md:w-14'
					alt={title + ' icon'}
				/>
			)}
			<div className='row-start-2 flex flex-col justify-end align-bottom'>
				<h2 className='text-lg font-extrabold md:text-3xl'>{title}</h2>
				{subtitle && (
					<p className='truncate text-xs md:text-base'>{subtitle}</p>
				)}
			</div>
		</Link>
	);
};

export default CarouselItem;
