/* eslint-disable @next/next/no-img-element */

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
}: CarouselItemProps) => {
	if (type === 'course') {
		return (
			<Link
				href={link ? link : ''}
				className='h-3/4 aspect-[3/2] text-center snap-center flex flex-col gap-1'
			>
				<img
					src={image}
					alt={title + ' image'}
					className='w-full h-full rounded-xl border'
				/>
				<h2 className='w-full'>{title}</h2>
			</Link>
		);
	}

	return (
		<Link href='' className='aspect-square relative text-center snap-start'>
			<img src={image} alt='' className='absolute w-full h-full rounded-3xl' />
			{icon && (
				<img
					src={icon}
					className='absolute top-3 left-3 h-8 w-8'
					alt={title + ' icon'}
				/>
			)}
			<div className='absolute inset-0 flex flex-col text-left justify-end pl-2 pb-3'>
				<h2 className='text-base font-extrabold'>{title}</h2>
				{subtitle && <p className='text-xs truncate'>{subtitle}</p>}
			</div>
		</Link>
	);
};

export default CarouselItem;
