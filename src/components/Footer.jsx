import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer>
            <div className="container mx-auto px-4 py-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-center text-sm sm:text-base">
                    
                    <div className="flex items-center gap-2 justify-center lg:justify-start">
                        <span className="text-lg font-bold bg-primary text-white p-1 rounded-lg">
                            HA
                        </span>
                        <span className="font-semibold">
                            Hammad<span className="text-primary ml-1">Aman</span>
                        </span>
                    </div>

                    <div className="text-center lg:text-center">
                        &copy; 2026 Hammad Aman. All rights reserved.
                    </div>

                    <div className="flex justify-center lg:justify-end gap-4">
                        <a
                            href="https://linkedin.com/in/hammad-aman-13665b282"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-base-300 p-2 rounded-lg"
                        >
                            <FaLinkedin size={20} />
                        </a>
                        <a
                            href="https://github.com/Hammad-Aman407"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-base-300 p-2 rounded-lg"
                        >
                            <FaGithub size={20} />
                        </a>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;
