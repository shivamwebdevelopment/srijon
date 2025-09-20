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
// import React, { useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { Search } from "lucide-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FaStar } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaClock } from "react-icons/fa6";
import { BiSolidUserPin } from "react-icons/bi";
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

// Hotels Maps Functioning::start

const ITEMS_PER_PAGE = 9;

// Hotels Maps Functioning::end

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

  // Search Destination Input form  :: start
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

  // Search Destination Input form  :: end

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

  // Slides left and right effects:: start

  // const scrollRef = useRef(null);
  // const [activeBtn, setActiveBtn] = useState(null);

  // const scroll = (direction) => {
  //   const container = scrollRef.current;
  //   const cardWidth = container.offsetWidth / 6; // 6 cards in desktop view

  //   if (direction === "left") {
  //     container.scrollBy({ left: -cardWidth, behavior: "smooth" });
  //     setActiveBtn("left");
  //   } else {
  //     container.scrollBy({ left: cardWidth, behavior: "smooth" });
  //     setActiveBtn("right");
  //   }

  //   setTimeout(() => setActiveBtn(null), 300);
  // };

  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (!container) return;

    const cardWidth = container.firstChild?.offsetWidth || 300;
    const scrollAmount = direction === "left" ? -cardWidth : cardWidth;

    container.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };
  // Slides left and right effects:: end

  return (
    <>
      <StickyMenu></StickyMenu>
      <div className="bg-white overflow-hidden">
        {/* HEADER SECTION */}
        <Header />

        {/* Search Bar:: start */}
        <div className="relative w-full ">
          {/* Desktop Background */}
          <div
            className="w-full h-[400px] bg-fixed md:h-[300px] bg-cover bg-center hidden md:block"
            style={{
              backgroundImage:
                'url("https://images.pexels.com/photos/1036864/pexels-photo-1036864.jpeg?_gl=1*1y3cmxp*_ga*MTQxNzM2OTIyNi4xNzEwNzc4MTgz*_ga_8JE65Q40S6*czE3NTcwOTE1MjckbzQ2JGcxJHQxNzU3MDkxNTcwJGoxNyRsMCRoMA..")',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white"></div>
          </div>

          {/* Content */}
          <div className="relative md:absolute w-full top-0 left-0 flex flex-col items-center px-4 pt-10 md:pt-20">
            {/* Card Container */}
            <div className="mt-6 w-full max-w-[1230px] bg-white bg-opacity-90 rounded-xl shadow-lg px-4 py-2 md:flex md:justify-center md:items-center  md:space-x-[-10px]">
              {/* Where Input */}
              <div className="flex flex-col md:flex-row items-center w-full md:w-auto p-3 rounded-xl mb-4 md:ml-[-20px] md:mb-0">
                <span className="text-xs text-gray-700 font-bold mb-1 md:mb-0 md:mr-2">
                  Where
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

              {/* From Input */}
              <div className="flex flex-col md:flex-row items-center w-full md:w-auto p-3 rounded-xl mb-4 md:mb-0">
                <span className="text-xs text-gray-700 font-bold mb-1 md:mb-0 whitespace-nowrap md:mr-2">
                  Check in
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

              {/* Switch Icon */}
              <div className="hidden md:flex justify-center items-center px-2">
                <Lucide icon="Repeat" className="w-4 h-4 text-gray-400" />
              </div>

              {/* To Input */}
              <div className="flex flex-col md:flex-row items-center w-full md:w-auto p-3 rounded mb-4 md:mb-0">
                <span className="text-xs text-gray-700 font-bold mb-1 whitespace-nowrap md:mb-0 md:mr-2">
                  Check out
                </span>
                <div className="flex items-center justify-center w-full">
                  <Preview>
                    <div className="relative  border-none w-[250px] md:w-[160px]  mx-auto ">
                      <div className="absolute flex items-center justify-center w-12 h-full rounded text-black">
                        <Lucide icon="Calendar" className="w-4 h-4" />
                      </div>
                      <div className="absolute right-0 flex items-center justify-center w-12 h-full rounded text-black">
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

              {/* Room Dropdown */}
              <div className="flex flex-col md:flex-row items-center w-full md:w-auto p-3 rounded-xl mb-4 md:mb-0">
                <div className="flex items-center justify-center w-full">
                  <Preview>
                    {/* Guests Dropdown */}
                    <div className="relative">
                      <button
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className="w-[250px] md:w-[160px] border p-2 rounded flex justify-between items-center"
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
                        {/* <span>{isDropdownOpen ? "▲" : "▼"}</span> */}
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
                      </button>

                      {isDropdownOpen && (
                        <div className="absolute z-10 bg-white w-[200px]  border mt-2 rounded-lg shadow-lg p-4 space-y-4">
                          {["adults", "children", "infants", "pets"].map(
                            (type) => (
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
                            )
                          )}

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
                  </Preview>
                </div>
              </div>

              {/* Room Dropdown */}
              <div className="flex pr-8 flex-col md:flex-row items-center w-full md:w-auto p-3 rounded-xl mb-4 md:mb-0">
                <span className="text-xs text-gray-700 font-bold mb-1 md:mb-0 md:mr-2">
                  Room
                </span>
                <div className="flex items-center justify-center w-full">
                  <Preview>
                    <div className="flex items-center w-full  mr-[-1px]">
                      {/* <FaBed className="w-4 h-4 mr-2 text-gray-600" /> */}
                      <select className="text-sm text-black bg-transparent focus:outline-none w-full border-none outline-none">
                        <option>1 Room</option>
                        <option>2 Room</option>
                        <option>3 Room</option>
                      </select>
                    </div>
                  </Preview>
                </div>
              </div>

              {/* Search Button */}
              <button className="bg-[#F97316] hover:bg-black text-white text-sm justify-center font-semibold px-3 py-2  rounded-full flex items-center w-full md:w-auto">
                <Search className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
        {/* Search Bar:: end */}

        {/* TRIP BY DESTINATION SECTION */}
        <div className="trip_by_destination_section mt-0">
          {/* Hotel List + Map Section */}
          <div className="flex justify-center  flex-col   md:flex-row">
            {/* Left: Hotel Cards */}
            <div className="flex-1 p-6 max-w-screen-xl">
              <div className="container">
                {/* Room Card Details: start */}
                <div className="w-full max-w-6xl mx-auto mt-6 bg-white rounded-xl shadow-md overflow-hidden border hover:shadow-lg transition">
                  <div className="flex flex-col md:flex-row">
                    {/* Left: Image */}
                    <div className="md:w-1/3 w-full h-[200px] md:h-[270px] ">
                      <img
                        src="https://images.unsplash.com/photo-1711059985570-4c32ed12a12c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Jai Hind Sound & Light Show"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Middle: Content */}
                    <div className="flex-1 p-4 flex flex-col justify-between">
                      <div>
                        <h3 className="text-sm md:text-[16px] font-semibold">
                          Jai Hind Sound & Light Show’ at the Red Fort in Delhi
                        </h3>
                        <div className="flex items-center text-[12px] text-gray-700 font-semibold mt-1 gap-x-3 flex-wrap">
                          <span className="flex items-center gap-1">
                            <FaMapMarkerAlt className="text-red-600" /> New
                            Delhi
                          </span>
                          <span className="flex items-center gap-1">
                            <FaStar className="text-yellow-400" /> 4.5 (1526
                            Reviews)
                          </span>
                          <span className="flex items-center gap-1">
                            <FaClock className="text-[#F97316]" /> 1 Hour
                            (approx.)
                          </span>
                          <span className="flex items-center gap-1">
                            <BiSolidUserPin className="text-[#F97316] text-[16px]" />
                            Guide
                          </span>
                        </div>
                        <p className="text-gray-600 text-[13px] mt-3  text-justify">
                          The Red Fort Sound & Light Show, “Jai Hind,” vividly
                          portrays India’s journey from the 17th century to the
                          present day. Through projection mapping, live-action
                          films, immersive sound, and captivating performances,
                          the history comes alive for visitors.
                        </p>
                      </div>
                    </div>

                    {/* Right: Price & Button */}
                    <div className="md:w-40 flex flex-col justify-between items-center border-t md:border-t-0 md:border-l p-4 text-center">
                      <div>
                        <p className="text-xl font-bold text-gray-800">₹ 500</p>
                        <p className="text-gray-500 text-sm">Per Person</p>
                      </div>
                      <button className="mt-3 md:mt-6 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full font-medium transition">
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
                {/* Room Card Details: end */}
                {/* Room Card Details: start */}
                <div className="w-full max-w-6xl mx-auto mt-6 bg-white rounded-xl shadow-md overflow-hidden border hover:shadow-lg transition">
                  <div className="flex flex-col md:flex-row">
                    {/* Left: Image */}
                    <div className="md:w-1/3 w-full h-[200px] md:h-[270px] ">
                      <img
                        src="https://images.unsplash.com/photo-1711059985570-4c32ed12a12c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Jai Hind Sound & Light Show"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Middle: Content */}
                    <div className="flex-1 p-4 flex flex-col justify-between">
                      <div>
                        <h3 className="text-sm md:text-[16px] font-semibold">
                          Jai Hind Sound & Light Show’ at the Red Fort in Delhi
                        </h3>
                        <div className="flex items-center text-[12px] text-gray-700 font-semibold mt-1 gap-x-3 flex-wrap">
                          <span className="flex items-center gap-1">
                            <FaMapMarkerAlt className="text-red-600" /> New
                            Delhi
                          </span>
                          <span className="flex items-center gap-1">
                            <FaStar className="text-yellow-400" /> 4.5 (1526
                            Reviews)
                          </span>
                          <span className="flex items-center gap-1">
                            <FaClock className="text-[#F97316]" /> 1 Hour
                            (approx.)
                          </span>
                          <span className="flex items-center gap-1">
                            <BiSolidUserPin className="text-[#F97316] text-[16px]" />
                            Guide
                          </span>
                        </div>
                        <p className="text-gray-600 text-[13px] mt-3  text-justify">
                          The Red Fort Sound & Light Show, “Jai Hind,” vividly
                          portrays India’s journey from the 17th century to the
                          present day. Through projection mapping, live-action
                          films, immersive sound, and captivating performances,
                          the history comes alive for visitors.
                        </p>
                      </div>
                    </div>

                    {/* Right: Price & Button */}
                    <div className="md:w-40 flex flex-col justify-between items-center border-t md:border-t-0 md:border-l p-4 text-center">
                      <div>
                        <p className="text-xl font-bold text-gray-800">₹ 500</p>
                        <p className="text-gray-500 text-sm">Per Person</p>
                      </div>
                      <button className="mt-3 md:mt-6 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full font-medium transition">
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
                {/* Room Card Details: end */}
                {/* Room Card Details: start */}
                <div className="w-full max-w-6xl mx-auto mt-6 bg-white rounded-xl shadow-md overflow-hidden border hover:shadow-lg transition">
                  <div className="flex flex-col md:flex-row">
                    {/* Left: Image */}
                    <div className="md:w-1/3 w-full h-[200px] md:h-[270px] ">
                      <img
                        src="https://images.unsplash.com/photo-1711059985570-4c32ed12a12c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Jai Hind Sound & Light Show"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Middle: Content */}
                    <div className="flex-1 p-4 flex flex-col justify-between">
                      <div>
                        <h3 className="text-sm md:text-[16px] font-semibold">
                          Jai Hind Sound & Light Show’ at the Red Fort in Delhi
                        </h3>
                        <div className="flex items-center text-[12px] text-gray-700 font-semibold mt-1 gap-x-3 flex-wrap">
                          <span className="flex items-center gap-1">
                            <FaMapMarkerAlt className="text-red-600" /> New
                            Delhi
                          </span>
                          <span className="flex items-center gap-1">
                            <FaStar className="text-yellow-400" /> 4.5 (1526
                            Reviews)
                          </span>
                          <span className="flex items-center gap-1">
                            <FaClock className="text-[#F97316]" /> 1 Hour
                            (approx.)
                          </span>
                          <span className="flex items-center gap-1">
                            <BiSolidUserPin className="text-[#F97316] text-[16px]" />
                            Guide
                          </span>
                        </div>
                        <p className="text-gray-600 text-[13px] mt-3  text-justify">
                          The Red Fort Sound & Light Show, “Jai Hind,” vividly
                          portrays India’s journey from the 17th century to the
                          present day. Through projection mapping, live-action
                          films, immersive sound, and captivating performances,
                          the history comes alive for visitors.
                        </p>
                      </div>
                    </div>

                    {/* Right: Price & Button */}
                    <div className="md:w-40 flex flex-col justify-between items-center border-t md:border-t-0 md:border-l p-4 text-center">
                      <div>
                        <p className="text-xl font-bold text-gray-800">₹ 500</p>
                        <p className="text-gray-500 text-sm">Per Person</p>
                      </div>
                      <button className="mt-3 md:mt-6 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full font-medium transition">
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
                {/* Room Card Details: end */}
              </div>
            </div>

            {/* Right: Map Embed */}
            <div className="w-full my-5  md:w-[550px]  ">
              <div className=" sticky top-[92px]  md:pr-4 pt-4 ">
                <iframe
                  className="md:h-[calc(100vh-5rem)] h-[300px]  w-full  rounded-3xl "
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3642.2011100822037!2d88.2555848!3d24.094422100000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f97d7a72034f09%3A0xf4395d84deb96c47!2sSingdha%20Srijon%20Tours%20Private%20Limited!5e0!3m2!1sen!2sin!4v1746715828443!5m2!1sen!2sin"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* FOOTER SECTION */}
        <Footer />
      </div>
    </>
  );
}

export default Main;
