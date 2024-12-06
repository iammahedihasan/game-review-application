import { Link } from "react-router-dom";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import Slider from "react-slick";

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <div>
      <Slider {...settings}>
        <div className="relative">
          <img
            className="h-[650px] w-full object-cover object-center"
            src={img1}
            alt="Slide 1"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>

          <div className="absolute top-56 w-screen flex justify-center flex-col items-center  text-white">
            <h2 className="text-7xl font-bold text-center mb-6">Egypt and World</h2>
            <p className="font-normal w-[1000px] text-center">An action-adventure game set in Ancient Egypt during Cleopatras era, blending history and mythology as players explore pyramids, the Nile, and bustling cities while unraveling the origins of the Assassin Brotherhood.</p>
            <Link to='/all-reviews'> <button className="text-white border-2 border-white rounded-full px-16 py-4 mt-8">See Reviews</button></Link>
          </div>

        </div>
        <div className="relative">

          <img
            className="h-[650px] w-full object-cover object-center"
            src={img2}
            alt="Slide 2"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>

          <div className="absolute top-56 w-screen flex justify-center flex-col items-center  text-white">
            <h2 className="text-7xl font-bold text-center mb-6">Forza Horizon 5</h2>
            <p className="font-normal w-[500px] text-center">An open-world racing game set in Mexico, featuring dynamic seasons, stunning visuals, and diverse terrains for players to explore.</p>
            <Link to='/all-reviews'> <button className="text-white border-2 border-white rounded-full px-16 py-4 mt-8">See Reviews</button></Link>
          </div>
        </div>
        <div className="relative">

          <img
            className="h-[650px] w-full object-cover object-center"
            src={img3}
            alt="Slide 3"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>

          <div className="absolute top-56 w-screen flex justify-center flex-col items-center  text-white">
            <h2 className="text-7xl font-bold text-center mb-6">FIFA Football 24</h2>
            <p className="font-normal w-[1000px] text-center"> A highly realistic football simulation game offering licensed teams, players, and leagues, along with innovative features like career mode, online multiplayer, and the fan-favorite Ultimate Team mode.</p>
            <Link to='/all-reviews'> <button className="text-white border-2 border-white rounded-full px-16 py-4 mt-8">See Reviews</button></Link>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Hero;