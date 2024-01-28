/* eslint-disable @next/next/no-img-element */
import Card from '@/components/Card';
import Carousel from '@/components/Carousel';
import CarouselItem from '@/components/CarouselItem';
import CourseSelector from '@/components/CourseSelector';
import FeaturedLesson from '@/components/FeaturedLesson';
import Header from '@/components/Header';
import Content from '@/components/Content';
import Footer from '@/components/Footer';
import Main from '@/components/Main';

export default function Home() {
	return (
		<Main>
			<Header text={'Hi, Kathryn'} />
			<Content>
				<CourseSelector />
				<FeaturedLesson
					title='Lesson 1'
					subtitle='¡Hola y bienvenido!'
					image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-7iWgixkGSzAHt8VnqoPJdRW-e-UqHLgm-GfUC9CywA&s'
				/>
				<Carousel className='md:h-72 md:grid-cols-[repeat(4,_25%)] md:items-center md:gap-6'>
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
					className='[&>h2]:text-4xl md:[&>h2]:text-8xl'
				/>
			</Content>
			<Footer />
		</Main>
	);
}
