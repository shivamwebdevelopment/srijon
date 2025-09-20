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

  const [date, setDate] = useState("");
  const [daterange, setDaterange] = useState("");

  return (
    <>
      <div className="banner_section relative bg-cover bg-bottom">
        <div className="absolute w-full left-0 top-[320px] lg:top-[270px] z-10">
          <div className="banner_content py-10 w-full h-full md:py-10 lg:py-20">
            <div className="container flex justify-center items-center h-full">
              <div className="relative">
                <h1 className="text-center text-2xl font-bold text-white pb-1 md:text-4xl md:pb-6 lg:text-5xl">
                  Plan Your Tour Now!
                </h1>
                <p className="text-center text-sm font-medium text-white pb-4 w-full my-0 mx-auto md:text-base md:w-3/6">
                  Experience our various exciting packages and make your hotel
                  reservations. Find vacation packages also and search cheap
                  hotels and events.
                </p>

                <div className="booking_type_section mb-0">
                  <ul className="flex justify-center items-center">
                    <li className="active">
                      <Link
                        className="text-sm font-semibold text-white mx-4 px-4 flex justify-center items-center md:mx-8 xl:mx-2 lg:mx-2"
                        to="/all-package-tours"
                      >
                        <img
                          alt="packageTourIcon"
                          className="mb-1.5 mr-1.5"
                          src={packageTourIcon}
                        />
                        Package Tour
                      </Link>
                    </li>
                    <li className="hidden xl:block">
                      <Link
                        className="text-sm font-semibold text-white mx-4 px-4 flex justify-center items-center md:mx-8 xl:mx-2 lg:mx-2"
                        to="/hotels"
                      >
                        <img
                          alt="hotelIcon"
                          className="mb-1.5 mr-1.5"
                          src={hotelIcon}
                        />
                        Hotel
                      </Link>
                    </li>
                    <li className="hidden xl:block">
                      <Link
                        className="text-sm font-semibold text-white mx-4 px-4 flex justify-center items-center md:mx-8 xl:mx-2 lg:mx-2"
                        to="/home-stay"
                      >
                        <img
                          alt="privateIcon"
                          className="mb-1.5 mr-1.5"
                          src={privateIcon}
                        />
                        Home Stay
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-sm font-semibold text-white mx-4 px-4 flex justify-center items-center md:mx-8 xl:mx-2 lg:mx-2"
                        to="/cars"
                      >
                        <img
                          alt="carIcon"
                          className="mb-1.5 mr-1.5"
                          src={carIcon}
                        />
                        Car
                      </Link>
                    </li>
                    <li className="hidden xl:block">
                      <Link
                        className="text-sm font-semibold text-white mx-4 px-4 flex justify-center items-center md:mx-8 xl:mx-2 lg:mx-2"
                        to="/bus"
                      >
                        <img
                          alt="busIcon"
                          className="mb-1.5 mr-1.5"
                          src={busIcon}
                        />
                        Bus
                      </Link>
                    </li>

                    <li className="hidden xl:block">
                      <Link
                        className="text-sm font-semibold text-white mx-4 px-4 flex justify-center items-center md:mx-8 xl:mx-2 lg:mx-2"
                        to="/activies"
                      >
                        <img
                          alt="activityIcon"
                          className="mb-1.5 mr-1.5"
                          src={activityIcon}
                        />
                        Activity
                      </Link>
                    </li>
                    <li className="hidden xl:block">
                      <Link
                        className="text-sm font-semibold text-white mx-4 px-4 flex justify-center items-center md:mx-8 xl:mx-2 lg:mx-2"
                        to="/"
                      >
                        <img
                          alt="trainIcon"
                          className="mb-1.5 mr-1.5"
                          src={trainIcon}
                        />
                        Train
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-sm font-semibold text-white mx-4 px-4 flex justify-center items-center md:mx-8 xl:mx-2 lg:mx-2"
                        to="/"
                      >
                        <img
                          alt="flightIcon"
                          className="mb-1.5 mr-1.5"
                          src={flightIcon}
                        />
                        Flight
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="form_area pt-5">
                  <form>
                    <div className="form_container flex-initial justify-center align-center text-center lg:flex">
                      <div className="form_field_area mx-2 relative">
                        <p className="form_point absolute text-white rounded-full bg-orange-500 left-8 px-3.5 py-px">
                          From
                        </p>
                        <img
                          alt="formArrowIcon"
                          className="arrow_style absolute z-10"
                          src={formArrowIcon}
                        />
                        <input
                          className="text-black rounded-full py-6 px-9 text-sm"
                          type="text"
                          placeholder="Enter City or Airport"
                        />
                      </div>

                      <div className="form_field_area mx-2 relative">
                        <p className="form_point absolute text-white rounded-full bg-orange-500 left-8 px-3.5 py-px">
                          To
                        </p>
                        <input
                          className="text-black rounded-full py-6 px-9 text-sm"
                          type="text"
                          placeholder="Enter City or Airport"
                        />
                      </div>

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
                              className="text-black rounded-full py-6 px-9 text-sm"
                            />
                          </div>
                        </Preview>
                      </div>

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
                              className="text-black rounded-full py-6 px-9 text-sm"
                            />
                          </div>
                        </Preview>
                      </div>

                      <div className="form_field_area mx-2 relative">
                        <Preview>
                          <div className="relative w-60 mx-auto">
                            <div className="absolute flex items-center justify-center w-12 h-full rounded-l text-black">
                              <Lucide icon="Calendar" className="w-4 h-4" />
                            </div>
                            <FormSelect
                              className="pl-10 sm:mr-2 text-black rounded-full py-6 px-9 text-sm"
                              aria-label="Default select example"
                            >
                              <option>2 Adults (1 Room)</option>
                              <option>4 Adults (2 Room)</option>
                              <option>6 Adults (3 Room)</option>
                            </FormSelect>
                          </div>
                        </Preview>
                      </div>
                    </div>
                    <div className="form_container flex justify-center align-center">
                      <div className="form_field_area mt-4 md:mt-5 lg:mt-10">
                        <input
                          className="text-2xl font-semibold uppercase bg-orange-500 py-5 px-20 rounded-full text-white hover:bg-black cursor-pointer"
                          type="submit"
                          value="SEARCH"
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <BrowserView>
          <Slider {...settings}>
            {/* <div>
        <div>
  
           <img src={bannerImage} alt="bannerImage" className="w-full banner_desk" />
  
           <div className="banner_content py-10 w-full h-full md:py-10 lg:py-20 opacity-0">
              <div className="container flex justify-center items-center h-full">
  
                 <div>
  
                    <h1 className="text-center text-3xl font-bold text-white pb-1 md:text-4xl md:pb-6 lg:text-5xl">Plan Your Tour Now!</h1>
                    <p className="text-center text-base font-medium text-white pb-4 w-full my-0 mx-auto md:w-3/6">Experience our various exciting packages and make your hotel reservations. Find vacation packages also and search cheap hotels and events.</p>
                    <div className="sticky top-10 z-30 booking_type_section mb-3">
                       <ul className="grid grid-cols-2 gap-0 md:grid-cols-6 lg:grid-cols-6 lg:grid-cols-0">
                          <li className="text-base font-semibold text-white mx-4 pb-2 flex justify-center items-center md:mx-8 xl:mx-2 lg:mx-2">
                             <img
                                alt="hotelIcon"
                                className="mb-1.5 mr-1.5"
                                src={hotelIcon}
                             />
                             Hotels & Homes
                          </li>
                          <li className="text-base font-semibold text-white mx-4 pb-2 flex justify-center items-center md:mx-8 xl:mx-2 lg:mx-2">
                             <img
                                alt="privateIcon"
                                className="mb-1.5 mr-1.5"
                                src={privateIcon}
                             />
                             Private Stays
                          </li>
                          <li className="text-base font-semibold text-white mx-4 pb-2 flex justify-center items-center md:mx-8 xl:mx-2 lg:mx-2">
                             <img
                                alt="flightIcon"
                                className="mb-1.5 mr-1.5"
                                src={flightIcon}
                             />
                             Flight & Hotels
                          </li>
                          <li className="text-base font-semibold text-white mx-4 pb-2 flex justify-center items-center md:mx-8 xl:mx-2 lg:mx-2">
                             <img
                                alt="onlyFlightIcon"
                                className="mb-1.5 mr-1.5"
                                src={onlyFlightIcon}
                             />
                             Only Flights
                          </li>
                          <li className="text-base font-semibold text-white mx-4 pb-2 flex justify-center items-center md:mx-8 xl:mx-2 lg:mx-2">
                             <img
                                alt="longStayIcon"
                                className="mb-1.5 mr-1.5"
                                src={longStayIcon}
                             />
                             Long Stays
                          </li>
                          <li className="text-base font-semibold text-white mx-4 pb-2 flex justify-center items-center md:mx-8 xl:mx-2 lg:mx-2">
                             <img
                                alt="activityIcon"
                                className="mb-1.5 mr-1.5"
                                src={activityIcon}
                             />
                             Activities
                          </li>
                       </ul>
                    </div>
  
                    <div className="booking_type_next_section py-5">
                       <ul className="grid grid-cols-2 gap-0 w-full my-0 mx-auto md:grid-cols-4 md:w-3/5 lg:w-9/12">
                          <li className="text-center mb-8 md:mb-0">
                             <Link className="text-sm font-medium text-black bg-white mx-2 py-2.5 px-5 rounded-full hover:bg-black hover:text-white hover:bg-orange-500" to="/">Overnight Stays</Link>
                          </li>
                          <li className="text-center mb-8 md:mb-0">
                             <Link className="text-sm font-medium text-black bg-white mx-2 py-2.5 px-5 rounded-full hover:bg-black hover:text-white hover:bg-orange-500" to="/">Day Use Stays</Link>
                          </li>
                          <li className="text-center mb-0 md:mb-0">
                             <Link className="text-sm font-medium text-black bg-white mx-2 py-2.5 px-5 rounded-full hover:bg-black hover:text-white hover:bg-orange-500" to="/">+ Add a flight</Link>
                          </li>
                          <li className="text-center mb-0 md:mb-0">
                             <Link className="text-sm font-medium text-black bg-white mx-2 py-2.5 px-5 rounded-full hover:bg-black hover:text-white hover:bg-orange-500" to="/">Bundle & Save</Link>
                          </li>
                       </ul>
                    </div>
  
                    <div className="form_area pt-5">
                       <form>
  
                          <div className="form_container flex justify-center align-center">
  
                             <div className="form_field_area mx-2 relative">
                                <p className="absolute text-white rounded-full bg-orange-500 left-8 px-3.5 py-px" style={marginTopMinus}>From</p>
                                <img
                                   alt="formArrowIcon"
                                   className="absolute z-10"
                                   style={marginArrowStyle}
                                   src={formArrowIcon}
                                />
                                <input className="text-black rounded-full py-6 px-9 text-base" type="text" placeholder="Enter City or Airport" />
                             </div>
  
                             <div className="form_field_area mx-2 relative">
                                <p className="absolute text-white rounded-full bg-orange-500 left-8 px-3.5 py-px" style={marginTopMinus}>To</p>
                                <input className="text-black rounded-full py-6 px-9 text-base" type="text" placeholder="Enter City or Airport" />
                             </div>
  
                             <div className="form_field_area mx-2 relative">
                                <Preview>
                                   <div className="relative w-40 mx-auto">
                                      <div className="absolute flex items-center justify-center w-12 h-full rounded-l text-black">
                                         <Lucide icon="Calendar" className="w-4 h-4" />
                                      </div>
                                      <div className="absolute right-0 flex items-center justify-center w-12 h-full rounded-l text-black">
                                         <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.8755 1.72962L6.29255 7.1651C6.23799 7.22962 6.17888 7.27542 6.11523 7.30252C6.05158 7.32962 5.98338 7.34295 5.91064 7.34252C5.83789 7.34252 5.76969 7.32919 5.70604 7.30252C5.64239 7.27585 5.58328 7.23005 5.52873 7.1651L0.932151 1.72962C0.804847 1.57909 0.741195 1.39091 0.741195 1.16511C0.741195 0.939303 0.809394 0.745755 0.945791 0.584465C1.08219 0.423175 1.24132 0.34253 1.42318 0.34253C1.60504 0.34253 1.76417 0.423175 1.90057 0.584465L5.91064 5.32639L9.92071 0.584465C10.048 0.433927 10.205 0.358658 10.3915 0.358658C10.5781 0.358658 10.7395 0.439303 10.8755 0.600593C11.0119 0.761883 11.0801 0.950055 11.0801 1.16511C11.0801 1.38016 11.0119 1.56833 10.8755 1.72962Z" fill="black" />
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
                                         className="text-black rounded-full py-6 px-9 text-base"
                                      />
                                   </div>
                                </Preview>
                             </div>
  
                             <div className="form_field_area mx-2 relative">
                                <Preview>
                                   <div className="relative w-40 mx-auto">
                                      <div className="absolute flex items-center justify-center w-12 h-full rounded-l text-black">
                                         <Lucide icon="Calendar" className="w-4 h-4" />
                                      </div>
                                      <div className="absolute right-0 flex items-center justify-center w-12 h-full rounded-l text-black">
                                         <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.8755 1.72962L6.29255 7.1651C6.23799 7.22962 6.17888 7.27542 6.11523 7.30252C6.05158 7.32962 5.98338 7.34295 5.91064 7.34252C5.83789 7.34252 5.76969 7.32919 5.70604 7.30252C5.64239 7.27585 5.58328 7.23005 5.52873 7.1651L0.932151 1.72962C0.804847 1.57909 0.741195 1.39091 0.741195 1.16511C0.741195 0.939303 0.809394 0.745755 0.945791 0.584465C1.08219 0.423175 1.24132 0.34253 1.42318 0.34253C1.60504 0.34253 1.76417 0.423175 1.90057 0.584465L5.91064 5.32639L9.92071 0.584465C10.048 0.433927 10.205 0.358658 10.3915 0.358658C10.5781 0.358658 10.7395 0.439303 10.8755 0.600593C11.0119 0.761883 11.0801 0.950055 11.0801 1.16511C11.0801 1.38016 11.0119 1.56833 10.8755 1.72962Z" fill="black" />
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
                                         className="text-black rounded-full py-6 px-9 text-base"
                                      />
                                   </div>
                                </Preview>
                             </div>
  
                             <div className="form_field_area mx-2 relative">
                                <Preview>
                                   <div className="relative w-60 mx-auto">
                                      <div className="absolute flex items-center justify-center w-12 h-full rounded-l text-black">
                                         <Lucide icon="Calendar" className="w-4 h-4" />
                                      </div>
                                      <FormSelect
                                         className="pl-10 sm:mr-2 text-black rounded-full py-6 px-9 text-base"
                                         aria-label="Default select example"
                                      >
                                         <option>2 Adults (1 Room)</option>
                                         <option>4 Adults (2 Room)</option>
                                         <option>6 Adults (3 Room)</option>
                                      </FormSelect>
                                   </div>
                                </Preview>
                             </div>
  
  
                          </div>
                          <div className="form_container flex justify-center align-center">
                             <div className="form_field_area mt-10">
                                <input className="text-2xl font-semibold uppercase bg-orange-500 py-5 px-20 rounded-full text-white hover:bg-black cursor-pointer" type="submit" value="SEARCH" />
                             </div>
                          </div>
  
                       </form>
                    </div>
  
                 </div>
  
              </div>
           </div>
        </div>
     </div> */}
            <div>
              <div>
                <img
                  src={banner01}
                  alt="banner01"
                  className="w-full banner_desk"
                />

                <div className="banner_content py-10 w-full h-full md:py-10 lg:py-20 opacity-0">
                  <div className="container flex justify-center items-center h-full">
                    <div>
                      <h1 className="text-center text-3xl font-bold text-white pb-1 md:text-4xl md:pb-6 lg:text-5xl">
                        Plan Your Tour Now!
                      </h1>
                      <p className="text-center text-base font-medium text-white pb-4 w-full my-0 mx-auto md:w-3/6">
                        Experience our various exciting packages and make your
                        hotel reservations. Find vacation packages also and
                        search cheap hotels and events.
                      </p>
                      <div className="sticky top-10 z-30 booking_type_section mb-3">
                        <ul className="grid grid-cols-2 gap-0 md:grid-cols-6 lg:grid-cols-6 lg:grid-cols-0">
                          <li className="text-base font-semibold text-white mx-4 pb-2 flex justify-center items-center md:mx-8 xl:mx-2 lg:mx-2">
                            <img
                              alt="hotelIcon"
                              className="mb-1.5 mr-1.5"
                              src={hotelIcon}
                            />
                            Hotels & Homes
                          </li>
                          <li className="text-base font-semibold text-white mx-4 pb-2 flex justify-center items-center md:mx-8 xl:mx-2 lg:mx-2">
                            <img
                              alt="privateIcon"
                              className="mb-1.5 mr-1.5"
                              src={privateIcon}
                            />
                            Private Stays
                          </li>
                          <li className="text-base font-semibold text-white mx-4 pb-2 flex justify-center items-center md:mx-8 xl:mx-2 lg:mx-2">
                            <img
                              alt="flightIcon"
                              className="mb-1.5 mr-1.5"
                              src={flightIcon}
                            />
                            Flight & Hotels
                          </li>
                          <li className="text-base font-semibold text-white mx-4 pb-2 flex justify-center items-center md:mx-8 xl:mx-2 lg:mx-2">
                            <img
                              alt="onlyFlightIcon"
                              className="mb-1.5 mr-1.5"
                              src={onlyFlightIcon}
                            />
                            Only Flights
                          </li>
                          <li className="text-base font-semibold text-white mx-4 pb-2 flex justify-center items-center md:mx-8 xl:mx-2 lg:mx-2">
                            <img
                              alt="longStayIcon"
                              className="mb-1.5 mr-1.5"
                              src={longStayIcon}
                            />
                            Long Stays
                          </li>
                          <li className="text-base font-semibold text-white mx-4 pb-2 flex justify-center items-center md:mx-8 xl:mx-2 lg:mx-2">
                            <img
                              alt="activityIcon"
                              className="mb-1.5 mr-1.5"
                              src={activityIcon}
                            />
                            Activities
                          </li>
                        </ul>
                      </div>

                      <div className="booking_type_next_section py-3">
                        <ul className="grid grid-cols-2 gap-0 w-full my-0 mx-auto md:grid-cols-4 md:w-3/5 lg:w-9/12">
                          <li className="text-center mb-8 md:mb-0">
                            <Link
                              className="text-sm font-medium text-black bg-white mx-2 py-2.5 px-5 rounded-full hover:bg-black hover:text-white hover:bg-orange-500"
                              to="/"
                            >
                              Overnight Stays
                            </Link>
                          </li>
                          <li className="text-center mb-8 md:mb-0">
                            <Link
                              className="text-sm font-medium text-black bg-white mx-2 py-2.5 px-5 rounded-full hover:bg-black hover:text-white hover:bg-orange-500"
                              to="/"
                            >
                              Day Use Stays
                            </Link>
                          </li>
                          <li className="text-center mb-0 md:mb-0">
                            <Link
                              className="text-sm font-medium text-black bg-white mx-2 py-2.5 px-5 rounded-full hover:bg-black hover:text-white hover:bg-orange-500"
                              to="/"
                            >
                              + Add a flight
                            </Link>
                          </li>
                          <li className="text-center mb-0 md:mb-0">
                            <Link
                              className="text-sm font-medium text-black bg-white mx-2 py-2.5 px-5 rounded-full hover:bg-black hover:text-white hover:bg-orange-500"
                              to="/"
                            >
                              Bundle & Save
                            </Link>
                          </li>
                        </ul>
                      </div>

                      <div className="form_area pt-5">
                        <form>
                          <div className="form_container flex justify-center align-center">
                            <div className="form_field_area mx-2 relative">
                              <p
                                className="absolute text-white rounded-full bg-orange-500 left-8 px-3.5 py-px"
                                style={marginTopMinus}
                              >
                                From
                              </p>
                              <img
                                alt="formArrowIcon"
                                className="absolute z-10"
                                style={marginArrowStyle}
                                src={formArrowIcon}
                              />
                              <input
                                className="text-black rounded-full py-6 px-9 text-base"
                                type="text"
                                placeholder="Enter City or Airport"
                              />
                            </div>

                            <div className="form_field_area mx-2 relative">
                              <p
                                className="absolute text-white rounded-full bg-orange-500 left-8 px-3.5 py-px"
                                style={marginTopMinus}
                              >
                                To
                              </p>
                              <input
                                className="text-black rounded-full py-6 px-9 text-base"
                                type="text"
                                placeholder="Enter City or Airport"
                              />
                            </div>

                            <div className="form_field_area mx-2 relative">
                              <Preview>
                                <div className="relative w-40 mx-auto">
                                  <div className="absolute flex items-center justify-center w-12 h-full rounded-l text-black">
                                    <Lucide
                                      icon="Calendar"
                                      className="w-4 h-4"
                                    />
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
                                    className="text-black rounded-full py-6 px-9 text-base"
                                  />
                                </div>
                              </Preview>
                            </div>

                            <div className="form_field_area mx-2 relative">
                              <Preview>
                                <div className="relative w-40 mx-auto">
                                  <div className="absolute flex items-center justify-center w-12 h-full rounded-l text-black">
                                    <Lucide
                                      icon="Calendar"
                                      className="w-4 h-4"
                                    />
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
                                    className="text-black rounded-full py-6 px-9 text-base"
                                  />
                                </div>
                              </Preview>
                            </div>

                            <div className="form_field_area mx-2 relative">
                              <Preview>
                                <div className="relative w-60 mx-auto">
                                  <div className="absolute flex items-center justify-center w-12 h-full rounded-l text-black">
                                    <Lucide
                                      icon="Calendar"
                                      className="w-4 h-4"
                                    />
                                  </div>
                                  <FormSelect
                                    className="pl-10 sm:mr-2 text-black rounded-full py-6 px-9 text-base"
                                    aria-label="Default select example"
                                  >
                                    <option>2 Adults (1 Room)</option>
                                    <option>4 Adults (2 Room)</option>
                                    <option>6 Adults (3 Room)</option>
                                  </FormSelect>
                                </div>
                              </Preview>
                            </div>
                          </div>
                          <div className="form_container flex justify-center align-center">
                            <div className="form_field_area mt-10">
                              <input
                                className="text-2xl font-semibold uppercase bg-orange-500 py-5 px-20 rounded-full text-white hover:bg-black cursor-pointer"
                                type="submit"
                                value="SEARCH"
                              />
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div>
                <img
                  src={banner02}
                  alt="banner02"
                  className="w-full banner_desk"
                />

                <div className="banner_content py-10 w-full h-full md:py-10 lg:py-20 opacity-0">
                  <div className="container flex justify-center items-center h-full">
                    <div>
                      <h1 className="text-center text-3xl font-bold text-white pb-1 md:text-4xl md:pb-6 lg:text-5xl">
                        Plan Your Tour Now!
                      </h1>
                      <p className="text-center text-base font-medium text-white pb-4 w-full my-0 mx-auto md:w-3/6">
                        Experience our various exciting packages and make your
                        hotel reservations. Find vacation packages also and
                        search cheap hotels and events.
                      </p>
                      <div className="sticky top-10 z-30 booking_type_section mb-3">
                        <ul className="grid grid-cols-2 gap-0 md:grid-cols-6 lg:grid-cols-6 lg:grid-cols-0">
                          <li className="text-base font-semibold text-white mx-4 pb-2 flex justify-center items-center md:mx-8 xl:mx-2 lg:mx-2">
                            <img
                              alt="hotelIcon"
                              className="mb-1.5 mr-1.5"
                              src={hotelIcon}
                            />
                            Hotels & Homes
                          </li>
                          <li className="text-base font-semibold text-white mx-4 pb-2 flex justify-center items-center md:mx-8 xl:mx-2 lg:mx-2">
                            <img
                              alt="privateIcon"
                              className="mb-1.5 mr-1.5"
                              src={privateIcon}
                            />
                            Private Stays
                          </li>
                          <li className="text-base font-semibold text-white mx-4 pb-2 flex justify-center items-center md:mx-8 xl:mx-2 lg:mx-2">
                            <img
                              alt="flightIcon"
                              className="mb-1.5 mr-1.5"
                              src={flightIcon}
                            />
                            Flight & Hotels
                          </li>
                          <li className="text-base font-semibold text-white mx-4 pb-2 flex justify-center items-center md:mx-8 xl:mx-2 lg:mx-2">
                            <img
                              alt="onlyFlightIcon"
                              className="mb-1.5 mr-1.5"
                              src={onlyFlightIcon}
                            />
                            Only Flights
                          </li>
                          <li className="text-base font-semibold text-white mx-4 pb-2 flex justify-center items-center md:mx-8 xl:mx-2 lg:mx-2">
                            <img
                              alt="longStayIcon"
                              className="mb-1.5 mr-1.5"
                              src={longStayIcon}
                            />
                            Long Stays
                          </li>
                          <li className="text-base font-semibold text-white mx-4 pb-2 flex justify-center items-center md:mx-8 xl:mx-2 lg:mx-2">
                            <img
                              alt="activityIcon"
                              className="mb-1.5 mr-1.5"
                              src={activityIcon}
                            />
                            Activities
                          </li>
                        </ul>
                      </div>

                      <div className="booking_type_next_section py-3">
                        <ul className="grid grid-cols-2 gap-0 w-full my-0 mx-auto md:grid-cols-4 md:w-3/5 lg:w-9/12">
                          <li className="text-center mb-8 md:mb-0">
                            <Link
                              className="text-sm font-medium text-black bg-white mx-2 py-2.5 px-5 rounded-full hover:bg-black hover:text-white hover:bg-orange-500"
                              to="/"
                            >
                              Overnight Stays
                            </Link>
                          </li>
                          <li className="text-center mb-8 md:mb-0">
                            <Link
                              className="text-sm font-medium text-black bg-white mx-2 py-2.5 px-5 rounded-full hover:bg-black hover:text-white hover:bg-orange-500"
                              to="/"
                            >
                              Day Use Stays
                            </Link>
                          </li>
                          <li className="text-center mb-0 md:mb-0">
                            <Link
                              className="text-sm font-medium text-black bg-white mx-2 py-2.5 px-5 rounded-full hover:bg-black hover:text-white hover:bg-orange-500"
                              to="/"
                            >
                              + Add a flight
                            </Link>
                          </li>
                          <li className="text-center mb-0 md:mb-0">
                            <Link
                              className="text-sm font-medium text-black bg-white mx-2 py-2.5 px-5 rounded-full hover:bg-black hover:text-white hover:bg-orange-500"
                              to="/"
                            >
                              Bundle & Save
                            </Link>
                          </li>
                        </ul>
                      </div>

                      <div className="form_area pt-5">
                        <form>
                          <div className="form_container flex justify-center align-center">
                            <div className="form_field_area mx-2 relative">
                              <p
                                className="absolute text-white rounded-full bg-orange-500 left-8 px-3.5 py-px"
                                style={marginTopMinus}
                              >
                                From
                              </p>
                              <img
                                alt="formArrowIcon"
                                className="absolute z-10"
                                style={marginArrowStyle}
                                src={formArrowIcon}
                              />
                              <input
                                className="text-black rounded-full py-6 px-9 text-base"
                                type="text"
                                placeholder="Enter City or Airport"
                              />
                            </div>

                            <div className="form_field_area mx-2 relative">
                              <p
                                className="absolute text-white rounded-full bg-orange-500 left-8 px-3.5 py-px"
                                style={marginTopMinus}
                              >
                                To
                              </p>
                              <input
                                className="text-black rounded-full py-6 px-9 text-base"
                                type="text"
                                placeholder="Enter City or Airport"
                              />
                            </div>

                            <div className="form_field_area mx-2 relative">
                              <Preview>
                                <div className="relative w-40 mx-auto">
                                  <div className="absolute flex items-center justify-center w-12 h-full rounded-l text-black">
                                    <Lucide
                                      icon="Calendar"
                                      className="w-4 h-4"
                                    />
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
                                    className="text-black rounded-full py-6 px-9 text-base"
                                  />
                                </div>
                              </Preview>
                            </div>

                            <div className="form_field_area mx-2 relative">
                              <Preview>
                                <div className="relative w-40 mx-auto">
                                  <div className="absolute flex items-center justify-center w-12 h-full rounded-l text-black">
                                    <Lucide
                                      icon="Calendar"
                                      className="w-4 h-4"
                                    />
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
                                    className="text-black rounded-full py-6 px-9 text-base"
                                  />
                                </div>
                              </Preview>
                            </div>

                            <div className="form_field_area mx-2 relative">
                              <Preview>
                                <div className="relative w-60 mx-auto">
                                  <div className="absolute flex items-center justify-center w-12 h-full rounded-l text-black">
                                    <Lucide
                                      icon="Calendar"
                                      className="w-4 h-4"
                                    />
                                  </div>
                                  <FormSelect
                                    className="pl-10 sm:mr-2 text-black rounded-full py-6 px-9 text-base"
                                    aria-label="Default select example"
                                  >
                                    <option>2 Adults (1 Room)</option>
                                    <option>4 Adults (2 Room)</option>
                                    <option>6 Adults (3 Room)</option>
                                  </FormSelect>
                                </div>
                              </Preview>
                            </div>
                          </div>
                          <div className="form_container flex justify-center align-center">
                            <div className="form_field_area mt-10">
                              <input
                                className="text-2xl font-semibold uppercase bg-orange-500 py-5 px-20 rounded-full text-white hover:bg-black cursor-pointer"
                                type="submit"
                                value="SEARCH"
                              />
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div>
                <img
                  src={banner03}
                  alt="banner03"
                  className="w-full banner_desk"
                />

                <div className="banner_content py-10 w-full h-full md:py-10 lg:py-20 opacity-0">
                  <div className="container flex justify-center items-center h-full">
                    <div>
                      <h1 className="text-center text-3xl font-bold text-white pb-1 md:text-4xl md:pb-6 lg:text-5xl">
                        Plan Your Tour Now!
                      </h1>
                      <p className="text-center text-base font-medium text-white pb-4 w-full my-0 mx-auto md:w-3/6">
                        Experience our various exciting packages and make your
                        hotel reservations. Find vacation packages also and
                        search cheap hotels and events.
                      </p>
                      <div className="sticky top-10 z-30 booking_type_section mb-3">
                        <ul className="grid grid-cols-2 gap-0 md:grid-cols-6 lg:grid-cols-6 lg:grid-cols-0">
                          <li className="text-base font-semibold text-white mx-4 pb-2 flex justify-center items-center md:mx-8 xl:mx-2 lg:mx-2">
                            <img
                              alt="hotelIcon"
                              className="mb-1.5 mr-1.5"
                              src={hotelIcon}
                            />
                            Hotels & Homes
                          </li>
                          <li className="text-base font-semibold text-white mx-4 pb-2 flex justify-center items-center md:mx-8 xl:mx-2 lg:mx-2">
                            <img
                              alt="privateIcon"
                              className="mb-1.5 mr-1.5"
                              src={privateIcon}
                            />
                            Private Stays
                          </li>
                          <li className="text-base font-semibold text-white mx-4 pb-2 flex justify-center items-center md:mx-8 xl:mx-2 lg:mx-2">
                            <img
                              alt="flightIcon"
                              className="mb-1.5 mr-1.5"
                              src={flightIcon}
                            />
                            Flight & Hotels
                          </li>
                          <li className="text-base font-semibold text-white mx-4 pb-2 flex justify-center items-center md:mx-8 xl:mx-2 lg:mx-2">
                            <img
                              alt="onlyFlightIcon"
                              className="mb-1.5 mr-1.5"
                              src={onlyFlightIcon}
                            />
                            Only Flights
                          </li>
                          <li className="text-base font-semibold text-white mx-4 pb-2 flex justify-center items-center md:mx-8 xl:mx-2 lg:mx-2">
                            <img
                              alt="longStayIcon"
                              className="mb-1.5 mr-1.5"
                              src={longStayIcon}
                            />
                            Long Stays
                          </li>
                          <li className="text-base font-semibold text-white mx-4 pb-2 flex justify-center items-center md:mx-8 xl:mx-2 lg:mx-2">
                            <img
                              alt="activityIcon"
                              className="mb-1.5 mr-1.5"
                              src={activityIcon}
                            />
                            Activities
                          </li>
                        </ul>
                      </div>

                      <div className="booking_type_next_section py-3">
                        <ul className="grid grid-cols-2 gap-0 w-full my-0 mx-auto md:grid-cols-4 md:w-3/5 lg:w-9/12">
                          <li className="text-center mb-8 md:mb-0">
                            <Link
                              className="text-sm font-medium text-black bg-white mx-2 py-2.5 px-5 rounded-full hover:bg-black hover:text-white hover:bg-orange-500"
                              to="/"
                            >
                              Overnight Stays
                            </Link>
                          </li>
                          <li className="text-center mb-8 md:mb-0">
                            <Link
                              className="text-sm font-medium text-black bg-white mx-2 py-2.5 px-5 rounded-full hover:bg-black hover:text-white hover:bg-orange-500"
                              to="/"
                            >
                              Day Use Stays
                            </Link>
                          </li>
                          <li className="text-center mb-0 md:mb-0">
                            <Link
                              className="text-sm font-medium text-black bg-white mx-2 py-2.5 px-5 rounded-full hover:bg-black hover:text-white hover:bg-orange-500"
                              to="/"
                            >
                              + Add a flight
                            </Link>
                          </li>
                          <li className="text-center mb-0 md:mb-0">
                            <Link
                              className="text-sm font-medium text-black bg-white mx-2 py-2.5 px-5 rounded-full hover:bg-black hover:text-white hover:bg-orange-500"
                              to="/"
                            >
                              Bundle & Save
                            </Link>
                          </li>
                        </ul>
                      </div>

                      <div className="form_area pt-5">
                        <form>
                          <div className="form_container flex justify-center align-center">
                            <div className="form_field_area mx-2 relative">
                              <p
                                className="absolute text-white rounded-full bg-orange-500 left-8 px-3.5 py-px"
                                style={marginTopMinus}
                              >
                                From
                              </p>
                              <img
                                alt="formArrowIcon"
                                className="absolute z-10"
                                style={marginArrowStyle}
                                src={formArrowIcon}
                              />
                              <input
                                className="text-black rounded-full py-6 px-9 text-base"
                                type="text"
                                placeholder="Enter City or Airport"
                              />
                            </div>

                            <div className="form_field_area mx-2 relative">
                              <p
                                className="absolute text-white rounded-full bg-orange-500 left-8 px-3.5 py-px"
                                style={marginTopMinus}
                              >
                                To
                              </p>
                              <input
                                className="text-black rounded-full py-6 px-9 text-base"
                                type="text"
                                placeholder="Enter City or Airport"
                              />
                            </div>

                            <div className="form_field_area mx-2 relative">
                              <Preview>
                                <div className="relative w-40 mx-auto">
                                  <div className="absolute flex items-center justify-center w-12 h-full rounded-l text-black">
                                    <Lucide
                                      icon="Calendar"
                                      className="w-4 h-4"
                                    />
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
                                    className="text-black rounded-full py-6 px-9 text-base"
                                  />
                                </div>
                              </Preview>
                            </div>

                            <div className="form_field_area mx-2 relative">
                              <Preview>
                                <div className="relative w-40 mx-auto">
                                  <div className="absolute flex items-center justify-center w-12 h-full rounded-l text-black">
                                    <Lucide
                                      icon="Calendar"
                                      className="w-4 h-4"
                                    />
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
                                    className="text-black rounded-full py-6 px-9 text-base"
                                  />
                                </div>
                              </Preview>
                            </div>

                            <div className="form_field_area mx-2 relative">
                              <Preview>
                                <div className="relative w-60 mx-auto">
                                  <div className="absolute flex items-center justify-center w-12 h-full rounded-l text-black">
                                    <Lucide
                                      icon="Calendar"
                                      className="w-4 h-4"
                                    />
                                  </div>
                                  <FormSelect
                                    className="pl-10 sm:mr-2 text-black rounded-full py-6 px-9 text-base"
                                    aria-label="Default select example"
                                  >
                                    <option>2 Adults (1 Room)</option>
                                    <option>4 Adults (2 Room)</option>
                                    <option>6 Adults (3 Room)</option>
                                  </FormSelect>
                                </div>
                              </Preview>
                            </div>
                          </div>
                          <div className="form_container flex justify-center align-center">
                            <div className="form_field_area mt-10">
                              <input
                                className="text-2xl font-semibold uppercase bg-orange-500 py-5 px-20 rounded-full text-white hover:bg-black cursor-pointer"
                                type="submit"
                                value="SEARCH"
                              />
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div>
                <img
                  src={banner04}
                  alt="banner04"
                  className="w-full banner_desk"
                />

                <div className="banner_content py-10 w-full h-full md:py-10 lg:py-20 opacity-0">
                  <div className="container flex justify-center items-center h-full">
                    <div>
                      <h1 className="text-center text-3xl font-bold text-white pb-1 md:text-4xl md:pb-6 lg:text-5xl">
                        Plan Your Tour Now!
                      </h1>
                      <p className="text-center text-base font-medium text-white pb-4 w-full my-0 mx-auto md:w-3/6">
                        Experience our various exciting packages and make your
                        hotel reservations. Find vacation packages also and
                        search cheap hotels and events.
                      </p>
                      <div className="sticky top-10 z-30 booking_type_section mb-3">
                        <ul className="grid grid-cols-2 gap-0 md:grid-cols-6 lg:grid-cols-6 lg:grid-cols-0">
                          <li className="text-base font-semibold text-white mx-4 pb-2 flex justify-center items-center md:mx-8 xl:mx-2 lg:mx-2">
                            <img
                              alt="hotelIcon"
                              className="mb-1.5 mr-1.5"
                              src={hotelIcon}
                            />
                            Hotels & Homes
                          </li>
                          <li className="text-base font-semibold text-white mx-4 pb-2 flex justify-center items-center md:mx-8 xl:mx-2 lg:mx-2">
                            <img
                              alt="privateIcon"
                              className="mb-1.5 mr-1.5"
                              src={privateIcon}
                            />
                            Private Stays
                          </li>
                          <li className="text-base font-semibold text-white mx-4 pb-2 flex justify-center items-center md:mx-8 xl:mx-2 lg:mx-2">
                            <img
                              alt="flightIcon"
                              className="mb-1.5 mr-1.5"
                              src={flightIcon}
                            />
                            Flight & Hotels
                          </li>
                          <li className="text-base font-semibold text-white mx-4 pb-2 flex justify-center items-center md:mx-8 xl:mx-2 lg:mx-2">
                            <img
                              alt="onlyFlightIcon"
                              className="mb-1.5 mr-1.5"
                              src={onlyFlightIcon}
                            />
                            Only Flights
                          </li>
                          <li className="text-base font-semibold text-white mx-4 pb-2 flex justify-center items-center md:mx-8 xl:mx-2 lg:mx-2">
                            <img
                              alt="longStayIcon"
                              className="mb-1.5 mr-1.5"
                              src={longStayIcon}
                            />
                            Long Stays
                          </li>
                          <li className="text-base font-semibold text-white mx-4 pb-2 flex justify-center items-center md:mx-8 xl:mx-2 lg:mx-2">
                            <img
                              alt="activityIcon"
                              className="mb-1.5 mr-1.5"
                              src={activityIcon}
                            />
                            Activities
                          </li>
                        </ul>
                      </div>

                      <div className="booking_type_next_section py-3">
                        <ul className="grid grid-cols-2 gap-0 w-full my-0 mx-auto md:grid-cols-4 md:w-3/5 lg:w-9/12">
                          <li className="text-center mb-8 md:mb-0">
                            <Link
                              className="text-sm font-medium text-black bg-white mx-2 py-2.5 px-5 rounded-full hover:bg-black hover:text-white hover:bg-orange-500"
                              to="/"
                            >
                              Overnight Stays
                            </Link>
                          </li>
                          <li className="text-center mb-8 md:mb-0">
                            <Link
                              className="text-sm font-medium text-black bg-white mx-2 py-2.5 px-5 rounded-full hover:bg-black hover:text-white hover:bg-orange-500"
                              to="/"
                            >
                              Day Use Stays
                            </Link>
                          </li>
                          <li className="text-center mb-0 md:mb-0">
                            <Link
                              className="text-sm font-medium text-black bg-white mx-2 py-2.5 px-5 rounded-full hover:bg-black hover:text-white hover:bg-orange-500"
                              to="/"
                            >
                              + Add a flight
                            </Link>
                          </li>
                          <li className="text-center mb-0 md:mb-0">
                            <Link
                              className="text-sm font-medium text-black bg-white mx-2 py-2.5 px-5 rounded-full hover:bg-black hover:text-white hover:bg-orange-500"
                              to="/"
                            >
                              Bundle & Save
                            </Link>
                          </li>
                        </ul>
                      </div>

                      <div className="form_area pt-5">
                        <form>
                          <div className="form_container flex justify-center align-center">
                            <div className="form_field_area mx-2 relative">
                              <p
                                className="absolute text-white rounded-full bg-orange-500 left-8 px-3.5 py-px"
                                style={marginTopMinus}
                              >
                                From
                              </p>
                              <img
                                alt="formArrowIcon"
                                className="absolute z-10"
                                style={marginArrowStyle}
                                src={formArrowIcon}
                              />
                              <input
                                className="text-black rounded-full py-6 px-9 text-base"
                                type="text"
                                placeholder="Enter City or Airport"
                              />
                            </div>

                            <div className="form_field_area mx-2 relative">
                              <p
                                className="absolute text-white rounded-full bg-orange-500 left-8 px-3.5 py-px"
                                style={marginTopMinus}
                              >
                                To
                              </p>
                              <input
                                className="text-black rounded-full py-6 px-9 text-base"
                                type="text"
                                placeholder="Enter City or Airport"
                              />
                            </div>

                            <div className="form_field_area mx-2 relative">
                              <Preview>
                                <div className="relative w-40 mx-auto">
                                  <div className="absolute flex items-center justify-center w-12 h-full rounded-l text-black">
                                    <Lucide
                                      icon="Calendar"
                                      className="w-4 h-4"
                                    />
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
                                    className="text-black rounded-full py-6 px-9 text-base"
                                  />
                                </div>
                              </Preview>
                            </div>

                            <div className="form_field_area mx-2 relative">
                              <Preview>
                                <div className="relative w-40 mx-auto">
                                  <div className="absolute flex items-center justify-center w-12 h-full rounded-l text-black">
                                    <Lucide
                                      icon="Calendar"
                                      className="w-4 h-4"
                                    />
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
                                    className="text-black rounded-full py-6 px-9 text-base"
                                  />
                                </div>
                              </Preview>
                            </div>

                            <div className="form_field_area mx-2 relative">
                              <Preview>
                                <div className="relative w-60 mx-auto">
                                  <div className="absolute flex items-center justify-center w-12 h-full rounded-l text-black">
                                    <Lucide
                                      icon="Calendar"
                                      className="w-4 h-4"
                                    />
                                  </div>
                                  <FormSelect
                                    className="pl-10 sm:mr-2 text-black rounded-full py-6 px-9 text-base"
                                    aria-label="Default select example"
                                  >
                                    <option>2 Adults (1 Room)</option>
                                    <option>4 Adults (2 Room)</option>
                                    <option>6 Adults (3 Room)</option>
                                  </FormSelect>
                                </div>
                              </Preview>
                            </div>
                          </div>
                          <div className="form_container flex justify-center align-center">
                            <div className="form_field_area mt-10">
                              <input
                                className="text-2xl font-semibold uppercase bg-orange-500 py-5 px-20 rounded-full text-white hover:bg-black cursor-pointer"
                                type="submit"
                                value="SEARCH"
                              />
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </BrowserView>

        <MobileView>
          <Slider {...settings}>
            {/* <div>
        <div className="banner_section relative bg-cover bg-bottom h-[665px]" style={{ backgroundImage: `url(${bannerImage})` }}>&nbsp;</div>
     </div> */}
            <div>
              <div
                className="banner_section relative bg-cover bg-bottom h-[665px]"
                style={{ backgroundImage: `url(${banner01})` }}
              >
                &nbsp;
              </div>
            </div>
            <div>
              <div
                className="banner_section relative bg-cover bg-bottom h-[665px]"
                style={{ backgroundImage: `url(${banner02})` }}
              >
                &nbsp;
              </div>
            </div>
            <div>
              <div
                className="banner_section relative bg-cover bg-bottom h-[665px]"
                style={{ backgroundImage: `url(${banner03})` }}
              >
                &nbsp;
              </div>
            </div>
            <div>
              <div
                className="banner_section relative bg-cover bg-bottom h-[665px]"
                style={{ backgroundImage: `url(${banner04})` }}
              >
                &nbsp;
              </div>
            </div>
          </Slider>
        </MobileView>
      </div>
    </>
  );
};

export default HomeBanner;
