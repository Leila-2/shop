import { Routes, Route, useNavigate } from "react-router-dom";
import SignupPage from "./pages/authPages/SignupPage";
import LoginPage from "./pages/authPages/LoginPage";
import Profile from "./pages/Profile";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage.jsx";
import ProductCard from "./components/ProductCard";
import { useAuth } from "./hooks/useAuth";

function App() {
  const navigate = useNavigate();
  const { isAuth } = useAuth();
  return (
    <>
      <Routes>
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/profile"
          action={() => {
            if (isAuth) {
              return navigate("/signup");
            }
            return;
          }}
          element={<Profile />}
        />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<ProductCard />} />
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </>
  );
}

export default App;
