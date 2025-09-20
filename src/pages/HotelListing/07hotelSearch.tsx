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

import { Link, useParams, useNavigate, useSearchParams } from "react-router-dom";
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
import { FaStar } from "react-icons/fa";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
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

// const hotelData = [
//   // Sample JSON hotel data (10 per page recommended)
//   {
//     id: 1,
//     title: "Room in Tollygunge",
//     host: "Stay with Shila · A stay at home mom",
//     description: "Shila's Premium Luxury Homestay",
//     price: 23500,
//     originalPrice: 24800,
//     rating: 5.0,
//     reviews: 9,
//     image:
//       "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
//   {
//     id: 2,
//     title: "Room in Kolkata",
//     host: "Stay with Sameer · Hospitality",
//     description: "Compact Stay in the Heart of the City!",
//     price: 14981,
//     originalPrice: 16913,
//     rating: 4.92,
//     reviews: 13,
//     image:
//       "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
//   {
//     id: 3,
//     title: "Boutique hotel in Tollygunge",
//     host: "Work friendly Micro studios by Handmade Homes",
//     description: "1 king bed",
//     price: 28963,
//     rating: 4.6,
//     reviews: 83,
//     image:
//       "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
//   {
//     id: 4,
//     title: "Boutique hotel in Tollygunge",
//     host: "Work friendly Micro studios by Handmade Homes",
//     description: "1 king bed",
//     price: 28963,
//     rating: 4.6,
//     reviews: 83,
//     image:
//       "https://images.unsplash.com/photo-1549638441-b787d2e11f14?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
//   {
//     id: 5,
//     title: "Boutique hotel in Tollygunge",
//     host: "Work friendly Micro studios by Handmade Homes",
//     description: "1 king bed",
//     price: 28963,
//     rating: 4.6,
//     reviews: 83,
//     image:
//       "https://images.unsplash.com/photo-1559841644-08984562005a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
//   {
//     id: 6,
//     title: "Boutique hotel in Tollygunge",
//     host: "Work friendly Micro studios by Handmade Homes",
//     description: "1 king bed",
//     price: 28963,
//     rating: 4.6,
//     reviews: 83,
//     image:
//       "https://images.unsplash.com/photo-1621891334481-5c14b369d9d7?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
//   {
//     id: 7,
//     title: "Boutique hotel in Tollygunge",
//     host: "Work friendly Micro studios by Handmade Homes",
//     description: "1 king bed",
//     price: 28963,
//     rating: 4.6,
//     reviews: 83,
//     image:
//       "https://images.unsplash.com/photo-1631049421450-348ccd7f8949?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
//   {
//     id: 8,
//     title: "Boutique hotel in Tollygunge",
//     host: "Work friendly Micro studios by Handmade Homes",
//     description: "1 king bed",
//     price: 28963,
//     rating: 4.6,
//     reviews: 83,
//     image:
//       "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
//   {
//     id: 9,
//     title: "Boutique hotel in Tollygunge",
//     host: "Work friendly Micro studios by Handmade Homes",
//     description: "1 king bed",
//     price: 28963,
//     rating: 4.6,
//     reviews: 83,
//     image:
//       "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
//   {
//     id: 10,
//     title: "Boutique hotel in Tollygunge",
//     host: "Work friendly Micro studios by Handmade Homes",
//     description: "1 king bed",
//     price: 28963,
//     rating: 4.6,
//     reviews: 83,
//     image:
//       "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
//   {
//     id: 11,
//     title: "Boutique hotel in Tollygunge",
//     host: "Work friendly Micro studios by Handmade Homes",
//     description: "1 king bed",
//     price: 28963,
//     rating: 4.6,
//     reviews: 83,
//     image:
//       "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
//   // Add more items up to 30 or more to test pagination
// ];

const ITEMS_PER_PAGE = 9;

// Hotels Maps Functioning::end

function Main() {
  const API = server.API_URL;
  const imgPath = server.FILE_PATH;
  const [searchParams, setSearchParams] = useSearchParams();
  const cityId = atob(searchParams.get('id'));
  const chkIn = atob(searchParams.get('in'));
  const chkOut = atob(searchParams.get('out'));
  const guset = atob(searchParams.get('g'));
  const room = atob(searchParams.get('r'));
  const cityName = atob(searchParams.get('cn'));

  const date1 = new Date(chkOut);
  const date2 = new Date(chkIn);    
  const noOfdays = (date1 - date2)/(1000 * 60 * 60 * 24);
  //console.log("Date",(differenceInMilliseconds/(1000 * 60 * 60 * 24)));

  console.log(cityId);
  const [hotelData, setHotelData] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  

  const fetchData = ()=>{
      callApi(API, "GET", `vendor-hotel-master/front/get-hotel-city/${cityId}`, {}).then((result)=>{
           console.log("AAAA:",result.data.resData);
           setHotelData(result.data.resData);
        })
    }
    useEffect(()=>{
      fetchData();
    },[]);

  const totalPages = Math.ceil(hotelData.length / ITEMS_PER_PAGE);
  const paginatedData = hotelData? hotelData.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  ):'';

  return (
    <>
     {/* HEADER SECTION TWO */}
      <StickyMenu></StickyMenu>
      <div className="bg-white overflow-hidden">
        {/* HEADER SECTION */}
        <Header />

        {/* TRIP BY DESTINATION SECTION */}
        <div className="trip_by_destination_section mt-0">
          {/* Hotel List + Map Section */}
          <div className="flex justify-center  flex-col-reverse   md:flex-row">
            {/* Left: Hotel Cards */}
            <div className="flex-1 p-6 max-w-screen-xl">
              {/* Search Bar :: start */}
              <div className="relative  w-full top-0 left-0 flex flex-col items-center pb-4 mb-8 ">
                <div className="mt-10 px-4 flex flex-col md:flex-row  justify-center items-center max-w-xl w-full ">
                  <input
                    type="text"
                    placeholder="Search hotels.."
                    className="w-full md:flex-1 px-4 py-3 rounded-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 mb-3 md:mb-0"
                  />
                  <button className="w-full md:w-auto px-6 py-3 rounded-full bg-[#F97216] text-white font-medium hover:bg-[#000] transition-colors ml-0 md:ml-3">
                    Search
                  </button>
                </div>
              </div>
              {/* Search Bar :: end */}
              { hotelData.length > 0 ?
              <>
              <div className="container">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-black text-center mb-4">
                  {cityName} Hotels Room
                </h2>
                <p className="font-bold text-gray-500 text-center mb-6">
                  {hotelData.length} places in {cityName}
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {hotelData ? hotelData.map((item) => (
                  <Link
                    to={`/hotel-details/${item.id}/${_.replace(item.hotelName,/\s/g, "-")}`}
                    key={item.id}
                    className="rounded-lg shadow-lg border p-2 space-y-2"
                  >
                    <img
                      src={`${imgPath}hotel/${item.mainImg}`}
                      alt={item.hotelName}
                      className="w-full h-48 object-cover rounded"
                    />
                    <h2 className="font-semibold text-md">{item.hotelName}</h2>
                    {/* <p className="text-sm text-gray-600 text-[13px]">
                      {hotel.host}
                    </p> */}
                    {/* <p className="text-sm text-[13px]">{hotel.description}</p> */}
                    <div className="flex items-start justify-between gap-2">
                      <div>
                         {noOfdays===0?
                          <>
                          <span className="font-bold pr-1">
                            ₹{item.minRoomRentSeasonAC>item.minRoomRentSeasonNonAC?item.minRoomRentSeasonAC:item.minRoomRentSeasonNonAC}
                          </span>
                          <span className="text-sm text-gray-500">
                            for 1 nights
                          </span>
                          </>
                          :
                          <>
                          <span className="font-bold pr-1">
                           ₹{(item.minRoomRentSeasonAC>item.minRoomRentSeasonNonAC?item.minRoomRentSeasonAC:item.minRoomRentSeasonNonAC)*noOfdays}
                          </span>
                          <span className="text-sm text-gray-500">
                            for {noOfdays} nights
                          </span>
                          </>
                          }
                        
                      </div>
                    </div>
                    {/* {hotel.originalPrice && (
                      <span className="line-through text-gray-400 text-sm">
                        ₹{hotel.originalPrice.toLocaleString()}
                      </span>
                    )} */}
                  </Link>
                ))
              :''}
              </div>
              </>
              :
              <>
              <div className="container">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-black text-center mb-4">
                 There are no Hotel at {cityName}
                </h2>
              </div>
              </>
              }
              {/* Pagination */}
              {/* <div className="flex justify-center mt-6 space-x-2">
                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i + 1}
                    onClick={() => setCurrentPage(i + 1)}
                    className={`px-4 py-2 border rounded-full ${
                      currentPage === i + 1
                        ? "bg-black text-white"
                        : "bg-white text-black hover:bg-gray-200"
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div> */}
            </div>

            {/* Right: Map Embed */}
            <div className="w-full my-5  md:w-[550px]  lg:ml-4  ">
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
