import { Routes, Route } from "react-router-dom";
import { Navbar } from "./component/navbar/navbar";
import Home from "./pages/home";
import Favorite from "./pages/favorites";
import About from "./pages/about/about";
import Details from "./pages/details";
import SearchRecipe from "./pages/search";
import Header from "./component/header";
import Footer from "./component/footer";
import Meals, { DefaultMeals } from "./pages/meals";
import ContactUs from "./pages/contact";



function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/favorites"
          element={<Favorite />}
        />
        <Route
          path="/search"
          element={<SearchRecipe />}

        />
        <Route
          path="/meals/:id"
          element={<Meals />}
        />
        <Route
          path="/meals"
          element={<DefaultMeals />}
        />
        <Route
          path="/about"
          element={<About />}
        />
        <Route
          path="/recipe-item/:id"
          element={<Details />}
        />
        <Route
          path="/contact"
          element={<ContactUs />}
        />
      </Routes>
    </div>
  );
}

export default App;
