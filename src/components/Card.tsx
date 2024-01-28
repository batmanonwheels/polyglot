/* eslint-disable @next/next/no-img-element */

import { cn } from '@/lib/utils';
import Link from 'next/link';

interface CardProps {
	title?: string;
	link?: string;
	image: string;
	icon?: string;
	className?: React.ComponentProps<'a'>['className'];
}

const Card = ({ title, link, image, icon, className }: CardProps) => {
	return (
		<Link
			href={link ? link : ''}
			className={cn(
				'relative grid h-1/4 w-auto grid-flow-row grid-rows-2 p-4 md:p-8 md:text-[400%]',
				className
			)}
		>
			<img
				src={image}
				alt={title + ' image'}
				className='absolute -z-10 h-full w-full rounded-3xl'
			/>
			{icon && (
				<img
					src={icon}
					className='row-start-1 h-12 w-12 rounded-full md:h-24 md:w-24'
					alt={title + ' icon'}
				/>
			)}
			{title && (
				<h2 className='row-start-2 flex flex-col justify-end text-left align-bottom text-4xl md:text-6xl font-bold text-white md:font-bold'>
					{title}
				</h2>
			)}
		</Link>
	);
};

export default Card;
