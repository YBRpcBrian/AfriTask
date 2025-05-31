import React from "react";
import {
  CalendarClock,
  Globe,
  Briefcase,
  DollarSign,
  MapPin,
  ShieldAlert,
  Star,
  Users2,
} from "lucide-react";

const SingleTaskPage = () => {
  const task = {
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    title: "Build a Responsive E-commerce Landing Page",
    description:
      "We are seeking a passionate front-end developer to craft a high-performing, elegant landing page for a fashion-oriented e-commerce platform. Your work should drive conversions, improve page load speed, and enhance brand perception.",
    amount: "FCFA 35000",
    timeline: "2 Months",
    jobType: "Remote",
    preferredCountry: "Open to All Applicants",
    creditsEarned: 75,
    postedBy: {
      name: "Sarah Johnson",
      profilePic: "https://randomuser.me/api/portraits/women/44.jpg",
      location: "San Francisco, USA",
      role: "Digital Product Manager",
      bio: "Leading cross-functional teams to build tech-integrated fashion products. At Glowwear Inc., I blend creative direction with agile product development.",
    },
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-10 space-y-10 text-gray-800">
      {/* Banner */}
      <div className="rounded-2xl overflow-hidden shadow-md">
        <img
          src={task.img}
          alt={task.title}
          className="w-full h-80 object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Header */}
      <header className="space-y-2">
        <h1 className="text-4xl font-bold text-primary">{task.title}</h1>
        <p className="text-sm text-gray-600">
          Posted by <span className="font-semibold">{task.postedBy.name}</span>
        </p>
      </header>

      {/* Project Highlights */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-primary/10 p-5 rounded-xl shadow flex items-start gap-4">
          <DollarSign className="text-green-700 w-6 h-6" />
          <div>
            <p className="font-semibold text-primary">Payment</p>
            <p className="text-sm">{task.amount}</p>
          </div>
        </div>
        <div className="bg-primary/10 p-5 rounded-xl shadow flex items-start gap-4">
          <CalendarClock className="text-green-700 w-6 h-6" />
          <div>
            <p className="font-semibold text-primary">Timeline</p>
            <p className="text-sm">{task.timeline}</p>
          </div>
        </div>
        <div className="bg-primary/10 p-5 rounded-xl shadow flex items-start gap-4">
          <Briefcase className="text-green-700 w-6 h-6" />
          <div>
            <p className="font-semibold text-primary">Job Type</p>
            <p className="text-sm">{task.jobType}</p>
          </div>
        </div>
        <div className="bg-primary/10 p-5 rounded-xl shadow flex items-start gap-4">
          <Globe className="text-green-700 w-6 h-6" />
          <div>
            <p className="font-semibold text-primary">Location</p>
            <p className="text-sm">{task.preferredCountry}</p>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-primary">Project Scope</h2>
        <p>{task.description}</p>
        <ul className="list-disc pl-5 text-gray-700">
          <li>Responsive layout with mobile-first design</li>
          <li>Clean, readable code and component reuse</li>
          <li>SEO best practices and image optimization</li>
          <li>Smooth animations and minimal transitions</li>
        </ul>
      </section>

      {/* Credits */}
      <section className="grid sm:grid-cols-2 gap-6 items-center">
        <div className="bg-primary/10 p-6 rounded-xl shadow flex gap-4">
          <Star className="text-green-700 w-8 h-8" />
          <div>
            <p className="text-lg font-semibold text-primary">
              Earn {task.creditsEarned} Credits
            </p>
            <p className="text-sm text-gray-700">
              On successful task completion, you earn{" "}
              <span className="font-bold">{task.creditsEarned} Credits</span>{" "}
              that boost your TrustPoints and platform credibility.
            </p>
          </div>
        </div>
        <div className="bg-primary/10 p-6 rounded-xl shadow flex gap-4">
          <Users2 className="text-green-700 w-8 h-8" />
          <div>
            <p className="text-lg font-semibold text-primary">Build Validation</p>
            <p className="text-sm text-gray-700">
              Credits improve your freelancer score and validate your
              reliability to job posters across the platform.
            </p>
          </div>
        </div>
      </section>

      {/* Platform Guidelines */}
      <section className="bg-yellow-100 border-l-4 border-yellow-500 p-5 rounded-xl space-y-2">
        <div className="flex items-center gap-2 text-yellow-800">
          <ShieldAlert className="w-5 h-5" />
          <h3 className="font-semibold">Platform Guidelines</h3>
        </div>
        <ul className="list-disc pl-5 text-sm text-yellow-800">
          <li>Deliver within the specified timeline.</li>
          <li>No off-platform communication.</li>
          <li>Report issues to <strong>Support Desk</strong>.</li>
          <li>Violations may lead to account suspension.</li>
        </ul>
      </section>

      {/* Poster Info */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-primary">About the Job Poster</h2>
        <div className="bg-white p-6 rounded-xl shadow flex items-start gap-6 border border-primary/20">
          <img
            src={task.postedBy.profilePic}
            alt={task.postedBy.name}
            className="w-20 h-20 rounded-full object-cover border-2 border-primary"
          />
          <div>
            <h3 className="text-xl font-semibold">{task.postedBy.name}</h3>
            <p className="text-sm text-gray-500">{task.postedBy.role}</p>
            <div className="flex items-center text-sm text-gray-500 mt-1">
              <MapPin className="w-4 h-4 mr-1 text-primary" />
              {task.postedBy.location}
            </div>
            <p className="text-sm text-gray-600 mt-3">{task.postedBy.bio}</p>
          </div>
        </div>
      </section>

      {/* CTA Buttons */}
      <div className="pt-6 flex flex-col sm:flex-row gap-4">
        <button className="w-full sm:w-auto flex-1 py-4 text-white text-lg font-semibold bg-primary rounded-xl hover:bg-green-700 transition duration-300">
          Take This Task
        </button>
        <button
          className="w-full sm:w-auto flex-1 py-4 text-lg font-semibold border border-primary text-primary rounded-xl hover:bg-primary/10 transition duration-300"
          onClick={() => window.history.back()}
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default SingleTaskPage;
