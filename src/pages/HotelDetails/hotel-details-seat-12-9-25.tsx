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
import { FaCircle } from "react-icons/fa";
import { Search } from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { RiCustomSize } from "react-icons/ri";
import { RiGalleryView } from "react-icons/ri";
import { FaShower } from "react-icons/fa6";

import { FaRoute } from "react-icons/fa6";
import { FaMapPin } from "react-icons/fa";
import { BsFillPinMapFill } from "react-icons/bs";
import { FaBed } from "react-icons/fa";
import { MdOutlineAirlineSeatReclineExtra } from "react-icons/md";
import { FaBusAlt } from "react-icons/fa";
import { BsFillPatchCheckFill } from "react-icons/bs";
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
  "https://images.unsplash.com/photo-1570125909994-e06d01047c28?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1570125909517-53cb21c89ff2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1667082797019-747caeb595be?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1663050766828-a43985f4cf6a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1640522337094-8c71d9c1d6f9?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

function Main() {
  // Breadcrumb :: start
  const CUST_ID = 1234;
  const [changesMade, setChangesMade] = useState(0);
  const navigate = useNavigate();

  const API = server.API_URL;
  const imgPath = server.FILE_PATH;
  const params = useParams();
  const id = params.id;
  console.log({ id });
  const [isLoading, setisLoading] = useState(true);
  const [date, setDate] = useState("");
  const [daterange, setDaterange] = useState("");
  const [datepickerModalPreview, setDatepickerModalPreview] = useState(false);
  const cancelButtonRef = useRef(null);

  // Breadcrumb :: end

  // From :: Search Destination Input form  :: start
  const [showDropdown, setShowDropdown] = useState(false);
  const [selected, setSelected] = useState("");
  const [search, setSearch] = useState("");
  const wrapperRef = useRef(null);

  const destination = [
    "Nearby",
    "Kolkata, West Bengal",
    "New Delhi, Delhi",
    "North Goa, Goa",
    "Darjeeling, West Bengal",
    "Jaipur, Rajasthan",
    "Noida, Uttar Pradesh",
  ];

  const filteredDestination = destination.filter((city) =>
    city.toLowerCase().includes(search.toLowerCase())
  );

  const handleSelect = (city) => {
    setSelected(city);
    setShowDropdown(false);
  };

  // Close dropdown when clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // From:: Search Destination Input form  :: end

  // To:: Search Destination Input form  :: start
  const [showDropdownTo, setShowDropdownTo] = useState(false);
  const [selectedTo, setSelectedTo] = useState("");
  const [searchTo, setSearchTo] = useState("");
  const wrapperRefTo = useRef(null);

  const filteredDestinationTo = destination.filter((city) =>
    city.toLowerCase().includes(searchTo.toLowerCase())
  );

  const handleSelectTo = (city) => {
    setSelectedTo(city);
    setShowDropdownTo(false);
  };

  // Close "To" dropdown when clicked outside
  useEffect(() => {
    const handleClickOutsideTo = (event) => {
      if (
        wrapperRefTo.current &&
        !wrapperRefTo.current.contains(event.target)
      ) {
        setShowDropdownTo(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutsideTo);
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideTo);
    };
  }, []);

  // To:: Search Destination Input form  :: end

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

  // Seat selection :: start
  // Normal seat layout (N = available, S = sold)
  const normalSeats = [
    ["S", "N", "N", "S"],
    ["N", "N", "N", "N"],
    ["N", "S", "N", "N"],
    ["N", "N", "N", "N"],
    ["N", "N", "N", "N"],
  ];

  // Sleeper seat layout
  const sleeperSeats = [
    ["N", "S", "N"],
    ["N", "N", "N"],
    ["S", "N", "N"],
    ["N", "N", "S"],
  ];

  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatClick = (type, rowIndex, colIndex) => {
    const seatId = `${type}-${rowIndex}-${colIndex}`;

    if (
      (type === "normal" && normalSeats[rowIndex][colIndex] === "S") ||
      (type === "sleeper" && sleeperSeats[rowIndex][colIndex] === "S")
    ) {
      return; // Ignore sold seats
    }

    if (selectedSeats.includes(seatId)) {
      setSelectedSeats(selectedSeats.filter((seat) => seat !== seatId));
    } else {
      setSelectedSeats([...selectedSeats, seatId]);
    }
  };
  // Seat selection :: end

  return (
    <>
      {/* HEADER SECTION TWO */}
      {/* <StickyMenu></StickyMenu> */}

      <div className="bg-white overflow-hidden">
        {/* HEADER SECTION */}
        <Header></Header>
        {/* Search Bar:: start */}
        <div className="relative w-full">
          {/* Desktop Background */}
          <div
            className="w-full h-[400px] md:h-[300px] bg-cover bg-bottom bg-fixed hidden md:block"
            style={{
              backgroundImage:
                'url("https://images.unsplash.com/photo-1570125909994-e06d01047c28?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white"></div>
          </div>

          {/* Content */}
          <div className="relative md:absolute w-full top-0 left-0 flex flex-col items-center px-4 pt-10 md:pt-24">
            <h1 className="text-black md:text-white text-xl md:text-3xl font-bold text-center drop-shadow-lg md:block ">
              Bus ticket booking
            </h1>

            {/* Card Container */}
            <div className="mt-6 w-full max-w-5xl bg-white bg-opacity-90 rounded-xl shadow-lg px-4 py-3 md:flex md:items-center md:space-x-4">
              {/* From Input */}
              <div className="flex flex-col md:flex-row items-center w-full md:w-auto p-3 rounded-xl mb-4 md:mb-0">
                <span className="text-xs text-gray-400 mb-1 md:mb-0 md:mr-2">
                  From
                </span>
                <div className="flex items-center justify-center w-full">
                  <Preview>
                    <div
                      ref={wrapperRef}
                      className="relative  border-none w-[250px] md:w-[160px]  mx-auto"
                    >
                      <input
                        type="text"
                        placeholder="Search destination"
                        className="w-full border border-gray-300 h-full rounded text-[14px] px-2 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={selected || search}
                        onFocus={() => setShowDropdown(true)}
                        onChange={(e) => {
                          setSearch(e.target.value);
                          setSelected("");
                        }}
                      />

                      {showDropdown && (
                        <ul className="absolute z-10 bg-white border border-gray-300 rounded mt-1 w-full md:w-[250px] max-h-60 overflow-y-auto shadow-lg">
                          {filteredDestination.length > 0 ? (
                            filteredDestination.map((city, index) => (
                              <li
                                key={index}
                                className="px-4 py-2 text-[12px] hover:bg-blue-100 cursor-pointer"
                                onClick={() => handleSelect(city)}
                              >
                                {city}
                              </li>
                            ))
                          ) : (
                            <li className="px-4 py-2 text-gray-500">
                              No results found
                            </li>
                          )}
                        </ul>
                      )}
                    </div>
                  </Preview>
                </div>
              </div>

              {/* Switch Icon */}
              <div className="hidden md:flex justify-center items-center px-2">
                <Lucide icon="Repeat" className="w-4 h-4 text-gray-400" />
              </div>

              {/* To Input */}
              <div className="flex flex-col md:flex-row items-center w-full md:w-auto p-3 rounded-xl mb-4 md:mb-0">
                <span className="text-xs text-gray-400 mb-1 md:mb-0 md:mr-2">
                  To
                </span>
                <div className="flex items-center justify-center w-full">
                  <Preview>
                    <div
                      ref={wrapperRefTo}
                      className="relative border-none w-[250px] md:w-[160px] mx-auto"
                    >
                      <input
                        type="text"
                        placeholder="Search destination"
                        className="w-full border border-gray-300 h-full rounded text-[14px] px-2 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={selectedTo || searchTo}
                        onFocus={() => setShowDropdownTo(true)}
                        onChange={(e) => {
                          setSearchTo(e.target.value);
                          setSelectedTo("");
                        }}
                      />

                      {showDropdownTo && (
                        <ul className="absolute z-10 bg-white border border-gray-300 rounded mt-1 w-full md:w-[250px] max-h-60 overflow-y-auto shadow-lg">
                          {filteredDestinationTo.length > 0 ? (
                            filteredDestinationTo.map((city, index) => (
                              <li
                                key={index}
                                className="px-4 py-2 text-[12px] hover:bg-blue-100 cursor-pointer"
                                onClick={() => handleSelectTo(city)}
                              >
                                {city}
                              </li>
                            ))
                          ) : (
                            <li className="px-4 py-2 text-gray-500">
                              No results found
                            </li>
                          )}
                        </ul>
                      )}
                    </div>
                  </Preview>
                </div>
              </div>

              {/* Date Dropdown */}
              <div className="flex flex-col md:flex-row items-center w-full md:w-auto p-3 rounded-xl mb-4 md:mb-0">
                <span className="text-xs text-gray-400 mb-1 md:mb-0 md:mr-2">
                  Date
                </span>
                <div className="flex items-center justify-center w-full">
                  <Preview>
                    <div className="relative  border-none w-[250px] md:w-[160px]  mx-auto ">
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
                        className="text-black rounded py-2 px-9 text-sm"
                      />
                    </div>
                  </Preview>
                </div>
              </div>

              {/* Search Button */}
              <button className="bg-[#F97316] hover:bg-black text-white text-sm justify-center font-semibold px-6 py-2 rounded-full flex items-center w-full md:w-auto">
                <Search className="w-4 h-4 mr-2" /> Search cars
              </button>
            </div>
          </div>

          {/* Mobile Content Only */}
          {/* <div className="block md:hidden mt-4 px-4">
            <h1 className="text-lg font-bold text-center text-gray-800 mb-4">
              Car ticket booking
            </h1>
            <div className="space-y-4"></div>
          </div> */}
        </div>
        {/* Search Bar:: end */}

        {/* Service Information Details :: start */}
        <div className="container px-4 md:px-4 py-3">
          <div className="flex flex-col lg:flex-row gap-6 p-4 shadow-xl rounded-lg border">
            {/* Left Content */}
            <div className="flex-1">
              {/* Gallery Start */}
              <div className="w-full">
                {!isMobile ? (
                  <div className="grid grid-cols-[65%_35%] gap-2 h-[100%]">
                    <div className="w-full h-[460px]   flex-grow-2  ">
                      <img
                        src={images[0]}
                        alt="Main"
                        onClick={() => openLightbox(0)}
                        className="w-full h-full object-cover   rounded-lg cursor-pointer border-2"
                      />
                    </div>
                    <div className="grid relative grid-cols-1 flex-grow-1 col-span-1 gap-2 md:max-w-full  h-[400]">
                      {images.slice(1, 3).map((img, index) => (
                        <img
                          key={index}
                          src={img}
                          onClick={() => openLightbox(index + 1)}
                          alt={`Gallery ${index + 2}`}
                          className="w-full  h-full object-cover rounded-lg cursor-pointer border-2"
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
              {/* Gallery End */}

              <h2 className="text-[18px] font-semibold mt-4 leading-[25px]">
                Bus Name:
                <span className="text-gray-500 text-[16px] pl-1">
                  {" "}
                  Coaster{" "}
                </span>
                | Start Time:
                <span className="text-gray-500 text-[16px] pl-1">
                  {" "}
                  09 AM{" "}
                </span>{" "}
                | No. of Seats:
                <span className="text-gray-500 text-[16px] pl-1"> 60 </span>
              </h2>
              {/* Seat selection :: start */}
              <div className="">
                <div className="bg-white mt-5 border rounded-2xl shadow-lg p-6 w-full max-w-5xl">
                  <h2 className="text-xl flex gap-1 items-center justify-center font-bold text-gray-800 text-center mb-6">
                    <FaBusAlt className="text-[#F97316]" /> Select Your Seat
                  </h2>

                  {/* Responsive Layout */}
                  <div className="flex flex-col lg:flex-row gap-6">
                    {/* Normal Seats (left side / top on mobile) */}
                    <div className="flex-1 bg-gray-50 rounded-xl p-4 shadow-sm">
                      <h3 className="text-lg font-semibold flex items-center justify-center gap-2 mb-4 ">
                        <MdOutlineAirlineSeatReclineExtra className="text-green-700" />{" "}
                        Normal Seats
                      </h3>
                      <div className="grid grid-cols-4 gap-4 justify-items-center">
                        {normalSeats.map((row, rowIndex) =>
                          row.map((seat, colIndex) => {
                            const seatId = `normal-${rowIndex}-${colIndex}`;
                            const isSelected = selectedSeats.includes(seatId);
                            const isSold = seat === "S";

                            return (
                              <div className="flex flex-col align-center ">
                                <MdOutlineAirlineSeatReclineExtra
                                  key={seatId}
                                  onClick={() =>
                                    handleSeatClick(
                                      "normal",
                                      rowIndex,
                                      colIndex
                                    )
                                  }
                                  disabled={isSold}
                                  className={`w-10 h-10 p-2 cursor-pointer  flex items-center justify-center rounded-lg text-xs font-semibold transition-all
                        ${
                          isSold
                            ? "bg-gray-300 text-gray-500 cursor-not-allowed line-through"
                            : isSelected
                            ? "bg-green-600 text-white shadow-lg scale-105"
                            : "bg-white border border-green-600 text-green-600 hover:bg-green-100"
                        }`}
                                >
                                  {isSold ? "X" : "₹525"}
                                </MdOutlineAirlineSeatReclineExtra>
                                <p className="text-[10px]">Rs. 525</p>
                              </div>
                            );
                          })
                        )}
                      </div>
                    </div>

                    {/* Sleeper Seats (right side / bottom on mobile) */}
                    <div className="flex-1 bg-gray-50 rounded-xl p-4 shadow-sm">
                      <h3 className="text-lg font-semibold flex items-center justify-center gap-2 mb-4 ">
                        <FaBed className="text-[#EF7722]" /> Sleeper Seats
                      </h3>
                      <div className="grid grid-cols-4 gap-4 justify-items-center">
                        {sleeperSeats.map((row, rowIndex) =>
                          row.map((seat, colIndex) => {
                            const seatId = `sleeper-${rowIndex}-${colIndex}`;
                            const isSelected = selectedSeats.includes(seatId);
                            const isSold = seat === "S";

                            return (
                              <div className="flex flex-col align-center ">
                                <FaBed
                                  key={seatId}
                                  onClick={() =>
                                    handleSeatClick(
                                      "sleeper",
                                      rowIndex,
                                      colIndex
                                    )
                                  }
                                  disabled={isSold}
                                  className={`w-14 h-10 p-2 cursor-pointer flex items-center justify-center rounded-md text-xs font-semibold transition-all
                        ${
                          isSold
                            ? "bg-gray-300 text-gray-500 cursor-not-allowed line-through"
                            : isSelected
                            ? "bg-[#EF7722] text-white shadow-lg scale-105"
                            : "bg-white border border-[#EF7722] text-[#EF7722] hover:bg-indigo-100"
                        }`}
                                >
                                  {isSold ? "X" : "₹750"}
                                </FaBed>
                                <p className="text-[10px]">Rs. 750</p>
                              </div>
                            );
                          })
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Selected Seats Info */}
                  <div className="mt-6 bg-gray-50 px-[12px] py-3 md:p-4 rounded-xl text-center">
                    {selectedSeats.length > 0 ? (
                      <p className="text-sm text-gray-800 flex flex-wrap gap-1 items-center justify-center">
                        <BsFillPatchCheckFill className="font-bold text-lg text-[#F97316]" />
                        You selected
                        <span className="font-bold text-green-600">
                          {selectedSeats.length}
                        </span>
                        seat(s).
                        <span className="font-bold text-[#E62727]">
                          <span className="text-black">Total </span> : ₹
                          {selectedSeats.reduce(
                            (total, seat) =>
                              total + (seat.startsWith("normal") ? 525 : 750),
                            0
                          )}
                        </span>
                      </p>
                    ) : (
                      <p className="text-sm text-gray-500">No seats selected</p>
                    )}
                  </div>
                </div>
              </div>
              {/* Seat selection :: end */}

              {/* Host Info */}

              {/* Features */}
            </div>

            {/* Right Content :: start */}
            <div className="w-full lg:w-1/3">
              {/* Bus Route/Boarding Point|Dropping Point :: start */}
              <div className="p-4 border rounded-xl shadow-sm mb-4">
                {/* <h3 className="text-xl font-semibold mb-4 text-center">
                  Bus route
                </h3> */}
                {/* Bus route  | Boarding point | Dropping point :: start */}
                <div className="">
                  {/* Header: Bus Route */}
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                      <FaRoute /> Bus Route
                    </h2>
                    <p className="text-sm text-gray-500 mt-1">⏱️ 9 hr 19 min</p>
                    <p className="text-sm text-gray-700 mt-2 leading-relaxed">
                      <span className="font-bold text-[#E62727]">
                        Patna (Bihar)
                      </span>{" "}
                      ➔ Bihar Sharif ➔ Hazaribagh ➔ Ramgarh (Jharkhand) ➔{" "}
                      <span className="font-bold text-[#E62727]">Ranchi</span>
                    </p>
                  </div>

                  {/* Divider */}
                  <div className="my-6 border-t border-dashed border-gray-300"></div>

                  {/* Boarding Point Section */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                      <FaMapPin /> Boarding Point
                    </h3>
                    <p className="text-sm text-gray-500 mb-4">Patna (Bihar)</p>

                    {/* Timeline */}
                    <div className="relative ml-4">
                      {/* Vertical Line */}
                      <div className="absolute left-2 top-0 h-full w-0.5 bg-gray-300"></div>

                      {/* Point 1 */}
                      <div className="flex items-start gap-4 mb-6 relative">
                        <div className="text-right min-w-[70px]">
                          <p className="text-lg font-bold text-gray-900">
                            20:41
                          </p>
                          <p className="text-xs text-gray-500">12 Sep</p>
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="w-4 h-4 rounded-full bg-[#E62727] border-2 border-white shadow"></span>
                            <p className="font-semibold text-gray-800">
                              Gandhi Maidan-Muz
                            </p>
                          </div>
                          <p className="text-sm text-gray-500 ml-6">
                            Gandhi Maidan Govt Bus Stand
                          </p>
                        </div>
                      </div>

                      {/* Point 2 */}
                      <div className="flex items-start gap-4 relative">
                        <div className="text-right min-w-[70px]">
                          <p className="text-lg font-bold text-gray-900">
                            21:00
                          </p>
                          <p className="text-xs text-gray-500">12 Sep</p>
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="w-4 h-4 rounded-full bg-[#E62727] border-2 border-white shadow"></span>
                            <p className="font-semibold text-gray-800">
                              Gandhi Maidan, Govt. Bus Stand
                            </p>
                          </div>
                          <p className="text-sm text-gray-500 ml-6">
                            Gandhi Maidan, Govt. Bus Stand
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="my-6 border-t border-dashed border-gray-300"></div>

                  {/* Dropping Point Section */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                      <BsFillPinMapFill /> Dropping Point
                    </h3>
                    <p className="text-sm text-gray-500 mb-4">Ranchi</p>

                    {/* Timeline */}
                    <div className="relative ml-4">
                      {/* Vertical Line */}
                      <div className="absolute left-2 top-0 h-full w-0.5 bg-gray-300"></div>

                      {/* Point */}
                      <div className="flex items-start gap-4 relative">
                        <div className="text-right min-w-[70px]">
                          <p className="text-lg font-bold text-gray-900">
                            06:00
                          </p>
                          <p className="text-xs text-gray-500">13 Sep</p>
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="w-4 h-4 rounded-full bg-green-600 border-2 border-white shadow"></span>
                            <p className="font-semibold text-gray-800">
                              Ranchi Govt Bus Stand-Muz
                            </p>
                          </div>
                          <p className="text-sm text-gray-500 ml-6">
                            Ranchi Govt Bus Stand
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Bus route  | Boarding point | Dropping point :: end */}

                {/* check-in/check-out */}
              </div>
              {/* Bus Route/Boarding Point|Dropping Point :: end */}

              {/* Select boarding & dropping points :: start */}
              <div className="p-4 border rounded-xl shadow-sm mb-4">
                <h3 className="text-xl font-semibold mb-4 text-center">
                  Select boarding & dropping points
                </h3>
                {/* Bus route  | Boarding point | Dropping point :: start */}
                <div className="">
                  {/* Divider */}
                  <div className="my-6 border-t border-dashed border-gray-300"></div>

                  {/* Boarding Point Section */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                      <FaMapPin /> Boarding Points
                    </h3>
                    <p className="text-sm text-gray-500 mb-4">
                      Select Boarding Point
                    </p>

                    {/* Timeline */}
                    <div className="relative">
                      {/* Point 1 */}
                      {/* <div className="flex items-start gap-4 mb-6 relative">
                        <div className="text-right min-w-auto">
                          <p className="text-lg font-bold text-gray-900">
                            20:41
                          </p>
                          <p className="text-xs text-gray-500">12 Sep</p>
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="w-4 h-4 rounded-full bg-[#E62727] border-2 border-white shadow"></span>
                            <p className="font-semibold text-gray-800">
                              Gandhi Maidan-Muz
                            </p>
                          </div>
                          <p className="text-sm text-gray-500 ml-6">
                            Gandhi Maidan Govt Bus Stand
                          </p>
                        </div>
                      </div> */}
                      <div className="space-y-4">
                        {/* First boarding point */}
                        <div
                          onClick={() => handleSelect(0)}
                          className={`flex items-center justify-between p-2 rounded-lg cursor-pointer transition
            ${
              selected === 0
                ? "bg-red-50 border border-red-200"
                : "hover:bg-gray-50 border border-transparent"
            }`}
                        >
                          <div className="flex items-start gap-3">
                            <div className="min-w-auto text-right">
                              <p className="text-lg font-bold text-gray-800">
                                20:41
                              </p>
                              <p className="text-xs text-gray-500">12 Sep</p>
                            </div>
                            <div>
                              <p className="font-semibold text-gray-800">
                                Gandhi Maidan
                              </p>
                              <p className="text-sm text-gray-500">
                                Gandhi Maidan Govt Bus Stand
                              </p>
                            </div>
                          </div>

                          {/* Circle indicator */}
                          <div
                            className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition
              ${selected === 0 ? "border-red-500" : "border-gray-400"}`}
                          >
                            {selected === 0 && (
                              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                            )}
                          </div>
                        </div>

                        {/* Second boarding point */}
                        <div
                          onClick={() => handleSelect(1)}
                          className={`flex items-center justify-between p-2 rounded-lg cursor-pointer transition
            ${
              selected === 1
                ? "bg-red-50 border border-red-200"
                : "hover:bg-gray-50 border border-transparent"
            }`}
                        >
                          <div className="flex items-start gap-3">
                            <div className="min-w-auto text-right">
                              <p className="text-lg font-bold text-gray-800">
                                21:00
                              </p>
                              <p className="text-xs text-gray-500">12 Sep</p>
                            </div>
                            <div>
                              <p className="font-semibold text-gray-800">
                                Gandhi Maidan
                              </p>
                              <p className="text-sm text-gray-500">
                                Gandhi Maidan, Govt. Bus Stand
                              </p>
                            </div>
                          </div>

                          {/* Circle indicator */}
                          <div
                            className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition
              ${selected === 1 ? "border-red-500" : "border-gray-400"}`}
                          >
                            {selected === 1 && (
                              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="my-6 border-t border-dashed border-gray-300"></div>

                  {/* Dropping Point Section */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                      <BsFillPinMapFill /> Dropping Points
                    </h3>
                    <p className="text-sm text-gray-500 mb-4">
                      Select Boarding Point
                    </p>

                    {/* Timeline */}
                    <div className="relative">
                      {/* Point */}
                      {/* <div className="flex items-start gap-4 relative">
                        <div className="text-right min-w-auto">
                          <p className="text-lg font-bold text-gray-900">
                            06:00
                          </p>
                          <p className="text-xs text-gray-500">13 Sep</p>
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="w-4 h-4 rounded-full bg-green-600 border-2 border-white shadow"></span>
                            <p className="font-semibold text-gray-800">
                              Ranchi Govt Bus Stand-Muz
                            </p>
                          </div>
                          <p className="text-sm text-gray-500 ml-6">
                            Ranchi Govt Bus Stand
                          </p>
                        </div>
                      </div> */}

                      <div className="flex items-center justify-between p-2 rounded-lg bg-red-50 border border-red-200">
                        <div className="flex items-start gap-3">
                          <div className="min-w-auto text-right">
                            <p className="text-lg font-bold text-gray-800">
                              06:00
                            </p>
                            <p className="text-xs text-gray-500">13 Sep</p>
                          </div>
                          <div>
                            <p className="font-semibold text-gray-800">
                              Ranchi Govt Bus Stand-Muz
                            </p>
                            <p className="text-sm text-gray-500">
                              Ranchi Govt Bus Stand
                            </p>
                          </div>
                        </div>

                        {/* Static Circle Indicator (Selected) */}
                        <div className="w-5 h-5 rounded-full border-2 border-red-500 flex items-center justify-center">
                          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Bus route  | Boarding point | Dropping point :: end */}

                {/* check-in/check-out */}
              </div>
              {/* Select boarding & dropping points :: end */}
            </div>
            {/* Right Content :: end */}
          </div>
        </div>
        {/* Service Information Details :: end */}

        {/* FOOTER SECTION */}
        <Footer></Footer>
      </div>
    </>
  );
}

export default Main;
