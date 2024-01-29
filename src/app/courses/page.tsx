/* eslint-disable @next/next/no-img-element */
import { Metadata } from 'next';
import Header from '@/components/Header';
import CourseSelector from '@/components/CourseSelector';
import Footer from '@/components/Footer';
import Content from '@/components/Content';
import Main from '@/components/Main';

export const metadata: Metadata = {
	title: 'Courses | Polyglot',
	description: 'Your passport to global communication!',
	openGraph: {
		title: 'Courses | Polyglot',
		description: 'Your passport to global communication!',
	},
	twitter: {
		title: 'Courses | Polyglot',
		description: 'Your passport to global communication!',
	},
};

export default function Courses() {
	return (
		<Main>
			<Header text={'Courses'} />
			<Content className='flex h-[calc(100svh-8rem)] w-full flex-col gap-3 px-5 py-2'>
				<CourseSelector />
			</Content>
			<Footer />
		</Main>
	);
}
