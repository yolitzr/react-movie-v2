import { Movies } from './types';

export const basicFetch = async <returnType>(
	endpoint: string
): Promise<returnType> => {
	const response = await fetch(endpoint);

	if (!response.ok) throw new Error('Error!');

	const data = await response.json();

	return data;
};

// Fetch functions react-query
export const fetchMovies = async (search = '', page = ''): Promise<Movies> => {
	return await basicFetch<Movies>(`/api/movies?search=${search}&page=${page}`);
};
