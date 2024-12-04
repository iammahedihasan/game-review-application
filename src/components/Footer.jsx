import { FaDiscord, FaXTwitter, FaYoutube } from 'react-icons/fa6';
import logo from '../assets/app-logo.png'

const Footer = () => {
  return (
    <div >
      <footer className="footer bg-[#1e272e] text-white px-44 py-16">
        <aside>
         <img src={logo} className='h-32' alt="" />
         
          <h3 className='text-2xl'> A Game Review Application</h3>
            
          <p className='font-normal'>Play Smarter with Honest Reviews.</p>
          
        </aside>
        <nav>
          <h6 className="footer-title text-[#0185D0] opacity-90">Enter App</h6>
          <a className="link link-hover">Top Reviews</a>
          <a className="link link-hover">Contract us</a>
          <a className="link link-hover">About This app</a>
        </nav>
        <nav>
          <h6 className="footer-title text-[#0185D0] opacity-90">Useful Links</h6>
          <a className="link link-hover">Docs</a>
          <a className="link link-hover">Medium</a>
          <a className="link link-hover">Discord</a>
        </nav>
        <nav>
          <h6 className="footer-title text-[#0185D0] opacity-90">Social</h6>
          <div className="grid grid-flow-col gap-4">
            <a className='text-4xl cursor-pointer'>
              <FaXTwitter />
            </a>
            <a className='text-4xl cursor-pointer'>
              <FaYoutube  />
            </a>
            <a className='text-4xl cursor-pointer'>
              <FaDiscord />
            </a>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;