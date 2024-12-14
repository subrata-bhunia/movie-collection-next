"use client"
import MovieCard, { MovieCardProps } from "@/components/movie-card.component";
import { getTopRatedMovies } from "@/lib/api";
import { useState, useEffect } from "react";

function TopRatedPage() {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        const { movies, totalPages } = await getTopRatedMovies(currentPage);
        setMovies(movies);
        setTotalPages(totalPages);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, [currentPage]);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-8">
      <h1 className="text-3xl font-bold mb-8">Top Rated Movies</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {movies.map((movie:  MovieCardProps) => (
          <MovieCard
            key={movie.id}
            {...movie}
            poster_path={movie.poster_path}
            
          />
        ))}
      </div>
      <div className="flex gap-4 items-center justify-center mt-8">
        <button 
          onClick={handlePreviousPage} 
          disabled={currentPage === 1}
          className="px-4 py-2 rounded-lg bg-blue-500 text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-600 transition-colors"
        >
          Previous
        </button>
        <div className="flex items-center gap-2">
          <span className="font-medium">Page</span>
          <span className="px-3 py-1 rounded-md bg-gray-100 dark:bg-gray-800">
            {currentPage}
          </span>
          <span className="font-medium">of</span>
          <span className="px-3 py-1 rounded-md bg-gray-100 dark:bg-gray-800">
            {totalPages}
          </span>
        </div>
        <button 
          onClick={handleNextPage} 
          disabled={currentPage === totalPages}
          className="px-4 py-2 rounded-lg bg-blue-500 text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-600 transition-colors"
        >
          Next
        </button>
      </div>
    </main>
  );
}

export default TopRatedPage;
