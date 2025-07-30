import React, { useState } from 'react';

const booksData = [
  { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', price: 9.99, cover: 'https://picsum.photos/id/1011/200/300' },
  { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', price: 12.5, cover: 'https://picsum.photos/id/1012/200/300' },
  { id: 3, title: '1984', author: 'George Orwell', price: 8.99, cover: 'https://picsum.photos/id/1013/200/300' },
  { id: 4, title: 'Pride and Prejudice', author: 'Jane Austen', price: 10.99, cover: 'https://picsum.photos/id/1014/200/300' },
  { id: 5, title: 'Moby-Dick', author: 'Herman Melville', price: 11.49, cover: 'https://picsum.photos/id/1015/200/300' },
  { id: 6, title: 'War and Peace', author: 'Leo Tolstoy', price: 13.99, cover: 'https://picsum.photos/id/1016/200/300' },
  { id: 7, title: 'Hamlet', author: 'William Shakespeare', price: 6.75, cover: 'https://picsum.photos/id/1017/200/300' },
  { id: 8, title: 'The Odyssey', author: 'Homer', price: 7.95, cover: 'https://picsum.photos/id/1018/200/300' },
  { id: 9, title: 'Crime and Punishment', author: 'Fyodor Dostoevsky', price: 9.25, cover: 'https://picsum.photos/id/1019/200/300' },
  { id: 10, title: 'The Catcher in the Rye', author: 'J.D. Salinger', price: 10.99, cover: 'https://picsum.photos/id/1020/200/300' },
  { id: 11, title: 'Brave New World', author: 'Aldous Huxley', price: 8.99, cover: 'https://picsum.photos/id/1021/200/300' },
  { id: 12, title: 'The Hobbit', author: 'J.R.R. Tolkien', price: 12.99, cover: 'https://picsum.photos/id/1022/200/300' },
];

const Books = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [visibleCount, setVisibleCount] = useState(8);

  const filteredBooks = booksData.filter(book =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const visibleBooks = filteredBooks.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 6);
  };

  return (
    <div className="px-4 md:px-12 py-10 bg-gray-50 min-h-screen">
      <div className="flex flex-col md:flex-row items-center justify-between mb-6 gap-4">
        <h1 className="text-3xl font-bold text-center md:text-left">
          All Books ({filteredBooks.length})
        </h1>
        <div className="flex items-center gap-2 w-full md:w-auto">
          <input
            type="text"
            placeholder="Search books..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full md:w-64 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
          <button
            className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition"
            onClick={() => {}}
          >
            Search
          </button>
        </div>
      </div>

      {visibleBooks.length === 0 ? (
        <p className="text-center text-gray-500">No books found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {visibleBooks.map((book) => (
            <div
              key={book.id}
              className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition duration-300"
            >
              <img
                src={book.cover}
                alt={book.title}
                className="w-full h-60 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800">
                  {book.title}
                </h2>
                <p className="text-sm text-gray-500">{book.author}</p>
                <p className="text-md text-orange-500 font-semibold mt-1">
                  ${book.price.toFixed(2)}
                </p>
                <button className="mt-4 w-full bg-yellow-500 text-black py-2 px-4 rounded hover:bg-yellow-600 transition">
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
