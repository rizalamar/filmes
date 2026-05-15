import api from "../api/api";
import { GenreResponse } from "../types/genre";

export const genreService = {
	getGenres: async (): Promise<GenreResponse> => {
		const res = await api.get<GenreResponse>(`/genre/movie/list`);
		return res.data;
	},
};
