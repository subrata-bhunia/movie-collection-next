"use client"
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { getMovieDetails } from "@/lib/api";
import { MovieCardProps } from "@/components/movie-card.component";
import { TMDB_IMAGE_URL } from "../../../../../constant";

function MovieDetailsPage() {
  const [movie, setMovie] = useState<MovieCardProps | null>(null);
  const params = useParams();
  const { id } = params;

  useEffect(() => {
    const fetchMovieDetails = async () => {
      if (id) {
        try {
          const movieDetails = await getMovieDetails(id as string);
          setMovie(movieDetails);
        } catch (error) {
          console.error('Error fetching movie details:', error);
        }
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-8">
      <h1 className="text-3xl font-bold mb-8">{movie.title}</h1>
      <img 
        src={TMDB_IMAGE_URL + movie.poster_path} 
        alt={movie.title} 
        className="mb-4" 
        style={{ maxWidth: '20%', height: 'auto' }} 
      />
      <div className="text-lg mb-4">
        <p><strong>Release Date:</strong> {movie.release_date}</p>
        <p><strong>Rating:</strong> {parseFloat(movie.vote_average).toFixed(1)} / 10</p>
        <p><strong>Genres:</strong> {movie.genres.map((genre: { name: string; }) => genre.name).join(', ')}</p>
      </div>
      <p className="text-lg">{movie.overview}</p>
    </main>
  );
}

export default MovieDetailsPage; 