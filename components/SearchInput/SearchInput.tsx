import { time } from 'console';
import React, { useState, useRef } from 'react';

type Props = {
	setQuery: React.Dispatch<React.SetStateAction<string>>;
};

export const SearchInput = ({ setQuery }: Props) => {
	const [text, setText] = useState('');
	const timer = useRef<NodeJS.Timeout>();

	const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.currentTarget.value;
		clearTimeout(timer.current);
		setText(value);
		timer.current = setTimeout(() => {
			setQuery(value);
		}, 300);
	};

	return (
		<>
			<input
				type="text"
				placeholder="Search Movie"
				value={text}
				onChange={handleInput}
				className="h-10 pr-14 p-4 rounded-full text-md text-white focus:outline-none focus:border focus:border-solid focus:border-purple-200 bg-slate-700 md:w-96"
			/>
		</>
	);
};
