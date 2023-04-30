import "./App.css";
import { useRoutes, Link } from "react-router-dom";
import Movies from "./pages/Movies";
import TvShows from "./pages/TvShows";

function App() {
  const routes = useRoutes([
    {
      path: "/",
      element: <Movies />,
    },
    {
      path: "/Movies",
      element: <Movies />,
    },
    {
      path: "/TvShows",
      element: <TvShows />,
    },
  ]);

  return (
    <>
      <nav>
        <Link to="/">
          <h1>Home</h1>
        </Link>

        <Link to="/Movies">
          <span>Movies</span>
        </Link>

        <Link to="/TvShows">
          <span>Tv Shows</span>
        </Link>

      </nav>
      {routes}

      <footer>
        <h2>copyrigths reserved Megaflix - 2023</h2>
      </footer>
    </>
  );
}

export default App;
