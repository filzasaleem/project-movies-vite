import { GoBack } from '../components/GoBack';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Loading } from '../components/Loading';
import { MovieImage } from '../components/MovieImage';

export const SimilarMovies = () => {
  const { id } = useParams();
  const apiKey = 'bde83eefea9dd68d9520fa912b04d54e';
  const apiUrl = `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${apiKey}`;

  const [movieData, setMovieData] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      console.log('printing url', apiUrl);
      try {
        setLoading(true);
        const response = await fetch(apiUrl);
        if (response.ok) {
          const data = await response.json(); 
          setMovieData(data.results);
          if(data.results.length < 1) setError(true);
        } else {
          console.log('error detetcted');
          setError(true);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <GoBack to={-1} />
      {loading ? (
        <Loading />
      ) : error ? (
        <div className="flex h-screen w-screen items-center justify-center ">
          <h3 className="text-xl font-bold">No similar movies are found</h3>
        </div>
      ) : (
        movieData &&
        movieData.map((movie) => (
          <div
            key={movie.id}
            className="lg:flex-no-wrap lg flex flex-col px-6 lg:flex-row bg-black  opacity-80"
          >
            <div className="w-full  lg:w-1/2 lg:flex-shrink-0">
              <MovieImage
                imageUrl={movie.backdrop_path}
                imageSize="w1280"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="flex-grow p-4">
              <div className="flex flex-row justify-between">
                <p className="text-lg font-bold  lg:text-xl">{movie.title}</p>
                <p>⭐{movie.vote_average.toFixed(1)}</p>
              </div>
              <p className=" text-justify lg:pt-6">
                {movie.overview}
              </p>
            </div>
          </div>
        ))
      )}
    </>
  );
};
