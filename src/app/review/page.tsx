/* eslint-disable @next/next/no-img-element */
import { Metadata } from 'next';

import Header from '@/components/Header';
import CourseSelector from '@/components/CourseSelector';
import NavBar from '@/components/NavBar';
import Card from '@/components/Card';

export const metadata: Metadata = {
	title: 'Review | Polyglot',
	description: 'Your passport to global communication!',
	openGraph: {
		title: 'Review | Polyglot',
		description: 'Your passport to global communication!',
	},
	twitter: {
		title: 'Review | Polyglot',
		description: 'Your passport to global communication!',
	},
};

export default function Review() {
	return (
		<main className='flex max-h-[100svh] max-w-[100vw] overflow-visible flex-col items-center justify-between '>
			<Header text={'Review'} />
			<section className='h-[calc(100svh-8rem)] w-full px-5 py-2 flex flex-col gap-3'>
				<CourseSelector />
				<div className='flex flex-col h-1/2 gap-2'>
					<h2 className='flex-1 text-2xl font-bold'>Practice Tools</h2>
					<Card
						className='h-1/2'
						title='Conversation'
						image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-7iWgixkGSzAHt8VnqoPJdRW-e-UqHLgm-GfUC9CywA&s'
					/>
					<Card
						className='h-1/2'
						title='Listen'
						image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-7iWgixkGSzAHt8VnqoPJdRW-e-UqHLgm-GfUC9CywA&s'
					/>
				</div>
				<div className='flex flex-col h-1/2 gap-1'>
					<h2 className='text-2xl font-bold'>My Collections</h2>
					<Card
						className='h-1/2'
						title='Vocab list'
						image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-7iWgixkGSzAHt8VnqoPJdRW-e-UqHLgm-GfUC9CywA&s'
					/>
					<Card
						className='h-1/2'
						title='Mistakes'
						image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-7iWgixkGSzAHt8VnqoPJdRW-e-UqHLgm-GfUC9CywA&s'
					/>
				</div>
			</section>
			<NavBar />
		</main>
	);
}
