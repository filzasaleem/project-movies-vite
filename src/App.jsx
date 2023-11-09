import { BrowserRouter, Routes } from 'react-router-dom';
import routes from './routes/routes';

export const App = () => {
  return (
    <>
      <>
        <BrowserRouter>
          {/* <nav>
            <ul className="app-ul">
              <li className="app-li">
                <Link to="/">Home</Link>
              </li>
            </ul>
          </nav> */}

          <main>
            <Routes>{routes}</Routes>
          </main>
        </BrowserRouter>
      </>
    </>
  );
};
