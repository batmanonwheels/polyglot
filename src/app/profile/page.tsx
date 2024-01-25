/* eslint-disable @next/next/no-img-element */
import { Metadata } from 'next';
import Header from '@/components/Header';
import NavBar from '@/components/NavBar';
import CourseSelector from '@/components/CourseSelector';

export const metadata: Metadata = {
	title: 'Profile | Polyglot',
	description: 'Your passport to global communication!',
	openGraph: {
		title: 'Profile | Polyglot',
		description: 'Your passport to global communication!',
	},
	twitter: {
		title: 'Profile | Polyglot',
		description: 'Your passport to global communication!',
	},
};

export default function Profile() {
	return (
		<main className='flex max-h-screen max-w-[100vw] overflow-visible flex-col items-center justify-between '>
			<Header text={'Kathryn'} profile={true} />
			<section className='h-[calc(100svh-7.5rem)] w-full px-5 py-2 flex flex-col gap-3'>
				<CourseSelector />
			</section>
			<NavBar />
		</main>
	);
}