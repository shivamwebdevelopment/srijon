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

import listingBannerImage from "../../assets/images/listing_banner.jpg";

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


import spmage01 from "../../assets/images/sp01.png";
import spmage02 from "../../assets/images/sp02.png";
import spmage03 from "../../assets/images/sp03.png";
import spmage04 from "../../assets/images/sp4.png";
import spmage05 from "../../assets/images/sp5.png";


import tabImage01 from "../../assets/images/t01.jpg";
import tabImage02 from "../../assets/images/t02.jpg";
import tabImage03 from "../../assets/images/t03.jpg";
import tabImage04 from "../../assets/images/t04.jpg";

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


   return (
      <>

         <div className="bg-white overflow-hidden">



            {/* HEADER SECTION */}
            <div className="header_section flex px-8 py-3 bg-white">
               <div className="logo_area w-1/3">
                  <Link to="/">
                     <img
                        alt="Logo"
                        className=""
                        src={siteLogo}
                     />
                  </Link>
               </div>
               <div className="header_right_area w-2/3">
                  <div className="header_right_top flex justify-end py-4">
                     <div className="customize_your_tour ml-8">
                        <Link className="flex text-lg font-bold uppercase text-orange-500 hover:text-black" to="/">
                           <img
                              alt="customizeTourIcon"
                              className="mr-0.5"
                              src={customizeTourIcon}
                           />
                           Customize your tour
                        </Link>
                     </div>
                     <div className="phone_section ml-8">
                        <p className="text-base"><strong>Phone:</strong> +91-1231-1231</p>
                     </div>
                     <div className="account_section ml-6">
                        <Link className="bg-orange-500 rounded-full text-sm font-medium text-white px-6 py-2  hover:bg-black" to="/">Sign In</Link>
                        <Link className="bg-black rounded-full text-sm font-medium text-white px-6 py-2 ml-3.5 hover:bg-orange-500" to="/">My Account</Link>
                     </div>
                     <div className="header_social_area flex ml-5">
                        <Link className="pl-2.5" to="/"><img alt="facebookIcon" className="" src={facebookIcon} /></Link>
                        <Link className="pl-2.5" to="/"><img alt="twitterIcon" className="" src={twitterIcon} /></Link>
                        <Link className="pl-2.5" to="/"><img alt="linkedinIcon" className="" src={linkedinIcon} /></Link>
                        <Link className="pl-2.5" to="/"><img alt="youtubeIcon" className="" src={youtubeIcon} /></Link>
                        <Link className="pl-2.5" to="/"><img alt="instagramIcon" className="" src={instagramIcon} /></Link>
                        <Link className="pl-2.5" to="/"><img alt="lastSocialIcon" className="" src={lastSocialIcon} /></Link>
                     </div>
                  </div>
                  <div className="main_menu py-3">
                     <ul className="flex justify-end">
                        <li><Link className="text-base font-medium text-black pl-8 hover:text-orange-500" to="/">Domestic Tours</Link></li>
                        <li><Link className="text-base font-medium text-black pl-8 hover:text-orange-500" to="/">Special Tour</Link></li>
                        <li><Link className="text-base font-medium text-black pl-8 hover:text-orange-500" to="/">All Tours</Link></li>
                        <li><Link className="text-base font-medium text-black pl-8 hover:text-orange-500" to="/">Contact Us</Link></li>
                        <li><Link className="text-base font-medium text-black pl-8 hover:text-orange-500" to="/">Bolg</Link></li>
                        <li><Link className="text-base font-medium text-black pl-8 hover:text-orange-500" to="/">Become a partner</Link></li>
                        <li><Link className="text-base font-medium text-black pl-8 hover:text-orange-500" to="/">Quick Enquiry</Link></li>
                     </ul>
                  </div>
               </div>
            </div>

            {/* BANNER SECTION */}
            <div className="banner_section relative">
               <img
                  alt="listingBannerImage"
                  className="w-full"
                  src={listingBannerImage}
               />
               <div className="absolute top-0 left-0 py-14 w-full h-full">
                  <div className="container flex justify-center items-center h-full">

                     <div>

                        <h1 className="text-center text-5xl font-bold text-white pb-5">Find Your Dream Tour Plan!</h1>
                        <div className="form_area py-10">
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


            {/* TRIP BY DESTINATION SECTION */}
            <div className="trip_by_destination_section my-14">
               <div className="container">
                  <h2 className="text-3xl font-bold text-black text-center mb-8">Tour Listing</h2>

                  <div className="trip_by_destination_list">

                     <div className="grid gap-x-8 gap-y-4 grid-cols-3 mb-8">

                        <div className="w-full rounded-md mx-4">
                           <div className="trip_by_destination_list_img">
                              <img
                                 alt="Taj"
                                 className="rounded-t-lg w-full"
                                 src={tajImage}
                              />
                           </div>
                           <div className="trip_by_destination_list_vont rounded-b-lg bg-black px-4 flex justify-between items-center">
                              <p className="text-white py-3"><b>The Taj Mahal</b> (India)</p>
                              <ul className="flex">
                                 <li className="ml-2.5">
                                    <Link to="/">
                                       <img
                                          alt="timeImg"
                                          className=""
                                          src={timeImg}
                                       />
                                    </Link>
                                 </li>
                                 <li className="ml-2.5">
                                    <Link to="/">
                                       <img
                                          alt="infoImg"
                                          className=""
                                          src={infoImg}
                                       />
                                    </Link>
                                 </li>
                                 <li className="ml-2.5">
                                    <Link to="/">
                                       <img
                                          alt="tagImg"
                                          className=""
                                          src={tagImg}
                                       />
                                    </Link>
                                 </li>
                                 <li className="ml-2.5">
                                    <Link to="/">
                                       <img
                                          alt="locationImg"
                                          className=""
                                          src={locationImg}
                                       />
                                    </Link>
                                 </li>
                              </ul>
                           </div>
                        </div>

                        <div className="w-full rounded-md mx-4">
                           <div className="trip_by_destination_list_img">
                              <img
                                 alt="Taj"
                                 className="rounded-t-lg w-full"
                                 src={parisImage}
                              />
                           </div>
                           <div className="trip_by_destination_list_vont rounded-b-lg bg-black px-4 flex justify-between items-center">
                              <p className="text-white py-3"><b>Paris</b> (England)</p>
                              <ul className="flex">
                                 <li className="ml-2.5">
                                    <Link to="/">
                                       <img
                                          alt="timeImg"
                                          className=""
                                          src={timeImg}
                                       />
                                    </Link>
                                 </li>
                                 <li className="ml-2.5">
                                    <Link to="/">
                                       <img
                                          alt="infoImg"
                                          className=""
                                          src={infoImg}
                                       />
                                    </Link>
                                 </li>
                                 <li className="ml-2.5">
                                    <Link to="/">
                                       <img
                                          alt="tagImg"
                                          className=""
                                          src={tagImg}
                                       />
                                    </Link>
                                 </li>
                                 <li className="ml-2.5">
                                    <Link to="/">
                                       <img
                                          alt="locationImg"
                                          className=""
                                          src={locationImg}
                                       />
                                    </Link>
                                 </li>
                              </ul>
                           </div>
                        </div>

                        <div className="w-full rounded-md mx-4">
                           <div className="trip_by_destination_list_img">
                              <img
                                 alt="Taj"
                                 className="rounded-t-lg w-full"
                                 src={brazilImage}
                              />
                           </div>
                           <div className="trip_by_destination_list_vont rounded-b-lg bg-black px-4 flex justify-between items-center">
                              <p className="text-white py-3"><b>Rio De Janerio</b> (Brazil)</p>
                              <ul className="flex">
                                 <li className="ml-2.5">
                                    <Link to="/">
                                       <img
                                          alt="timeImg"
                                          className=""
                                          src={timeImg}
                                       />
                                    </Link>
                                 </li>
                                 <li className="ml-2.5">
                                    <Link to="/">
                                       <img
                                          alt="infoImg"
                                          className=""
                                          src={infoImg}
                                       />
                                    </Link>
                                 </li>
                                 <li className="ml-2.5">
                                    <Link to="/">
                                       <img
                                          alt="tagImg"
                                          className=""
                                          src={tagImg}
                                       />
                                    </Link>
                                 </li>
                                 <li className="ml-2.5">
                                    <Link to="/">
                                       <img
                                          alt="locationImg"
                                          className=""
                                          src={locationImg}
                                       />
                                    </Link>
                                 </li>
                              </ul>
                           </div>
                        </div>

                     </div>

                     <div className="grid gap-x-8 gap-y-4 grid-cols-3 mb-8">

                        <div className="w-full rounded-md mx-4">
                           <div className="trip_by_destination_list_img">
                              <img
                                 alt="Taj"
                                 className="rounded-t-lg w-full"
                                 src={usaImage}
                              />
                           </div>
                           <div className="trip_by_destination_list_vont rounded-b-lg bg-black px-4 flex justify-between items-center">
                              <p className="text-white py-3"><b>Golden Gate Bridge</b> (USA)</p>
                              <ul className="flex">
                                 <li className="ml-2.5">
                                    <Link to="/">
                                       <img
                                          alt="timeImg"
                                          className=""
                                          src={timeImg}
                                       />
                                    </Link>
                                 </li>
                                 <li className="ml-2.5">
                                    <Link to="/">
                                       <img
                                          alt="infoImg"
                                          className=""
                                          src={infoImg}
                                       />
                                    </Link>
                                 </li>
                                 <li className="ml-2.5">
                                    <Link to="/">
                                       <img
                                          alt="tagImg"
                                          className=""
                                          src={tagImg}
                                       />
                                    </Link>
                                 </li>
                                 <li className="ml-2.5">
                                    <Link to="/">
                                       <img
                                          alt="locationImg"
                                          className=""
                                          src={locationImg}
                                       />
                                    </Link>
                                 </li>
                              </ul>
                           </div>
                        </div>
                        <div className="w-full rounded-md mx-4">
                           <div className="trip_by_destination_list_img">
                              <img
                                 alt="Taj"
                                 className="rounded-t-lg w-full"
                                 src={indianaImage}
                              />
                           </div>
                           <div className="trip_by_destination_list_vont rounded-b-lg bg-black px-4 flex justify-between items-center">
                              <p className="text-white py-3"><b>Maritius</b> (Indiana)</p>
                              <ul className="flex">
                                 <li className="ml-2.5">
                                    <Link to="/">
                                       <img
                                          alt="timeImg"
                                          className=""
                                          src={timeImg}
                                       />
                                    </Link>
                                 </li>
                                 <li className="ml-2.5">
                                    <Link to="/">
                                       <img
                                          alt="infoImg"
                                          className=""
                                          src={infoImg}
                                       />
                                    </Link>
                                 </li>
                                 <li className="ml-2.5">
                                    <Link to="/">
                                       <img
                                          alt="tagImg"
                                          className=""
                                          src={tagImg}
                                       />
                                    </Link>
                                 </li>
                                 <li className="ml-2.5">
                                    <Link to="/">
                                       <img
                                          alt="locationImg"
                                          className=""
                                          src={locationImg}
                                       />
                                    </Link>
                                 </li>
                              </ul>
                           </div>
                        </div>
                        <div className="w-full rounded-md mx-4">
                           <div className="trip_by_destination_list_img">
                              <img
                                 alt="Taj"
                                 className="rounded-t-lg w-full"
                                 src={chinaImage}
                              />
                           </div>
                           <div className="trip_by_destination_list_vont rounded-b-lg bg-black px-4 flex justify-between items-center">
                              <p className="text-white py-3"><b>The Great Wall</b> (China)</p>
                              <ul className="flex">
                                 <li className="ml-2.5">
                                    <Link to="/">
                                       <img
                                          alt="timeImg"
                                          className=""
                                          src={timeImg}
                                       />
                                    </Link>
                                 </li>
                                 <li className="ml-2.5">
                                    <Link to="/">
                                       <img
                                          alt="infoImg"
                                          className=""
                                          src={infoImg}
                                       />
                                    </Link>
                                 </li>
                                 <li className="ml-2.5">
                                    <Link to="/">
                                       <img
                                          alt="tagImg"
                                          className=""
                                          src={tagImg}
                                       />
                                    </Link>
                                 </li>
                                 <li className="ml-2.5">
                                    <Link to="/">
                                       <img
                                          alt="locationImg"
                                          className=""
                                          src={locationImg}
                                       />
                                    </Link>
                                 </li>
                              </ul>
                           </div>
                        </div>

                     </div>

                     <div className="grid gap-x-8 gap-y-4 grid-cols-3 mb-8">

                        <div className="w-full rounded-md mx-4">
                           <div className="trip_by_destination_list_img">
                              <img
                                 alt="Taj"
                                 className="rounded-t-lg w-full"
                                 src={tajImage}
                              />
                           </div>
                           <div className="trip_by_destination_list_vont rounded-b-lg bg-black px-4 flex justify-between items-center">
                              <p className="text-white py-3"><b>The Taj Mahal</b> (India)</p>
                              <ul className="flex">
                                 <li className="ml-2.5">
                                    <Link to="/">
                                       <img
                                          alt="timeImg"
                                          className=""
                                          src={timeImg}
                                       />
                                    </Link>
                                 </li>
                                 <li className="ml-2.5">
                                    <Link to="/">
                                       <img
                                          alt="infoImg"
                                          className=""
                                          src={infoImg}
                                       />
                                    </Link>
                                 </li>
                                 <li className="ml-2.5">
                                    <Link to="/">
                                       <img
                                          alt="tagImg"
                                          className=""
                                          src={tagImg}
                                       />
                                    </Link>
                                 </li>
                                 <li className="ml-2.5">
                                    <Link to="/">
                                       <img
                                          alt="locationImg"
                                          className=""
                                          src={locationImg}
                                       />
                                    </Link>
                                 </li>
                              </ul>
                           </div>
                        </div>

                        <div className="w-full rounded-md mx-4">
                           <div className="trip_by_destination_list_img">
                              <img
                                 alt="Taj"
                                 className="rounded-t-lg w-full"
                                 src={parisImage}
                              />
                           </div>
                           <div className="trip_by_destination_list_vont rounded-b-lg bg-black px-4 flex justify-between items-center">
                              <p className="text-white py-3"><b>Paris</b> (England)</p>
                              <ul className="flex">
                                 <li className="ml-2.5">
                                    <Link to="/">
                                       <img
                                          alt="timeImg"
                                          className=""
                                          src={timeImg}
                                       />
                                    </Link>
                                 </li>
                                 <li className="ml-2.5">
                                    <Link to="/">
                                       <img
                                          alt="infoImg"
                                          className=""
                                          src={infoImg}
                                       />
                                    </Link>
                                 </li>
                                 <li className="ml-2.5">
                                    <Link to="/">
                                       <img
                                          alt="tagImg"
                                          className=""
                                          src={tagImg}
                                       />
                                    </Link>
                                 </li>
                                 <li className="ml-2.5">
                                    <Link to="/">
                                       <img
                                          alt="locationImg"
                                          className=""
                                          src={locationImg}
                                       />
                                    </Link>
                                 </li>
                              </ul>
                           </div>
                        </div>

                        <div className="w-full rounded-md mx-4">
                           <div className="trip_by_destination_list_img">
                              <img
                                 alt="Taj"
                                 className="rounded-t-lg w-full"
                                 src={brazilImage}
                              />
                           </div>
                           <div className="trip_by_destination_list_vont rounded-b-lg bg-black px-4 flex justify-between items-center">
                              <p className="text-white py-3"><b>Rio De Janerio</b> (Brazil)</p>
                              <ul className="flex">
                                 <li className="ml-2.5">
                                    <Link to="/">
                                       <img
                                          alt="timeImg"
                                          className=""
                                          src={timeImg}
                                       />
                                    </Link>
                                 </li>
                                 <li className="ml-2.5">
                                    <Link to="/">
                                       <img
                                          alt="infoImg"
                                          className=""
                                          src={infoImg}
                                       />
                                    </Link>
                                 </li>
                                 <li className="ml-2.5">
                                    <Link to="/">
                                       <img
                                          alt="tagImg"
                                          className=""
                                          src={tagImg}
                                       />
                                    </Link>
                                 </li>
                                 <li className="ml-2.5">
                                    <Link to="/">
                                       <img
                                          alt="locationImg"
                                          className=""
                                          src={locationImg}
                                       />
                                    </Link>
                                 </li>
                              </ul>
                           </div>
                        </div>

                     </div>

                     <div className="grid gap-x-8 gap-y-4 grid-cols-3 mb-8">

                        <div className="w-full rounded-md mx-4">
                           <div className="trip_by_destination_list_img">
                              <img
                                 alt="Taj"
                                 className="rounded-t-lg w-full"
                                 src={usaImage}
                              />
                           </div>
                           <div className="trip_by_destination_list_vont rounded-b-lg bg-black px-4 flex justify-between items-center">
                              <p className="text-white py-3"><b>Golden Gate Bridge</b> (USA)</p>
                              <ul className="flex">
                                 <li className="ml-2.5">
                                    <Link to="/">
                                       <img
                                          alt="timeImg"
                                          className=""
                                          src={timeImg}
                                       />
                                    </Link>
                                 </li>
                                 <li className="ml-2.5">
                                    <Link to="/">
                                       <img
                                          alt="infoImg"
                                          className=""
                                          src={infoImg}
                                       />
                                    </Link>
                                 </li>
                                 <li className="ml-2.5">
                                    <Link to="/">
                                       <img
                                          alt="tagImg"
                                          className=""
                                          src={tagImg}
                                       />
                                    </Link>
                                 </li>
                                 <li className="ml-2.5">
                                    <Link to="/">
                                       <img
                                          alt="locationImg"
                                          className=""
                                          src={locationImg}
                                       />
                                    </Link>
                                 </li>
                              </ul>
                           </div>
                        </div>
                        <div className="w-full rounded-md mx-4">
                           <div className="trip_by_destination_list_img">
                              <img
                                 alt="Taj"
                                 className="rounded-t-lg w-full"
                                 src={indianaImage}
                              />
                           </div>
                           <div className="trip_by_destination_list_vont rounded-b-lg bg-black px-4 flex justify-between items-center">
                              <p className="text-white py-3"><b>Maritius</b> (Indiana)</p>
                              <ul className="flex">
                                 <li className="ml-2.5">
                                    <Link to="/">
                                       <img
                                          alt="timeImg"
                                          className=""
                                          src={timeImg}
                                       />
                                    </Link>
                                 </li>
                                 <li className="ml-2.5">
                                    <Link to="/">
                                       <img
                                          alt="infoImg"
                                          className=""
                                          src={infoImg}
                                       />
                                    </Link>
                                 </li>
                                 <li className="ml-2.5">
                                    <Link to="/">
                                       <img
                                          alt="tagImg"
                                          className=""
                                          src={tagImg}
                                       />
                                    </Link>
                                 </li>
                                 <li className="ml-2.5">
                                    <Link to="/">
                                       <img
                                          alt="locationImg"
                                          className=""
                                          src={locationImg}
                                       />
                                    </Link>
                                 </li>
                              </ul>
                           </div>
                        </div>
                        <div className="w-full rounded-md mx-4">
                           <div className="trip_by_destination_list_img">
                              <img
                                 alt="Taj"
                                 className="rounded-t-lg w-full"
                                 src={chinaImage}
                              />
                           </div>
                           <div className="trip_by_destination_list_vont rounded-b-lg bg-black px-4 flex justify-between items-center">
                              <p className="text-white py-3"><b>The Great Wall</b> (China)</p>
                              <ul className="flex">
                                 <li className="ml-2.5">
                                    <Link to="/">
                                       <img
                                          alt="timeImg"
                                          className=""
                                          src={timeImg}
                                       />
                                    </Link>
                                 </li>
                                 <li className="ml-2.5">
                                    <Link to="/">
                                       <img
                                          alt="infoImg"
                                          className=""
                                          src={infoImg}
                                       />
                                    </Link>
                                 </li>
                                 <li className="ml-2.5">
                                    <Link to="/">
                                       <img
                                          alt="tagImg"
                                          className=""
                                          src={tagImg}
                                       />
                                    </Link>
                                 </li>
                                 <li className="ml-2.5">
                                    <Link to="/">
                                       <img
                                          alt="locationImg"
                                          className=""
                                          src={locationImg}
                                       />
                                    </Link>
                                 </li>
                              </ul>
                           </div>
                        </div>

                     </div>

                  </div>

                  <div className="view_more text-center mt-8">
                     <Link className="bg-orange-500 rounded-full text-base font-normal text-white px-7 py-2 inline-block hover:bg-black" to="/">Load More</Link>
                  </div>

               </div>
            </div>



            {/* FOOTER SECTION */}
            <div className="footer_section bg-slate-950 pt-12">
               <div className="container">
                  <div className="footer_top_section pb-10">
                     <div className="grid grid-cols-2 gap-8">
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
                     <div className="grid grid-cols-4 gap-8">
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



         </div>

      </>
   );
}

export default Main;
