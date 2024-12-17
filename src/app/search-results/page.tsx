"use client";
import { useEffect, useState } from "react";
import MovieCard, { MovieCardProps } from "@/components/movie-card.component";
import { searchMovies } from "@/lib/api"; // Assume this is a function to search movies


export default async function SearchResults({
//   searchParams,
// }: {
//   searchParams: { query?: string; page?: number };
}) {
  // const { query, page } = await searchParams;
  const [movies, setMovies] = useState<MovieCardProps[]>([]);

  useEffect(() => {
    // if (query) {
    //   // Fetch search results when the query changes
    //   searchMovies(query as string, page).then(setMovies);
    // }
  }, []);

  return (
    <div className="container mx-auto py-6">
      <h1 className="text-2xl font-bold mb-4">Search Results for "{}"</h1>
      {movies.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {movies.map((movie) => (
            <MovieCard key={movie.id} {...movie} />
          ))}
        </div>
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
}
