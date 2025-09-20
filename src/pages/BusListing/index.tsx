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
// import React, { useState } from "react";
import { Search } from "lucide-react";
import { FaBed } from "react-icons/fa6";
import { FaRoute } from "react-icons/fa6";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { MdCancel } from "react-icons/md";
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

const destinations = [
  {
    title: "Bangkok → Pattaya",
    price: "Rs. 300",
    image:
      "https://images.unsplash.com/photo-1528181304800-259b08848526?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Bangkok → Chiang Mai",
    price: "Rs. 950",
    image:
      "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=2039&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Bangkok → Phuket",
    price: "Rs. 756",
    image:
      "https://images.unsplash.com/photo-1512553353614-82a7370096dc?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Bangkok → Koh Samui",
    price: "Rs. 362",
    image:
      "https://images.unsplash.com/photo-1513568720563-6a5b8c6caab3?q=80&w=2044&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const routes = [
  [
    "Bangkok → Chiang Mai",
    "Bangkok → Phuket",
    "Bangkok → Krabi",
    "Bangkok → Koh Samui",
    "Bangkok → Koh Phangan",
    "Bangkok → Koh Tao",
    "Bangkok → Ranong",
    "Bangkok → Chumphon",
    "Phuket → Bangkok",
    "Krabi → Bangkok",
  ],
  [
    "Chiang Mai → Bangkok",
    "Chumphon → Bangkok",
    "Koh Samui → Koh Phi Phi",
    "Bangkok → Pattaya",
    "Bangkok → Hua Hin",
    "Bangkok → Surat Thani",
    "Krabi → Surat Thani",
    "Bangkok → Hat Yai",
    "Phuket → Koh Samui",
    "Surat Thani → Krabi",
  ],
  [
    "Koh Phangan → Surat Thani",
    "Koh Samui → Surat Thani",
    "Koh Lipe → Pak Bara Pier",
    "Bangkok → Yangon",
    "Chiang Mai → Luang Prabang",
    "Pattaya → Hua Hin",
    "Bangkok → Kanchanaburi",
    "Bangkok → Koh Chang",
    "Bangkok → Koh Kood",
    "Chiang Mai → Mae Kampong",
  ],
  [
    "Chiang Mai → Koh Samui",
    "Bangkok → Amphawa",
    "Bangkok → Damnoen Saduak Floating Market",
    "Damnoen Saduak Floating Market → Bangkok",
    "Amphawa → Bangkok",
    "Hat Yai → Penang",
    "Nong Khai → Vientiane",
    "Trang → Koh Lipe",
  ],
];

// Card data :: start
const filters = [
  { id: "bus", label: "Rajdhani bus (25)" },
  { id: "maya", label: "Maya (24)" },
  { id: "Off-Road", label: "Off-Road Seats (20)" },
  { id: "Motorcycle", label: "Motorcycle (19)" },
  { id: "SUV", label: "SUV (6)" },
  { id: "Bicycle", label: "Bicycle (15)" },
  { id: "Cab", label: "Cab (18)", disabled: true },
  { id: "Micro Bus ", label: "Micro Bus  (16)" },
  { id: "Luxury Bus ", label: "Luxury Bus  (11)" },
  { id: "Sports Bus ", label: "Sports Bus  (1)" },
];

const busData = {
  bus: [
    {
      id: 1,
      name: "Bus",
      rating: 3.1,
      reviews: 75,
      time: "20:41 — 06:00",
      duration: "9h 19m",
      seats: "26 Seats",
      price: "₹525",
    },
  ],
  maya: [
    {
      id: 2,
      name: "Maya1",
      rating: 4.5,
      reviews: 282,
      time: "21:25 — 06:45",
      duration: "9h 20m",
      seats: "21 Seats (4 Single)",
      price: "₹723",
      discount: "15% OFF",
      oldPrice: "₹850",
    },
    {
      id: 3,
      name: "Maya2",
      rating: 4.4,
      reviews: 135,
      time: "20:27 — 04:15",
      duration: "7h 48m",
      seats: "25 Seats (5 Single)",
      price: "₹1020",
      discount: "15% OFF",
      oldPrice: "₹1200",
    },
  ],
};

// Flatten all busData for default "all Bus " view
const allBus = Object.values(busData).flat();
// Card data :: end

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

  // This for slider

  // console.log({itineraryData});
  // console.log({itineraryDetails});

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

  const [isWomenBooking, setIsWomenBooking] = useState(false);
  const [fromCity, setFromCity] = useState("Patna (Bihar)");
  const [toCity, setToCity] = useState("Kolkata");
  const [journeyDate, setJourneyDate] = useState("08 Jun, 2025");

  //   Card Filter :: start
  const [activeFilters, setActiveFilters] = useState([]);

  const toggleFilter = (id) => {
    if (activeFilters.includes(id)) {
      setActiveFilters(activeFilters.filter((f) => f !== id));
    } else {
      setActiveFilters([...activeFilters, id]);
    }
  };

  const filteredBus =
    activeFilters.length === 0
      ? allBus // show all Bus  initially
      : activeFilters.flatMap((filter) => busData[filter] || []);
  //   Card Filter :: end

  return (
    <>
      {/* HEADER SECTION TWO */}
      <StickyMenu></StickyMenu>

      <div className="bg-white overflow-hidden">
        {/* HEADER SECTION */}
        <Header></Header>

        {/* BANNER SECTION */}
        {/*<HomeBanner></HomeBanner>*/}
        <div className="relative w-full">
          {/* Desktop Background */}
          <div
            className="w-full h-[400px] md:h-[300px] bg-cover bg-center hidden md:block"
            style={{
              backgroundImage:
                'url("https://images.unsplash.com/photo-1551418843-01c6b62e864d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
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
                <Search className="w-4 h-4 mr-2" /> Search Bus
              </button>
            </div>
          </div>

          {/* Mobile Content Only */}
          {/* <div className="block md:hidden mt-4 px-4">
            <h1 className="text-lg font-bold text-center text-gray-800 mb-4">
              Bus ticket booking
            </h1>
            <div className="space-y-4"></div>
          </div> */}
        </div>

        {/* TRIP BY DESTINATION SECTION */}
        <div className="trip_by_destination_section mt-14">
          <div className="container">
            <div className="min-h-screen bg-gray-50 p-4 md:p-6">
              <div className="flex flex-col md:flex-row gap-6">
                {/* Sidebar (filters) */}
                <div className="md:w-64 bg-white p-4 rounded-xl shadow-md sticky top-4">
                  <h2 className="font-semibold text-lg mb-3">Filter Bus </h2>
                  <button
                    className="text-sm text-red-500 mb-3"
                    onClick={() => setActiveFilters([])}
                  >
                    Clear all
                  </button>

                  {/* Desktop sidebar */}
                  <div className="hidden md:flex flex-col gap-2">
                    {filters.map((filter) => (
                      <button
                        key={filter.id}
                        disabled={filter.disabled}
                        onClick={() => toggleFilter(filter.id)}
                        className={`px-3 py-2 rounded-lg border text-left transition ${
                          activeFilters.includes(filter.id)
                            ? "bg-red-500 text-white"
                            : "bg-gray-100 hover:bg-gray-200"
                        } ${
                          filter.disabled ? "opacity-50 cursor-not-allowed" : ""
                        }`}
                      >
                        {filter.label}
                      </button>
                    ))}
                  </div>

                  {/* Mobile/Tablet Top Filter */}
                  <div className="flex md:hidden overflow-x-auto gap-2 pb-2">
                    {filters.map((filter) => (
                      <button
                        key={filter.id}
                        disabled={filter.disabled}
                        onClick={() => toggleFilter(filter.id)}
                        className={`flex-shrink-0 px-3 py-2 rounded-lg border text-sm transition ${
                          activeFilters.includes(filter.id)
                            ? "bg-red-500 text-white"
                            : "bg-gray-100 hover:bg-gray-200"
                        } ${
                          filter.disabled ? "opacity-50 cursor-not-allowed" : ""
                        }`}
                      >
                        {filter.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Car Cards */}
                <div className="flex-1 space-y-4">
                  {filteredBus.length === 0 ? (
                    <p className="text-gray-500">No Bus available.</p>
                  ) : (
                    filteredBus.map((car) => (
                      <div
                        key={car.id}
                        className="bg-white p-4 rounded-xl shadow-md flex flex-col md:flex-row md:items-center md:justify-between gap-4"
                      >
                        {/* Car Image */}
                        <div className="flex items-start  md:justify-start">
                          <img
                            className="w-[100px]"
                            src="https://static.vecteezy.com/system/resources/previews/060/444/001/large_2x/silver-black-bus-car-free-png.png"
                            alt=""
                          />
                        </div>
                        {/* Left: Car name & type */}
                        <div className="flex-1">
                          <h3 className="font-semibold text-sm flex items-center gap-2">
                            {car.name}
                          </h3>
                          <p className="text-[12px] text-gray-500">
                            Sedan | AC | 4 Seats
                          </p>
                          <p className="text-[12px] flex gap-1 items-center text-gray-700">
                            <FaRoute className="text-[#F97316]" /> Extra km
                            fare: INR 20 per kilometer
                          </p>
                          <p className="text-[12px] flex gap-1 items-center text-gray-700">
                            <BsFillFuelPumpFill className="text-[#F97316]" />
                            Fuel Type: Petrol, CNG
                          </p>
                          <p className="text-[12px] flex gap-1 items-center text-gray-700">
                            <MdCancel className="text-[#F97316]" />{" "}
                            Cancellation: Free cancellation until pickup time
                          </p>
                          <p className="text-gray-500 text-sm mt-1">
                            {car.type}
                          </p>
                          {/* <button className="bg-[#C4D9FF] px-2 rounded-sm text-[#333] font-semibold text-[12px]">
                            On Time
                          </button> */}
                        </div>

                        {/* Middle: Time, duration & seats */}
                        <div className="flex flex-col items-start md:items-center flex-1">
                          <p className="font-medium text-gray-800">
                            {car.time}
                          </p>
                          <p className="text-gray-500 text-sm">
                            {car.duration} • {car.seats}
                          </p>
                        </div>

                        {/* Rating */}
                        {/* <div className="flex items-center gap-2 flex-1 md:justify-center">
                          <span className="flex items-center gap-1 bg-green-100 text-green-700 px-2 py-1 rounded text-sm font-medium">
                            ⭐ {car.rating}
                          </span>
                          <span className="text-gray-500 text-sm">
                            ({car.reviews})
                          </span>
                        </div> */}

                        {/* Right: Price & Button */}
                        <div className="text-right flex-1">
                          {car.oldPrice && (
                            <p className="text-gray-400 line-through text-sm">
                              {car.oldPrice}
                            </p>
                          )}
                          <div className="flex items-center justify-end gap-2">
                            <p className="text-xl font-semibold">{car.price}</p>
                            {car.discount && (
                              <span className="bg-yellow-200 text-yellow-800 text-xs px-2 py-1 rounded font-medium">
                                {car.discount}
                              </span>
                            )}
                          </div>
                          <button className="mt-2 bg-[#F97316] text-white px-4 py-2 rounded-lg hover:bg-black w-full md:w-auto">
                            View seats
                          </button>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FOOTER SECTION */}
        <Footer></Footer>
      </div>
    </>
  );
}

export default Main;
