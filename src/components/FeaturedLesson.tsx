/* eslint-disable @next/next/no-img-element */

import Link from 'next/link';

interface FeaturedLessonProps {
	title: string;
	subtitle: string;
	image: string;
}

const FeaturedLesson = ({ title, subtitle, image }: FeaturedLessonProps) => {
	return (
		<div className='w-full aspect-square relative text-center '>
			<img
				src={image}
				alt={title + ' image'}
				className='absolute w-full h-full rounded-3xl'
			/>
			<div className='absolute w-auto h-auto flex flex-col top-7 left-5 text-left'>
				<h2 className='text-3xl font-bold '>{title}</h2>
				<p className='text-xl'>{subtitle}</p>
			</div>
			<Link
				className='absolute right-8 bottom-8 w-40 p-4 rounded-full bg-black text-white text-xl font-bold'
				href={''}
			>
				Start lesson
			</Link>
		</div>
	);
};

export default FeaturedLesson;
