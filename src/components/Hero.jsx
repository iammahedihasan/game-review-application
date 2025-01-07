import { Link } from "react-router-dom";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import Slider from "react-slick";
import { Typewriter } from "react-simple-typewriter";
import { Fade } from "react-awesome-reveal";

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };
  return (
    <div>
      <Slider {...settings}>
        <div className="relative">
          <img
            className="h-[550px] w-full object-cover object-center"
            src={img1}
            alt="Slide 1"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>

          <div className="absolute top-56 w-screen flex justify-center flex-col items-center  text-white">
            <h2 className="md:text-5xl text-3xl font-bold text-center mb-6"><Typewriter
              words={['Egypt and World']}
              loop={true}
              cursor
              cursorStyle='|'
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={2000}
            /></h2>
            <Fade ><p className="font-normal w-[400px] md:w-[1000px] text-center">An action-adventure game set in Ancient Egypt during Cleopatras era, blending history and mythology as players explore pyramids, the Nile, and bustling cities while unraveling the origins of the Assassin Brotherhood.</p></Fade>
            <Link to='/all-reviews'> <button className="text-white border-2 border-white rounded-full px-16 py-4 mt-8">See Reviews</button></Link>
          </div>

        </div>
        <div className="relative">

          <img
            className="h-[550px] w-full object-cover object-center"
            src={img2}
            alt="Slide 2"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>

          <div className="absolute top-56 w-screen flex justify-center flex-col items-center  text-white">
            <h2 className="md:text-5xl text-3xl font-bold text-center mb-6"><Typewriter
              words={['Forza Horizon 5']}
              loop={true}
              cursor
              cursorStyle='|'
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={2000}
            /></h2>
            <Fade><p className="font-normal  w-[400px] md:w-[500px] text-center">An open-world racing game set in Mexico, featuring dynamic seasons, stunning visuals, and diverse terrains for players to explore.</p></Fade>
            <Link to='/all-reviews'> <button className="text-white border-2 border-white rounded-full px-16 py-4 mt-8">See Reviews</button></Link>
          </div>
        </div>
        <div className="relative">

          <img
            className="h-[550px] w-full object-cover object-center"
            src={img3}
            alt="Slide 3"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>

          <div className="absolute top-56 w-screen flex justify-center flex-col items-center  text-white">
            <h2 className="md:text-5xl text-3xl font-bold text-center mb-6"><Typewriter
              words={['FIFA Football 24']}
              loop={true}
              cursor
              cursorStyle='|'
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={2000}
            /></h2>
           <Fade> <p className="font-normal  w-[400px] md:w-[1000px] text-center"> A highly realistic football simulation game offering licensed teams, players, and leagues, along with innovative features like career mode, online multiplayer, and the fan-favorite Ultimate Team mode.</p></Fade>
            <Link to='/all-reviews'> <button className="text-white border-2 border-white rounded-full px-16 py-4 mt-8">See Reviews</button></Link>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Hero;