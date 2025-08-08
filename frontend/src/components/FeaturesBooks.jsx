import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LoadingPage from "./LoadingPage";

const FeaturesBooks = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await fetch("http://localhost:4000/books/");
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

  if (loading) return <LoadingPage />;
  if (error) return <div className="text-center py-10 text-red-500">{error}</div>;

  const visibleBooks = books.slice(0, 6);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h2 className="text-5xl font-extrabold text-center mb-4 bg-gradient-to-r from-yellow-400 to-teal-500 text-transparent bg-clip-text">
        Explore Our Featured Books
      </h2>

      <p className="max-w-3xl mx-auto text-center text-gray-600 mb-20">
        Discover a curated selection of must-read books across various genres. Dive into inspiring stories,
        insightful knowledge, and captivating reads handpicked just for you.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {visibleBooks.map(({ _id, title, caption, image, rating, author, price }) => (
          <div
            key={_id}
            className="bg-white rounded-xl border border-gray-200 shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col overflow-hidden"
          >
            <img
              src={image}
              alt={title}
              className="h-56 w-full object-cover rounded-t-xl"
              loading="lazy"
            />
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-2xl font-semibold mb-2 text-gray-900">{title}</h3>
              <p className="text-gray-600 mb-4 flex-grow">{caption}</p>

              <div className="flex justify-between items-center mb-3">
                <p className="text-sm text-gray-500 italic">By {author}</p>
                <p className="text-sm font-semibold text-green-700">${price?.toFixed(2) || "N/A"}</p>
              </div>

              <div className="flex justify-between items-center mb-5">
                <p className="text-yellow-500 font-semibold text-lg select-none">
                  ⭐ {rating?.toFixed(1) || "N/A"}
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

      <div className="mt-12 flex justify-center">
        <button
          onClick={() => navigate("/books")}
          className="px-8 py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out"
        >
          See More
        </button>
      </div>
    </section>
  );
};

export default FeaturesBooks;
