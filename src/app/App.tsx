import { Suspense, lazy } from "react";
import "./app.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "@/widgets/header";
import Footer from "@/widgets/footer";

const Login = lazy(() => import("@/pages/login"));
const Catalog = lazy(() => import("@/pages/catalog"));

function App() {
  return (
    <Router>
      <main className="flex-grow p-12">
        <Header />
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
            path="/"
            element={
              <Suspense fallback={<div>Загрузка...</div>}>
                <Catalog />
              </Suspense>
            }
          />
        </Routes>
        <Footer />
      </main>
    </Router>
  );
}

export default App;
