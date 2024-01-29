/* eslint-disable @next/next/no-img-element */
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import learn from '../../public/images/icons/Learn.svg';
import review from '../../public/images/icons/Review.svg';
import activity from '../../public/images/icons/Activity.svg';
import explore from '../../public/images/icons/Explore.svg';
import logo from '../../public/images/icons/Logo.svg';
import input from '../../public/images/icons/Input.svg';

interface FooterProps {}

const Footer = ({}: FooterProps) => {
	const pathname = usePathname();
	const buttons = [
		{
			title: 'Learn',
			link: '/',
			icon: learn.src,
		},
		{
			title: 'Review',
			link: '/review',
			icon: review.src,
		},
		{
			title: 'Activity',
			link: '/activity',
			icon: activity.src,
		},
		{
			title: 'Explore',
			link: '/explore',
			icon: explore.src,
		},
	];

	return (
		<footer className=''>
			<div className='hidden h-72 w-full items-center md:flex'>
				<div className='flex h-3/5 w-full justify-between gap-4 px-5'>
					<div className='flex h-full flex-col justify-between gap-4'>
						<img src={logo.src} alt='Polyglot logo' className='h-10 w-auto' />
						<Link href={''}>About Polyglot</Link>
						<Link href={''}>Join Our Team</Link>
						<Link href={''}>Latest updates</Link>
					</div>
					<div className='flex h-full flex-col justify-between gap-4'>
						<h3 className='h-10 w-auto text-2xl font-bold'>Course Features</h3>
						<Link href={''}>Fast Learning</Link>
						<Link href={''}>Course Variety</Link>
						<Link href={''}>Latest Courses</Link>
					</div>
					<div className='flex h-full flex-col justify-between gap-4'>
						<h3 className='h-10 w-auto text-2xl font-bold'>Follow Us</h3>
						<a href={''}>Twitter</a>
						<a href={''}>Instagram</a>
						<a href={''}>Polyglot Community</a>
					</div>
					<div className='flex h-full flex-col justify-between gap-4'>
						<div className='flex flex-col gap-1'>
							<h3 className='h-8 w-auto text-2xl font-bold'>
								Newsletter Subscription
							</h3>
							<p>Receive tips and updates from Polyglot.</p>
						</div>
						<img
							src={input.src}
							alt='Input with button'
							className='h-14 w-full'
						/>
						<div className='flex gap-3 text-xs'>
							{' '}
							<Link href={''}>Terms of Service</Link>
							<Link href={''}>Privacy Policy</Link>
						</div>
					</div>
				</div>
			</div>
			<div className='flex h-16 w-full items-center justify-evenly gap-2 p-2 shadow-2xl shadow-zinc-500 md:hidden'>
				{buttons.map(({ link, icon, title }, i) => (
					<Link
						href={link}
						className={`flex h-14 w-14 flex-col items-center rounded-xl p-2 ${
							pathname === link ? 'border border-[#999999] bg-[#F8F6F8] ' : 'bg'
						}`}
						key={i}
					>
						<img src={icon} alt='Learn icon' className='h-3/5 w-3/5 ' />
						<p className='text-xs font-bold'>{title}</p>
					</Link>
				))}
			</div>
		</footer>
	);
};

export default Footer;
