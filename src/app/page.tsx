import MovieCard, { MovieCardProps } from "@/components/movie-card.component";
import { getNowPlayingMovies, getPopularMovies, getTopRatedMovies } from "@/lib/api";
import { JSX } from "react";

export default async function Home() {
  const now_playing = await getNowPlayingMovies(1);
  const popular = await getPopularMovies();
  const top_rated = await getTopRatedMovies(1);

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const searchQuery = event.currentTarget.search.value;
    // Implement search logic here, e.g., call an API with searchQuery
    console.log("Searching for:", searchQuery);
  };

  return (
    <>
      {/* Header */}
      <header className="bg-transparent text-white py-6 fixed w-full z-20 ">
        <div className="container mx-auto flex justify-between items-center backdrop-blur-md bg-black/30 p-5">
          <h1 className="text-2xl font-bold">Movie World</h1>
          <nav className="flex items-center space-x-4">
            <ul className="flex space-x-4">
              <li><a href="/" className="hover:underline">Home</a></li>
              <li><a href="/movies/all-movies" className="hover:underline">Explore</a></li>
              <li><a href="#footer" className="hover:underline">Contact</a></li>
            </ul>
            <form action="/search-results" method="GET" className="flex items-center">
              <input
                type="text"
                name="query"
                placeholder="Search movies..."
                className="px-3 py-1 rounded-full text-black"
              />
              <button type="submit" className="ml-2 px-3 py-1 bg-primary text-white rounded-full hover:bg-primary-dark">
                Search
              </button>
            </form>
          </nav>
        </div>
      </header>

      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="relative h-[600px] w-full mb-12 -mt-20 z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-background">
            <img
              src="/hero-image.jpg"
              alt="Featured Movie"
              className="w-full h-full object-cover opacity-70"
            />
          </div>
          <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white">
            <h1 className="text-4xl font-bold mb-4">Welcome to Movie World</h1>
            <p className="text-lg mb-6">Discover the latest and greatest movies</p>
            <a href="/movies/all-movies" className="px-6 py-3 bg-primary text-white rounded-full hover:bg-primary-dark">
              Explore Now
            </a>
          </div>
        </section>

        {/* Currently Playing Section */}
        <section className="px-12 py-4" id="explore">
          <section className="mb-12">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold">Currently playing</h2>
              <a href="/movies/now-playing" className="text-sm text-gray-400 hover:text-foreground">
                see more →
              </a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-6">
              
              {
                now_playing.slice(0,7).map((movie: JSX.IntrinsicAttributes & MovieCardProps)=>(
                  <MovieCard key={movie.id} {...movie} />
                ))
              }
            </div>
          </section>

          {/* Popular Section */}
          <section className="mb-12">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold">Popular Movies</h2>
              <a href="/movies/popular" className="text-sm text-gray-400 hover:text-foreground">
                see more →
              </a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-6">
            {
                popular.slice(0,7).map((movie: JSX.IntrinsicAttributes & MovieCardProps)=>(
                  <MovieCard key={movie.id} {...movie} />
                ))
              }
            </div>
          </section>

          {/* Top rated Section */}
          <section className="mb-12">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold">Top Rated Movies</h2>
              <a href="/movies/top-rated" className="text-sm text-gray-400 hover:text-foreground">
                see more →
              </a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-6">
            {
                top_rated.movies.slice(0,7).map((movie: JSX.IntrinsicAttributes & MovieCardProps)=>(
                  <MovieCard key={movie.id} {...movie} />
                ))
              }
            </div>
          </section>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6" id="footer">
        <div className="container mx-auto text-center">
          <p>&copy; 2023 Movie World. All rights reserved.</p>
          <p>Follow us on 
            <a href="https://twitter.com" className="ml-2 hover:underline">Twitter</a>, 
            <a href="https://facebook.com" className="ml-2 hover:underline">Facebook</a>, 
            <a href="https://instagram.com" className="ml-2 hover:underline">Instagram</a>
          </p>
        </div>
      </footer>
    </>
  );
}
