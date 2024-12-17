import MovieCard, { MovieCardProps } from "@/components/movie-card.component";
import { getPopularMovies } from "@/lib/api";
import { JSX } from "react";
import Link from "next/link";

async function PopularPage({
//   searchParams,
// }: {
//   searchParams: { page?: string };
}) {
  const currentPage = 1;
  const movies = await getPopularMovies(currentPage);

  return (
    <main className="flex min-h-screen flex-col items-center p-8">
      <h1 className="text-3xl font-bold mb-8">Popular Movies</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {movies.map((movie: JSX.IntrinsicAttributes & MovieCardProps) => (
          <MovieCard key={movie.id} {...movie} />
        ))}
      </div>
      
      <div className="flex gap-4 mt-8">
        {currentPage > 1 && (
          <Link
            href={`/popular?page=${currentPage - 1}`}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Previous
          </Link>
        )}
        <Link
          href={`/popular?page=${currentPage + 1}`}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Next
        </Link>
      </div>
    </main>
  );
}

export default PopularPage;
