import logo from '../assets/logo.png';
import { Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-50">
      {/* Newsletter Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-gray-900 mb-4">
            Subscribe to our newsletter
          </h2>
          <p className="text-gray-600 mb-8">
            Stay informed with the latest news, updates, and important announcements delivered directly to your inbox.
          </p>
          <div className="flex gap-3 max-w-md mx-auto mb-6">
            <div className="flex-1 relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              />
            </div>
            <button className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors">
              Get started
            </button>
          </div>
          <p className="text-gray-500 text-sm">
            Our experts are ready to help!
          </p>
        </div>
      </div>

      {/* Dark Footer Section */}
      <div className="bg-gray-900 text-white">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-8">
            {/* Logo and Address */}
            <div className="md:col-span-2">
              <img src={logo} alt="Shaheen Education Foundation" className="h-12 mb-6" />
                <address className="text-gray-400 not-italic mb-6">
                Shaheen began in 1989 with just 18 students<br />and has grown into a nationwide educational<br />network, empowering thousands through<br />academic excellence and value-based learning.<br />
                </address>
                <address className="text-gray-400 not-italic mb-6">
                <a href="https://www.google.com/maps/search/Shaheen+Global+Academy+Dr.+Abdul+Ali+Tibbiya+College+Road+Katauli+Malihabad+Lucknow+Uttar+Pradesh+226102" target="_blank" rel="noopener noreferrer" className="hover:text-lime-400 transition-colors">
                  Shaheen Global Academy<br/> Dr. Abdul Ali Tibbiya College Road Katauli-Malihabad<br/>Lucknow, Uttar Pradesh 226102
                </a>
                </address>
                <div className="space-y-2 text-gray-400">
                <div>
                  <span className="text-gray-500">Call Us: </span>
                    <a href="tel:+919044442494" className="text-gray-400 hover:text-lime-400 transition-colors">+91 90444 42494</a>
                </div>
                <div>
                  <span className="text-gray-500">Email</span>
                  <p>info@shaheeneducation.org</p>
                </div>
                </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white mb-4">Quick links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-lime-400 transition-colors">Admission</a></li>
                <li><a href="https://www.google.com/maps/search/Shaheen+Global+Academy+Dr.+Abdul+Ali+Tibbiya+College+Road+Katauli+Malihabad+Lucknow+Uttar+Pradesh+226102" className="text-gray-400 hover:text-lime-400 transition-colors">Address</a></li>
                <li><a href="#" className="text-gray-400 hover:text-lime-400 transition-colors">Programs</a></li> {/* upar kar diya - google map link in href */}
                <li><a href="#" className="text-gray-400 hover:text-lime-400 transition-colors">About us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-lime-400 transition-colors">FAQ</a></li>
                <li><a href="#" className="text-gray-400 hover:text-lime-400 transition-colors">Contact us</a></li>
                {/* <li><a href="/login" className="text-gray-400 hover:text-lime-400 transition-colors">Admin Login</a></li> */}
              </ul>
            </div>

            {/* Social */}
            <div>
              <h4 className="text-white mb-4">Social</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-lime-400 transition-colors">Facebook</a></li>
                <li><a href="#" className="text-gray-400 hover:text-lime-400 transition-colors">Instagram</a></li>
                <li><a href="#" className="text-gray-400 hover:text-lime-400 transition-colors">LinkedIn</a></li>
                <li><a href="#" className="text-gray-400 hover:text-lime-400 transition-colors">Twitter</a></li>
                <li><a href="#" className="text-gray-400 hover:text-lime-400 transition-colors">Youtube</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-white mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-lime-400 transition-colors">Terms of service</a></li>
                <li><a href="#" className="text-gray-400 hover:text-lime-400 transition-colors">Privacy policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-lime-400 transition-colors">Cookie policy</a></li>
                <li><a href="/login" className="text-gray-400 hover:text-lime-400 transition-colors">Admin Login</a></li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-500">
              &copy; {new Date().getFullYear()} Shaheen Education Foundation. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}