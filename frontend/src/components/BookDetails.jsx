import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LoadingPage from "./LoadingPage";
import { toast } from "sonner";

const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      stars.push(<span key={i} className="text-yellow-400">★</span>);
    } else if (rating >= i - 0.5) {
      stars.push(<span key={i} className="text-yellow-400">☆</span>); 
    } else {
      stars.push(<span key={i} className="text-gray-300">★</span>);
    }
  }
  return <div className="text-lg">{stars}</div>;
};

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;

    const fetchBook = async () => {
      setLoading(true);
      try {
        const res = await fetch(`http://localhost:4000/books/${id}`);
        if (!res.ok) {
          throw new Error("Book not found");
        }
        const data = await res.json();
        setBook(data.data);
      } catch (err) {
        setError(err.message || "Failed to fetch book");
      } finally {
        setLoading(false);
      }
    };

    fetchBook();
  }, [id]);

  if (loading) return <LoadingPage />;

  if (error)
    return (
      <div className="min-h-screen flex items-center justify-center text-red-600 text-lg font-semibold">
        {error}
      </div>
    );

  if (!book)
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600 text-lg font-medium">
        Book not found.
      </div>
    );

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white shadow-md rounded-lg my-10">
      <div className="flex flex-col md:flex-row gap-8">
        
        <div className="md:w-1/3 flex justify-center items-start">
          <img
          height={600}
          width={600}
            src={book?.image}
            alt={book?.title}
            className="rounded-lg shadow-lg max-h-96 object-contain"
          />
        </div>

        
        <div className="md:w-2/3 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">{book.title}</h1>
            <p className="text-lg text-gray-700 mb-4 italic">by {book.author}</p>

            
            <div className="flex items-center mb-4 space-x-3">
              <StarRating rating={book.rating} />
              <span className="text-gray-600 text-sm">({book.reviews} reviews)</span>
            </div>

          
            <div className="flex flex-wrap gap-2 mb-4">
              {book.genre.map((g) => (
                <span
                  key={g}
                  className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full"
                >
                  {g}
                </span>
              ))}
            </div>

           
            <p className="text-gray-800 leading-relaxed mb-6">{book?.caption}</p>
          </div>

         
          <div className="grid grid-cols-2 gap-4 text-gray-700 font-medium mb-6">
            <div>
              <span className="block">Published Year:</span>
              <span className="text-gray-900">{book?.publishedYear}</span>
            </div>
            <div>
              <span className="block">Pages:</span>
              <span className="text-gray-900">{book?.pages}</span>
            </div>
            <div>
              <span className="block">Language:</span>
              <span className="text-gray-900">{book?.language}</span>
            </div>
            <div>
              <span className="block">Availability:</span>
              <span className={`font-semibold ${book?.available ? "text-green-600" : "text-red-600"}`}>
                {book.available ? "In Stock" : "Out of Stock"}
              </span>
            </div>
          </div>

          
          <div className="flex items-center space-x-6">
            <p className="text-2xl font-bold text-gray-900">${book?.price.toFixed(2)}</p>
            {book?.available ? (
              <button
                className="px-6 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition"
                onClick={() => toast.warning("Purchase feature coming soon!")}
              >
                Buy Now
              </button>
            ) : (
              <button
                disabled
                className="px-6 py-2 bg-gray-400 text-white rounded-lg cursor-not-allowed"
              >
                Out of Stock
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
