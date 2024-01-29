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
				'wgrid-flow-row relative grid h-3/6 w-full grid-cols-2 grid-rows-2 rounded-3xl px-7 py-7 text-center',
				className
			)}
		>
			<img
				src={image}
				alt={title + ' image'}
				className='absolute -z-10 h-full w-full rounded-3xl object-cover'
			/>
			<div className='row-span-1 col-span-2 flex flex-col gap-2 text-left h-fit'>
				<h2 className='text-3xl font-bold md:text-8xl'>{title}</h2>
				<p className='w-full truncate text-xl md:text-4xl'>{subtitle}</p>
			</div>
			<Link
				className='col-start-2 row-span-1 row-start-2 w-40 self-end justify-self-end rounded-3xl bg-black p-3 text-xl font-bold text-white sm:w-1/2 md:text-4xl md:w-3/5 md:p-6 md:rounded-full'
				href={''}
			>
				Start lesson
			</Link>
		</div>
	);
};

export default FeaturedLesson;
