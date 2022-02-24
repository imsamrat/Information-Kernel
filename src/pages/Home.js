import React from "react";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="mb-20">
      <h1 className="sm:text-4xl text-2xl font-bold mt-6 mb-6 text-gray-900">
        Home
      </h1>
      <marquee
        className="sm:text-2xl text-2xl font-bold mt-6 mb-6 text-red-500"
        behavior=""
        direction=""
      >
        {" "}
        ব্রেকিং নিউজঃ
        {
          " উত্তরা এরিয়াতে এখন থেকে আবার রূপচান্দা তেল অর্ডার নেওয়া যাবে বলেছেন মোশাররফ ভাই। নাখালপাড়া এবং তেজকুনিপাড়াতে ব্র্যান্ডেড অর্ডার নেওয়া যাবে না......। "
        }
      </marquee>

      <img
        className="w-full object-cover object-center"
        src="/images/blog4.jpeg"
        alt=""
      />
      <Footer/>
    </div>
    
  );
};

export default Home;
