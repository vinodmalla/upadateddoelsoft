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
            <a href="/"><FaLinkedin /></a>
            <a href="/"><FaFacebookMessenger /></a>
            <a href="/"><FaTwitter /></a>
            <a href="/"><FaInfinity /></a>
          </div>
        </div>

        {/* Solutions */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-4">Solutions</h3>
          <ul className="space-y-2 text-gray-600">
            <li><a href="/softwareDevelopment">Custom Software Development</a></li>
            <li><a href="/mobileDevelopment">Mobile App Development</a></li>
            <li><a href="/servicesweb">Web Design & Development</a></li>
            <li><a href="/servicesuiux">UI/UX Design Services</a></li>
            <li><a href="/digitalaccessibilit">Digital Accessibility</a></li>
            <li><a href="/servicesmicrosoft">Microsoft Solutions</a></li>
            <li><a href="/servicesmulesoft">MuleSoft Solutions</a></li>
            <li><a href="/servicesiot">IoT Solutions</a></li>
            <li><a href="/servicesembedded">Embedded Technologies</a></li>
            <li><a href="/servicesqa">Flawless QA Services</a></li>
            <li><a href="/softwareDevelopment">AI Services</a></li>
            <li><a href="/servicesSalesforce">Salesforce Development</a></li>
          </ul>
        </div>

        {/* Talent Hub */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-4">Talent Hub</h3>
          <ul className="space-y-2 text-gray-600">
            <li><a href="/itstaffing">IT Staffing Solutions</a></li>
            <li><a href="/contractHiring">Contract & Temporary Hiring</a></li>
            <li><a href="/permanentHiring">Permanent Hiring</a></li>
            <li><a href="/executiveSearch">Executive Search</a></li>
            <li><a href="/rpo">RPO Services</a></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
          <ul className="space-y-2 text-gray-600">
            <li><a href="/">Home</a></li>
            <li><a href="/chooseus">Why Choose Us</a></li>
            <li><a href="/carrers">Careers</a></li>
            <li><a href="/insights">Insights</a></li>
            <li><a href="/contact">Contact Us</a></li>
            
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
        Copyright © Doelsoft 2025. All Rights Reserved.
      </div>
    </footer>
  );
}
