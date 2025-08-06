import React from 'react';

const testimonials = [
  {
    name: 'Shakib Rahman',
    role: 'Student at DU',
    rating: 5,
    feedback: 'I found some rare books easily on this platform. The service and packaging were excellent!',
    image: 'https://i.pravatar.cc/150?img=3',
  },
  {
    name: 'Farhana Akter',
    role: 'Book Lover & Blogger',
    rating: 4,
    feedback: 'Loved how I could find all my favorite authors in one place. Highly recommended for book lovers!',
    image: 'https://i.pravatar.cc/150?img=5',
  },
  {
    name: 'Mizanur Rahman',
    role: 'Lecturer, RU',
    rating: 5,
    feedback: 'Very user-friendly and customer support is great. I’ll definitely buy from here again, In Sha Allah!',
    image: 'https://i.pravatar.cc/150?img=8',
  },
];

const Testimonial = () => {
  return (
    <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-16">
      <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-yellow-400 to-teal-500 text-transparent bg-clip-text mb-10">
        What Our Readers Say
      </h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between h-full"
          >
            <div className="mb-4">
              <p className="text-gray-600 italic">"{testimonial.feedback}"</p>
            </div>
            <div className="flex items-center mt-6">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-14 h-14 rounded-full border-2 border-gray-300 mr-4"
              />
              <div>
                <h4 className="font-semibold text-lg text-gray-800">
                  {testimonial.name}
                </h4>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
                <div className="flex mt-1 text-yellow-400">
                  {Array.from({ length: testimonial.rating }, (_, i) => (
                    <span key={i}>⭐</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;