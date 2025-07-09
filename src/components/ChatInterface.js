// ChatInterface.js
import React, { useEffect, useState, useRef, useCallback } from 'react';
import Sidebar from './Sidebar';
import ProfileMenu from './ProfileMenu';
import { SunIcon, MoonIcon, PaperAirplaneIcon, ChevronRightIcon, UserCircleIcon } from '@heroicons/react/24/outline';

const ChatInterface = () => {
    const [query, setQuery] = useState('');
    const [responses, setResponses] = useState([]);
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [darkMode, setDarkMode] = useState(false);
    const [profileOpen, setProfileOpen] = useState(false);
    const textareaRef = useRef(null);
    const mainRef = useRef(null);

    useEffect(() => {
        const root = document.documentElement;
        root.classList.add('theme-transition');
        root.classList.toggle('dark', darkMode);

        const timeout = setTimeout(() => {
            root.classList.remove('theme-transition');
        }, 300);

        return () => clearTimeout(timeout);
    }, [darkMode]);

    useEffect(() => {
        if (mainRef.current) {
            mainRef.current.scrollTop = mainRef.current.scrollHeight;
        }
    }, [responses]);

    const handleInput = useCallback((e) => {
        const value = e.target.value;
        setQuery(value);
        const ta = textareaRef.current;
        ta.style.height = 'auto';
        ta.style.height = `${Math.min(ta.scrollHeight, 6 * 24)}px`;
    }, []);

    const handleSubmit = useCallback(() => {
        if (!query.trim()) return;
        const userText = query.trim();

        const simQuestion = "In a motor accident claim where the deceased was self-employed and aged 54–55 years at the time of death, is the claimant entitled to an addition towards future prospects in computing compensation under Section 166 of the Motor Vehicles Act, 1988? If so, how much?";

        let simulated;
        if (userText === simQuestion) {
            simulated = {
                userText,
                answer: "Yes, under Section 166 of the Motor Vehicles Act, 1988, the claimants are entitled to an addition for future prospects even when the deceased was self-employed and aged 54–55 years at the time of the accident. In Dani Devi v. Pritam Singh, the Court held that 10% of the deceased’s annual income should be added as future prospects.",
                citation: {
                    source: 'Dani_Devi_v_Pritam_Singh.pdf',
                    link: 'https://lexisingapore-my.sharepoint.com/:b:/g/personal/harshit_lexi_sg/EdOegeiR_gdBvQxdyW4xE6oBCDgj5E4Bo5wjvhPHpqgIuQ?e=TEu4vz'
                }
            };
        } else {
            simulated = {
                userText,
                answer: "I’m sorry, I can’t assist with that specific query right now.",
                citation: {
                    source: '',
                    link: ''
                }
            };
        }

        setResponses(prev => [...prev, { ...simulated, animate: true }]);
        setQuery('');
        if (textareaRef.current) textareaRef.current.style.height = 'auto';
    }, [query]);

    return (
        <div className="flex h-screen bg-gray-50 dark:bg-gray-950">
            <Sidebar visible={sidebarOpen} toggleSidebar={() => setSidebarOpen(open => !open)} />

            <div className={`flex flex-col flex-1 bg-gray-50 dark:bg-gray-950 text-gray-800 dark:text-gray-200 transition-all duration-500 ease-in-out ${sidebarOpen ? 'pl-64' : 'pl-0'}`}>                
                <header className="flex items-center justify-between px-4 py-2 border-b bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 transition-all duration-500 ease-in-out">
                    <div className="flex items-center space-x-2">
                        {!sidebarOpen && (
                            <button onClick={() => setSidebarOpen(true)} className="text-gray-600 dark:text-gray-300 hover:text-indigo-600">
                                <ChevronRightIcon className="h-6 w-6" />
                            </button>
                        )}
                    </div>
                    <div className="flex items-center space-x-4">
                        <button onClick={() => setDarkMode(d => !d)} className="p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-800 transition duration-300">
                            {darkMode ? <SunIcon className="h-5 w-5 text-yellow-500" /> : <MoonIcon className="h-5 w-5 text-gray-600" />}
                        </button>
                        <div className="relative">
                            <button onClick={() => setProfileOpen(!profileOpen)} className="p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-800 transition duration-300">
                                <UserCircleIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />
                            </button>
                            {profileOpen && <ProfileMenu />}
                        </div>
                    </div>
                </header>

                <main ref={mainRef} className={`flex-1 overflow-y-auto py-4 transition-all duration-500 ease-in-out ${sidebarOpen ? 'px-56' : 'px-4'}`}> 
                    {responses.map((response, idx) => (
                        <React.Fragment key={idx}>
                            <div className={`flex justify-end mb-4 transition-transform transform ${response.animate ? 'animate-fade-slide' : ''}`}>
                                <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-xl max-w-2xl relative z-10">
                                    <p className="break-words">{response.userText}</p>
                                </div>
                            </div>

                            <div className={`flex justify-start mb-4 transition-transform transform ${response.animate ? 'animate-fade-slide' : ''}`}>
                                <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow max-w-2xl space-y-2 relative z-10">
                                    <p>{response.answer}</p>
                                    {response.citation.source && (
                                        <div className="flex flex-wrap items-center space-x-2 text-sm pt-2">
                                            <button
                                                onClick={() => window.open(response.citation.link, '_blank')}
                                                className="p-2 bg-[#FFDAB9] rounded hover:bg-[#ffdfc2]"
                                            >
                                                📄
                                            </button>
                                            <a
                                                href={response.citation.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                style={{ wordBreak: 'break-all' }}
                                                className="underline text-sm"
                                            >
                                                {response.citation.source}
                                            </a>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </React.Fragment>
                    ))}
                </main>

                <footer className="px-4 py-2 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 relative z-20 transition-all duration-500 ease-in-out">
                    <div className="flex items-center max-w-2xl mx-auto space-x-2">
                        <textarea
                            ref={textareaRef}
                            rows={1}
                            value={query}
                            onChange={handleInput}
                            placeholder="Type your legal question…"
                            className="flex-1 resize-none bg-gray-100 dark:bg-gray-800 rounded-xl px-4 py-2 outline-none max-h-36 transition-all duration-200 hide-scrollbar"
                            style={{ lineHeight: '1.5rem' }}
                        />
                        <button
                            onClick={handleSubmit}
                            disabled={!query.trim()}
                            className="p-3 rounded-xl disabled:opacity-50 hover:bg-indigo-700 bg-indigo-600 text-white transition"
                        >
                            <PaperAirplaneIcon className="h-5 w-5 rotate-45" />
                        </button>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default ChatInterface;
