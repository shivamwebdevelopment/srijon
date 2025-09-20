// @ts-nocheck
import {
  PreviewComponent,
  Preview,
} from "../../base-components/PreviewComponent";
import { FormSelect } from "../../base-components/Form";
import { Link } from "react-router-dom";
import Lucide from "../../base-components/Lucide";
import { useState, useRef, useEffect } from "react";
import Litepicker from "../../base-components/Litepicker";

//import bannerImage from "../../assets/images/banner.png";
import banner01 from "../../assets/images/banner01.jpeg";
import banner02 from "../../assets/images/banner02.jpeg";
import banner03 from "../../assets/images/banner03.jpeg";
import banner04 from "../../assets/images/banner04.jpg";
import banner05 from "../../assets/images/banner05.jpg";
import banner06 from "../../assets/images/banner06.jpg";
import banner07 from "../../assets/images/banner07.jpg";
import banner08 from "../../assets/images/banner08.jpg";
import banner09 from "../../assets/images/banner09.jpg";
import banner10 from "../../assets/images/banner10.jpg";
import banner11 from "../../assets/images/banner11.jpg";

import hotelIcon from "../../assets/images/hotel_icon.png";
import privateIcon from "../../assets/images/private_icon.png";
import flightIcon from "../../assets/images/flight_icon.png";
import onlyFlightIcon from "../../assets/images/plain_icon.png";
import longStayIcon from "../../assets/images/long_stay_icon.png";
import activityIcon from "../../assets/images/activities_icon.png";
import formArrowIcon from "../../assets/images/arrow_icon.png";
import trainIcon from "../../assets/images/train_icon.png";
import busIcon from "../../assets/images/bus_icon.png";
import carIcon from "../../assets/images/car_icon.png";
import packageTourIcon from "../../assets/images/package_tour_icon.png";
import { Link2, Search } from "lucide-react";

import {
  FaPlane,
  FaHotel,
  FaHome,
  FaUmbrellaBeach,
  FaTrain,
  FaBus,
  FaCar,
  FaCarSide,
  FaRunning,
  FaShip,
  FaMoneyBillWave,
  FaShieldAlt,
} from "react-icons/fa";

// Import css files for slick slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";

import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";

const HomeBanner = (props: any) => {
  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 10000,
    speed: 12000,
    fade: true,
    cssEase: "ease-in-out",
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const marginTopMinus = {
    top: -9,
  };
  const marginArrowStyle = {
    right: -25,
    top: 20,
  };

  // Breadcrumb :: start

  const [date, setDate] = useState("");
  const [daterange, setDaterange] = useState("");

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

  const [active, setActive] = useState("PackageTour");

  const menuItems = [
    { name: " Package Tour", icon: <FaUmbrellaBeach /> },
    { name: "Hotels", icon: <FaHotel /> },
    { name: "Homestays", icon: <FaHome /> },
    //  { name: "Cars", icon: <FaCar /> },
    { name: "Cars", icon: <FaCarSide /> },
    { name: "Buses", icon: <FaBus /> },
    { name: "Activity", icon: <FaRunning /> },
    { name: "Trains", icon: <FaTrain /> },
    { name: "Flight", icon: <FaPlane />, new: true },
  ];

  return (
    <>
      <div className="relative w-full">
        <div
          className="w-full h-[400px] bg-fixed md:h-[350px] bg-cover bg-center hidden md:block"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1551418843-01c6b62e864d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white"></div>
        </div>

        {/* New Design Banner Section :: start */}
        <div className="relative md:absolute w-full top-0 md:top-16 left-0 flex flex-col items-center px-4 pt-10 md:pt-2">
          {/* Top Card button Section :: start */}
          <div className="w-full max-w-[1100px] border bg-white shadow-md rounded-xl p-2 mx-auto">
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6 text-center">
              {menuItems.map((item, index) => (
                <div
                  key={index}
                  onClick={() => setActive(item.name)}
                  className={`relative flex flex-col items-center cursor-pointer transition ${
                    active === item.name ? "text-orange-600" : "text-gray-900"
                  }`}
                >
                  {/* Icon */}
                  <div
                    className={`text-xl sm:text-2xl md:text-3xl lg:text-xl ${
                      active === item.name
                        ? "text-orange-600"
                        : "text-orange-500"
                    }`}
                  >
                    {item.icon}
                  </div>

                  {/* Title */}
                  <span className="mt-1 text-xs font-medium">{item.name}</span>

                  {/* NEW Badge */}
                  {item.new && (
                    <span className="absolute -top-2 right-3 bg-pink-500 text-white text-[7px] sm:text-[9px]  px-1 py-0  rounded-xl">
                      NEW
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
          {/* <div className="mb-0 w-full max-w-[1100px] bg-white bg-opacity-90 rounded-tl rounded-tr border-b border-dotted border-gray-400 shadow-lg px-4 py-2 gap-6 md:flex md:justify-center md:items-center  md:space-x-[-10px]">
                   <Link
                     to="/your-route"
                     className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700"
                   >
                     Package Tour
                   </Link>
                   <Link
                     to="/your-route"
                     className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700"
                   >
                     Read more
                   </Link>
                   <Link
                     to="/your-route"
                     className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700"
                   >
                     Read more
                   </Link>
                   <Link
                     to="/your-route"
                     className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700"
                   >
                     Read more
                   </Link>
                   <Link
                     to="/your-route"
                     className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700"
                   >
                     Read more
                   </Link>
                 </div> */}
          {/* Top Card button Section :: end */}
          {/* Search bar Card Container :: start */}
          <div className="mt-4 w-full max-w-[1230px]  border  bg-white bg-opacity-90 rounded-xl shadow-lg px-4 py-2 md:flex md:justify-center md:items-center  md:space-x-[-10px]">
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
          {/* Search bar Card Container :: end */}
        </div>
        {/* New Design Banner Section :: end */}
      </div>
    </>
  );
};

export default HomeBanner;
