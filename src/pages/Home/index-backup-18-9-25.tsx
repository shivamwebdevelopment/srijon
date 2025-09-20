// @ts-nocheck
import DarkModeSwitcher from "../../components/DarkModeSwitcher";
import MainColorSwitcher from "../../components/MainColorSwitcher";
import logoUrl from "../../assets/images/logo.svg";
import illustrationUrl from "../../assets/images/illustration.svg";
import { FormInput, FormCheck } from "../../base-components/Form";
import clsx from "clsx";
import _ from "lodash";

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

import hotelIconBlack from "../../assets/images/hotel_icon_black.png";
import privateIconBlack from "../../assets/images/private_icon_black.png";
import flightIconBlack from "../../assets/images/flight_icon_black.png";
import onlyFlightIconBlack from "../../assets/images/plain_icon_black.png";
import longStayIconBlack from "../../assets/images/long_stay_icon_black.png";
import activityIconBlack from "../../assets/images/activities_icon_black.png";

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

import customizeIcon from "../../assets/images/customize_icon.png";
import becamePartnerIcon from "../../assets/images/became_partner_icon.png";
import testiBG from "../../assets/images/testibg.png";
import { Tab } from "../../base-components/Headless";

//===========FrontEnd Componenets=======================
import ItinerarySnippetLarge from "../../frontend-components/home/itinerarySnippetLarge";
import DomesticTourSnippet from "../../frontend-components/home/domesticTourSnippet";
import ItineraryCategorySnippet from "../../frontend-components/home/itineraryCategorySnippet";
import InternationalTourSnippet from "../../frontend-components/home/internationalTourSnippet";
import Header from "../../frontend-components/layout/header";
import StickyMenu from "../../frontend-components/layout/stickyMenu";
import HomeBanner from "../../frontend-components/layout/banner";
import Footer from "../../frontend-components/layout/footer";
//===========FrontEnd Componenets End====================

import Button from "../../base-components/Button";
import Lucide from "../../base-components/Lucide";
import { useState, useRef, useEffect } from "react";
import TinySlider, {
  TinySliderElement,
} from "../../base-components/TinySlider";

import callApi from "../../frontend-components/utility/function";
import server from "../../../apiconfig.json";

function Main() {
  const API = server.API_URL;
  const imgPath = server.FILE_PATH;
  const [isLoading, setisLoading] = useState(true);

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

  const [itiData, setItidata] = useState({});
  const [itiDataDom, setItidataDom] = useState({});
  const [itiDataInternational, setItiDataInternational] = useState({});

  //console.log("Data", itiData);
  const [holiday, setHoliday] = useState({});
  const [business, setBusiness] = useState({});
  const [honeymoon, setHoneymoon] = useState({});
  const [family, setFamily] = useState({});
  const [religious, setReligious] = useState({});
  const [adventure, setAdventure] = useState({});

  useEffect(() => {
    getTabData("Holiday");
    getItineraryData();
    getItineraryDomesticData();
    getItineraryInternationalData();
    setisLoading(false);
  }, []);

  const getItineraryData = () => {
    const data = callApi(API, "GET", "super-itinerary-master/home", "").then(
      (result) => {
        setItidata(result.data);
      }
    );
  };

  const getItineraryDomesticData = () => {
    const data = callApi(
      API,
      "GET",
      "super-itinerary-master/home-dom",
      ""
    ).then((result) => {
      setItidataDom(result.data);
    });
  };

  const getItineraryInternationalData = () => {
    const data = callApi(
      API,
      "GET",
      "super-itinerary-master/home-int",
      ""
    ).then((result) => {
      //console.log("Test: ",result.data[0].thumbnail);
      setItiDataInternational(result.data);
    });
  };

  const getTabData = (type) => {
    const data = callApi(API, "POST", "super-itinerary-master/home-cat", {
      cat: type,
    }).then((result) => {
      //console.log(type,result.data);
      switch (type) {
        case "Holiday":
          setHoliday(result.data);
          break;
        case "Business":
          setBusiness(result.data);
          break;
        case "Honeymoon":
          setHoneymoon(result.data);
          break;
        case "Religious":
          setReligious(result.data);
          break;
        case "Family":
          setFamily(result.data);
          break;
        case "Adventure":
          setAdventure(result.data);
          break;
      }
    });
  };

  //console.log("aaa: ", itiData);

  if (isLoading) {
    return <div>Loading.....</div>;
  }
  return (
    <>
      {/* HEADER SECTION TWO */}
      <StickyMenu></StickyMenu>

      <div className="bg-white overflow-hidden relative">
        {/* HEADER SECTION */}
        <Header></Header>

        {/* BANNER SECTION */}
        <HomeBanner></HomeBanner>

        {/* SPECIAL TOURS SECTION */}
        <div className="container">
          <div className="special_tour_section border border-gray-300 border-solid rounded-3xl my-16 p-4 md:p-6 md:mx-4 md:my-8 lg:mx-4 lg:my-8">
            <h2 className="text-2xl font-bold text-black md:text-3xl">
              Special Tours
            </h2>

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
                      <div className="special_tours_button_container flex items-center h-10 intro-x mt-2 md:mt-0">
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
                                  Up <span className="text-orange-500">to</span>{" "}
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
                                  Up <span className="text-orange-500">to</span>{" "}
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
                                  Up <span className="text-orange-500">to</span>{" "}
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
                                  Up <span className="text-orange-500">to</span>{" "}
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
                                  Up <span className="text-orange-500">to</span>{" "}
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
                                  Up <span className="text-orange-500">to</span>{" "}
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

        {/* TRIP BY DESTINATION SECTION */}
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
              {itiData.length ? (
                <div className="grid gap-x-8 gap-y-4 grid-cols-1 mb-8 md:grid-cols-3">
                  {_.take(itiData, itiData.length).map((item, Key) => (
                    <>
                      <ItinerarySnippetLarge
                        data={item}
                      ></ItinerarySnippetLarge>
                    </>
                  ))}
                </div>
              ) : (
                ""
              )}
            </div>

            <div className="view_more text-center mt-8">
              <Link
                className="bg-orange-500 rounded-full text-base font-normal text-white px-7 py-2 inline-block hover:bg-black"
                to="/all-package-tours"
              >
                View More
              </Link>
            </div>
          </div>
        </div>

        {/* TOURS TYPE SECTION */}
        <div className="tour_type_section mb-14 md:p-4 md:mb-4 lg:p-4 lg:mb-14">
          <div className="container">
            <div className="grid gap-x-8 gap-y-4 grid-cols-1 md:grid-cols-2">
              <div className="">
                <h2 className="text-2xl font-bold text-black mb-3 md:text-3xl">
                  Domestic Tour
                </h2>

                {itiDataDom.length ? (
                  <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
                    {_.take(itiDataDom, itiDataDom.length).map((item, Key) => (
                      <DomesticTourSnippet data={item}></DomesticTourSnippet>
                    ))}
                  </div>
                ) : (
                  ""
                )}
              </div>
              <div className="">
                <h2 className="text-2xl font-bold text-black mb-3 md:text-3xl">
                  International Tour
                </h2>
                {itiDataInternational.length ? (
                  <InternationalTourSnippet
                    data={itiDataInternational}
                  ></InternationalTourSnippet>
                ) : (
                  ""
                )}
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

        {/* TRIP BY CATEGORY SECTION */}
        <div className="trip_by_category_section mb-6 md:p-4 lg:p-4">
          <div className="container">
            <h2 className="text-2xl font-bold text-black text-center mb-5 md:text-3xl">
              Trip By Category
            </h2>
            <div className="trip_by_category_tab_section shadow-xl p-4 rounded-lg md:p-8">
              <Tab.Group>
                <Tab.List
                  variant="link-tabs"
                  className="px-16 border-slate-300 border-solid border-b"
                >
                  <Tab>
                    <Tab.Button
                      onClick={() => getTabData("Holiday")}
                      className="w-full py-2"
                      as="button"
                    >
                      Holiday
                    </Tab.Button>
                  </Tab>
                  <Tab>
                    <Tab.Button
                      onClick={() => getTabData("Business")}
                      className="w-full py-2"
                      as="button"
                    >
                      Business
                    </Tab.Button>
                  </Tab>
                  <Tab>
                    <Tab.Button
                      onClick={() => getTabData("Honeymoon")}
                      className="w-full py-2"
                      as="button"
                    >
                      Honeymoon
                    </Tab.Button>
                  </Tab>
                  <Tab>
                    <Tab.Button
                      onClick={() => getTabData("Family")}
                      className="w-full py-2"
                      as="button"
                    >
                      Family
                    </Tab.Button>
                  </Tab>
                  <Tab>
                    <Tab.Button
                      onClick={() => getTabData("Religious")}
                      className="w-full py-2"
                      as="button"
                    >
                      Religious
                    </Tab.Button>
                  </Tab>
                  <Tab>
                    <Tab.Button
                      onClick={() => getTabData("Adventure")}
                      className="w-full py-2"
                      as="button"
                    >
                      Adventure
                    </Tab.Button>
                  </Tab>
                </Tab.List>
                <Tab.Panels className="mt-5">
                  <Tab.Panel className="leading-relaxed">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-10 lg:grid-cols-4">
                      {_.take(holiday, holiday.length).map((item, Key) => (
                        <>
                          <ItineraryCategorySnippet
                            data={item}
                          ></ItineraryCategorySnippet>
                        </>
                      ))}
                    </div>
                  </Tab.Panel>
                  <Tab.Panel className="leading-relaxed">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-10 lg:grid-cols-4">
                      {_.take(business, business.length).map((item, Key) => (
                        <>
                          <ItineraryCategorySnippet
                            data={item}
                          ></ItineraryCategorySnippet>
                        </>
                      ))}
                    </div>
                  </Tab.Panel>
                  <Tab.Panel className="leading-relaxed">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-10 lg:grid-cols-4">
                      {_.take(honeymoon, honeymoon.length).map((item, Key) => (
                        <>
                          <ItineraryCategorySnippet
                            data={item}
                          ></ItineraryCategorySnippet>
                        </>
                      ))}
                    </div>
                  </Tab.Panel>
                  <Tab.Panel className="leading-relaxed">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-10 lg:grid-cols-4">
                      {_.take(family, family.length).map((item, Key) => (
                        <>
                          <ItineraryCategorySnippet
                            data={item}
                          ></ItineraryCategorySnippet>
                        </>
                      ))}
                    </div>
                  </Tab.Panel>
                  <Tab.Panel className="leading-relaxed">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-10 lg:grid-cols-4">
                      {_.take(religious, religious.length).map((item, Key) => (
                        <>
                          <ItineraryCategorySnippet
                            data={item}
                          ></ItineraryCategorySnippet>
                        </>
                      ))}
                    </div>
                  </Tab.Panel>
                  <Tab.Panel className="leading-relaxed">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-10 lg:grid-cols-4">
                      {_.take(adventure, adventure.length).map((item, Key) => (
                        <>
                          <ItineraryCategorySnippet
                            data={item}
                          ></ItineraryCategorySnippet>
                        </>
                      ))}
                    </div>
                  </Tab.Panel>
                </Tab.Panels>
              </Tab.Group>
            </div>
          </div>
        </div>

        <div className="view_more text-center mt-8 mb-5 p-5">
          <Link
            className="bg-orange-500 rounded-full text-base font-normal text-white px-7 py-2 inline-block hover:bg-black"
            to="/enquiry"
            // onClick={() => (window.location.href = "/enquiry")}
          >
            Enquiry
          </Link>
        </div>

        {/* FEEDBACK FROM TRAVELLERS SECTION */}
        <div className="feedback_from_traveller_section mb-10 md:p-4 lg:p-4">
          <div className="container">
            <h2 className="text-2xl font-bold text-black text-center mb-5 md:text-3xl">
              Feedbacks from Travellers
            </h2>
            <div className="grid gap-x-8 gap-y-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              <div className="feedback_box_area text-center px-7 py-8 shadow-lg rounded-lg relative">
                <div className="absolute w-4/5 h-3/5 flex justify-center items-center mx-6">
                  <img alt="" className="" src={testiBG} />
                </div>

                <div className="feedback_box h-48 relative z-10">
                  <p className="text-sm font-medium leading-6 text-justify">
                    We had a wonderful experience! A warm welcome we received by
                    the hotel! Food was ready and served on time and the food
                    was excellent! We are having a comfortable time in this
                    hotel! All the best wishes for the Srijon team!!
                  </p>
                </div>
                <div className="text-right">
                  <h3 className="text-lg font-bold text-orange-500 relative z-10">
                    Naim Chowdhury
                  </h3>
                  <span className="text-xs font-medium mb-3.5 block relative z-10">
                    India
                  </span>
                </div>
                {/* <span className="text-xs font-medium relative z-10">
                                    Michale from Malaysia
                                </span> */}
              </div>

              <div className="feedback_box_area text-center px-7 py-8 shadow-lg rounded-lg relative">
                <div className="absolute w-4/5 h-3/5 flex justify-center items-center mx-6">
                  <img alt="" className="" src={testiBG} />
                </div>

                <div className="feedback_box h-48 relative z-10">
                  <p className="text-sm font-medium leading-6 text-justify">
                    Awesome experience stay was cozy and comfortable all the
                    transport provided was great and punctual sightseeings was
                    nice and scenic ..overall i would 100% recommend this
                    company for northeast packages with so reasonable price
                    ...especially a heartfull thanks to shyamal lahiri sir for
                    being a poc for every thing lastly food was amazing ...i
                    would really come back to the same agency for ally Packages
                    ..thank you singdha srijon tours and pvt ltd agency ..💙
                  </p>
                </div>
                <div className="text-right">
                  <h3 className="text-lg font-bold text-orange-500 relative z-10">
                    Vinay Raj
                  </h3>
                  <span className="text-xs font-medium mb-3.5 block relative z-10">
                    India
                  </span>
                </div>
                {/* <span className="text-xs font-medium relative z-10">
                                    Michale from Malaysia
                                </span> */}
              </div>

              <div className="feedback_box_area text-center px-7 py-8 shadow-lg rounded-lg relative">
                <div className="absolute w-4/5 h-3/5 flex justify-center items-center mx-6">
                  <img alt="" className="" src={testiBG} />
                </div>

                <div className="feedback_box h-48 relative z-10">
                  <p className="text-sm font-medium leading-6 text-justify">
                    Srijon tours all employee is very fine. My group leader is
                    also very fine.very good service. Awesome view room .
                    Excellent location.Always helpfull maneger and service boy .
                    When I will come I must contact with Srijon.
                  </p>
                </div>
                <div className="text-right">
                  <h3 className="text-lg font-bold text-orange-500 relative z-10">
                    Uttam Mandal
                  </h3>
                  <span className="text-xs font-medium mb-3.5 block relative z-10">
                    India
                  </span>
                </div>
                {/* <span className="text-xs font-medium relative z-10">
                                    Michale from Malaysia
                                </span> */}
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
