// ProfileMenu.js
import React from 'react';

const ProfileMenu = () => {
  return (
    <div className="absolute top-12 right-4 bg-white dark:bg-gray-800 border dark:border-gray-700 shadow-lg rounded-lg p-4 w-48 z-50">
      <p className="text-sm text-gray-800 dark:text-gray-200 font-semibold">Your Profile</p>
      <ul className="mt-2 space-y-1 text-sm text-gray-600 dark:text-gray-300">
        <li><button className="w-full text-left hover:underline">Settings</button></li>
        <li><button className="w-full text-left hover:underline">Help</button></li>
        <li><button className="w-full text-left text-red-500 hover:underline">Logout</button></li>
      </ul>
    </div>
  );
};

export default ProfileMenu;
