import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
  NavLink,
} from "react-router-dom";
import About from "./About";
import "./App.css";
import FAQ from "./FAQ";
import Home from "./Home";

const Layout = () => {
  return (
    <>
      <header>
        <h1>Teamcity DOCKER Test App</h1>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/faq">FAQ</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="faq" element={<FAQ />} />
    </Route>
  ),
  { basename: "/ga-test" }
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
