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
import SearchBar from "../../frontend-components/search/serchWithoutBanner";

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
import { Search } from "lucide-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
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
     },[searchParams]);
 
   const totalPages = Math.ceil(hotelData.length / ITEMS_PER_PAGE);
   const paginatedData = hotelData? hotelData.slice(
     (currentPage - 1) * ITEMS_PER_PAGE,
     currentPage * ITEMS_PER_PAGE
   ):'';

  return (
    <>
      <StickyMenu></StickyMenu>
      <div className="bg-white overflow-hidden">
        {/* HEADER SECTION */}
        <Header />

        {/* Search Bar:: start */}
        <div className="relative w-full ">
          {/* Desktop Background */}
          <div className="w-full h-[400px] bg-fixed md:h-[120px] bg-cover bg-center hidden md:block">
            {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white"></div> */}
          </div>

          {/* Content */}
          <SearchBar />
        </div>
        {/* Search Bar:: end */}

        {/* TRIP BY DESTINATION SECTION */}
        <div className="trip_by_destination_section mt-0">
          {/* Hotel List + Map Section */}
          <div className="flex justify-center  flex-col-reverse   md:flex-row">
            {/* Left: Hotel Cards */}
            <div className="flex-1 p-6 max-w-screen-xl">
              { hotelData.length > 0 ?
              <>
                <div className="container">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-black text-center mb-4">
                    {(cityName==0)?`All Hotels`: `${cityName} Hotels Room`}
                  </h2>
                  <p className="font-bold text-gray-500 text-center mb-6">
                    {(cityName==0)?`Over ${hotelData.length} hotels`: `${hotelData.length} places in ${cityName}`}
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
