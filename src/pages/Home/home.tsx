// @ts-nocheck
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

import { Link } from "react-router-dom";
import siteLogo from "../../assets/images/logo.png";
import facebookIcon from "../../assets/images/facebook.svg";
import twitterIcon from "../../assets/images/twitter.svg";
import linkedinIcon from "../../assets/images/linkedin.svg";
import youtubeIcon from "../../assets/images/youtube.svg";
import instagramIcon from "../../assets/images/instagram.svg";
import lastSocialIcon from "../../assets/images/lastsocial.svg";
import bannerImage from "../../assets/images/banner.png";

import tajImage from "../../assets/images/Taj-Mahal-Agra-India.jpg";
import parisImage from "../../assets/images/paris.jpg";
import brazilImage from "../../assets/images/brazil.jpg";
import usaImage from "../../assets/images/usa.jpg";
import indianaImage from "../../assets/images/indiana.jpg";
import chinaImage from "../../assets/images/china.jpg";

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

import registerBg from "../../assets/images/register-img.jpg";
import loginBg from "../../assets/images/login-img.jpg";
import forgotBg from "../../assets/images/forgot-password-img.jpg";

import spmage01 from "../../assets/images/sp01.png";
import spmage02 from "../../assets/images/sp02.png";
import spmage03 from "../../assets/images/sp03.png";
import spmage04 from "../../assets/images/sp4.png";
import spmage05 from "../../assets/images/sp5.png";

import uploadImg from "../../assets/images/upload.jpg";

import tabImage01 from "../../assets/images/t01.jpg";
import tabImage02 from "../../assets/images/t02.jpg";
import tabImage03 from "../../assets/images/t03.jpg";
import tabImage04 from "../../assets/images/t04.jpg";

import testiBG from "../../assets/images/testibg.png";

import footerImg from "../../assets/images/footer_banner.png";

import { Tab } from "../../base-components/Headless";

import ItinerarySnippetLarge from "../../frontend-components/home/itinerarySnippetLarge";
import callApi from "../../frontend-components/utility/function";

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

import { FormSelect } from "../../base-components/Form";

import TinySlider, {
  TinySliderElement,
} from "../../base-components/TinySlider";

const marginTopMinus = {
  top: -9,
};
const marginArrowStyle = {
  right: -25,
  top: 20,
};

const Main = () => {
  const [date, setDate] = useState("");
  const [daterange, setDaterange] = useState("");
  const [datepickerModalPreview, setDatepickerModalPreview] = useState(false);
  const cancelButtonRef = useRef(null);

  // This for slider
  const importantNotesRef = useRef<TinySliderElement>();
  const prevImportantNotes = () => {
    importantNotesRef.current?.tns.goTo("prev");
  };
  const nextImportantNotes = () => {
    importantNotesRef.current?.tns.goTo("next");
  };

  const [superlargeModalSizePreview, setSuperlargeModalSizePreview] =
    useState(false);
  const sendButtonRef = useRef(null);

  useEffect(() => {
    callApi("http://localhost:3001/", "GET", "super-flight-master", {}).then(
      (res) => {
        console.log("Data: ", res.data);
      }
    );
  });

  return (
    <>
      <div className="bg-gray-100">
        <header className="sticky top-0 z-30 w-full px-2 py-4 bg-white sm:px-4 shadow-xl">
          <div className="flex items-center justify-between mx-auto max-w-7xl">
            <a href="#">
              <span className="text-2xl font-extrabold text-blue-600">
                Logo Home
              </span>
            </a>
            <div className="flex items-center space-x-1">
              <ul className="hidden space-x-2 md:inline-flex">
                <li>
                  <a
                    href="#"
                    className="px-4 py-2 font-semibold text-gray-600 rounded"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="px-4 py-2 font-semibold text-gray-600 rounded"
                  >
                    Blogs
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="px-4 py-2 font-semibold text-gray-600 rounded"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="px-4 py-2 font-semibold text-gray-600 rounded"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
              <div className="inline-flex md:hidden">
                <button className="flex-none px-2 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 8h16M4 16h16"
                    />
                  </svg>
                  <span className="sr-only">Open Menu</span>
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* <section className="p-4 mx-auto max-w-7xl">
    <div className="mx-auto font-sans">
      <h1 className="text-2xl font-bold">Tailwind CSS sticky header</h1>
      <p> Header dummay data Lorem....</p>
    </div>
  </section> */}

        <div className="bg-white overflow-hidden">
          {/* BANNER SECTION */}
          <div
            className="banner_section relative bg-cover bg-bottom"
            style={{ backgroundImage: `url(${bannerImage})` }}
          >
            {/* <img
                  alt="Banner"
                  className="w-full"
                  src={bannerImage}
               /> */}
            <div className="banner_content py-10 w-full h-full md:py-10 lg:py-20">
              <div className="container flex justify-center items-center h-full">
                <div>
                  <h1 className="text-center text-3xl font-bold text-white pb-5 md:text-4xl md:pb-6 lg:text-5xl">
                    Plan Your Tour Now!
                  </h1>
                  <p className="text-center text-base font-medium text-white pb-8 w-full my-0 mx-auto md:w-3/6">
                    Experience our various exciting packages and make your hotel
                    reservations. Find vacation packages also and search cheap
                    hotels and events.
                  </p>
                  <div className="sticky top-10 z-30 booking_type_section mb-5">
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

                  <div className="form_area pt-10">
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
          {/* SPECIAL TOURS SECTION */}
          <div className="container">
            <div className="special_tour_section border border-gray-300 border-solid rounded-3xl my-16 p-4 md:p-6 md:mx-4 md:my-8 lg:mx-4 lg:my-8">
              <h2 className="text-3xl font-bold text-black">Special Tours</h2>

              <div className="special_tours_tab_container w-full relative">
                <Tab.Group>
                  <Tab.List
                    variant="link-tabs"
                    className="px-16 border-slate-300 border-solid border-b"
                  >
                    <Tab>
                      <Tab.Button
                        className="text-sm font-medium mx-0 px-2 md:mx-2.5 lg:mx-1"
                        as="button"
                      >
                        All Offers
                      </Tab.Button>
                    </Tab>
                    <Tab>
                      <Tab.Button
                        className="text-sm font-medium mx-0 px-2 md:mx-2.5 lg:mx-1"
                        as="button"
                      >
                        Flights
                      </Tab.Button>
                    </Tab>
                    <Tab>
                      <Tab.Button
                        className="text-sm font-medium mx-0 px-2 md:mx-2.5 lg:mx-1"
                        as="button"
                      >
                        Hotels
                      </Tab.Button>
                    </Tab>
                    <Tab>
                      <Tab.Button
                        className="text-sm font-medium mx-0 px-2 md:mx-2.5 lg:mx-1"
                        as="button"
                      >
                        Holidays
                      </Tab.Button>
                    </Tab>
                    <Tab>
                      <Tab.Button
                        className="text-sm font-medium mx-0 px-2 md:mx-2.5 lg:mx-1"
                        as="button"
                      >
                        Trains
                      </Tab.Button>
                    </Tab>
                    <Tab>
                      <Tab.Button
                        className="text-sm font-medium mx-0 px-2 md:mx-2.5 lg:mx-1"
                        as="button"
                      >
                        Cabs
                      </Tab.Button>
                    </Tab>
                  </Tab.List>
                  <Tab.Panels className="mt-0 md:mt-5">
                    <Tab.Panel className="leading-relaxed">
                      {/* BEGIN: Important Notes */}
                      <div className="col-span-12 mt-3 md:col-span-6 xl:col-span-12 2xl:mt-8 relative">
                        <div className="special_tours_button_container flex items-center h-10 intro-x">
                          <Button
                            data-carousel="important-notes"
                            data-target="prev"
                            className="px-2 mr-2 border-slate-300 text-slate-600 dark:text-slate-300 rounded-full hover:bg-orange-500 hover:text-white"
                            onClick={prevImportantNotes}
                          >
                            <Lucide icon="ChevronLeft" className="w-4 h-4" />
                          </Button>
                          <Button
                            data-carousel="important-notes"
                            data-target="next"
                            className="px-2 mr-2 border-slate-300 text-slate-600 dark:text-slate-300 rounded-full hover:bg-orange-500 hover:text-white"
                            onClick={nextImportantNotes}
                          >
                            <Lucide icon="ChevronRight" className="w-4 h-4" />
                          </Button>
                        </div>
                        <div className="intro-x">
                          <div className="">
                            <TinySlider
                              getRef={(el) => {
                                importantNotesRef.current = el;
                              }}
                              options={{
                                // container: ".my-slider",
                                // items: 3,
                                // gutter: 20,
                                // slideBy: 1,
                                // controlsPosition: "bottom",
                                // navPosition: "bottom",
                                // mouseDrag: true,
                                // autoplay: true,
                                // autoplayButtonOutput: false,
                                // controlsContainer: "#custom-control",

                                mouseDrag: true,
                                autoplay: false,
                                controls: false,
                                center: false,
                                items: 3,
                                slideBy: 1,
                                nav: false,
                                speed: 500,
                                responsive: {
                                  0: {
                                    items: 1,
                                    nav: false,
                                  },
                                  768: {
                                    items: 2,
                                    nav: true,
                                  },
                                  1440: {
                                    items: 3,
                                  },
                                },

                                // mouseDrag: true,
                                // autoplay: false,
                                // controls: false,
                                // center: false,
                                // items: 3,
                                // nav: false,
                                // speed: 500,
                                // responsive: {
                                //    600: {
                                //       items: 2,
                                //    },
                                // },
                              }}
                            >
                              <div className="special_tour_cart p-4 my-5 mx-2">
                                <div className="special_tour_box_left w-28 text-center float-left mr-2">
                                  <img
                                    alt="spmage01"
                                    className="mb-1.5 mr-1.5"
                                    src={spmage01}
                                  />
                                  <span className="text-xs font-medium text-center">
                                    T&C’s Apply
                                  </span>
                                </div>
                                <div className="special_tour_box_right">
                                  <p className="text-xs font-medium uppercase">
                                    INTL HOTELS
                                  </p>
                                  <h3 className="text-xl font-semibold mb-5">
                                    Up{" "}
                                    <span className="text-orange-500">to</span>{" "}
                                    30%OFF*
                                  </h3>
                                  <span className="text-xs font-normal">
                                    on International Hotels.
                                  </span>
                                  <div className="flex mt-5 font-medium">
                                    <Link
                                      to="/"
                                      type="button"
                                      className="bg-orange-500 rounded-full text-sm font-medium text-white px-5 py-2 inline-block ml-auto hover:bg-black"
                                    >
                                      Book Now
                                    </Link>
                                  </div>
                                </div>
                              </div>
                              <div className="special_tour_cart  p-4 my-5 mx-2">
                                <div className="special_tour_box_left w-28 text-center float-left mr-2">
                                  <img
                                    alt="spmage05"
                                    className="mb-1.5 mr-1.5"
                                    src={spmage05}
                                  />
                                  <span className="text-xs font-medium text-center">
                                    T&C’s Apply
                                  </span>
                                </div>
                                <div className="special_tour_box_right">
                                  <p className="text-xs font-medium uppercase">
                                    INTL HOTELS
                                  </p>
                                  <h3 className="text-xl font-semibold mb-5">
                                    Up to
                                    <span className="text-orange-500">
                                      40%
                                    </span>{" "}
                                    OFF*
                                  </h3>
                                  <span className="text-xs font-normal">
                                    on International Hotels.
                                  </span>
                                  <div className="flex mt-5 font-medium">
                                    <Link
                                      to="/"
                                      type="button"
                                      className="bg-orange-500 rounded-full text-sm font-medium text-white px-5 py-2 inline-block ml-auto hover:bg-black"
                                    >
                                      Book Now
                                    </Link>
                                  </div>
                                </div>
                              </div>
                              <div className="special_tour_cart  p-4 my-5 mx-2">
                                <div className="special_tour_box_left w-28 text-center float-left mr-2">
                                  <img
                                    alt="spmage02"
                                    className="mb-1.5 mr-1.5"
                                    src={spmage02}
                                  />
                                  <span className="text-xs font-medium text-center">
                                    T&C’s Apply
                                  </span>
                                </div>
                                <div className="special_tour_box_right">
                                  <p className="text-xs font-medium uppercase">
                                    INTL HOTELS
                                  </p>
                                  <h3 className="text-xl font-semibold mb-5">
                                    Up to
                                    <span className="text-orange-500">
                                      30%
                                    </span>{" "}
                                    OFF*
                                  </h3>
                                  <span className="text-xs font-normal">
                                    on International Hotels.
                                  </span>
                                  <div className="flex mt-5 font-medium">
                                    <Link
                                      to="/"
                                      type="button"
                                      className="bg-orange-500 rounded-full text-sm font-medium text-white px-5 py-2 inline-block ml-auto hover:bg-black"
                                    >
                                      Book Now
                                    </Link>
                                  </div>
                                </div>
                              </div>
                              <div className="special_tour_cart  p-4 my-5 mx-2">
                                <div className="special_tour_box_left w-28 text-center float-left mr-2">
                                  <img
                                    alt="spmage03"
                                    className="mb-1.5 mr-1.5"
                                    src={spmage03}
                                  />
                                  <span className="text-xs font-medium text-center">
                                    T&C’s Apply
                                  </span>
                                </div>
                                <div className="special_tour_box_right">
                                  <p className="text-xs font-medium uppercase">
                                    INTL HOTELS
                                  </p>
                                  <h3 className="text-xl font-semibold mb-5">
                                    Up to{" "}
                                    <span className="text-orange-500">30%</span>
                                    OFF*
                                  </h3>
                                  <span className="text-xs font-normal">
                                    on International Hotels.
                                  </span>
                                  <div className="flex mt-5 font-medium">
                                    <Link
                                      to="/"
                                      type="button"
                                      className="bg-orange-500 rounded-full text-sm font-medium text-white px-5 py-2 inline-block ml-auto hover:bg-black"
                                    >
                                      Book Now
                                    </Link>
                                  </div>
                                </div>
                              </div>
                              <div className="special_tour_cart  p-4 my-5 mx-2">
                                <div className="special_tour_box_left w-28 text-center float-left mr-2">
                                  <img
                                    alt="spmage04"
                                    className="mb-1.5 mr-1.5"
                                    src={spmage04}
                                  />
                                  <span className="text-xs font-medium text-center">
                                    T&C’s Apply
                                  </span>
                                </div>
                                <div className="special_tour_box_right">
                                  <p className="text-xs font-medium uppercase">
                                    INTL HOTELS
                                  </p>
                                  <h3 className="text-xl font-semibold mb-5">
                                    Up to
                                    <span className="text-orange-500">40%</span>
                                    OFF*
                                  </h3>
                                  <span className="text-xs font-normal">
                                    on International Hotels.
                                  </span>
                                  <div className="flex mt-5 font-medium">
                                    <Link
                                      to="/"
                                      type="button"
                                      className="bg-orange-500 rounded-full text-sm font-medium text-white px-5 py-2 inline-block ml-auto hover:bg-black"
                                    >
                                      Book Now
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </TinySlider>
                          </div>
                        </div>
                      </div>
                      {/* END: Important Notes */}
                    </Tab.Panel>

                    <Tab.Panel className="leading-relaxed">
                      {/* BEGIN: Important Notes */}
                      <div className="col-span-12 mt-3 md:col-span-6 xl:col-span-12 2xl:mt-8 relative">
                        <div className="special_tours_button_container flex items-center h-10 intro-x">
                          <Button
                            data-carousel="important-notes"
                            data-target="prev"
                            className="px-2 mr-2 border-slate-300 text-slate-600 dark:text-slate-300 rounded-full hover:bg-orange-500 hover:text-white"
                            onClick={prevImportantNotes}
                          >
                            <Lucide icon="ChevronLeft" className="w-4 h-4" />
                          </Button>
                          <Button
                            data-carousel="important-notes"
                            data-target="next"
                            className="px-2 mr-2 border-slate-300 text-slate-600 dark:text-slate-300 rounded-full hover:bg-orange-500 hover:text-white"
                            onClick={nextImportantNotes}
                          >
                            <Lucide icon="ChevronRight" className="w-4 h-4" />
                          </Button>
                        </div>
                        <div className="intro-x">
                          <div className="">
                            <TinySlider
                              getRef={(el) => {
                                importantNotesRef.current = el;
                              }}
                              options={{
                                // container: ".my-slider",
                                // items: 3,
                                // gutter: 20,
                                // slideBy: 1,
                                // controlsPosition: "bottom",
                                // navPosition: "bottom",
                                // mouseDrag: true,
                                // autoplay: true,
                                // autoplayButtonOutput: false,
                                // controlsContainer: "#custom-control",

                                mouseDrag: true,
                                autoplay: false,
                                controls: false,
                                center: false,
                                items: 3,
                                slideBy: 1,
                                nav: false,
                                speed: 500,
                                responsive: {
                                  0: {
                                    items: 1,
                                    nav: false,
                                  },
                                  768: {
                                    items: 2,
                                    nav: true,
                                  },
                                  1440: {
                                    items: 3,
                                  },
                                },

                                // mouseDrag: true,
                                // autoplay: false,
                                // controls: false,
                                // center: false,
                                // items: 3,
                                // nav: false,
                                // speed: 500,
                                // responsive: {
                                //    600: {
                                //       items: 2,
                                //    },
                                // },
                              }}
                            >
                              <div className="special_tour_cart p-4 my-5 mx-2">
                                <div className="special_tour_box_left w-28 text-center float-left mr-2">
                                  <img
                                    alt="spmage01"
                                    className="mb-1.5 mr-1.5"
                                    src={spmage01}
                                  />
                                  <span className="text-xs font-medium text-center">
                                    T&C’s Apply
                                  </span>
                                </div>
                                <div className="special_tour_box_right">
                                  <p className="text-xs font-medium uppercase">
                                    INTL HOTELS
                                  </p>
                                  <h3 className="text-xl font-semibold mb-5">
                                    Up{" "}
                                    <span className="text-orange-500">to</span>{" "}
                                    30%OFF*
                                  </h3>
                                  <span className="text-xs font-normal">
                                    on International Hotels.
                                  </span>
                                  <div className="flex mt-5 font-medium">
                                    <Link
                                      to="/"
                                      type="button"
                                      className="bg-orange-500 rounded-full text-sm font-medium text-white px-5 py-2 inline-block ml-auto hover:bg-black"
                                    >
                                      Book Now
                                    </Link>
                                  </div>
                                </div>
                              </div>
                              <div className="special_tour_cart  p-4 my-5 mx-2">
                                <div className="special_tour_box_left w-28 text-center float-left mr-2">
                                  <img
                                    alt="spmage05"
                                    className="mb-1.5 mr-1.5"
                                    src={spmage05}
                                  />
                                  <span className="text-xs font-medium text-center">
                                    T&C’s Apply
                                  </span>
                                </div>
                                <div className="special_tour_box_right">
                                  <p className="text-xs font-medium uppercase">
                                    INTL HOTELS
                                  </p>
                                  <h3 className="text-xl font-semibold mb-5">
                                    Up to
                                    <span className="text-orange-500">
                                      40%
                                    </span>{" "}
                                    OFF*
                                  </h3>
                                  <span className="text-xs font-normal">
                                    on International Hotels.
                                  </span>
                                  <div className="flex mt-5 font-medium">
                                    <Link
                                      to="/"
                                      type="button"
                                      className="bg-orange-500 rounded-full text-sm font-medium text-white px-5 py-2 inline-block ml-auto hover:bg-black"
                                    >
                                      Book Now
                                    </Link>
                                  </div>
                                </div>
                              </div>
                              <div className="special_tour_cart  p-4 my-5 mx-2">
                                <div className="special_tour_box_left w-28 text-center float-left mr-2">
                                  <img
                                    alt="spmage02"
                                    className="mb-1.5 mr-1.5"
                                    src={spmage02}
                                  />
                                  <span className="text-xs font-medium text-center">
                                    T&C’s Apply
                                  </span>
                                </div>
                                <div className="special_tour_box_right">
                                  <p className="text-xs font-medium uppercase">
                                    INTL HOTELS
                                  </p>
                                  <h3 className="text-xl font-semibold mb-5">
                                    Up to
                                    <span className="text-orange-500">
                                      30%
                                    </span>{" "}
                                    OFF*
                                  </h3>
                                  <span className="text-xs font-normal">
                                    on International Hotels.
                                  </span>
                                  <div className="flex mt-5 font-medium">
                                    <Link
                                      to="/"
                                      type="button"
                                      className="bg-orange-500 rounded-full text-sm font-medium text-white px-5 py-2 inline-block ml-auto hover:bg-black"
                                    >
                                      Book Now
                                    </Link>
                                  </div>
                                </div>
                              </div>
                              <div className="special_tour_cart  p-4 my-5 mx-2">
                                <div className="special_tour_box_left w-28 text-center float-left mr-2">
                                  <img
                                    alt="spmage03"
                                    className="mb-1.5 mr-1.5"
                                    src={spmage03}
                                  />
                                  <span className="text-xs font-medium text-center">
                                    T&C’s Apply
                                  </span>
                                </div>
                                <div className="special_tour_box_right">
                                  <p className="text-xs font-medium uppercase">
                                    INTL HOTELS
                                  </p>
                                  <h3 className="text-xl font-semibold mb-5">
                                    Up to{" "}
                                    <span className="text-orange-500">30%</span>
                                    OFF*
                                  </h3>
                                  <span className="text-xs font-normal">
                                    on International Hotels.
                                  </span>
                                  <div className="flex mt-5 font-medium">
                                    <Link
                                      to="/"
                                      type="button"
                                      className="bg-orange-500 rounded-full text-sm font-medium text-white px-5 py-2 inline-block ml-auto hover:bg-black"
                                    >
                                      Book Now
                                    </Link>
                                  </div>
                                </div>
                              </div>
                              <div className="special_tour_cart  p-4 my-5 mx-2">
                                <div className="special_tour_box_left w-28 text-center float-left mr-2">
                                  <img
                                    alt="spmage04"
                                    className="mb-1.5 mr-1.5"
                                    src={spmage04}
                                  />
                                  <span className="text-xs font-medium text-center">
                                    T&C’s Apply
                                  </span>
                                </div>
                                <div className="special_tour_box_right">
                                  <p className="text-xs font-medium uppercase">
                                    INTL HOTELS
                                  </p>
                                  <h3 className="text-xl font-semibold mb-5">
                                    Up to
                                    <span className="text-orange-500">40%</span>
                                    OFF*
                                  </h3>
                                  <span className="text-xs font-normal">
                                    on International Hotels.
                                  </span>
                                  <div className="flex mt-5 font-medium">
                                    <Link
                                      to="/"
                                      type="button"
                                      className="bg-orange-500 rounded-full text-sm font-medium text-white px-5 py-2 inline-block ml-auto hover:bg-black"
                                    >
                                      Book Now
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </TinySlider>
                          </div>
                        </div>
                      </div>
                      {/* END: Important Notes */}
                    </Tab.Panel>

                    <Tab.Panel className="leading-relaxed">
                      {/* BEGIN: Important Notes */}
                      <div className="col-span-12 mt-3 md:col-span-6 xl:col-span-12 2xl:mt-8 relative">
                        <div className="special_tours_button_container flex items-center h-10 intro-x">
                          <Button
                            data-carousel="important-notes"
                            data-target="prev"
                            className="px-2 mr-2 border-slate-300 text-slate-600 dark:text-slate-300 rounded-full hover:bg-orange-500 hover:text-white"
                            onClick={prevImportantNotes}
                          >
                            <Lucide icon="ChevronLeft" className="w-4 h-4" />
                          </Button>
                          <Button
                            data-carousel="important-notes"
                            data-target="next"
                            className="px-2 mr-2 border-slate-300 text-slate-600 dark:text-slate-300 rounded-full hover:bg-orange-500 hover:text-white"
                            onClick={nextImportantNotes}
                          >
                            <Lucide icon="ChevronRight" className="w-4 h-4" />
                          </Button>
                        </div>
                        <div className="intro-x">
                          <div className="">
                            <TinySlider
                              getRef={(el) => {
                                importantNotesRef.current = el;
                              }}
                              options={{
                                // container: ".my-slider",
                                // items: 3,
                                // gutter: 20,
                                // slideBy: 1,
                                // controlsPosition: "bottom",
                                // navPosition: "bottom",
                                // mouseDrag: true,
                                // autoplay: true,
                                // autoplayButtonOutput: false,
                                // controlsContainer: "#custom-control",

                                mouseDrag: true,
                                autoplay: false,
                                controls: false,
                                center: false,
                                items: 3,
                                slideBy: 1,
                                nav: false,
                                speed: 500,
                                responsive: {
                                  0: {
                                    items: 1,
                                    nav: false,
                                  },
                                  768: {
                                    items: 2,
                                    nav: true,
                                  },
                                  1440: {
                                    items: 3,
                                  },
                                },

                                // mouseDrag: true,
                                // autoplay: false,
                                // controls: false,
                                // center: false,
                                // items: 3,
                                // nav: false,
                                // speed: 500,
                                // responsive: {
                                //    600: {
                                //       items: 2,
                                //    },
                                // },
                              }}
                            >
                              <div className="special_tour_cart p-4 my-5 mx-2">
                                <div className="special_tour_box_left w-28 text-center float-left mr-2">
                                  <img
                                    alt="spmage01"
                                    className="mb-1.5 mr-1.5"
                                    src={spmage01}
                                  />
                                  <span className="text-xs font-medium text-center">
                                    T&C’s Apply
                                  </span>
                                </div>
                                <div className="special_tour_box_right">
                                  <p className="text-xs font-medium uppercase">
                                    INTL HOTELS
                                  </p>
                                  <h3 className="text-xl font-semibold mb-5">
                                    Up{" "}
                                    <span className="text-orange-500">to</span>{" "}
                                    30%OFF*
                                  </h3>
                                  <span className="text-xs font-normal">
                                    on International Hotels.
                                  </span>
                                  <div className="flex mt-5 font-medium">
                                    <Link
                                      to="/"
                                      type="button"
                                      className="bg-orange-500 rounded-full text-sm font-medium text-white px-5 py-2 inline-block ml-auto hover:bg-black"
                                    >
                                      Book Now
                                    </Link>
                                  </div>
                                </div>
                              </div>
                              <div className="special_tour_cart  p-4 my-5 mx-2">
                                <div className="special_tour_box_left w-28 text-center float-left mr-2">
                                  <img
                                    alt="spmage05"
                                    className="mb-1.5 mr-1.5"
                                    src={spmage05}
                                  />
                                  <span className="text-xs font-medium text-center">
                                    T&C’s Apply
                                  </span>
                                </div>
                                <div className="special_tour_box_right">
                                  <p className="text-xs font-medium uppercase">
                                    INTL HOTELS
                                  </p>
                                  <h3 className="text-xl font-semibold mb-5">
                                    Up to
                                    <span className="text-orange-500">
                                      40%
                                    </span>{" "}
                                    OFF*
                                  </h3>
                                  <span className="text-xs font-normal">
                                    on International Hotels.
                                  </span>
                                  <div className="flex mt-5 font-medium">
                                    <Link
                                      to="/"
                                      type="button"
                                      className="bg-orange-500 rounded-full text-sm font-medium text-white px-5 py-2 inline-block ml-auto hover:bg-black"
                                    >
                                      Book Now
                                    </Link>
                                  </div>
                                </div>
                              </div>
                              <div className="special_tour_cart  p-4 my-5 mx-2">
                                <div className="special_tour_box_left w-28 text-center float-left mr-2">
                                  <img
                                    alt="spmage02"
                                    className="mb-1.5 mr-1.5"
                                    src={spmage02}
                                  />
                                  <span className="text-xs font-medium text-center">
                                    T&C’s Apply
                                  </span>
                                </div>
                                <div className="special_tour_box_right">
                                  <p className="text-xs font-medium uppercase">
                                    INTL HOTELS
                                  </p>
                                  <h3 className="text-xl font-semibold mb-5">
                                    Up to
                                    <span className="text-orange-500">
                                      30%
                                    </span>{" "}
                                    OFF*
                                  </h3>
                                  <span className="text-xs font-normal">
                                    on International Hotels.
                                  </span>
                                  <div className="flex mt-5 font-medium">
                                    <Link
                                      to="/"
                                      type="button"
                                      className="bg-orange-500 rounded-full text-sm font-medium text-white px-5 py-2 inline-block ml-auto hover:bg-black"
                                    >
                                      Book Now
                                    </Link>
                                  </div>
                                </div>
                              </div>
                              <div className="special_tour_cart  p-4 my-5 mx-2">
                                <div className="special_tour_box_left w-28 text-center float-left mr-2">
                                  <img
                                    alt="spmage03"
                                    className="mb-1.5 mr-1.5"
                                    src={spmage03}
                                  />
                                  <span className="text-xs font-medium text-center">
                                    T&C’s Apply
                                  </span>
                                </div>
                                <div className="special_tour_box_right">
                                  <p className="text-xs font-medium uppercase">
                                    INTL HOTELS
                                  </p>
                                  <h3 className="text-xl font-semibold mb-5">
                                    Up to{" "}
                                    <span className="text-orange-500">30%</span>
                                    OFF*
                                  </h3>
                                  <span className="text-xs font-normal">
                                    on International Hotels.
                                  </span>
                                  <div className="flex mt-5 font-medium">
                                    <Link
                                      to="/"
                                      type="button"
                                      className="bg-orange-500 rounded-full text-sm font-medium text-white px-5 py-2 inline-block ml-auto hover:bg-black"
                                    >
                                      Book Now
                                    </Link>
                                  </div>
                                </div>
                              </div>
                              <div className="special_tour_cart  p-4 my-5 mx-2">
                                <div className="special_tour_box_left w-28 text-center float-left mr-2">
                                  <img
                                    alt="spmage04"
                                    className="mb-1.5 mr-1.5"
                                    src={spmage04}
                                  />
                                  <span className="text-xs font-medium text-center">
                                    T&C’s Apply
                                  </span>
                                </div>
                                <div className="special_tour_box_right">
                                  <p className="text-xs font-medium uppercase">
                                    INTL HOTELS
                                  </p>
                                  <h3 className="text-xl font-semibold mb-5">
                                    Up to
                                    <span className="text-orange-500">40%</span>
                                    OFF*
                                  </h3>
                                  <span className="text-xs font-normal">
                                    on International Hotels.
                                  </span>
                                  <div className="flex mt-5 font-medium">
                                    <Link
                                      to="/"
                                      type="button"
                                      className="bg-orange-500 rounded-full text-sm font-medium text-white px-5 py-2 inline-block ml-auto hover:bg-black"
                                    >
                                      Book Now
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </TinySlider>
                          </div>
                        </div>
                      </div>
                      {/* END: Important Notes */}
                    </Tab.Panel>

                    <Tab.Panel className="leading-relaxed">
                      {/* BEGIN: Important Notes */}
                      <div className="col-span-12 mt-3 md:col-span-6 xl:col-span-12 2xl:mt-8 relative">
                        <div className="special_tours_button_container flex items-center h-10 intro-x">
                          <Button
                            data-carousel="important-notes"
                            data-target="prev"
                            className="px-2 mr-2 border-slate-300 text-slate-600 dark:text-slate-300 rounded-full hover:bg-orange-500 hover:text-white"
                            onClick={prevImportantNotes}
                          >
                            <Lucide icon="ChevronLeft" className="w-4 h-4" />
                          </Button>
                          <Button
                            data-carousel="important-notes"
                            data-target="next"
                            className="px-2 mr-2 border-slate-300 text-slate-600 dark:text-slate-300 rounded-full hover:bg-orange-500 hover:text-white"
                            onClick={nextImportantNotes}
                          >
                            <Lucide icon="ChevronRight" className="w-4 h-4" />
                          </Button>
                        </div>
                        <div className="intro-x">
                          <div className="">
                            <TinySlider
                              getRef={(el) => {
                                importantNotesRef.current = el;
                              }}
                              options={{
                                // container: ".my-slider",
                                // items: 3,
                                // gutter: 20,
                                // slideBy: 1,
                                // controlsPosition: "bottom",
                                // navPosition: "bottom",
                                // mouseDrag: true,
                                // autoplay: true,
                                // autoplayButtonOutput: false,
                                // controlsContainer: "#custom-control",

                                mouseDrag: true,
                                autoplay: false,
                                controls: false,
                                center: false,
                                items: 3,
                                slideBy: 1,
                                nav: false,
                                speed: 500,
                                responsive: {
                                  0: {
                                    items: 1,
                                    nav: false,
                                  },
                                  768: {
                                    items: 2,
                                    nav: true,
                                  },
                                  1440: {
                                    items: 3,
                                  },
                                },

                                // mouseDrag: true,
                                // autoplay: false,
                                // controls: false,
                                // center: false,
                                // items: 3,
                                // nav: false,
                                // speed: 500,
                                // responsive: {
                                //    600: {
                                //       items: 2,
                                //    },
                                // },
                              }}
                            >
                              <div className="special_tour_cart p-4 my-5 mx-2">
                                <div className="special_tour_box_left w-28 text-center float-left mr-2">
                                  <img
                                    alt="spmage01"
                                    className="mb-1.5 mr-1.5"
                                    src={spmage01}
                                  />
                                  <span className="text-xs font-medium text-center">
                                    T&C’s Apply
                                  </span>
                                </div>
                                <div className="special_tour_box_right">
                                  <p className="text-xs font-medium uppercase">
                                    INTL HOTELS
                                  </p>
                                  <h3 className="text-xl font-semibold mb-5">
                                    Up{" "}
                                    <span className="text-orange-500">to</span>{" "}
                                    30%OFF*
                                  </h3>
                                  <span className="text-xs font-normal">
                                    on International Hotels.
                                  </span>
                                  <div className="flex mt-5 font-medium">
                                    <Link
                                      to="/"
                                      type="button"
                                      className="bg-orange-500 rounded-full text-sm font-medium text-white px-5 py-2 inline-block ml-auto hover:bg-black"
                                    >
                                      Book Now
                                    </Link>
                                  </div>
                                </div>
                              </div>
                              <div className="special_tour_cart  p-4 my-5 mx-2">
                                <div className="special_tour_box_left w-28 text-center float-left mr-2">
                                  <img
                                    alt="spmage05"
                                    className="mb-1.5 mr-1.5"
                                    src={spmage05}
                                  />
                                  <span className="text-xs font-medium text-center">
                                    T&C’s Apply
                                  </span>
                                </div>
                                <div className="special_tour_box_right">
                                  <p className="text-xs font-medium uppercase">
                                    INTL HOTELS
                                  </p>
                                  <h3 className="text-xl font-semibold mb-5">
                                    Up to
                                    <span className="text-orange-500">
                                      40%
                                    </span>{" "}
                                    OFF*
                                  </h3>
                                  <span className="text-xs font-normal">
                                    on International Hotels.
                                  </span>
                                  <div className="flex mt-5 font-medium">
                                    <Link
                                      to="/"
                                      type="button"
                                      className="bg-orange-500 rounded-full text-sm font-medium text-white px-5 py-2 inline-block ml-auto hover:bg-black"
                                    >
                                      Book Now
                                    </Link>
                                  </div>
                                </div>
                              </div>
                              <div className="special_tour_cart  p-4 my-5 mx-2">
                                <div className="special_tour_box_left w-28 text-center float-left mr-2">
                                  <img
                                    alt="spmage02"
                                    className="mb-1.5 mr-1.5"
                                    src={spmage02}
                                  />
                                  <span className="text-xs font-medium text-center">
                                    T&C’s Apply
                                  </span>
                                </div>
                                <div className="special_tour_box_right">
                                  <p className="text-xs font-medium uppercase">
                                    INTL HOTELS
                                  </p>
                                  <h3 className="text-xl font-semibold mb-5">
                                    Up to
                                    <span className="text-orange-500">
                                      30%
                                    </span>{" "}
                                    OFF*
                                  </h3>
                                  <span className="text-xs font-normal">
                                    on International Hotels.
                                  </span>
                                  <div className="flex mt-5 font-medium">
                                    <Link
                                      to="/"
                                      type="button"
                                      className="bg-orange-500 rounded-full text-sm font-medium text-white px-5 py-2 inline-block ml-auto hover:bg-black"
                                    >
                                      Book Now
                                    </Link>
                                  </div>
                                </div>
                              </div>
                              <div className="special_tour_cart  p-4 my-5 mx-2">
                                <div className="special_tour_box_left w-28 text-center float-left mr-2">
                                  <img
                                    alt="spmage03"
                                    className="mb-1.5 mr-1.5"
                                    src={spmage03}
                                  />
                                  <span className="text-xs font-medium text-center">
                                    T&C’s Apply
                                  </span>
                                </div>
                                <div className="special_tour_box_right">
                                  <p className="text-xs font-medium uppercase">
                                    INTL HOTELS
                                  </p>
                                  <h3 className="text-xl font-semibold mb-5">
                                    Up to{" "}
                                    <span className="text-orange-500">30%</span>
                                    OFF*
                                  </h3>
                                  <span className="text-xs font-normal">
                                    on International Hotels.
                                  </span>
                                  <div className="flex mt-5 font-medium">
                                    <Link
                                      to="/"
                                      type="button"
                                      className="bg-orange-500 rounded-full text-sm font-medium text-white px-5 py-2 inline-block ml-auto hover:bg-black"
                                    >
                                      Book Now
                                    </Link>
                                  </div>
                                </div>
                              </div>
                              <div className="special_tour_cart  p-4 my-5 mx-2">
                                <div className="special_tour_box_left w-28 text-center float-left mr-2">
                                  <img
                                    alt="spmage04"
                                    className="mb-1.5 mr-1.5"
                                    src={spmage04}
                                  />
                                  <span className="text-xs font-medium text-center">
                                    T&C’s Apply
                                  </span>
                                </div>
                                <div className="special_tour_box_right">
                                  <p className="text-xs font-medium uppercase">
                                    INTL HOTELS
                                  </p>
                                  <h3 className="text-xl font-semibold mb-5">
                                    Up to
                                    <span className="text-orange-500">40%</span>
                                    OFF*
                                  </h3>
                                  <span className="text-xs font-normal">
                                    on International Hotels.
                                  </span>
                                  <div className="flex mt-5 font-medium">
                                    <Link
                                      to="/"
                                      type="button"
                                      className="bg-orange-500 rounded-full text-sm font-medium text-white px-5 py-2 inline-block ml-auto hover:bg-black"
                                    >
                                      Book Now
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </TinySlider>
                          </div>
                        </div>
                      </div>
                      {/* END: Important Notes */}
                    </Tab.Panel>

                    <Tab.Panel className="leading-relaxed">
                      {/* BEGIN: Important Notes */}
                      <div className="col-span-12 mt-3 md:col-span-6 xl:col-span-12 2xl:mt-8 relative">
                        <div className="special_tours_button_container flex items-center h-10 intro-x">
                          <Button
                            data-carousel="important-notes"
                            data-target="prev"
                            className="px-2 mr-2 border-slate-300 text-slate-600 dark:text-slate-300 rounded-full hover:bg-orange-500 hover:text-white"
                            onClick={prevImportantNotes}
                          >
                            <Lucide icon="ChevronLeft" className="w-4 h-4" />
                          </Button>
                          <Button
                            data-carousel="important-notes"
                            data-target="next"
                            className="px-2 mr-2 border-slate-300 text-slate-600 dark:text-slate-300 rounded-full hover:bg-orange-500 hover:text-white"
                            onClick={nextImportantNotes}
                          >
                            <Lucide icon="ChevronRight" className="w-4 h-4" />
                          </Button>
                        </div>
                        <div className="intro-x">
                          <div className="">
                            <TinySlider
                              getRef={(el) => {
                                importantNotesRef.current = el;
                              }}
                              options={{
                                // container: ".my-slider",
                                // items: 3,
                                // gutter: 20,
                                // slideBy: 1,
                                // controlsPosition: "bottom",
                                // navPosition: "bottom",
                                // mouseDrag: true,
                                // autoplay: true,
                                // autoplayButtonOutput: false,
                                // controlsContainer: "#custom-control",

                                mouseDrag: true,
                                autoplay: false,
                                controls: false,
                                center: false,
                                items: 3,
                                slideBy: 1,
                                nav: false,
                                speed: 500,
                                responsive: {
                                  0: {
                                    items: 1,
                                    nav: false,
                                  },
                                  768: {
                                    items: 2,
                                    nav: true,
                                  },
                                  1440: {
                                    items: 3,
                                  },
                                },

                                // mouseDrag: true,
                                // autoplay: false,
                                // controls: false,
                                // center: false,
                                // items: 3,
                                // nav: false,
                                // speed: 500,
                                // responsive: {
                                //    600: {
                                //       items: 2,
                                //    },
                                // },
                              }}
                            >
                              <div className="special_tour_cart p-4 my-5 mx-2">
                                <div className="special_tour_box_left w-28 text-center float-left mr-2">
                                  <img
                                    alt="spmage01"
                                    className="mb-1.5 mr-1.5"
                                    src={spmage01}
                                  />
                                  <span className="text-xs font-medium text-center">
                                    T&C’s Apply
                                  </span>
                                </div>
                                <div className="special_tour_box_right">
                                  <p className="text-xs font-medium uppercase">
                                    INTL HOTELS
                                  </p>
                                  <h3 className="text-xl font-semibold mb-5">
                                    Up{" "}
                                    <span className="text-orange-500">to</span>{" "}
                                    30%OFF*
                                  </h3>
                                  <span className="text-xs font-normal">
                                    on International Hotels.
                                  </span>
                                  <div className="flex mt-5 font-medium">
                                    <Link
                                      to="/"
                                      type="button"
                                      className="bg-orange-500 rounded-full text-sm font-medium text-white px-5 py-2 inline-block ml-auto hover:bg-black"
                                    >
                                      Book Now
                                    </Link>
                                  </div>
                                </div>
                              </div>
                              <div className="special_tour_cart  p-4 my-5 mx-2">
                                <div className="special_tour_box_left w-28 text-center float-left mr-2">
                                  <img
                                    alt="spmage05"
                                    className="mb-1.5 mr-1.5"
                                    src={spmage05}
                                  />
                                  <span className="text-xs font-medium text-center">
                                    T&C’s Apply
                                  </span>
                                </div>
                                <div className="special_tour_box_right">
                                  <p className="text-xs font-medium uppercase">
                                    INTL HOTELS
                                  </p>
                                  <h3 className="text-xl font-semibold mb-5">
                                    Up to
                                    <span className="text-orange-500">
                                      40%
                                    </span>{" "}
                                    OFF*
                                  </h3>
                                  <span className="text-xs font-normal">
                                    on International Hotels.
                                  </span>
                                  <div className="flex mt-5 font-medium">
                                    <Link
                                      to="/"
                                      type="button"
                                      className="bg-orange-500 rounded-full text-sm font-medium text-white px-5 py-2 inline-block ml-auto hover:bg-black"
                                    >
                                      Book Now
                                    </Link>
                                  </div>
                                </div>
                              </div>
                              <div className="special_tour_cart  p-4 my-5 mx-2">
                                <div className="special_tour_box_left w-28 text-center float-left mr-2">
                                  <img
                                    alt="spmage02"
                                    className="mb-1.5 mr-1.5"
                                    src={spmage02}
                                  />
                                  <span className="text-xs font-medium text-center">
                                    T&C’s Apply
                                  </span>
                                </div>
                                <div className="special_tour_box_right">
                                  <p className="text-xs font-medium uppercase">
                                    INTL HOTELS
                                  </p>
                                  <h3 className="text-xl font-semibold mb-5">
                                    Up to
                                    <span className="text-orange-500">
                                      30%
                                    </span>{" "}
                                    OFF*
                                  </h3>
                                  <span className="text-xs font-normal">
                                    on International Hotels.
                                  </span>
                                  <div className="flex mt-5 font-medium">
                                    <Link
                                      to="/"
                                      type="button"
                                      className="bg-orange-500 rounded-full text-sm font-medium text-white px-5 py-2 inline-block ml-auto hover:bg-black"
                                    >
                                      Book Now
                                    </Link>
                                  </div>
                                </div>
                              </div>
                              <div className="special_tour_cart  p-4 my-5 mx-2">
                                <div className="special_tour_box_left w-28 text-center float-left mr-2">
                                  <img
                                    alt="spmage03"
                                    className="mb-1.5 mr-1.5"
                                    src={spmage03}
                                  />
                                  <span className="text-xs font-medium text-center">
                                    T&C’s Apply
                                  </span>
                                </div>
                                <div className="special_tour_box_right">
                                  <p className="text-xs font-medium uppercase">
                                    INTL HOTELS
                                  </p>
                                  <h3 className="text-xl font-semibold mb-5">
                                    Up to{" "}
                                    <span className="text-orange-500">30%</span>
                                    OFF*
                                  </h3>
                                  <span className="text-xs font-normal">
                                    on International Hotels.
                                  </span>
                                  <div className="flex mt-5 font-medium">
                                    <Link
                                      to="/"
                                      type="button"
                                      className="bg-orange-500 rounded-full text-sm font-medium text-white px-5 py-2 inline-block ml-auto hover:bg-black"
                                    >
                                      Book Now
                                    </Link>
                                  </div>
                                </div>
                              </div>
                              <div className="special_tour_cart  p-4 my-5 mx-2">
                                <div className="special_tour_box_left w-28 text-center float-left mr-2">
                                  <img
                                    alt="spmage04"
                                    className="mb-1.5 mr-1.5"
                                    src={spmage04}
                                  />
                                  <span className="text-xs font-medium text-center">
                                    T&C’s Apply
                                  </span>
                                </div>
                                <div className="special_tour_box_right">
                                  <p className="text-xs font-medium uppercase">
                                    INTL HOTELS
                                  </p>
                                  <h3 className="text-xl font-semibold mb-5">
                                    Up to
                                    <span className="text-orange-500">40%</span>
                                    OFF*
                                  </h3>
                                  <span className="text-xs font-normal">
                                    on International Hotels.
                                  </span>
                                  <div className="flex mt-5 font-medium">
                                    <Link
                                      to="/"
                                      type="button"
                                      className="bg-orange-500 rounded-full text-sm font-medium text-white px-5 py-2 inline-block ml-auto hover:bg-black"
                                    >
                                      Book Now
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </TinySlider>
                          </div>
                        </div>
                      </div>
                      {/* END: Important Notes */}
                    </Tab.Panel>

                    <Tab.Panel className="leading-relaxed">
                      {/* BEGIN: Important Notes */}
                      <div className="col-span-12 mt-3 md:col-span-6 xl:col-span-12 2xl:mt-8 relative">
                        <div className="special_tours_button_container flex items-center h-10 intro-x">
                          <Button
                            data-carousel="important-notes"
                            data-target="prev"
                            className="px-2 mr-2 border-slate-300 text-slate-600 dark:text-slate-300 rounded-full hover:bg-orange-500 hover:text-white"
                            onClick={prevImportantNotes}
                          >
                            <Lucide icon="ChevronLeft" className="w-4 h-4" />
                          </Button>
                          <Button
                            data-carousel="important-notes"
                            data-target="next"
                            className="px-2 mr-2 border-slate-300 text-slate-600 dark:text-slate-300 rounded-full hover:bg-orange-500 hover:text-white"
                            onClick={nextImportantNotes}
                          >
                            <Lucide icon="ChevronRight" className="w-4 h-4" />
                          </Button>
                        </div>
                        <div className="intro-x">
                          <div className="">
                            <TinySlider
                              getRef={(el) => {
                                importantNotesRef.current = el;
                              }}
                              options={{
                                // container: ".my-slider",
                                // items: 3,
                                // gutter: 20,
                                // slideBy: 1,
                                // controlsPosition: "bottom",
                                // navPosition: "bottom",
                                // mouseDrag: true,
                                // autoplay: true,
                                // autoplayButtonOutput: false,
                                // controlsContainer: "#custom-control",

                                mouseDrag: true,
                                autoplay: false,
                                controls: false,
                                center: false,
                                items: 3,
                                slideBy: 1,
                                nav: false,
                                speed: 500,
                                responsive: {
                                  0: {
                                    items: 1,
                                    nav: false,
                                  },
                                  768: {
                                    items: 2,
                                    nav: true,
                                  },
                                  1440: {
                                    items: 3,
                                  },
                                },

                                // mouseDrag: true,
                                // autoplay: false,
                                // controls: false,
                                // center: false,
                                // items: 3,
                                // nav: false,
                                // speed: 500,
                                // responsive: {
                                //    600: {
                                //       items: 2,
                                //    },
                                // },
                              }}
                            >
                              <div className="special_tour_cart p-4 my-5 mx-2">
                                <div className="special_tour_box_left w-28 text-center float-left mr-2">
                                  <img
                                    alt="spmage01"
                                    className="mb-1.5 mr-1.5"
                                    src={spmage01}
                                  />
                                  <span className="text-xs font-medium text-center">
                                    T&C’s Apply
                                  </span>
                                </div>
                                <div className="special_tour_box_right">
                                  <p className="text-xs font-medium uppercase">
                                    INTL HOTELS
                                  </p>
                                  <h3 className="text-xl font-semibold mb-5">
                                    Up{" "}
                                    <span className="text-orange-500">to</span>{" "}
                                    30%OFF*
                                  </h3>
                                  <span className="text-xs font-normal">
                                    on International Hotels.
                                  </span>
                                  <div className="flex mt-5 font-medium">
                                    <Link
                                      to="/"
                                      type="button"
                                      className="bg-orange-500 rounded-full text-sm font-medium text-white px-5 py-2 inline-block ml-auto hover:bg-black"
                                    >
                                      Book Now
                                    </Link>
                                  </div>
                                </div>
                              </div>
                              <div className="special_tour_cart  p-4 my-5 mx-2">
                                <div className="special_tour_box_left w-28 text-center float-left mr-2">
                                  <img
                                    alt="spmage05"
                                    className="mb-1.5 mr-1.5"
                                    src={spmage05}
                                  />
                                  <span className="text-xs font-medium text-center">
                                    T&C’s Apply
                                  </span>
                                </div>
                                <div className="special_tour_box_right">
                                  <p className="text-xs font-medium uppercase">
                                    INTL HOTELS
                                  </p>
                                  <h3 className="text-xl font-semibold mb-5">
                                    Up to
                                    <span className="text-orange-500">
                                      40%
                                    </span>{" "}
                                    OFF*
                                  </h3>
                                  <span className="text-xs font-normal">
                                    on International Hotels.
                                  </span>
                                  <div className="flex mt-5 font-medium">
                                    <Link
                                      to="/"
                                      type="button"
                                      className="bg-orange-500 rounded-full text-sm font-medium text-white px-5 py-2 inline-block ml-auto hover:bg-black"
                                    >
                                      Book Now
                                    </Link>
                                  </div>
                                </div>
                              </div>
                              <div className="special_tour_cart  p-4 my-5 mx-2">
                                <div className="special_tour_box_left w-28 text-center float-left mr-2">
                                  <img
                                    alt="spmage02"
                                    className="mb-1.5 mr-1.5"
                                    src={spmage02}
                                  />
                                  <span className="text-xs font-medium text-center">
                                    T&C’s Apply
                                  </span>
                                </div>
                                <div className="special_tour_box_right">
                                  <p className="text-xs font-medium uppercase">
                                    INTL HOTELS
                                  </p>
                                  <h3 className="text-xl font-semibold mb-5">
                                    Up to
                                    <span className="text-orange-500">
                                      30%
                                    </span>{" "}
                                    OFF*
                                  </h3>
                                  <span className="text-xs font-normal">
                                    on International Hotels.
                                  </span>
                                  <div className="flex mt-5 font-medium">
                                    <Link
                                      to="/"
                                      type="button"
                                      className="bg-orange-500 rounded-full text-sm font-medium text-white px-5 py-2 inline-block ml-auto hover:bg-black"
                                    >
                                      Book Now
                                    </Link>
                                  </div>
                                </div>
                              </div>
                              <div className="special_tour_cart  p-4 my-5 mx-2">
                                <div className="special_tour_box_left w-28 text-center float-left mr-2">
                                  <img
                                    alt="spmage03"
                                    className="mb-1.5 mr-1.5"
                                    src={spmage03}
                                  />
                                  <span className="text-xs font-medium text-center">
                                    T&C’s Apply
                                  </span>
                                </div>
                                <div className="special_tour_box_right">
                                  <p className="text-xs font-medium uppercase">
                                    INTL HOTELS
                                  </p>
                                  <h3 className="text-xl font-semibold mb-5">
                                    Up to{" "}
                                    <span className="text-orange-500">30%</span>
                                    OFF*
                                  </h3>
                                  <span className="text-xs font-normal">
                                    on International Hotels.
                                  </span>
                                  <div className="flex mt-5 font-medium">
                                    <Link
                                      to="/"
                                      type="button"
                                      className="bg-orange-500 rounded-full text-sm font-medium text-white px-5 py-2 inline-block ml-auto hover:bg-black"
                                    >
                                      Book Now
                                    </Link>
                                  </div>
                                </div>
                              </div>
                              <div className="special_tour_cart  p-4 my-5 mx-2">
                                <div className="special_tour_box_left w-28 text-center float-left mr-2">
                                  <img
                                    alt="spmage04"
                                    className="mb-1.5 mr-1.5"
                                    src={spmage04}
                                  />
                                  <span className="text-xs font-medium text-center">
                                    T&C’s Apply
                                  </span>
                                </div>
                                <div className="special_tour_box_right">
                                  <p className="text-xs font-medium uppercase">
                                    INTL HOTELS
                                  </p>
                                  <h3 className="text-xl font-semibold mb-5">
                                    Up to
                                    <span className="text-orange-500">40%</span>
                                    OFF*
                                  </h3>
                                  <span className="text-xs font-normal">
                                    on International Hotels.
                                  </span>
                                  <div className="flex mt-5 font-medium">
                                    <Link
                                      to="/"
                                      type="button"
                                      className="bg-orange-500 rounded-full text-sm font-medium text-white px-5 py-2 inline-block ml-auto hover:bg-black"
                                    >
                                      Book Now
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </TinySlider>
                          </div>
                        </div>
                      </div>
                      {/* END: Important Notes */}
                    </Tab.Panel>
                  </Tab.Panels>
                </Tab.Group>
              </div>
            </div>
          </div>
          <div className="trip_by_destination_section mb-14 md:mb-8 md:p-4 lg:p-4 lg:mb-14">
            <div className="container">
              <h2 className="text-3xl font-bold text-black text-center mb-3">
                Trip By Destination
              </h2>
              <p className="text-sm font-medium text-neutral-500 text-center mb-6">
                World's leading tour and travels Booking website,Over 20,000
                packages worldwide.
              </p>

              <div className="trip_by_destination_list">
                <div className="grid gap-x-8 gap-y-4 grid-cols-1 mb-8 md:grid-cols-3">
                  <ItinerarySnippetLarge tourName="This is for testing"></ItinerarySnippetLarge>

                  <div className="w-full rounded-md mx-0 md:mx-1 lg:mx-1">
                    <div
                      className="trip_by_destination_list_img rounded-t-lg bg-cover h-72 bg-center bg-no-repeat"
                      style={{ backgroundImage: `url(${uploadImg})` }}
                    >
                      <div className="flex items-center justify-center">
                        <div className="overflow-hidden cursor-pointer relative group w-full h-72">
                          <div className="package_duration absolute top-7 right-0 bg-black py-2 px-6">
                            <p className="text-white">3 Nights 4 Days</p>
                          </div>
                          <div className="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/100 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-0 text-white flex items-end">
                            <div className="pt-2">
                              <div className="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                                <div className="font-bold text-xl">
                                  Hilighted place
                                </div>

                                <div className="opacity-100 text-sm ">
                                  <ul className="pb-16">
                                    <li className="w-2/4 float-left mb-2 flex">
                                      <Lucide
                                        icon="ChevronRight"
                                        className="w-5 h-5 pr-0.5"
                                      />{" "}
                                      Lachen
                                    </li>
                                    <li className="w-2/4 float-left mb-2 flex">
                                      <Lucide
                                        icon="ChevronRight"
                                        className="w-5 h-5 pr-0.5"
                                      />{" "}
                                      Lachung
                                    </li>
                                    <li className="w-2/4 float-left mb-2 flex">
                                      <Lucide
                                        icon="ChevronRight"
                                        className="w-5 h-5 pr-0.5"
                                      />{" "}
                                      Gurudongmar lake
                                    </li>
                                    <li className="w-2/4 float-left mb-2 flex">
                                      <Lucide
                                        icon="ChevronRight"
                                        className="w-5 h-5 pr-0.5"
                                      />{" "}
                                      Matnitop
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          &nbsp;
                        </div>
                      </div>
                    </div>
                    <div className="trip_by_destination_list_vont rounded-b-lg bg-black px-4 flex justify-between items-center">
                      <p className="text-white text-base py-3 w-3/4 lg:text-sm xl:text-base">
                        Sikkim days package 10days 9Nights
                      </p>
                      <div className="w-1/4">
                        <p className="text-white text-base text-right">
                          ₹{" "}
                          <span className="text-2xl font-semibold text-orange-500 lg:text-sm xl:text-xl 2xl:text-2xl">
                            50,000
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="w-full rounded-md mx-0 md:mx-1 lg:mx-1">
                    <div
                      className="trip_by_destination_list_img rounded-t-lg bg-cover h-72 bg-center bg-no-repeat"
                      style={{ backgroundImage: `url(${uploadImg})` }}
                    >
                      <div className="flex items-center justify-center">
                        <div className="overflow-hidden cursor-pointer relative group w-full h-72">
                          <div className="package_duration absolute top-7 right-0 bg-black py-2 px-6">
                            <p className="text-white">3 Nights 4 Days</p>
                          </div>
                          <div className="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/100 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-0 text-white flex items-end">
                            <div className="pt-2">
                              <div className="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                                <div className="font-bold text-xl">
                                  Hilighted place
                                </div>

                                <div className="opacity-100 text-sm ">
                                  <ul className="pb-16">
                                    <li className="w-2/4 float-left mb-2 flex">
                                      <Lucide
                                        icon="ChevronRight"
                                        className="w-5 h-5 pr-0.5"
                                      />{" "}
                                      Lachen
                                    </li>
                                    <li className="w-2/4 float-left mb-2 flex">
                                      <Lucide
                                        icon="ChevronRight"
                                        className="w-5 h-5 pr-0.5"
                                      />{" "}
                                      Lachung
                                    </li>
                                    <li className="w-2/4 float-left mb-2 flex">
                                      <Lucide
                                        icon="ChevronRight"
                                        className="w-5 h-5 pr-0.5"
                                      />{" "}
                                      Gurudongmar lake
                                    </li>
                                    <li className="w-2/4 float-left mb-2 flex">
                                      <Lucide
                                        icon="ChevronRight"
                                        className="w-5 h-5 pr-0.5"
                                      />{" "}
                                      Matnitop
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          &nbsp;
                        </div>
                      </div>
                    </div>
                    <div className="trip_by_destination_list_vont rounded-b-lg bg-black px-4 flex justify-between items-center">
                      <p className="text-white text-base py-3 w-3/4 lg:text-sm xl:text-base">
                        Sikkim days package 10days 9Nights
                      </p>
                      <div className="w-1/4">
                        <p className="text-white text-base text-right">
                          ₹{" "}
                          <span className="text-2xl font-semibold text-orange-500 lg:text-sm xl:text-xl 2xl:text-2xl">
                            50,000
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="w-full rounded-md mx-0 md:mx-1 lg:mx-1">
                    <div
                      className="trip_by_destination_list_img rounded-t-lg bg-cover h-72 bg-center bg-no-repeat"
                      style={{ backgroundImage: `url(${uploadImg})` }}
                    >
                      <div className="flex items-center justify-center">
                        <div className="overflow-hidden cursor-pointer relative group w-full h-72">
                          <div className="package_duration absolute top-7 right-0 bg-black py-2 px-6">
                            <p className="text-white">3 Nights 4 Days</p>
                          </div>
                          <div className="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/100 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-0 text-white flex items-end">
                            <div className="pt-2">
                              <div className="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                                <div className="font-bold text-xl">
                                  Hilighted place
                                </div>

                                <div className="opacity-100 text-sm ">
                                  <ul className="pb-16">
                                    <li className="w-2/4 float-left mb-2 flex">
                                      <Lucide
                                        icon="ChevronRight"
                                        className="w-5 h-5 pr-0.5"
                                      />{" "}
                                      Lachen
                                    </li>
                                    <li className="w-2/4 float-left mb-2 flex">
                                      <Lucide
                                        icon="ChevronRight"
                                        className="w-5 h-5 pr-0.5"
                                      />{" "}
                                      Lachung
                                    </li>
                                    <li className="w-2/4 float-left mb-2 flex">
                                      <Lucide
                                        icon="ChevronRight"
                                        className="w-5 h-5 pr-0.5"
                                      />{" "}
                                      Gurudongmar lake
                                    </li>
                                    <li className="w-2/4 float-left mb-2 flex">
                                      <Lucide
                                        icon="ChevronRight"
                                        className="w-5 h-5 pr-0.5"
                                      />{" "}
                                      Matnitop
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          &nbsp;
                        </div>
                      </div>
                    </div>
                    <div className="trip_by_destination_list_vont rounded-b-lg bg-black px-4 flex justify-between items-center">
                      <p className="text-white text-base py-3 w-3/4 lg:text-sm xl:text-base">
                        Sikkim days package 10days 9Nights
                      </p>
                      <div className="w-1/4">
                        <p className="text-white text-base text-right">
                          ₹{" "}
                          <span className="text-2xl font-semibold text-orange-500 lg:text-sm xl:text-xl 2xl:text-2xl">
                            50,000
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid gap-x-8 gap-y-4 grid-cols-1 mb-8 md:grid-cols-3">
                  <div className="w-full rounded-md mx-0 md:mx-1 lg:mx-1">
                    <div
                      className="trip_by_destination_list_img rounded-t-lg bg-cover h-72 bg-center bg-no-repeat"
                      style={{ backgroundImage: `url(${uploadImg})` }}
                    >
                      <div className="flex items-center justify-center">
                        <div className="overflow-hidden cursor-pointer relative group w-full h-72">
                          <div className="package_duration absolute top-7 right-0 bg-black py-2 px-6">
                            <p className="text-white">3 Nights 4 Days</p>
                          </div>
                          <div className="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/100 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-0 text-white flex items-end">
                            <div className="pt-2">
                              <div className="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                                <div className="font-bold text-xl">
                                  Hilighted place
                                </div>

                                <div className="opacity-100 text-sm ">
                                  <ul className="pb-16">
                                    <li className="w-2/4 float-left mb-2 flex">
                                      <Lucide
                                        icon="ChevronRight"
                                        className="w-5 h-5 pr-0.5"
                                      />{" "}
                                      Lachen
                                    </li>
                                    <li className="w-2/4 float-left mb-2 flex">
                                      <Lucide
                                        icon="ChevronRight"
                                        className="w-5 h-5 pr-0.5"
                                      />{" "}
                                      Lachung
                                    </li>
                                    <li className="w-2/4 float-left mb-2 flex">
                                      <Lucide
                                        icon="ChevronRight"
                                        className="w-5 h-5 pr-0.5"
                                      />{" "}
                                      Gurudongmar lake
                                    </li>
                                    <li className="w-2/4 float-left mb-2 flex">
                                      <Lucide
                                        icon="ChevronRight"
                                        className="w-5 h-5 pr-0.5"
                                      />{" "}
                                      Matnitop
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          &nbsp;
                        </div>
                      </div>
                    </div>
                    <div className="trip_by_destination_list_vont rounded-b-lg bg-black px-4 flex justify-between items-center">
                      <p className="text-white text-base py-3 w-3/4 lg:text-sm xl:text-base">
                        Sikkim days package 10days 9Nights
                      </p>
                      <div className="w-1/4">
                        <p className="text-white text-base text-right">
                          ₹{" "}
                          <span className="text-2xl font-semibold text-orange-500 lg:text-sm xl:text-xl 2xl:text-2xl">
                            50,000
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="w-full rounded-md mx-0 md:mx-1 lg:mx-1">
                    <div
                      className="trip_by_destination_list_img rounded-t-lg bg-cover h-72 bg-center bg-no-repeat"
                      style={{ backgroundImage: `url(${uploadImg})` }}
                    >
                      <div className="flex items-center justify-center">
                        <div className="overflow-hidden cursor-pointer relative group w-full h-72">
                          <div className="package_duration absolute top-7 right-0 bg-black py-2 px-6">
                            <p className="text-white">3 Nights 4 Days</p>
                          </div>
                          <div className="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/100 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-0 text-white flex items-end">
                            <div className="pt-2">
                              <div className="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                                <div className="font-bold text-xl">
                                  Hilighted place
                                </div>

                                <div className="opacity-100 text-sm ">
                                  <ul className="pb-16">
                                    <li className="w-2/4 float-left mb-2 flex">
                                      <Lucide
                                        icon="ChevronRight"
                                        className="w-5 h-5 pr-0.5"
                                      />{" "}
                                      Lachen
                                    </li>
                                    <li className="w-2/4 float-left mb-2 flex">
                                      <Lucide
                                        icon="ChevronRight"
                                        className="w-5 h-5 pr-0.5"
                                      />{" "}
                                      Lachung
                                    </li>
                                    <li className="w-2/4 float-left mb-2 flex">
                                      <Lucide
                                        icon="ChevronRight"
                                        className="w-5 h-5 pr-0.5"
                                      />{" "}
                                      Gurudongmar lake
                                    </li>
                                    <li className="w-2/4 float-left mb-2 flex">
                                      <Lucide
                                        icon="ChevronRight"
                                        className="w-5 h-5 pr-0.5"
                                      />{" "}
                                      Matnitop
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          &nbsp;
                        </div>
                      </div>
                    </div>
                    <div className="trip_by_destination_list_vont rounded-b-lg bg-black px-4 flex justify-between items-center">
                      <p className="text-white text-base py-3 w-3/4 lg:text-sm xl:text-base">
                        Sikkim days package 10days 9Nights
                      </p>
                      <div className="w-1/4">
                        <p className="text-white text-base text-right">
                          ₹{" "}
                          <span className="text-2xl font-semibold text-orange-500 lg:text-sm xl:text-xl 2xl:text-2xl">
                            50,000
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="w-full rounded-md mx-0 md:mx-1 lg:mx-1">
                    <div
                      className="trip_by_destination_list_img rounded-t-lg bg-cover h-72 bg-center bg-no-repeat"
                      style={{ backgroundImage: `url(${uploadImg})` }}
                    >
                      <div className="flex items-center justify-center">
                        <div className="overflow-hidden cursor-pointer relative group w-full h-72">
                          <div className="package_duration absolute top-7 right-0 bg-black py-2 px-6">
                            <p className="text-white">3 Nights 4 Days</p>
                          </div>
                          <div className="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/100 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-0 text-white flex items-end">
                            <div className="pt-2">
                              <div className="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                                <div className="font-bold text-xl">
                                  Hilighted place
                                </div>

                                <div className="opacity-100 text-sm ">
                                  <ul className="pb-16">
                                    <li className="w-2/4 float-left mb-2 flex">
                                      <Lucide
                                        icon="ChevronRight"
                                        className="w-5 h-5 pr-0.5"
                                      />{" "}
                                      Lachen
                                    </li>
                                    <li className="w-2/4 float-left mb-2 flex">
                                      <Lucide
                                        icon="ChevronRight"
                                        className="w-5 h-5 pr-0.5"
                                      />{" "}
                                      Lachung
                                    </li>
                                    <li className="w-2/4 float-left mb-2 flex">
                                      <Lucide
                                        icon="ChevronRight"
                                        className="w-5 h-5 pr-0.5"
                                      />{" "}
                                      Gurudongmar lake
                                    </li>
                                    <li className="w-2/4 float-left mb-2 flex">
                                      <Lucide
                                        icon="ChevronRight"
                                        className="w-5 h-5 pr-0.5"
                                      />{" "}
                                      Matnitop
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          &nbsp;
                        </div>
                      </div>
                    </div>
                    <div className="trip_by_destination_list_vont rounded-b-lg bg-black px-4 flex justify-between items-center">
                      <p className="text-white text-base py-3 w-3/4 lg:text-sm xl:text-base">
                        Sikkim days package 10days 9Nights
                      </p>
                      <div className="w-1/4">
                        <p className="text-white text-base text-right">
                          ₹{" "}
                          <span className="text-2xl font-semibold text-orange-500 lg:text-sm xl:text-xl 2xl:text-2xl">
                            50,000
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="view_more text-center mt-8">
                <Link
                  className="bg-orange-500 rounded-full text-base font-normal text-white px-7 py-2 inline-block hover:bg-black"
                  to="/"
                >
                  View More
                </Link>
              </div>
            </div>
          </div>
          <div className="tour_type_section mb-14 md:p-4 md:mb-4 lg:p-4 lg:mb-14">
            <div className="container">
              <div className="grid gap-x-8 gap-y-4 grid-cols-1 md:grid-cols-2">
                <div className="">
                  <h2 className="text-3xl font-bold text-black mb-3">
                    Domestic Tour
                  </h2>
                  <div className="grid gap-6 grid-cols-2">
                    <div className="relative">
                      <Link to="/">
                        <img
                          alt=""
                          className="rounded-lg w-full"
                          src={domesticImage01}
                        />
                        <div className="about_tour_price text-right absolute bottom-5 right-2.5">
                          <h3 className="text-lg font-semibold text-white">
                            Goa
                          </h3>
                          <p className="text-xs font-medium text-white">
                            Starting from $2500
                          </p>
                        </div>
                      </Link>
                    </div>
                    <div className="relative">
                      <Link to="/">
                        <img
                          alt=""
                          className="rounded-lg w-full"
                          src={domesticImage02}
                        />
                        <div className="about_tour_price text-right absolute bottom-5 right-2.5">
                          <h3 className="text-lg font-semibold text-white">
                            Chennai
                          </h3>
                          <p className="text-xs font-medium text-white">
                            Starting from $2500
                          </p>
                        </div>
                      </Link>
                    </div>
                    <div className="relative">
                      <Link to="/">
                        <img
                          alt=""
                          className="rounded-lg w-full"
                          src={domesticImage03}
                        />
                        <div className="about_tour_price text-right absolute bottom-5 right-2.5">
                          <h3 className="text-lg font-semibold text-white">
                            Delhi
                          </h3>
                          <p className="text-xs font-medium text-white">
                            Starting from $2500
                          </p>
                        </div>
                      </Link>
                    </div>
                    <div className="relative">
                      <Link to="/">
                        <img
                          alt=""
                          className="rounded-lg w-full"
                          src={domesticImage04}
                        />
                        <div className="about_tour_price text-right absolute bottom-5 right-2.5">
                          <h3 className="text-lg font-semibold text-white">
                            Bangalore
                          </h3>
                          <p className="text-xs font-medium text-white">
                            Starting from $2500
                          </p>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="">
                  <h2 className="text-3xl font-bold text-black mb-3">
                    International Tour
                  </h2>
                  <div className="grid gap-4 grid-cols-1 relative">
                    <Link to="/">
                      <div>
                        <img
                          alt=""
                          className="rounded-lg w-full"
                          src={internationalImage01}
                        />
                      </div>
                      <div className="about_tour_price text-right px-6 absolute bottom-12 right-0 left-0 w-full">
                        <div className="flex justify-between items-end w-full">
                          <div>
                            <p className="text-sm font-medium text-white">
                              10 Packages
                            </p>
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-white">
                              Washington
                            </h3>
                            <p className="text-xs font-medium text-white">
                              Starting from $2500
                            </p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="view_more text-center mt-8">
                <Link
                  className="bg-orange-500 rounded-full text-base font-normal text-white px-7 py-2 inline-block hover:bg-black"
                  to="/"
                >
                  View More
                </Link>
              </div>
            </div>
          </div>
          <div className="trip_by_category_section mb-6 md:p-4 lg:p-4">
            <div className="container">
              <h2 className="text-3xl font-bold text-black text-center mb-5">
                Trip By Category
              </h2>
              <div className="trip_by_category_tab_section shadow-xl p-8 rounded-lg">
                <Tab.Group>
                  <Tab.List
                    variant="link-tabs"
                    className="px-16 border-slate-300 border-solid border-b"
                  >
                    <Tab>
                      <Tab.Button className="w-full py-2" as="button">
                        Beach Vacations
                      </Tab.Button>
                    </Tab>
                    <Tab>
                      <Tab.Button className="w-full py-2" as="button">
                        Weekend Gateways
                      </Tab.Button>
                    </Tab>
                    <Tab>
                      <Tab.Button className="w-full py-2" as="button">
                        Mountains Calling
                      </Tab.Button>
                    </Tab>
                    <Tab>
                      <Tab.Button className="w-full py-2" as="button">
                        Stay Like Royals
                      </Tab.Button>
                    </Tab>
                    <Tab>
                      <Tab.Button className="w-full py-2" as="button">
                        Indian Pilgrimages
                      </Tab.Button>
                    </Tab>
                    <Tab>
                      <Tab.Button className="w-full py-2" as="button">
                        Party Destinations
                      </Tab.Button>
                    </Tab>
                  </Tab.List>
                  <Tab.Panels className="mt-5">
                    <Tab.Panel className="leading-relaxed">
                      <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
                        <div>
                          <div className="w-full rounded-md mx-0 md:mx-1 lg:mx-1">
                            <div
                              className="trip_by_destination_list_img rounded-lg bg-cover h-56 bg-center bg-no-repeat"
                              style={{
                                backgroundImage: `url(${tabImage01})`,
                              }}
                            >
                              <div className="flex items-center justify-center">
                                <div className="overflow-hidden cursor-pointer relative group w-full h-56 rounded-lg">
                                  <div className="package_duration absolute top-5 right-0 bg-black py-1 px-4">
                                    <p className="text-white">
                                      3 Nights 4 Days, ₹{" "}
                                      <span className="text-lg font-semibold text-orange-500 lg:text-sm xl:text-xl 2xl:text-lg">
                                        50,000
                                      </span>
                                    </p>
                                  </div>
                                  <div className="rounded-xl z-50 opacity-0 py-5 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/100 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-0 text-white flex items-end">
                                    <div className="pt-0">
                                      <div className="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                                        <div className="font-bold text-xl">
                                          Hilighted place
                                        </div>

                                        <div className="opacity-100 text-sm ">
                                          <ul className="pb-16">
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Lachen
                                            </li>
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Lachung
                                            </li>
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Gurudongmar lake
                                            </li>
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Matnitop
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  &nbsp;
                                </div>
                              </div>
                            </div>
                          </div>
                          <p className="text-center text-xl leading-8 font-medium">
                            Indonesia
                          </p>
                        </div>

                        <div>
                          <div className="w-full rounded-md mx-0 md:mx-1 lg:mx-1">
                            <div
                              className="trip_by_destination_list_img rounded-lg bg-cover h-56 bg-center bg-no-repeat"
                              style={{
                                backgroundImage: `url(${tabImage02})`,
                              }}
                            >
                              <div className="flex items-center justify-center">
                                <div className="overflow-hidden cursor-pointer relative group w-full h-56 rounded-lg">
                                  <div className="package_duration absolute top-5 right-0 bg-black py-1 px-4">
                                    <p className="text-white">
                                      3 Nights 4 Days, ₹{" "}
                                      <span className="text-lg font-semibold text-orange-500 lg:text-sm xl:text-xl 2xl:text-lg">
                                        50,000
                                      </span>
                                    </p>
                                  </div>
                                  <div className="rounded-xl z-50 opacity-0 py-5 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/100 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-0 text-white flex items-end">
                                    <div className="pt-0">
                                      <div className="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                                        <div className="font-bold text-xl">
                                          Hilighted place
                                        </div>

                                        <div className="opacity-100 text-sm ">
                                          <ul className="pb-16">
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Lachen
                                            </li>
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Lachung
                                            </li>
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Gurudongmar lake
                                            </li>
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Matnitop
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  &nbsp;
                                </div>
                              </div>
                            </div>
                          </div>
                          <p className="text-center text-xl leading-8 font-medium">
                            Golden Temple
                          </p>
                        </div>

                        <div>
                          <div className="w-full rounded-md mx-0 md:mx-1 lg:mx-1">
                            <div
                              className="trip_by_destination_list_img rounded-lg bg-cover h-56 bg-center bg-no-repeat"
                              style={{
                                backgroundImage: `url(${tabImage03})`,
                              }}
                            >
                              <div className="flex items-center justify-center">
                                <div className="overflow-hidden cursor-pointer relative group w-full h-56 rounded-lg">
                                  <div className="package_duration absolute top-5 right-0 bg-black py-1 px-4">
                                    <p className="text-white">
                                      3 Nights 4 Days, ₹{" "}
                                      <span className="text-lg font-semibold text-orange-500 lg:text-sm xl:text-xl 2xl:text-lg">
                                        50,000
                                      </span>
                                    </p>
                                  </div>
                                  <div className="rounded-xl z-50 opacity-0 py-5 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/100 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-0 text-white flex items-end">
                                    <div className="pt-0">
                                      <div className="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                                        <div className="font-bold text-xl">
                                          Hilighted place
                                        </div>

                                        <div className="opacity-100 text-sm ">
                                          <ul className="pb-16">
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Lachen
                                            </li>
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Lachung
                                            </li>
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Gurudongmar lake
                                            </li>
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Matnitop
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  &nbsp;
                                </div>
                              </div>
                            </div>
                          </div>
                          <p className="text-center text-xl leading-8 font-medium">
                            Thailand
                          </p>
                        </div>

                        <div>
                          <div className="w-full rounded-md mx-0 md:mx-1 lg:mx-1">
                            <div
                              className="trip_by_destination_list_img rounded-lg bg-cover h-56 bg-center bg-no-repeat"
                              style={{
                                backgroundImage: `url(${tabImage04})`,
                              }}
                            >
                              <div className="flex items-center justify-center">
                                <div className="overflow-hidden cursor-pointer relative group w-full h-56 rounded-lg">
                                  <div className="package_duration absolute top-5 right-0 bg-black py-1 px-4">
                                    <p className="text-white">
                                      3 Nights 4 Days, ₹{" "}
                                      <span className="text-lg font-semibold text-orange-500 lg:text-sm xl:text-xl 2xl:text-lg">
                                        50,000
                                      </span>
                                    </p>
                                  </div>
                                  <div className="rounded-xl z-50 opacity-0 py-5 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/100 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-0 text-white flex items-end">
                                    <div className="pt-0">
                                      <div className="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                                        <div className="font-bold text-xl">
                                          Hilighted place
                                        </div>

                                        <div className="opacity-100 text-sm ">
                                          <ul className="pb-16">
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Lachen
                                            </li>
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Lachung
                                            </li>
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Gurudongmar lake
                                            </li>
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Matnitop
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  &nbsp;
                                </div>
                              </div>
                            </div>
                          </div>
                          <p className="text-center text-xl leading-8 font-medium">
                            Vietnam
                          </p>
                        </div>

                        <div>
                          <div className="w-full rounded-md mx-0 md:mx-1 lg:mx-1">
                            <div
                              className="trip_by_destination_list_img rounded-lg bg-cover h-56 bg-center bg-no-repeat"
                              style={{
                                backgroundImage: `url(${tabImage01})`,
                              }}
                            >
                              <div className="flex items-center justify-center">
                                <div className="overflow-hidden cursor-pointer relative group w-full h-56 rounded-lg">
                                  <div className="package_duration absolute top-5 right-0 bg-black py-1 px-4">
                                    <p className="text-white">
                                      3 Nights 4 Days, ₹{" "}
                                      <span className="text-lg font-semibold text-orange-500 lg:text-sm xl:text-xl 2xl:text-lg">
                                        50,000
                                      </span>
                                    </p>
                                  </div>
                                  <div className="rounded-xl z-50 opacity-0 py-5 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/100 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-0 text-white flex items-end">
                                    <div className="pt-0">
                                      <div className="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                                        <div className="font-bold text-xl">
                                          Hilighted place
                                        </div>

                                        <div className="opacity-100 text-sm ">
                                          <ul className="pb-16">
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Lachen
                                            </li>
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Lachung
                                            </li>
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Gurudongmar lake
                                            </li>
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Matnitop
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  &nbsp;
                                </div>
                              </div>
                            </div>
                          </div>
                          <p className="text-center text-xl leading-8 font-medium">
                            Indonesia
                          </p>
                        </div>

                        <div>
                          <div className="w-full rounded-md mx-0 md:mx-1 lg:mx-1">
                            <div
                              className="trip_by_destination_list_img rounded-lg bg-cover h-56 bg-center bg-no-repeat"
                              style={{
                                backgroundImage: `url(${tabImage02})`,
                              }}
                            >
                              <div className="flex items-center justify-center">
                                <div className="overflow-hidden cursor-pointer relative group w-full h-56 rounded-lg">
                                  <div className="package_duration absolute top-5 right-0 bg-black py-1 px-4">
                                    <p className="text-white">
                                      3 Nights 4 Days, ₹{" "}
                                      <span className="text-lg font-semibold text-orange-500 lg:text-sm xl:text-xl 2xl:text-lg">
                                        50,000
                                      </span>
                                    </p>
                                  </div>
                                  <div className="rounded-xl z-50 opacity-0 py-5 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/100 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-0 text-white flex items-end">
                                    <div className="pt-0">
                                      <div className="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                                        <div className="font-bold text-xl">
                                          Hilighted place
                                        </div>

                                        <div className="opacity-100 text-sm ">
                                          <ul className="pb-16">
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Lachen
                                            </li>
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Lachung
                                            </li>
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Gurudongmar lake
                                            </li>
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Matnitop
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  &nbsp;
                                </div>
                              </div>
                            </div>
                          </div>
                          <p className="text-center text-xl leading-8 font-medium">
                            Golden Temple
                          </p>
                        </div>

                        <div>
                          <div className="w-full rounded-md mx-0 md:mx-1 lg:mx-1">
                            <div
                              className="trip_by_destination_list_img rounded-lg bg-cover h-56 bg-center bg-no-repeat"
                              style={{
                                backgroundImage: `url(${tabImage03})`,
                              }}
                            >
                              <div className="flex items-center justify-center">
                                <div className="overflow-hidden cursor-pointer relative group w-full h-56 rounded-lg">
                                  <div className="package_duration absolute top-5 right-0 bg-black py-1 px-4">
                                    <p className="text-white">
                                      3 Nights 4 Days, ₹{" "}
                                      <span className="text-lg font-semibold text-orange-500 lg:text-sm xl:text-xl 2xl:text-lg">
                                        50,000
                                      </span>
                                    </p>
                                  </div>
                                  <div className="rounded-xl z-50 opacity-0 py-5 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/100 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-0 text-white flex items-end">
                                    <div className="pt-0">
                                      <div className="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                                        <div className="font-bold text-xl">
                                          Hilighted place
                                        </div>

                                        <div className="opacity-100 text-sm ">
                                          <ul className="pb-16">
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Lachen
                                            </li>
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Lachung
                                            </li>
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Gurudongmar lake
                                            </li>
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Matnitop
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  &nbsp;
                                </div>
                              </div>
                            </div>
                          </div>
                          <p className="text-center text-xl leading-8 font-medium">
                            Thailand
                          </p>
                        </div>

                        <div>
                          <div className="w-full rounded-md mx-0 md:mx-1 lg:mx-1">
                            <div
                              className="trip_by_destination_list_img rounded-lg bg-cover h-56 bg-center bg-no-repeat"
                              style={{
                                backgroundImage: `url(${tabImage04})`,
                              }}
                            >
                              <div className="flex items-center justify-center">
                                <div className="overflow-hidden cursor-pointer relative group w-full h-56 rounded-lg">
                                  <div className="package_duration absolute top-5 right-0 bg-black py-1 px-4">
                                    <p className="text-white">
                                      3 Nights 4 Days, ₹{" "}
                                      <span className="text-lg font-semibold text-orange-500 lg:text-sm xl:text-xl 2xl:text-lg">
                                        50,000
                                      </span>
                                    </p>
                                  </div>
                                  <div className="rounded-xl z-50 opacity-0 py-5 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/100 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-0 text-white flex items-end">
                                    <div className="pt-0">
                                      <div className="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                                        <div className="font-bold text-xl">
                                          Hilighted place
                                        </div>

                                        <div className="opacity-100 text-sm ">
                                          <ul className="pb-16">
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Lachen
                                            </li>
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Lachung
                                            </li>
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Gurudongmar lake
                                            </li>
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Matnitop
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  &nbsp;
                                </div>
                              </div>
                            </div>
                          </div>
                          <p className="text-center text-xl leading-8 font-medium">
                            Vietnam
                          </p>
                        </div>
                      </div>
                    </Tab.Panel>

                    <Tab.Panel className="leading-relaxed">
                      <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
                        <div>
                          <div className="w-full rounded-md mx-0 md:mx-1 lg:mx-1">
                            <div
                              className="trip_by_destination_list_img rounded-lg bg-cover h-56 bg-center bg-no-repeat"
                              style={{
                                backgroundImage: `url(${tabImage01})`,
                              }}
                            >
                              <div className="flex items-center justify-center">
                                <div className="overflow-hidden cursor-pointer relative group w-full h-56 rounded-lg">
                                  <div className="package_duration absolute top-5 right-0 bg-black py-1 px-4">
                                    <p className="text-white">
                                      3 Nights 4 Days, ₹{" "}
                                      <span className="text-lg font-semibold text-orange-500 lg:text-sm xl:text-xl 2xl:text-lg">
                                        50,000
                                      </span>
                                    </p>
                                  </div>
                                  <div className="rounded-xl z-50 opacity-0 py-5 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/100 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-0 text-white flex items-end">
                                    <div className="pt-0">
                                      <div className="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                                        <div className="font-bold text-xl">
                                          Hilighted place
                                        </div>

                                        <div className="opacity-100 text-sm ">
                                          <ul className="pb-16">
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Lachen
                                            </li>
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Lachung
                                            </li>
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Gurudongmar lake
                                            </li>
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Matnitop
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  &nbsp;
                                </div>
                              </div>
                            </div>
                          </div>
                          <p className="text-center text-xl leading-8 font-medium">
                            Indonesia
                          </p>
                        </div>

                        <div>
                          <div className="w-full rounded-md mx-0 md:mx-1 lg:mx-1">
                            <div
                              className="trip_by_destination_list_img rounded-lg bg-cover h-56 bg-center bg-no-repeat"
                              style={{
                                backgroundImage: `url(${tabImage02})`,
                              }}
                            >
                              <div className="flex items-center justify-center">
                                <div className="overflow-hidden cursor-pointer relative group w-full h-56 rounded-lg">
                                  <div className="package_duration absolute top-5 right-0 bg-black py-1 px-4">
                                    <p className="text-white">
                                      3 Nights 4 Days, ₹{" "}
                                      <span className="text-lg font-semibold text-orange-500 lg:text-sm xl:text-xl 2xl:text-lg">
                                        50,000
                                      </span>
                                    </p>
                                  </div>
                                  <div className="rounded-xl z-50 opacity-0 py-5 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/100 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-0 text-white flex items-end">
                                    <div className="pt-0">
                                      <div className="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                                        <div className="font-bold text-xl">
                                          Hilighted place
                                        </div>

                                        <div className="opacity-100 text-sm ">
                                          <ul className="pb-16">
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Lachen
                                            </li>
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Lachung
                                            </li>
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Gurudongmar lake
                                            </li>
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Matnitop
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  &nbsp;
                                </div>
                              </div>
                            </div>
                          </div>
                          <p className="text-center text-xl leading-8 font-medium">
                            Golden Temple
                          </p>
                        </div>

                        <div>
                          <div className="w-full rounded-md mx-0 md:mx-1 lg:mx-1">
                            <div
                              className="trip_by_destination_list_img rounded-lg bg-cover h-56 bg-center bg-no-repeat"
                              style={{
                                backgroundImage: `url(${tabImage03})`,
                              }}
                            >
                              <div className="flex items-center justify-center">
                                <div className="overflow-hidden cursor-pointer relative group w-full h-56 rounded-lg">
                                  <div className="package_duration absolute top-5 right-0 bg-black py-1 px-4">
                                    <p className="text-white">
                                      3 Nights 4 Days, ₹{" "}
                                      <span className="text-lg font-semibold text-orange-500 lg:text-sm xl:text-xl 2xl:text-lg">
                                        50,000
                                      </span>
                                    </p>
                                  </div>
                                  <div className="rounded-xl z-50 opacity-0 py-5 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/100 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-0 text-white flex items-end">
                                    <div className="pt-0">
                                      <div className="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                                        <div className="font-bold text-xl">
                                          Hilighted place
                                        </div>

                                        <div className="opacity-100 text-sm ">
                                          <ul className="pb-16">
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Lachen
                                            </li>
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Lachung
                                            </li>
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Gurudongmar lake
                                            </li>
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Matnitop
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  &nbsp;
                                </div>
                              </div>
                            </div>
                          </div>
                          <p className="text-center text-xl leading-8 font-medium">
                            Thailand
                          </p>
                        </div>

                        <div>
                          <div className="w-full rounded-md mx-0 md:mx-1 lg:mx-1">
                            <div
                              className="trip_by_destination_list_img rounded-lg bg-cover h-56 bg-center bg-no-repeat"
                              style={{
                                backgroundImage: `url(${tabImage04})`,
                              }}
                            >
                              <div className="flex items-center justify-center">
                                <div className="overflow-hidden cursor-pointer relative group w-full h-56 rounded-lg">
                                  <div className="package_duration absolute top-5 right-0 bg-black py-1 px-4">
                                    <p className="text-white">
                                      3 Nights 4 Days, ₹{" "}
                                      <span className="text-lg font-semibold text-orange-500 lg:text-sm xl:text-xl 2xl:text-lg">
                                        50,000
                                      </span>
                                    </p>
                                  </div>
                                  <div className="rounded-xl z-50 opacity-0 py-5 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/100 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-0 text-white flex items-end">
                                    <div className="pt-0">
                                      <div className="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                                        <div className="font-bold text-xl">
                                          Hilighted place
                                        </div>

                                        <div className="opacity-100 text-sm ">
                                          <ul className="pb-16">
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Lachen
                                            </li>
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Lachung
                                            </li>
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Gurudongmar lake
                                            </li>
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Matnitop
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  &nbsp;
                                </div>
                              </div>
                            </div>
                          </div>
                          <p className="text-center text-xl leading-8 font-medium">
                            Vietnam
                          </p>
                        </div>

                        <div>
                          <div className="w-full rounded-md mx-0 md:mx-1 lg:mx-1">
                            <div
                              className="trip_by_destination_list_img rounded-lg bg-cover h-56 bg-center bg-no-repeat"
                              style={{
                                backgroundImage: `url(${tabImage01})`,
                              }}
                            >
                              <div className="flex items-center justify-center">
                                <div className="overflow-hidden cursor-pointer relative group w-full h-56 rounded-lg">
                                  <div className="package_duration absolute top-5 right-0 bg-black py-1 px-4">
                                    <p className="text-white">
                                      3 Nights 4 Days, ₹{" "}
                                      <span className="text-lg font-semibold text-orange-500 lg:text-sm xl:text-xl 2xl:text-lg">
                                        50,000
                                      </span>
                                    </p>
                                  </div>
                                  <div className="rounded-xl z-50 opacity-0 py-5 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/100 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-0 text-white flex items-end">
                                    <div className="pt-0">
                                      <div className="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                                        <div className="font-bold text-xl">
                                          Hilighted place
                                        </div>

                                        <div className="opacity-100 text-sm ">
                                          <ul className="pb-16">
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Lachen
                                            </li>
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Lachung
                                            </li>
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Gurudongmar lake
                                            </li>
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Matnitop
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  &nbsp;
                                </div>
                              </div>
                            </div>
                          </div>
                          <p className="text-center text-xl leading-8 font-medium">
                            Indonesia
                          </p>
                        </div>

                        <div>
                          <div className="w-full rounded-md mx-0 md:mx-1 lg:mx-1">
                            <div
                              className="trip_by_destination_list_img rounded-lg bg-cover h-56 bg-center bg-no-repeat"
                              style={{
                                backgroundImage: `url(${tabImage02})`,
                              }}
                            >
                              <div className="flex items-center justify-center">
                                <div className="overflow-hidden cursor-pointer relative group w-full h-56 rounded-lg">
                                  <div className="package_duration absolute top-5 right-0 bg-black py-1 px-4">
                                    <p className="text-white">
                                      3 Nights 4 Days, ₹{" "}
                                      <span className="text-lg font-semibold text-orange-500 lg:text-sm xl:text-xl 2xl:text-lg">
                                        50,000
                                      </span>
                                    </p>
                                  </div>
                                  <div className="rounded-xl z-50 opacity-0 py-5 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/100 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-0 text-white flex items-end">
                                    <div className="pt-0">
                                      <div className="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                                        <div className="font-bold text-xl">
                                          Hilighted place
                                        </div>

                                        <div className="opacity-100 text-sm ">
                                          <ul className="pb-16">
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Lachen
                                            </li>
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Lachung
                                            </li>
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Gurudongmar lake
                                            </li>
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Matnitop
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  &nbsp;
                                </div>
                              </div>
                            </div>
                          </div>
                          <p className="text-center text-xl leading-8 font-medium">
                            Golden Temple
                          </p>
                        </div>

                        <div>
                          <div className="w-full rounded-md mx-0 md:mx-1 lg:mx-1">
                            <div
                              className="trip_by_destination_list_img rounded-lg bg-cover h-56 bg-center bg-no-repeat"
                              style={{
                                backgroundImage: `url(${tabImage03})`,
                              }}
                            >
                              <div className="flex items-center justify-center">
                                <div className="overflow-hidden cursor-pointer relative group w-full h-56 rounded-lg">
                                  <div className="package_duration absolute top-5 right-0 bg-black py-1 px-4">
                                    <p className="text-white">
                                      3 Nights 4 Days, ₹{" "}
                                      <span className="text-lg font-semibold text-orange-500 lg:text-sm xl:text-xl 2xl:text-lg">
                                        50,000
                                      </span>
                                    </p>
                                  </div>
                                  <div className="rounded-xl z-50 opacity-0 py-5 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/100 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-0 text-white flex items-end">
                                    <div className="pt-0">
                                      <div className="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                                        <div className="font-bold text-xl">
                                          Hilighted place
                                        </div>

                                        <div className="opacity-100 text-sm ">
                                          <ul className="pb-16">
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Lachen
                                            </li>
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Lachung
                                            </li>
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Gurudongmar lake
                                            </li>
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Matnitop
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  &nbsp;
                                </div>
                              </div>
                            </div>
                          </div>
                          <p className="text-center text-xl leading-8 font-medium">
                            Thailand
                          </p>
                        </div>

                        <div>
                          <div className="w-full rounded-md mx-0 md:mx-1 lg:mx-1">
                            <div
                              className="trip_by_destination_list_img rounded-lg bg-cover h-56 bg-center bg-no-repeat"
                              style={{
                                backgroundImage: `url(${tabImage04})`,
                              }}
                            >
                              <div className="flex items-center justify-center">
                                <div className="overflow-hidden cursor-pointer relative group w-full h-56 rounded-lg">
                                  <div className="package_duration absolute top-5 right-0 bg-black py-1 px-4">
                                    <p className="text-white">
                                      3 Nights 4 Days, ₹{" "}
                                      <span className="text-lg font-semibold text-orange-500 lg:text-sm xl:text-xl 2xl:text-lg">
                                        50,000
                                      </span>
                                    </p>
                                  </div>
                                  <div className="rounded-xl z-50 opacity-0 py-5 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/100 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-0 text-white flex items-end">
                                    <div className="pt-0">
                                      <div className="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                                        <div className="font-bold text-xl">
                                          Hilighted place
                                        </div>

                                        <div className="opacity-100 text-sm ">
                                          <ul className="pb-16">
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Lachen
                                            </li>
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Lachung
                                            </li>
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Gurudongmar lake
                                            </li>
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Matnitop
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  &nbsp;
                                </div>
                              </div>
                            </div>
                          </div>
                          <p className="text-center text-xl leading-8 font-medium">
                            Vietnam
                          </p>
                        </div>
                      </div>
                    </Tab.Panel>

                    <Tab.Panel className="leading-relaxed">
                      <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
                        <div>
                          <div className="w-full rounded-md mx-0 md:mx-1 lg:mx-1">
                            <div
                              className="trip_by_destination_list_img rounded-lg bg-cover h-56 bg-center bg-no-repeat"
                              style={{
                                backgroundImage: `url(${tabImage01})`,
                              }}
                            >
                              <div className="flex items-center justify-center">
                                <div className="overflow-hidden cursor-pointer relative group w-full h-56 rounded-lg">
                                  <div className="package_duration absolute top-5 right-0 bg-black py-1 px-4">
                                    <p className="text-white">
                                      3 Nights 4 Days, ₹{" "}
                                      <span className="text-lg font-semibold text-orange-500 lg:text-sm xl:text-xl 2xl:text-lg">
                                        50,000
                                      </span>
                                    </p>
                                  </div>
                                  <div className="rounded-xl z-50 opacity-0 py-5 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/100 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-0 text-white flex items-end">
                                    <div className="pt-0">
                                      <div className="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                                        <div className="font-bold text-xl">
                                          Hilighted place
                                        </div>

                                        <div className="opacity-100 text-sm ">
                                          <ul className="pb-16">
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Lachen
                                            </li>
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Lachung
                                            </li>
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Gurudongmar lake
                                            </li>
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Matnitop
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  &nbsp;
                                </div>
                              </div>
                            </div>
                          </div>
                          <p className="text-center text-xl leading-8 font-medium">
                            Indonesia
                          </p>
                        </div>

                        <div>
                          <div className="w-full rounded-md mx-0 md:mx-1 lg:mx-1">
                            <div
                              className="trip_by_destination_list_img rounded-lg bg-cover h-56 bg-center bg-no-repeat"
                              style={{
                                backgroundImage: `url(${tabImage02})`,
                              }}
                            >
                              <div className="flex items-center justify-center">
                                <div className="overflow-hidden cursor-pointer relative group w-full h-56 rounded-lg">
                                  <div className="package_duration absolute top-5 right-0 bg-black py-1 px-4">
                                    <p className="text-white">
                                      3 Nights 4 Days, ₹{" "}
                                      <span className="text-lg font-semibold text-orange-500 lg:text-sm xl:text-xl 2xl:text-lg">
                                        50,000
                                      </span>
                                    </p>
                                  </div>
                                  <div className="rounded-xl z-50 opacity-0 py-5 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/100 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-0 text-white flex items-end">
                                    <div className="pt-0">
                                      <div className="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                                        <div className="font-bold text-xl">
                                          Hilighted place
                                        </div>

                                        <div className="opacity-100 text-sm ">
                                          <ul className="pb-16">
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Lachen
                                            </li>
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Lachung
                                            </li>
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Gurudongmar lake
                                            </li>
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Matnitop
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  &nbsp;
                                </div>
                              </div>
                            </div>
                          </div>
                          <p className="text-center text-xl leading-8 font-medium">
                            Golden Temple
                          </p>
                        </div>

                        <div>
                          <div className="w-full rounded-md mx-0 md:mx-1 lg:mx-1">
                            <div
                              className="trip_by_destination_list_img rounded-lg bg-cover h-56 bg-center bg-no-repeat"
                              style={{
                                backgroundImage: `url(${tabImage03})`,
                              }}
                            >
                              <div className="flex items-center justify-center">
                                <div className="overflow-hidden cursor-pointer relative group w-full h-56 rounded-lg">
                                  <div className="package_duration absolute top-5 right-0 bg-black py-1 px-4">
                                    <p className="text-white">
                                      3 Nights 4 Days, ₹{" "}
                                      <span className="text-lg font-semibold text-orange-500 lg:text-sm xl:text-xl 2xl:text-lg">
                                        50,000
                                      </span>
                                    </p>
                                  </div>
                                  <div className="rounded-xl z-50 opacity-0 py-5 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/100 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-0 text-white flex items-end">
                                    <div className="pt-0">
                                      <div className="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                                        <div className="font-bold text-xl">
                                          Hilighted place
                                        </div>

                                        <div className="opacity-100 text-sm ">
                                          <ul className="pb-16">
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Lachen
                                            </li>
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Lachung
                                            </li>
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Gurudongmar lake
                                            </li>
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Matnitop
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  &nbsp;
                                </div>
                              </div>
                            </div>
                          </div>
                          <p className="text-center text-xl leading-8 font-medium">
                            Thailand
                          </p>
                        </div>

                        <div>
                          <div className="w-full rounded-md mx-0 md:mx-1 lg:mx-1">
                            <div
                              className="trip_by_destination_list_img rounded-lg bg-cover h-56 bg-center bg-no-repeat"
                              style={{
                                backgroundImage: `url(${tabImage04})`,
                              }}
                            >
                              <div className="flex items-center justify-center">
                                <div className="overflow-hidden cursor-pointer relative group w-full h-56 rounded-lg">
                                  <div className="package_duration absolute top-5 right-0 bg-black py-1 px-4">
                                    <p className="text-white">
                                      3 Nights 4 Days, ₹{" "}
                                      <span className="text-lg font-semibold text-orange-500 lg:text-sm xl:text-xl 2xl:text-lg">
                                        50,000
                                      </span>
                                    </p>
                                  </div>
                                  <div className="rounded-xl z-50 opacity-0 py-5 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/100 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-0 text-white flex items-end">
                                    <div className="pt-0">
                                      <div className="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                                        <div className="font-bold text-xl">
                                          Hilighted place
                                        </div>

                                        <div className="opacity-100 text-sm ">
                                          <ul className="pb-16">
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Lachen
                                            </li>
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Lachung
                                            </li>
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Gurudongmar lake
                                            </li>
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Matnitop
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  &nbsp;
                                </div>
                              </div>
                            </div>
                          </div>
                          <p className="text-center text-xl leading-8 font-medium">
                            Vietnam
                          </p>
                        </div>

                        <div>
                          <div className="w-full rounded-md mx-0 md:mx-1 lg:mx-1">
                            <div
                              className="trip_by_destination_list_img rounded-lg bg-cover h-56 bg-center bg-no-repeat"
                              style={{
                                backgroundImage: `url(${tabImage01})`,
                              }}
                            >
                              <div className="flex items-center justify-center">
                                <div className="overflow-hidden cursor-pointer relative group w-full h-56 rounded-lg">
                                  <div className="package_duration absolute top-5 right-0 bg-black py-1 px-4">
                                    <p className="text-white">
                                      3 Nights 4 Days, ₹{" "}
                                      <span className="text-lg font-semibold text-orange-500 lg:text-sm xl:text-xl 2xl:text-lg">
                                        50,000
                                      </span>
                                    </p>
                                  </div>
                                  <div className="rounded-xl z-50 opacity-0 py-5 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/100 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-0 text-white flex items-end">
                                    <div className="pt-0">
                                      <div className="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                                        <div className="font-bold text-xl">
                                          Hilighted place
                                        </div>

                                        <div className="opacity-100 text-sm ">
                                          <ul className="pb-16">
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Lachen
                                            </li>
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Lachung
                                            </li>
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Gurudongmar lake
                                            </li>
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Matnitop
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  &nbsp;
                                </div>
                              </div>
                            </div>
                          </div>
                          <p className="text-center text-xl leading-8 font-medium">
                            Indonesia
                          </p>
                        </div>

                        <div>
                          <div className="w-full rounded-md mx-0 md:mx-1 lg:mx-1">
                            <div
                              className="trip_by_destination_list_img rounded-lg bg-cover h-56 bg-center bg-no-repeat"
                              style={{
                                backgroundImage: `url(${tabImage02})`,
                              }}
                            >
                              <div className="flex items-center justify-center">
                                <div className="overflow-hidden cursor-pointer relative group w-full h-56 rounded-lg">
                                  <div className="package_duration absolute top-5 right-0 bg-black py-1 px-4">
                                    <p className="text-white">
                                      3 Nights 4 Days, ₹{" "}
                                      <span className="text-lg font-semibold text-orange-500 lg:text-sm xl:text-xl 2xl:text-lg">
                                        50,000
                                      </span>
                                    </p>
                                  </div>
                                  <div className="rounded-xl z-50 opacity-0 py-5 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/100 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-0 text-white flex items-end">
                                    <div className="pt-0">
                                      <div className="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                                        <div className="font-bold text-xl">
                                          Hilighted place
                                        </div>

                                        <div className="opacity-100 text-sm ">
                                          <ul className="pb-16">
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Lachen
                                            </li>
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Lachung
                                            </li>
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Gurudongmar lake
                                            </li>
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Matnitop
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  &nbsp;
                                </div>
                              </div>
                            </div>
                          </div>
                          <p className="text-center text-xl leading-8 font-medium">
                            Golden Temple
                          </p>
                        </div>

                        <div>
                          <div className="w-full rounded-md mx-0 md:mx-1 lg:mx-1">
                            <div
                              className="trip_by_destination_list_img rounded-lg bg-cover h-56 bg-center bg-no-repeat"
                              style={{
                                backgroundImage: `url(${tabImage03})`,
                              }}
                            >
                              <div className="flex items-center justify-center">
                                <div className="overflow-hidden cursor-pointer relative group w-full h-56 rounded-lg">
                                  <div className="package_duration absolute top-5 right-0 bg-black py-1 px-4">
                                    <p className="text-white">
                                      3 Nights 4 Days, ₹{" "}
                                      <span className="text-lg font-semibold text-orange-500 lg:text-sm xl:text-xl 2xl:text-lg">
                                        50,000
                                      </span>
                                    </p>
                                  </div>
                                  <div className="rounded-xl z-50 opacity-0 py-5 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/100 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-0 text-white flex items-end">
                                    <div className="pt-0">
                                      <div className="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                                        <div className="font-bold text-xl">
                                          Hilighted place
                                        </div>

                                        <div className="opacity-100 text-sm ">
                                          <ul className="pb-16">
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Lachen
                                            </li>
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Lachung
                                            </li>
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Gurudongmar lake
                                            </li>
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Matnitop
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  &nbsp;
                                </div>
                              </div>
                            </div>
                          </div>
                          <p className="text-center text-xl leading-8 font-medium">
                            Thailand
                          </p>
                        </div>

                        <div>
                          <div className="w-full rounded-md mx-0 md:mx-1 lg:mx-1">
                            <div
                              className="trip_by_destination_list_img rounded-lg bg-cover h-56 bg-center bg-no-repeat"
                              style={{
                                backgroundImage: `url(${tabImage04})`,
                              }}
                            >
                              <div className="flex items-center justify-center">
                                <div className="overflow-hidden cursor-pointer relative group w-full h-56 rounded-lg">
                                  <div className="package_duration absolute top-5 right-0 bg-black py-1 px-4">
                                    <p className="text-white">
                                      3 Nights 4 Days, ₹{" "}
                                      <span className="text-lg font-semibold text-orange-500 lg:text-sm xl:text-xl 2xl:text-lg">
                                        50,000
                                      </span>
                                    </p>
                                  </div>
                                  <div className="rounded-xl z-50 opacity-0 py-5 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/100 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-0 text-white flex items-end">
                                    <div className="pt-0">
                                      <div className="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                                        <div className="font-bold text-xl">
                                          Hilighted place
                                        </div>

                                        <div className="opacity-100 text-sm ">
                                          <ul className="pb-16">
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Lachen
                                            </li>
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Lachung
                                            </li>
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Gurudongmar lake
                                            </li>
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Matnitop
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  &nbsp;
                                </div>
                              </div>
                            </div>
                          </div>
                          <p className="text-center text-xl leading-8 font-medium">
                            Vietnam
                          </p>
                        </div>
                      </div>
                    </Tab.Panel>

                    <Tab.Panel className="leading-relaxed">
                      <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
                        <div>
                          <div className="w-full rounded-md mx-0 md:mx-1 lg:mx-1">
                            <div
                              className="trip_by_destination_list_img rounded-lg bg-cover h-56 bg-center bg-no-repeat"
                              style={{
                                backgroundImage: `url(${tabImage01})`,
                              }}
                            >
                              <div className="flex items-center justify-center">
                                <div className="overflow-hidden cursor-pointer relative group w-full h-56 rounded-lg">
                                  <div className="package_duration absolute top-5 right-0 bg-black py-1 px-4">
                                    <p className="text-white">
                                      3 Nights 4 Days, ₹{" "}
                                      <span className="text-lg font-semibold text-orange-500 lg:text-sm xl:text-xl 2xl:text-lg">
                                        50,000
                                      </span>
                                    </p>
                                  </div>
                                  <div className="rounded-xl z-50 opacity-0 py-5 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/100 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-0 text-white flex items-end">
                                    <div className="pt-0">
                                      <div className="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                                        <div className="font-bold text-xl">
                                          Hilighted place
                                        </div>

                                        <div className="opacity-100 text-sm ">
                                          <ul className="pb-16">
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Lachen
                                            </li>
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Lachung
                                            </li>
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Gurudongmar lake
                                            </li>
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Matnitop
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  &nbsp;
                                </div>
                              </div>
                            </div>
                          </div>
                          <p className="text-center text-xl leading-8 font-medium">
                            Indonesia
                          </p>
                        </div>

                        <div>
                          <div className="w-full rounded-md mx-0 md:mx-1 lg:mx-1">
                            <div
                              className="trip_by_destination_list_img rounded-lg bg-cover h-56 bg-center bg-no-repeat"
                              style={{
                                backgroundImage: `url(${tabImage02})`,
                              }}
                            >
                              <div className="flex items-center justify-center">
                                <div className="overflow-hidden cursor-pointer relative group w-full h-56 rounded-lg">
                                  <div className="package_duration absolute top-5 right-0 bg-black py-1 px-4">
                                    <p className="text-white">
                                      3 Nights 4 Days, ₹{" "}
                                      <span className="text-lg font-semibold text-orange-500 lg:text-sm xl:text-xl 2xl:text-lg">
                                        50,000
                                      </span>
                                    </p>
                                  </div>
                                  <div className="rounded-xl z-50 opacity-0 py-5 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/100 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-0 text-white flex items-end">
                                    <div className="pt-0">
                                      <div className="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                                        <div className="font-bold text-xl">
                                          Hilighted place
                                        </div>

                                        <div className="opacity-100 text-sm ">
                                          <ul className="pb-16">
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Lachen
                                            </li>
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Lachung
                                            </li>
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Gurudongmar lake
                                            </li>
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Matnitop
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  &nbsp;
                                </div>
                              </div>
                            </div>
                          </div>
                          <p className="text-center text-xl leading-8 font-medium">
                            Golden Temple
                          </p>
                        </div>

                        <div>
                          <div className="w-full rounded-md mx-0 md:mx-1 lg:mx-1">
                            <div
                              className="trip_by_destination_list_img rounded-lg bg-cover h-56 bg-center bg-no-repeat"
                              style={{
                                backgroundImage: `url(${tabImage03})`,
                              }}
                            >
                              <div className="flex items-center justify-center">
                                <div className="overflow-hidden cursor-pointer relative group w-full h-56 rounded-lg">
                                  <div className="package_duration absolute top-5 right-0 bg-black py-1 px-4">
                                    <p className="text-white">
                                      3 Nights 4 Days, ₹{" "}
                                      <span className="text-lg font-semibold text-orange-500 lg:text-sm xl:text-xl 2xl:text-lg">
                                        50,000
                                      </span>
                                    </p>
                                  </div>
                                  <div className="rounded-xl z-50 opacity-0 py-5 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/100 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-0 text-white flex items-end">
                                    <div className="pt-0">
                                      <div className="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                                        <div className="font-bold text-xl">
                                          Hilighted place
                                        </div>

                                        <div className="opacity-100 text-sm ">
                                          <ul className="pb-16">
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Lachen
                                            </li>
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Lachung
                                            </li>
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Gurudongmar lake
                                            </li>
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Matnitop
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  &nbsp;
                                </div>
                              </div>
                            </div>
                          </div>
                          <p className="text-center text-xl leading-8 font-medium">
                            Thailand
                          </p>
                        </div>

                        <div>
                          <div className="w-full rounded-md mx-0 md:mx-1 lg:mx-1">
                            <div
                              className="trip_by_destination_list_img rounded-lg bg-cover h-56 bg-center bg-no-repeat"
                              style={{
                                backgroundImage: `url(${tabImage04})`,
                              }}
                            >
                              <div className="flex items-center justify-center">
                                <div className="overflow-hidden cursor-pointer relative group w-full h-56 rounded-lg">
                                  <div className="package_duration absolute top-5 right-0 bg-black py-1 px-4">
                                    <p className="text-white">
                                      3 Nights 4 Days, ₹{" "}
                                      <span className="text-lg font-semibold text-orange-500 lg:text-sm xl:text-xl 2xl:text-lg">
                                        50,000
                                      </span>
                                    </p>
                                  </div>
                                  <div className="rounded-xl z-50 opacity-0 py-5 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/100 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-0 text-white flex items-end">
                                    <div className="pt-0">
                                      <div className="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                                        <div className="font-bold text-xl">
                                          Hilighted place
                                        </div>

                                        <div className="opacity-100 text-sm ">
                                          <ul className="pb-16">
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Lachen
                                            </li>
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Lachung
                                            </li>
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Gurudongmar lake
                                            </li>
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Matnitop
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  &nbsp;
                                </div>
                              </div>
                            </div>
                          </div>
                          <p className="text-center text-xl leading-8 font-medium">
                            Vietnam
                          </p>
                        </div>

                        <div>
                          <div className="w-full rounded-md mx-0 md:mx-1 lg:mx-1">
                            <div
                              className="trip_by_destination_list_img rounded-lg bg-cover h-56 bg-center bg-no-repeat"
                              style={{
                                backgroundImage: `url(${tabImage01})`,
                              }}
                            >
                              <div className="flex items-center justify-center">
                                <div className="overflow-hidden cursor-pointer relative group w-full h-56 rounded-lg">
                                  <div className="package_duration absolute top-5 right-0 bg-black py-1 px-4">
                                    <p className="text-white">
                                      3 Nights 4 Days, ₹{" "}
                                      <span className="text-lg font-semibold text-orange-500 lg:text-sm xl:text-xl 2xl:text-lg">
                                        50,000
                                      </span>
                                    </p>
                                  </div>
                                  <div className="rounded-xl z-50 opacity-0 py-5 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/100 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-0 text-white flex items-end">
                                    <div className="pt-0">
                                      <div className="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                                        <div className="font-bold text-xl">
                                          Hilighted place
                                        </div>

                                        <div className="opacity-100 text-sm ">
                                          <ul className="pb-16">
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Lachen
                                            </li>
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Lachung
                                            </li>
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Gurudongmar lake
                                            </li>
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Matnitop
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  &nbsp;
                                </div>
                              </div>
                            </div>
                          </div>
                          <p className="text-center text-xl leading-8 font-medium">
                            Indonesia
                          </p>
                        </div>

                        <div>
                          <div className="w-full rounded-md mx-0 md:mx-1 lg:mx-1">
                            <div
                              className="trip_by_destination_list_img rounded-lg bg-cover h-56 bg-center bg-no-repeat"
                              style={{
                                backgroundImage: `url(${tabImage02})`,
                              }}
                            >
                              <div className="flex items-center justify-center">
                                <div className="overflow-hidden cursor-pointer relative group w-full h-56 rounded-lg">
                                  <div className="package_duration absolute top-5 right-0 bg-black py-1 px-4">
                                    <p className="text-white">
                                      3 Nights 4 Days, ₹{" "}
                                      <span className="text-lg font-semibold text-orange-500 lg:text-sm xl:text-xl 2xl:text-lg">
                                        50,000
                                      </span>
                                    </p>
                                  </div>
                                  <div className="rounded-xl z-50 opacity-0 py-5 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/100 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-0 text-white flex items-end">
                                    <div className="pt-0">
                                      <div className="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                                        <div className="font-bold text-xl">
                                          Hilighted place
                                        </div>

                                        <div className="opacity-100 text-sm ">
                                          <ul className="pb-16">
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Lachen
                                            </li>
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Lachung
                                            </li>
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Gurudongmar lake
                                            </li>
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Matnitop
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  &nbsp;
                                </div>
                              </div>
                            </div>
                          </div>
                          <p className="text-center text-xl leading-8 font-medium">
                            Golden Temple
                          </p>
                        </div>

                        <div>
                          <div className="w-full rounded-md mx-0 md:mx-1 lg:mx-1">
                            <div
                              className="trip_by_destination_list_img rounded-lg bg-cover h-56 bg-center bg-no-repeat"
                              style={{
                                backgroundImage: `url(${tabImage03})`,
                              }}
                            >
                              <div className="flex items-center justify-center">
                                <div className="overflow-hidden cursor-pointer relative group w-full h-56 rounded-lg">
                                  <div className="package_duration absolute top-5 right-0 bg-black py-1 px-4">
                                    <p className="text-white">
                                      3 Nights 4 Days, ₹{" "}
                                      <span className="text-lg font-semibold text-orange-500 lg:text-sm xl:text-xl 2xl:text-lg">
                                        50,000
                                      </span>
                                    </p>
                                  </div>
                                  <div className="rounded-xl z-50 opacity-0 py-5 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/100 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-0 text-white flex items-end">
                                    <div className="pt-0">
                                      <div className="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                                        <div className="font-bold text-xl">
                                          Hilighted place
                                        </div>

                                        <div className="opacity-100 text-sm ">
                                          <ul className="pb-16">
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Lachen
                                            </li>
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Lachung
                                            </li>
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Gurudongmar lake
                                            </li>
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Matnitop
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  &nbsp;
                                </div>
                              </div>
                            </div>
                          </div>
                          <p className="text-center text-xl leading-8 font-medium">
                            Thailand
                          </p>
                        </div>

                        <div>
                          <div className="w-full rounded-md mx-0 md:mx-1 lg:mx-1">
                            <div
                              className="trip_by_destination_list_img rounded-lg bg-cover h-56 bg-center bg-no-repeat"
                              style={{
                                backgroundImage: `url(${tabImage04})`,
                              }}
                            >
                              <div className="flex items-center justify-center">
                                <div className="overflow-hidden cursor-pointer relative group w-full h-56 rounded-lg">
                                  <div className="package_duration absolute top-5 right-0 bg-black py-1 px-4">
                                    <p className="text-white">
                                      3 Nights 4 Days, ₹{" "}
                                      <span className="text-lg font-semibold text-orange-500 lg:text-sm xl:text-xl 2xl:text-lg">
                                        50,000
                                      </span>
                                    </p>
                                  </div>
                                  <div className="rounded-xl z-50 opacity-0 py-5 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/100 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-0 text-white flex items-end">
                                    <div className="pt-0">
                                      <div className="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                                        <div className="font-bold text-xl">
                                          Hilighted place
                                        </div>

                                        <div className="opacity-100 text-sm ">
                                          <ul className="pb-16">
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Lachen
                                            </li>
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Lachung
                                            </li>
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Gurudongmar lake
                                            </li>
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Matnitop
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  &nbsp;
                                </div>
                              </div>
                            </div>
                          </div>
                          <p className="text-center text-xl leading-8 font-medium">
                            Vietnam
                          </p>
                        </div>
                      </div>
                    </Tab.Panel>

                    <Tab.Panel className="leading-relaxed">
                      <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
                        <div>
                          <div className="w-full rounded-md mx-0 md:mx-1 lg:mx-1">
                            <div
                              className="trip_by_destination_list_img rounded-lg bg-cover h-56 bg-center bg-no-repeat"
                              style={{
                                backgroundImage: `url(${tabImage01})`,
                              }}
                            >
                              <div className="flex items-center justify-center">
                                <div className="overflow-hidden cursor-pointer relative group w-full h-56 rounded-lg">
                                  <div className="package_duration absolute top-5 right-0 bg-black py-1 px-4">
                                    <p className="text-white">
                                      3 Nights 4 Days, ₹{" "}
                                      <span className="text-lg font-semibold text-orange-500 lg:text-sm xl:text-xl 2xl:text-lg">
                                        50,000
                                      </span>
                                    </p>
                                  </div>
                                  <div className="rounded-xl z-50 opacity-0 py-5 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/100 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-0 text-white flex items-end">
                                    <div className="pt-0">
                                      <div className="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                                        <div className="font-bold text-xl">
                                          Hilighted place
                                        </div>

                                        <div className="opacity-100 text-sm ">
                                          <ul className="pb-16">
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Lachen
                                            </li>
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Lachung
                                            </li>
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Gurudongmar lake
                                            </li>
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Matnitop
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  &nbsp;
                                </div>
                              </div>
                            </div>
                          </div>
                          <p className="text-center text-xl leading-8 font-medium">
                            Indonesia
                          </p>
                        </div>

                        <div>
                          <div className="w-full rounded-md mx-0 md:mx-1 lg:mx-1">
                            <div
                              className="trip_by_destination_list_img rounded-lg bg-cover h-56 bg-center bg-no-repeat"
                              style={{
                                backgroundImage: `url(${tabImage02})`,
                              }}
                            >
                              <div className="flex items-center justify-center">
                                <div className="overflow-hidden cursor-pointer relative group w-full h-56 rounded-lg">
                                  <div className="package_duration absolute top-5 right-0 bg-black py-1 px-4">
                                    <p className="text-white">
                                      3 Nights 4 Days, ₹{" "}
                                      <span className="text-lg font-semibold text-orange-500 lg:text-sm xl:text-xl 2xl:text-lg">
                                        50,000
                                      </span>
                                    </p>
                                  </div>
                                  <div className="rounded-xl z-50 opacity-0 py-5 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/100 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-0 text-white flex items-end">
                                    <div className="pt-0">
                                      <div className="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                                        <div className="font-bold text-xl">
                                          Hilighted place
                                        </div>

                                        <div className="opacity-100 text-sm ">
                                          <ul className="pb-16">
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Lachen
                                            </li>
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Lachung
                                            </li>
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Gurudongmar lake
                                            </li>
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Matnitop
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  &nbsp;
                                </div>
                              </div>
                            </div>
                          </div>
                          <p className="text-center text-xl leading-8 font-medium">
                            Golden Temple
                          </p>
                        </div>

                        <div>
                          <div className="w-full rounded-md mx-0 md:mx-1 lg:mx-1">
                            <div
                              className="trip_by_destination_list_img rounded-lg bg-cover h-56 bg-center bg-no-repeat"
                              style={{
                                backgroundImage: `url(${tabImage03})`,
                              }}
                            >
                              <div className="flex items-center justify-center">
                                <div className="overflow-hidden cursor-pointer relative group w-full h-56 rounded-lg">
                                  <div className="package_duration absolute top-5 right-0 bg-black py-1 px-4">
                                    <p className="text-white">
                                      3 Nights 4 Days, ₹{" "}
                                      <span className="text-lg font-semibold text-orange-500 lg:text-sm xl:text-xl 2xl:text-lg">
                                        50,000
                                      </span>
                                    </p>
                                  </div>
                                  <div className="rounded-xl z-50 opacity-0 py-5 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/100 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-0 text-white flex items-end">
                                    <div className="pt-0">
                                      <div className="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                                        <div className="font-bold text-xl">
                                          Hilighted place
                                        </div>

                                        <div className="opacity-100 text-sm ">
                                          <ul className="pb-16">
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Lachen
                                            </li>
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Lachung
                                            </li>
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Gurudongmar lake
                                            </li>
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Matnitop
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  &nbsp;
                                </div>
                              </div>
                            </div>
                          </div>
                          <p className="text-center text-xl leading-8 font-medium">
                            Thailand
                          </p>
                        </div>

                        <div>
                          <div className="w-full rounded-md mx-0 md:mx-1 lg:mx-1">
                            <div
                              className="trip_by_destination_list_img rounded-lg bg-cover h-56 bg-center bg-no-repeat"
                              style={{
                                backgroundImage: `url(${tabImage04})`,
                              }}
                            >
                              <div className="flex items-center justify-center">
                                <div className="overflow-hidden cursor-pointer relative group w-full h-56 rounded-lg">
                                  <div className="package_duration absolute top-5 right-0 bg-black py-1 px-4">
                                    <p className="text-white">
                                      3 Nights 4 Days, ₹{" "}
                                      <span className="text-lg font-semibold text-orange-500 lg:text-sm xl:text-xl 2xl:text-lg">
                                        50,000
                                      </span>
                                    </p>
                                  </div>
                                  <div className="rounded-xl z-50 opacity-0 py-5 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/100 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-0 text-white flex items-end">
                                    <div className="pt-0">
                                      <div className="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                                        <div className="font-bold text-xl">
                                          Hilighted place
                                        </div>

                                        <div className="opacity-100 text-sm ">
                                          <ul className="pb-16">
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Lachen
                                            </li>
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Lachung
                                            </li>
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Gurudongmar lake
                                            </li>
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Matnitop
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  &nbsp;
                                </div>
                              </div>
                            </div>
                          </div>
                          <p className="text-center text-xl leading-8 font-medium">
                            Vietnam
                          </p>
                        </div>

                        <div>
                          <div className="w-full rounded-md mx-0 md:mx-1 lg:mx-1">
                            <div
                              className="trip_by_destination_list_img rounded-lg bg-cover h-56 bg-center bg-no-repeat"
                              style={{
                                backgroundImage: `url(${tabImage01})`,
                              }}
                            >
                              <div className="flex items-center justify-center">
                                <div className="overflow-hidden cursor-pointer relative group w-full h-56 rounded-lg">
                                  <div className="package_duration absolute top-5 right-0 bg-black py-1 px-4">
                                    <p className="text-white">
                                      3 Nights 4 Days, ₹{" "}
                                      <span className="text-lg font-semibold text-orange-500 lg:text-sm xl:text-xl 2xl:text-lg">
                                        50,000
                                      </span>
                                    </p>
                                  </div>
                                  <div className="rounded-xl z-50 opacity-0 py-5 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/100 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-0 text-white flex items-end">
                                    <div className="pt-0">
                                      <div className="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                                        <div className="font-bold text-xl">
                                          Hilighted place
                                        </div>

                                        <div className="opacity-100 text-sm ">
                                          <ul className="pb-16">
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Lachen
                                            </li>
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Lachung
                                            </li>
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Gurudongmar lake
                                            </li>
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Matnitop
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  &nbsp;
                                </div>
                              </div>
                            </div>
                          </div>
                          <p className="text-center text-xl leading-8 font-medium">
                            Indonesia
                          </p>
                        </div>

                        <div>
                          <div className="w-full rounded-md mx-0 md:mx-1 lg:mx-1">
                            <div
                              className="trip_by_destination_list_img rounded-lg bg-cover h-56 bg-center bg-no-repeat"
                              style={{
                                backgroundImage: `url(${tabImage02})`,
                              }}
                            >
                              <div className="flex items-center justify-center">
                                <div className="overflow-hidden cursor-pointer relative group w-full h-56 rounded-lg">
                                  <div className="package_duration absolute top-5 right-0 bg-black py-1 px-4">
                                    <p className="text-white">
                                      3 Nights 4 Days, ₹{" "}
                                      <span className="text-lg font-semibold text-orange-500 lg:text-sm xl:text-xl 2xl:text-lg">
                                        50,000
                                      </span>
                                    </p>
                                  </div>
                                  <div className="rounded-xl z-50 opacity-0 py-5 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/100 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-0 text-white flex items-end">
                                    <div className="pt-0">
                                      <div className="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                                        <div className="font-bold text-xl">
                                          Hilighted place
                                        </div>

                                        <div className="opacity-100 text-sm ">
                                          <ul className="pb-16">
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Lachen
                                            </li>
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Lachung
                                            </li>
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Gurudongmar lake
                                            </li>
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Matnitop
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  &nbsp;
                                </div>
                              </div>
                            </div>
                          </div>
                          <p className="text-center text-xl leading-8 font-medium">
                            Golden Temple
                          </p>
                        </div>

                        <div>
                          <div className="w-full rounded-md mx-0 md:mx-1 lg:mx-1">
                            <div
                              className="trip_by_destination_list_img rounded-lg bg-cover h-56 bg-center bg-no-repeat"
                              style={{
                                backgroundImage: `url(${tabImage03})`,
                              }}
                            >
                              <div className="flex items-center justify-center">
                                <div className="overflow-hidden cursor-pointer relative group w-full h-56 rounded-lg">
                                  <div className="package_duration absolute top-5 right-0 bg-black py-1 px-4">
                                    <p className="text-white">
                                      3 Nights 4 Days, ₹{" "}
                                      <span className="text-lg font-semibold text-orange-500 lg:text-sm xl:text-xl 2xl:text-lg">
                                        50,000
                                      </span>
                                    </p>
                                  </div>
                                  <div className="rounded-xl z-50 opacity-0 py-5 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/100 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-0 text-white flex items-end">
                                    <div className="pt-0">
                                      <div className="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                                        <div className="font-bold text-xl">
                                          Hilighted place
                                        </div>

                                        <div className="opacity-100 text-sm ">
                                          <ul className="pb-16">
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Lachen
                                            </li>
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Lachung
                                            </li>
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Gurudongmar lake
                                            </li>
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Matnitop
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  &nbsp;
                                </div>
                              </div>
                            </div>
                          </div>
                          <p className="text-center text-xl leading-8 font-medium">
                            Thailand
                          </p>
                        </div>

                        <div>
                          <div className="w-full rounded-md mx-0 md:mx-1 lg:mx-1">
                            <div
                              className="trip_by_destination_list_img rounded-lg bg-cover h-56 bg-center bg-no-repeat"
                              style={{
                                backgroundImage: `url(${tabImage04})`,
                              }}
                            >
                              <div className="flex items-center justify-center">
                                <div className="overflow-hidden cursor-pointer relative group w-full h-56 rounded-lg">
                                  <div className="package_duration absolute top-5 right-0 bg-black py-1 px-4">
                                    <p className="text-white">
                                      3 Nights 4 Days, ₹{" "}
                                      <span className="text-lg font-semibold text-orange-500 lg:text-sm xl:text-xl 2xl:text-lg">
                                        50,000
                                      </span>
                                    </p>
                                  </div>
                                  <div className="rounded-xl z-50 opacity-0 py-5 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/100 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-0 text-white flex items-end">
                                    <div className="pt-0">
                                      <div className="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                                        <div className="font-bold text-xl">
                                          Hilighted place
                                        </div>

                                        <div className="opacity-100 text-sm ">
                                          <ul className="pb-16">
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Lachen
                                            </li>
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Lachung
                                            </li>
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Gurudongmar lake
                                            </li>
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Matnitop
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  &nbsp;
                                </div>
                              </div>
                            </div>
                          </div>
                          <p className="text-center text-xl leading-8 font-medium">
                            Vietnam
                          </p>
                        </div>
                      </div>
                    </Tab.Panel>

                    <Tab.Panel className="leading-relaxed">
                      <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
                        <div>
                          <div className="w-full rounded-md mx-0 md:mx-1 lg:mx-1">
                            <div
                              className="trip_by_destination_list_img rounded-lg bg-cover h-56 bg-center bg-no-repeat"
                              style={{
                                backgroundImage: `url(${tabImage01})`,
                              }}
                            >
                              <div className="flex items-center justify-center">
                                <div className="overflow-hidden cursor-pointer relative group w-full h-56 rounded-lg">
                                  <div className="package_duration absolute top-5 right-0 bg-black py-1 px-4">
                                    <p className="text-white">
                                      3 Nights 4 Days, ₹{" "}
                                      <span className="text-lg font-semibold text-orange-500 lg:text-sm xl:text-xl 2xl:text-lg">
                                        50,000
                                      </span>
                                    </p>
                                  </div>
                                  <div className="rounded-xl z-50 opacity-0 py-5 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/100 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-0 text-white flex items-end">
                                    <div className="pt-0">
                                      <div className="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                                        <div className="font-bold text-xl">
                                          Hilighted place
                                        </div>

                                        <div className="opacity-100 text-sm ">
                                          <ul className="pb-16">
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Lachen
                                            </li>
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Lachung
                                            </li>
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Gurudongmar lake
                                            </li>
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Matnitop
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  &nbsp;
                                </div>
                              </div>
                            </div>
                          </div>
                          <p className="text-center text-xl leading-8 font-medium">
                            Indonesia
                          </p>
                        </div>

                        <div>
                          <div className="w-full rounded-md mx-0 md:mx-1 lg:mx-1">
                            <div
                              className="trip_by_destination_list_img rounded-lg bg-cover h-56 bg-center bg-no-repeat"
                              style={{
                                backgroundImage: `url(${tabImage02})`,
                              }}
                            >
                              <div className="flex items-center justify-center">
                                <div className="overflow-hidden cursor-pointer relative group w-full h-56 rounded-lg">
                                  <div className="package_duration absolute top-5 right-0 bg-black py-1 px-4">
                                    <p className="text-white">
                                      3 Nights 4 Days, ₹{" "}
                                      <span className="text-lg font-semibold text-orange-500 lg:text-sm xl:text-xl 2xl:text-lg">
                                        50,000
                                      </span>
                                    </p>
                                  </div>
                                  <div className="rounded-xl z-50 opacity-0 py-5 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/100 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-0 text-white flex items-end">
                                    <div className="pt-0">
                                      <div className="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                                        <div className="font-bold text-xl">
                                          Hilighted place
                                        </div>

                                        <div className="opacity-100 text-sm ">
                                          <ul className="pb-16">
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Lachen
                                            </li>
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Lachung
                                            </li>
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Gurudongmar lake
                                            </li>
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Matnitop
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  &nbsp;
                                </div>
                              </div>
                            </div>
                          </div>
                          <p className="text-center text-xl leading-8 font-medium">
                            Golden Temple
                          </p>
                        </div>

                        <div>
                          <div className="w-full rounded-md mx-0 md:mx-1 lg:mx-1">
                            <div
                              className="trip_by_destination_list_img rounded-lg bg-cover h-56 bg-center bg-no-repeat"
                              style={{
                                backgroundImage: `url(${tabImage03})`,
                              }}
                            >
                              <div className="flex items-center justify-center">
                                <div className="overflow-hidden cursor-pointer relative group w-full h-56 rounded-lg">
                                  <div className="package_duration absolute top-5 right-0 bg-black py-1 px-4">
                                    <p className="text-white">
                                      3 Nights 4 Days, ₹{" "}
                                      <span className="text-lg font-semibold text-orange-500 lg:text-sm xl:text-xl 2xl:text-lg">
                                        50,000
                                      </span>
                                    </p>
                                  </div>
                                  <div className="rounded-xl z-50 opacity-0 py-5 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/100 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-0 text-white flex items-end">
                                    <div className="pt-0">
                                      <div className="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                                        <div className="font-bold text-xl">
                                          Hilighted place
                                        </div>

                                        <div className="opacity-100 text-sm ">
                                          <ul className="pb-16">
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Lachen
                                            </li>
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Lachung
                                            </li>
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Gurudongmar lake
                                            </li>
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Matnitop
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  &nbsp;
                                </div>
                              </div>
                            </div>
                          </div>
                          <p className="text-center text-xl leading-8 font-medium">
                            Thailand
                          </p>
                        </div>

                        <div>
                          <div className="w-full rounded-md mx-0 md:mx-1 lg:mx-1">
                            <div
                              className="trip_by_destination_list_img rounded-lg bg-cover h-56 bg-center bg-no-repeat"
                              style={{
                                backgroundImage: `url(${tabImage04})`,
                              }}
                            >
                              <div className="flex items-center justify-center">
                                <div className="overflow-hidden cursor-pointer relative group w-full h-56 rounded-lg">
                                  <div className="package_duration absolute top-5 right-0 bg-black py-1 px-4">
                                    <p className="text-white">
                                      3 Nights 4 Days, ₹{" "}
                                      <span className="text-lg font-semibold text-orange-500 lg:text-sm xl:text-xl 2xl:text-lg">
                                        50,000
                                      </span>
                                    </p>
                                  </div>
                                  <div className="rounded-xl z-50 opacity-0 py-5 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/100 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-0 text-white flex items-end">
                                    <div className="pt-0">
                                      <div className="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                                        <div className="font-bold text-xl">
                                          Hilighted place
                                        </div>

                                        <div className="opacity-100 text-sm ">
                                          <ul className="pb-16">
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Lachen
                                            </li>
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Lachung
                                            </li>
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Gurudongmar lake
                                            </li>
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Matnitop
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  &nbsp;
                                </div>
                              </div>
                            </div>
                          </div>
                          <p className="text-center text-xl leading-8 font-medium">
                            Vietnam
                          </p>
                        </div>

                        <div>
                          <div className="w-full rounded-md mx-0 md:mx-1 lg:mx-1">
                            <div
                              className="trip_by_destination_list_img rounded-lg bg-cover h-56 bg-center bg-no-repeat"
                              style={{
                                backgroundImage: `url(${tabImage01})`,
                              }}
                            >
                              <div className="flex items-center justify-center">
                                <div className="overflow-hidden cursor-pointer relative group w-full h-56 rounded-lg">
                                  <div className="package_duration absolute top-5 right-0 bg-black py-1 px-4">
                                    <p className="text-white">
                                      3 Nights 4 Days, ₹{" "}
                                      <span className="text-lg font-semibold text-orange-500 lg:text-sm xl:text-xl 2xl:text-lg">
                                        50,000
                                      </span>
                                    </p>
                                  </div>
                                  <div className="rounded-xl z-50 opacity-0 py-5 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/100 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-0 text-white flex items-end">
                                    <div className="pt-0">
                                      <div className="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                                        <div className="font-bold text-xl">
                                          Hilighted place
                                        </div>

                                        <div className="opacity-100 text-sm ">
                                          <ul className="pb-16">
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Lachen
                                            </li>
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Lachung
                                            </li>
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Gurudongmar lake
                                            </li>
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Matnitop
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  &nbsp;
                                </div>
                              </div>
                            </div>
                          </div>
                          <p className="text-center text-xl leading-8 font-medium">
                            Indonesia
                          </p>
                        </div>

                        <div>
                          <div className="w-full rounded-md mx-0 md:mx-1 lg:mx-1">
                            <div
                              className="trip_by_destination_list_img rounded-lg bg-cover h-56 bg-center bg-no-repeat"
                              style={{
                                backgroundImage: `url(${tabImage02})`,
                              }}
                            >
                              <div className="flex items-center justify-center">
                                <div className="overflow-hidden cursor-pointer relative group w-full h-56 rounded-lg">
                                  <div className="package_duration absolute top-5 right-0 bg-black py-1 px-4">
                                    <p className="text-white">
                                      3 Nights 4 Days, ₹{" "}
                                      <span className="text-lg font-semibold text-orange-500 lg:text-sm xl:text-xl 2xl:text-lg">
                                        50,000
                                      </span>
                                    </p>
                                  </div>
                                  <div className="rounded-xl z-50 opacity-0 py-5 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/100 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-0 text-white flex items-end">
                                    <div className="pt-0">
                                      <div className="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                                        <div className="font-bold text-xl">
                                          Hilighted place
                                        </div>

                                        <div className="opacity-100 text-sm ">
                                          <ul className="pb-16">
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Lachen
                                            </li>
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Lachung
                                            </li>
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Gurudongmar lake
                                            </li>
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Matnitop
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  &nbsp;
                                </div>
                              </div>
                            </div>
                          </div>
                          <p className="text-center text-xl leading-8 font-medium">
                            Golden Temple
                          </p>
                        </div>

                        <div>
                          <div className="w-full rounded-md mx-0 md:mx-1 lg:mx-1">
                            <div
                              className="trip_by_destination_list_img rounded-lg bg-cover h-56 bg-center bg-no-repeat"
                              style={{
                                backgroundImage: `url(${tabImage03})`,
                              }}
                            >
                              <div className="flex items-center justify-center">
                                <div className="overflow-hidden cursor-pointer relative group w-full h-56 rounded-lg">
                                  <div className="package_duration absolute top-5 right-0 bg-black py-1 px-4">
                                    <p className="text-white">
                                      3 Nights 4 Days, ₹{" "}
                                      <span className="text-lg font-semibold text-orange-500 lg:text-sm xl:text-xl 2xl:text-lg">
                                        50,000
                                      </span>
                                    </p>
                                  </div>
                                  <div className="rounded-xl z-50 opacity-0 py-5 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/100 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-0 text-white flex items-end">
                                    <div className="pt-0">
                                      <div className="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                                        <div className="font-bold text-xl">
                                          Hilighted place
                                        </div>

                                        <div className="opacity-100 text-sm ">
                                          <ul className="pb-16">
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Lachen
                                            </li>
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Lachung
                                            </li>
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Gurudongmar lake
                                            </li>
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Matnitop
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  &nbsp;
                                </div>
                              </div>
                            </div>
                          </div>
                          <p className="text-center text-xl leading-8 font-medium">
                            Thailand
                          </p>
                        </div>

                        <div>
                          <div className="w-full rounded-md mx-0 md:mx-1 lg:mx-1">
                            <div
                              className="trip_by_destination_list_img rounded-lg bg-cover h-56 bg-center bg-no-repeat"
                              style={{
                                backgroundImage: `url(${tabImage04})`,
                              }}
                            >
                              <div className="flex items-center justify-center">
                                <div className="overflow-hidden cursor-pointer relative group w-full h-56 rounded-lg">
                                  <div className="package_duration absolute top-5 right-0 bg-black py-1 px-4">
                                    <p className="text-white">
                                      3 Nights 4 Days, ₹{" "}
                                      <span className="text-lg font-semibold text-orange-500 lg:text-sm xl:text-xl 2xl:text-lg">
                                        50,000
                                      </span>
                                    </p>
                                  </div>
                                  <div className="rounded-xl z-50 opacity-0 py-5 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/100 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-0 text-white flex items-end">
                                    <div className="pt-0">
                                      <div className="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                                        <div className="font-bold text-xl">
                                          Hilighted place
                                        </div>

                                        <div className="opacity-100 text-sm ">
                                          <ul className="pb-16">
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Lachen
                                            </li>
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Lachung
                                            </li>
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Gurudongmar lake
                                            </li>
                                            <li className="w-2/4 float-left mb-2 flex">
                                              <Lucide
                                                icon="ChevronRight"
                                                className="w-5 h-5 pr-0.5"
                                              />{" "}
                                              Matnitop
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  &nbsp;
                                </div>
                              </div>
                            </div>
                          </div>
                          <p className="text-center text-xl leading-8 font-medium">
                            Vietnam
                          </p>
                        </div>
                      </div>
                    </Tab.Panel>
                  </Tab.Panels>
                </Tab.Group>
              </div>
            </div>
          </div>
          <div className="feedback_from_traveller_section mb-10 md:p-4 lg:p-4">
            <div className="container">
              <h2 className="text-3xl font-bold text-black text-center mb-5">
                Feedbacks from Travellers
              </h2>
              <div className="grid gap-x-8 gap-y-4 grid-cols-1 md:grid-cols-3">
                <div className="feedback_box_area text-center px-7 py-8 shadow-lg rounded-lg relative">
                  <div className="absolute w-4/5 h-3/5 flex justify-center items-center mx-6">
                    <img alt="" className="" src={testiBG} />
                  </div>
                  <h3 className="text-lg font-bold text-orange-500 relative z-10">
                    Naim Chowdhury
                  </h3>
                  <span className="text-xs font-medium mb-3.5 block relative z-10">
                    India
                  </span>
                  <div className="feedback_box h-48 relative z-10">
                    <p className="text-sm font-medium leading-6">
                      We had a wonderful experience! A warm welcome we received
                      by the hotel! Food was ready and served on time and the
                      food was excellent! We are having a comfortable time in
                      this hotel! All the best wishes for the Srijon team!!
                    </p>
                  </div>
                  <span className="text-xs font-medium relative z-10">
                    Michale from Malaysia
                  </span>
                </div>

                <div className="feedback_box_area text-center px-7 py-8 shadow-lg rounded-lg relative">
                  <div className="absolute w-4/5 h-3/5 flex justify-center items-center mx-6">
                    <img alt="" className="" src={testiBG} />
                  </div>
                  <h3 className="text-lg font-bold text-orange-500 relative z-10">
                    Novotel Rotorua Lakeside Hotel
                  </h3>
                  <span className="text-xs font-medium mb-3.5 block relative z-10">
                    Malaysia
                  </span>
                  <div className="feedback_box h-48 relative z-10">
                    <p className="text-sm font-medium leading-6">
                      We were travelling with an infant and stated that in our
                      Singdha Srijon’s special requests section when booking.
                      The staff were exceptional in ensuring we had a splendid
                      stay. Highly recommended!
                    </p>
                  </div>
                  <span className="text-xs font-medium relative z-10">
                    Michale from Malaysia
                  </span>
                </div>

                <div className="feedback_box_area text-center px-7 py-8 shadow-lg rounded-lg relative">
                  <div className="absolute w-4/5 h-3/5 flex justify-center items-center mx-6">
                    <img alt="" className="" src={testiBG} />
                  </div>
                  <h3 className="text-lg font-bold text-orange-500 relative z-10">
                    The Sydney Boulevard Hotel
                  </h3>
                  <span className="text-xs font-medium mb-3.5 block relative z-10">
                    Malaysia
                  </span>
                  <div className="feedback_box h-48 relative z-10">
                    <p className="text-sm font-medium leading-6">
                      We were travelling with an infant and stated that in our
                      Singdha Srijon’s special requests section when booking.
                      The staff were exceptional in ensuring we had a splendid
                      stay. Highly recommended!
                    </p>
                  </div>
                  <span className="text-xs font-medium relative z-10">
                    Michale from Malaysia
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
