import { IoMdMail } from "react-icons/io";
import { IoLocation } from "react-icons/io5";
import NavBar from "./NavBar";


const Contact = () => {
  return (
    <div className="font-Popins min-h-screen">
      <header>
        <NavBar />
      </header>


      <main className="my-20 py-10 md:py-20 flex flex-col lg:flex-row items-center justify-center gap-y-10 lg:gap-x-44 w-11/12 mx-auto">
        <div className="text-gray-900">
          <h2 className="text-4xl text-black  text-center md:text-left font-bold mb-4">Contect Us!</h2>
          <h4 className="ml-3 font-bold">Address:</h4>
          <span className="ml-3 text-gray-700">329 South Street Court - Albany, NY 83741</span>
          <div className="flex items-center gap-2 mt-2"><IoMdMail className="text-5xl text-[#FFC311] bg-white bg-opacity-5 rounded-xl px-2 py-2" /> <span className="text-gray-700 ">game@review.com</span></div>
          <div className="flex items-center gap-2 mt-2"><IoLocation className="text-5xl text-[#FFC311] bg-white bg-opacity-5 rounded-xl px-2 py-2" /> <span className="text-gray-700 ">London,England</span></div>
        </div>


        <div>
          <form  className="space-y-6">
            <div className="grid grid-cols-1 gap-6">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  name="from_name"
                  className="md:w-[600px]  w-[350px] px-4 py-3 rounded-lg bg-white/5 border border-gray-700 focus:border-[#FFC311] focus:outline-none transition-colors"

                />
              </div>

              <div>
                <input
                  type="email"
                  name="reply_to"
                  placeholder="Your Email"
                  className="md:w-[600px]  w-[350px] px-4 py-3 rounded-lg bg-white/5 border border-gray-700 focus:border-[#FFC311] focus:outline-none transition-colors"

                />
              </div>


              <div>
                <textarea
                  placeholder="Your Message"
                  name="message"
                  rows="4"
                  className="md:w-[600px]  w-[350px] px-4 py-3 rounded-lg bg-white/5 border border-gray-700 focus:border-[#FFC311] focus:outline-none transition-colors "
                ></textarea>
              </div>
            </div>

            <button
              type="submit"
              className="md:w-[600px] w-[350px] bg-[#FFC311] text-white py-3 px-6 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:opacity-90 transition-opacity"
            >
              <span>Send Message</span>
            </button>

          </form>
        </div>
      </main>

    </div>
  );
};

export default Contact;



