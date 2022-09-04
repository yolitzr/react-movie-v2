export type Movies = {
	page: number;
	results: Movies[];
	total_pages: number;
	total_results: number;
};

export type Movie = {
	id: number;
	title: string;
	original_title: string;
	overview: string;
	poster_path: string;
	backdrop_path: string;
	popularity: number;
	vote_average: number;
	vote: number;
	budget: number;
	runtime: number;
	revenue: number;
	release_date: string;
};
