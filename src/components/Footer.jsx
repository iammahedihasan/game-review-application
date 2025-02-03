import { FaDiscord, FaXTwitter, FaYoutube } from 'react-icons/fa6';
import logo from '../assets/app-logo.png'
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <div >
      <footer className="bg-gray-900 text-gray-400 py-10">
        <div className="md:px-28 px-8 mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 ">
         
          <div>
            <h2 className="text-white text-2xl font-bold flex items-center gap-2">
             <img src={logo} className='h-48' alt="" />
            </h2>
            <p className="mt-2 text-sm">GameReview © 2025. All rights reserved.</p>
          </div>

          
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Platform</h3>
            <ul className="space-y-2">
              <li><a href="https://www.playstation.com" className="hover:text-white">Playstation 4</a></li>
              <li><a href="https://www.xbox.com" className="hover:text-white">XBOX One</a></li>
              <li><a href="https://store.steampowered.com" className="hover:text-white">Steam</a></li>
             
            </ul>
          </div>

          
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Additional Links</h3>
            <ul className="space-y-2">
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/all-reviews'>All Reviews</Link></li>
              <li><Link to='/add-reviews'>Add Reviews</Link></li>
              <li><Link to='/my-reviews'>My Reviews</Link></li>
              <li><Link to='/contact'>Contact Us</Link></li>
            </ul>
          </div>

        
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex items-center space-x-4">
              <a href="https://x.com" className="hover:text-white text-xl"><FaXTwitter /></a>
              <a href="https://discord.com" className="hover:text-white text-xl"><FaDiscord/></a>
              <a href="https://youtube.com" className="hover:text-white text-xl"><FaYoutube/></a>
              
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;