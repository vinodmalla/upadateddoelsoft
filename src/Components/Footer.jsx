import { Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import {
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  
} from "react-icons/fa";
import logo from "../assets/logo.svg";
import { useMenu } from "./MenuContext";

export default function Footer() {
  const { activeMenu } = useMenu();
  return (
    <footer className="bg-white border-t border-gray-200"  style={{
    backgroundImage: "url('/worldmap.svg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}>
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-5 gap-10">

        {/* Logo & Info */}
        <div className="space-y-2">
  
        <Link to="/">  <div className="flex items-center gap-2">
            <img src={logo} alt="Doelsoft" className="h-8 w-36" />
          </div></Link>
          <h1 className="font-semibold text-gray-900">Address</h1>
          <p className="text-gray-600">
            Hyderabad, India,<br/> Florida,USA
          </p>

          <div className="flex gap-4 mt-4 text-gray-600 text-xl">
            <a href="https://www.linkedin.com/company/doelsoft-it-services-pvt-ltd/" target="_blank"><FaLinkedin /></a>
            <a href="https://www.instagram.com/doelsoft?igsh=cGVrYmlyeWdoamJy" target="_target"><FaInstagram /></a>
            <a href="/"><FaTwitter /></a>

          </div>
        </div>

        {/* Solutions */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-4">Solutions</h3>
          <ul className="space-y-2 text-gray-600">
            <li ><a href="/softwareDevelopment">Custom Software Development</a></li>
            <li><a href="/mobileDevelopment">Mobile App Development</a></li>
            <li><a href="/servicesweb">Web Design & Development</a></li>
            <li><a href="/servicesuiux">UI/UX Design Services</a></li>
            <li><a href="/digitalaccessibilit">Digital Accessibility</a></li>
            <li><a href="/servicesmicrosoft">Microsoft Solutions</a></li>
            <li><a href="/servicesmulesoft">MuleSoft Solutions</a></li>
            <li><a href="/servicesiot">IoT Solutions</a></li>
            <li><a href="/servicesembedded">Embedded Technologies</a></li>
            <li><a href="/servicesqa">Flawless QA Services</a></li>
            <li><a href="/serviceai">AI Services</a></li>
            <li><a href="/salesforce">Salesforce Development</a></li>
          </ul>
        </div>

        {/* Talent Hub */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-4">Talent Hub</h3>
          <ul className="space-y-2 text-gray-600">
            <li><a href="/itstaffing">IT Staffing Solutions</a></li>
            <li><a href="/contract">Contract & Temporary Hiring</a></li>
            <li><a href="/permanent">Permanent Hiring</a></li>
            <li><a href="/excutive">Executive Search</a></li>
            <li><a href="/rpo">RPO Services</a></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
          <ul className="space-y-2 text-gray-600">
            <li ><a  className={activeMenu === "home" ? " text-red-600" : ""} href="/">Home</a></li>
            <li><a 
        className={activeMenu === "chooseus" ? " text-red-600" : ""} href="/chooseus">Why Choose Us</a></li>
            <li><a  className={activeMenu === "carrers" ? " text-red-600" : ""} href="/carrers">Careers</a></li>
            <li><a  className={activeMenu === "insights" ? " text-red-600" : ""} href="/insights">Insights</a></li>
            <li><a  className={activeMenu === "contact" ? " text-red-600" : ""} href="/contact">Contact Us</a></li>
            
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
              <Phone size={18} /> +91   8044643155
            </li>
            <li className="flex items-center gap-2">
              <Phone size={18} /> +1 (945) 382-1615
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
