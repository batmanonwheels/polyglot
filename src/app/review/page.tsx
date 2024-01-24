/* eslint-disable @next/next/no-img-element */
import Header from '@/components/Header';
import NavBar from '@/components/NavBar';
import Card from '@/components/Card';
import CarouselItem from '@/components/CarouselItem';
import FeaturedLesson from '@/components/FeaturedLesson';
import LessonCarousel from '@/components/Carousel';
import Image from 'next/image';
import Link from 'next/link';
import CourseSelector from '@/components/CourseSelector';

export default function Review() {
	return (
		<main className='flex max-h-screen max-w-[100vw] overflow-visible flex-col items-center justify-between '>
			<Header text={'Review'} />
			<section className='h-[calc(100vh-160px)] w-full px-5 py-4 flex flex-col gap-4'>
				<CourseSelector />
				<h2 className='text-4xl font-bold'>Practice Tools</h2>
				<Card
					title='Conversation'
					image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-7iWgixkGSzAHt8VnqoPJdRW-e-UqHLgm-GfUC9CywA&s'
				/>
				<Card
					title='Listen'
					image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-7iWgixkGSzAHt8VnqoPJdRW-e-UqHLgm-GfUC9CywA&s'
				/>
				<h2 className='text-4xl font-bold'>My Collections</h2>
				<Card
					title='Vocab list'
					image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-7iWgixkGSzAHt8VnqoPJdRW-e-UqHLgm-GfUC9CywA&s'
				/>
				<Card
					title='Mistakes'
					image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-7iWgixkGSzAHt8VnqoPJdRW-e-UqHLgm-GfUC9CywA&s'
				/>
			</section>
			<NavBar />
		</main>
	);
}
