import React from "react";
import "./app.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import { useState, useEffect } from "react";
import PacmanLoader from "react-spinners/PacmanLoader";
import AnimatedRoutes from "./Components/AnimatedRoutes";
export default function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    
      <React.Fragment>
        {loading ? (
          <div className="load">
            <PacmanLoader color="#1bf8f8" loading={loading} size={40} />
          </div>
        ) : (
          <React.Fragment>
            <Navbar />
            <AnimatedRoutes />
            <Footer />
          </React.Fragment>
        )}
      </React.Fragment>
    
  );
}
