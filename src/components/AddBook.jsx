import React from "react";
import { Link } from "react-router-dom";
import "./AddBook.css"; // ✅ Import the CSS file

const AddBook = () => {
  return (
    <div className="add-book-page"> {/* ✅ Add wrapper for centering */}
      <div className="add-book-container">
        <h2>Add a New Book</h2>
        <form>
          <label>Title:</label>
          <input type="text" placeholder="Enter book title" required />

          <label>Author:</label>
          <input type="text" placeholder="Enter author name" required />

          <label>Description:</label>
          <textarea placeholder="Enter book description" required></textarea>

          <label>Cover Image URL:</label>
          <input type="url" placeholder="Enter image URL" required />

          <button type="submit">Submit</button>
        </form>
        <Link to="/">Back to Home</Link>
      </div>
    </div>
  );
};

export default AddBook;
