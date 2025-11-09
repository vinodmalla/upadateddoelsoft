import { Mail, Phone } from "lucide-react";
import {
  FaLinkedin,
  FaFacebookMessenger,
  FaTwitter,
  FaInfinity,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-5 gap-10">
        {/* Logo & Info */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <img src="/logo4.svg" alt="Doelsoft" className="h-10 w-auto" />
          </div>
          <h2 className="font-semibold text-gray-900">Doelsoft</h2>
          <p className="text-gray-600">Targeting Tomorrow</p>
          <p className="text-gray-600">
            Hyderabad, India · <br /> Florida, USA
          </p>
          <div className="flex gap-4 text-gray-600 text-xl">
            <a href="#">
              <FaLinkedin />
            </a>
            <a href="#">
              <FaFacebookMessenger />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
            <a href="#">
              <FaInfinity />
            </a>
          </div>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
          <ul className="space-y-2 text-gray-600">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Pricing</a></li>
          </ul>
        </div>

        {/* Product */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-4">Product</h3>
          <ul className="space-y-2 text-gray-600">
            <li><a href="#">Invoicing</a></li>
            <li><a href="#">Contract</a></li>
            <li><a href="#">Accounting</a></li>
            <li><a href="#">Proposal</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-4">Resources</h3>
          <ul className="space-y-2 text-gray-600">
            <li><a href="#">Proposal Template</a></li>
            <li><a href="#">Invoice Template</a></li>
            <li><a href="#">Tutorial</a></li>
            <li><a href="#">How to write a contract</a></li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-4">Contact Us</h3>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-center gap-2">
              <Mail size={18} /> info@doelsoft.com
            </li>
            <li className="flex items-center gap-2">
              <Phone size={18} /> +91 040 - 66588367
            </li>
            <li className="flex items-center gap-2">
              <Phone size={18} /> +1 321 204 3271
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-black text-white text-center py-4 text-sm">
        Copyright @ Doelsoft 2025. All Rights Reserved.
      </div>
    </footer>
  );
}
