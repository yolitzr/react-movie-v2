import Image from 'next/image';

type Props = {
	setQuery: React.Dispatch<React.SetStateAction<string>>;
};

const SearchInput = ({ setQuery }: Props) => {
	return (
		<>
			<input type="text" />
		</>
	);
};
