import { useState, useEffect } from 'react';
import { MovieImage } from '../components/MovieImage';
import { Link } from 'react-router-dom';
import { DropDownList } from '../components/DropDownList';
import { Loading } from '../components/Loading';

export const Home = () => {
  const [moviesData, setMoviesData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState('popular');

  const apiKey = 'bde83eefea9dd68d9520fa912b04d54e';
  const apiUrl = `https://api.themoviedb.org/3/movie/${category}?api_key=${apiKey}&language=en-US&page=1`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setMoviesData(data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [category]);

  return (
    <>
      <DropDownList value={category} setCategory={setCategory} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
        {!loading ? (
          moviesData.map((movie) => (
            <Link to={`/movies/${movie.id}`} key={movie.id}>
              <div className="group relative">
                <div className="aspect-w-2 aspect-h-3 relative overflow-hidden transition-opacity group-hover:opacity-50">
                  <MovieImage imageUrl={movie.backdrop_path} imageSize="w780" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 p-2 text-white opacity-0 transition-opacity group-hover:opacity-100">
                  <p className="text-lg font-bold">{movie.title}</p>
                  <p>{movie.release_date}</p>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <Loading />
        )}
      </div>
    </>
  );
};
