import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { MovieImage } from '../components/MovieImage';
import { Loading } from '../components/Loading';

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
    backgroundSize: 'cover', // Ensure the background image covers the container
  };


  return (
    <>
      <div
        className="min-h-screen bg-center bg-no-repeat opacity-80"
        style={backgroundImageStyle}
      >
        <div className="p-6 text-white bg-black opacity-60 z-10 font-bold text-2xl underline">
          <Link to="/">Back</Link>
        </div>
        {loading ? (
          <Loading />
        ) : error ? (
          <div className="flex items-center justify-center h-screen w-screen">
          <h3 className='font-bold text-xl'>The movie is not found</h3>
          </div>
        ) : (
          movieData && (
            <div className="flex flex-wrap items-end justify-end max-h-max max-w-sm p-6">
            <div className="bg-white p-1">
              <MovieImage imageUrl={movieData.backdrop_path} imageSize="w780" />
            </div>
            <div className="bg-gray flex flex-col justify-end p-4 text-justify text-white relative">
            
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 z-10"></div>
              <div className="relative z-20">
                <div className="flex flex-row justify-between">
                  <h2 className="pb-2 font-extrabold text-white">{movieData.title}</h2>
                  <p className="bg-white text-black px-1">⭐{movieData.vote_average.toFixed(1)}</p>
                </div>
                <p>{movieData.overview}</p>
              </div>
            </div>
            <div className="max-h-max max-w-sm"></div>
          </div>
          )
        )}
      </div>
    </>
  );
};


 
