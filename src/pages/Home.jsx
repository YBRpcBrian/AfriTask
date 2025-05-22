import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ShieldCheck, Smartphone, Users } from 'lucide-react'; // Icons from lucide-react

const Home = () => {
  return (
    <div className="relative bg-gray-900 text-white min-h-screen overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-70"
        style={{
          backgroundImage:
            "url('https://cdn.gencraft.com/prod/user/318789c5-0e74-4641-91f6-b233c34d37fe/46cc74ba-be44-4c41-8482-7b32c8633991/image/image1_large.jpg?Expires=1748001031&Signature=Vi29iPxDUZkJrzGFenPH1Ly0DvzzC3G1R8RvfX0iVoJ3SS2atdVBMRlM2agJ43qZ0rl4cDA3XQvh-RA4-01BKhvvoqGwuo7dAJb7yS0E7QYiKRztY2HYsOor2VnYxUrSE8fXD6oQiTVLJ-mcRjS~tcib3~adnCM~wPy3iMxfAcwoeSeR6JbIzDUbJP1ZSzza7cvtBB8cEIEAKPKfK8EmxqF8myRAD94UZrYZYYHsFO2a7peskZUcU4iH0hGExcs7tbAd80n3hyhtI0NXb7mGzQQNx66HN9m5P0FBKpEqe4qkS12C1WU1pYAjADzyuTMLoY5y54wcJHybYs-tFpOXzw__&Key-Pair-Id=K3RDDB1TZ8BHT8')",
        }}
      />
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Hero Section */}
      <section className="relative z-10 text-center px-6 py-24 sm:py-32 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
          Empowering African Freelancers
          <br />
          <span className="text-primary">with Trust & Local Payments</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-200 mb-8">
          AfriTask simplifies freelancing with MoMo/Orange Money payments, escrow safety, and a verified user base.
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
      </section>

      {/* Features Section */}
      <section className="relative z-10 bg-white text-gray-900 py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
          <div>
            <ShieldCheck className="mx-auto text-primary w-12 h-12 mb-4" />
            <h3 className="text-xl font-bold mb-2">Secure Escrow</h3>
            <p className="text-gray-600">Payments are held securely until tasks are delivered and approved.</p>
          </div>
          <div>
            <Smartphone className="mx-auto text-primary w-12 h-12 mb-4" />
            <h3 className="text-xl font-bold mb-2">Mobile Payments</h3>
            <p className="text-gray-600">Pay or get paid via MTN MoMo, Orange Money, and Lightning BTC.</p>
          </div>
          <div>
            <Users className="mx-auto text-primary w-12 h-12 mb-4" />
            <h3 className="text-xl font-bold mb-2">Verified Freelancers</h3>
            <p className="text-gray-600">Work with real people. All users are verified for trust and transparency.</p>
          </div>
          <div>
            <CheckCircle className="mx-auto text-primary w-12 h-12 mb-4" />
            <h3 className="text-xl font-bold mb-2">Fast Delivery</h3>
            <p className="text-gray-600">Hire and get jobs done quickly and efficiently, even with poor internet.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 bg-primary text-white text-center py-16 px-6">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to get started?</h2>
        <p className="text-lg mb-8">Join AfriTask today and start working or hiring with confidence.</p>
        <Link to="/signup">
          <button className="px-6 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition duration-300">
            Create Your Free Account
          </button>
        </Link>
      </section>

      {/* Footer */}
      <footer className="relative z-10 text-center text-gray-300 py-4 text-sm bg-black">
        &copy; {new Date().getFullYear()} AfriTask. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;
