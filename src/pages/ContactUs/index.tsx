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

import trainIcon from "../../assets/images/train_icon.png";
import busIcon from "../../assets/images/bus_icon.png";
import carIcon from "../../assets/images/car_icon.png";
import packageTourIcon from "../../assets/images/package_tour_icon.png";

import trainIconOr from "../../assets/images/train_icon_or.png";
import busIconOr from "../../assets/images/bus_icon_or.png";
import carIconOr from "../../assets/images/car_icon_or.png";
import packageTourIconOr from "../../assets/images/package_tour_icon_or.png";



import hotelIconBlack from "../../assets/images/hotel_icon_black.png";
import privateIconBlack from "../../assets/images/private_icon_black.png";
import flightIconBlack from "../../assets/images/flight_icon_black.png";
import onlyFlightIconBlack from "../../assets/images/plain_icon_black.png";
import longStayIconBlack from "../../assets/images/long_stay_icon_black.png";
import activityIconBlack from "../../assets/images/activities_icon_black.png";




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

import menuIcon from "../../assets/images/menu-icon.png";

import ctIcon from "../../assets/images/handshake.png";
import phoneIcon from "../../assets/images/phone-call.png";
import bcIcon from "../../assets/images/ct.png";

import customizeIcon from "../../assets/images/customize_icon.png";

import becamePartnerIcon from "../../assets/images/became_partner_icon.png";

import testiBG from "../../assets/images/testibg.png";

import footerImg from "../../assets/images/footer_banner.png";

import { Tab } from "../../base-components/Headless";


import officeIcon from "../../assets/images/office_icon.png";
import phoneIcon2 from "../../assets/images/phone_icon.png";
import emailIcon from "../../assets/images/email_icon.png";
import locationIcon from "../../assets/images/location_icon.png";





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

import {
   FormSelect
} from "../../base-components/Form";

import TinySlider, {
   TinySliderElement,
} from "../../base-components/TinySlider";

import Header from "../../frontend-components/layout/header";
import StickyMenu from "../../frontend-components/layout/stickyMenu";
import HomeBanner from "../../frontend-components/layout/banner";
import Footer from "../../frontend-components/layout/footer";
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';

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
         {/* HEADER SECTION TWO */}
         <StickyMenu></StickyMenu>
         <div className="bg-white overflow-hidden relative">



             {/* HEADER SECTION */}
             <Header></Header>

            {/* BANNER SECTION */}
            <BrowserView>
            <div className="banner_section relative bg-cover bg-bottom">
               <img
                  alt="Banner"
                  className="w-full"
                  src={bannerImage}
               />
               <div className="banner_content py-10 w-full h-full md:py-10 lg:py-20">
                  <div className="container flex justify-center items-center h-full">

                     <div className="relative">

                        <h1 className="text-center text-2xl font-bold text-white pb-5 md:text-4xl md:pb-6 lg:text-5xl">Contact Us</h1>
                        <p className="text-center text-sm font-medium text-white pb-8 w-full my-0 mx-auto md:text-base md:w-3/6">Experience our various exciting packages and make your hotel reservations. Find vacation packages also and search cheap hotels and events.</p>

                        <div className="booking_type_section mb-5">
                           <ul className="flex justify-center items-center">
                              <li className="active">
                                 <Link className="text-sm font-semibold text-white mx-4 px-4 flex justify-center items-center md:mx-8 xl:mx-2 lg:mx-2" to="/">
                                    <img
                                       alt="packageTourIcon"
                                       className="mb-1.5 mr-1.5"
                                       src={packageTourIcon}
                                    />
                                    Package Tour
                                 </Link>
                              </li>
                              <li className="hidden xl:block">
                                 <Link className="text-sm font-semibold text-white mx-4 px-4 flex justify-center items-center md:mx-8 xl:mx-2 lg:mx-2" to="/">
                                    <img
                                       alt="hotelIcon"
                                       className="mb-1.5 mr-1.5"
                                       src={hotelIcon}
                                    />
                                    Hotel
                                 </Link>
                              </li>
                              <li>
                                 <Link className="text-sm font-semibold text-white mx-4 px-4 flex justify-center items-center md:mx-8 xl:mx-2 lg:mx-2" to="/">
                                    <img
                                       alt="flightIcon"
                                       className="mb-1.5 mr-1.5"
                                       src={flightIcon}
                                    />
                                    Flight
                                 </Link>
                              </li>
                              <li>
                                 <Link className="text-sm font-semibold text-white mx-4 px-4 flex justify-center items-center md:mx-8 xl:mx-2 lg:mx-2" to="/">
                                    <img
                                       alt="carIcon"
                                       className="mb-1.5 mr-1.5"
                                       src={carIcon}
                                    />
                                    Car
                                 </Link>
                              </li>
                              <li className="hidden xl:block">
                                 <Link className="text-sm font-semibold text-white mx-4 px-4 flex justify-center items-center md:mx-8 xl:mx-2 lg:mx-2" to="/">
                                    <img
                                       alt="busIcon"
                                       className="mb-1.5 mr-1.5"
                                       src={busIcon}
                                    />
                                    Bus
                                 </Link>
                              </li>
                              <li className="hidden xl:block">
                                 <Link className="text-sm font-semibold text-white mx-4 px-4 flex justify-center items-center md:mx-8 xl:mx-2 lg:mx-2" to="/">
                                    <img
                                       alt="privateIcon"
                                       className="mb-1.5 mr-1.5"
                                       src={privateIcon}
                                    />
                                    Home Stay
                                 </Link>
                              </li>
                              <li className="hidden xl:block">
                                 <Link className="text-sm font-semibold text-white mx-4 px-4 flex justify-center items-center md:mx-8 xl:mx-2 lg:mx-2" to="/">
                                    <img
                                       alt="activityIcon"
                                       className="mb-1.5 mr-1.5"
                                       src={activityIcon}
                                    />
                                    Activity
                                 </Link>
                              </li>
                              <li className="hidden xl:block">
                                 <Link className="text-sm font-semibold text-white mx-4 px-4 flex justify-center items-center md:mx-8 xl:mx-2 lg:mx-2" to="/">
                                    <img
                                       alt="trainIcon"
                                       className="mb-1.5 mr-1.5"
                                       src={trainIcon}
                                    />
                                    Train
                                 </Link>
                              </li>
                           </ul>
                        </div>


                     </div>

                  </div>
               </div>
            </div>
            </BrowserView>
            <MobileView>
            <div className="banner_section relative bg-cover bg-bottom h-[700px]">
               <img
                  alt="Banner"
                  className="w-full"
                  src={bannerImage}
               />
               <div className="banner_content py-10 w-full h-full md:py-10 lg:py-20">
                  <div className="container flex justify-center items-center h-full">

                     <div className="relative">

                        <h1 className="text-center text-2xl font-bold text-white pb-5 md:text-4xl md:pb-6 lg:text-5xl">Contact Us</h1>
                        <p className="text-center text-sm font-medium text-white pb-8 w-full my-0 mx-auto md:text-base md:w-3/6">Experience our various exciting packages and make your hotel reservations. Find vacation packages also and search cheap hotels and events.</p>

                        <div className="booking_type_section mb-5">
                           <ul className="flex justify-center items-center">
                              <li className="active">
                                 <Link className="text-sm font-semibold text-white mx-4 px-4 flex justify-center items-center md:mx-8 xl:mx-2 lg:mx-2" to="/">
                                    <img
                                       alt="packageTourIcon"
                                       className="mb-1.5 mr-1.5"
                                       src={packageTourIcon}
                                    />
                                    Package Tour
                                 </Link>
                              </li>
                              <li className="hidden xl:block">
                                 <Link className="text-sm font-semibold text-white mx-4 px-4 flex justify-center items-center md:mx-8 xl:mx-2 lg:mx-2" to="/">
                                    <img
                                       alt="hotelIcon"
                                       className="mb-1.5 mr-1.5"
                                       src={hotelIcon}
                                    />
                                    Hotel
                                 </Link>
                              </li>
                              <li>
                                 <Link className="text-sm font-semibold text-white mx-4 px-4 flex justify-center items-center md:mx-8 xl:mx-2 lg:mx-2" to="/">
                                    <img
                                       alt="flightIcon"
                                       className="mb-1.5 mr-1.5"
                                       src={flightIcon}
                                    />
                                    Flight
                                 </Link>
                              </li>
                              <li>
                                 <Link className="text-sm font-semibold text-white mx-4 px-4 flex justify-center items-center md:mx-8 xl:mx-2 lg:mx-2" to="/">
                                    <img
                                       alt="carIcon"
                                       className="mb-1.5 mr-1.5"
                                       src={carIcon}
                                    />
                                    Car
                                 </Link>
                              </li>
                              <li className="hidden xl:block">
                                 <Link className="text-sm font-semibold text-white mx-4 px-4 flex justify-center items-center md:mx-8 xl:mx-2 lg:mx-2" to="/">
                                    <img
                                       alt="busIcon"
                                       className="mb-1.5 mr-1.5"
                                       src={busIcon}
                                    />
                                    Bus
                                 </Link>
                              </li>
                              <li className="hidden xl:block">
                                 <Link className="text-sm font-semibold text-white mx-4 px-4 flex justify-center items-center md:mx-8 xl:mx-2 lg:mx-2" to="/">
                                    <img
                                       alt="privateIcon"
                                       className="mb-1.5 mr-1.5"
                                       src={privateIcon}
                                    />
                                    Home Stay
                                 </Link>
                              </li>
                              <li className="hidden xl:block">
                                 <Link className="text-sm font-semibold text-white mx-4 px-4 flex justify-center items-center md:mx-8 xl:mx-2 lg:mx-2" to="/">
                                    <img
                                       alt="activityIcon"
                                       className="mb-1.5 mr-1.5"
                                       src={activityIcon}
                                    />
                                    Activity
                                 </Link>
                              </li>
                              <li className="hidden xl:block">
                                 <Link className="text-sm font-semibold text-white mx-4 px-4 flex justify-center items-center md:mx-8 xl:mx-2 lg:mx-2" to="/">
                                    <img
                                       alt="trainIcon"
                                       className="mb-1.5 mr-1.5"
                                       src={trainIcon}
                                    />
                                    Train
                                 </Link>
                              </li>
                           </ul>
                        </div>


                     </div>

                  </div>
               </div>
            </div>
            </MobileView>
            

            {/* ABOUT CONTENT SECTION */}
            <div className="contact_section py-10 overflow-hidden">
               <div className="container">

                  <div className="contact_wrapper flex">
                     <div className="contact_info_section w-full py-4 px-4 lg:py-10 lg:px-20 lg:w-3/6">
                        <h2 className="text-4xl text-black mb-6">Contact Info</h2>
                        <div className="flex items-center">
                           <img
                              alt="officeIcon"
                              className="mb-1.5 mr-1.5"
                              src={officeIcon}
                           />
                           <p className="text-base py-2">Singdha Srijon Tours Private Limited</p>
                        </div>
                        <div className="flex items-center">
                           <img
                              alt="locationIcon"
                              className="mb-1.5 mr-1.5"
                              src={locationIcon}
                           />
                           <p className="text-base py-2">89,R.N. Tagore Road, Laldighi, Berhampore, Murshidabad, West Bengal, PIN-742101</p>
                        </div>
                        <div className="flex items-center">
                           <img
                              alt="phoneIcon2"
                              className="mb-1.5 mr-1.5"
                              src={phoneIcon2}
                           />
                           <p className="text-base py-2">+91 9083206497</p>
                        </div>
                        <div className="flex items-center">
                           <img
                              alt="emailIcon"
                              className="mb-1.5 mr-1.5"
                              src={emailIcon}
                           />
                           <p className="text-base py-2">support@srijontours.com</p>
                        </div>
                        <div className="header_social_area flex mt-4">
                           <Link className="pl-0 text-neutral-500 hover:text-orange-500" to="/"><Lucide icon="Facebook" className="block mx-auto" /></Link>
                           <Link className="pl-2.5 text-neutral-500 hover:text-orange-500" to="/"><Lucide icon="Twitter" className="block mx-auto" /></Link>
                           <Link className="pl-2.5 text-neutral-500 hover:text-orange-500" to="/"><Lucide icon="Linkedin" className="block mx-auto" /></Link>
                           <Link className="pl-2.5 text-neutral-500 hover:text-orange-500" to="/"><Lucide icon="Youtube" className="block mx-auto" /></Link>
                           <Link className="pl-2.5 text-neutral-500 hover:text-orange-500" to="/"><Lucide icon="Instagram" className="block mx-auto" /></Link>
                        </div>
                     </div>
                     <div className="contact_form_section w-full py-4 px-4 lg:py-10 lg:px-20 lg:w-3/6">
                        <h2 className="text-4xl text-black mb-6">Get In Touch</h2>
                        <div>
                           <Preview>
                              <div>
                                 <FormLabel htmlFor="regular-form-1">Name</FormLabel>
                                 <FormInput
                                    id="regular-form-1"
                                    type="text"
                                    placeholder="Input text"
                                 />
                              </div>
                              <div className="mt-3">
                                 <FormLabel htmlFor="vertical-form-1">Email</FormLabel>
                                 <FormInput
                                    id="vertical-form-1"
                                    type="text"
                                    placeholder="example@gmail.com"
                                 />
                              </div>
                              <div className="mt-3">
                                 <FormLabel htmlFor="regular-form-1">Subject</FormLabel>
                                 <FormInput
                                    id="regular-form-1"
                                    type="text"
                                    placeholder="Input text"
                                 />
                              </div>
                              <div className="mt-3">
                                 <FormLabel htmlFor="regular-form-1">Message</FormLabel>
                                 <textarea className="w-full border-slate-200 rounded-md shadow-sm text-sm p-2" placeholder="Message" rows={4} cols={40} />
                              </div>
                              <Button variant="primary" className="mt-5 bg-orange-500 rounded-lg text-sm font-medium text-white px-6 py-2 border-0 hover:bg-black md:pl-3 md:pr-4">
                                 Submit
                              </Button>
                           </Preview>
                        </div>
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
