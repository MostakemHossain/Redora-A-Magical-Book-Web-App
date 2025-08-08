import React, { useState } from "react";
import { toast } from "sonner";

const AddBooks = () => {
  const [form, setForm] = useState({
    title: "",
    caption: "",
    image: "",
    rating: "",
    author: "",
    genre: "",
    publishedYear: "",
    pages: "",
    language: "",
    available: false,
    reviews: "",
    price: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    if (!form.title || !form.author) {
      setError("Please fill in required fields: Title and Author");
      return;
    }

    const genresArray = form.genre
      .split(",")
      .map((g) => g.trim())
      .filter(Boolean);

    const bookData = {
      ...form,
      rating: parseFloat(form.rating) || 0,
      publishedYear: parseInt(form.publishedYear, 10) || null,
      pages: parseInt(form.pages, 10) || null,
      reviews: parseInt(form.reviews, 10) || 0,
      price: parseFloat(form.price) || 0,
      genre: genresArray,
    };

    setLoading(true);

    try {
      const accessToken = localStorage.getItem("accessToken");
      const res = await fetch("http://localhost:4000/books/create-book", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${accessToken}`,
        },
        body: JSON.stringify(bookData),
      });

      if (!res.ok) {
        throw new Error("Failed to add book");
      }
      toast.success("Book added successfully!");
      setSuccess("Book added successfully!");
      setForm({
        title: "",
        caption: "",
        image: "",
        rating: "",
        author: "",
        genre: "",
        publishedYear: "",
        pages: "",
        language: "",
        available: false,
        reviews: "",
        price: "",
      });
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">
        Add New Book
      </h2>

      {error && (
        <div className="mb-6 px-4 py-3 text-red-700 bg-red-100 border border-red-300 rounded">
          {error}
        </div>
      )}

      {success && (
        <div className="mb-6 px-4 py-3 text-green-700 bg-green-100 border border-green-300 rounded">
          {success}
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
        noValidate
      >
        <div className="flex flex-col space-y-6">
          <div>
            <label
              htmlFor="title"
              className="block text-gray-700 font-semibold mb-2"
            >
              Title <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={form.title}
              onChange={handleChange}
              required
              placeholder="Enter book title"
              className="w-full rounded-md border border-gray-300 px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          <div>
            <label
              htmlFor="caption"
              className="block text-gray-700 font-semibold mb-2"
            >
              Caption
            </label>
            <textarea
              id="caption"
              name="caption"
              value={form.caption}
              onChange={handleChange}
              rows={8}
              placeholder="Brief description or caption"
              className="w-full rounded-md border border-gray-300 px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 resize-none"
            />
          </div>

          <div>
            <label
              htmlFor="image"
              className="block text-gray-700 font-semibold mb-2"
            >
              Image URL
            </label>
            <input
              type="url"
              id="image"
              name="image"
              value={form.image}
              onChange={handleChange}
              placeholder="https://example.com/image.jpg"
              className="w-full rounded-md border border-gray-300 px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          <div>
            <label
              htmlFor="rating"
              className="block text-gray-700 font-semibold mb-2"
            >
              Rating (0-5)
            </label>
            <input
              type="number"
              id="rating"
              name="rating"
              min="0"
              max="5"
              step="0.1"
              value={form.rating}
              onChange={handleChange}
              placeholder="e.g. 4.5"
              className="w-full rounded-md border border-gray-300 px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          <div>
            <label
              htmlFor="author"
              className="block text-gray-700 font-semibold mb-2"
            >
              Author <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              id="author"
              name="author"
              value={form.author}
              onChange={handleChange}
              required
              placeholder="Author's name"
              className="w-full rounded-md border border-gray-300 px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>
        </div>

        <div className="flex flex-col space-y-6">
          <div>
            <label
              htmlFor="genre"
              className="block text-gray-700 font-semibold mb-2"
            >
              Genre (comma separated)
            </label>
            <input
              type="text"
              id="genre"
              name="genre"
              value={form.genre}
              onChange={handleChange}
              placeholder="Fiction, Social, History"
              className="w-full rounded-md border border-gray-300 px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          <div>
            <label
              htmlFor="publishedYear"
              className="block text-gray-700 font-semibold mb-2"
            >
              Published Year
            </label>
            <input
              type="number"
              id="publishedYear"
              name="publishedYear"
              value={form.publishedYear}
              onChange={handleChange}
              placeholder="e.g. 2020"
              className="w-full rounded-md border border-gray-300 px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          <div>
            <label
              htmlFor="pages"
              className="block text-gray-700 font-semibold mb-2"
            >
              Pages
            </label>
            <input
              type="number"
              id="pages"
              name="pages"
              value={form.pages}
              onChange={handleChange}
              placeholder="Number of pages"
              className="w-full rounded-md border border-gray-300 px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          <div>
            <label
              htmlFor="language"
              className="block text-gray-700 font-semibold mb-2"
            >
              Language
            </label>
            <input
              type="text"
              id="language"
              name="language"
              value={form.language}
              onChange={handleChange}
              placeholder="e.g. English"
              className="w-full rounded-md border border-gray-300 px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          <div className="flex items-center space-x-3 pt-4">
            <input
              type="checkbox"
              id="available"
              name="available"
              checked={form.available}
              onChange={handleChange}
              className="h-5 w-5 text-yellow-600 rounded focus:ring-yellow-400"
            />
            <label
              htmlFor="available"
              className="font-semibold text-gray-800 select-none"
            >
              Available
            </label>
          </div>

          <div>
            <label
              htmlFor="reviews"
              className="block text-gray-700 font-semibold mb-2"
            >
              Number of Reviews
            </label>
            <input
              type="number"
              id="reviews"
              name="reviews"
              value={form.reviews}
              onChange={handleChange}
              placeholder="e.g. 100"
              className="w-full rounded-md border border-gray-300 px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          <div>
            <label
              htmlFor="price"
              className="block text-gray-700 font-semibold mb-2"
            >
              Price ($)
            </label>
            <input
              type="number"
              id="price"
              name="price"
              step="0.01"
              value={form.price}
              onChange={handleChange}
              placeholder="e.g. 19.99"
              className="w-full rounded-md border border-gray-300 px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>
        </div>

        <div className="md:col-span-2">
          <button
            type="submit"
            disabled={loading}
            className={`w-full rounded-md py-4 font-semibold text-white transition-colors ${
              loading
                ? "bg-yellow-300 cursor-not-allowed"
                : "bg-yellow-500 hover:bg-yellow-600"
            }`}
          >
            {loading ? "Adding Book..." : "Add Book"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBooks;
