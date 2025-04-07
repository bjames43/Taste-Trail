import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-black backdrop-blur border-t border-transparent/20 scroll-py-0.5">
            <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
                <div className="text-center text-white">
                    <p className="text-sm">
                        © {new Date().getFullYear()} Taste Trail. All rights reserved.
                    </p>
                </div>
                
            </div>
        </footer>
    );
};

export default Footer;