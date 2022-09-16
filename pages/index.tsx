import type { NextPage } from 'next';
import { useState } from 'react';
import { useFetchMovies } from '../api/fetchHooks';
import { Header, Hero, Grid, Card, Spinner } from '../components';
import { IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE } from '../config';

const Home: NextPage = () => {
	const [query, setQuery] = useState('');
	const { data, fetchNextPage, isLoading, isFetching, error } =
		useFetchMovies(query);

	console.log(data?.pages[0].results[0].backdrop_path);
	return (
		<div className="relative h-screen overflow-y-scroll">
			<Header setQuery={setQuery} />
			{!query && data && data.pages ? (
				<Hero
					imgUrl={
						data?.pages[0]?.results[0]?.backdrop_path
							? IMAGE_BASE_URL +
							  BACKDROP_SIZE +
							  data.pages[0].results[0].backdrop_path
							: '/no_image.jpg'
					}
					title={data?.pages[0]?.results[0]?.title}
					text={data?.pages[0]?.results[0]?.overview}
				/>
			) : null}
		</div>
	);
};

export default Home;
