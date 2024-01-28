/* eslint-disable @next/next/no-img-element */
import { Metadata } from 'next';
import Header from '@/components/Header';
import CourseSelector from '@/components/CourseSelector';
import Footer from '@/components/Footer';
import Content from '@/components/Content';
import Main from '@/components/Main';

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
		<Main className=''>
			<Header text={'Kathryn'} profile={true} />
			<Content className='flex h-[calc(100svh-8rem)] w-full flex-col gap-3 px-5 py-2 md:max-h-[calc(100svh+30rem)]'>
				<CourseSelector />
			</Content>
			<Footer />
		</Main>
	);
}
