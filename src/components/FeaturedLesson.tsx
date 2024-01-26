/* eslint-disable @next/next/no-img-element */

import { cn } from '@/lib/utils';
import Link from 'next/link';

interface FeaturedLessonProps {
	title: string;
	subtitle: string;
	image: string;
	className?: React.ComponentProps<'div'>['className'];
}

const FeaturedLesson = ({
	title,
	subtitle,
	image,
	className,
}: FeaturedLessonProps) => {
	return (
		<div
			className={cn(
				'w-full h-3/6 text-center relative rounded-3xl grid wgrid-flow-row grid-cols-2 grid-rows-2 px-4 py-7',
				className
			)}
		>
			<img
				src={image}
				alt={title + ' image'}
				className='absolute w-full h-full rounded-3xl -z-10'
			/>
			<div className='flex flex-col row-span-2 text-left top-5 left-5'>
				<h2 className='text-2xl font-bold '>{title}</h2>
				<p className='text-lg w-full truncate'>{subtitle}</p>
			</div>
			<Link
				className='self-end w-40 col-start-2 row-span-1 row-start-2 p-3 text-xl font-bold text-white bg-black rounded-3xl justify-self-end sm:w-1/2'
				href={''}
			>
				Start lesson
			</Link>
		</div>
	);
};

export default FeaturedLesson;
