import React, { useEffect, useState } from "react";

function Bookmarks() {
  const [bookmarks, setBookmarks] = useState([]);

  const fetchBookmarks = async () => {
    const res = await fetch("http://localhost:5000/bookmarks");
    const data = await res.json();
    setBookmarks(data);
  };

  const deleteBookmark = async (id) => {
    await fetch(`http://localhost:5000/delete/${id}`, {
      method: "DELETE",
    });

    fetchBookmarks();
  };

  useEffect(() => {
    fetchBookmarks();
  }, []);

  return (
    <div className="news-container">

      <h1 style={{ width: "100%", textAlign: "center" }}>
        🔖 Saved Bookmarks
      </h1>

      {bookmarks.length === 0 ? (
        <h3 style={{ width: "100%", textAlign: "center" }}>
          No bookmarks found 😢
        </h3>
      ) : (
        bookmarks.map((item) => (
          <div className="card" key={item.id}>
              {/* <img src={item.image} alt="news" /> */}
              {/* <img
  src={item.image || "https://via.placeholder.com/300"}
  alt="news"
/> */}
<img
  src={item.image}
  alt="news"
  onError={(e) => {
    e.target.style.display = "none";
  }}
/>


            <h3>{item.title}</h3>

            <a href={item.url} rel="noreferrer">
              Read Article
            </a>

            <button onClick={() => deleteBookmark(item.id)}>
              ❌ Delete
            </button>

          </div>
        ))
      )}

    </div>
  );
}

export default Bookmarks;