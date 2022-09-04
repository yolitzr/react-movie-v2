import type { NextPage } from 'next';
import { Header, Hero, Grid, Card, Spinner } from '../components';

const Home: NextPage = () => {
	return (
		<div className="relative h-screen overflow-y-scroll">
			<Header />
			<Hero />
		</div>
	);
};

export default Home;
