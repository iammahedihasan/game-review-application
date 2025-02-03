import img1 from "../assets/playstation.jpg"
import img2 from "../assets/xbox.jpg"
import img3 from "../assets/Esports.jpg"
import img4 from "../assets/pcgame.jpg"
import img5 from "../assets/Portable.jpg"
import img6 from "../assets/Accessories.jpg"

const News = () => {
  return (
    <section className=" mb-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-4xl font-bold">Our Latest News</h2>
          <p className=" mt-2">
            Stay updated with the latest happenings in the world of gaming.
          </p>
        </div>

        {/* News Items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* News Item 1 */}
          <div className=" rounded-lg overflow-hidden shadow-md">
            <img
              src={img1}
              alt="News 1"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">
                PlayStation 5: A Revolution in Gaming
              </h3>
              <p className=" text-sm">October 16, 2024 • No Comments</p>
            </div>
          </div>

          {/* News Item 2 */}
          <div className=" rounded-lg overflow-hidden shadow-md">
            <img
              src={img2}
              alt="News 2"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold  mb-2">
                Xbox Series X: Power and Performance
              </h3>
              <p className=" text-sm">October 28, 2024 • No Comments</p>
            </div>
          </div>

          {/* News Item 3 */}
          <div className="rounded-lg overflow-hidden shadow-md">
            <img
              src={img5}
              alt="News 3"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold  mb-2">
                Nintendo Switch Lite: Portable Gaming Redefined
              </h3>
              <p className=" text-sm">October 19, 2024 • No Comments</p>
            </div>
          </div>

          {/* News Item 4 */}
          <div className=" rounded-lg overflow-hidden shadow-md">
            <img
              src={img6}
              alt="News 4"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold  mb-2">
                Top 5 Gaming Accessories for 2025
              </h3>
              <p className=" text-sm">January 5, 2025 • No Comments</p>
            </div>
          </div>

          {/* News Item 5 */}
          <div className=" rounded-lg overflow-hidden shadow-md">
            <img
              src={img3}
              alt="News 5"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold  mb-2">
                Esports in 2025: What to Expect
              </h3>
              <p className=" text-sm">November 29, 2024 • No Comments</p>
            </div>
          </div>

          {/* News Item 6 */}
          <div className=" rounded-lg overflow-hidden shadow-md">
            <img
              src={img4}
              alt="News 6"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold  mb-2">
                PC Gaming: Best Builds for Budget Gamers
              </h3>
              <p className=" text-sm">Dec 25, 2024 • No Comments</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
