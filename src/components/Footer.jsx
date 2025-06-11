import React from 'react';
import {
  FaXTwitter,
  FaInstagram,
  FaPinterest,
  FaLinkedinIn,
  FaTiktok,
  FaYoutube,
} from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-[#333333] text-white min-h-[70vh] px-10 md:px-24 py-25">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-16 h-full">
        {/* Left Section */}
        <div className="flex-1 flex relative flex-col justify-between">
          <p className="text-sm text-gray-300 max-w-xs leading-relaxed">
            Celebrate the joy of accomplishment with an app designed to track
            your progress, motivate your efforts, and celebrate your successes.
          </p>

          {/* Social Icons */}
          <div className="flex top-44 absolute space-x-5 mt-8 text-gray-300 text-xl">
            <FaXTwitter className="hover:text-white cursor-pointer" />
            <FaInstagram className="hover:text-white cursor-pointer" />
            <FaPinterest className="hover:text-white cursor-pointer" />
            <FaLinkedinIn className="hover:text-white cursor-pointer" />
            <FaTiktok className="hover:text-white cursor-pointer" />
            <FaYoutube className="hover:text-white cursor-pointer" />
          </div>
        </div>

        {/* Right Section - 4 Columns */}
        <div className="grid grid-cols-2 absolute right-2 px-20 md:grid-cols-4 gap-16 flex-[2]">
          {/* Column 1 */}
          <div>
            <h3 className="font-semibold mb-4 text-white text-base">Product</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Features</li>
              <li>Integrations</li>
              <li>Updates</li>
              <li>FAQ</li>
              <li>Pricing</li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="font-semibold mb-4 text-white text-base">Company</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>About</li>
              <li>Blog</li>
              <li>Careers</li>
              <li>Manifesto</li>
              <li>Press</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="font-semibold mb-4 text-white text-base">
              Resources
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Examples</li>
              <li>Community</li>
              <li>Guides</li>
              <li>Docs</li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="font-semibold mb-4 text-white text-base">Legal</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Privacy</li>
              <li>Terms</li>
              <li>Security</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
