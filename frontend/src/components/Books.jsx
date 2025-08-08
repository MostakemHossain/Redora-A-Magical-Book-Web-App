import React, { useState, useEffect } from "react";
import LoadingPage from "./LoadingPage";
import { useNavigate } from "react-router-dom";

const Books = () => {
  const navigate = useNavigate();
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [visibleCount, setVisibleCount] = useState(8);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        setLoading(true);
        const res = await fetch("http://localhost:4000/books");
        if (!res.ok) throw new Error("Failed to fetch books");
        const data = await res.json();
        setBooks(data.data || data);
      } catch (err) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };
    fetchBooks();
  }, []);

  const lowerSearch = searchTerm.toLowerCase();
  const filteredBooks = books.filter(
    (book) =>
      book.title?.toLowerCase().includes(lowerSearch) ||
      book.author?.toLowerCase().includes(lowerSearch)
  );

  const visibleBooks = filteredBooks.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 6);
  };


  if (loading) return <LoadingPage />;

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen text-red-500 text-lg">
        <p>⚠ {error}</p>
      </div>
    );
  }

  return (
    <div className="px-4 md:px-12 py-10 bg-gray-50 min-h-screen">
     
      <div className="flex flex-col md:flex-row items-center justify-between mb-6 gap-4">
        <h1 className="text-3xl font-bold text-gray-900">
          All Books <span className="text-yellow-500">({filteredBooks.length})</span>
        </h1>
        <input
          type="text"
          placeholder="Search books..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full md:w-64 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
      </div>

     
      {visibleBooks.length === 0 ? (
        <p className="text-center text-gray-500 py-10">No books found 📚</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {visibleBooks.map(({ _id, title, caption, image, rating, author, price }) => (
            <div
              key={_id}
              className="bg-white rounded-xl border border-gray-200 shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col overflow-hidden"
            >
              <div className="h-56 w-full overflow-hidden">
                <img
                  src={image}
                  alt={title}
                  className="h-full w-full object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-1 text-gray-900">{title}</h3>
                <p className="text-sm text-gray-500 italic mb-3">By {author}</p>
                <p className="text-gray-600 mb-4 flex-grow">{caption}</p>

                <div className="flex justify-between items-center mb-4">
                  <p className="text-green-700 font-semibold">${price?.toFixed(2) || "N/A"}</p>
                  <p className="text-yellow-500 font-semibold text-lg select-none">
                    ⭐ {rating ? rating.toFixed(1) : "N/A"}
                  </p>
                </div>

                <button
                 onClick={() => navigate(`/books/${_id}`)}
                  className="mt-auto px-5 py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

     
      {visibleCount < filteredBooks.length && (
        <div className="mt-8 flex justify-center">
          <button
            onClick={handleLoadMore}
            className="px-6 py-2 bg-yellow-500 text-black rounded-lg hover:bg-yellow-600 hover:text-white transition"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default Books;
