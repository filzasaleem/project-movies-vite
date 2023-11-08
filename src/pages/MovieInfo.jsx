import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { MovieImage } from "../components/MovieImage";
import { Loading } from "../components/Loading";

export const MovieInfo = () => {
  const temp;
  const { id } = useParams();
  const apiKey = "bde83eefea9dd68d9520fa912b04d54e";
  const movieUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`;
  const [movieData, setMovieData] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {

    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(movieUrl);

        if (response.ok) {
          const data = await response.json();
          console.log("movie details data", data);
          setMovieData(data);
        } else {
          setError(true);
        }
      } catch (error) {
        //setError(true);
        
      } finally {
        setLoading(false);
      }
    };


    fetchData();
  }, []);

  return (
    <>
      <p>Movie details here</p>
      {loading ? (
        <Loading />
      ) : error ? (
        <h3>The movie is not found</h3>
      ) : (
        movieData && (
          <div>
            <MovieImage imageUrl={movieData.backdrop_path} imageSize="w780" />
            <p>{movieData.title}</p>
            <p>{movieData.overview}</p>
          </div>
        )
      )}
    </>
  );
};
