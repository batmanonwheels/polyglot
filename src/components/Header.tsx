/* eslint-disable @next/next/no-img-element */
'use client';
import Link from 'next/link';

interface HeaderProps {
	text: string;
	profile?: boolean;
}

const Header = ({ text, profile }: HeaderProps) => {
	const toggleCourseSelector = () => {
		const dropdown = document.querySelector('#course-selector');

		if (!dropdown) return;

		dropdown.classList.toggle('hidden');
	};

	return (
		<header className='w-full h-16 flex justify-between items-center px-5 py-4 z-20'>
			{profile && (
				<>
					<h1 className='w-4/6 text-3xl font-bold font-sans'>{text}</h1>
				</>
			)}
			{!profile && (
				<>
					<h1 className='w-4/6 text-3xl font-bold font-sans'>{text}</h1>
					<div className='w-20 flex justify-end gap-2'>
						<button className='w-8 h-8' onClick={() => toggleCourseSelector()}>
							<img
								src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-7iWgixkGSzAHt8VnqoPJdRW-e-UqHLgm-GfUC9CywA&s'
								alt='Current language course'
								className='w-full h-full rounded-full'
							/>
						</button>
						<Link href='/profile' className='w-8 h-8'>
							<img
								src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-7iWgixkGSzAHt8VnqoPJdRW-e-UqHLgm-GfUC9CywA&s'
								alt='profile picture'
								className='w-full h-full rounded-full'
							/>
						</Link>
					</div>
				</>
			)}
		</header>
	);
};

export default Header;
