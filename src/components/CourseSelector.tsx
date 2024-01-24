'use client';

import Carousel from './Carousel';
import CarouselItem from './CarouselItem';

//import

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
			className='hidden absolute left-0 top-24 z-10 sm:hidden'
		>
			<div
				className='w-screen h-screen z-10'
				onClick={() => toggleCourseSelector()}
			/>
			<Carousel className='fixed left-0 top-24 h-[9rem] z-20 px-5 bg-white sm:hidden shadow-md'>
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
