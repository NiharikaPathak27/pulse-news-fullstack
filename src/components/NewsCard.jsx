
import React from "react";

function NewsCard({ article }) {
  const saveBookmark = async () => {
  try {
    console.log(article.urlToImage);
    await fetch("http://localhost:5000/bookmark", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: article.title,
        url: article.url,
        image: article.urlToImage   
      })
    });

    alert("Bookmark saved 👍");
  } catch (err) {
    console.log(err);
  }
};
  

  return (
    <div className="card">

      <img 
        src={article.urlToImage} 
        alt="news" 
        onError={(e) => (e.target.style.display = "none")}
      />

      <h3>{article.title}</h3>

      <p>{article.description}</p>

      <a href={article.url} target="_blank" rel="noreferrer">
        Read More
      </a>

      {/*  Bookmark Button */}
      <button onClick={saveBookmark}>
        🔖 Bookmark
      </button>

    </div>
  );
}

export default NewsCard;