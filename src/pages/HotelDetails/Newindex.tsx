// @ts-nocheck
import { motion } from "framer-motion";
import DarkModeSwitcher from "../../components/DarkModeSwitcher";
import MainColorSwitcher from "../../components/MainColorSwitcher";
import logoUrl from "../../assets/images/logo.svg";
import illustrationUrl from "../../assets/images/illustration.svg";
import { FormInput, FormCheck } from "../../base-components/Form";
import clsx from "clsx";

import SideMenu from "../../layouts/SideMenu";
import SimpleMenu from "../../layouts/SideMenu";
import TopMenu from "../../layouts/SideMenu";

import TopBar from "../../components/TopBar";

import { Link, useParams, useNavigate } from "react-router-dom";
import _ from "lodash";
import siteLogo from "../../assets/images/logo.png";
import facebookIcon from "../../assets/images/facebook.svg";
import twitterIcon from "../../assets/images/twitter.svg";
import linkedinIcon from "../../assets/images/linkedin.svg";
import youtubeIcon from "../../assets/images/youtube.svg";
import instagramIcon from "../../assets/images/instagram.svg";
import lastSocialIcon from "../../assets/images/lastsocial.svg";
import bannerImage from "../../assets/images/banner.png";

import listingBannerImage from "../../assets/images/listing_banner.jpg";

import tajImage from "../../assets/images/Taj-Mahal-Agra-India.jpg";
import parisImage from "../../assets/images/paris.jpg";
import brazilImage from "../../assets/images/brazil.jpg";
import usaImage from "../../assets/images/usa.jpg";
import indianaImage from "../../assets/images/indiana.jpg";
import chinaImage from "../../assets/images/china.jpg";

import uploadImg from "../../assets/images/upload.jpg";

import domesticImage01 from "../../assets/images/d01.jpg";
import domesticImage02 from "../../assets/images/d02.jpg";
import domesticImage03 from "../../assets/images/d03.jpg";
import domesticImage04 from "../../assets/images/d04.jpg";

import internationalImage01 from "../../assets/images/i01.jpg";

import tagImg from "../../assets/images/tag.png";
import timeImg from "../../assets/images/time.png";
import infoImg from "../../assets/images/info.png";
import locationImg from "../../assets/images/location.png";

import hotelIcon from "../../assets/images/hotel_icon.png";
import privateIcon from "../../assets/images/private_icon.png";
import flightIcon from "../../assets/images/flight_icon.png";
import onlyFlightIcon from "../../assets/images/plain_icon.png";
import longStayIcon from "../../assets/images/long_stay_icon.png";
import activityIcon from "../../assets/images/activities_icon.png";

import formArrowIcon from "../../assets/images/arrow_icon.png";

import customizeTourIcon from "../../assets/images/customize_tour.png";

import spmage01 from "../../assets/images/sp01.png";
import spmage02 from "../../assets/images/sp02.png";
import spmage03 from "../../assets/images/sp03.png";
import spmage04 from "../../assets/images/sp4.png";
import spmage05 from "../../assets/images/sp5.png";

import tabImage01 from "../../assets/images/t01.jpg";
import tabImage02 from "../../assets/images/t02.jpg";
import tabImage03 from "../../assets/images/t03.jpg";
import tabImage04 from "../../assets/images/t04.jpg";

import flightIcon2 from "../../assets/images/flighticon.png";
import hotelIcon2 from "../../assets/images/hotelicon.png";
import travelIcon from "../../assets/images/travelicon.png";

import carIcon from "../../assets/images/carIcon.png";

import testiBG from "../../assets/images/testibg.png";

import smallImg from "../../assets/images/small_img.jpg";

import footerImg from "../../assets/images/footer_banner.png";

import calendarIcon from "../../assets/images/calendar_icon.png";

import { Tab } from "../../base-components/Headless";

import {
  PreviewComponent,
  Preview,
  Source,
  Highlight,
} from "../../base-components/PreviewComponent";
import { FormLabel, FormSwitch } from "../../base-components/Form";
import { Menu, Dialog } from "../../base-components/Headless";
import Litepicker from "../../base-components/Litepicker";
import Button from "../../base-components/Button";
import Lucide from "../../base-components/Lucide";
import { useState, useRef, useEffect } from "react";
import callApi from "../../frontend-components/utility/function";

import { FormSelect } from "../../base-components/Form";

import TinySlider, {
  TinySliderElement,
} from "../../base-components/TinySlider";

//===========FrontEnd Componenets=======================

import Header from "../../frontend-components/layout/header";
import StickyMenu from "../../frontend-components/layout/stickyMenu";
import Footer from "../../frontend-components/layout/footer";
import server from "../../../apiconfig.json";
import {
  FaDoorOpen,
  FaSwimmingPool,
  FaCalendarCheck,
  FaParking,
} from "react-icons/fa";
import { FaSchool, FaBriefcase, FaStar, FaHeart } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { ImSpoonKnife } from "react-icons/im";
import { PiSecurityCameraFill } from "react-icons/pi";
import { FaWifi } from "react-icons/fa6";
import { RiHomeGearFill } from "react-icons/ri";
import { MdOutlinePets } from "react-icons/md";
import { BsTvFill } from "react-icons/bs";
import { RiAlarmWarningFill } from "react-icons/ri";
import { GiRingingAlarm } from "react-icons/gi";
//===========FrontEnd Componenets End====================

const marginTopMinus = {
  top: -9,
};
const marginArrowStyle = {
  right: -25,
  top: 20,
};

import "photoswipe/dist/photoswipe.css";

import { Gallery, Item } from "react-photoswipe-gallery";

import DayPlan from "../../elements/dayPlan";
import Pax from "../../elements/pax";

import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";

// Gallery Functioning::start

// import React, { useState, useEffect } from "react";

const images = [
  "https://cdn.photoswipe.com/photoswipe-demo-images/photos/home-demo/luca-bravo-ny6qxqv_m04-unsplash_snrzpf/luca-bravo-ny6qxqv_m04-unsplash_snrzpf_c_scale,w_2500.jpg",
  "https://cdn.photoswipe.com/photoswipe-demo-images/photos/home-demo/luca-bravo-O453M2Liufs-unsplash_qqt53u/luca-bravo-O453M2Liufs-unsplash_qqt53u_c_scale,w_2500.jpg",
  "https://cdn.photoswipe.com/photoswipe-demo-images/photos/home-demo/luca-bravo-VowIFDxogG4-unsplash_ibrktu/luca-bravo-VowIFDxogG4-unsplash_ibrktu_c_scale,w_2500.jpg",
  "https://cdn.photoswipe.com/photoswipe-demo-images/photos/home-demo/luca-bravo-zAjdgNXsMeg-unsplash_q6zdih/luca-bravo-zAjdgNXsMeg-unsplash_q6zdih_c_scale,w_2500.jpg",
  "https://cdn.photoswipe.com/photoswipe-demo-images/photos/home-demo/luca-bravo-A-fubu9QJxE-unsplash_jxy5p8/luca-bravo-A-fubu9QJxE-unsplash_jxy5p8_c_scale,w_2500.jpg",
  "https://a0.muscache.com/im/pictures/hosting/Hosting-1346147961467201760/original/1720e6f6-3b97-4e60-960f-c3684f1bdb7f.jpeg?im_w=1200",
];

// Mobile functionality :: start

function Main() {
  const [isMobile, setIsMobile] = useState(false);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  // Mobile functionality :: end

  // Gallery :: start
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(0);

  const openLightbox = (index) => {
    setActiveImage(index);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  const showNext = () => {
    setActiveImage((prev) => (prev + 1) % images.length);
  };

  const showPrev = () => {
    setActiveImage((prev) => (prev - 1 + images.length) % images.length);
  };

  // Gallery :: end

  //   Service informaiton details :: start
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [guests, setGuests] = useState({
    adults: 1,
    children: 0,
    infants: 0,
    pets: 0,
  });

  const increment = (key) => {
    if (guests[key] < 5) {
      setGuests({ ...guests, [key]: guests[key] + 1 });
    }
  };

  const decrement = (key) => {
    if (guests[key] > 0) {
      setGuests({ ...guests, [key]: guests[key] - 1 });
    }
  };
  //   Service informaiton details :: end

  // Show Modal :: start :: Amenities modal
  const [showModal, setShowModal] = useState(false);

  const handleClickOutside = (e) => {
    if (e.target.id === "overlay") {
      setShowModal(false);
    }
  };

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showModal]);
  // Show Modal :: end :: Amenities modal

  // Show Modal :: start :: Review-rating modal
  const [rateModal, setRateModal] = useState(false);

  const rateClickOutside = (e) => {
    if (e.target.id === "outside") {
      setRateModal(false);
    }
  };

  useEffect(() => {
    if (rateModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [rateModal]);
  // Show Modal :: end :: Review-rating modal

  // INCLUSIONS Modal :: start :: Review-rating modal
  const [inclusionModal, setInclusionModal] = useState(false);

  const inclusionClickOutside = (e) => {
    if (e.target.id === "outside1") {
      setInclusionModal(false);
    }
  };

  useEffect(() => {
    if (inclusionModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [inclusionModal]);
  // INCLUSIONS Modal :: end :: Review-rating modal

  // EXCLUSIONS Modal :: start :: Review-rating modal
  const [exclusionModal, setExclusionModal] = useState(false);

  const exclusionClickOutside = (e) => {
    if (e.target.id === "outside2") {
      setExclusionModal(false);
    }
  };

  useEffect(() => {
    if (exclusionModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [exclusionModal]);
  // EXCLUSIONS Modal :: end :: Review-rating modal

  // CANCELLATION Modal :: start :: Review-rating modal
  const [cancellationModal, setCancellationModal] = useState(false);

  const cancellationClickOutside = (e) => {
    if (e.target.id === "outside3") {
      setCancellationModal(false);
    }
  };

  useEffect(() => {
    if (cancellationModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [cancellationModal]);
  // CANCELLATION Modal :: end :: Review-rating modal

  // Date time :: start

  const [date, setDate] = useState("");
  const [daterange, setDaterange] = useState("");
  // Date time :: end

  // Rating Form :: start

  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [reviews, setReviews] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (rating && name && comment) {
      const newReview = {
        rating,
        name,
        comment,
      };
      setReviews([newReview, ...reviews]);
      setRating(0);
      setName("");
      setComment("");
    }
  };

  // Rating Form :: end

  // Show more description :: start
  const [isExpanded, setIsExpanded] = useState(false);
  const fullText = `About this space Gangtok is the capital of the state of Sikkim. It takes about 4.5 hours to reach one place from the other by Car or Bus. Today, travelers embarking on a journey of Sikkim discover a mystical wonderland of spectacular natural beauty. For all adventure-seekers, Sikkim would definitely be nothing less than paradise for you. Sikkim shares its border with Nepal in the west and Bhutan in the east, with the Tibetan plateau rising from its northern border. It was once a Himalayan monarchy and part of the fabled Silk Route to China . Buddhist monasteries, trekking trails and mountain views of Darjeeling will surely mesmerize you. Organic, Green and Pollution Free State . Checkout our best rates and much more at pocket-friendly prices for Sikkim tour packages . The space Discover a haven of simple elegance. This brand 3500 sq.ft offers a serene escape with thoughtfully curated details, creating a space that is both stylish and effortlessly comfortable. Experience refined living in the heart of Sikkim. The scenery from the balconies includes a stunning view of the valley and Kitchen Gardens with home grown organic vegetables and trees to accentuate your peaceful stay. From Traditional "Thangkas" to genuine Oil Paintings by a local experienced painter to Vintage Handmade carpets. We are all about creating a feel for our customers. You won't find a better value for your stay. Guest access Entire apartment is accessible by guests. Other things to note Booking is really recommended if your requirement is for a serviced hotel with as close to hotel like feeling. We got you covered.`;

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };
  // Show more description :: end

  return (
    <>
      {/* HEADER SECTION TWO */}
      {/*<StickyMenu></StickyMenu>*/}

      <div className="bg-white overflow-hidden">
        {/* HEADER SECTION */}
        <Header></Header>

        {/* BANNER SECTION */}

        <div className="relative  w-full top-0 left-0 flex flex-col items-center pb-4  ">
          <div className="mt-10 px-4 flex flex-col md:flex-row  justify-center items-center max-w-xl w-full ">
            <input
              type="text"
              placeholder="Kolkata"
              className="w-full md:flex-1 px-4 py-3 rounded-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 mb-3 md:mb-0"
            />
            <button className="w-full md:w-auto px-6 py-3 rounded-full bg-[#F97216] text-white font-medium hover:bg-[#000] transition-colors ml-0 md:ml-3">
              Search
            </button>
          </div>
        </div>

        {/* TRIP BY DESTINATION SECTION */}
        {/* <div className="trip_by_destination_section mt-2">
          <div className="container">
            <h2 className="text-3xl font-bold text-black text-left mb-0">
              All Package Tour
            </h2>
          </div>
        </div> */}

        {/* Gallery Start */}
        <div className="container mt-5 p-5 w-[100%] md:max-w-[1200px]">
          <div className="w-full">
            <h2 className="text-3xl font-bold text-black text-left mb-3">
              THE PEARL
            </h2>
            {!isMobile ? (
              <div className="grid grid-cols-2 gap-2 h-[100%]">
                <div className="w-full h-full">
                  <img
                    src={images[0]}
                    alt="Main"
                    onClick={() => openLightbox(0)}
                    className="w-full h-[500px] object-cover rounded-sm cursor-pointer border-2"
                  />
                </div>
                <div className="grid relative grid-cols-2 col-span-1 gap-2 md:max-w-full h-[500px]">
                  {images.slice(1, 5).map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      onClick={() => openLightbox(index + 1)}
                      alt={`Gallery ${index + 2}`}
                      className="w-full h-[245px] object-cover rounded-sm cursor-pointer border-2"
                    />
                  ))}
                  <button
                    onClick={() => openLightbox(0)}
                    className="absolute bottom-2 bg-[#F97313] hover:bg-[#000000] right-2 text-white  text-[16px] px-4 py-2 rounded-md font-500"
                  >
                    Show all photos
                  </button>
                </div>
              </div>
            ) : (
              <div className="relative overflow-hidden w-full h-80">
                <img
                  src={images[current]}
                  alt={`Slide ${current + 1}`}
                  onClick={() => openLightbox(current)}
                  className="w-full h-full object-cover rounded-lg cursor-pointer"
                />
                <button
                  onClick={prevSlide}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow"
                >
                  ‹
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow"
                >
                  ›
                </button>
              </div>
            )}

            {isLightboxOpen && (
              <div
                className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center"
                onClick={closeLightbox}
              >
                <div
                  className="relative max-w-[90%] max-h-[90%]"
                  onClick={(e) => e.stopPropagation()}
                >
                  <img
                    src={images[activeImage]}
                    alt={`Fullscreen ${activeImage}`}
                    className="object-contain max-h-[90vh] rounded-lg"
                  />
                  <button
                    onClick={closeLightbox}
                    className="absolute top-2 right-2 text-white text-3xl font-bold"
                  >
                    ✕
                  </button>
                  <button
                    onClick={showPrev}
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white text-5xl"
                  >
                    ‹
                  </button>
                  <button
                    onClick={showNext}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white text-5xl"
                  >
                    ›
                  </button>
                  <div className="absolute top-2 left-2 text-white text-sm">
                    {activeImage + 1} / {images.length}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        {/* Gallery End */}

        {/* Service Information Details :: start */}
        <div className="container mb-2 p-5  w-[100%] md:max-w-[1200px]">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Left Content */}
            <div className="flex-1">
              <h2 className="text-2xl font-semibold">Delhi, India</h2>
              <p className="text-gray-600 border-b pb-4">
                6 guests · 2 bedrooms · 2 beds · 2 bathrooms
              </p>

              <div className="max-w-3xl mx-auto p-2  space-y-4">
                {/* Host Info */}
                <div className="flex items-center space-x-4 border-b py-4">
                  <img
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Host"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h2 className="font-semibold">Hosted by Sangeeta</h2>
                    <p className="text-gray-500 text-sm">3 years hosting</p>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-4 border-b py-4">
                  <div className="flex items-start space-x-3">
                    <FaDoorOpen className="text-2xl" />
                    <div>
                      <h3 className="font-semibold">Self check-in</h3>
                      <p className="text-gray-500 text-sm">
                        You can check in with the building staff.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <FaSwimmingPool className="text-2xl" />
                    <div>
                      <h3 className="font-semibold">Dive right in</h3>
                      <p className="text-gray-500 text-sm">
                        This is one of the few places in the area with a pool.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <FaCalendarCheck className="text-2xl" />
                    <div>
                      <h3 className="font-semibold">
                        Free cancellation for 48 hours
                      </h3>
                      <p className="text-gray-500 text-sm">
                        Get a full refund if you change your mind.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="text-sm border-b space-y-4 py-4 text-gray-700">
                  <p className="text-justify">
                    {isExpanded ? fullText : fullText.slice(0, 150) + "..."}
                  </p>
                  <button
                    onClick={toggleDescription}
                    className="bg-primary text-white text-[14px] font-medium px-6 py-2 rounded-md mt-3 hover:bg-primary-dark transition"
                  >
                    {isExpanded ? "Less show" : "Show more"}
                  </button>
                </div>
                {/* Place Offers */}
                <div className="text-sm space-y-4 py-4">
                  <h2 className="text-2xl font-semibold">
                    What this place offers
                  </h2>

                  <div className="py-4 grid sm:grid-cols-2 grid-cols-1 text-gray-700 gap-6">
                    <div className="flex items-end space-x-3">
                      <ImSpoonKnife className="text-[21px]" />
                      <h3 className="text-[16px]">Kitchen </h3>
                    </div>
                    <div className="flex items-end space-x-3">
                      <FaWifi className="text-[21px]" />
                      <h3 className="text-[16px]">Wifi </h3>
                    </div>
                    <div className="flex items-end space-x-3">
                      <RiHomeGearFill className="text-[21px]" />
                      <h3 className="text-[16px]">Dedicated workspace </h3>
                    </div>
                    <div className="flex items-end space-x-3">
                      <FaParking className="text-[21px]" />
                      <h3 className="text-[16px]">Free parking on premises </h3>
                    </div>
                    <div className="flex items-end space-x-3">
                      <FaSwimmingPool className="text-[21px]" />
                      <h3 className="text-[16px]">Pool </h3>
                    </div>
                    <div className="flex items-end space-x-3">
                      <MdOutlinePets className="text-[21px]" />
                      <h3 className="text-[16px]">Pets allowed </h3>
                    </div>
                    <div className="flex items-end space-x-3">
                      <BsTvFill className="text-[21px]" />
                      <h3 className="text-[16px]">TV </h3>
                    </div>
                    <div className="flex items-end space-x-3">
                      <PiSecurityCameraFill className="text-[21px]" />
                      <h3 className="text-[16px]">Exterior security cameras</h3>
                    </div>
                    <div className="flex items-end space-x-3">
                      <RiAlarmWarningFill className="text-[21px]" />
                      <h3 className="text-[16px]">Carbon monoxide alarm </h3>
                    </div>
                    <div className="flex items-end space-x-3">
                      <GiRingingAlarm className="text-[21px]" />
                      <h3 className="text-[16px]">Smoke alarm </h3>
                    </div>
                  </div>

                  <button
                    onClick={() => setShowModal(true)}
                    className="bg-primary text-white text-[14px] font-medium px-6 py-2 rounded-md mt-3"
                  >
                    Show all 17 amenities
                  </button>

                  {showModal && (
                    <div
                      id="overlay"
                      onClick={handleClickOutside}
                      className="fixed inset-[-60px] z-50 bg-black bg-opacity-50 flex items-center justify-center"
                    >
                      <div className="bg-white w-full max-w-[70%] mx-auto md:max-w-2xl max-h-[100vh] rounded-2xl p-6 overflow-y-auto relative shadow-xl">
                        <button
                          onClick={() => setShowModal(false)}
                          className="absolute top-4 right-4 text-2xl font-bold text-gray-600 hover:text-black"
                        >
                          ✕
                        </button>

                        <h2 className="text-xl font-semibold mb-4">
                          What this place offers
                        </h2>

                        <div className="py-4 grid sm:grid-cols-2 grid-cols-1 text-gray-700 gap-6">
                          <div className="flex items-end space-x-3">
                            <ImSpoonKnife className="text-[21px]" />
                            <h3 className="text-[16px]">Kitchen </h3>
                          </div>
                          <div className="flex items-end space-x-3">
                            <FaWifi className="text-[21px]" />
                            <h3 className="text-[16px]">Wifi </h3>
                          </div>
                          <div className="flex items-end space-x-3">
                            <RiHomeGearFill className="text-[21px]" />
                            <h3 className="text-[16px]">
                              Dedicated workspace{" "}
                            </h3>
                          </div>
                          <div className="flex items-end space-x-3">
                            <FaParking className="text-[21px]" />
                            <h3 className="text-[16px]">
                              Free parking on premises{" "}
                            </h3>
                          </div>
                          <div className="flex items-end space-x-3">
                            <FaSwimmingPool className="text-[21px]" />
                            <h3 className="text-[16px]">Pool </h3>
                          </div>
                          <div className="flex items-end space-x-3">
                            <MdOutlinePets className="text-[21px]" />
                            <h3 className="text-[16px]">Pets allowed </h3>
                          </div>
                          <div className="flex items-end space-x-3">
                            <BsTvFill className="text-[21px]" />
                            <h3 className="text-[16px]">TV </h3>
                          </div>
                          <div className="flex items-end space-x-3">
                            <PiSecurityCameraFill className="text-[21px]" />
                            <h3 className="text-[16px]">
                              Exterior security cameras
                            </h3>
                          </div>
                          <div className="flex items-end space-x-3">
                            <RiAlarmWarningFill className="text-[21px]" />
                            <h3 className="text-[16px]">
                              Carbon monoxide alarm{" "}
                            </h3>
                          </div>
                          <div className="flex items-end space-x-3">
                            <GiRingingAlarm className="text-[21px]" />
                            <h3 className="text-[16px]">Smoke alarm </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="w-full lg:w-1/3">
              {/* Check-in/Check-out Date */}
              <div className="p-4 border rounded-xl shadow-sm mb-4">
                <h3 className="text-xl font-semibold mb-4 text-center">
                  House Rules
                </h3>
                <div className="flex justify-between items-start">
                  <p className="border border-gray border-b-2 rounded-md px-3 py-1">
                    <strong> Check In :</strong> 3:00 pm
                  </p>
                  <p className="border border-gray border-b-2 rounded-md px-3 py-1">
                    <strong> Check Out :</strong> 11:00 am
                  </p>
                </div>

                {/* check-in/check-out */}
              </div>

              {/* Total Price */}
              <div className="p-4 border rounded-xl shadow-sm mb-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-semibold mb-4">Our Price</h3>

                  <button
                    variant="primary"
                    className="w-[100px] bg-primary text-white text-[15px] font-bold py-2 rounded-lg"
                  >
                    10% OFF
                  </button>
                </div>

                {/* Price Button */}
                <button
                  variant="primary"
                  className="w-full bg-[#F97313] hover:bg-[#000000] text-white text-[25px] font-bold py-4 rounded-lg mt-4"
                >
                  Rs. 54,555 /-
                </button>
              </div>

              {/* Add dates for prices :: start */}
              <div className="p-4 border rounded-xl shadow-sm mb-4">
                <h3 className="text-xl font-semibold mb-4">
                  Add dates for prices
                </h3>

                {/* Dates Section */}
                <div className="grid grid-cols-2 gap-2 mb-4">
                  <div>
                    <label className="block text-xs font-bold mb-1 mx-2">
                      Check-in
                    </label>
                    {/* date-time :: start */}
                    <div className="form_field_area mx-2 relative">
                      <Preview>
                        <div className="relative w-40 mx-auto">
                          <div className="absolute flex items-center justify-center w-12 h-full rounded-l text-black">
                            <Lucide icon="Calendar" className="w-4 h-4" />
                          </div>
                          <div className="absolute right-0 flex items-center justify-center w-12 h-full rounded-l text-black">
                            <svg
                              width="12"
                              height="8"
                              viewBox="0 0 12 8"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M10.8755 1.72962L6.29255 7.1651C6.23799 7.22962 6.17888 7.27542 6.11523 7.30252C6.05158 7.32962 5.98338 7.34295 5.91064 7.34252C5.83789 7.34252 5.76969 7.32919 5.70604 7.30252C5.64239 7.27585 5.58328 7.23005 5.52873 7.1651L0.932151 1.72962C0.804847 1.57909 0.741195 1.39091 0.741195 1.16511C0.741195 0.939303 0.809394 0.745755 0.945791 0.584465C1.08219 0.423175 1.24132 0.34253 1.42318 0.34253C1.60504 0.34253 1.76417 0.423175 1.90057 0.584465L5.91064 5.32639L9.92071 0.584465C10.048 0.433927 10.205 0.358658 10.3915 0.358658C10.5781 0.358658 10.7395 0.439303 10.8755 0.600593C11.0119 0.761883 11.0801 0.950055 11.0801 1.16511C11.0801 1.38016 11.0119 1.56833 10.8755 1.72962Z"
                                fill="black"
                              />
                            </svg>
                          </div>
                          <Litepicker
                            value={date}
                            onChange={setDate}
                            options={{
                              autoApply: false,
                              showWeekNumbers: true,
                              dropdowns: {
                                minYear: 1990,
                                maxYear: null,
                                months: true,
                                years: true,
                              },
                            }}
                            className="text-black rounded-sm py-2 px-9 text-sm"
                          />
                        </div>
                      </Preview>
                    </div>
                    {/* date-time :: end */}
                    {/* <input
                      type="text"
                      placeholder="Add date"
                      className="w-full border p-2 rounded"
                    /> */}
                  </div>
                  <div>
                    <label className="block text-xs font-bold mb-1 mx-2">
                      Checkout
                    </label>
                    {/* date-time :: start */}
                    <div className="form_field_area mx-2 relative">
                      <Preview>
                        <div className="relative w-40 mx-auto">
                          <div className="absolute flex items-center justify-center w-12 h-full rounded-l text-black">
                            <Lucide icon="Calendar" className="w-4 h-4" />
                          </div>
                          <div className="absolute right-0 flex items-center justify-center w-12 h-full rounded-l text-black">
                            <svg
                              width="12"
                              height="8"
                              viewBox="0 0 12 8"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M10.8755 1.72962L6.29255 7.1651C6.23799 7.22962 6.17888 7.27542 6.11523 7.30252C6.05158 7.32962 5.98338 7.34295 5.91064 7.34252C5.83789 7.34252 5.76969 7.32919 5.70604 7.30252C5.64239 7.27585 5.58328 7.23005 5.52873 7.1651L0.932151 1.72962C0.804847 1.57909 0.741195 1.39091 0.741195 1.16511C0.741195 0.939303 0.809394 0.745755 0.945791 0.584465C1.08219 0.423175 1.24132 0.34253 1.42318 0.34253C1.60504 0.34253 1.76417 0.423175 1.90057 0.584465L5.91064 5.32639L9.92071 0.584465C10.048 0.433927 10.205 0.358658 10.3915 0.358658C10.5781 0.358658 10.7395 0.439303 10.8755 0.600593C11.0119 0.761883 11.0801 0.950055 11.0801 1.16511C11.0801 1.38016 11.0119 1.56833 10.8755 1.72962Z"
                                fill="black"
                              />
                            </svg>
                          </div>
                          <Litepicker
                            value={date}
                            onChange={setDate}
                            options={{
                              autoApply: false,
                              showWeekNumbers: true,
                              dropdowns: {
                                minYear: 1990,
                                maxYear: null,
                                months: true,
                                years: true,
                              },
                            }}
                            className="text-black rounded-sm py-2 px-9 text-sm"
                          />
                        </div>
                      </Preview>
                    </div>
                    {/* date-time :: end */}
                  </div>
                </div>

                {/* Guests Dropdown */}
                <div className="relative">
                  <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="w-full border p-2 rounded flex justify-between items-center"
                  >
                    <span>
                      {guests.adults +
                        guests.children +
                        guests.infants +
                        guests.pets}{" "}
                      guest
                      {guests.adults +
                        guests.children +
                        guests.infants +
                        guests.pets !==
                        1 && "s"}
                    </span>
                    <span>{isDropdownOpen ? "▲" : "▼"}</span>
                  </button>

                  {isDropdownOpen && (
                    <div className="absolute z-10 bg-white w-full border mt-2 rounded-lg shadow-lg p-4 space-y-4">
                      {["adults", "children", "infants", "pets"].map((type) => (
                        <div
                          key={type}
                          className="flex justify-between items-center"
                        >
                          <div className="capitalize">{type}</div>
                          <div className="flex items-center space-x-2">
                            <button
                              onClick={() => decrement(type)}
                              className="border p-1 rounded-full w-8 h-8 flex items-center justify-center"
                            >
                              -
                            </button>
                            <span>{guests[type]}</span>
                            <button
                              onClick={() => increment(type)}
                              className="border p-1 rounded-full w-8 h-8 flex items-center justify-center"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      ))}

                      <p className="text-xs text-gray-500 mt-2">
                        Maximum 6 guests. Pets are allowed up to 2.
                      </p>

                      <button
                        onClick={() => setIsDropdownOpen(false)}
                        className="text-sm text-blue-600 mt-4 underline"
                      >
                        Close
                      </button>
                    </div>
                  )}
                </div>

                {/* Check Availability Button */}
                <button
                  variant="primary"
                  className="w-full bg-[#F97313] hover:bg-[#000000] text-white py-2 rounded-lg mt-4"
                >
                  Check availability
                </button>
              </div>

              {/* Meet you host :: start */}
              <div className="bg-white shadow-md border border-gray-300 rounded-2xl p-4 flex flex-row justify-around items-start">
                <div className="text-center space-y-8">
                  <div className="relative">
                    <img
                      src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="Host"
                      className="w-[120px] h-[120px] rounded-full object-cover"
                    />
                    <span className="absolute bottom-0 right-6 bg-pink-500 p-1 rounded-full text-white text-xs">
                      <FaHeart />
                    </span>
                  </div>
                  <div>
                    <h3 className="text-[25px] font-semibold mt-2 mb-2">
                      Sangeeta
                    </h3>
                    <p className="text-sm text-gray-500">Host</p>
                  </div>
                </div>

                <div className=" pt-4  space-y-4">
                  <h4 className="font-semibold text-[21px] mb-3">Co-Hosts</h4>
                  <div className="flex items-center space-x-2">
                    <img
                      src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="Co-host"
                      className="w-10 h-10 rounded-full"
                    />
                    <p>Surya Pratap</p>
                  </div>

                  <h4 className="font-semibold text-[21px]">Host details</h4>
                  <div>
                    <p>Response rate: 100%</p>
                    <p>Responds within an hour</p>
                  </div>
                </div>
              </div>

              {/* Meet you host :: end */}
            </div>
          </div>
          {/* Review:: start */}
          <div className="container border-t border-b mb-2 p-5 w-[100%] md:max-w-[1200px]">
            <h2 className="text-xl font-semibold mb-4">No reviews (yet)</h2>
            <div>
              <p className="">
                <div className="border-b pb-4">
                  <div className="flex items-center space-x-1 mb-1">
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                  </div>
                  <p className="font-semibold text-gray-800">Shivam</p>
                  <p className="text-gray-700">This is nice place to visit..</p>
                  <button
                    onClick={() => setRateModal(true)}
                    className="bg-primary text-white text-[14px] font-medium px-6 py-2 rounded-md mt-3"
                  >
                    Show more
                  </button>
                </div>
              </p>
            </div>
          </div>
          {/* Review:: end */}
          {/* Rating Form with Rating review data :: modal popup :: start */}

          {rateModal && (
            <div
              id="outside"
              onClick={rateClickOutside}
              className="fixed inset-[-60px] z-50 bg-black bg-opacity-50 flex items-center justify-center"
            >
              <div className="bg-white w-full max-w-[70%] mx-auto md:max-w-2xl max-h-[100vh] rounded-2xl p-6 overflow-y-auto relative shadow-xl">
                <button
                  onClick={() => setRateModal(false)}
                  className="absolute top-4 right-4 text-2xl font-bold text-gray-600 hover:text-black"
                >
                  ✕
                </button>

                <h2 className="text-xl font-semibold  text-center">
                  Customer reviews
                </h2>

                {/* Rating form with data :: start */}
                <div className="p-4 md:p-4 max-w-xl mx-auto">
                  <div className="bg-white py-4 rounded-xl ">
                    <div className="flex justify-center mb-4">
                      {[...Array(5)].map((_, index) => {
                        const starValue = index + 1;
                        return (
                          <label key={index}>
                            <input
                              type="radio"
                              name="rating"
                              className="hidden"
                              value={starValue}
                              onClick={() => setRating(starValue)}
                            />
                            <FaStar
                              className={`cursor-pointer text-3xl transition-colors duration-200 ${
                                starValue <= (hover || rating)
                                  ? "text-yellow-400"
                                  : "text-gray-300"
                              }`}
                              onMouseEnter={() => setHover(starValue)}
                              onMouseLeave={() => setHover(0)}
                            />
                          </label>
                        );
                      })}
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <input
                        type="text"
                        className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring focus:border-blue-400"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                      <textarea
                        className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring focus:border-blue-400 resize-none h-28"
                        placeholder="Your opinion..."
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                      ></textarea>

                      <div className="flex gap-4">
                        <button
                          type="submit"
                          className="bg-[#F97313] text-white px-5 py-2 rounded-md hover:bg-[#000000] transition"
                        >
                          Submit
                        </button>
                        <button
                          type="reset"
                          className="text-blue-600 hover:underline"
                          onClick={() => {
                            setRating(0);
                            setName("");
                            setComment("");
                          }}
                        >
                          Cancel
                        </button>
                      </div>
                    </form>
                  </div>

                  <hr />

                  {/* Display Reviews */}
                  <div className="mt-8 space-y-6">
                    {reviews.map((rev, index) => (
                      <div key={index} className="border-b pb-4">
                        <div className="flex items-center space-x-1 mb-1">
                          {[...Array(rev.rating)].map((_, i) => (
                            <FaStar key={i} className="text-yellow-400" />
                          ))}
                        </div>
                        <p className="font-semibold text-gray-800">
                          {rev.name}
                        </p>
                        <p className="text-gray-700">{rev.comment}</p>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Rating form with data :: end */}
              </div>
            </div>
          )}
          {/* Rating Form with Rating review data :: modal popup :: end */}
        </div>
        {/* Service Information Details :: end */}

        {/* Meet your host :: start */}
        {/* <div className="container mb-8 p-5 w-[100%] md:max-w-[1200px]">
          <h2 className="text-xl font-semibold mb-4">Meet your host</h2>

    
          <div className="grid md:grid-cols-[400px,1fr] grid-cols-1 gap-16">
      
            <div className="bg-white shadow-2xl rounded-2xl p-4 flex flex-row justify-around items-center">
              <div className="text-center space-y-8">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Host"
                    className="w-[120px] h-[120px] rounded-full object-cover"
                  />
                  <span className="absolute bottom-0 right-6 bg-pink-500 p-1 rounded-full text-white text-xs">
                    <FaHeart />
                  </span>
                </div>
                <div>
                  <h3 className="text-[25px] font-semibold mt-2 mb-2">
                    Sangeeta
                  </h3>
                  <p className="text-sm text-gray-500">Host</p>
                </div>
              </div>

              <div className=" pt-4  space-y-4">
                <div className="flex flex-col items-start">
                  <span className="text-[21px] font-semibold">50</span>{" "}
                  <span className="text-gray-500 text-[12px]">Reviews</span>
                </div>
                <hr />
                <div className="flex flex-col items-start">
                  <span className="text-[21px] font-semibold">4.58</span>
                  <span className="flex items-center text-yellow-500">
                    <FaStar className="" />
                    <span className="ml-1 text-gray-500 text-[12px]">
                      Rating
                    </span>
                  </span>
                </div>
                <hr />
                <div className="flex flex-col items-start">
                  <span className="text-[21px] font-semibold">3</span>
                  <span className="text-gray-500 text-[12px]">
                    Years hosting
                  </span>
                </div>
              </div>
            </div>

          
            <div>
              <div className="space-y-6 ">
                <div>
                  <h4 className="font-semibold text-[21px] mb-3">Co-Hosts</h4>
                  <div className="flex items-center space-x-2">
                    <img
                      src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="Co-host"
                      className="w-10 h-10 rounded-full"
                    />
                    <p>Surya Pratap</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-[21px] mb-3">
                    Host details
                  </h4>
                  <p>Response rate: 100%</p>
                  <p>Responds within an hour</p>
                </div>

                <button className="bg-black text-white px-4 py-2 rounded-md">
                  Message host
                </button>
              </div>

            
              <div className="border-t mt-6 pt-4 text-xs text-gray-500">
                To help protect your payment, always use Airbnb to send money
                and communicate with hosts.
              </div>
            </div>
          </div>

       
          <div className="mt-10 space-y-2 ">
            <div className="flex items-center space-x-2">
              <FaSchool className="text-gray-600 text-[21px]" />
              <p>Where I went to school: Vidyashram</p>
            </div>
            <div className="flex items-center space-x-2">
              <FaBriefcase className="text-gray-600 text-[21px]" />
              <p>My work: HouseMaker</p>
            </div>
            <button className="text-black text-[16px] font-semibold  flex items-center">
              <span className="mr-1 underline"> Show more </span>{" "}
              <IoIosArrowForward size={19} />
            </button>
          </div>
        </div> */}
        {/* Meet your host :: end */}

        {/* Map :: start */}
        <div className="container mb-10 p-5 w-[100%] md:max-w-[1200px]">
          <div className="h-[500px] ">
            <iframe
              className="h-[500px] w-[100%]"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3642.2011100822037!2d88.2555848!3d24.094422100000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f97d7a72034f09%3A0xf4395d84deb96c47!2sSingdha%20Srijon%20Tours%20Private%20Limited!5e0!3m2!1sen!2sin!4v1746715828443!5m2!1sen!2sin"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        {/* Map :: end */}

        {/* Things to know :: start */}
        <div className="container  mb-10 p-5 w-[100%] md:max-w-[1200px]">
          <h2 className="text-[26px] font-medium mb-6 border-t pt-[50px]">
            Things to know
          </h2>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-6 md:gap-16">
            {/* column 1 :: INCLUSIONS */}
            <div className="leading-8  md:leading-10">
              <h3 className="text-[18px] font-medium text-[#000]">
                INCLUSIONS
              </h3>
              {/* <ul>
                <li className="text-[16px]">Check-in after 3:00 pm</li>
                <li className="text-[16px]">Checkout before 11:00 am</li>
                <li className="text-[16px]">6 guests maximum</li>
              </ul> */}
              <button
                onClick={() => setInclusionModal(true)}
                className="text-black font-semibold  flex items-center"
              >
                Show more
              </button>

              {inclusionModal && (
                <div
                  id="outside1"
                  onClick={inclusionClickOutside}
                  className="fixed inset-[-60px] z-50 bg-black bg-opacity-50 flex items-center justify-center"
                >
                  <div className="bg-white w-full max-w-[70%] mx-auto md:max-w-4xl max-h-[90vh] rounded-2xl p-6 overflow-y-auto relative shadow-xl">
                    <button
                      onClick={() => setInclusionModal(false)}
                      className="absolute top-4 right-4 text-2xl font-bold text-gray-600 hover:text-black"
                    >
                      ✕
                    </button>

                    {/* <h2 className="text-xl font-semibold mb-4">INCLUSIONS</h2> */}

                    <div className="space-y-3">
                      <h2 className="text-2xl font-bold text-gray-800 mb-4">
                        Inclusions
                      </h2>
                      <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li className="flex items-start gap-2">
                          <span className="text-orange-500 text-xl">✔</span>5
                          Nights Hotel accommodation in the hotels listed, or
                          similar.
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-orange-500 text-xl">✔</span>
                          Breakfast, Lunch, Evening Snacks, and Dinner – Cooked
                          by
                          <span className="font-semibold text-gray-900">
                            Singdha Srijon Tours Private Limited
                          </span>
                          (Veg or Non-Veg)
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-orange-500 text-xl">✔</span>
                          MAPI Plan (Breakfast and Dinner) for those who opt for
                          an upgrade in better hotels.
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-orange-500 text-xl">✔</span>
                          Sightseeing as mentioned in the itinerary.
                        </li>
                      </ul>
                    </div>

                    {/* Divider */}
                    <div className="border-t border-gray-300 my-6"></div>

                    {/* Road Transport */}
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-orange-600">
                        ROAD TRANSPORT
                      </h3>
                      <p className="text-gray-700">
                        All Transfers & Sightseeings by Car, Bus, Traveller, or
                        Coaster Bus.
                      </p>
                    </div>

                    {/* Our Specialty */}
                    <div className="space-y-2 mt-4">
                      <h3 className="text-lg font-semibold text-orange-600">
                        OUR SPECIALTY
                      </h3>
                      <p className="text-gray-700">
                        Tour Manager or tour leader will be present throughout
                        the tour for each group.
                      </p>
                    </div>

                    {/* Divider */}
                    <div className="border-t border-gray-300 my-6"></div>

                    {/* Note Section */}
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-orange-600">
                        NOTE
                      </h3>
                      <p className="text-gray-700">
                        It is compulsory for the Shillong, Guwahati tour to
                        carry an original Photo ID card (Driving License / Voter
                        ID / Passport) with 02 Xerox copies. Passengers opting
                        for any other vehicle will not get any extra facility.
                        They must stay in touch and follow the tour manager’s
                        instructions as per Company’s decision. Usage of
                        vehicles is subject to local rules & passengers must be
                        on time for meals.
                      </p>
                    </div>

                    {/* Travel Tips */}
                    <div className="space-y-2 mt-4">
                      <h3 className="text-lg font-semibold text-orange-600">
                        TRAVEL TIPS FOR SHILLONG, GUWAHATI
                      </h3>
                      <p className="text-gray-700">
                        Guests are requested to carry towels & dry clothes for
                        river rafting. Also carry your regular basic medicines &
                        basic first aid kit with you.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
            {/* column 2 :: EXCLUSIONS */}
            <div className="leading-8  md:leading-10">
              <h3 className="text-[18px] font-medium text-[#000]">
                EXCLUSIONS
              </h3>

              <button
                onClick={() => setExclusionModal(true)}
                className="text-black font-semibold flex items-center"
              >
                Show more
              </button>

              {exclusionModal && (
                <div
                  id="outside2"
                  onClick={exclusionClickOutside}
                  className="fixed inset-[-60px] z-50 bg-black bg-opacity-50 flex items-center justify-center"
                >
                  <div className="bg-white w-full max-w-[70%] mx-auto md:max-w-4xl max-h-[90vh] rounded-2xl p-6 overflow-y-auto relative shadow-xl">
                    <button
                      onClick={() => setExclusionModal(false)}
                      className="absolute top-4 right-4 text-2xl font-bold text-gray-600 hover:text-black"
                    >
                      ✕
                    </button>

                    <div className="space-y-3">
                      <h2 className="text-2xl font-bold text-gray-800 mb-4">
                        Exclusions
                      </h2>
                      <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li className="flex items-start gap-2">
                          <span className="text-orange-500 text-xl">✔</span>5
                          Travel Ticket Fares.
                        </li>

                        <li className="flex items-start gap-2">
                          <span className="text-orange-500 text-xl">✔</span>
                          Booking of an Extra Car.
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-orange-500 text-xl">✔</span>
                          Visit any Place not included in the Package.
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-orange-500 text-xl">✔</span>
                          GST or Tax on the Tour Package Price.
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-orange-500 text-xl">✔</span>
                          Travel Insurance Fees.
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-orange-500 text-xl">✔</span>
                          Any kind of Self-expenses.
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-orange-500 text-xl">✔</span>
                          Items of Personal Nature i.e. Tips, Porterage, Room
                          Service, Laundry, Mineral Water, Phone Calls,
                          Additional Sightseeing Tours And Excursions are Not
                          Included In The Itinerary.
                        </li>
                      </ul>
                    </div>

                    {/* Divider */}
                    <div className="border-t border-gray-300 my-6"></div>

                    {/* Road Transport */}
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-orange-600">
                        IMPORTANT NOTE FOR FOREIGNERS
                      </h3>

                      <li className="flex items-start gap-2">
                        <span className="text-orange-500 text-xl">✔</span>
                        Extra Charge might be taken for Foreigners.
                      </li>
                    </div>
                  </div>
                </div>
              )}
            </div>
            {/* column 3 :: CANCELLATION */}
            <div className="leading-8  md:leading-10">
              <h3 className="text-[18px] font-medium text-[#000]">
                CANCELLATION
              </h3>
              {/* <ul>
                <li className="text-[16px]">
                  Add your trip dates to get the cancellation details for this
                  stay.
                </li>
              </ul> */}
              <button
                onClick={() => setCancellationModal(true)}
                className="text-black font-semibold  flex items-center"
              >
                Show more
              </button>

              {cancellationModal && (
                <div
                  id="outside3"
                  onClick={cancellationClickOutside}
                  className="fixed inset-[-60px] z-50 bg-black bg-opacity-50 flex items-center justify-center"
                >
                  <div className="bg-white w-full max-w-[70%] mx-auto md:max-w-4xl max-h-[90vh] rounded-2xl p-6 overflow-y-auto relative shadow-xl">
                    <button
                      onClick={() => setCancellationModal(false)}
                      className="absolute top-4 right-4 text-2xl font-bold text-gray-600 hover:text-black"
                    >
                      ✕
                    </button>

                    <div className="space-y-3">
                      <h2 className="text-2xl font-bold text-gray-800 mb-4">
                        Cancellation
                      </h2>

                      <div className="space-y-2">
                        <h3 className="text-lg font-semibold text-orange-600">
                          Our Hotels:
                        </h3>

                        <li className="flex items-start gap-2 ">
                          <span className="text-orange-500 text-xl">✔</span>
                          We will provide the Hotel Status during the journey
                          itself. However, we may change the same in case of any
                          unavoidable circumstances. Also, the passengers are
                          requested to Check in and Check out at the Exact
                          Timing provided by the Hotels. Any kind of indulgence
                          with the Hotel Manager or Staff won’t be entertained.
                        </li>
                      </div>

                      <div className="space-y-2">
                        <h3 className="text-lg font-semibold text-orange-600">
                          Our Bus:
                        </h3>

                        <li className="flex items-start gap-2">
                          <span className="text-orange-500 text-xl">✔</span>
                          Passengers will be provided with Seats on a First come
                          first basis. However, they can change the Seats with
                          any of the Co-passengers. Also, the Journeys will
                          happen in Non-A.C Buses. In case of any accidents, we
                          won’t be entertaining any refunds.
                        </li>
                      </div>

                      <div className="space-y-2">
                        <h3 className="text-lg font-semibold text-orange-600">
                          Our Food:
                        </h3>

                        <li className="flex items-start gap-2">
                          <span className="text-orange-500 text-xl">✔</span>
                          We will provide you with the best quality Veg /
                          Non-Veg Foods during the whole trip, cooked by our
                          Chef / Hotel. The Food will include Breakfast, Dinner,
                          Evening Snacks and Lunch. There will be some light
                          foods for Children too.
                        </li>
                      </div>

                      <div className="space-y-2">
                        <h3 className="text-lg font-semibold text-orange-600">
                          Luggage:
                        </h3>

                        <li className="flex items-start gap-2">
                          <span className="text-orange-500 text-xl">✔</span>
                          During the entire tour (Except for the train journey)
                          our staff will be at your service to carry your
                          luggage, but at the same time we are not responsible
                          for the theft or damage to your luggage, no claims are
                          to be made.
                        </li>
                      </div>

                      <div className="space-y-2">
                        <h3 className="text-lg font-semibold text-orange-600">
                          Our Tour Manager:
                        </h3>

                        <li className="flex items-start gap-2">
                          <span className="text-orange-500 text-xl">✔</span>
                          We advise you to co-operate with our manager in all
                          respect to make your tour really enjoyable. Allotment
                          of rooms, and selection of the daily food menu, are
                          the duty of the tour manager and passengers should not
                          interfere in these matters. Passengers indulging in
                          unwanted hindrance, in the smooth operation of the
                          tour, or quarreling with the manager or other
                          passengers, shall be asked to leave the tour at that
                          spot, and shall not be given any refund for the same.
                        </li>
                      </div>

                      <div className="space-y-2">
                        <h3 className="text-lg font-semibold text-orange-600">
                          Unavoidable Circumstances:
                        </h3>

                        <li className="flex items-start gap-2">
                          <span className="text-orange-500 text-xl">✔</span>
                          If due to reasons beyond our control like riots,
                          flood, political unrest, bandhs, accidents or any
                          other natural or man-made calamities, the program of
                          the tour has to be changed or extended, the additional
                          expenditure for the same will have to be borne by the
                          passengers. If any passenger, have to leave the tour
                          mid-way, due to any reasons like the death of a
                          relative, or illness, or any other reasons, there
                          shall be no refund for the remaining portion of the
                          tour.
                          <br />
                          Passengers are advised against carrying expensive
                          jewelry, cameras, etc. on the tour and if they bring
                          them on the tour, it shall be at their own risk, we
                          shall in no way be responsible for the theft or
                          damage. If due to reasons beyond our control, we have
                          to cancel some sight-seeing places, there shall be no
                          refund for the same. If a tour is canceled on our part
                          then the cost and responsibility of organizing the new
                          tour will be of the passengers only. Any dispute will
                          be subject to Berhampore Jurisdiction.
                        </li>
                      </div>

                      <div className="space-y-2">
                        <h3 className="text-lg font-semibold text-orange-600">
                          Things not included in the Tour Cost:
                        </h3>

                        <li className="flex items-start gap-2">
                          <span className="text-orange-500 text-xl">✔</span>
                          Personal expenses like service tax, tips, cold drinks,
                          horse riding, boating, laundry, cable car rides, room
                          heater, taxi fare, mineral water, personal things,
                          insurance, and additional expenses after accidents, we
                          do not take it for granted that all passengers who
                          join the tour have read this terms and conditions and
                          agree to the same.
                        </li>
                      </div>

                      <div className="space-y-2">
                        <h3 className="text-lg font-semibold text-orange-600">
                          Complaints during the Tour:
                        </h3>

                        <li className="flex items-start gap-2">
                          <span className="text-orange-500 text-xl">✔</span>
                          If the passengers have any complaints regarding our
                          services like hotel, bus, train, etc. are advised to
                          inform our office, immediately by phone/fax so that
                          the same can be readdressed on the spot, no complaints
                          or refund for the same be entertained after reaching
                          Berhampore.
                        </li>
                      </div>

                      <div className="space-y-2">
                        <h3 className="text-lg font-semibold text-orange-600">
                          Booking & Cancellations:
                        </h3>
                        <li className="flex  items-start gap-2">
                          <span className="text-orange-500 text-xl">✔</span>
                          You can confirm your booking of our tour by paying a
                          deposit of Rs. 3000/- per person (if any higher class
                          on train or air is required the difference should also
                          be paid in advance) out of this Rs. 3000/- is
                          non-refundable and non-transferable.
                          <br />
                          The balance payment shall be paid 15 days prior to the
                          departure of the tour. Balance payment by Cheque will
                          be accepted 15 days prior to the departure of the
                          tour. If anybody fails to pay the balance amount
                          before 15 days, he shall be deemed as canceled and the
                          deposit shall not be refunded. If we cancel the tour,
                          then we shall refund the amount. But if we are forced
                          to cancel the tour due to natural calamities like
                          floods, riots, bandhs, strikes, etc. then we shall
                          refund the tour cost after deducting 10% as our
                          service charge for making the necessary arrangements
                          for your tour.
                          <br />
                          All the bank charges for credit card transactions will
                          have to be borne by the customer.
                          <br />
                          If the passenger wants to cancel the tour he shall
                          have to make a written application to our office and
                          we shall refund the tour cost after deducting
                          cancellation charges as under:
                        </li>
                        <ul className="list-disc list-inside flex flex-col space-y-2 text-gray-700">
                          <li className="flex items-start gap-2">
                            <span className="text-orange-500 text-xl">✔</span>
                            Before 30 days of tour departure Rs. 3000/- per
                            person
                          </li>

                          <li className="flex items-start gap-2">
                            <span className="text-orange-500 text-xl">✔</span>
                            Between 15 to 30 days 20% of the tour cost
                          </li>

                          <li className="flex items-start gap-2">
                            <span className="text-orange-500 text-xl">✔</span>
                            Between 10 to 15 days 40% of the tour cost
                          </li>

                          <li className="flex items-start gap-2">
                            <span className="text-orange-500 text-xl">✔</span>
                            Between 05 to 10 days 70% of the tour cost
                          </li>

                          <li className="flex items-start gap-2">
                            <span className="text-orange-500 text-xl">✔</span>
                            Within 05 days 100% of the tour cost
                          </li>
                        </ul>

                        <li className="flex items-start gap-2">
                          <span className="text-orange-500 text-xl">✔</span>
                          Please Deposit your cash/cheque in the name of SINGDHA
                          SRIJON TOURS PRIVATE LIMITED. Fixed-rate. Service tax
                          extra.
                          <br />
                          The bank charges for credit card transactions are
                          non-refundable in case of cancellation of tour booking
                          by any party.
                          <br />
                          The verdict of passengers who have experienced our
                          tour, hotel wise, taste of food and our service which
                          are our main assets.
                        </li>
                      </div>

                      <div className="space-y-2">
                        <h3 className="text-lg font-semibold text-orange-600">
                          Online bookings:
                        </h3>

                        <li className="flex items-start gap-2">
                          <span className="text-orange-500 text-xl">✔</span>
                          SINGDHA SRIJON TOURS PRIVATE LIMITED has made this
                          facility available to you as a value-added service.
                          Using this service, you can make your online
                          booking/booking request for booking various services
                          offered by SRIJON TOURS & TRAVELS. Your booking
                          request will be processed for confirmation of prices
                          and availability of services requested by you. Only on
                          confirmation to you about the prices and availability
                          SINGDHA SRIJON TOURS PRIVATE LIMITED will be bound to
                          provide you the requested services subject however to
                          you making full payment and complying with the
                          relevant terms and conditions. Any correspondence with
                          you prior to SINGDHA SRIJON TOURS PRIVATE LIMITED
                          aforesaid confirmation, will not be treated as any
                          acceptance of your request.
                          <br />
                          The online booking of the products and services made
                          available through this website is subject to
                          availability and solely at the discretion of SINGDHA
                          SRIJON TOURS PRIVATE LIMITED and/or its respective
                          suppliers. Please ensure that all information given by
                          you while booking is correct. For security reasons and
                          to be able to advise you of any developments affecting
                          your travel we need to be able to contact you by
                          telephone and email and to have your correct address
                          on record. If any or all of these contact details are
                          not correctly given by you, we reserve the right to
                          cancel the transaction at your risk and cost.
                        </li>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Things to know :: end */}

        {/* FOOTER SECTION */}
        <Footer></Footer>
      </div>
    </>
  );
}

export default Main;
