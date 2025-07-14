import React from "react";
import { ArrowRight } from "lucide-react";

const Banner = () => {
  return (
    <div className="">
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-8">
              <span className="inline-block bg-yellow-500 border border-emerald-700/30 px-4 py-2 text-sm font-medium  rounded-full text-white">
                Your Book Marketplace
              </span>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Buy and sell books <br />
                <span className="bg-gradient-to-r from-yellow-400 to-teal-500 text-transparent bg-clip-text">
                  anytime, anywhere
                </span>
              </h1>

              <p className="text-lg md:text-xl max-w-md">
                Discover great deals on books, or sell your own — all in one
                secure, user-friendly platform.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/onboarding"
                  className="inline-flex items-center justify-center px-6 py-3 text-lg font-medium text-white bg-yellow-500 rounded-md hover:bg-yellow-600 transition"
                >
                  Start Selling
                  <ArrowRight className="ml-2 size-4" />
                </a>

                <a
                  href="/books"
                  className="inline-flex items-center justify-center px-6 py-3 text-lg font-medium  bg-emerald-700/30 border border-emerald-500/30 rounded-md hover:bg-emerald-800/40 transition"
                >
                  Browse Books
                </a>
              </div>
            </div>

            <div className="relative rounded-xl overflow-hidden lg:h-[600px]">
              <img
                src="/banner.jpg"
                alt="Book Marketplace Banner"
                className="object-cover w-full h-full md:pt-14 rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
