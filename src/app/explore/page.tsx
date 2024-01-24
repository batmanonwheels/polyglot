/* eslint-disable @next/next/no-img-element */
import Header from '@/components/Header';
import NavBar from '@/components/NavBar';
import Card from '@/components/Card';
import CarouselItem from '@/components/CarouselItem';
import FeaturedLesson from '@/components/FeaturedLesson';
import Carousel from '@/components/Carousel';
import Image from 'next/image';
import Link from 'next/link';
import CourseSelector from '@/components/CourseSelector';

export default function Explore() {
	return (
		<main className='flex max-h-screen max-w-[100vw] overflow-visible flex-col items-center justify-between '>
			<Header text={'Explore'} />
			<section className='h-[calc(100vh-160px)] w-full px-5 py-4 flex flex-col gap-4'>
				<CourseSelector />
			</section>
			<NavBar />
		</main>
	);
}
