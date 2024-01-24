/* eslint-disable @next/next/no-img-element */

import Link from 'next/link';

interface CardProps {
	title?: string;
	image: string;
	icon?: string;
}

const Card = ({ title, image, icon }: CardProps) => {
	return (
		<Link href='' className='w-auto h-1/4 relative text-center'>
			<img
				src={image}
				alt={title + ' image'}
				className='absolute w-full h-full rounded-3xl'
			/>
			{icon && (
				<img
					src={icon}
					className='absolute top-4 left-4 h-14 w-14'
					alt={title + ' icon'}
				/>
			)}
			{title && (
				<h2 className='absolute text-4xl font-bold bottom-4 left-4 text-left text-white'>
					{title}
				</h2>
			)}
		</Link>
	);
};

export default Card;
