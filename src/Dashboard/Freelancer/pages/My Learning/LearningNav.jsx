import React, { useState } from 'react';

const tabs = [
  { key: 'all', label: 'All courses' },
  { key: 'lists', label: 'My Lists' },
  { key: 'certifications', label: 'Certifications' },
  { key: 'tools', label: 'Learning tools' },
];

const LearningNav = ({ currentTab, setCurrentTab }) => {
  return (
    <div className="bg-primary-3 font-serif text-white px-8 pt-36">
      <h1 className="text-6xl font-serif font-bold mb-16">My learning</h1>
      <div className="flex space-x-6 ">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setCurrentTab(tab.key)}
            className={`font-semibold transition duration-200 text-sm ${
              currentTab === tab.key
                ? 'text-white border-b-7 border-white'
                : 'text-gray-300 hover:text-white'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LearningNav;
