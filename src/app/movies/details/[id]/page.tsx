import { getAllMoviesByLanguage } from "@/lib/api";
import MovieDetailsPageContent from ".";
import { MovieCardProps } from "@/components/movie-card.component";

export async function generateStaticParams() {
  const movies = await getAllMoviesByLanguage(1,"en");
  return movies?.map((movie: MovieCardProps)=>({
    id: movie?.id?.toString()
  }))
}
export default async function MovieDetailsPage({params}:any){
  let data = await params
  console.log("params", data)
  return <MovieDetailsPageContent params={data}  />
}
