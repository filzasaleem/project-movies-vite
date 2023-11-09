import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Loading } from '../components/Loading';
import { GoBack } from '../components/GoBack';
import { MovieDetails } from '../components/MovieDetails';

export const MovieInfo = () => {
  const { id } = useParams();
  const apiKey = 'bde83eefea9dd68d9520fa912b04d54e';
  const movieUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`;

  const [movieData, setMovieData] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [imgPath, setImgPath] = useState(null);

  const imgSrc = `https://image.tmdb.org/t/p/w1280${imgPath}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(movieUrl);

        if (response.ok) {
          const data = await response.json();
          console.log('movie details data', data);
          setMovieData(data);
          setImgPath(data.backdrop_path);
        } else {
          setError(true);
        }
      } catch (error) {
        // setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const backgroundImageStyle = {
    backgroundImage: `url(${imgSrc})`,
    backgroundSize: 'cover', 
  };

  return (
    <>
      <div
        className="min-h-screen bg-center bg-no-repeat opacity-80"
        style={backgroundImageStyle}
      >
        <GoBack to={"/" }/>
        {loading ? (
          <Loading />
        ) : error ? (
          <div className="flex h-screen w-screen items-center justify-center">
            <h3 className="text-xl font-bold">The movie is not found</h3>
          </div>
        ) : (
          movieData && (
            <MovieDetails  movieData = {movieData} id = {id}/>
           
          )
        )}
      </div>
    </>
  );
};
