import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Details from "./pages/Details";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Auth from "./pages/Auth";



function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/login" element={<Auth mode="login" />} />
          <Route path="/register" element={<Auth mode="register" />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
