import React from "react";
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate
import BookCard from "./components/BookCard";
import books from "./booksData";
import "./Home.css"; // Import CSS for styling

const Home = () => {
  const navigate = useNavigate(); // ✅ Define navigate function

  return (
    <div className="home-container">
      <h1>Book Library</h1>
      <button className="add-book-btn" onClick={() => navigate("/add-book")}>
        Add Book
      </button>
      <div className="books-grid">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Home;
