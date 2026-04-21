import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar({ setSearch, setDarkMode, darkMode }) {
  const [input, setInput] = useState("");

  const handleSearch = () => {
    if (input.trim() !== "") {
      setSearch(input);
    }
  };

  return (
    <nav className="main-nav">

      {/*  Logo */}
      <div className="logo">⚡ PulseNews</div>

      {/*  Navigation Links */}
      <div className="nav-links">

        <button onClick={() => setSearch("sports")}>
          Sports
        </button>

        <button onClick={() => setSearch("technology")}>
          Technology
        </button>

        <button onClick={() => setSearch("india")}>
          India
        </button>

        <button onClick={() => setSearch("politics")}>
          Politics
        </button>

        {/*  Bookmarks Page */}
        <Link to="/bookmarks" className="bookmark-link">
          🔖 Bookmarks
        </Link>

      </div>

      {/*  Search Box */}
      <div className="search-bar">

        <input
          type="text"
          placeholder="Search news..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
        />

        <button onClick={handleSearch}>
          Search
        </button>

      </div>

      {/*  Dark Mode Toggle */}
      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "☀️ Light" : "🌙 Dark"}
      </button>

    </nav>
  );
}

export default Navbar;