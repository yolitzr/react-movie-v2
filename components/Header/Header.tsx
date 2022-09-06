import Link from 'next/link';
import Image from 'next/image';
import { SearchInput } from '../SearchInput/SearchInput';

type Props = {
	setQuery?: React.Dispatch<React.SetStateAction<string>>;
};

export const Header = ({ setQuery }: Props) => (
	<div className="sticky top-0 z-40 flex w-full h-24 bg-slate-900">
		<div className="flex justify-between items-center w-full h-full max-w-7xl px-4 mx-auto">
			<Link href="/">
				<div className="flex items-center cursor-pointer">
					<div className="visible">
						<div className="flex items-center gap-2">
							<Image
								width="60"
								height="60"
								src="/logo.svg"
								alt="React Movie DB"
								className="flex items-center"
							/>
							<h2 className="hidden md:block text-xl text-white font-semibold">
								React Movie DB
							</h2>
						</div>
					</div>
				</div>
			</Link>
			{setQuery && (
				<div className="relative flex items-center">
					<SearchInput setQuery={setQuery} />
				</div>
			)}
		</div>
	</div>
);
