import { Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import {
  FaLinkedin,
  FaInstagram, FaFacebookF 
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
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
            <Link to="https://www.linkedin.com/company/doelsoft-it-services-pvt-ltd/" target="_blank"><FaLinkedin /></Link>
            <Link to="https://www.instagram.com/doelsoft?igsh=cGVrYmlyeWdoamJy" target="_target"><FaInstagram /></Link>
            <Link to="/" target="_target"><FaXTwitter  /></Link>
            <Link to="/" target="_target"><FaFacebookF  /></Link>

          </div>
        </div>

        {/* Solutions */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-4">Solutions</h3>
          <ul className="space-y-2 text-gray-600">
            <li ><Link to="/softwareDevelopment">Custom Software Development</Link></li>
            <li><Link to="/mobileDevelopment">Mobile App Development</Link></li>
            <li><Link to="/servicesweb">Web Design & Development</Link></li>
            <li><Link to="/servicesuiux">UI/UX Design Services</Link></li>
            <li><Link to="/digitalaccessibilit">Digital Accessibility</Link></li>
            <li><Link to="/servicesmicrosoft">Microsoft Solutions</Link></li>
            <li><Link to="/servicesmulesoft">MuleSoft Solutions</Link></li>
            <li><Link to="/servicesiot">IoT Solutions</Link></li>
            <li><Link to="/servicesembedded">Embedded Technologies</Link></li>
            <li><Link to="/servicesqa">Flawless QA Services</Link></li>
            <li><Link to="/serviceai">AI Services</Link></li>
            <li><Link to="/salesforce">Salesforce Development</Link></li>
          </ul>
        </div>

        {/* Talent Hub */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-4">Talent Hub</h3>
          <ul className="space-y-2 text-gray-600">
            <li><Link to="/itstaffing">IT Staffing Solutions</Link></li>
            <li><Link to="/contract">Contract & Temporary Hiring</Link></li>
            <li><Link to="/permanent">Permanent Hiring</Link></li>
            <li><Link to="/excutive">Executive Search</Link></li>
            <li><Link to="/rpo">RPO Services</Link></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
          <ul className="space-y-2 text-gray-600">
            <li ><Link  className={activeMenu === "home" ? " text-red-600" : ""} to="/">Home</Link></li>
            <li><Link 
        className={activeMenu === "chooseus" ? " text-red-600" : ""} to="/chooseus">Why Choose Us</Link></li>
            <li><Link className={activeMenu === "carrers" ? " text-red-600" : ""} to="/carrers">Careers</Link></li>
            <li><Link  className={activeMenu === "insights" ? " text-red-600" : ""} to="/insights">Insights</Link></li>
            <li><Link  className={activeMenu === "contact" ? " text-red-600" : ""} to="/contact">Contact Us</Link></li>
            
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
