import type { NextPage } from 'next';
import { useState } from 'react';
import { useFetchMovies } from '../api/fetchHooks';
import { Header, Hero, Grid, Card, Spinner } from '../components';

const Home: NextPage = () => {
	const [query, setQuery] = useState('');
	const { data, fetchNextPage, isLoading, isFetching, error } =
		useFetchMovies(query);

	console.log(data);
	return (
		<div className="relative h-screen overflow-y-scroll">
			<Header setQuery={setQuery} />
			<Hero />
		</div>
	);
};

export default Home;
