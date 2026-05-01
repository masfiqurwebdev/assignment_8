// components/Footer.jsx

import Link from "next/link";
import { FaFacebook, FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

const  Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-10">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">

        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">Contact Us</h2>
          <p>Email: support@example.com</p>
          <p>Phone: +880 1234-567890</p>
          <p>Address: Rajshahi, Bangladesh</p>
        </div>

        {/* Social Links */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">Follow Us</h2>
          <div className="flex gap-4 text-2xl">
            <a href="#" className="hover:text-blue-500">
              <FaFacebook />
            </a>
            <a href="#" className="hover:text-sky-400">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-gray-100">
              <FaGithub />
            </a>
            <a href="#" className="hover:text-blue-400">
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Legal Links */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">Legal</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/terms" className="hover:text-white">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-white">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 text-center py-4 text-sm">
        © {new Date().getFullYear()} Your Company. All rights reserved.
      </div>
    </footer>
  );
}
export default Footer