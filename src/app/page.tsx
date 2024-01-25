/* eslint-disable @next/next/no-img-element */
import Header from '@/components/Header';
import CourseSelector from '@/components/CourseSelector';
import Card from '@/components/Card';
import CarouselItem from '@/components/CarouselItem';
import FeaturedLesson from '@/components/FeaturedLesson';
import Carousel from '@/components/Carousel';
import NavBar from '@/components/NavBar';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
	return (
		<main className='flex max-h-[100svh] max-w-[100vw] overflow-hidden flex-col justify-between relative'>
			<Header text={'Hi, Kathryn'} />
			<section className='h-[calc(100svh-8rem)] w-full px-5 py-2 flex flex-col gap-3'>
				<CourseSelector />
				<FeaturedLesson
					title='Lesson 1'
					subtitle='¡Hola y bienvenido!'
					image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-7iWgixkGSzAHt8VnqoPJdRW-e-UqHLgm-GfUC9CywA&s'
				/>
				<Carousel>
					<CarouselItem
						title='Lesson 2'
						subtitle='Yo soy Julia.'
						image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-7iWgixkGSzAHt8VnqoPJdRW-e-UqHLgm-GfUC9CywA&s'
						icon='https://img.freepik.com/free-photo/abstract-surface-textures-white-concrete-stone-wall_74190-8189.jpg?w=1060&t=st=1706119729~exp=1706120329~hmac=a414f10410346de179dcf62073c83c9acaf1e70e2897ede591df3fa08435d0f8'
						type='lesson'
					/>
					<CarouselItem
						title='Lesson 3'
						subtitle='¿De dónde eres?'
						image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-7iWgixkGSzAHt8VnqoPJdRW-e-UqHLgm-GfUC9CywA&s'
						icon='https://img.freepik.com/free-photo/abstract-surface-textures-white-concrete-stone-wall_74190-8189.jpg?w=1060&t=st=1706119729~exp=1706120329~hmac=a414f10410346de179dcf62073c83c9acaf1e70e2897ede591df3fa08435d0f8'
						type='lesson'
					/>
					<CarouselItem
						title='Lesson 4'
						subtitle='¡Vamos a hablar!'
						image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-7iWgixkGSzAHt8VnqoPJdRW-e-UqHLgm-GfUC9CywA&s'
						icon='https://img.freepik.com/free-photo/abstract-surface-textures-white-concrete-stone-wall_74190-8189.jpg?w=1060&t=st=1706119729~exp=1706120329~hmac=a414f10410346de179dcf62073c83c9acaf1e70e2897ede591df3fa08435d0f8'
						type='lesson'
					/>
					<CarouselItem
						title='Lesson 5'
						subtitle='Comida y bebidas.'
						image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-7iWgixkGSzAHt8VnqoPJdRW-e-UqHLgm-GfUC9CywA&s'
						icon='https://img.freepik.com/free-photo/abstract-surface-textures-white-concrete-stone-wall_74190-8189.jpg?w=1060&t=st=1706119729~exp=1706120329~hmac=a414f10410346de179dcf62073c83c9acaf1e70e2897ede591df3fa08435d0f8'
						type='lesson'
					/>
				</Carousel>
				<Card
					title='Boost learning'
					image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-7iWgixkGSzAHt8VnqoPJdRW-e-UqHLgm-GfUC9CywA&s'
					icon='https://img.freepik.com/free-photo/abstract-surface-textures-white-concrete-stone-wall_74190-8189.jpg?w=1060&t=st=1706119729~exp=1706120329~hmac=a414f10410346de179dcf62073c83c9acaf1e70e2897ede591df3fa08435d0f8'
				/>
			</section>
			<NavBar />
		</main>
	);
}
