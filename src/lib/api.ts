import { TMDB_API_KEY } from "../../constant";


interface Movie {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
  release_date: string;
}

export async function getAllMoviesByLanguage(page = 1,language="") {
  const response = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&page=${page}&with_original_language=${language}`
  );
  const data = await response.json();
  return data.results;
}

export async function getNowPlayingMovies(page = 1) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=${TMDB_API_KEY}&page=${page}`
  );
  const data = await response.json();
  return data.results;
}

export async function getPopularMovies(page=1) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB_API_KEY}&page=${page}`
  );
  const data = await response.json();
  return data.results;
}

export async function getTopRatedMovies(page = 1) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${TMDB_API_KEY}&language=en-US&page=${page}`
  );

  const data = await response.json();
  return {
    movies: data.results,
    totalPages: data.total_pages,
  };
}

export async function getMovieDetails(id: string) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${TMDB_API_KEY}`
  );
  const movieDetails = await response.json();
  return movieDetails;
}

const BASE_URL = 'https://api.themoviedb.org/3';

export async function searchMovies(query: string, page: number = 1) {
  try {
    const response = await fetch(
      `${BASE_URL}/search/movie?query=${encodeURIComponent(query)}&page=${page}&api_key=${TMDB_API_KEY}`
    );
    if (!response.ok) {
      throw new Error('Failed to fetch movies');
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error fetching movies:', error);
    return [];
  }
}
