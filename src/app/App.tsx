import { Suspense } from "react";
import "./app.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "@/widgets/Navigation";
import Login from "@/pages/login";
import Product from "@/pages/product";
import Catalog from "@/pages/catalog";

function App() {
  return (
    <Router>
      <main className="">
        <Navigation />
        <Routes>
          <Route
            path="/login"
            element={
              <Suspense fallback={<div>Загрузка...</div>}>
                <Login />
              </Suspense>
            }
          />
          <Route
            path="/product/:id"
            element={
              <Suspense fallback={<div>Загрузка...</div>}>
                <Product />
              </Suspense>
            }
          />
          <Route
            path="/"
            element={
              <Suspense fallback={<div>Загрузка...</div>}>
                <Catalog />
              </Suspense>
            }
          />
        </Routes>
        <Navigation />
      </main>
    </Router>
  );
}

export default App;
