import { BrowserRouter, Routes, Link, Route } from "react-router-dom";
import routes from "./routes/routes";
import { Home } from "./pages/Home";

export const App = () => {
  return (
    <>
      <>
        <BrowserRouter>
          <nav>
            <ul className="app-ul">
              <li className="app-li">
                <Link to="/">Home</Link>
              </li>
            </ul>
          </nav>

          <main>
            <Routes>{routes}</Routes>
           
          </main>
        </BrowserRouter>
      </>
    </>
  );
};
