import { cn } from '@/lib/utils';

interface MainProps {
	className?: React.ComponentProps<'div'>['className'];
	children: React.ReactNode;
}

const Main = ({ className, children }: MainProps) => {
	return (
		<main
			className={cn(
				'relative flex max-h-[100svh] max-w-[100vw] flex-col justify-between md:max-h-none',
				className
			)}
		>
			{children}
		</main>
	);
};

export default Main;
