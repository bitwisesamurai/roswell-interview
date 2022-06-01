import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";

import Home from "./pages/Home";
import One from "./pages/One";
import Two from "./pages/Two";

import styles from "./App.module.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="one" element={<One />} />
          <Route path="two" element={<Two />} />
          {/* Using path="*"" means "match anything", so this route
            acts like a catch-all for URLs that we don't have explicit
            routes for. */}
          {/* <Route path="*" element={<NoMatch />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function Layout() {
  return (
    <div>
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
      <nav>
        <ul className={styles.navBar}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/One">One</Link>
          </li>
          <li>
            <Link to="/two">Two</Link>
          </li>
          {/* <li>
            <Link to="/nothing-here">Nothing Here</Link>
          </li> */}
        </ul>
      </nav>

      <hr />

      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
    </div>
  );
}

export default App;
