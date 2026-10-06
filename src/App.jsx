import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./components/pages/HomePage";
import AppLayout from "./components/layout/AppLayout";
import ChiSiamo from "./components/pages/ChiSiamo";
import Prodotti from "./components/pages/Prodotti";
import SingleProduct from "./components/pages/SingleProduct";
import PageNotFound from "./components/pages/PageNotFound";
import ErrorTryLater from "./components/pages/ErrorTryLater";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route
              path="/"
              element={<HomePage />}
            />
            <Route
              path="/about-us"
              element={<ChiSiamo />}
            />
            <Route
              path="/products"
              element={<Prodotti />}
            />
            <Route
              path="/products/:id"
              element={<SingleProduct />}
            />
            <Route
              path="/404"
              element={<PageNotFound />}
            />
            <Route
              path="/*"
              element={<ErrorTryLater />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
