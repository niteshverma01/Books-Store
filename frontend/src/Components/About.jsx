import React from "react";

const About = () => {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
        <div>
          <h1 className="text-xl sm:text-2xl lg:text-4xl text-center font-bold">
            About <span className="text-pink-500">Us</span>
          </h1>
          <p className="mt-6 text-sm sm:text-base md:text-lg lg:text-xl text-justify">
            Welcome to Books Store! We are passionate about books and dedicated
            to providing a seamless online platform for book lovers. Whether
            you're looking for the latest bestseller, a timeless classic, or
            niche genres, our collection has something for every reader.
          </p>
          <p className="mt-4 text-sm sm:text-base md:text-lg lg:text-xl text-justify">
            At Books Store, we believe that reading opens doors to new worlds,
            ideas, and experiences. Our mission is to make books easily
            accessible to everyone, offering a wide selection at your fingertips.
          </p>
        </div>

        <div className="pt-10">
          <h1 className="text-xl sm:text-2xl lg:text-4xl text-center font-bold">
            Our Features
          </h1>

          <div className="pt-8  md:grid-cols-2 gap-8 text-center">
            <div>
              <h1 className="text-sm sm:text-lg md:text-xl lg:text-2xl font-semibold">
                Wide Selection: <span className="text-sm sm:text-base md:text-lg lg:text-xl">
                A vast collection of books across various genres and categories.
              </span>
              </h1>
              
            </div>
            <div>
              <h1 className="text-sm sm:text-lg md:text-xl lg:text-2xl font-semibold">
                Easy Search & Filters: <span className="text-sm sm:text-base md:text-lg lg:text-xl">
                Find your next read with ease using our powerful search engine
                and filters.
              </span>
              </h1>
              
            </div>
          </div>

          <div className="pt-10 text-center">
            <p className="text-sm sm:text-base md:text-lg lg:text-xl">
              Our team is constantly working to enhance your shopping experience,
              ensuring that you can enjoy reading without any hassle. Thank you
              for choosing Books Store as your go-to place for all your literary
              needs!
            </p>
            <h1 className="text-xl sm:text-2xl lg:text-4xl pt-8 font-bold">
              Happy <span className="text-pink-500">Reading!</span> 📚
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
