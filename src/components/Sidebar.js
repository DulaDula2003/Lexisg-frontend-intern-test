// Sidebar.js
import React, { memo } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const Sidebar = memo(({ visible, toggleSidebar }) => {
  const chats = [
    'Motor Accident Claim',
    'Property Dispute',
    'Contract Breach',
    'Employment Review',
    'Intellectual Property',
    'Privacy Inquiry'
  ];

  return (
    <aside className={`fixed top-0 left-0 h-full bg-gray-50 dark:bg-gray-800 border-r z-40 transform transition-transform duration-300 ${visible ? 'translate-x-0' : '-translate-x-full'}`} style={{ width: '16rem' }}>
      <div className="flex items-center justify-between px-4 py-2 bg-white dark:bg-gray-900 border-b">
        <div>
          <h1 className="text-lg font-bold text-gray-800 dark:text-white">Lexi<span className="text-indigo-600">.</span></h1>
          <p className="text-xs text-gray-500 dark:text-gray-400">Legal Assistant</p>
        </div>
        <button onClick={toggleSidebar} className="text-gray-500 dark:text-gray-400 hover:text-indigo-600">
          {visible ? <ChevronLeftIcon className="h-5 w-5" /> : <ChevronRightIcon className="h-5 w-5" />}
        </button>
      </div>
      <nav className="p-4 space-y-2 text-gray-700 dark:text-gray-200">
        <h2 className="text-sm font-medium">Conversations</h2>
        {chats.map((c, i) => (
          <button key={i} className="w-full text-left px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 text-sm transition">{c}</button>
        ))}
      </nav>
    </aside>
  );
});

export default Sidebar;