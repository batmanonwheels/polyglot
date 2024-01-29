'use client';

import Carousel from './Carousel';
import CarouselItem from './CarouselItem';
import espanol from '../../public/images/languages/Espanol.svg';
import polski from '../../public/images/languages/Polski.svg';
import none from '../../public/images/languages/None.svg';

interface CourseSelectorProps {}

const CourseSelector = ({}: CourseSelectorProps) => {
	const toggleCourseSelector = () => {
		const dropdown = document.querySelector('#course-selector');

		if (!dropdown) return;

		dropdown.classList.toggle('hidden');
	};

	return (
		<div
			id='course-selector'
			className='absolute left-0 top-14 z-10 hidden sm:hidden'
		>
			<div
				className='z-10 h-[calc(100svh-3rem)] w-screen'
				onClick={() => toggleCourseSelector()}
			/>
			<Carousel className='fixed left-0 top-14 z-20 flex h-[13%] w-full bg-white px-5 shadow-md sm:hidden'>
				<CarouselItem
					type='course'
					title='Español'
					image={espanol.src}
					link='#es'
				/>
				<CarouselItem
					type='course'
					title='Polski'
					image={polski.src}
					link='#pl'
				/>
				<CarouselItem
					type='course'
					title='Add Course'
					image={none.src}
					link='/courses'
				/>
			</Carousel>
		</div>
	);
};

export default CourseSelector;
