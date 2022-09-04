import type { NextApiRequest, NextApiResponse } from 'next';

// Api urls
import { SEARCH_BASE_URL, POPULAR_BASE_URL } from '../../config';
import { basicFetch } from '../../api/fetchs';

import type { Movies } from '../../api/types';

export default async function handle(
	req: NextApiRequest,
	res: NextApiResponse<Movies>
) {}
