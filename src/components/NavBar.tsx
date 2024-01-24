/* eslint-disable @next/next/no-img-element */
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavBarProps {}

const NavBar = ({}: NavBarProps) => {
	const pathname = usePathname();
	const buttons = [
		{
			title: 'Learn',
			link: '/',
			icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-7iWgixkGSzAHt8VnqoPJdRW-e-UqHLgm-GfUC9CywA&s',
		},
		{
			title: 'Review',
			link: '/review',
			icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-7iWgixkGSzAHt8VnqoPJdRW-e-UqHLgm-GfUC9CywA&s',
		},
		{
			title: 'Activity',
			link: '/activity',
			icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-7iWgixkGSzAHt8VnqoPJdRW-e-UqHLgm-GfUC9CywA&s',
		},
		{
			title: 'Explore',
			link: '/explore',
			icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-7iWgixkGSzAHt8VnqoPJdRW-e-UqHLgm-GfUC9CywA&s',
		},
	];
	return (
		<footer className='w-full h-20 flex justify-evenly gap-2 shadow-zinc-500 p-2 align-middle shadow-2xl'>
			{buttons.map(({ link, icon, title }, i) => (
				<Link
					href={link}
					className={`h-16 w-16 flex flex-col items-center gap-1 p-2  rounded-xl ${
						pathname === link ? 'bg-[#F8F6F8] border border-[#999999] ' : 'bg'
					}`}
					key={i}
				>
					<img src={icon} alt='Learn icon' className='h-8 w-8' />
					<p className='font-bold text-sm'>{title}</p>
				</Link>
			))}
		</footer>
	);
};

export default NavBar;
