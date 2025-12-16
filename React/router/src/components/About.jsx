import React from "react";
import { Link, Outlet } from "react-router-dom";

const About = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
      <p className="text-gray-600 mb-6 leading-relaxed">
        Welcome to MyStore, your number one source for all things amazing. We're
        dedicated to giving you the very best of products, with a focus on
        quality, customer service, and uniqueness.
      </p>
      <p className="text-gray-600 mb-6 leading-relaxed">
        Founded in 2023, MyStore has come a long way from its beginnings. We now
        serve customers all over the world and are thrilled to be a part of the
        fair-trade wing of the e-commerce industry.
      </p>
      <Link
        to="abhijeet"
        className="text-blue-600 hover:underline font-semibold"
      >
        Meet the Team
      </Link>
      <div className="mt-8 p-6 border-t border-gray-200 bg-gray-50 rounded-b-lg">
        <Outlet />
      </div>
    </div>
  );
};

export default About;
