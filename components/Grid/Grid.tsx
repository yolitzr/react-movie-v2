type Props = {
	title: string;
	children: React.ReactNode;
	className?: string;
};

export const Grid = ({ title, children, className }: Props) => (
	<div className={className}>
		<h2 className="text-xl font-bold pb-4">{title}</h2>
	</div>
);
