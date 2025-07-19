// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="max-w-6xl mx-auto px-4 py-10 grid gap-6 md:grid-cols-3 sm:grid-cols-2 text-sm">
        
        <div>
          <h2 className="text-xl font-semibold mb-2 text-blue-400">GitScope</h2>
          <p className="text-gray-400">
            A simple tool to explore GitHub profiles, repos, and contributions — all in one place.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-gray-300 mb-2">Quick Links</h3>
          <ul className="space-y-1 text-gray-400">
            <li><a href="https://api.github.com" target="_blank" className="hover:underline">GitHub API</a></li>
            <li><a href="https://github.com" target="_blank" className="hover:underline">GitHub.com</a></li>
            <li><a href="/about" className="hover:underline">About GitScope</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-gray-300 mb-2">Contact</h3>
          <ul className="text-gray-400 space-y-1">
            <li>Email: support@gitscope.com</li>
            <li>Twitter: <a href="#" className="text-blue-400 hover:underline">@gitscope</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 text-center py-4 text-gray-500 text-xs">
        &copy; {new Date().getFullYear()} GitScope. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
