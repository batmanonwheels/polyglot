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
		<header className='w-full h-24 flex flex-col align-middle p-5 z-20'>
			<div className='w-full h-20 flex justify-between'>
				{profile && (
					<>
						<h1 className='w-4/6 text-4xl font-bold font-sans'>{text}</h1>
					</>
				)}
				{!profile && (
					<>
						<h1 className='w-4/6 text-4xl font-bold font-sans'>{text}</h1>
						<div className='w-24 flex justify-between'>
							<button
								className='w-10 h-10'
								onClick={() => toggleCourseSelector()}
							>
								<img
									src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-7iWgixkGSzAHt8VnqoPJdRW-e-UqHLgm-GfUC9CywA&s'
									alt='Current language course'
									className='w-full h-full rounded-full'
								/>
							</button>
							<Link href='/profile' className='w-10 h-10'>
								<img
									src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-7iWgixkGSzAHt8VnqoPJdRW-e-UqHLgm-GfUC9CywA&s'
									alt='profile picture'
									className='w-full h-full rounded-full'
								/>
							</Link>
						</div>
					</>
				)}
			</div>
		</header>
	);
};

export default Header;
