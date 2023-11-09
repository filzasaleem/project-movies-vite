import { BrowserRouter, Routes } from "react-router-dom";
import routes from "./routes/routes";


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

          <main >
            <Routes>{routes}</Routes>
           
          </main>
        </BrowserRouter>
      </>
    </>
  );
};


// import { BrowserRouter, Routes } from "react-router-dom";
// import routes from "./routes/routes";


// const appStyles = {
//   height: "100vh", // 100% of the viewport height
//   width: "100vw",  // 100% of the viewport width
// };

// const mainStyles = {
//   backgroundColor: "black",
//   color: "white",
//   height: "100%",  // 100% of the parent element's height (which is the viewport height)
//   width: "100%",   // 100% of the parent element's width (which is the viewport width)
// };

// export const App = () => {
//   return (
//     <BrowserRouter>
//       <div style={appStyles}>
//         <main style={mainStyles}>
//           <Routes>{routes}</Routes>
//         </main>
//       </div>
//     </BrowserRouter>
//   );
// };
