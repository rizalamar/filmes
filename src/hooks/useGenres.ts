import { useEffect, useState } from "react";
import { Genre } from "../types/genre";
import { genreService } from "../services/genre.service";

export const useGenres = () => {
	const [genres, setGenres] = useState<Genre[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | null>(null);

	const fetchGenres = async () => {
		try {
			setIsLoading(true);
			setError(null);
			const res = await genreService.getGenres();
			setGenres(res.genres);
		} catch (error) {
			setError("Failed to fetch genres. Please try again!");
			console.error(error);
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		fetchGenres();
	}, []);

	return { genres, isLoading, error, refetch: fetchGenres };
};
