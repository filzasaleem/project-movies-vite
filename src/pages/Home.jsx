import { useState, useEffect } from "react";
import { MovieImage } from "../components/MovieImage";
import { Link } from "react-router-dom";
import { DropDownList } from "../components/DropDownList";
import { Loading } from "../components/Loading";

export const Home = () => {
  const [moviesData, setMoviesData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [category,setCategory] = useState("popular")

  const apiKey = "bde83eefea9dd68d9520fa912b04d54e";
  //let category = "popular";
  const apiUrl = `https://api.themoviedb.org/3/movie/${category}?api_key=${apiKey}&language=en-US&page=1`;

  


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log("api data", data.results);
        setMoviesData(data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }finally {
        console.log("finally called")
        setLoading(false); // Set loading to false when data fetching is completed
      }
    };

    fetchData();
    
  }, [category]);

  return (
    <>
      <h3>home is here </h3>
      {/* {loading && <MoviesList />}
      {!loading && <div>Loading...</div>} */}
      <DropDownList value = {category} setCategory={setCategory}/>
      {!loading? (moviesData.map((movie) => (
        <Link to={`/movies/${movie.id}`} key={movie.id}>
          <div className="movieBox">
            <p>{movie.title}</p>
            <p>{movie.release_date}</p>

            <MovieImage imageUrl={movie.backdrop_path} imageSize="w300"/>
          </div>
         </Link>
      ))) : (<Loading />)}
    </>
  );
};
