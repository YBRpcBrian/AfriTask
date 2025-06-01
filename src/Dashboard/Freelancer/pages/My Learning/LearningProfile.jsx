import React, { useState } from 'react';
import LearningNav from './LearningNav';

import AllCourses from './tabs/AllCourses';
import MyLists from './tabs/MyLists';
import Wishlist from './tabs/Wishlist';
import Certifications from './tabs/Certifications';
import Archived from './tabs/Archived';
import LearningTools from './tabs/LearningTools';

const LearningProfile = () => {
  const [currentTab, setCurrentTab] = useState('all');

  const renderContent = () => {
    switch (currentTab) {
      case 'all': return <AllCourses />;
      case 'lists': return <MyLists />;
      case 'wishlist': return <Wishlist />;
      case 'certifications': return <Certifications />;
      case 'archived': return <Archived />;
      case 'tools': return <LearningTools />;
      default: return null;
    }
  };

  return (
    <div className="min-h-screen">
      <LearningNav currentTab={currentTab} setCurrentTab={setCurrentTab} />
      <div className="p-6">{renderContent()}</div>
    </div>
  );
};

export default LearningProfile;
