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

import customizeIcon from "../../assets/images/customize_icon.png";

import becamePartnerIcon from "../../assets/images/became_partner_icon.png";

import testiBG from "../../assets/images/testibg.png";

import footerImg from "../../assets/images/footer_banner.png";

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
import { useState, useRef } from "react";

import {
   FormSelect
} from "../../base-components/Form";

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


function Main() {

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

   const [superlargeModalSizePreview, setSuperlargeModalSizePreview] = useState(false);
   const sendButtonRef = useRef(null);


   return (
      <>

         <div className="bg-white overflow-hidden relative">



            {/* HEADER SECTION */}
            <div className="header_section flex-initial px-2 py-3 bg-white md:flex-initial md:px-8 lg:flex">
               <div className="logo_area text-center mb-4 w-full md:w-full md:text-left md:mb-0 lg:w-1/5">
                  <Link to="/">
                     <img
                        alt="Logo"
                        className="inline-block w-24 md:block md:my-0 md:mx-auto lg:my-0 lg:mx-0"
                        src={siteLogo}
                     />
                  </Link>
               </div>
               <div className="header_right_area w-full md:w-full md:mt-4 lg:w-4/5">
                  <div className="header_right_top flex justify-end py-2">
                     <div className="customize_your_tour ml-8 md:hidden xl:block">
                        <Link className="flex text-base font-bold uppercase text-orange-500 hover:text-black" to="/">
                           <img
                              alt="customizeIcon"
                              className="mb-1.5 mr-1.5"
                              src={customizeIcon}
                           />
                           Customize Tour
                        </Link>
                     </div>
                     <div className="customize_your_tour ml-8 md:hidden xl:block">
                        <Link className="flex text-base font-bold uppercase text-orange-500 hover:text-black" to="/">
                           <img
                              alt="becamePartnerIcon"
                              className="mb-1.5 mr-1.5"
                              src={becamePartnerIcon}
                           />
                           Become a Partner
                        </Link>
                     </div>
                     <div className="phone_section ml-0 md:ml-8">
                        <p className="text-base flex">
                           <Link to="\" className="flex text-orange-500 hover:text-black">
                              <Lucide icon="PhoneCall" className="text-lime-600 mx-auto text-black" />
                              <strong className="ml-1"> +91-1231-1231 </strong>
                           </Link>
                        </p>
                     </div>
                     <div className="account_section ml-4 md:ml-6">
                        <Link
                           className="bg-orange-500 rounded-lg text-sm font-medium text-white px-4 py-2  hover:bg-black md:px-6"
                           as="a"
                           href="#"
                           variant="primary"
                           onClick={(event: React.MouseEvent) => {
                              event.preventDefault();
                              setSuperlargeModalSizePreview(true);
                           }}
                        >
                           Sign In / Create Account
                        </Link>
                        {/* <Link className="bg-black rounded-full text-sm font-medium text-white px-4 py-2 ml-2 hover:bg-orange-500 md:px-6 md:ml-3.5" to="/">My Account</Link> */}
                     </div>
                     {/* <div className="header_social_area flex ml-5">
                        <Link className="pl-2.5" to="/"><img alt="facebookIcon" className="" src={facebookIcon} /></Link>
                        <Link className="pl-2.5" to="/"><img alt="twitterIcon" className="" src={twitterIcon} /></Link>
                        <Link className="pl-2.5" to="/"><img alt="linkedinIcon" className="" src={linkedinIcon} /></Link>
                        <Link className="pl-2.5" to="/"><img alt="youtubeIcon" className="" src={youtubeIcon} /></Link>
                        <Link className="pl-2.5" to="/"><img alt="instagramIcon" className="" src={instagramIcon} /></Link>
                        <Link className="pl-2.5" to="/"><img alt="lastSocialIcon" className="" src={lastSocialIcon} /></Link>
                     </div> */}
                  </div>
                  {/* <div className="main_menu py-3 hidden md:block">

                     <ul className="flex justify-end">
                        <li><Link className="text-base font-medium text-black pl-8 hover:text-orange-500 md:px-2 md:text-sm xl:text-base xl:pl-6" to="/">Domestic Tours</Link></li>
                        <li><Link className="text-base font-medium text-black pl-8 hover:text-orange-500 md:px-2 md:text-sm xl:text-base xl:pl-6" to="/">Special Tour</Link></li>
                        <li><Link className="text-base font-medium text-black pl-8 hover:text-orange-500 md:px-2 md:text-sm xl:text-base xl:pl-6" to="/">All Tours</Link></li>
                        <li><Link className="text-base font-medium text-black pl-8 hover:text-orange-500 md:px-2 md:text-sm xl:text-base xl:pl-6" to="/">Contact Us</Link></li>
                        <li><Link className="text-base font-medium text-black pl-8 hover:text-orange-500 md:px-2 md:text-sm xl:text-base xl:pl-6" to="/">Bolg</Link></li>
                        <li><Link className="text-base font-medium text-black pl-8 hover:text-orange-500 md:px-2 md:text-sm xl:text-base xl:pl-6" to="/">Become a partner</Link></li>
                        <li><Link className="text-base font-medium text-black pl-8 hover:text-orange-500 md:px-2 md:text-sm xl:text-base xl:pl-6" to="/">Quick Enquiry</Link></li>
                     </ul>

                  </div> */}
               </div>
            </div>

            {/* BANNER SECTION */}
            <div className="banner_section relative bg-cover bg-bottom" style={{ backgroundImage: `url(${bannerImage})` }}>
               {/* <img
                  alt="Banner"
                  className="w-full"
                  src={bannerImage}
               /> */}
               <div className="banner_content py-10 w-full h-full md:py-10 lg:py-20">
                  <div className="container flex justify-center items-center h-full">

                     <div className="relative">

                        <h1 className="text-center text-3xl font-bold text-white pb-5 md:text-4xl md:pb-6 lg:text-5xl">Plan Your Tour Now!</h1>
                        <p className="text-center text-base font-medium text-white pb-8 w-full my-0 mx-auto md:w-3/6">Experience our various exciting packages and make your hotel reservations. Find vacation packages also and search cheap hotels and events.</p>

                        <div className="booking_type_section mb-5 sticky top-0 bg-gradient-to-r from-orange-300 to-orange-500 rounded-sm ring-2 ring-orange-500 p-5 rounded-lg shadow-[0_35px_60px_-15px_rgba(251,146,60,0.7)]">
                           <ul className="grid grid-cols-2 gap-0 md:grid-cols-6 lg:grid-cols-6 lg:grid-cols-0">
                              <li>
                                 <Link className="text-base font-semibold text-white mx-4 flex justify-center items-center hover:text-black md:mx-8 xl:mx-2 lg:mx-2" to="/">
                                    <img
                                       alt="hotelIcon"
                                       className="mb-1.5 mr-1.5"
                                       src={hotelIcon}
                                    />
                                    Hotels & Homes
                                 </Link>
                              </li>
                              <li>
                                 <Link className="text-base font-semibold text-white mx-4 flex justify-center items-center hover:text-black md:mx-8 xl:mx-2 lg:mx-2" to="/">
                                    <img
                                       alt="privateIcon"
                                       className="mb-1.5 mr-1.5"
                                       src={privateIcon}
                                    />
                                    Private Stays
                                 </Link>
                              </li>
                              <li>
                                 <Link className="text-base font-semibold text-white mx-4 flex justify-center items-center hover:text-black md:mx-8 xl:mx-2 lg:mx-2" to="/">
                                    <img
                                       alt="flightIcon"
                                       className="mb-1.5 mr-1.5"
                                       src={flightIcon}
                                    />
                                    Flight & Hotels
                                 </Link>
                              </li>
                              <li>
                                 <Link className="text-base font-semibold text-white mx-4 flex justify-center items-center hover:text-black md:mx-8 xl:mx-2 lg:mx-2" to="/">
                                    <img
                                       alt="onlyFlightIcon"
                                       className="mb-1.5 mr-1.5"
                                       src={onlyFlightIcon}
                                    />
                                    Only Flights
                                 </Link>
                              </li>
                              <li>
                                 <Link className="text-base font-semibold text-white mx-4 flex justify-center items-center hover:text-black md:mx-8 xl:mx-2 lg:mx-2" to="/">
                                    <img
                                       alt="longStayIcon"
                                       className="mb-1.5 mr-1.5"
                                       src={longStayIcon}
                                    />
                                    Long Stays
                                 </Link>
                              </li>
                              <li>
                                 <Link className="text-base font-semibold text-white mx-4 flex justify-center items-center hover:text-black md:mx-8 xl:mx-2 lg:mx-2" to="/">
                                    <img
                                       alt="activityIcon"
                                       className="mb-1.5 mr-1.5"
                                       src={activityIcon}
                                    />
                                    Activities
                                 </Link>
                              </li>
                           </ul>
                        </div>

                        {/* <div className="booking_type_next_section py-5">
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
                        </div> */}

                        <div className="form_area pt-10">
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

            {/* SPECIAL TOURS SECTION */}
            <div className="container">
               <div className="special_tour_section border border-gray-300 border-solid rounded-3xl my-16 p-4 md:p-6 md:mx-4 md:my-8 lg:mx-4 lg:my-8">
                  <h2 className="text-3xl font-bold text-black">Special Tours</h2>

                  <div className="special_tours_tab_container w-full relative">
                     <Tab.Group>
                        <Tab.List variant="link-tabs" className="px-16 border-slate-300 border-solid border-b">
                           <Tab>
                              <Tab.Button className="text-sm font-medium mx-0 px-2 md:mx-2.5 lg:mx-1" as="button">
                                 All Offers
                              </Tab.Button>
                           </Tab>
                           <Tab>
                              <Tab.Button className="text-sm font-medium mx-0 px-2 md:mx-2.5 lg:mx-1" as="button">
                                 Flights
                              </Tab.Button>
                           </Tab>
                           <Tab>
                              <Tab.Button className="text-sm font-medium mx-0 px-2 md:mx-2.5 lg:mx-1" as="button">
                                 Hotels
                              </Tab.Button>
                           </Tab>
                           <Tab>
                              <Tab.Button className="text-sm font-medium mx-0 px-2 md:mx-2.5 lg:mx-1" as="button">
                                 Holidays
                              </Tab.Button>
                           </Tab>
                           <Tab>
                              <Tab.Button className="text-sm font-medium mx-0 px-2 md:mx-2.5 lg:mx-1" as="button">
                                 Trains
                              </Tab.Button>
                           </Tab>
                           <Tab>
                              <Tab.Button className="text-sm font-medium mx-0 px-2 md:mx-2.5 lg:mx-1" as="button">
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
                                                   nav: false
                                                },
                                                768: {
                                                   items: 2,
                                                   nav: true
                                                },
                                                1440: {
                                                   items: 3
                                                }
                                             }

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
                                                <span className="text-xs font-medium text-center">T&C’s Apply</span>
                                             </div>
                                             <div className="special_tour_box_right">
                                                <p className="text-xs font-medium uppercase">INTL HOTELS</p>
                                                <h3 className="text-xl font-semibold mb-5">Up <span className="text-orange-500">to</span> 30%OFF*</h3>
                                                <span className="text-xs font-normal">on International Hotels.</span>
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
                                                <span className="text-xs font-medium text-center">T&C’s Apply</span>
                                             </div>
                                             <div className="special_tour_box_right">
                                                <p className="text-xs font-medium uppercase">INTL HOTELS</p>
                                                <h3 className="text-xl font-semibold mb-5">Up to<span className="text-orange-500">40%</span> OFF*</h3>
                                                <span className="text-xs font-normal">on International Hotels.</span>
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
                                                <span className="text-xs font-medium text-center">T&C’s Apply</span>
                                             </div>
                                             <div className="special_tour_box_right">
                                                <p className="text-xs font-medium uppercase">INTL HOTELS</p>
                                                <h3 className="text-xl font-semibold mb-5">Up to<span className="text-orange-500">30%</span> OFF*</h3>
                                                <span className="text-xs font-normal">on International Hotels.</span>
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
                                                <span className="text-xs font-medium text-center">T&C’s Apply</span>
                                             </div>
                                             <div className="special_tour_box_right">
                                                <p className="text-xs font-medium uppercase">INTL HOTELS</p>
                                                <h3 className="text-xl font-semibold mb-5">Up to <span className="text-orange-500">30%</span>OFF*</h3>
                                                <span className="text-xs font-normal">on International Hotels.</span>
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
                                                <span className="text-xs font-medium text-center">T&C’s Apply</span>
                                             </div>
                                             <div className="special_tour_box_right">
                                                <p className="text-xs font-medium uppercase">INTL HOTELS</p>
                                                <h3 className="text-xl font-semibold mb-5">Up to<span className="text-orange-500">40%</span>OFF*</h3>
                                                <span className="text-xs font-normal">on International Hotels.</span>
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
                                                   nav: false
                                                },
                                                768: {
                                                   items: 2,
                                                   nav: true
                                                },
                                                1440: {
                                                   items: 3
                                                }
                                             }

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
                                                <span className="text-xs font-medium text-center">T&C’s Apply</span>
                                             </div>
                                             <div className="special_tour_box_right">
                                                <p className="text-xs font-medium uppercase">INTL HOTELS</p>
                                                <h3 className="text-xl font-semibold mb-5">Up <span className="text-orange-500">to</span> 30%OFF*</h3>
                                                <span className="text-xs font-normal">on International Hotels.</span>
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
                                                <span className="text-xs font-medium text-center">T&C’s Apply</span>
                                             </div>
                                             <div className="special_tour_box_right">
                                                <p className="text-xs font-medium uppercase">INTL HOTELS</p>
                                                <h3 className="text-xl font-semibold mb-5">Up to<span className="text-orange-500">40%</span> OFF*</h3>
                                                <span className="text-xs font-normal">on International Hotels.</span>
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
                                                <span className="text-xs font-medium text-center">T&C’s Apply</span>
                                             </div>
                                             <div className="special_tour_box_right">
                                                <p className="text-xs font-medium uppercase">INTL HOTELS</p>
                                                <h3 className="text-xl font-semibold mb-5">Up to<span className="text-orange-500">30%</span> OFF*</h3>
                                                <span className="text-xs font-normal">on International Hotels.</span>
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
                                                <span className="text-xs font-medium text-center">T&C’s Apply</span>
                                             </div>
                                             <div className="special_tour_box_right">
                                                <p className="text-xs font-medium uppercase">INTL HOTELS</p>
                                                <h3 className="text-xl font-semibold mb-5">Up to <span className="text-orange-500">30%</span>OFF*</h3>
                                                <span className="text-xs font-normal">on International Hotels.</span>
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
                                                <span className="text-xs font-medium text-center">T&C’s Apply</span>
                                             </div>
                                             <div className="special_tour_box_right">
                                                <p className="text-xs font-medium uppercase">INTL HOTELS</p>
                                                <h3 className="text-xl font-semibold mb-5">Up to<span className="text-orange-500">40%</span>OFF*</h3>
                                                <span className="text-xs font-normal">on International Hotels.</span>
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
                                                   nav: false
                                                },
                                                768: {
                                                   items: 2,
                                                   nav: true
                                                },
                                                1440: {
                                                   items: 3
                                                }
                                             }

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
                                                <span className="text-xs font-medium text-center">T&C’s Apply</span>
                                             </div>
                                             <div className="special_tour_box_right">
                                                <p className="text-xs font-medium uppercase">INTL HOTELS</p>
                                                <h3 className="text-xl font-semibold mb-5">Up <span className="text-orange-500">to</span> 30%OFF*</h3>
                                                <span className="text-xs font-normal">on International Hotels.</span>
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
                                                <span className="text-xs font-medium text-center">T&C’s Apply</span>
                                             </div>
                                             <div className="special_tour_box_right">
                                                <p className="text-xs font-medium uppercase">INTL HOTELS</p>
                                                <h3 className="text-xl font-semibold mb-5">Up to<span className="text-orange-500">40%</span> OFF*</h3>
                                                <span className="text-xs font-normal">on International Hotels.</span>
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
                                                <span className="text-xs font-medium text-center">T&C’s Apply</span>
                                             </div>
                                             <div className="special_tour_box_right">
                                                <p className="text-xs font-medium uppercase">INTL HOTELS</p>
                                                <h3 className="text-xl font-semibold mb-5">Up to<span className="text-orange-500">30%</span> OFF*</h3>
                                                <span className="text-xs font-normal">on International Hotels.</span>
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
                                                <span className="text-xs font-medium text-center">T&C’s Apply</span>
                                             </div>
                                             <div className="special_tour_box_right">
                                                <p className="text-xs font-medium uppercase">INTL HOTELS</p>
                                                <h3 className="text-xl font-semibold mb-5">Up to <span className="text-orange-500">30%</span>OFF*</h3>
                                                <span className="text-xs font-normal">on International Hotels.</span>
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
                                                <span className="text-xs font-medium text-center">T&C’s Apply</span>
                                             </div>
                                             <div className="special_tour_box_right">
                                                <p className="text-xs font-medium uppercase">INTL HOTELS</p>
                                                <h3 className="text-xl font-semibold mb-5">Up to<span className="text-orange-500">40%</span>OFF*</h3>
                                                <span className="text-xs font-normal">on International Hotels.</span>
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
                                                   nav: false
                                                },
                                                768: {
                                                   items: 2,
                                                   nav: true
                                                },
                                                1440: {
                                                   items: 3
                                                }
                                             }

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
                                                <span className="text-xs font-medium text-center">T&C’s Apply</span>
                                             </div>
                                             <div className="special_tour_box_right">
                                                <p className="text-xs font-medium uppercase">INTL HOTELS</p>
                                                <h3 className="text-xl font-semibold mb-5">Up <span className="text-orange-500">to</span> 30%OFF*</h3>
                                                <span className="text-xs font-normal">on International Hotels.</span>
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
                                                <span className="text-xs font-medium text-center">T&C’s Apply</span>
                                             </div>
                                             <div className="special_tour_box_right">
                                                <p className="text-xs font-medium uppercase">INTL HOTELS</p>
                                                <h3 className="text-xl font-semibold mb-5">Up to<span className="text-orange-500">40%</span> OFF*</h3>
                                                <span className="text-xs font-normal">on International Hotels.</span>
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
                                                <span className="text-xs font-medium text-center">T&C’s Apply</span>
                                             </div>
                                             <div className="special_tour_box_right">
                                                <p className="text-xs font-medium uppercase">INTL HOTELS</p>
                                                <h3 className="text-xl font-semibold mb-5">Up to<span className="text-orange-500">30%</span> OFF*</h3>
                                                <span className="text-xs font-normal">on International Hotels.</span>
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
                                                <span className="text-xs font-medium text-center">T&C’s Apply</span>
                                             </div>
                                             <div className="special_tour_box_right">
                                                <p className="text-xs font-medium uppercase">INTL HOTELS</p>
                                                <h3 className="text-xl font-semibold mb-5">Up to <span className="text-orange-500">30%</span>OFF*</h3>
                                                <span className="text-xs font-normal">on International Hotels.</span>
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
                                                <span className="text-xs font-medium text-center">T&C’s Apply</span>
                                             </div>
                                             <div className="special_tour_box_right">
                                                <p className="text-xs font-medium uppercase">INTL HOTELS</p>
                                                <h3 className="text-xl font-semibold mb-5">Up to<span className="text-orange-500">40%</span>OFF*</h3>
                                                <span className="text-xs font-normal">on International Hotels.</span>
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
                                                   nav: false
                                                },
                                                768: {
                                                   items: 2,
                                                   nav: true
                                                },
                                                1440: {
                                                   items: 3
                                                }
                                             }

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
                                                <span className="text-xs font-medium text-center">T&C’s Apply</span>
                                             </div>
                                             <div className="special_tour_box_right">
                                                <p className="text-xs font-medium uppercase">INTL HOTELS</p>
                                                <h3 className="text-xl font-semibold mb-5">Up <span className="text-orange-500">to</span> 30%OFF*</h3>
                                                <span className="text-xs font-normal">on International Hotels.</span>
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
                                                <span className="text-xs font-medium text-center">T&C’s Apply</span>
                                             </div>
                                             <div className="special_tour_box_right">
                                                <p className="text-xs font-medium uppercase">INTL HOTELS</p>
                                                <h3 className="text-xl font-semibold mb-5">Up to<span className="text-orange-500">40%</span> OFF*</h3>
                                                <span className="text-xs font-normal">on International Hotels.</span>
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
                                                <span className="text-xs font-medium text-center">T&C’s Apply</span>
                                             </div>
                                             <div className="special_tour_box_right">
                                                <p className="text-xs font-medium uppercase">INTL HOTELS</p>
                                                <h3 className="text-xl font-semibold mb-5">Up to<span className="text-orange-500">30%</span> OFF*</h3>
                                                <span className="text-xs font-normal">on International Hotels.</span>
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
                                                <span className="text-xs font-medium text-center">T&C’s Apply</span>
                                             </div>
                                             <div className="special_tour_box_right">
                                                <p className="text-xs font-medium uppercase">INTL HOTELS</p>
                                                <h3 className="text-xl font-semibold mb-5">Up to <span className="text-orange-500">30%</span>OFF*</h3>
                                                <span className="text-xs font-normal">on International Hotels.</span>
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
                                                <span className="text-xs font-medium text-center">T&C’s Apply</span>
                                             </div>
                                             <div className="special_tour_box_right">
                                                <p className="text-xs font-medium uppercase">INTL HOTELS</p>
                                                <h3 className="text-xl font-semibold mb-5">Up to<span className="text-orange-500">40%</span>OFF*</h3>
                                                <span className="text-xs font-normal">on International Hotels.</span>
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
                                                   nav: false
                                                },
                                                768: {
                                                   items: 2,
                                                   nav: true
                                                },
                                                1440: {
                                                   items: 3
                                                }
                                             }

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
                                                <span className="text-xs font-medium text-center">T&C’s Apply</span>
                                             </div>
                                             <div className="special_tour_box_right">
                                                <p className="text-xs font-medium uppercase">INTL HOTELS</p>
                                                <h3 className="text-xl font-semibold mb-5">Up <span className="text-orange-500">to</span> 30%OFF*</h3>
                                                <span className="text-xs font-normal">on International Hotels.</span>
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
                                                <span className="text-xs font-medium text-center">T&C’s Apply</span>
                                             </div>
                                             <div className="special_tour_box_right">
                                                <p className="text-xs font-medium uppercase">INTL HOTELS</p>
                                                <h3 className="text-xl font-semibold mb-5">Up to<span className="text-orange-500">40%</span> OFF*</h3>
                                                <span className="text-xs font-normal">on International Hotels.</span>
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
                                                <span className="text-xs font-medium text-center">T&C’s Apply</span>
                                             </div>
                                             <div className="special_tour_box_right">
                                                <p className="text-xs font-medium uppercase">INTL HOTELS</p>
                                                <h3 className="text-xl font-semibold mb-5">Up to<span className="text-orange-500">30%</span> OFF*</h3>
                                                <span className="text-xs font-normal">on International Hotels.</span>
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
                                                <span className="text-xs font-medium text-center">T&C’s Apply</span>
                                             </div>
                                             <div className="special_tour_box_right">
                                                <p className="text-xs font-medium uppercase">INTL HOTELS</p>
                                                <h3 className="text-xl font-semibold mb-5">Up to <span className="text-orange-500">30%</span>OFF*</h3>
                                                <span className="text-xs font-normal">on International Hotels.</span>
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
                                                <span className="text-xs font-medium text-center">T&C’s Apply</span>
                                             </div>
                                             <div className="special_tour_box_right">
                                                <p className="text-xs font-medium uppercase">INTL HOTELS</p>
                                                <h3 className="text-xl font-semibold mb-5">Up to<span className="text-orange-500">40%</span>OFF*</h3>
                                                <span className="text-xs font-normal">on International Hotels.</span>
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
                  <h2 className="text-3xl font-bold text-black text-center mb-3">Trip By Destination</h2>
                  <p className="text-sm font-medium text-neutral-500 text-center mb-6">World's leading tour and travels Booking website,Over 20,000 packages worldwide.</p>

                  <div className="trip_by_destination_list">

                     <div className="grid gap-x-8 gap-y-4 grid-cols-1 mb-8 md:grid-cols-3">

                        <div className="w-full rounded-md mx-0 md:mx-1 lg:mx-1">
                           <div className="trip_by_destination_list_img rounded-t-lg bg-cover h-72 bg-center bg-no-repeat" style={{ backgroundImage: `url(${uploadImg})` }}>
                              <div
                                 className='flex items-center justify-center'>
                                 <div className="overflow-hidden cursor-pointer relative group w-full h-72">
                                    <div className="package_duration absolute top-7 right-0 bg-black py-2 px-6">
                                       <p className="text-white">3 Nights 4 Days</p>
                                    </div>
                                    <div
                                       className="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/100 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-0 text-white flex items-end">
                                       <div className="pt-2">
                                          <div
                                             className="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                                             <div className="font-bold text-xl">Hilighted place</div>

                                             <div className="opacity-100 text-sm ">
                                                <ul className="pb-16">
                                                   <li className="w-2/4 float-left mb-2 flex"><Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Lachen</li>
                                                   <li className="w-2/4 float-left mb-2 flex"><Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Lachung</li>
                                                   <li className="w-2/4 float-left mb-2 flex"><Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Gurudongmar lake</li>
                                                   <li className="w-2/4 float-left mb-2 flex"><Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Matnitop</li>
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
                              <p className="text-white text-base py-3 w-3/4 lg:text-sm xl:text-base">Sikkim days package 10days 9Nights</p>
                              <div className="w-1/4">
                                 <p className="text-white text-base text-right">₹ <span className="text-2xl font-semibold text-orange-500 lg:text-sm xl:text-xl 2xl:text-2xl">50,000</span></p>
                              </div>
                           </div>
                        </div>

                        <div className="w-full rounded-md mx-0 md:mx-1 lg:mx-1">
                           <div className="trip_by_destination_list_img rounded-t-lg bg-cover h-72 bg-center bg-no-repeat" style={{ backgroundImage: `url(${uploadImg})` }}>
                              <div
                                 className='flex items-center justify-center'>
                                 <div className="overflow-hidden cursor-pointer relative group w-full h-72">
                                    <div className="package_duration absolute top-7 right-0 bg-black py-2 px-6">
                                       <p className="text-white">3 Nights 4 Days</p>
                                    </div>
                                    <div
                                       className="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/100 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-0 text-white flex items-end">
                                       <div className="pt-2">
                                          <div
                                             className="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                                             <div className="font-bold text-xl">Hilighted place</div>

                                             <div className="opacity-100 text-sm ">
                                                <ul className="pb-16">
                                                   <li className="w-2/4 float-left mb-2 flex"><Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Lachen</li>
                                                   <li className="w-2/4 float-left mb-2 flex"><Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Lachung</li>
                                                   <li className="w-2/4 float-left mb-2 flex"><Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Gurudongmar lake</li>
                                                   <li className="w-2/4 float-left mb-2 flex"><Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Matnitop</li>
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
                              <p className="text-white text-base py-3 w-3/4 lg:text-sm xl:text-base">Sikkim days package 10days 9Nights</p>
                              <div className="w-1/4">
                                 <p className="text-white text-base text-right">₹ <span className="text-2xl font-semibold text-orange-500 lg:text-sm xl:text-xl 2xl:text-2xl">50,000</span></p>
                              </div>
                           </div>
                        </div>

                        <div className="w-full rounded-md mx-0 md:mx-1 lg:mx-1">
                           <div className="trip_by_destination_list_img rounded-t-lg bg-cover h-72 bg-center bg-no-repeat" style={{ backgroundImage: `url(${uploadImg})` }}>
                              <div
                                 className='flex items-center justify-center'>
                                 <div className="overflow-hidden cursor-pointer relative group w-full h-72">
                                    <div className="package_duration absolute top-7 right-0 bg-black py-2 px-6">
                                       <p className="text-white">3 Nights 4 Days</p>
                                    </div>
                                    <div
                                       className="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/100 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-0 text-white flex items-end">
                                       <div className="pt-2">
                                          <div
                                             className="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                                             <div className="font-bold text-xl">Hilighted place</div>

                                             <div className="opacity-100 text-sm ">
                                                <ul className="pb-16">
                                                   <li className="w-2/4 float-left mb-2 flex"><Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Lachen</li>
                                                   <li className="w-2/4 float-left mb-2 flex"><Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Lachung</li>
                                                   <li className="w-2/4 float-left mb-2 flex"><Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Gurudongmar lake</li>
                                                   <li className="w-2/4 float-left mb-2 flex"><Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Matnitop</li>
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
                              <p className="text-white text-base py-3 w-3/4 lg:text-sm xl:text-base">Sikkim days package 10days 9Nights</p>
                              <div className="w-1/4">
                                 <p className="text-white text-base text-right">₹ <span className="text-2xl font-semibold text-orange-500 lg:text-sm xl:text-xl 2xl:text-2xl">50,000</span></p>
                              </div>
                           </div>
                        </div>

                     </div>

                     <div className="grid gap-x-8 gap-y-4 grid-cols-1 mb-8 md:grid-cols-3">

                        <div className="w-full rounded-md mx-0 md:mx-1 lg:mx-1">
                           <div className="trip_by_destination_list_img rounded-t-lg bg-cover h-72 bg-center bg-no-repeat" style={{ backgroundImage: `url(${uploadImg})` }}>
                              <div
                                 className='flex items-center justify-center'>
                                 <div className="overflow-hidden cursor-pointer relative group w-full h-72">
                                    <div className="package_duration absolute top-7 right-0 bg-black py-2 px-6">
                                       <p className="text-white">3 Nights 4 Days</p>
                                    </div>
                                    <div
                                       className="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/100 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-0 text-white flex items-end">
                                       <div className="pt-2">
                                          <div
                                             className="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                                             <div className="font-bold text-xl">Hilighted place</div>

                                             <div className="opacity-100 text-sm ">
                                                <ul className="pb-16">
                                                   <li className="w-2/4 float-left mb-2 flex"><Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Lachen</li>
                                                   <li className="w-2/4 float-left mb-2 flex"><Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Lachung</li>
                                                   <li className="w-2/4 float-left mb-2 flex"><Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Gurudongmar lake</li>
                                                   <li className="w-2/4 float-left mb-2 flex"><Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Matnitop</li>
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
                              <p className="text-white text-base py-3 w-3/4 lg:text-sm xl:text-base">Sikkim days package 10days 9Nights</p>
                              <div className="w-1/4">
                                 <p className="text-white text-base text-right">₹ <span className="text-2xl font-semibold text-orange-500 lg:text-sm xl:text-xl 2xl:text-2xl">50,000</span></p>
                              </div>
                           </div>
                        </div>

                        <div className="w-full rounded-md mx-0 md:mx-1 lg:mx-1">
                           <div className="trip_by_destination_list_img rounded-t-lg bg-cover h-72 bg-center bg-no-repeat" style={{ backgroundImage: `url(${uploadImg})` }}>
                              <div
                                 className='flex items-center justify-center'>
                                 <div className="overflow-hidden cursor-pointer relative group w-full h-72">
                                    <div className="package_duration absolute top-7 right-0 bg-black py-2 px-6">
                                       <p className="text-white">3 Nights 4 Days</p>
                                    </div>
                                    <div
                                       className="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/100 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-0 text-white flex items-end">
                                       <div className="pt-2">
                                          <div
                                             className="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                                             <div className="font-bold text-xl">Hilighted place</div>

                                             <div className="opacity-100 text-sm ">
                                                <ul className="pb-16">
                                                   <li className="w-2/4 float-left mb-2 flex"><Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Lachen</li>
                                                   <li className="w-2/4 float-left mb-2 flex"><Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Lachung</li>
                                                   <li className="w-2/4 float-left mb-2 flex"><Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Gurudongmar lake</li>
                                                   <li className="w-2/4 float-left mb-2 flex"><Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Matnitop</li>
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
                              <p className="text-white text-base py-3 w-3/4 lg:text-sm xl:text-base">Sikkim days package 10days 9Nights</p>
                              <div className="w-1/4">
                                 <p className="text-white text-base text-right">₹ <span className="text-2xl font-semibold text-orange-500 lg:text-sm xl:text-xl 2xl:text-2xl">50,000</span></p>
                              </div>
                           </div>
                        </div>

                        <div className="w-full rounded-md mx-0 md:mx-1 lg:mx-1">
                           <div className="trip_by_destination_list_img rounded-t-lg bg-cover h-72 bg-center bg-no-repeat" style={{ backgroundImage: `url(${uploadImg})` }}>
                              <div
                                 className='flex items-center justify-center'>
                                 <div className="overflow-hidden cursor-pointer relative group w-full h-72">
                                    <div className="package_duration absolute top-7 right-0 bg-black py-2 px-6">
                                       <p className="text-white">3 Nights 4 Days</p>
                                    </div>
                                    <div
                                       className="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/100 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-0 text-white flex items-end">
                                       <div className="pt-2">
                                          <div
                                             className="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                                             <div className="font-bold text-xl">Hilighted place</div>

                                             <div className="opacity-100 text-sm ">
                                                <ul className="pb-16">
                                                   <li className="w-2/4 float-left mb-2 flex"><Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Lachen</li>
                                                   <li className="w-2/4 float-left mb-2 flex"><Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Lachung</li>
                                                   <li className="w-2/4 float-left mb-2 flex"><Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Gurudongmar lake</li>
                                                   <li className="w-2/4 float-left mb-2 flex"><Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Matnitop</li>
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
                              <p className="text-white text-base py-3 w-3/4 lg:text-sm xl:text-base">Sikkim days package 10days 9Nights</p>
                              <div className="w-1/4">
                                 <p className="text-white text-base text-right">₹ <span className="text-2xl font-semibold text-orange-500 lg:text-sm xl:text-xl 2xl:text-2xl">50,000</span></p>
                              </div>
                           </div>
                        </div>

                     </div>

                  </div>

                  <div className="view_more text-center mt-8">
                     <Link className="bg-orange-500 rounded-full text-base font-normal text-white px-7 py-2 inline-block hover:bg-black" to="/">View More</Link>
                  </div>

               </div>
            </div>

            {/* TOURS TYPE SECTION */}
            <div className="tour_type_section mb-14 md:p-4 md:mb-4 lg:p-4 lg:mb-14">
               <div className="container">
                  <div className="grid gap-x-8 gap-y-4 grid-cols-1 md:grid-cols-2">
                     <div className="">
                        <h2 className="text-3xl font-bold text-black mb-3">Domestic Tour</h2>
                        <div className="grid gap-6 grid-cols-2">
                           <div className="relative">
                              <Link to="/">
                                 <img
                                    alt=""
                                    className="rounded-lg w-full"
                                    src={domesticImage01}
                                 />
                                 <div className="about_tour_price text-right absolute bottom-5 right-2.5">
                                    <h3 className="text-lg font-semibold text-white">Goa</h3>
                                    <p className="text-xs font-medium text-white">Starting from $2500</p>
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
                                    <h3 className="text-lg font-semibold text-white">Chennai</h3>
                                    <p className="text-xs font-medium text-white">Starting from $2500</p>
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
                                    <h3 className="text-lg font-semibold text-white">Delhi</h3>
                                    <p className="text-xs font-medium text-white">Starting from $2500</p>
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
                                    <h3 className="text-lg font-semibold text-white">Bangalore</h3>
                                    <p className="text-xs font-medium text-white">Starting from $2500</p>
                                 </div>
                              </Link>
                           </div>
                        </div>
                     </div>
                     <div className="">
                        <h2 className="text-3xl font-bold text-black mb-3">International Tour</h2>
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
                                       <p className="text-sm font-medium text-white">10 Packages</p>
                                    </div>
                                    <div>
                                       <h3 className="text-lg font-semibold text-white">Washington</h3>
                                       <p className="text-xs font-medium text-white">Starting from $2500</p>
                                    </div>
                                 </div>
                              </div>
                           </Link>
                        </div>
                     </div>
                  </div>
                  <div className="view_more text-center mt-8">
                     <Link className="bg-orange-500 rounded-full text-base font-normal text-white px-7 py-2 inline-block hover:bg-black" to="/">View More</Link>
                  </div>
               </div>
            </div>

            {/* TRIP BY CATEGORY SECTION */}
            <div className="trip_by_category_section mb-6 md:p-4 lg:p-4">
               <div className="container">
                  <h2 className="text-3xl font-bold text-black text-center mb-5">Trip By Category</h2>
                  <div className="trip_by_category_tab_section shadow-xl p-8 rounded-lg">
                     <Tab.Group>
                        <Tab.List variant="link-tabs" className="px-16 border-slate-300 border-solid border-b">
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
                                       <div className="trip_by_destination_list_img rounded-lg bg-cover h-56 bg-center bg-no-repeat" style={{
                                          backgroundImage: `url(${tabImage01})`
                                       }}>
                                          <div className='flex items-center justify-center'>
                                             <div className="overflow-hidden cursor-pointer relative group w-full h-56 rounded-lg">
                                                <div className="package_duration absolute top-5 right-0 bg-black py-1 px-4">
                                                   <p className="text-white">3 Nights 4 Days, ₹ <span
                                                      className="text-lg font-semibold text-orange-500 lg:text-sm xl:text-xl 2xl:text-lg">50,000</span></p>
                                                </div>
                                                <div
                                                   className="rounded-xl z-50 opacity-0 py-5 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/100 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-0 text-white flex items-end">
                                                   <div className="pt-0">
                                                      <div
                                                         className="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                                                         <div className="font-bold text-xl">Hilighted place</div>

                                                         <div className="opacity-100 text-sm ">
                                                            <ul className="pb-16">
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Lachen
                                                               </li>
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Lachung
                                                               </li>
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Gurudongmar lake
                                                               </li>
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Matnitop
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
                                    <p className="text-center text-xl leading-8 font-medium">Indonesia</p>
                                 </div>

                                 <div>
                                    <div className="w-full rounded-md mx-0 md:mx-1 lg:mx-1">
                                       <div className="trip_by_destination_list_img rounded-lg bg-cover h-56 bg-center bg-no-repeat" style={{
                                          backgroundImage: `url(${tabImage02})`
                                       }}>
                                          <div className='flex items-center justify-center'>
                                             <div className="overflow-hidden cursor-pointer relative group w-full h-56 rounded-lg">
                                                <div className="package_duration absolute top-5 right-0 bg-black py-1 px-4">
                                                   <p className="text-white">3 Nights 4 Days, ₹ <span
                                                      className="text-lg font-semibold text-orange-500 lg:text-sm xl:text-xl 2xl:text-lg">50,000</span></p>
                                                </div>
                                                <div
                                                   className="rounded-xl z-50 opacity-0 py-5 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/100 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-0 text-white flex items-end">
                                                   <div className="pt-0">
                                                      <div
                                                         className="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                                                         <div className="font-bold text-xl">Hilighted place</div>

                                                         <div className="opacity-100 text-sm ">
                                                            <ul className="pb-16">
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Lachen
                                                               </li>
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Lachung
                                                               </li>
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Gurudongmar lake
                                                               </li>
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Matnitop
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
                                    <p className="text-center text-xl leading-8 font-medium">Golden Temple</p>
                                 </div>

                                 <div>
                                    <div className="w-full rounded-md mx-0 md:mx-1 lg:mx-1">
                                       <div className="trip_by_destination_list_img rounded-lg bg-cover h-56 bg-center bg-no-repeat" style={{
                                          backgroundImage: `url(${tabImage03})`
                                       }}>
                                          <div className='flex items-center justify-center'>
                                             <div className="overflow-hidden cursor-pointer relative group w-full h-56 rounded-lg">
                                                <div className="package_duration absolute top-5 right-0 bg-black py-1 px-4">
                                                   <p className="text-white">3 Nights 4 Days, ₹ <span
                                                      className="text-lg font-semibold text-orange-500 lg:text-sm xl:text-xl 2xl:text-lg">50,000</span></p>
                                                </div>
                                                <div
                                                   className="rounded-xl z-50 opacity-0 py-5 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/100 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-0 text-white flex items-end">
                                                   <div className="pt-0">
                                                      <div
                                                         className="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                                                         <div className="font-bold text-xl">Hilighted place</div>

                                                         <div className="opacity-100 text-sm ">
                                                            <ul className="pb-16">
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Lachen
                                                               </li>
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Lachung
                                                               </li>
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Gurudongmar lake
                                                               </li>
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Matnitop
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
                                    <p className="text-center text-xl leading-8 font-medium">Thailand</p>
                                 </div>

                                 <div>
                                    <div className="w-full rounded-md mx-0 md:mx-1 lg:mx-1">
                                       <div className="trip_by_destination_list_img rounded-lg bg-cover h-56 bg-center bg-no-repeat" style={{
                                          backgroundImage: `url(${tabImage04})`
                                       }}>
                                          <div className='flex items-center justify-center'>
                                             <div className="overflow-hidden cursor-pointer relative group w-full h-56 rounded-lg">
                                                <div className="package_duration absolute top-5 right-0 bg-black py-1 px-4">
                                                   <p className="text-white">3 Nights 4 Days, ₹ <span
                                                      className="text-lg font-semibold text-orange-500 lg:text-sm xl:text-xl 2xl:text-lg">50,000</span></p>
                                                </div>
                                                <div
                                                   className="rounded-xl z-50 opacity-0 py-5 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/100 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-0 text-white flex items-end">
                                                   <div className="pt-0">
                                                      <div
                                                         className="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                                                         <div className="font-bold text-xl">Hilighted place</div>

                                                         <div className="opacity-100 text-sm ">
                                                            <ul className="pb-16">
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Lachen
                                                               </li>
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Lachung
                                                               </li>
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Gurudongmar lake
                                                               </li>
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Matnitop
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
                                    <p className="text-center text-xl leading-8 font-medium">Vietnam</p>
                                 </div>

                                 <div>
                                    <div className="w-full rounded-md mx-0 md:mx-1 lg:mx-1">
                                       <div className="trip_by_destination_list_img rounded-lg bg-cover h-56 bg-center bg-no-repeat" style={{
                                          backgroundImage: `url(${tabImage01})`
                                       }}>
                                          <div className='flex items-center justify-center'>
                                             <div className="overflow-hidden cursor-pointer relative group w-full h-56 rounded-lg">
                                                <div className="package_duration absolute top-5 right-0 bg-black py-1 px-4">
                                                   <p className="text-white">3 Nights 4 Days, ₹ <span
                                                      className="text-lg font-semibold text-orange-500 lg:text-sm xl:text-xl 2xl:text-lg">50,000</span></p>
                                                </div>
                                                <div
                                                   className="rounded-xl z-50 opacity-0 py-5 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/100 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-0 text-white flex items-end">
                                                   <div className="pt-0">
                                                      <div
                                                         className="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                                                         <div className="font-bold text-xl">Hilighted place</div>

                                                         <div className="opacity-100 text-sm ">
                                                            <ul className="pb-16">
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Lachen
                                                               </li>
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Lachung
                                                               </li>
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Gurudongmar lake
                                                               </li>
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Matnitop
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
                                    <p className="text-center text-xl leading-8 font-medium">Indonesia</p>
                                 </div>

                                 <div>
                                    <div className="w-full rounded-md mx-0 md:mx-1 lg:mx-1">
                                       <div className="trip_by_destination_list_img rounded-lg bg-cover h-56 bg-center bg-no-repeat" style={{
                                          backgroundImage: `url(${tabImage02})`
                                       }}>
                                          <div className='flex items-center justify-center'>
                                             <div className="overflow-hidden cursor-pointer relative group w-full h-56 rounded-lg">
                                                <div className="package_duration absolute top-5 right-0 bg-black py-1 px-4">
                                                   <p className="text-white">3 Nights 4 Days, ₹ <span
                                                      className="text-lg font-semibold text-orange-500 lg:text-sm xl:text-xl 2xl:text-lg">50,000</span></p>
                                                </div>
                                                <div
                                                   className="rounded-xl z-50 opacity-0 py-5 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/100 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-0 text-white flex items-end">
                                                   <div className="pt-0">
                                                      <div
                                                         className="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                                                         <div className="font-bold text-xl">Hilighted place</div>

                                                         <div className="opacity-100 text-sm ">
                                                            <ul className="pb-16">
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Lachen
                                                               </li>
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Lachung
                                                               </li>
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Gurudongmar lake
                                                               </li>
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Matnitop
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
                                    <p className="text-center text-xl leading-8 font-medium">Golden Temple</p>
                                 </div>

                                 <div>
                                    <div className="w-full rounded-md mx-0 md:mx-1 lg:mx-1">
                                       <div className="trip_by_destination_list_img rounded-lg bg-cover h-56 bg-center bg-no-repeat" style={{
                                          backgroundImage: `url(${tabImage03})`
                                       }}>
                                          <div className='flex items-center justify-center'>
                                             <div className="overflow-hidden cursor-pointer relative group w-full h-56 rounded-lg">
                                                <div className="package_duration absolute top-5 right-0 bg-black py-1 px-4">
                                                   <p className="text-white">3 Nights 4 Days, ₹ <span
                                                      className="text-lg font-semibold text-orange-500 lg:text-sm xl:text-xl 2xl:text-lg">50,000</span></p>
                                                </div>
                                                <div
                                                   className="rounded-xl z-50 opacity-0 py-5 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/100 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-0 text-white flex items-end">
                                                   <div className="pt-0">
                                                      <div
                                                         className="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                                                         <div className="font-bold text-xl">Hilighted place</div>

                                                         <div className="opacity-100 text-sm ">
                                                            <ul className="pb-16">
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Lachen
                                                               </li>
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Lachung
                                                               </li>
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Gurudongmar lake
                                                               </li>
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Matnitop
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
                                    <p className="text-center text-xl leading-8 font-medium">Thailand</p>
                                 </div>

                                 <div>
                                    <div className="w-full rounded-md mx-0 md:mx-1 lg:mx-1">
                                       <div className="trip_by_destination_list_img rounded-lg bg-cover h-56 bg-center bg-no-repeat" style={{
                                          backgroundImage: `url(${tabImage04})`
                                       }}>
                                          <div className='flex items-center justify-center'>
                                             <div className="overflow-hidden cursor-pointer relative group w-full h-56 rounded-lg">
                                                <div className="package_duration absolute top-5 right-0 bg-black py-1 px-4">
                                                   <p className="text-white">3 Nights 4 Days, ₹ <span
                                                      className="text-lg font-semibold text-orange-500 lg:text-sm xl:text-xl 2xl:text-lg">50,000</span></p>
                                                </div>
                                                <div
                                                   className="rounded-xl z-50 opacity-0 py-5 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/100 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-0 text-white flex items-end">
                                                   <div className="pt-0">
                                                      <div
                                                         className="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                                                         <div className="font-bold text-xl">Hilighted place</div>

                                                         <div className="opacity-100 text-sm ">
                                                            <ul className="pb-16">
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Lachen
                                                               </li>
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Lachung
                                                               </li>
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Gurudongmar lake
                                                               </li>
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Matnitop
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
                                    <p className="text-center text-xl leading-8 font-medium">Vietnam</p>
                                 </div>



                              </div>

                           </Tab.Panel>

                           <Tab.Panel className="leading-relaxed">


                              <div className="grid grid-cols-2 gap-10 md:grid-cols-4">

                                 <div>
                                    <div className="w-full rounded-md mx-0 md:mx-1 lg:mx-1">
                                       <div className="trip_by_destination_list_img rounded-lg bg-cover h-56 bg-center bg-no-repeat" style={{
                                          backgroundImage: `url(${tabImage01})`
                                       }}>
                                          <div className='flex items-center justify-center'>
                                             <div className="overflow-hidden cursor-pointer relative group w-full h-56 rounded-lg">
                                                <div className="package_duration absolute top-5 right-0 bg-black py-1 px-4">
                                                   <p className="text-white">3 Nights 4 Days, ₹ <span
                                                      className="text-lg font-semibold text-orange-500 lg:text-sm xl:text-xl 2xl:text-lg">50,000</span></p>
                                                </div>
                                                <div
                                                   className="rounded-xl z-50 opacity-0 py-5 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/100 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-0 text-white flex items-end">
                                                   <div className="pt-0">
                                                      <div
                                                         className="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                                                         <div className="font-bold text-xl">Hilighted place</div>

                                                         <div className="opacity-100 text-sm ">
                                                            <ul className="pb-16">
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Lachen
                                                               </li>
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Lachung
                                                               </li>
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Gurudongmar lake
                                                               </li>
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Matnitop
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
                                    <p className="text-center text-xl leading-8 font-medium">Indonesia</p>
                                 </div>

                                 <div>
                                    <div className="w-full rounded-md mx-0 md:mx-1 lg:mx-1">
                                       <div className="trip_by_destination_list_img rounded-lg bg-cover h-56 bg-center bg-no-repeat" style={{
                                          backgroundImage: `url(${tabImage02})`
                                       }}>
                                          <div className='flex items-center justify-center'>
                                             <div className="overflow-hidden cursor-pointer relative group w-full h-56 rounded-lg">
                                                <div className="package_duration absolute top-5 right-0 bg-black py-1 px-4">
                                                   <p className="text-white">3 Nights 4 Days, ₹ <span
                                                      className="text-lg font-semibold text-orange-500 lg:text-sm xl:text-xl 2xl:text-lg">50,000</span></p>
                                                </div>
                                                <div
                                                   className="rounded-xl z-50 opacity-0 py-5 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/100 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-0 text-white flex items-end">
                                                   <div className="pt-0">
                                                      <div
                                                         className="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                                                         <div className="font-bold text-xl">Hilighted place</div>

                                                         <div className="opacity-100 text-sm ">
                                                            <ul className="pb-16">
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Lachen
                                                               </li>
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Lachung
                                                               </li>
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Gurudongmar lake
                                                               </li>
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Matnitop
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
                                    <p className="text-center text-xl leading-8 font-medium">Golden Temple</p>
                                 </div>

                                 <div>
                                    <div className="w-full rounded-md mx-0 md:mx-1 lg:mx-1">
                                       <div className="trip_by_destination_list_img rounded-lg bg-cover h-56 bg-center bg-no-repeat" style={{
                                          backgroundImage: `url(${tabImage03})`
                                       }}>
                                          <div className='flex items-center justify-center'>
                                             <div className="overflow-hidden cursor-pointer relative group w-full h-56 rounded-lg">
                                                <div className="package_duration absolute top-5 right-0 bg-black py-1 px-4">
                                                   <p className="text-white">3 Nights 4 Days, ₹ <span
                                                      className="text-lg font-semibold text-orange-500 lg:text-sm xl:text-xl 2xl:text-lg">50,000</span></p>
                                                </div>
                                                <div
                                                   className="rounded-xl z-50 opacity-0 py-5 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/100 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-0 text-white flex items-end">
                                                   <div className="pt-0">
                                                      <div
                                                         className="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                                                         <div className="font-bold text-xl">Hilighted place</div>

                                                         <div className="opacity-100 text-sm ">
                                                            <ul className="pb-16">
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Lachen
                                                               </li>
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Lachung
                                                               </li>
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Gurudongmar lake
                                                               </li>
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Matnitop
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
                                    <p className="text-center text-xl leading-8 font-medium">Thailand</p>
                                 </div>

                                 <div>
                                    <div className="w-full rounded-md mx-0 md:mx-1 lg:mx-1">
                                       <div className="trip_by_destination_list_img rounded-lg bg-cover h-56 bg-center bg-no-repeat" style={{
                                          backgroundImage: `url(${tabImage04})`
                                       }}>
                                          <div className='flex items-center justify-center'>
                                             <div className="overflow-hidden cursor-pointer relative group w-full h-56 rounded-lg">
                                                <div className="package_duration absolute top-5 right-0 bg-black py-1 px-4">
                                                   <p className="text-white">3 Nights 4 Days, ₹ <span
                                                      className="text-lg font-semibold text-orange-500 lg:text-sm xl:text-xl 2xl:text-lg">50,000</span></p>
                                                </div>
                                                <div
                                                   className="rounded-xl z-50 opacity-0 py-5 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/100 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-0 text-white flex items-end">
                                                   <div className="pt-0">
                                                      <div
                                                         className="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                                                         <div className="font-bold text-xl">Hilighted place</div>

                                                         <div className="opacity-100 text-sm ">
                                                            <ul className="pb-16">
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Lachen
                                                               </li>
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Lachung
                                                               </li>
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Gurudongmar lake
                                                               </li>
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Matnitop
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
                                    <p className="text-center text-xl leading-8 font-medium">Vietnam</p>
                                 </div>

                                 <div>
                                    <div className="w-full rounded-md mx-0 md:mx-1 lg:mx-1">
                                       <div className="trip_by_destination_list_img rounded-lg bg-cover h-56 bg-center bg-no-repeat" style={{
                                          backgroundImage: `url(${tabImage01})`
                                       }}>
                                          <div className='flex items-center justify-center'>
                                             <div className="overflow-hidden cursor-pointer relative group w-full h-56 rounded-lg">
                                                <div className="package_duration absolute top-5 right-0 bg-black py-1 px-4">
                                                   <p className="text-white">3 Nights 4 Days, ₹ <span
                                                      className="text-lg font-semibold text-orange-500 lg:text-sm xl:text-xl 2xl:text-lg">50,000</span></p>
                                                </div>
                                                <div
                                                   className="rounded-xl z-50 opacity-0 py-5 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/100 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-0 text-white flex items-end">
                                                   <div className="pt-0">
                                                      <div
                                                         className="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                                                         <div className="font-bold text-xl">Hilighted place</div>

                                                         <div className="opacity-100 text-sm ">
                                                            <ul className="pb-16">
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Lachen
                                                               </li>
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Lachung
                                                               </li>
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Gurudongmar lake
                                                               </li>
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Matnitop
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
                                    <p className="text-center text-xl leading-8 font-medium">Indonesia</p>
                                 </div>

                                 <div>
                                    <div className="w-full rounded-md mx-0 md:mx-1 lg:mx-1">
                                       <div className="trip_by_destination_list_img rounded-lg bg-cover h-56 bg-center bg-no-repeat" style={{
                                          backgroundImage: `url(${tabImage02})`
                                       }}>
                                          <div className='flex items-center justify-center'>
                                             <div className="overflow-hidden cursor-pointer relative group w-full h-56 rounded-lg">
                                                <div className="package_duration absolute top-5 right-0 bg-black py-1 px-4">
                                                   <p className="text-white">3 Nights 4 Days, ₹ <span
                                                      className="text-lg font-semibold text-orange-500 lg:text-sm xl:text-xl 2xl:text-lg">50,000</span></p>
                                                </div>
                                                <div
                                                   className="rounded-xl z-50 opacity-0 py-5 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/100 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-0 text-white flex items-end">
                                                   <div className="pt-0">
                                                      <div
                                                         className="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                                                         <div className="font-bold text-xl">Hilighted place</div>

                                                         <div className="opacity-100 text-sm ">
                                                            <ul className="pb-16">
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Lachen
                                                               </li>
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Lachung
                                                               </li>
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Gurudongmar lake
                                                               </li>
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Matnitop
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
                                    <p className="text-center text-xl leading-8 font-medium">Golden Temple</p>
                                 </div>

                                 <div>
                                    <div className="w-full rounded-md mx-0 md:mx-1 lg:mx-1">
                                       <div className="trip_by_destination_list_img rounded-lg bg-cover h-56 bg-center bg-no-repeat" style={{
                                          backgroundImage: `url(${tabImage03})`
                                       }}>
                                          <div className='flex items-center justify-center'>
                                             <div className="overflow-hidden cursor-pointer relative group w-full h-56 rounded-lg">
                                                <div className="package_duration absolute top-5 right-0 bg-black py-1 px-4">
                                                   <p className="text-white">3 Nights 4 Days, ₹ <span
                                                      className="text-lg font-semibold text-orange-500 lg:text-sm xl:text-xl 2xl:text-lg">50,000</span></p>
                                                </div>
                                                <div
                                                   className="rounded-xl z-50 opacity-0 py-5 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/100 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-0 text-white flex items-end">
                                                   <div className="pt-0">
                                                      <div
                                                         className="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                                                         <div className="font-bold text-xl">Hilighted place</div>

                                                         <div className="opacity-100 text-sm ">
                                                            <ul className="pb-16">
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Lachen
                                                               </li>
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Lachung
                                                               </li>
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Gurudongmar lake
                                                               </li>
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Matnitop
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
                                    <p className="text-center text-xl leading-8 font-medium">Thailand</p>
                                 </div>

                                 <div>
                                    <div className="w-full rounded-md mx-0 md:mx-1 lg:mx-1">
                                       <div className="trip_by_destination_list_img rounded-lg bg-cover h-56 bg-center bg-no-repeat" style={{
                                          backgroundImage: `url(${tabImage04})`
                                       }}>
                                          <div className='flex items-center justify-center'>
                                             <div className="overflow-hidden cursor-pointer relative group w-full h-56 rounded-lg">
                                                <div className="package_duration absolute top-5 right-0 bg-black py-1 px-4">
                                                   <p className="text-white">3 Nights 4 Days, ₹ <span
                                                      className="text-lg font-semibold text-orange-500 lg:text-sm xl:text-xl 2xl:text-lg">50,000</span></p>
                                                </div>
                                                <div
                                                   className="rounded-xl z-50 opacity-0 py-5 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/100 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-0 text-white flex items-end">
                                                   <div className="pt-0">
                                                      <div
                                                         className="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                                                         <div className="font-bold text-xl">Hilighted place</div>

                                                         <div className="opacity-100 text-sm ">
                                                            <ul className="pb-16">
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Lachen
                                                               </li>
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Lachung
                                                               </li>
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Gurudongmar lake
                                                               </li>
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Matnitop
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
                                    <p className="text-center text-xl leading-8 font-medium">Vietnam</p>
                                 </div>



                              </div>

                           </Tab.Panel>

                           <Tab.Panel className="leading-relaxed">


                              <div className="grid grid-cols-2 gap-10 md:grid-cols-4">

                                 <div>
                                    <div className="w-full rounded-md mx-0 md:mx-1 lg:mx-1">
                                       <div className="trip_by_destination_list_img rounded-lg bg-cover h-56 bg-center bg-no-repeat" style={{
                                          backgroundImage: `url(${tabImage01})`
                                       }}>
                                          <div className='flex items-center justify-center'>
                                             <div className="overflow-hidden cursor-pointer relative group w-full h-56 rounded-lg">
                                                <div className="package_duration absolute top-5 right-0 bg-black py-1 px-4">
                                                   <p className="text-white">3 Nights 4 Days, ₹ <span
                                                      className="text-lg font-semibold text-orange-500 lg:text-sm xl:text-xl 2xl:text-lg">50,000</span></p>
                                                </div>
                                                <div
                                                   className="rounded-xl z-50 opacity-0 py-5 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/100 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-0 text-white flex items-end">
                                                   <div className="pt-0">
                                                      <div
                                                         className="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                                                         <div className="font-bold text-xl">Hilighted place</div>

                                                         <div className="opacity-100 text-sm ">
                                                            <ul className="pb-16">
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Lachen
                                                               </li>
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Lachung
                                                               </li>
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Gurudongmar lake
                                                               </li>
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Matnitop
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
                                    <p className="text-center text-xl leading-8 font-medium">Indonesia</p>
                                 </div>

                                 <div>
                                    <div className="w-full rounded-md mx-0 md:mx-1 lg:mx-1">
                                       <div className="trip_by_destination_list_img rounded-lg bg-cover h-56 bg-center bg-no-repeat" style={{
                                          backgroundImage: `url(${tabImage02})`
                                       }}>
                                          <div className='flex items-center justify-center'>
                                             <div className="overflow-hidden cursor-pointer relative group w-full h-56 rounded-lg">
                                                <div className="package_duration absolute top-5 right-0 bg-black py-1 px-4">
                                                   <p className="text-white">3 Nights 4 Days, ₹ <span
                                                      className="text-lg font-semibold text-orange-500 lg:text-sm xl:text-xl 2xl:text-lg">50,000</span></p>
                                                </div>
                                                <div
                                                   className="rounded-xl z-50 opacity-0 py-5 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/100 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-0 text-white flex items-end">
                                                   <div className="pt-0">
                                                      <div
                                                         className="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                                                         <div className="font-bold text-xl">Hilighted place</div>

                                                         <div className="opacity-100 text-sm ">
                                                            <ul className="pb-16">
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Lachen
                                                               </li>
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Lachung
                                                               </li>
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Gurudongmar lake
                                                               </li>
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Matnitop
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
                                    <p className="text-center text-xl leading-8 font-medium">Golden Temple</p>
                                 </div>

                                 <div>
                                    <div className="w-full rounded-md mx-0 md:mx-1 lg:mx-1">
                                       <div className="trip_by_destination_list_img rounded-lg bg-cover h-56 bg-center bg-no-repeat" style={{
                                          backgroundImage: `url(${tabImage03})`
                                       }}>
                                          <div className='flex items-center justify-center'>
                                             <div className="overflow-hidden cursor-pointer relative group w-full h-56 rounded-lg">
                                                <div className="package_duration absolute top-5 right-0 bg-black py-1 px-4">
                                                   <p className="text-white">3 Nights 4 Days, ₹ <span
                                                      className="text-lg font-semibold text-orange-500 lg:text-sm xl:text-xl 2xl:text-lg">50,000</span></p>
                                                </div>
                                                <div
                                                   className="rounded-xl z-50 opacity-0 py-5 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/100 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-0 text-white flex items-end">
                                                   <div className="pt-0">
                                                      <div
                                                         className="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                                                         <div className="font-bold text-xl">Hilighted place</div>

                                                         <div className="opacity-100 text-sm ">
                                                            <ul className="pb-16">
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Lachen
                                                               </li>
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Lachung
                                                               </li>
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Gurudongmar lake
                                                               </li>
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Matnitop
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
                                    <p className="text-center text-xl leading-8 font-medium">Thailand</p>
                                 </div>

                                 <div>
                                    <div className="w-full rounded-md mx-0 md:mx-1 lg:mx-1">
                                       <div className="trip_by_destination_list_img rounded-lg bg-cover h-56 bg-center bg-no-repeat" style={{
                                          backgroundImage: `url(${tabImage04})`
                                       }}>
                                          <div className='flex items-center justify-center'>
                                             <div className="overflow-hidden cursor-pointer relative group w-full h-56 rounded-lg">
                                                <div className="package_duration absolute top-5 right-0 bg-black py-1 px-4">
                                                   <p className="text-white">3 Nights 4 Days, ₹ <span
                                                      className="text-lg font-semibold text-orange-500 lg:text-sm xl:text-xl 2xl:text-lg">50,000</span></p>
                                                </div>
                                                <div
                                                   className="rounded-xl z-50 opacity-0 py-5 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/100 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-0 text-white flex items-end">
                                                   <div className="pt-0">
                                                      <div
                                                         className="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                                                         <div className="font-bold text-xl">Hilighted place</div>

                                                         <div className="opacity-100 text-sm ">
                                                            <ul className="pb-16">
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Lachen
                                                               </li>
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Lachung
                                                               </li>
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Gurudongmar lake
                                                               </li>
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Matnitop
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
                                    <p className="text-center text-xl leading-8 font-medium">Vietnam</p>
                                 </div>

                                 <div>
                                    <div className="w-full rounded-md mx-0 md:mx-1 lg:mx-1">
                                       <div className="trip_by_destination_list_img rounded-lg bg-cover h-56 bg-center bg-no-repeat" style={{
                                          backgroundImage: `url(${tabImage01})`
                                       }}>
                                          <div className='flex items-center justify-center'>
                                             <div className="overflow-hidden cursor-pointer relative group w-full h-56 rounded-lg">
                                                <div className="package_duration absolute top-5 right-0 bg-black py-1 px-4">
                                                   <p className="text-white">3 Nights 4 Days, ₹ <span
                                                      className="text-lg font-semibold text-orange-500 lg:text-sm xl:text-xl 2xl:text-lg">50,000</span></p>
                                                </div>
                                                <div
                                                   className="rounded-xl z-50 opacity-0 py-5 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/100 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-0 text-white flex items-end">
                                                   <div className="pt-0">
                                                      <div
                                                         className="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                                                         <div className="font-bold text-xl">Hilighted place</div>

                                                         <div className="opacity-100 text-sm ">
                                                            <ul className="pb-16">
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Lachen
                                                               </li>
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Lachung
                                                               </li>
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Gurudongmar lake
                                                               </li>
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Matnitop
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
                                    <p className="text-center text-xl leading-8 font-medium">Indonesia</p>
                                 </div>

                                 <div>
                                    <div className="w-full rounded-md mx-0 md:mx-1 lg:mx-1">
                                       <div className="trip_by_destination_list_img rounded-lg bg-cover h-56 bg-center bg-no-repeat" style={{
                                          backgroundImage: `url(${tabImage02})`
                                       }}>
                                          <div className='flex items-center justify-center'>
                                             <div className="overflow-hidden cursor-pointer relative group w-full h-56 rounded-lg">
                                                <div className="package_duration absolute top-5 right-0 bg-black py-1 px-4">
                                                   <p className="text-white">3 Nights 4 Days, ₹ <span
                                                      className="text-lg font-semibold text-orange-500 lg:text-sm xl:text-xl 2xl:text-lg">50,000</span></p>
                                                </div>
                                                <div
                                                   className="rounded-xl z-50 opacity-0 py-5 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/100 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-0 text-white flex items-end">
                                                   <div className="pt-0">
                                                      <div
                                                         className="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                                                         <div className="font-bold text-xl">Hilighted place</div>

                                                         <div className="opacity-100 text-sm ">
                                                            <ul className="pb-16">
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Lachen
                                                               </li>
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Lachung
                                                               </li>
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Gurudongmar lake
                                                               </li>
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Matnitop
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
                                    <p className="text-center text-xl leading-8 font-medium">Golden Temple</p>
                                 </div>

                                 <div>
                                    <div className="w-full rounded-md mx-0 md:mx-1 lg:mx-1">
                                       <div className="trip_by_destination_list_img rounded-lg bg-cover h-56 bg-center bg-no-repeat" style={{
                                          backgroundImage: `url(${tabImage03})`
                                       }}>
                                          <div className='flex items-center justify-center'>
                                             <div className="overflow-hidden cursor-pointer relative group w-full h-56 rounded-lg">
                                                <div className="package_duration absolute top-5 right-0 bg-black py-1 px-4">
                                                   <p className="text-white">3 Nights 4 Days, ₹ <span
                                                      className="text-lg font-semibold text-orange-500 lg:text-sm xl:text-xl 2xl:text-lg">50,000</span></p>
                                                </div>
                                                <div
                                                   className="rounded-xl z-50 opacity-0 py-5 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/100 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-0 text-white flex items-end">
                                                   <div className="pt-0">
                                                      <div
                                                         className="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                                                         <div className="font-bold text-xl">Hilighted place</div>

                                                         <div className="opacity-100 text-sm ">
                                                            <ul className="pb-16">
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Lachen
                                                               </li>
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Lachung
                                                               </li>
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Gurudongmar lake
                                                               </li>
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Matnitop
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
                                    <p className="text-center text-xl leading-8 font-medium">Thailand</p>
                                 </div>

                                 <div>
                                    <div className="w-full rounded-md mx-0 md:mx-1 lg:mx-1">
                                       <div className="trip_by_destination_list_img rounded-lg bg-cover h-56 bg-center bg-no-repeat" style={{
                                          backgroundImage: `url(${tabImage04})`
                                       }}>
                                          <div className='flex items-center justify-center'>
                                             <div className="overflow-hidden cursor-pointer relative group w-full h-56 rounded-lg">
                                                <div className="package_duration absolute top-5 right-0 bg-black py-1 px-4">
                                                   <p className="text-white">3 Nights 4 Days, ₹ <span
                                                      className="text-lg font-semibold text-orange-500 lg:text-sm xl:text-xl 2xl:text-lg">50,000</span></p>
                                                </div>
                                                <div
                                                   className="rounded-xl z-50 opacity-0 py-5 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/100 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-0 text-white flex items-end">
                                                   <div className="pt-0">
                                                      <div
                                                         className="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                                                         <div className="font-bold text-xl">Hilighted place</div>

                                                         <div className="opacity-100 text-sm ">
                                                            <ul className="pb-16">
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Lachen
                                                               </li>
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Lachung
                                                               </li>
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Gurudongmar lake
                                                               </li>
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Matnitop
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
                                    <p className="text-center text-xl leading-8 font-medium">Vietnam</p>
                                 </div>



                              </div>

                           </Tab.Panel>

                           <Tab.Panel className="leading-relaxed">


                              <div className="grid grid-cols-2 gap-10 md:grid-cols-4">

                                 <div>
                                    <div className="w-full rounded-md mx-0 md:mx-1 lg:mx-1">
                                       <div className="trip_by_destination_list_img rounded-lg bg-cover h-56 bg-center bg-no-repeat" style={{
                                          backgroundImage: `url(${tabImage01})`
                                       }}>
                                          <div className='flex items-center justify-center'>
                                             <div className="overflow-hidden cursor-pointer relative group w-full h-56 rounded-lg">
                                                <div className="package_duration absolute top-5 right-0 bg-black py-1 px-4">
                                                   <p className="text-white">3 Nights 4 Days, ₹ <span
                                                      className="text-lg font-semibold text-orange-500 lg:text-sm xl:text-xl 2xl:text-lg">50,000</span></p>
                                                </div>
                                                <div
                                                   className="rounded-xl z-50 opacity-0 py-5 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/100 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-0 text-white flex items-end">
                                                   <div className="pt-0">
                                                      <div
                                                         className="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                                                         <div className="font-bold text-xl">Hilighted place</div>

                                                         <div className="opacity-100 text-sm ">
                                                            <ul className="pb-16">
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Lachen
                                                               </li>
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Lachung
                                                               </li>
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Gurudongmar lake
                                                               </li>
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Matnitop
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
                                    <p className="text-center text-xl leading-8 font-medium">Indonesia</p>
                                 </div>

                                 <div>
                                    <div className="w-full rounded-md mx-0 md:mx-1 lg:mx-1">
                                       <div className="trip_by_destination_list_img rounded-lg bg-cover h-56 bg-center bg-no-repeat" style={{
                                          backgroundImage: `url(${tabImage02})`
                                       }}>
                                          <div className='flex items-center justify-center'>
                                             <div className="overflow-hidden cursor-pointer relative group w-full h-56 rounded-lg">
                                                <div className="package_duration absolute top-5 right-0 bg-black py-1 px-4">
                                                   <p className="text-white">3 Nights 4 Days, ₹ <span
                                                      className="text-lg font-semibold text-orange-500 lg:text-sm xl:text-xl 2xl:text-lg">50,000</span></p>
                                                </div>
                                                <div
                                                   className="rounded-xl z-50 opacity-0 py-5 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/100 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-0 text-white flex items-end">
                                                   <div className="pt-0">
                                                      <div
                                                         className="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                                                         <div className="font-bold text-xl">Hilighted place</div>

                                                         <div className="opacity-100 text-sm ">
                                                            <ul className="pb-16">
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Lachen
                                                               </li>
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Lachung
                                                               </li>
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Gurudongmar lake
                                                               </li>
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Matnitop
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
                                    <p className="text-center text-xl leading-8 font-medium">Golden Temple</p>
                                 </div>

                                 <div>
                                    <div className="w-full rounded-md mx-0 md:mx-1 lg:mx-1">
                                       <div className="trip_by_destination_list_img rounded-lg bg-cover h-56 bg-center bg-no-repeat" style={{
                                          backgroundImage: `url(${tabImage03})`
                                       }}>
                                          <div className='flex items-center justify-center'>
                                             <div className="overflow-hidden cursor-pointer relative group w-full h-56 rounded-lg">
                                                <div className="package_duration absolute top-5 right-0 bg-black py-1 px-4">
                                                   <p className="text-white">3 Nights 4 Days, ₹ <span
                                                      className="text-lg font-semibold text-orange-500 lg:text-sm xl:text-xl 2xl:text-lg">50,000</span></p>
                                                </div>
                                                <div
                                                   className="rounded-xl z-50 opacity-0 py-5 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/100 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-0 text-white flex items-end">
                                                   <div className="pt-0">
                                                      <div
                                                         className="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                                                         <div className="font-bold text-xl">Hilighted place</div>

                                                         <div className="opacity-100 text-sm ">
                                                            <ul className="pb-16">
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Lachen
                                                               </li>
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Lachung
                                                               </li>
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Gurudongmar lake
                                                               </li>
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Matnitop
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
                                    <p className="text-center text-xl leading-8 font-medium">Thailand</p>
                                 </div>

                                 <div>
                                    <div className="w-full rounded-md mx-0 md:mx-1 lg:mx-1">
                                       <div className="trip_by_destination_list_img rounded-lg bg-cover h-56 bg-center bg-no-repeat" style={{
                                          backgroundImage: `url(${tabImage04})`
                                       }}>
                                          <div className='flex items-center justify-center'>
                                             <div className="overflow-hidden cursor-pointer relative group w-full h-56 rounded-lg">
                                                <div className="package_duration absolute top-5 right-0 bg-black py-1 px-4">
                                                   <p className="text-white">3 Nights 4 Days, ₹ <span
                                                      className="text-lg font-semibold text-orange-500 lg:text-sm xl:text-xl 2xl:text-lg">50,000</span></p>
                                                </div>
                                                <div
                                                   className="rounded-xl z-50 opacity-0 py-5 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/100 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-0 text-white flex items-end">
                                                   <div className="pt-0">
                                                      <div
                                                         className="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                                                         <div className="font-bold text-xl">Hilighted place</div>

                                                         <div className="opacity-100 text-sm ">
                                                            <ul className="pb-16">
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Lachen
                                                               </li>
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Lachung
                                                               </li>
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Gurudongmar lake
                                                               </li>
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Matnitop
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
                                    <p className="text-center text-xl leading-8 font-medium">Vietnam</p>
                                 </div>

                                 <div>
                                    <div className="w-full rounded-md mx-0 md:mx-1 lg:mx-1">
                                       <div className="trip_by_destination_list_img rounded-lg bg-cover h-56 bg-center bg-no-repeat" style={{
                                          backgroundImage: `url(${tabImage01})`
                                       }}>
                                          <div className='flex items-center justify-center'>
                                             <div className="overflow-hidden cursor-pointer relative group w-full h-56 rounded-lg">
                                                <div className="package_duration absolute top-5 right-0 bg-black py-1 px-4">
                                                   <p className="text-white">3 Nights 4 Days, ₹ <span
                                                      className="text-lg font-semibold text-orange-500 lg:text-sm xl:text-xl 2xl:text-lg">50,000</span></p>
                                                </div>
                                                <div
                                                   className="rounded-xl z-50 opacity-0 py-5 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/100 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-0 text-white flex items-end">
                                                   <div className="pt-0">
                                                      <div
                                                         className="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                                                         <div className="font-bold text-xl">Hilighted place</div>

                                                         <div className="opacity-100 text-sm ">
                                                            <ul className="pb-16">
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Lachen
                                                               </li>
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Lachung
                                                               </li>
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Gurudongmar lake
                                                               </li>
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Matnitop
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
                                    <p className="text-center text-xl leading-8 font-medium">Indonesia</p>
                                 </div>

                                 <div>
                                    <div className="w-full rounded-md mx-0 md:mx-1 lg:mx-1">
                                       <div className="trip_by_destination_list_img rounded-lg bg-cover h-56 bg-center bg-no-repeat" style={{
                                          backgroundImage: `url(${tabImage02})`
                                       }}>
                                          <div className='flex items-center justify-center'>
                                             <div className="overflow-hidden cursor-pointer relative group w-full h-56 rounded-lg">
                                                <div className="package_duration absolute top-5 right-0 bg-black py-1 px-4">
                                                   <p className="text-white">3 Nights 4 Days, ₹ <span
                                                      className="text-lg font-semibold text-orange-500 lg:text-sm xl:text-xl 2xl:text-lg">50,000</span></p>
                                                </div>
                                                <div
                                                   className="rounded-xl z-50 opacity-0 py-5 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/100 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-0 text-white flex items-end">
                                                   <div className="pt-0">
                                                      <div
                                                         className="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                                                         <div className="font-bold text-xl">Hilighted place</div>

                                                         <div className="opacity-100 text-sm ">
                                                            <ul className="pb-16">
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Lachen
                                                               </li>
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Lachung
                                                               </li>
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Gurudongmar lake
                                                               </li>
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Matnitop
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
                                    <p className="text-center text-xl leading-8 font-medium">Golden Temple</p>
                                 </div>

                                 <div>
                                    <div className="w-full rounded-md mx-0 md:mx-1 lg:mx-1">
                                       <div className="trip_by_destination_list_img rounded-lg bg-cover h-56 bg-center bg-no-repeat" style={{
                                          backgroundImage: `url(${tabImage03})`
                                       }}>
                                          <div className='flex items-center justify-center'>
                                             <div className="overflow-hidden cursor-pointer relative group w-full h-56 rounded-lg">
                                                <div className="package_duration absolute top-5 right-0 bg-black py-1 px-4">
                                                   <p className="text-white">3 Nights 4 Days, ₹ <span
                                                      className="text-lg font-semibold text-orange-500 lg:text-sm xl:text-xl 2xl:text-lg">50,000</span></p>
                                                </div>
                                                <div
                                                   className="rounded-xl z-50 opacity-0 py-5 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/100 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-0 text-white flex items-end">
                                                   <div className="pt-0">
                                                      <div
                                                         className="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                                                         <div className="font-bold text-xl">Hilighted place</div>

                                                         <div className="opacity-100 text-sm ">
                                                            <ul className="pb-16">
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Lachen
                                                               </li>
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Lachung
                                                               </li>
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Gurudongmar lake
                                                               </li>
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Matnitop
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
                                    <p className="text-center text-xl leading-8 font-medium">Thailand</p>
                                 </div>

                                 <div>
                                    <div className="w-full rounded-md mx-0 md:mx-1 lg:mx-1">
                                       <div className="trip_by_destination_list_img rounded-lg bg-cover h-56 bg-center bg-no-repeat" style={{
                                          backgroundImage: `url(${tabImage04})`
                                       }}>
                                          <div className='flex items-center justify-center'>
                                             <div className="overflow-hidden cursor-pointer relative group w-full h-56 rounded-lg">
                                                <div className="package_duration absolute top-5 right-0 bg-black py-1 px-4">
                                                   <p className="text-white">3 Nights 4 Days, ₹ <span
                                                      className="text-lg font-semibold text-orange-500 lg:text-sm xl:text-xl 2xl:text-lg">50,000</span></p>
                                                </div>
                                                <div
                                                   className="rounded-xl z-50 opacity-0 py-5 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/100 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-0 text-white flex items-end">
                                                   <div className="pt-0">
                                                      <div
                                                         className="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                                                         <div className="font-bold text-xl">Hilighted place</div>

                                                         <div className="opacity-100 text-sm ">
                                                            <ul className="pb-16">
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Lachen
                                                               </li>
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Lachung
                                                               </li>
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Gurudongmar lake
                                                               </li>
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Matnitop
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
                                    <p className="text-center text-xl leading-8 font-medium">Vietnam</p>
                                 </div>



                              </div>

                           </Tab.Panel>

                           <Tab.Panel className="leading-relaxed">


                              <div className="grid grid-cols-2 gap-10 md:grid-cols-4">

                                 <div>
                                    <div className="w-full rounded-md mx-0 md:mx-1 lg:mx-1">
                                       <div className="trip_by_destination_list_img rounded-lg bg-cover h-56 bg-center bg-no-repeat" style={{
                                          backgroundImage: `url(${tabImage01})`
                                       }}>
                                          <div className='flex items-center justify-center'>
                                             <div className="overflow-hidden cursor-pointer relative group w-full h-56 rounded-lg">
                                                <div className="package_duration absolute top-5 right-0 bg-black py-1 px-4">
                                                   <p className="text-white">3 Nights 4 Days, ₹ <span
                                                      className="text-lg font-semibold text-orange-500 lg:text-sm xl:text-xl 2xl:text-lg">50,000</span></p>
                                                </div>
                                                <div
                                                   className="rounded-xl z-50 opacity-0 py-5 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/100 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-0 text-white flex items-end">
                                                   <div className="pt-0">
                                                      <div
                                                         className="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                                                         <div className="font-bold text-xl">Hilighted place</div>

                                                         <div className="opacity-100 text-sm ">
                                                            <ul className="pb-16">
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Lachen
                                                               </li>
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Lachung
                                                               </li>
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Gurudongmar lake
                                                               </li>
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Matnitop
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
                                    <p className="text-center text-xl leading-8 font-medium">Indonesia</p>
                                 </div>

                                 <div>
                                    <div className="w-full rounded-md mx-0 md:mx-1 lg:mx-1">
                                       <div className="trip_by_destination_list_img rounded-lg bg-cover h-56 bg-center bg-no-repeat" style={{
                                          backgroundImage: `url(${tabImage02})`
                                       }}>
                                          <div className='flex items-center justify-center'>
                                             <div className="overflow-hidden cursor-pointer relative group w-full h-56 rounded-lg">
                                                <div className="package_duration absolute top-5 right-0 bg-black py-1 px-4">
                                                   <p className="text-white">3 Nights 4 Days, ₹ <span
                                                      className="text-lg font-semibold text-orange-500 lg:text-sm xl:text-xl 2xl:text-lg">50,000</span></p>
                                                </div>
                                                <div
                                                   className="rounded-xl z-50 opacity-0 py-5 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/100 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-0 text-white flex items-end">
                                                   <div className="pt-0">
                                                      <div
                                                         className="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                                                         <div className="font-bold text-xl">Hilighted place</div>

                                                         <div className="opacity-100 text-sm ">
                                                            <ul className="pb-16">
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Lachen
                                                               </li>
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Lachung
                                                               </li>
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Gurudongmar lake
                                                               </li>
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Matnitop
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
                                    <p className="text-center text-xl leading-8 font-medium">Golden Temple</p>
                                 </div>

                                 <div>
                                    <div className="w-full rounded-md mx-0 md:mx-1 lg:mx-1">
                                       <div className="trip_by_destination_list_img rounded-lg bg-cover h-56 bg-center bg-no-repeat" style={{
                                          backgroundImage: `url(${tabImage03})`
                                       }}>
                                          <div className='flex items-center justify-center'>
                                             <div className="overflow-hidden cursor-pointer relative group w-full h-56 rounded-lg">
                                                <div className="package_duration absolute top-5 right-0 bg-black py-1 px-4">
                                                   <p className="text-white">3 Nights 4 Days, ₹ <span
                                                      className="text-lg font-semibold text-orange-500 lg:text-sm xl:text-xl 2xl:text-lg">50,000</span></p>
                                                </div>
                                                <div
                                                   className="rounded-xl z-50 opacity-0 py-5 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/100 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-0 text-white flex items-end">
                                                   <div className="pt-0">
                                                      <div
                                                         className="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                                                         <div className="font-bold text-xl">Hilighted place</div>

                                                         <div className="opacity-100 text-sm ">
                                                            <ul className="pb-16">
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Lachen
                                                               </li>
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Lachung
                                                               </li>
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Gurudongmar lake
                                                               </li>
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Matnitop
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
                                    <p className="text-center text-xl leading-8 font-medium">Thailand</p>
                                 </div>

                                 <div>
                                    <div className="w-full rounded-md mx-0 md:mx-1 lg:mx-1">
                                       <div className="trip_by_destination_list_img rounded-lg bg-cover h-56 bg-center bg-no-repeat" style={{
                                          backgroundImage: `url(${tabImage04})`
                                       }}>
                                          <div className='flex items-center justify-center'>
                                             <div className="overflow-hidden cursor-pointer relative group w-full h-56 rounded-lg">
                                                <div className="package_duration absolute top-5 right-0 bg-black py-1 px-4">
                                                   <p className="text-white">3 Nights 4 Days, ₹ <span
                                                      className="text-lg font-semibold text-orange-500 lg:text-sm xl:text-xl 2xl:text-lg">50,000</span></p>
                                                </div>
                                                <div
                                                   className="rounded-xl z-50 opacity-0 py-5 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/100 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-0 text-white flex items-end">
                                                   <div className="pt-0">
                                                      <div
                                                         className="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                                                         <div className="font-bold text-xl">Hilighted place</div>

                                                         <div className="opacity-100 text-sm ">
                                                            <ul className="pb-16">
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Lachen
                                                               </li>
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Lachung
                                                               </li>
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Gurudongmar lake
                                                               </li>
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Matnitop
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
                                    <p className="text-center text-xl leading-8 font-medium">Vietnam</p>
                                 </div>

                                 <div>
                                    <div className="w-full rounded-md mx-0 md:mx-1 lg:mx-1">
                                       <div className="trip_by_destination_list_img rounded-lg bg-cover h-56 bg-center bg-no-repeat" style={{
                                          backgroundImage: `url(${tabImage01})`
                                       }}>
                                          <div className='flex items-center justify-center'>
                                             <div className="overflow-hidden cursor-pointer relative group w-full h-56 rounded-lg">
                                                <div className="package_duration absolute top-5 right-0 bg-black py-1 px-4">
                                                   <p className="text-white">3 Nights 4 Days, ₹ <span
                                                      className="text-lg font-semibold text-orange-500 lg:text-sm xl:text-xl 2xl:text-lg">50,000</span></p>
                                                </div>
                                                <div
                                                   className="rounded-xl z-50 opacity-0 py-5 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/100 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-0 text-white flex items-end">
                                                   <div className="pt-0">
                                                      <div
                                                         className="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                                                         <div className="font-bold text-xl">Hilighted place</div>

                                                         <div className="opacity-100 text-sm ">
                                                            <ul className="pb-16">
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Lachen
                                                               </li>
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Lachung
                                                               </li>
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Gurudongmar lake
                                                               </li>
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Matnitop
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
                                    <p className="text-center text-xl leading-8 font-medium">Indonesia</p>
                                 </div>

                                 <div>
                                    <div className="w-full rounded-md mx-0 md:mx-1 lg:mx-1">
                                       <div className="trip_by_destination_list_img rounded-lg bg-cover h-56 bg-center bg-no-repeat" style={{
                                          backgroundImage: `url(${tabImage02})`
                                       }}>
                                          <div className='flex items-center justify-center'>
                                             <div className="overflow-hidden cursor-pointer relative group w-full h-56 rounded-lg">
                                                <div className="package_duration absolute top-5 right-0 bg-black py-1 px-4">
                                                   <p className="text-white">3 Nights 4 Days, ₹ <span
                                                      className="text-lg font-semibold text-orange-500 lg:text-sm xl:text-xl 2xl:text-lg">50,000</span></p>
                                                </div>
                                                <div
                                                   className="rounded-xl z-50 opacity-0 py-5 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/100 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-0 text-white flex items-end">
                                                   <div className="pt-0">
                                                      <div
                                                         className="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                                                         <div className="font-bold text-xl">Hilighted place</div>

                                                         <div className="opacity-100 text-sm ">
                                                            <ul className="pb-16">
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Lachen
                                                               </li>
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Lachung
                                                               </li>
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Gurudongmar lake
                                                               </li>
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Matnitop
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
                                    <p className="text-center text-xl leading-8 font-medium">Golden Temple</p>
                                 </div>

                                 <div>
                                    <div className="w-full rounded-md mx-0 md:mx-1 lg:mx-1">
                                       <div className="trip_by_destination_list_img rounded-lg bg-cover h-56 bg-center bg-no-repeat" style={{
                                          backgroundImage: `url(${tabImage03})`
                                       }}>
                                          <div className='flex items-center justify-center'>
                                             <div className="overflow-hidden cursor-pointer relative group w-full h-56 rounded-lg">
                                                <div className="package_duration absolute top-5 right-0 bg-black py-1 px-4">
                                                   <p className="text-white">3 Nights 4 Days, ₹ <span
                                                      className="text-lg font-semibold text-orange-500 lg:text-sm xl:text-xl 2xl:text-lg">50,000</span></p>
                                                </div>
                                                <div
                                                   className="rounded-xl z-50 opacity-0 py-5 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/100 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-0 text-white flex items-end">
                                                   <div className="pt-0">
                                                      <div
                                                         className="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                                                         <div className="font-bold text-xl">Hilighted place</div>

                                                         <div className="opacity-100 text-sm ">
                                                            <ul className="pb-16">
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Lachen
                                                               </li>
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Lachung
                                                               </li>
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Gurudongmar lake
                                                               </li>
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Matnitop
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
                                    <p className="text-center text-xl leading-8 font-medium">Thailand</p>
                                 </div>

                                 <div>
                                    <div className="w-full rounded-md mx-0 md:mx-1 lg:mx-1">
                                       <div className="trip_by_destination_list_img rounded-lg bg-cover h-56 bg-center bg-no-repeat" style={{
                                          backgroundImage: `url(${tabImage04})`
                                       }}>
                                          <div className='flex items-center justify-center'>
                                             <div className="overflow-hidden cursor-pointer relative group w-full h-56 rounded-lg">
                                                <div className="package_duration absolute top-5 right-0 bg-black py-1 px-4">
                                                   <p className="text-white">3 Nights 4 Days, ₹ <span
                                                      className="text-lg font-semibold text-orange-500 lg:text-sm xl:text-xl 2xl:text-lg">50,000</span></p>
                                                </div>
                                                <div
                                                   className="rounded-xl z-50 opacity-0 py-5 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/100 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-0 text-white flex items-end">
                                                   <div className="pt-0">
                                                      <div
                                                         className="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                                                         <div className="font-bold text-xl">Hilighted place</div>

                                                         <div className="opacity-100 text-sm ">
                                                            <ul className="pb-16">
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Lachen
                                                               </li>
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Lachung
                                                               </li>
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Gurudongmar lake
                                                               </li>
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Matnitop
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
                                    <p className="text-center text-xl leading-8 font-medium">Vietnam</p>
                                 </div>



                              </div>

                           </Tab.Panel>

                           <Tab.Panel className="leading-relaxed">


                              <div className="grid grid-cols-2 gap-10 md:grid-cols-4">

                                 <div>
                                    <div className="w-full rounded-md mx-0 md:mx-1 lg:mx-1">
                                       <div className="trip_by_destination_list_img rounded-lg bg-cover h-56 bg-center bg-no-repeat" style={{
                                          backgroundImage: `url(${tabImage01})`
                                       }}>
                                          <div className='flex items-center justify-center'>
                                             <div className="overflow-hidden cursor-pointer relative group w-full h-56 rounded-lg">
                                                <div className="package_duration absolute top-5 right-0 bg-black py-1 px-4">
                                                   <p className="text-white">3 Nights 4 Days, ₹ <span
                                                      className="text-lg font-semibold text-orange-500 lg:text-sm xl:text-xl 2xl:text-lg">50,000</span></p>
                                                </div>
                                                <div
                                                   className="rounded-xl z-50 opacity-0 py-5 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/100 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-0 text-white flex items-end">
                                                   <div className="pt-0">
                                                      <div
                                                         className="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                                                         <div className="font-bold text-xl">Hilighted place</div>

                                                         <div className="opacity-100 text-sm ">
                                                            <ul className="pb-16">
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Lachen
                                                               </li>
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Lachung
                                                               </li>
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Gurudongmar lake
                                                               </li>
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Matnitop
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
                                    <p className="text-center text-xl leading-8 font-medium">Indonesia</p>
                                 </div>

                                 <div>
                                    <div className="w-full rounded-md mx-0 md:mx-1 lg:mx-1">
                                       <div className="trip_by_destination_list_img rounded-lg bg-cover h-56 bg-center bg-no-repeat" style={{
                                          backgroundImage: `url(${tabImage02})`
                                       }}>
                                          <div className='flex items-center justify-center'>
                                             <div className="overflow-hidden cursor-pointer relative group w-full h-56 rounded-lg">
                                                <div className="package_duration absolute top-5 right-0 bg-black py-1 px-4">
                                                   <p className="text-white">3 Nights 4 Days, ₹ <span
                                                      className="text-lg font-semibold text-orange-500 lg:text-sm xl:text-xl 2xl:text-lg">50,000</span></p>
                                                </div>
                                                <div
                                                   className="rounded-xl z-50 opacity-0 py-5 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/100 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-0 text-white flex items-end">
                                                   <div className="pt-0">
                                                      <div
                                                         className="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                                                         <div className="font-bold text-xl">Hilighted place</div>

                                                         <div className="opacity-100 text-sm ">
                                                            <ul className="pb-16">
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Lachen
                                                               </li>
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Lachung
                                                               </li>
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Gurudongmar lake
                                                               </li>
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Matnitop
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
                                    <p className="text-center text-xl leading-8 font-medium">Golden Temple</p>
                                 </div>

                                 <div>
                                    <div className="w-full rounded-md mx-0 md:mx-1 lg:mx-1">
                                       <div className="trip_by_destination_list_img rounded-lg bg-cover h-56 bg-center bg-no-repeat" style={{
                                          backgroundImage: `url(${tabImage03})`
                                       }}>
                                          <div className='flex items-center justify-center'>
                                             <div className="overflow-hidden cursor-pointer relative group w-full h-56 rounded-lg">
                                                <div className="package_duration absolute top-5 right-0 bg-black py-1 px-4">
                                                   <p className="text-white">3 Nights 4 Days, ₹ <span
                                                      className="text-lg font-semibold text-orange-500 lg:text-sm xl:text-xl 2xl:text-lg">50,000</span></p>
                                                </div>
                                                <div
                                                   className="rounded-xl z-50 opacity-0 py-5 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/100 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-0 text-white flex items-end">
                                                   <div className="pt-0">
                                                      <div
                                                         className="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                                                         <div className="font-bold text-xl">Hilighted place</div>

                                                         <div className="opacity-100 text-sm ">
                                                            <ul className="pb-16">
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Lachen
                                                               </li>
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Lachung
                                                               </li>
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Gurudongmar lake
                                                               </li>
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Matnitop
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
                                    <p className="text-center text-xl leading-8 font-medium">Thailand</p>
                                 </div>

                                 <div>
                                    <div className="w-full rounded-md mx-0 md:mx-1 lg:mx-1">
                                       <div className="trip_by_destination_list_img rounded-lg bg-cover h-56 bg-center bg-no-repeat" style={{
                                          backgroundImage: `url(${tabImage04})`
                                       }}>
                                          <div className='flex items-center justify-center'>
                                             <div className="overflow-hidden cursor-pointer relative group w-full h-56 rounded-lg">
                                                <div className="package_duration absolute top-5 right-0 bg-black py-1 px-4">
                                                   <p className="text-white">3 Nights 4 Days, ₹ <span
                                                      className="text-lg font-semibold text-orange-500 lg:text-sm xl:text-xl 2xl:text-lg">50,000</span></p>
                                                </div>
                                                <div
                                                   className="rounded-xl z-50 opacity-0 py-5 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/100 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-0 text-white flex items-end">
                                                   <div className="pt-0">
                                                      <div
                                                         className="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                                                         <div className="font-bold text-xl">Hilighted place</div>

                                                         <div className="opacity-100 text-sm ">
                                                            <ul className="pb-16">
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Lachen
                                                               </li>
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Lachung
                                                               </li>
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Gurudongmar lake
                                                               </li>
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Matnitop
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
                                    <p className="text-center text-xl leading-8 font-medium">Vietnam</p>
                                 </div>

                                 <div>
                                    <div className="w-full rounded-md mx-0 md:mx-1 lg:mx-1">
                                       <div className="trip_by_destination_list_img rounded-lg bg-cover h-56 bg-center bg-no-repeat" style={{
                                          backgroundImage: `url(${tabImage01})`
                                       }}>
                                          <div className='flex items-center justify-center'>
                                             <div className="overflow-hidden cursor-pointer relative group w-full h-56 rounded-lg">
                                                <div className="package_duration absolute top-5 right-0 bg-black py-1 px-4">
                                                   <p className="text-white">3 Nights 4 Days, ₹ <span
                                                      className="text-lg font-semibold text-orange-500 lg:text-sm xl:text-xl 2xl:text-lg">50,000</span></p>
                                                </div>
                                                <div
                                                   className="rounded-xl z-50 opacity-0 py-5 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/100 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-0 text-white flex items-end">
                                                   <div className="pt-0">
                                                      <div
                                                         className="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                                                         <div className="font-bold text-xl">Hilighted place</div>

                                                         <div className="opacity-100 text-sm ">
                                                            <ul className="pb-16">
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Lachen
                                                               </li>
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Lachung
                                                               </li>
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Gurudongmar lake
                                                               </li>
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Matnitop
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
                                    <p className="text-center text-xl leading-8 font-medium">Indonesia</p>
                                 </div>

                                 <div>
                                    <div className="w-full rounded-md mx-0 md:mx-1 lg:mx-1">
                                       <div className="trip_by_destination_list_img rounded-lg bg-cover h-56 bg-center bg-no-repeat" style={{
                                          backgroundImage: `url(${tabImage02})`
                                       }}>
                                          <div className='flex items-center justify-center'>
                                             <div className="overflow-hidden cursor-pointer relative group w-full h-56 rounded-lg">
                                                <div className="package_duration absolute top-5 right-0 bg-black py-1 px-4">
                                                   <p className="text-white">3 Nights 4 Days, ₹ <span
                                                      className="text-lg font-semibold text-orange-500 lg:text-sm xl:text-xl 2xl:text-lg">50,000</span></p>
                                                </div>
                                                <div
                                                   className="rounded-xl z-50 opacity-0 py-5 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/100 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-0 text-white flex items-end">
                                                   <div className="pt-0">
                                                      <div
                                                         className="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                                                         <div className="font-bold text-xl">Hilighted place</div>

                                                         <div className="opacity-100 text-sm ">
                                                            <ul className="pb-16">
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Lachen
                                                               </li>
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Lachung
                                                               </li>
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Gurudongmar lake
                                                               </li>
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Matnitop
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
                                    <p className="text-center text-xl leading-8 font-medium">Golden Temple</p>
                                 </div>

                                 <div>
                                    <div className="w-full rounded-md mx-0 md:mx-1 lg:mx-1">
                                       <div className="trip_by_destination_list_img rounded-lg bg-cover h-56 bg-center bg-no-repeat" style={{
                                          backgroundImage: `url(${tabImage03})`
                                       }}>
                                          <div className='flex items-center justify-center'>
                                             <div className="overflow-hidden cursor-pointer relative group w-full h-56 rounded-lg">
                                                <div className="package_duration absolute top-5 right-0 bg-black py-1 px-4">
                                                   <p className="text-white">3 Nights 4 Days, ₹ <span
                                                      className="text-lg font-semibold text-orange-500 lg:text-sm xl:text-xl 2xl:text-lg">50,000</span></p>
                                                </div>
                                                <div
                                                   className="rounded-xl z-50 opacity-0 py-5 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/100 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-0 text-white flex items-end">
                                                   <div className="pt-0">
                                                      <div
                                                         className="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                                                         <div className="font-bold text-xl">Hilighted place</div>

                                                         <div className="opacity-100 text-sm ">
                                                            <ul className="pb-16">
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Lachen
                                                               </li>
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Lachung
                                                               </li>
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Gurudongmar lake
                                                               </li>
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Matnitop
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
                                    <p className="text-center text-xl leading-8 font-medium">Thailand</p>
                                 </div>

                                 <div>
                                    <div className="w-full rounded-md mx-0 md:mx-1 lg:mx-1">
                                       <div className="trip_by_destination_list_img rounded-lg bg-cover h-56 bg-center bg-no-repeat" style={{
                                          backgroundImage: `url(${tabImage04})`
                                       }}>
                                          <div className='flex items-center justify-center'>
                                             <div className="overflow-hidden cursor-pointer relative group w-full h-56 rounded-lg">
                                                <div className="package_duration absolute top-5 right-0 bg-black py-1 px-4">
                                                   <p className="text-white">3 Nights 4 Days, ₹ <span
                                                      className="text-lg font-semibold text-orange-500 lg:text-sm xl:text-xl 2xl:text-lg">50,000</span></p>
                                                </div>
                                                <div
                                                   className="rounded-xl z-50 opacity-0 py-5 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/100 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-0 text-white flex items-end">
                                                   <div className="pt-0">
                                                      <div
                                                         className="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                                                         <div className="font-bold text-xl">Hilighted place</div>

                                                         <div className="opacity-100 text-sm ">
                                                            <ul className="pb-16">
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Lachen
                                                               </li>
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Lachung
                                                               </li>
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Gurudongmar lake
                                                               </li>
                                                               <li className="w-2/4 float-left mb-2 flex">
                                                                  <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Matnitop
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
                                    <p className="text-center text-xl leading-8 font-medium">Vietnam</p>
                                 </div>



                              </div>

                           </Tab.Panel>

                        </Tab.Panels>
                     </Tab.Group>
                  </div>
               </div>
            </div>

            {/* FEEDBACK FROM TRAVELLERS SECTION */}
            <div className="feedback_from_traveller_section mb-10 md:p-4 lg:p-4">
               <div className="container">
                  <h2 className="text-3xl font-bold text-black text-center mb-5">Feedbacks from Travellers</h2>
                  <div className="grid gap-x-8 gap-y-4 grid-cols-1 md:grid-cols-3">

                     <div className="feedback_box_area text-center px-7 py-8 shadow-lg rounded-lg relative">
                        <div className="absolute w-4/5 h-3/5 flex justify-center items-center mx-6">
                           <img
                              alt=""
                              className=""
                              src={testiBG}
                           />
                        </div>
                        <h3 className="text-lg font-bold text-orange-500 relative z-10">Hotel Equatorial Melaka</h3>
                        <span className="text-xs font-medium mb-3.5 block relative z-10">Malaysia</span>
                        <div className="feedback_box h-48 relative z-10">
                           <p className="text-sm font-medium leading-6">We were travelling with an infant and stated that in our Singdha Srijon’s special requests section when booking.
                              The staff were exceptional in ensuring we had a splendid stay. Highly recommended!</p>
                        </div>
                        <span className="text-xs font-medium relative z-10">Michale from Malaysia</span>
                     </div>

                     <div className="feedback_box_area text-center px-7 py-8 shadow-lg rounded-lg relative">
                        <div className="absolute w-4/5 h-3/5 flex justify-center items-center mx-6">
                           <img
                              alt=""
                              className=""
                              src={testiBG}
                           />
                        </div>
                        <h3 className="text-lg font-bold text-orange-500 relative z-10">Novotel Rotorua Lakeside Hotel</h3>
                        <span className="text-xs font-medium mb-3.5 block relative z-10">Malaysia</span>
                        <div className="feedback_box h-48 relative z-10">
                           <p className="text-sm font-medium leading-6">We were travelling with an infant and stated that in our Singdha Srijon’s special requests section when booking.
                              The staff were exceptional in ensuring we had a splendid stay. Highly recommended!</p>
                        </div>
                        <span className="text-xs font-medium relative z-10">Michale from Malaysia</span>
                     </div>

                     <div className="feedback_box_area text-center px-7 py-8 shadow-lg rounded-lg relative">
                        <div className="absolute w-4/5 h-3/5 flex justify-center items-center mx-6">
                           <img
                              alt=""
                              className=""
                              src={testiBG}
                           />
                        </div>
                        <h3 className="text-lg font-bold text-orange-500 relative z-10">The Sydney Boulevard Hotel</h3>
                        <span className="text-xs font-medium mb-3.5 block relative z-10">Malaysia</span>
                        <div className="feedback_box h-48 relative z-10">
                           <p className="text-sm font-medium leading-6">We were travelling with an infant and stated that in our Singdha Srijon’s special requests section when booking.
                              The staff were exceptional in ensuring we had a splendid stay. Highly recommended!</p>
                        </div>
                        <span className="text-xs font-medium relative z-10">Michale from Malaysia</span>
                     </div>

                  </div>
               </div>
            </div>

            {/* FOOTER SECTION */}
            <div className="footer_section bg-slate-950 px-4 py-6 md:pt-10 lg:pt-14">
               <div className="container">
                  <div className="footer_top_section pb-10">
                     <div className="grid grid-cols-1 gap-8 md:grid-cols-1 lg:grid-cols-2">
                        <div>
                           <img
                              alt=""
                              className="rounded-lg w-full"
                              src={footerImg}
                           />
                        </div>
                        <div>
                           <h2 className="text-3xl text-neutral-400 font-semibold pb-3">Feedbacks from Travellers</h2>
                           <ul>
                              <li className="float-left"><Link className="text-sm text-neutral-400 bg-zinc-700 py-1.5 px-2.5 rounded mr-1.5 mb-1.5 inline-block hover:bg-orange-500 hover:text-white" to="/">Angkor Wat</Link></li>
                              <li className="float-left"><Link className="text-sm text-neutral-400 bg-zinc-700 py-1.5 px-2.5 rounded mr-1.5 mb-1.5 inline-block hover:bg-orange-500 hover:text-white" to="/">Backingham Palace</Link></li>
                              <li className="float-left"><Link className="text-sm text-neutral-400 bg-zinc-700 py-1.5 px-2.5 rounded mr-1.5 mb-1.5 inline-block hover:bg-orange-500 hover:text-white" to="/">Taj Mahal</Link></li>
                              <li className="float-left"><Link className="text-sm text-neutral-400 bg-zinc-700 py-1.5 px-2.5 rounded mr-1.5 mb-1.5 inline-block hover:bg-orange-500 hover:text-white" to="/">High Line</Link></li>
                              <li className="float-left"><Link className="text-sm text-neutral-400 bg-zinc-700 py-1.5 px-2.5 rounded mr-1.5 mb-1.5 inline-block hover:bg-orange-500 hover:text-white" to="/">Statue of Liberty</Link></li>
                              <li className="float-left"><Link className="text-sm text-neutral-400 bg-zinc-700 py-1.5 px-2.5 rounded mr-1.5 mb-1.5 inline-block hover:bg-orange-500 hover:text-white" to="/">Notre Dame de Paris</Link></li>
                              <li className="float-left"><Link className="text-sm text-neutral-400 bg-zinc-700 py-1.5 px-2.5 rounded mr-1.5 mb-1.5 inline-block hover:bg-orange-500 hover:text-white" to="/">Sagrada Familia</Link></li>
                              <li className="float-left"><Link className="text-sm text-neutral-400 bg-zinc-700 py-1.5 px-2.5 rounded mr-1.5 mb-1.5 inline-block hover:bg-orange-500 hover:text-white" to="/">Tate Modern of London</Link></li>
                              <li className="float-left"><Link className="text-sm text-neutral-400 bg-zinc-700 py-1.5 px-2.5 rounded mr-1.5 mb-1.5 inline-block hover:bg-orange-500 hover:text-white" to="/">Gothic Quarter</Link></li>
                              <li className="float-left"><Link className="text-sm text-neutral-400 bg-zinc-700 py-1.5 px-2.5 rounded mr-1.5 mb-1.5 inline-block hover:bg-orange-500 hover:text-white" to="/">Table Mountain</Link></li>
                              <li className="float-left"><Link className="text-sm text-neutral-400 bg-zinc-700 py-1.5 px-2.5 rounded mr-1.5 mb-1.5 inline-block hover:bg-orange-500 hover:text-white" to="/">Bayon</Link></li>
                              <li className="float-left"><Link className="text-sm text-neutral-400 bg-zinc-700 py-1.5 px-2.5 rounded mr-1.5 mb-1.5 inline-block hover:bg-orange-500 hover:text-white" to="/">Great Wall of China</Link></li>
                              <li className="float-left"><Link className="text-sm text-neutral-400 bg-zinc-700 py-1.5 px-2.5 rounded mr-1.5 mb-1.5 inline-block hover:bg-orange-500 hover:text-white" to="/">Hermitage Museum</Link></li>
                           </ul>
                        </div>
                     </div>
                  </div>
                  <div className="footer_middle_section pb-5">
                     <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                        <div>
                           <h3 className="text-lg text-neutral-400 font-semibold uppercase pb-3">HOLIDAY TOUR & TRAVELS</h3>
                           <p className="text-sm text-neutral-500">World's leading tour and travels Booking website,Over 20,000 packages worldwide.</p>
                        </div>
                        <div>
                           <h3 className="text-lg text-neutral-500 font-semibold uppercase pb-3">ADDRESS & CONTACT INFO</h3>
                           <p className="text-sm text-neutral-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                        </div>
                        <div>
                           <h3 className="text-lg text-neutral-500 font-semibold uppercase pb-3">SUPPORT & HELP</h3>
                           <ul>
                              <li className="w-1/2 float-left"><Link className="text-sm text-neutral-500 hover:text-orange-500" to="/">About Us</Link></li>
                              <li className="w-1/2 float-left"><Link className="text-sm text-neutral-500 hover:text-orange-500" to="/">FAQ</Link></li>
                              <li className="w-1/2 float-left"><Link className="text-sm text-neutral-500 hover:text-orange-500" to="/">Feedbacks</Link></li>
                              <li className="w-1/2 float-left"><Link className="text-sm text-neutral-500 hover:text-orange-500" to="/">Blog</Link></li>
                              <li className="w-1/2 float-left"><Link className="text-sm text-neutral-500 hover:text-orange-500" to="/">Use Cases</Link></li>
                              <li className="w-1/2 float-left"><Link className="text-sm text-neutral-500 hover:text-orange-500" to="/">Advertise</Link></li>
                              <li className="w-1/2 float-left"><Link className="text-sm text-neutral-500 hover:text-orange-500" to="/">Discount</Link></li>
                              <li className="w-1/2 float-left"><Link className="text-sm text-neutral-500 hover:text-orange-500" to="/">Vacations</Link></li>
                              <li className="w-1/2 float-left"><Link className="text-sm text-neutral-500 hover:text-orange-500" to="/">Branding Offers</Link></li>
                              <li className="w-1/2 float-left"><Link className="text-sm text-neutral-500 hover:text-orange-500" to="/">Contact Us</Link></li>
                           </ul>
                        </div>
                        <div>
                           <h3 className="text-lg text-neutral-500 font-semibold uppercase pb-3">FOLLOW US</h3>
                           <p className="text-sm text-neutral-500">Join us to expand your horizon and make others comfortable too through sharing knowledge.</p>
                        </div>
                     </div>
                  </div>
                  <div className="footer_bottom_section py-5 border-t border-neutral-500 border-solid">
                     <p className="text-sm text-center text-neutral-500"> © 2003–2025 Singdha Srijon Tours Pvt. Ltd. All Rights Reserved.</p>
                  </div>
               </div>
            </div>



            {/* REGISTRATION POPUP */}

            {/* BEGIN: Modal Size */}

            <PreviewComponent className="mt-0 intro-y box">

               <div className="p-0">
                  <Preview>

                     <Dialog
                        size="xl"
                        open={superlargeModalSizePreview}
                        onClose={() => {
                           setSuperlargeModalSizePreview(false);
                        }}
                     >
                        <Dialog.Panel className="p-0 text-center">

                           <div className="flex">
                              <div className="w-2/5 flex justify-center items-center bg-black bg-cover bg-center" style={{ backgroundImage: `url(${registerBg})` }}>
                                 <div className="register_left_box">
                                    <img
                                       alt="Logo"
                                       className=""
                                       src={siteLogo}
                                    />
                                 </div>
                              </div>
                              <div className="w-3/5 p-2">

                                 <Dialog.Description>

                                    <div className="registration_box border-slate-200 border-b border-solid pb-4 mb-4">

                                       <div className="flex justify-center relative">
                                          <h2 className="pb-8 text-black text-2xl font-medium">Create an Account!</h2>
                                          {/* <Button
                                             type="button"
                                             variant="outline-secondary"
                                             onClick={() => {
                                                setSuperlargeModalSizePreview(false);
                                             }}
                                             className="p-0 border-0 absolute top-0 right-0"
                                          >
                                             <Lucide icon="XCircle" className="block mx-auto" />
                                          </Button> */}
                                       </div>

                                       <div className="grid grid-cols-12 gap-4 gap-y-3">
                                          <div className="col-span-12 sm:col-span-6">
                                             <FormInput
                                                id=""
                                                type="text"
                                                placeholder="Your Name*"
                                                className="leading-7"
                                             />
                                          </div>
                                          <div className="col-span-12 sm:col-span-6">
                                             <FormInput
                                                id=""
                                                type="email"
                                                placeholder="Your Email*"
                                                className="leading-7"
                                             />
                                          </div>
                                          <div className="col-span-12 sm:col-span-6">
                                             <FormInput
                                                id=""
                                                type="password"
                                                placeholder="Password*"
                                                className="leading-7"
                                             />
                                          </div>
                                          <div className="col-span-12 sm:col-span-6">
                                             <FormInput
                                                id=""
                                                type="password"
                                                placeholder="Repeat Password*"
                                                className="leading-7"
                                             />
                                          </div>
                                       </div>

                                       <div className="grid grid-cols-1 mt-4 gap-4 gap-y-3">
                                          <Button
                                             variant="primary"
                                             type="button"
                                             className="w-full bg-orange-500 text-sm leading-7 font-light border-0"
                                             ref={sendButtonRef}
                                          >
                                             Register Account
                                          </Button>
                                       </div>

                                    </div>

                                    <div className="social_login_box border-slate-200 border-b border-solid pb-4 mb-4">
                                       <Button
                                          variant="primary"
                                          type="button"
                                          className="w-full mb-4 bg-red-500 text-sm leading-7 font-light border-0"
                                          ref={sendButtonRef}
                                       >
                                          Register with Google
                                       </Button>
                                       <Button
                                          variant="primary"
                                          type="button"
                                          className="w-full bg-indigo-900 text-sm leading-7 font-light border-0"
                                          ref={sendButtonRef}
                                       >
                                          Register with Facebook
                                       </Button>

                                    </div>

                                    <div className="forget_pass_box mt-5">
                                       <Link className="block text-inherit text-xs hover:text-orange-500 mb-1" to="/">Forgot Password</Link>
                                       <Link className="block text-inherit text-xs hover:text-orange-500" to="/">Already have an account? Login!</Link>
                                    </div>


                                 </Dialog.Description>

                              </div>
                           </div>

                        </Dialog.Panel>
                     </Dialog>

                  </Preview>

               </div>

            </PreviewComponent>

            {/* END: Modal Size */}


            {/* LOGIN POPUP */}

            {/* BEGIN: Modal Size */}

            {/* <PreviewComponent className="mt-0 intro-y box">

               <div className="p-0">
                  <Preview>

                     <Dialog
                        size="xl"
                        open={superlargeModalSizePreview}
                        onClose={() => {
                           setSuperlargeModalSizePreview(false);
                        }}
                     >
                        <Dialog.Panel className="p-0 text-center">

                           <div className="flex">
                              <div className="w-1/2 flex justify-center items-center bg-black bg-cover bg-center" style={{ backgroundImage: `url(${loginBg})` }}>
                                 <div className="register_left_box">
                                    <img
                                       alt="Logo"
                                       className=""
                                       src={siteLogo}
                                    />
                                 </div>
                              </div>
                              <div className="w-1/2 p-2">

                                 <Dialog.Description>

                                    <div className="registration_box border-slate-200 border-b border-solid pb-4 mb-4">

                                       <div className="flex justify-center relative">
                                          <h2 className="pb-8 text-black text-2xl font-medium">Welcome Back!</h2>
                                       </div>

                                       <div className="grid grid-cols-1 gap-4 gap-y-3">
                                          <div className="col-span-12 sm:col-span-6">
                                             <FormInput
                                                id=""
                                                type="text"
                                                placeholder="Your Name*"
                                                className="leading-7"
                                             />
                                          </div>
                                          <div className="col-span-12 sm:col-span-6">
                                             <FormInput
                                                id=""
                                                type="password"
                                                placeholder="Password*"
                                                className="leading-7"
                                             />
                                          </div>
                                       </div>

                                       <div className="grid grid-cols-1 mt-4 gap-4 gap-y-3">
                                          <Button
                                             variant="primary"
                                             type="button"
                                             className="w-full bg-orange-500 text-sm leading-7 font-light border-0"
                                             ref={sendButtonRef}
                                          >
                                             Register Account
                                          </Button>
                                       </div>

                                    </div>

                                    <div className="social_login_box border-slate-200 border-b border-solid pb-4 mb-4">
                                       <Button
                                          variant="primary"
                                          type="button"
                                          className="w-full mb-4 bg-red-500 text-sm leading-7 font-light border-0"
                                          ref={sendButtonRef}
                                       >
                                          Register with Google
                                       </Button>
                                       <Button
                                          variant="primary"
                                          type="button"
                                          className="w-full bg-indigo-900 text-sm leading-7 font-light border-0"
                                          ref={sendButtonRef}
                                       >
                                          Register with Facebook
                                       </Button>

                                    </div>

                                    <div className="forget_pass_box mt-5">
                                       <Link className="block text-inherit text-xs hover:text-orange-500 mb-1" to="/">Forgot Password</Link>
                                       <Link className="block text-inherit text-xs hover:text-orange-500" to="/">Already have an account? Login!</Link>
                                    </div>


                                 </Dialog.Description>

                              </div>
                           </div>

                        </Dialog.Panel>
                     </Dialog>

                  </Preview>

               </div>

            </PreviewComponent> */}

            {/* END: Modal Size */}


            {/* FORGOT POPUP */}

            {/* BEGIN: Modal Size */}

            {/* <PreviewComponent className="mt-0 intro-y box">

               <div className="p-0">
                  <Preview>

                     <Dialog
                        size="xl"
                        open={superlargeModalSizePreview}
                        onClose={() => {
                           setSuperlargeModalSizePreview(false);
                        }}
                     >
                        <Dialog.Panel className="p-0 text-center">

                           <div className="flex">
                              <div className="w-1/2 flex justify-center items-center bg-black bg-cover bg-center" style={{ backgroundImage: `url(${forgotBg})` }}>
                                 <div className="register_left_box">
                                    <img
                                       alt="Logo"
                                       className=""
                                       src={siteLogo}
                                    />
                                 </div>
                              </div>
                              <div className="w-1/2 p-2">

                                 <Dialog.Description>

                                    <div className="registration_box border-slate-200 border-b border-solid pb-4 mb-4">

                                       <div className="relative">
                                          <h2 className="pb-2 text-black text-2xl font-medium">Forgot Your Password?</h2>
                                          <p className="pb-4">We get it, stuff happens. Just enter your email address below and we'll send you a link to reset your password!</p>
                                       </div>

                                       <div className="grid grid-cols-1 gap-4 gap-y-3">
                                          <div className="col-span-12 sm:col-span-6">
                                             <FormInput
                                                id=""
                                                type="email"
                                                placeholder="Please enter your email*"
                                                className="leading-7"
                                             />
                                          </div>
                                       </div>

                                       <div className="grid grid-cols-1 mt-4 gap-4 gap-y-3">
                                          <Button
                                             variant="primary"
                                             type="button"
                                             className="w-full bg-orange-500 text-sm leading-7 font-light border-0"
                                             ref={sendButtonRef}
                                          >
                                             Reset Password
                                          </Button>
                                       </div>

                                    </div>

                                    <div className="forget_pass_box mt-5">
                                       <Link className="block text-inherit text-xs hover:text-orange-500 mb-1" to="/">Forgot Password</Link>
                                       <Link className="block text-inherit text-xs hover:text-orange-500" to="/">Already have an account? Login!</Link>
                                    </div>


                                 </Dialog.Description>

                              </div>
                           </div>

                        </Dialog.Panel>
                     </Dialog>

                  </Preview>

               </div>

            </PreviewComponent> */}

            {/* END: Modal Size */}



         </div>

      </>
   );
}

export default Main;
