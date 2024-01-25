/* eslint-disable @next/next/no-img-element */

import { cn } from '@/lib/utils';
import Link from 'next/link';

interface CardProps {
	title?: string;
	image: string;
	icon?: string;
	className?: React.ComponentProps<'a'>['className'];
}

const Card = ({ title, image, icon, className }: CardProps) => {
	return (
		<Link
			href=''
			className={cn('w-auto h-1/4 relative text-center', className)}
		>
			<img
				src={image}
				alt={title + ' image'}
				className='absolute w-full h-full rounded-3xl'
			/>
			{icon && (
				<img
					src={icon}
					className='absolute top-4 left-4 h-12 w-12'
					alt={title + ' icon'}
				/>
			)}
			{title && (
				<h2 className='absolute text-3xl font-bold bottom-2 left-4 text-left text-white'>
					{title}
				</h2>
			)}
		</Link>
	);
};

export default Card;
