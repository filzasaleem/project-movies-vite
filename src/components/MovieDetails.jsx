import { Link } from 'react-router-dom';
import { MovieImage } from './MovieImage';

export const MovieDetails = ({ movieData, id }) => {
  return (
    <>
      <div className="flex  flex-row max-h-max max-w-sm flex-wrap  p-6">
        <div className="bg-white p-1">
          <MovieImage imageUrl={movieData.backdrop_path} imageSize="w1280" />
        </div>
        <div className=" relative flex flex-col justify-end bg-black p-4  text-justify opacity-60">
         
          <div className="flex flex-row justify-between ">
            <h2 className="mr-2 pb-2  text-xl font-black">{movieData.title}</h2>
            <p className="ml-4 bg-white  px-1 text-black">
              ⭐{movieData.vote_average.toFixed(1)}
            </p>
          </div>
          <div className='flex flex-row items-center'>
            <h2 className='text-lg font-black pr-2'>Genre:</h2>
            {movieData.genres.map((genre) => (
              <p key={genre.id} className="mr-2 ">
                {genre.name}
              </p>
            ))}
          </div>
          <p>{movieData.overview}</p>
          <div className='text-bold" py-2'>
            <Link to={`/movies/similar/${id}`}>
              <span className="underline ">Similar Movies</span>
            </Link>
          </div>
          
        </div>
      </div>
    </>
  );
};
