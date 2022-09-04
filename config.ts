const API_URL: string = 'https://api.themoviedb.org/3/';
const API_KEY: string | undefined = process.env.API_KEY;

// Info API Movies
const SEARCH_BASE_URL: string = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=`;
const POPULAR_BASE_URL: string = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US`;

const movieId = (id?: string) => `${API_URL}movie/${id}?api_key=${API_KEY}`;
const creditId = (id?: string) =>
	`${API_URL}movie/${id}/credits?api_key=${API_KEY}`;

const IMAGE_BASE_URL: string = 'http://image.tmdb.org/t/p/';
// Sizes: w300, w780, w1280, original
const BACKDROP_SIZE: string = 'w1280';
// w92, w154, w185, w342, w500, w780, original
const POSTER_SIZE: string = 'w780';

export {
	API_URL,
	API_KEY,
	SEARCH_BASE_URL,
	POPULAR_BASE_URL,
	movieId,
	creditId,
	IMAGE_BASE_URL,
	BACKDROP_SIZE,
	POSTER_SIZE,
};
