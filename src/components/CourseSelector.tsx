'use client';

import Carousel from './Carousel';
import CarouselItem from './CarouselItem';

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
			className='absolute left-0 z-10 hidden top-16 sm:hidden'
		>
			<div
				className='w-screen h-[100svh] z-10'
				onClick={() => toggleCourseSelector()}
			/>
			<Carousel className='flex w-full fixed left-0 z-20 px-5 bg-white shadow-md top-16 h-[15%] sm:hidden'>
				<CarouselItem
					type='course'
					title='Español'
					image={
						'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-7iWgixkGSzAHt8VnqoPJdRW-e-UqHLgm-GfUC9CywA&s'
					}
					link='#es'
				/>
				<CarouselItem
					type='course'
					title='Polski'
					image={
						'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-7iWgixkGSzAHt8VnqoPJdRW-e-UqHLgm-GfUC9CywA&s'
					}
					link='#pl'
				/>
				<CarouselItem
					type='course'
					title='English'
					image={
						'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-7iWgixkGSzAHt8VnqoPJdRW-e-UqHLgm-GfUC9CywA&s'
					}
					link='#en'
				/>

				<CarouselItem
					type='course'
					title='Add Course'
					image={
						'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-7iWgixkGSzAHt8VnqoPJdRW-e-UqHLgm-GfUC9CywA&s'
					}
					// image={
					// 	'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Plus_symbol.svg/1000px-Plus_symbol.svg.png?20081122110508'
					// }
					link='/courses'
				/>
			</Carousel>
		</div>
	);
};

export default CourseSelector;
