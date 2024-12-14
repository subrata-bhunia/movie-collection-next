"use client"
import { TMDB_IMAGE_URL } from "../../constant";
import { useRouter } from "next/navigation"

export interface MovieCardProps {
  genres: any;
  release_date: string;
  overview: string;
  adult: boolean;
  id: string;
  original_title: string;
  poster_path: string;
  title: string;
  vote_average: string;
  vote_count: number;
}

export default function MovieCard({
  id,
  title,
  poster_path,
  vote_average,
  vote_count,
}: MovieCardProps) {
    const router =useRouter()

  const handleCardClick = () => {
    router.push(`/details/${id}`);
  };

  return (
    <div
      className="relative group cursor-pointer w-[160px] sm:w-[180px] md:w-[200px]"
      onClick={handleCardClick}
    >
      <div className="aspect-[2/3] overflow-hidden rounded-lg">
        <img
          src={TMDB_IMAGE_URL + poster_path}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="mt-2">
        <h3 className="font-semibold text-lg">{title}</h3>
        <div className="flex gap-2 text-sm text-gray-400">
          {vote_average && <span>⭐ {parseFloat(vote_average).toFixed(1)}/10</span>}
          {vote_count && <span>{vote_count / 1000}k</span>}
        </div>
      </div>
    </div>
  );
}
