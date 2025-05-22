import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center text-white bg-gray-900 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-70"
        style={{
          backgroundImage: "url('https://cdn.gencraft.com/prod/user/318789c5-0e74-4641-91f6-b233c34d37fe/46cc74ba-be44-4c41-8482-7b32c8633991/image/image1_large.jpg?Expires=1748001031&Signature=Vi29iPxDUZkJrzGFenPH1Ly0DvzzC3G1R8RvfX0iVoJ3SS2atdVBMRlM2agJ43qZ0rl4cDA3XQvh-RA4-01BKhvvoqGwuo7dAJb7yS0E7QYiKRztY2HYsOor2VnYxUrSE8fXD6oQiTVLJ-mcRjS~tcib3~adnCM~wPy3iMxfAcwoeSeR6JbIzDUbJP1ZSzza7cvtBB8cEIEAKPKfK8EmxqF8myRAD94UZrYZYYHsFO2a7peskZUcU4iH0hGExcs7tbAd80n3hyhtI0NXb7mGzQQNx66HN9m5P0FBKpEqe4qkS12C1WU1pYAjADzyuTMLoY5y54wcJHybYs-tFpOXzw__&Key-Pair-Id=K3RDDB1TZ8BHT8')", // You can replace this with your own
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Hero Content */}
      <main className="relative z-10 text-center px-6 max-w-3xl">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
          Empowering African Freelancers
          <br />
          <span className="text-primary">with Trust & Local Payments</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-200 mb-8">
          Join AfriTask — a platform made for Africa. We simplify freelancing with mobile money payments, verified users, and secured escrow.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/signup">
            <button className="px-6 py-3 bg-primary text-white rounded-lg text-lg font-semibold hover:bg-primary-dark transition duration-300">
              Get Started
            </button>
          </Link>
          <Link to="/login">
            <button className="px-6 py-3 border border-white text-white rounded-lg text-lg font-semibold hover:bg-white hover:text-primary transition duration-300">
              Log In
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Home;
