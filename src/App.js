import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import NewsList from "./components/NewsList";
// import Bookmarks from "./pages/Bookmarks";
import Bookmarks from "./Pages/Bookmarks";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  const [articles, setArticles] = useState([]);
  const [search, setSearch] = useState("technology");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [showTop, setShowTop] = useState(false);

  const API_KEY = "44836e473ecf49a8844a3f836658092e";

  //  Fetch News
  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        setError("");

        const res = await fetch(
          `https://newsapi.org/v2/everything?q=${search}&page=${page}&pageSize=10&apiKey=${API_KEY}`
        );

        const data = await res.json();

        if (data.status !== "ok") {
          setError(data.message || "Failed to load news");
          return;
        }

        setArticles((prev) => [...prev, ...(data.articles || [])]);
      } catch (err) {
        setError("Failed to load news");
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [search, page]);

  //  Reset on search change
  useEffect(() => {
    setArticles([]);
    setPage(1);
  }, [search]);

  //  Infinite scroll + back to top
  useEffect(() => {
    let timeout;

    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowTop(true);
      } else {
        setShowTop(false);
      }

      clearTimeout(timeout);

      timeout = setTimeout(() => {
        if (
          !loading &&
          window.innerHeight + window.scrollY >=
            document.documentElement.scrollHeight - 50
        ) {
          setPage((prev) => prev + 1);
        }
      }, 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading]);

  return (
    <Router>
      <div className={darkMode ? "dark" : ""}>

        <Navbar
          setSearch={setSearch}
          setDarkMode={setDarkMode}
          darkMode={darkMode}
        />

        {error && (
          <h2 style={{ textAlign: "center", color: "red" }}>
            {error}
          </h2>
        )}

        <Routes>

          {/* 📰 HOME PAGE */}
          <Route
            path="/"
            element={
              <NewsList articles={articles} loading={loading} />
            }
          />

          {/*  BOOKMARKS PAGE */}
          <Route path="/bookmarks" element={<Bookmarks />} />

        </Routes>

        {/*  Back to Top Button */}
        {showTop && (
          <button
            className="top-btn"
            onClick={() =>
              window.scrollTo({ top: 0, behavior: "smooth" })
            }
          >
            ⬆ Top
          </button>
        )}

      </div>
    </Router>
  );
}

export default App;