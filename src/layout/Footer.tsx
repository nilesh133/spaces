import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import Logo from "../assets/images/logo/logo.png";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-sm text-gray-600">
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
        <div className="flex items-start sm:items-center sm:justify-center md:justify-start">
          <img src={Logo} alt="Logo" className="w-32 h-auto" />
        </div>

        <div>
          <h3 className="font-semibold font-oswald mb-2 text-black">Company</h3>
          <ul className="space-y-1">
            <li>About</li>
            <li>Press</li>
            <li>Careers</li>
            <li>Terms</li>
            <li>Privacy</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold font-oswald mb-2 text-black">Company</h3>
          <ul className="space-y-1">
            <li>Activities</li>
            <li>Locations</li>
            <li>Resources</li>
            <li>Ambassador</li>
            <li>Program</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold font-oswald mb-2 text-black">Host</h3>
          <ul className="space-y-1">
            <li>List your space</li>
            <li>Community</li>
            <li>Become a Vendor</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold font-oswald mb-2 text-black">Support</h3>
          <ul className="space-y-1">
            <li>Help Center</li>
            <li>Trust and Safety</li>
            <li>Cookie preferences</li>
            <li>Report vulnerability</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-300 py-4 px-4 flex flex-col md:flex-row justify-between items-center gap-4 max-w-7xl mx-auto">
        <p className="text-xs text-center md:text-left">&copy; 2024 Seek Spaces. All rights reserved.</p>
        <div className="flex gap-3">
          {[FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram].map((Icon, index) => (
            <div key={index} className='w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition'>
              <Icon className="text-gray-500 hover:text-black cursor-pointer text-base" />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
