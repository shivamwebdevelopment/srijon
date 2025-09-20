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
import { ChevronLeft, ChevronRight } from "lucide-react";

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
import BannerMenu from "../../frontend-components/layout/bannerMenu";
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

const destinations = [
  {
    title: "MAGPIE MALL ROAD RESIDENCY",
    price: "Rs. 300",
    image:
      "https://images.unsplash.com/photo-1528181304800-259b08848526?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Maldives",
    price: "Rs. 950",
    image:
      "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=2039&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Kolkata",
    price: "Rs. 756",
    image:
      "https://images.unsplash.com/photo-1512553353614-82a7370096dc?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Delhi",
    price: "Rs. 362",
    image:
      "https://images.unsplash.com/photo-1513568720563-6a5b8c6caab3?q=80&w=2044&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Rajasthan",
    price: "Rs. 362",
    image:
      "https://images.unsplash.com/photo-1513568720563-6a5b8c6caab3?q=80&w=2044&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Kerala",
    price: "Rs. 950",
    image:
      "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=2039&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Bodhgaya",
    price: "₹2,281 for 2 nights",
    image:
      "https://images.unsplash.com/photo-1663026334886-b3409ac991b2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Kashmir",
    price: "₹2,728 for 2 nights",
    image:
      "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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

// Mobile functionality :: start
const API = server.API_URL;
const imgPath = server.FILE_PATH;


function Main() {
  // Breadcrumb :: start
  const CUST_ID = 1234;
  const [changesMade, setChangesMade] = useState(0);
  

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
  const [res, setRes] = useState();
  const [cityId, setCityId] = useState([]);
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

   const fetchData = ()=>{
      callApi(API, "GET", `vendor-hotel-master/front/get-all-hotel/hotel`, {}).then((result)=>{
           console.log("AAAA:",result.data.resData);
           let cityIdPresent = [];
           for(let i=0; result.data.resData.length>i; i++){
              cityIdPresent.push(result.data.resData[i].cityId);
              console.log(result.data.resData[i].cityId)
           }
           console.log({cityIdPresent});
           setCityId(cityIdPresent);
           setRes(result.data.resData);    
           
           console.log("SS:",`${imgPath}hotel/${result.data.resData[0].mainImg}`);
        })
    }
    useEffect(()=>{
      fetchData();
    },[]);

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
      {/* HEADER SECTION TWO */}
      <StickyMenu></StickyMenu>

      <div className="bg-white overflow-hidden">
        {/* HEADER SECTION */}
        <Header></Header>

        {/* BANNER SECTION */}

        {/*<HomeBanner></HomeBanner>*/}
        <div className="relative w-full ">
          {/* Desktop Background */}
          <div
            className="w-full h-[400px] bg-fixed md:h-[300px] bg-cover bg-center hidden md:block"
            style={{
              backgroundImage:
                'url("https://images.pexels.com/photos/6181222/pexels-photo-6181222.jpeg?_gl=1*krpkxf*_ga*NjIxMjcwOTUyLjE3MDYxNTQ2NTU.*_ga_8JE65Q40S6*czE3NTI4NTk2NDYkbzU1JGcxJHQxNzUyODYwMDYyJGoyMSRsMCRoMA..")',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white"></div>
          </div>

          {/* Content */}
          <div className="relative md:absolute w-full top-0 left-0 flex flex-col items-center px-4 pt-10 md:pt-24">
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

        <h4 className="text-center text-[16px] px-6 md:text-[20px] font-bold mt-6 md:mt-[0px]">
          Continue searching for homes in Kathmandu {"  "}
          <span className="font-medium">4-6 Oct</span>
          {"  "}
          <span className="font-medium"> 6 guests</span>
        </h4>

        {/* TRIP BY DESTINATION SECTION */}
        <div className="trip_by_destination_section mt-4">
          <div className="container">
            { (res && _.includes(cityId, 613))?
            <ScrollableSection
              title="Hotels at Gangtok"
              destinations={res}
              showCity={613}
            />
            :''}
             { (res && _.includes(cityId, 589))?
            <ScrollableSection
              title="Hotels at Darjeeling"
              destinations={res}
              showCity={589}
            />
            :''}
            { (res && _.includes(cityId, 648))?
            <ScrollableSection
              title="Hotels at Jaldapara"
              destinations={res}
              showCity={648}
            /> 
            :''}
            
             { (res && _.includes(cityId, 618))?
            <ScrollableSection
              title="Hotels at Siliguri"
              destinations={res}
              showCity={618}
            />
            :''}
             { (res && _.includes(cityId, 632))?
            <ScrollableSection
              title="Hotels at Guwahati"
              destinations={res}
              showCity={632}
            />
            :''}

           
          </div>
        </div>

        {/* FOOTER SECTION */}
        <Footer></Footer>
      </div>
    </>
  );
}

export default Main;

// Cards Scrollable Section Hard Code

const ScrollableSection = ({ title, destinations, showCity }) => {
  console.log("Test aaaa:", destinations);
  const navigate = useNavigate();
  const sectionRef = useRef(null);

  const scroll = (direction) => {
    const container = sectionRef.current;
    if (!container) return;

    const cardWidth = container.firstChild?.offsetWidth || 300;
    const scrollAmount = direction === "left" ? -cardWidth : cardWidth;

    container.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  return (
    <div className="px-4 md:px-4 py-3">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold">{title}</h2>
        <div className="flex gap-2">
          <button
            onClick={() => scroll("left")}
            className="w-9 h-9 rounded-full bg-gray-200 hover:bg-black hover:text-white flex items-center justify-center transition"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => scroll("right")}
            className="w-9 h-9 rounded-full bg-gray-200 hover:bg-black hover:text-white flex items-center justify-center transition"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <div
        ref={sectionRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory pb-10"
      >
        {destinations.map((item, index) => (
          <>
          { item.cityId==showCity?
          <div
            key={index}
            className="cursor-pointer bg-white rounded-lg shadow hover:shadow-lg overflow-hidden snap-start min-w-[90%] sm:min-w-[50%] md:min-w-[33%] lg:min-w-[16.66%]"
          >
            <div
              onClick={()=>navigate(`/hotel-details/${item.id}/${_.replace(item.hotelName,/\s/g, "-")}`)}
              className="h-40 bg-cover bg-center"
              style={{backgroundImage:`url('${imgPath}hotel/${item.mainImg}')`}}
            ></div>
            <div className="p-2 px-2">
              <p className=" text-left font-medium   text-[12.8px]">
                {item.hotelName}
              </p>
              <p className="text-gray-600 text-[12px] text-left">
                From Rs.{item.minRoomRentSeasonAC>item.minRoomRentSeasonNonAC?item.minRoomRentSeasonAC:item.minRoomRentSeasonNonAC}
              </p>
            </div>
          </div>
          :''}
          </>
        ))}
      </div>
    </div>
  );
};
