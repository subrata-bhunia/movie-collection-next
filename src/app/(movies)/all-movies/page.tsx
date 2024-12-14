import MovieCard, { MovieCardProps } from "@/components/movie-card.component";
import { getAllMoviesByLanguage } from "@/lib/api";
import { JSX } from "react";
import Link from "next/link";

async function AllMovies({
  searchParams,
}: {
  searchParams: { lang?: string; page?: string };
}) {
  const language = searchParams?.lang || "bn";
  const currentPage = Number(searchParams?.page) || 1;
  const movies = await getAllMoviesByLanguage(currentPage, language);
  
  return (
    <main className="flex min-h-screen flex-col items-center p-8">
      <h1 className="text-3xl font-bold mb-8">All Movies</h1>
      <div className="flex flex-wrap gap-4 mb-6">
        <Link 
          href={`?lang=bn`}
          className={`px-4 py-2 rounded-md ${
            language === 'bn' 
              ? 'bg-blue-600 text-white' 
              : 'bg-gray-200 text-gray-800'
          }`}
        >
          Bengali
        </Link>
        <Link 
          href={`?lang=en`}
          className={`px-4 py-2 rounded-md ${
            language === 'en' 
              ? 'bg-blue-600 text-white' 
              : 'bg-gray-200 text-gray-800'
          }`}
        >
          English
        </Link>
        <Link 
          href={`?lang=hi`}
          className={`px-4 py-2 rounded-md ${
            language === 'hi' 
              ? 'bg-blue-600 text-white' 
              : 'bg-gray-200 text-gray-800'
          }`}
        >
          Hindi
        </Link>
        <Link 
          href={`?lang=ta`}
          className={`px-4 py-2 rounded-md ${
            language === 'ta' 
              ? 'bg-blue-600 text-white' 
              : 'bg-gray-200 text-gray-800'
          }`}
        >
          Tamil
        </Link>
        <Link 
          href={`?lang=te`}
          className={`px-4 py-2 rounded-md ${
            language === 'te' 
              ? 'bg-blue-600 text-white' 
              : 'bg-gray-200 text-gray-800'
          }`}
        >
          Telugu
        </Link>
        <Link 
          href={`?lang=ml`}
          className={`px-4 py-2 rounded-md ${
            language === 'ml' 
              ? 'bg-blue-600 text-white' 
              : 'bg-gray-200 text-gray-800'
          }`}
        >
          Malayalam
        </Link>
        <Link 
          href={`?lang=kn`}
          className={`px-4 py-2 rounded-md ${
            language === 'kn' 
              ? 'bg-blue-600 text-white' 
              : 'bg-gray-200 text-gray-800'
          }`}
        >
          Kannada
        </Link>
        <Link 
          href={`?lang=mr`}
          className={`px-4 py-2 rounded-md ${
            language === 'mr' 
              ? 'bg-blue-600 text-white' 
              : 'bg-gray-200 text-gray-800'
          }`}
        >
          Marathi
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-8">
        {movies.map((movie: JSX.IntrinsicAttributes & MovieCardProps) => (
          <MovieCard key={movie.id} {...movie}/>
        ))}
      </div>

      <div className="flex gap-4 mt-4">
        {currentPage > 1 && (
          <Link
            href={`?lang=${language}&page=${currentPage - 1}`}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Previous
          </Link>
        )}
        <span className="px-4 py-2 bg-blue-100 text-blue-800 font-medium rounded-md border border-blue-200">
          Page {currentPage}
        </span>
        <Link
          href={`?lang=${language}&page=${currentPage + 1}`}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Next
        </Link>
      </div>
    </main>
  );
}

export default AllMovies;
