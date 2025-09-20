// @ts-nocheck
import DarkModeSwitcher from "../../components/DarkModeSwitcher";
import MainColorSwitcher from "../../components/MainColorSwitcher";
import logoUrl from "../../assets/images/logo.svg";
import illustrationUrl from "../../assets/images/illustration.svg";
import { FormInput, FormCheck } from "../../base-components/Form";
import clsx from "clsx";

import { Disclosure } from "../../base-components/Headless";

import SideMenu from "../../layouts/SideMenu";
import SimpleMenu from "../../layouts/SideMenu";
import TopMenu from "../../layouts/SideMenu";

import TopBar from "../../components/TopBar";

import { Link, useParams } from "react-router-dom";
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
import axios from "axios";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";

import { FormSelect } from "../../base-components/Form";

import TinySlider, {
  TinySliderElement,
} from "../../base-components/TinySlider";

//===========FrontEnd Componenets=======================

import Header from "../../frontend-components/layout/header";
import StickyMenu from "../../frontend-components/layout/stickyMenu";
import Footer from "../../frontend-components/layout/footer";
import server from "../../../apiconfig.json";
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

function Main() {
  const CUST_ID = 1234;

  const api = server;
  const API = server.API_URL;
  const imgPath = server.FILE_PATH;
  const params = useParams();
  const id = params.id;
  //console.log({id});

  const [hotel, setHotel] = useState([]);
  const [activity, setActivity] = useState([]);
  const [transport, setTransport] = useState([]);
  const [train, setTrain] = useState([]);
  const [cruise, setCruise] = useState([]);
  const [flight, setFlight] = useState([]);

  // console.log({hotel})
  // console.log({transport})
  // console.log({activity})
  // console.log({train})
  // console.log({cruise})
  // console.log({flight})

  const getCityName = (id) => {
    let c = props.city?.data?.filter((x) => x.id === Number(id));
    return c?.[0]?.cityName;
  };
  const getTransport = (id) => {
    let t = transport?.filter((x) => x.id === id);
    return t?.[0];
  };
  const getHotel = (id) => {
    let h = hotel?.filter((x) => x.id === id);
    return h?.[0];
  };
  const getActivity = (id) => {
    let a = activity?.filter((x) => x.id === id);
    return a?.[0];
  };
  const getTrain = (id) => {
    let t = train?.filter((x) => x.id === id);
    return t?.[0];
  };
  const getCruise = (id) => {
    let t = cruise?.filter((x) => x.id === id);
    return t?.[0];
  };
  const getFlight = (id) => {
    let f = flight?.filter((x) => x.id === id);
    return f?.[0];
  };

  const [superlargeModalSizePreview, setSuperlargeModalSizePreview] =
    useState(false);

  const [isLoading, setisLoading] = useState(true);
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

  const [itineraryData, setitineraryData] = useState({});
  const [galleryImg, setgalleryImg] = useState();
  const [itineraryDetails, setitineraryDetails] = useState([]);
  const [season, setSeason] = useState("On-season");
  const [pax, setPax] = useState([0, 0, 0, 0, [0, 0, 0, 0]]);
  const [paxItems, setPaxItems] = useState([]);

  const [dob, setDob] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [gender, setGender] = useState("");
  // const [travellers, setTravellers] = useState([{
  //    fname: 'LoggedInCustomer',
  //    lname: 'LoggedInCustomer',
  //    dob: '29 Oct, 1999',
  //    gender: 'Male',
  // }])
  const [travellers, setTravellers] = useState([]);
  const addTraveller = () => {
    setTravellers([...travellers, { fname, lname, dob, gender }]);
  };
  const removeTraveller = (id) => {
    // if (travellers.length > 1) {}
    let newTravellers = [...travellers];
    newTravellers.splice(id, 1);
    setTravellers(newTravellers);
  };

  const getItineraryData = (id) => {
    // const data = callApi(API, "POST", "super-itinerary-master/home-itinerary-details", {"id": id}).then((result)=>{
    callApi(API, "POST", `super-itinerary-master/${id}`, {}).then((result) => {
      console.log({ result: result.data });
      setitineraryData(result.data);
      setSeason(result.data.season);
      const gallery = result.data.gallery
        ? JSON.parse(result.data.gallery)
        : [];
      const dayDetails = result.data.dayDetails ? result.data.dayDetails : [];

      let locations = [];
      result.data.dayDetails.map((day) => {
        locations = [...new Set([...locations, ...day.locations])];
      });
      callAPIs(locations);

      const _pax = JSON.parse(result.data.pax);
      setPax(_pax);
      // console.log({pax})
      const _paxItems = JSON.parse(result.data.paxItems);
      setPaxItems(_paxItems);
      // console.log({paxItems})

      // calculatePrices(_paxItems)

      setitineraryDetails(dayDetails);
      setgalleryImg(gallery);
    });
  };

  const [cities, setCities] = useState({ data: [] });
  const [states, setStates] = useState({ data: [] });
  useEffect(() => {
    getItineraryData(id);
    callApi(API, "GET", `${server.API_ENDPOINT.CITY}`, {}).then((result) => {
      setCities(result);
    });
    callApi(API, "GET", `${server.API_ENDPOINT.STATE}`, {}).then((result) => {
      setStates(result);
    });
    setisLoading(false);
  }, []);
  // console.log({cities})
  // console.log({states})

  function calculateAge(dateOfBirth) {
    const today = new Date();
    const dob = new Date(dateOfBirth);

    let age = today.getFullYear() - dob.getFullYear();
    const dobMonth = dob.getMonth();
    const todayMonth = today.getMonth();

    if (
      todayMonth < dobMonth ||
      (todayMonth === dobMonth && today.getDate() < dob.getDate())
    ) {
      age--;
    }

    return age;
  }
  const [prices, setPrices] = useState({
    hotel: 0,
    transport: 0,
    activity: 0,
    train: 0,
    cruise: 0,
    flight: 0,
    food: 0,
    guide: 0,
  });
  const [totalPrice, setTotalPrice] = useState(0);
  const calculatePrices = (p) => {
    let newPrices = {
      hotel: 0,
      transport: 0,
      activity: 0,
      train: 0,
      cruise: 0,
      flight: 0,
      food: 0,
      guide: 0,
    };
    let N = travellers.length;
    p.map((item) => {
      if (item.type === "hotel") {
        // if (N === 1) {
        //    newPrices[item.type] += item.price
        // } else if (N % 2 === 0) {
        //    newPrices[item.type] += item.price * (N/2)
        // } else {
        //    newPrices[item.type] += (item.price * Math.floor(N/2)) + item.extraBedPrice
        // }
        let seasonCheckHotel = season === "On-season" ? "Season" : "OffSeason";
        let toggle = String(item.isAC) === "false" ? "Non" : "";
        travellers.map((t) => {
          let h = getHotel(item.id);
          let age = calculateAge(t.dob);
          if (age <= 5) {
            newPrices[item.type] += 0;
          } else if (age > 5 && age <= 12) {
            newPrices[item.type] +=
              Number(
                h?.["minChildCharge" + seasonCheckHotel + toggle + "AC"]
              ) || 0;
          } else {
            newPrices[item.type] +=
              Number(h?.["minRoomRent" + seasonCheckHotel + toggle + "AC"]) /
                (N === 1 ? 1 : 2) || 0;
          }
        });
      } else if (item.type === "transport") {
        newPrices[item.type] +=
          item.price * (Math.floor(N / item.for) + Number(!!(N % item.for)));
      } else if (item.type === "activity") {
        travellers.map((t) => {
          let a = getActivity(item.id);
          let age = calculateAge(t.dob);
          if (age <= 5) {
            newPrices[item.type] += Number(a?.infantFee) || 0;
          } else if (age > 5 && age <= 12) {
            newPrices[item.type] += Number(a?.kidFee) || 0;
          } else {
            newPrices[item.type] += Number(a?.adultFee) || 0;
          }
        });
      } else {
        newPrices[item.type] += item.price * N;
      }

      if (item.mealPrice) {
        newPrices.food += item.mealPrice * travellers.length;
      }
      if (item.guideFee) {
        newPrices.guide += item.guideFee;
      }
    });
    console.log({ newPrices });
    setPrices(newPrices);
  };
  useEffect(() => {
    calculatePrices(paxItems);
  }, [travellers]);

  const [cusEmail, setCusEmail] = useState();
  const [cusMobileCode, setCusMobileCode] = useState("91");
  const [cusMobileNo, setCusMobileNo] = useState();
  const [gstCity, setGstCity] = useState(1);
  const [gstState, setGstState] = useState(1);
  const [gstAddress, setGstAddress] = useState();
  const [cusSpecialRequest, setCusSpecialRequest] = useState();
  const submit = () => {
    const formData = {
      customerId: CUST_ID,
      itineraryId: Number(id),
      paxDetails: paxItems,
      travellerDetails: travellers,
      cusEmail,
      cusMobileCode,
      cusMobileNo,
      gstCity,
      gstState,
      gstAddress,
      cusSpecialRequest,
      paymentTotal: Object.keys(prices).reduce(
        (accumulator, Key) => accumulator + prices[Key],
        0
      ),
    };
    console.log({ formData });
    callApi(API, "POST", `${server.API_ENDPOINT.CUSTOMER}`, formData).then(
      (result) => {
        console.log({ submitResponse: result });
      }
    );
  };

  return (
    <>
      {/* HEADER SECTION TWO */}
      <StickyMenu></StickyMenu>
      <div className="bg-white overflow-hidden">
        {/* HEADER SECTION */}
        <Header></Header>

        {/* BANNER SECTION */}
        <BrowserView>
          <div className="banner_section relative bg-cover bg-bottom">
            <img
              alt="listingBannerImage"
              className="w-full"
              src={`${imgPath}${itineraryData.thumbnail}`}
            />
            <div className="banner_content py-14 w-full h-full xl:px-8">
              <div className="container flex-initial justify-between items-center h-full lg:flex">
                <div className="container py-8 flex justify-center items-center h-full">
                  <h1 className="text-center text-3xl font-bold text-white pb-5 md:text-4xl md:pb-6 lg:text-5xl">
                    {itineraryData.tourName}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </BrowserView>
        <MobileView>
          <div className="banner_section relative bg-cover bg-bottom h-[700px]">
            <img
              alt="listingBannerImage"
              className="w-full"
              src={`${imgPath}${itineraryData.thumbnail}`}
            />
            <div className="banner_content py-14 w-full h-full xl:px-8">
              <div className="container flex-initial justify-between items-center h-full lg:flex">
                <div className="container py-8 flex justify-center items-center h-full">
                  <h1 className="text-center text-3xl font-bold text-white pb-5 md:text-4xl md:pb-6 lg:text-5xl">
                    {itineraryData.tourName}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </MobileView>

        {/* TOUR DETAILS SECTION */}

        <div className="tour_details_section">
          <div className="container">
            <div className="my-12 md:mx-6 xl:mx-0 xl:px-8">
              <div className="flex">
                <div className="w-3/4 pr-8">
                  <div className="review_main_wrap p-8 rounded-lg bg-white border-slate-200 border-solid border shadow-lg">
                    <div className="p-0">
                      <Preview>
                        <Disclosure.Group>
                          <Disclosure>
                            <Disclosure.Button className="text-3xl text-current">
                              Traveller Details
                            </Disclosure.Button>
                            <Disclosure.Panel className="pt-8 leading-relaxed text-slate-600 dark:text-slate-500">
                              <div className="mb-0">
                                {/* <h2 className="text-2xl text-black">2 Travellers - <span className="text-orange-500 text-base">1 Room | 2 Adults</span></h2> */}
                                <h2 className="text-xl text-black">
                                  {travellers.length} Travellers
                                </h2>
                                <div className="py-3">
                                  <Preview>
                                    <div className="mt-3">
                                      <div className="flex flex-col mt-2 sm:flex-row">
                                        <FormCheck className="mr-2">
                                          <FormCheck.Input
                                            id="radio-switch-4"
                                            type="radio"
                                            name="horizontal_radio_button"
                                            value="horizontal-radio-chris-evans"
                                          />
                                          <FormCheck.Label htmlFor="radio-switch-4">
                                            I’m Booking For Myself
                                          </FormCheck.Label>
                                        </FormCheck>
                                        <FormCheck className="mt-2 mr-2 sm:mt-0">
                                          <FormCheck.Input
                                            id="radio-switch-5"
                                            type="radio"
                                            name="horizontal_radio_button"
                                            value="horizontal-radio-liam-neeson"
                                          />
                                          <FormCheck.Label htmlFor="radio-switch-5">
                                            I’m Booking for someone else
                                          </FormCheck.Label>
                                        </FormCheck>
                                      </div>
                                    </div>
                                  </Preview>
                                </div>
                                <div className="pb-3">
                                  {travellers.map((t, idx) => {
                                    return (
                                      <div className="shadow-md rounded-lg p-5 m-2 border border-slate-200 border-solid">
                                        <span className="font-semibold">
                                          {t.fname} {t.lname}
                                        </span>
                                        <br />
                                        <span>{t.gender}</span>
                                        <br />
                                        <span className="font-semibold">
                                          D.O.B:
                                        </span>{" "}
                                        <span>{t.dob}</span>
                                        <br />
                                        <label
                                          className="text-orange-500 text-xs"
                                          onClick={() => removeTraveller(idx)}
                                        >
                                          Remove
                                        </label>
                                      </div>
                                    );
                                  })}
                                </div>
                                <div className="add_traveller_section">
                                  <div className="add_traveller_box my-2 flex justify-start items-center bg-orange-50 py-3 px-4">
                                    <Lucide
                                      icon="User"
                                      className="text-orange-500 mr-4"
                                    />
                                    <h3
                                      onClick={(event: React.MouseEvent) => {
                                        event.preventDefault();
                                        setSuperlargeModalSizePreview(true);
                                      }}
                                      className="text-2xl text-black cursor-pointer hover:text-orange-500"
                                    >
                                      +Add Traveller{" "}
                                      <span className="text-orange-500 text-xs font-medium">
                                        Traveller {travellers.length + 1}
                                      </span>
                                    </h3>
                                  </div>
                                </div>
                              </div>
                              <div className="contact_details_section mt-8 mb-4">
                                <h2 className="text-2xl text-black">
                                  Please enter contact details
                                </h2>
                                <div className="py-5">
                                  <Preview>
                                    <div className="grid grid-cols-12 gap-2">
                                      <FormInput
                                        type="email"
                                        className="col-span-4"
                                        placeholder="Email"
                                        aria-label="default input inline 1"
                                        id="cusEmail"
                                        onChange={(e) =>
                                          setCusEmail(e.target.value)
                                        }
                                        value={cusEmail}
                                      />
                                      <FormSelect
                                        className="col-span-4"
                                        aria-label="Default select example"
                                        id="cusMobileCode"
                                        onChange={(e) =>
                                          setCusMobileCode(e.target.value)
                                        }
                                        value={cusMobileCode}
                                      >
                                        <option value="91">91</option>
                                        <option value="033">033</option>
                                        <option value="123">123</option>
                                      </FormSelect>
                                      <FormInput
                                        type="text"
                                        className="col-span-4"
                                        placeholder="Mobile"
                                        aria-label="default input inline 3"
                                        id="cusMobileNo"
                                        onChange={(e) =>
                                          setCusMobileNo(e.target.value)
                                        }
                                        value={cusMobileNo}
                                      />
                                    </div>
                                  </Preview>
                                </div>
                              </div>
                              <div className="contact_details_section mt-8 mb-4">
                                <h2 className="text-2xl text-black">
                                  Please enter GST details
                                </h2>
                                <div className="py-5">
                                  <Preview>
                                    <div className="grid grid-cols-12 gap-2">
                                      {/* <FormInput
                                                            type="text"
                                                            className="col-span-4"
                                                            placeholder="City"
                                                            aria-label="default input inline 1"
                                                         /> */}
                                      <FormSelect
                                        className="col-span-4"
                                        aria-label="Default select example"
                                        id="gstCity"
                                        onChange={(e) =>
                                          setGstCity(e.target.value)
                                        }
                                        value={gstCity}
                                      >
                                        {cities?.data.map((c) => {
                                          return (
                                            <option value={Number(c.id)}>
                                              {c.cityName}
                                            </option>
                                          );
                                        })}
                                      </FormSelect>
                                      <FormSelect
                                        className="col-span-4"
                                        aria-label="Default select example"
                                        id="gstState"
                                        onChange={(e) =>
                                          setGstState(e.target.value)
                                        }
                                        value={gstState}
                                      >
                                        {states?.data.map((s) => {
                                          return (
                                            <option value={Number(s.id)}>
                                              {s.stateName}
                                            </option>
                                          );
                                        })}
                                      </FormSelect>
                                      <FormInput
                                        type="text"
                                        className="col-span-4"
                                        placeholder="Address"
                                        aria-label="default input inline 3"
                                        id="gstAddress"
                                        onChange={(e) =>
                                          setGstAddress(e.target.value)
                                        }
                                        value={gstAddress}
                                      />
                                    </div>
                                  </Preview>
                                </div>
                              </div>
                              <div className="contact_details_section mt-8 mb-4">
                                <h2 className="text-2xl text-black">
                                  Special Requests
                                </h2>
                                <div className="py-5">
                                  <Preview>
                                    <div className="">
                                      <FormInput
                                        type="text"
                                        placeholder="Special Requests"
                                        id="cusSpecialRequest"
                                        onChange={(e) =>
                                          setCusSpecialRequest(e.target.value)
                                        }
                                        value={cusSpecialRequest}
                                      />
                                    </div>
                                  </Preview>
                                </div>
                              </div>
                            </Disclosure.Panel>
                          </Disclosure>
                          <Disclosure>
                            <Disclosure.Button className="text-3xl text-current">
                              Package Itinerary & Inclusions
                            </Disclosure.Button>
                            <Disclosure.Panel className="leading-relaxed text-slate-600 dark:text-slate-500">
                              <div className="tour_details_container">
                                {_.take(
                                  itineraryDetails,
                                  itineraryDetails.length
                                ).map((item, Key) => {
                                  return (
                                    <>
                                      <div className="mt-6 mb-9">
                                        <div className="day_plan_area">
                                          <div className="day_plan_box">
                                            <div className="day_title_section flex-initial justify-between items-center mb-5 md:flex">
                                              <div className="day_title bg-zinc-500 text-xs font-semibold text-white px-3.5 py-2.5 mb-3">
                                                Day {Key + 1} - {item.title}
                                              </div>
                                              <div className="day_travel_fair text-xs font-semibold text-black flex items-center">
                                                INCLUDED:{" "}
                                                <img
                                                  alt="flightIcon2"
                                                  className="px-1"
                                                  src={flightIcon2}
                                                />
                                                1 Flight |{" "}
                                                <img
                                                  alt="hotelIcon2"
                                                  className="px-1"
                                                  src={hotelIcon2}
                                                />
                                                1 Hotel |{" "}
                                                <img
                                                  alt="travelIcon"
                                                  className="px-1"
                                                  src={travelIcon}
                                                />
                                                1 Transfer
                                              </div>
                                            </div>
                                          </div>
                                        </div>

                                        <div className="col-span-12 intro-y box lg:col-span-12">
                                          <DayPlan
                                            plan={item.plan}
                                            locations={item.locations}
                                            fromID={Number(item.fromId)}
                                            toID={Number(item.toId)}
                                            city={cities}
                                            season={season}
                                            handleChange={(field, val) => {}}
                                            type="view"
                                          />
                                        </div>
                                      </div>
                                    </>
                                  );
                                })}
                              </div>
                            </Disclosure.Panel>
                          </Disclosure>
                          <Disclosure>
                            <Disclosure.Button className="text-3xl text-current">
                              Cancellation & Date Change
                            </Disclosure.Button>
                            <Disclosure.Panel className="leading-relaxed text-slate-600 dark:text-slate-500">
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industry's standard dummy text ever since the
                              1500s, when an unknown printer took a galley of
                              type and scrambled it to make a type specimen
                              book. It has survived not only five centuries, but
                              also the leap into electronic typesetting,
                              remaining essentially unchanged.
                            </Disclosure.Panel>
                          </Disclosure>
                        </Disclosure.Group>
                      </Preview>
                    </div>
                  </div>
                </div>
                <div className="w-1/4">
                  <div className="review_sidebar_wrap p-8 rounded-lg bg-white border-slate-200 border-solid border shadow-lg">
                    <h2 className="text-2xl font-bold text-center pb-6">
                      Package price details
                    </h2>
                    <div>
                      <ul>
                        {Object.keys(prices).map((Key) => {
                          if (prices[Key] != 0) {
                            return (
                              <li className="flex justify-between pb-4 mb-4 border-b border-inherit border-solid">
                                <p className="text-base font-semibold">
                                  {Key[0].toUpperCase() + Key.slice(1)}
                                </p>
                                <span className="text-base text-orange-500 font-semibold">
                                  ₹{prices[Key]}
                                </span>
                              </li>
                            );
                          }
                        })}
                      </ul>
                    </div>
                    {Object.keys(prices).reduce(
                      (accumulator, Key) => accumulator + prices[Key],
                      0
                    ) != 0 ? (
                      <div className="flex justify-between pb-4 mb-4 border-b border-inherit border-solid">
                        <p className="text-base font-semibold">Total Price</p>
                        <span className="text-xl text-orange-500 font-semibold">
                          ₹
                          {Object.keys(prices).reduce(
                            (accumulator, Key) => accumulator + prices[Key],
                            0
                          )}
                        </span>
                      </div>
                    ) : (
                      ""
                    )}
                    <div className="flex justify-between pb-4 mb-4 border-b border-inherit border-solid">
                      <p className="text-base font-semibold">
                        Base price for two
                      </p>
                      <span className="text-xl text-black-500 font-semibold">
                        ₹{pax[1] + pax[4][0] + pax[2]}
                      </span>
                    </div>
                    <button
                      className="w-full bg-orange-500 rounded-full text-base font-medium text-white px-6 py-3  hover:bg-black"
                      onClick={() => submit()}
                    >
                      Proceed to Pay
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* GALLERY SECTION */}
        {itineraryData.gallery && (
          <div className="gallery_section">
            <div className="container">
              <div className="mb-10 md:mx-5 xl:mx-0 xl:px-8">
                <h2 className="text-2xl font-bold text-black mb-3">Gallery</h2>

                <div className="grid gap-4 grid-cols-2 mb-7 md:grid md:gap-8 md:grid-cols-4">
                  <Gallery>
                    {_.take(galleryImg, galleryImg.length).map((item, Key) => {
                      return (
                        <>
                          <Item
                            original={`${imgPath}${item}`}
                            thumbnail={`${imgPath}${item}`}
                            width="1024"
                            height="768"
                          >
                            {({ ref, open }) => (
                              <img
                                ref={ref}
                                onClick={open}
                                alt=""
                                className="rounded-lg w-full cursor-pointer"
                                src={`${imgPath}${item}`}
                              />
                            )}
                          </Item>
                        </>
                      );
                    })}
                  </Gallery>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* BEGIN: Super Large Modal Content */}
        <Dialog
          size="xl"
          open={superlargeModalSizePreview}
          onClose={() => {
            setSuperlargeModalSizePreview(false);
          }}
        >
          <Dialog.Panel className="p-10">
            <div className="text-2xl text-center mb-4 font-medium text-orange-500">
              Add Traveller Details
            </div>
            <div className="py-5">
              <Preview>
                <div className="grid grid-cols-12 gap-2">
                  <div className="col-span-4">
                    <label className="inline-block mb-2 text-left">
                      First Name<span className="text-red-600">*</span>
                    </label>
                    <FormInput
                      type="text"
                      placeholder="First Name"
                      aria-label="default input inline 1"
                      onChange={(e) => setFname(e.target.value)}
                    />
                  </div>
                  <div className="col-span-4">
                    <label className="inline-block mb-2 text-left">
                      Last Name<span className="text-red-600">*</span>
                    </label>
                    <FormInput
                      type="text"
                      placeholder="Last Name"
                      aria-label="default input inline 1"
                      onChange={(e) => setLname(e.target.value)}
                    />
                  </div>
                  <div className="block col-span-4">
                    <label className="inline-block mb-2 text-left">
                      Date of Birth<span className="text-red-600">*</span>
                    </label>
                    <Litepicker
                      value={dob}
                      onChange={setDob}
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
                    />
                  </div>
                  <div className="col-span-4">
                    <label className="inline-block mb-2 text-left">
                      Gender<span className="text-red-600">*</span>
                    </label>
                    <FormSelect
                      aria-label="Default select example"
                      onChange={(e) => setGender(e.target.value)}
                    >
                      <option value="">Select</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </FormSelect>
                  </div>
                </div>
              </Preview>
              <div className="text-center mt-16">
                <Button
                  className="bg-orange-500 rounded-full text-base font-medium text-white px-8 py-3 hover:bg-black"
                  onClick={() => {
                    addTraveller();
                    setSuperlargeModalSizePreview(false);
                  }}
                >
                  Add Traveller
                </Button>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
        {/* END: Super Large Modal Content */}

        {/* FOOTER SECTION */}
        <Footer></Footer>
      </div>
    </>
  );
}

export default Main;
