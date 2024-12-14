import MovieCard, { MovieCardProps } from "@/components/movie-card.component";
import { getNowPlayingMovies } from "@/lib/api";
import { JSX } from "react";
import Link from "next/link";

async function NowPlayingPage({
  searchParams,
}: {
  searchParams: { page?: string };
}) {
  const currentPage = Number(searchParams.page) || 1;
  const movies = await getNowPlayingMovies(currentPage);

  return (
    <main className="flex min-h-screen flex-col items-center p-8">
      <h1 className="text-3xl font-bold mb-8">Now Playing Movies</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {movies.map((movie: JSX.IntrinsicAttributes & MovieCardProps) => (
          <MovieCard key={movie.id} {...movie} />
        ))}
      </div>
      
      <div className="flex gap-4 mt-8">
        {currentPage > 1 && (
          <Link
            href={`/now-playing?page=${currentPage - 1}`}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Previous
          </Link>
        )}
        <span className="px-4 py-2 bg-blue-100 text-blue-800 font-medium rounded-md border border-blue-200">
          Page {currentPage}
        </span>
        <Link
          href={`/now-playing?page=${currentPage + 1}`}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Next
        </Link>
      </div>
    </main>
  );
}

export default NowPlayingPage;
