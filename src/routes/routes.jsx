import { Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { MovieInfo } from "../pages/MovieInfo";
import { NotFound } from "../pages/NotFound";

const routes = (
  <>
    <Route path="/" element={<Home />} />
    <Route path="/movies/:id" element={<MovieInfo />}></Route>
    <Route path="*" element={<NotFound />} ></Route>
  </>
);

export default routes;
