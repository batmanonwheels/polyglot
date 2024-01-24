/* eslint-disable @next/next/no-img-element */

import Link from 'next/link';

interface CarouselItemProps {
	title: string;
	subtitle?: string;
	image: string;
	icon?: string;
	link?: string;
	type: 'lesson' | 'course';
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
				className='h-[100px] aspect-[3/2] text-center snap-center flex flex-col gap-3'
			>
				<img
					src={image}
					alt={title + ' image'}
					className='w-full h-24 rounded-xl border'
				/>
				<h2 className='w-full'>{title}</h2>
			</Link>
		);
	}

	return (
		<Link
			href=''
			className='h-full aspect-square relative text-center snap-start'
		>
			<img src={image} alt='' className='absolute w-full h-full rounded-3xl' />
			{icon && (
				<img
					src={icon}
					className='absolute top-4 left-4 h-10 w-10'
					alt={title + ' icon'}
				/>
			)}
			<div className='absolute w-auto h-auto flex flex-col bottom-4 left-4 text-left'>
				<h2 className='text-xl font-extrabold '>{title}</h2>
				{subtitle && <p className='text-base'>{subtitle}</p>}
			</div>
		</Link>
	);
};

export default CarouselItem;
