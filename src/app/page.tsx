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
import boost from '../../public/images/Boost.svg';
import lesson1 from '../../public/images/lessons/Lesson1.svg';
import lesson2 from '../../public/images/lessons/Lesson2.svg';
import lesson3 from '../../public/images/lessons/Lesson3.svg';
import lesson4 from '../../public/images/lessons/Lesson4.svg';
import lesson5 from '../../public/images/lessons/Lesson5.svg';
import lock from '../../public/images/icons/Lock.svg';
import boostIcon from '../../public/images/icons/BoostIcon.svg';

export default function Home() {
	const defaultImages = [
		'https://img.freepik.com/free-photo/abstract-surface-textures-white-concrete-stone-wall_74190-8189.jpg?w=1060&t=st=1706119729~exp=1706120329~hmac=a414f10410346de179dcf62073c83c9acaf1e70e2897ede591df3fa08435d0f8',
		'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-7iWgixkGSzAHt8VnqoPJdRW-e-UqHLgm-GfUC9CywA&s',
	];

	return (
		<Main>
			<Header text={'Hi, Kathryn'} />
			<Content>
				<CourseSelector />
				<FeaturedLesson
					title='Lesson 1'
					subtitle='¡Hola y bienvenido!'
					image={lesson1.src}
				/>
				<Carousel className='md:h-72 md:grid-cols-[repeat(4,_25%)] md:items-center md:gap-6'>
					<CarouselItem
						title='Lesson 2'
						subtitle='Yo soy Julia.'
						image={lesson2.src}
						icon={lock.src}
						type='lesson'
					/>
					<CarouselItem
						title='Lesson 3'
						subtitle='¿De dónde eres?'
						image={lesson3.src}
						icon={lock.src}
						type='lesson'
					/>
					<CarouselItem
						title='Lesson 4'
						subtitle='¡Vamos a hablar!'
						image={lesson4.src}
						icon={lock.src}
						type='lesson'
					/>
					<CarouselItem
						title='Lesson 5'
						subtitle='Comida y bebidas.'
						image={lesson5.src}
						icon={lock.src}
						type='lesson'
					/>
				</Carousel>
				<Card
					title='Boost learning'
					image={boost.src}
					icon={boostIcon.src}
					className='[&>h2]:text-4xl md:[&>h2]:text-8xl'
				/>
			</Content>
			<Footer />
		</Main>
	);
}
