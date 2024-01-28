/* eslint-disable @next/next/no-img-element */
import Card from '@/components/Card';
import CourseSelector from '@/components/CourseSelector';
import Header from '@/components/Header';
import Content from '@/components/Content';
import Main from '@/components/Main';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

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
		<Main>
			<Header text={'Review'} />
			<Content className=' md:h-[calc(100svh+1rem)] '>
				<CourseSelector />
				<div className='flex h-1/2 flex-col justify-between gap-2 md:w-full md:gap-0'>
					<h2 className='text-2xl font-bold  md:text-6xl md:font-extrabold'>
						Practice tools
					</h2>
					<div className='flex flex-1 flex-col gap-2 md:flex-row md:w-full md:gap-4 md:items-center'>
						<Card
							className='h-1/2 md:h-3/4 md:w-1/2'
							title='Conversation'
							image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-7iWgixkGSzAHt8VnqoPJdRW-e-UqHLgm-GfUC9CywA&s'
						/>
						<Card
							className='h-1/2 md:h-3/4  md:w-1/2'
							title='Listen'
							image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-7iWgixkGSzAHt8VnqoPJdRW-e-UqHLgm-GfUC9CywA&s'
						/>
					</div>
				</div>
				<div className='flex h-1/2 flex-col gap-2 md:w-full md:gap-4'>
					<h2 className='text-2xl font-bold md:text-6xl md:font-extrabold'>
						My collections
					</h2>
					<div className='flex flex-1 flex-col gap-1 md:flex-row md:gap-4 md:items-center'>
						<Card
							className='h-1/2 md:h-3/4  md:w-1/2'
							title='Vocab list'
							image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-7iWgixkGSzAHt8VnqoPJdRW-e-UqHLgm-GfUC9CywA&s'
						/>
						<Card
							className='h-1/2 md:h-3/4  md:w-1/2'
							title='Mistakes'
							image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-7iWgixkGSzAHt8VnqoPJdRW-e-UqHLgm-GfUC9CywA&s'
						/>
					</div>
				</div>
			</Content>
			<Footer />
		</Main>
	);
}
