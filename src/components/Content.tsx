import { cn } from '@/lib/utils';

interface ContentProps {
	className?: React.ComponentProps<'div'>['className'];
	children: React.ReactNode;
}

const Content = ({ className, children }: ContentProps) => {
	return (
		<section
			className={cn(
				'mx-auto flex h-[calc(100svh-8rem)] w-full max-w-7xl flex-col gap-3 px-5 py-2 md:h-[calc(100svh+30rem)] ',
				className
			)}
		>
			{children}
		</section>
	);
};

export default Content;
