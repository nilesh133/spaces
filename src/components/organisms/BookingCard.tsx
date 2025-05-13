import Container from "../../layout/Container";
import {
  FaStar,
  FaWifi,
  FaCar,
  FaSnowflake,
  FaLeaf,
  FaBell,
  FaDoorOpen,
} from "react-icons/fa";
import { MdOutlineSmokeFree } from "react-icons/md";
import { IoCalendarOutline } from "react-icons/io5";
import Icon from "../atoms/Icon";
import InputField from "../atoms/InputField";

const BookingCard = () => (
  <Container>
    <div className="flex flex-col lg:flex-row justify-between font-lato gap-8 py-8 border-b">
      <div className="flex-1">
        <div>
          <h1 className="text-xl font-heading font-semibold text-black">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </h1>
          <p className="text-[16px] text-gray-600 mt-2">
            Fusce vitae ex consequat, fringilla justo sit amet, ornare felis.
            Donec vel interdum nibh. Nulla facilisis feugiat metus sed mollis.
          </p>
        </div>

        <div className="flex items-center gap-2 text-sm text-gray-600 my-3">
          <Icon icon={<FaStar />} label="4.73" />
          <span className="h-[22px] w-[1px] bg-gray-400 mx-[4px]"></span>
          <span>241 Reviews</span>
        </div>

        <div className="flex items-center gap-3 py-4 border-t">
          <div className="w-10 h-10 rounded-full bg-gray-300" /> {/* Avatar */}
          <div>
            <p className="font-medium text-sm text-black">Hosted by Any</p>
            <p className="text-gray-400 text-xs">Fusce vitae ex consequat,</p>
          </div>
        </div>

        <div className="space-y-4 py-4 border-t">
          <div className="flex items-start gap-3">
            <FaDoorOpen className="mt-1 text-xl" />
            <div>
              <p className="font-semibold text-black text-lg">Self Check-in</p>
              <p className="text-sm text-gray-500">
                Check yourself in with the keypad
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <IoCalendarOutline className="mt-1 text-lg" />
            <div>
              <p className="font-semibold text-black text-lg">
                Free cancellation before 9 Aug
              </p>
              <p className="text-sm text-gray-500">
                Get a full refund if you change your mind
              </p>
            </div>
          </div>
        </div>

        <div className="py-8 border-t text-gray-400">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec
            luctus eros, ut interdum mauris. In hac habitasse platea dictumst.
            Vestibulum pellentesque, diam id posuere ultricies, nisl felis
            pellentesque odio, non condimentum sapien odio id massa.
          </p>
          <button className="mt-4 font-medium text-black flex items-center gap-1 text-sm">
            Show More &gt;
          </button>
        </div>

        <div className="pt-6 border-t">
          <h2 className="text-lg font-heading font-semibold text-black mb-4">
            What this place offers
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 text-sm">
            <Icon
              icon={<FaLeaf />}
              label="Garden view"
              className="text-gray-400"
            />
            <Icon icon={<FaWifi />} label="Wifi" />
            <Icon icon={<FaCar />} label="Free parking on premises" />
            <Icon
              icon={<FaSnowflake />}
              label="AC – split-type ductless system"
            />
            <Icon icon={<FaBell />} label="Carbon monoxide alarm" />
            <Icon icon={<MdOutlineSmokeFree />} label="Smoke alarm" />
          </div>
        </div>
      </div>

      <div className="flex-1 lg:max-w-[450px] w-full mx-auto">
        <div className="rounded-2xl shadow-lg border bg-white px-6 py-6 space-y-6 text-sm text-gray-700 font-body">
          <div className="text-center space-y-1">
            <h2 className="text-3xl font-bold text-black">
              $175 <span className="text-base font-normal">/hr</span>
            </h2>
            <p className="text-gray-500">3 hr minimum</p>
          </div>

          <hr />

          <div className="space-y-2">
            <h3 className="font-semibold text-[16px] text-black">
              Date and Time
            </h3>
            <InputField placeholder="05 July 2024" />
            <div className="flex flex-col sm:flex-row gap-2">
              <InputField placeholder="9.30am" className="sm:w-1/2" />
              <InputField placeholder="12.30pm" className="sm:w-1/2" />
            </div>
            <InputField placeholder="Capacity" />
          </div>

          <hr />

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <FaStar className="text-yellow-500" />
              <p className="font-semibold text-[16px] text-black">
                3 hr minimum
              </p>
            </div>
            <p className="text-gray-500">
              convallis tempor nisi. Mauris mattis molestie sodales.
              Pellentesque vehicula varius pellentesque.
            </p>
          </div>

          <hr />

          <div className="space-y-2">
            <h3 className="font-medium text-black">Price</h3>
            <div className="flex justify-between">
              <span>$175.00 × 2.5 hours</span>
              <span>$437.50</span>
            </div>
            <div className="flex justify-between">
              <span>Cleaning</span>
              <span>$125.00</span>
            </div>
            <div className="flex justify-between">
              <span>Processing</span>
              <span>$53.44</span>
            </div>
          </div>

          <hr />

          <div className="flex justify-between text-lg font-semibold text-black">
            <span>Total</span>
            <span>$615.00</span>
          </div>

          <button className="w-full bg-purple-600 text-white text-md font-semibold py-3 rounded-md hover:bg-purple-700">
            Request to Book
          </button>

          <p className="text-center text-xs text-gray-400">
            Vivamus tincidunt tellus rhoncus ex interdum, sed euismod ligula
            faucibus.
          </p>
        </div>
      </div>
    </div>
  </Container>
);

export default BookingCard;
