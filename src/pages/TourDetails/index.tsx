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

import { Link, useParams, useNavigate } from "react-router-dom";
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

import {
   FormSelect
} from "../../base-components/Form";

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


import 'photoswipe/dist/photoswipe.css';

import { Gallery, Item } from 'react-photoswipe-gallery';

import DayPlan from "../../elements/dayPlan";
import Pax from "../../elements/pax";


import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';

function Main() {
   const CUST_ID = 1234
   const [changesMade, setChangesMade] = useState(0);
   const navigate = useNavigate();

   const API = server.API_URL;
   const imgPath = server.FILE_PATH;
   const params = useParams();
   const id = params.id;
   console.log({id});
   const [isLoading, setisLoading] = useState(true);
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

   const [itineraryData, setitineraryData] = useState({});
   const [galleryImg, setgalleryImg] = useState();
   const [itineraryDetails, setitineraryDetails] = useState([]);
   const [totalPrice, setTotalPrice] = useState();
   const [season, setSeason] = useState('On-season');
   const [cities, setCities] = useState([]);
  
   const getItineraryData = (id)=>{
      // const data = callApi(API, "POST", "super-itinerary-master/home-itinerary-details", {"id": id}).then((result)=>{
      callApi(API, "POST", `super-itinerary-master/${id}`, {}).then((result)=>{
         console.log("AAAA:",{result: result.data});
         setitineraryData(result.data);
         setSeason(result.data.season)
         const gallery = (result.data.gallery) ? JSON.parse(result.data.gallery) : [];
         const dayDetails = (result.data.dayDetails) ? result.data.dayDetails : [];
         // const pax = JSON.parse(result.data.pax);
         // setTotalPrice(pax[0]);
         setitineraryDetails(dayDetails);
         setgalleryImg(gallery);

      })
   }

   const handleDayDetails = (id,key,val) => {
      let newDayDetails = [...itineraryDetails]
      newDayDetails[id - 1][key.split('_')[0]] = val
      setitineraryDetails(newDayDetails)
      // console.log({dayDetails})

      setChangesMade(changesMade + 1)
    }

   useEffect(()=>{
      getItineraryData(id);

      callApi(API, "GET", `${server.API_ENDPOINT.CITY}`, {}).then((result)=>{
         console.log({cities: result.data})
         setCities(result)
      })
      setisLoading(false);
   },[]);

   const [paxArr,setPaxArr] = useState([0,0,0,0,[0,0,0,0]])
   const [pax,setPax] = useState([0,0,0,0,[0,0,0,0]])
   const [paxItems,setPaxItems] = useState([])   
   const updatePAX = (p,pItems) => {
      setPaxArr(p)
      setPax(p)
      setPaxItems(pItems)
      // console.log({newPax})
   }
   const [calculate,setCalculate] = useState(0)
   useEffect(() => {
      setCalculate(calculate + 1)
      // console.log({calculate})
   },[itineraryDetails])

   // console.log({itineraryData});
   // console.log({itineraryDetails});

   if(isLoading){
      return <div>Loading.....</div>
   }

   const submit = () => {
      console.log({changesMade})
      if (changesMade > 1) {
         let formData = {...itineraryData}
         formData.dayDetails = itineraryDetails
         formData.pax = pax
         formData.paxItems = paxItems
         formData.createdBy = CUST_ID
         formData.createdFrom = 'SITE'
         delete formData.id

         console.log({formData})
         callApi(API, "POST", `${server.API_ENDPOINT.ITINERARY}`, formData).then((result)=>{
            console.log({submitResponse: result})
            if (result.status === 200) {
               let newId = result.data.post.id
               navigate(`/review-details/${newId}/DOOARS-TOUR-5N-6D`);
            } else {
               console.log('Something went wrong!')
            }         
         })
      } else {
         navigate(`/review-details/${id}/DOOARS-TOUR-5N-6D`);
      }
   }

   return (
      <>

         {/* HEADER SECTION TWO */}
         <StickyMenu></StickyMenu>
         <div className="bg-white overflow-hidden">
            {/* HEADER SECTION */}
            <Header></Header>

            {/* BANNER SECTION */}


            <BrowserView>
            <div className="banner_section relative bg-cover bg-center">
               <img
                  alt="listingBannerImage"
                  className="w-full"
                  src={`${imgPath}${itineraryData.thumbnail}`}
               />
               <div className="banner_content py-14 w-full h-full xl:px-8 absolute left-1 top-1 z-10">
                  <div className="container flex-initial justify-between items-center h-full lg:flex">

                     <div>

                        <h1 className="text-center text-2xl font-bold text-white pb-5 md:text-3xl lg:text-left lg:text-3xl">{itineraryData.tourName}</h1>

                        <div className="form_area py-10 md:px-4 xl:px-0">
                           <form>

                              <div className="form_container flex-initial justify-center align-center md:flex">

                                 <div className="form_field_area mx-1 relative lg:mx-2">
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
                                             className="text-black rounded-full py-5 px-9 text-sm lg:py-6 lg:px-9 lg:text-base"
                                          />
                                       </div>
                                    </Preview>
                                 </div>

                                 <div className="form_field_area mx-1 relative lg:mx-2">
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
                                             className="text-black rounded-full py-5 px-9 text-sm lg:py-6 lg:px-9 lg:text-base"
                                          />
                                       </div>
                                    </Preview>
                                 </div>

                                 <div className="form_field_area mx-1 relative lg:mx-2">
                                    <Preview>
                                       <div className="relative w-60 mx-auto">
                                          <div className="absolute flex items-center justify-center w-12 h-full rounded-l text-black">
                                             <Lucide icon="Calendar" className="w-4 h-4" />
                                          </div>
                                          <FormSelect
                                             className="pl-10 sm:mr-2 text-black rounded-full py-5 px-9 text-sm lg:py-6 lg:px-9 lg:text-base"
                                             aria-label="Default select example"
                                          >
                                             <option>2 Adults (1 Room)</option>
                                             <option>4 Adults (2 Room)</option>
                                             <option>6 Adults (3 Room)</option>
                                          </FormSelect>
                                       </div>
                                    </Preview>
                                 </div>

                                 <div className="form_container flex justify-center align-center">
                                    <div className="form_field_area mt-0 ml-2">
                                       <input className="text-base font-semibold uppercase bg-orange-500 py-5 px-12 rounded-full text-white hover:bg-black cursor-pointer lg:text-2xl" type="submit" value="SEARCH" />
                                    </div>
                                 </div>


                              </div>
                              <div className="form_container">
                                 <div className="download_Iteinerary mt-14">
                                    <Link className="bg-white rounded-full text-sm font-medium text-black px-6 py-2  hover:bg-black hover:text-white" target="_blank" to={`${imgPath}pdf/${itineraryData.pdfFilePath}`} >Download Itinerary</Link>
                                 </div>
                              </div>



                           </form>
                        </div>

                     </div>

                     <div className="w-80 bg-white rounded-lg p-0 mx-auto my-0 lg:mx-0 lg:my-0">
                        <div className="py-4 px-4">
                           <div className="price_offer_box flex justify-between mb-5">
                              <div className="old_price text-base text-sm font-semibold py-2">₹{paxArr[1] + paxArr[4][0] + paxArr[2]}</div>
                              <div className="offer_box bg-orange-500 rounded-md font-semibold text-white py-2 px-3">41%OFF</div>
                           </div>
                           <div className="final_price_box text-center mb-2 mt-2">
                              <p className="py-2 px-4 border-slate-400 inline-block border rounded-lg text-2xl font-semibold text-orange-500">₹{(paxArr[1] + paxArr[4][0] + paxArr[2])/2} <span className="text-sm text-black">per person*</span></p>
                           </div>
                           <p className="text-center font-medium text-xs mb-2">Excluding applicable taxes</p>
                           {/* <div className="date_modify_box flex justify-between py-2">
                              <div className="date_box font-medium text-inherit flex items-center">
                                 <img
                                    alt="calendarIcon"
                                    className="mr-1"
                                    src={calendarIcon}
                                 />
                                 10 Jul - 14 Jul
                              </div>
                              <div className="modify_box font-medium text-orange-500"><Link to="/">Modify</Link></div>
                           </div> */}
                           <div className="proceed_box text-center mt-4 mb-1">
                              {/* <Link className="bg-black rounded-full text-xs font-medium text-white px-4 py-2 ml-1 hover:bg-orange-500" to={`/review-details/${id}/DOOARS-TOUR-5N-6D`}>Proceed to Book Online</Link> */}
                              <Button className="bg-black rounded-full text-xs font-medium text-white px-4 py-2 ml-1 hover:bg-orange-500" onClick={() => submit()}>Proceed to Book Online</Button>
                           </div>
                        </div>
                        <div className="enquiry_box flex justify-between bg-zinc-300 px-4 py-2 mb-3">
                           <p className="text-xs text-black py-2">Or you can click the enquiry button</p>
                           <Link className="bg-black rounded-full text-xs font-medium text-white px-3 py-2 ml-1 hover:bg-orange-500" to="/enquiry">Enquiry</Link>
                        </div>
                     </div>

                  </div>
               </div>
            </div>
            </BrowserView>
            <MobileView>
            <div className="banner_section relative bg-cover bg-center h-[700px]" style={{ backgroundImage: `url(${imgPath}${itineraryData.thumbnail})` }}>
               <div className="banner_content py-14 w-full h-full xl:px-8">
                  <div className="container flex-initial justify-between items-center h-full lg:flex">

                     <div>

                        <h1 className="text-center text-2xl font-bold text-white pb-5 md:text-3xl lg:text-left lg:text-3xl">{itineraryData.tourName}</h1>

                        <div className="form_area pb-5 md:px-4 xl:px-0">
                           <form>

                              <div className="form_container flex-initial justify-center align-center md:flex">

                                 <div className="form_field_area mx-1 relative lg:mx-2">
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
                                             className="text-black rounded-full py-5 px-9 text-sm lg:py-6 lg:px-9 lg:text-base"
                                          />
                                       </div>
                                    </Preview>
                                 </div>

                                 <div className="form_field_area mx-1 relative lg:mx-2">
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
                                             className="text-black rounded-full py-5 px-9 text-sm lg:py-6 lg:px-9 lg:text-base"
                                          />
                                       </div>
                                    </Preview>
                                 </div>

                                 <div className="form_field_area mx-1 relative lg:mx-2">
                                    <Preview>
                                       <div className="relative w-60 mx-auto">
                                          <div className="absolute flex items-center justify-center w-12 h-full rounded-l text-black">
                                             <Lucide icon="Calendar" className="w-4 h-4" />
                                          </div>
                                          <FormSelect
                                             className="pl-10 sm:mr-2 text-black rounded-full py-5 px-9 text-sm lg:py-6 lg:px-9 lg:text-base"
                                             aria-label="Default select example"
                                          >
                                             <option>2 Adults (1 Room)</option>
                                             <option>4 Adults (2 Room)</option>
                                             <option>6 Adults (3 Room)</option>
                                          </FormSelect>
                                       </div>
                                    </Preview>
                                 </div>

                                 <div className="form_container flex justify-center align-center">
                                    <div className="form_field_area mt-0 ml-2">
                                       <input className="text-base font-semibold uppercase bg-orange-500 py-5 px-12 rounded-full text-white hover:bg-black cursor-pointer lg:text-2xl" type="submit" value="SEARCH" />
                                    </div>
                                 </div>


                              </div>
                              <div className="form_container">
                                 <div className="download_Iteinerary mt-5">
                                    <Link className="bg-white rounded-full text-sm font-medium text-black px-6 py-2  hover:bg-black hover:text-white" target="_blank" to={`${imgPath}pdf/${itineraryData.pdfFilePath}`} >Download Itinerary</Link>
                                 </div>
                              </div>



                           </form>
                        </div>

                     </div>

                     <div className="w-80 bg-white rounded-lg p-0 mx-auto my-0 lg:mx-0 lg:my-0">
                        <div className="py-4 px-4">
                           <div className="price_offer_box flex justify-between mb-5">
                              <div className="old_price text-base text-sm font-semibold py-2">₹{paxArr[1] + paxArr[4][0] + paxArr[2]}</div>
                              <div className="offer_box bg-orange-500 rounded-md font-semibold text-white py-2 px-3">41%OFF</div>
                           </div>
                           <div className="final_price_box text-center mb-2 mt-2">
                              <p className="py-2 px-4 border-slate-400 inline-block border rounded-lg text-2xl font-semibold text-orange-500">₹{(paxArr[1] + paxArr[4][0] + paxArr[2])/2} <span className="text-sm text-black">per person*</span></p>
                           </div>
                           <p className="text-center font-medium text-xs mb-2">Excluding applicable taxes</p>
                           {/* <div className="date_modify_box flex justify-between py-2">
                              <div className="date_box font-medium text-inherit flex items-center">
                                 <img
                                    alt="calendarIcon"
                                    className="mr-1"
                                    src={calendarIcon}
                                 />
                                 10 Jul - 14 Jul
                              </div>
                              <div className="modify_box font-medium text-orange-500"><Link to="/">Modify</Link></div>
                           </div> */}
                           <div className="proceed_box text-center mt-4 mb-1">
                              {/* <Link className="bg-black rounded-full text-xs font-medium text-white px-4 py-2 ml-1 hover:bg-orange-500" to={`/review-details/${id}/DOOARS-TOUR-5N-6D`}>Proceed to Book Online</Link> */}
                              <Button className="bg-black rounded-full text-xs font-medium text-white px-4 py-2 ml-1 hover:bg-orange-500" onClick={() => submit()}>Proceed to Book Online</Button>
                           </div>
                        </div>
                        <div className="enquiry_box flex justify-between bg-zinc-300 px-4 py-2 mb-3">
                           <p className="text-xs text-black py-2">Or you can click the enquiry button</p>
                           <Link className="bg-black rounded-full text-xs font-medium text-white px-3 py-2 ml-1 hover:bg-orange-500" to="/enquiry">Enquiry</Link>
                        </div>
                     </div>

                  </div>
               </div>
            </div>
            </MobileView>


            {/* TOUR DETAILS SECTION */}

            <div className="tour_details_section">
               <div className="container">
                  <div className="my-12 md:mx-6 xl:mx-0 xl:px-8">
                     <Preview>
                        <Tab.Group>
                           <Tab.List variant="tabs">
                              <Tab>
                                 <Tab.Button className="w-full py-4 h-16 text-xs md:text-base md:py-6" as="button">
                                    Itinerary
                                 </Tab.Button>
                              </Tab>
                              <Tab>
                                 <Tab.Button className="w-full py-4 h-16 text-xs md:text-base md:py-6" as="button">
                                    Inclusion & Exclusion
                                 </Tab.Button>
                              </Tab>
                              <Tab>
                                 <Tab.Button className="w-full py-4 h-16 text-xs md:text-base md:py-6" as="button">
                                    Cancellation
                                 </Tab.Button>
                              </Tab>
                           </Tab.List>
                           <Tab.Panels className="border-b border-l border-r">
                              <Tab.Panel className="p-5 leading-relaxed">

                                 <div className="tour_details_container">

                                    <div className="plan_bar_section bg-gray-200 px-2 py-2 text-xs font-semibold mb-7  md:bg-gray-200 md:px-9 md:py-4 md:text-sm md:font-semibold md:mb-7">
                                       <ul className="flex">
                                          <li className="w-1/4">{itineraryDetails.length} Day Plan</li>
                                          <li className="w-1/4">2 Flights</li>
                                          <li className="w-1/4">1 Hotel</li>
                                          <li className="w-1/4">2 Transfers</li>
                                       </ul>
                                    </div>
                                    {_.take(itineraryDetails, itineraryDetails.length).map((item, Key) => {
                                       return <>
                                       <div className="mb-9">

                                       <div className="day_plan_area">
                                          <div className="day_plan_box">

                                             <div className="day_title_section flex-initial justify-between items-center mb-5 md:flex">
                                                <div className="day_title bg-zinc-500 text-xs font-semibold text-white px-3.5 py-2.5 mb-3">
                                                   Day {Key+1} - {item.title}
                                                </div>
                                                <div className="day_travel_fair text-xs font-semibold text-black flex items-center">
                                                   INCLUDED:  <img
                                                      alt="flightIcon2"
                                                      className="px-1"
                                                      src={flightIcon2}
                                                   />1 Flight  |  <img
                                                      alt="hotelIcon2"
                                                      className="px-1"
                                                      src={hotelIcon2}
                                                   />1 Hotel |  <img
                                                      alt="travelIcon"
                                                      className="px-1"
                                                      src={travelIcon}
                                                   />{item.plan.filter(x => x.field === 'transport').length} Transfer
                                                </div>
                                             </div>

                                             <div className="travelling_place_details flex-initial mb-12 md:flex">
                                                <div className="place_pic w-full md:w-4/12 lg:w-3/12">
                                                   <img
                                                      alt="chinaImage"
                                                      className="rounded-lg"
                                                      src={`${imgPath}${item.thumbnail}`}
                                                   />
                                                </div>
                                                <div className="place_desc px-0 py-4 w-full md:w-8/12 lg:w-9/12 md:px-7">
                                                   {/* <p className="text-sm font-semibold text-black mb-1.5">Name of the Place</p> */}
                                                   <p className="text-sm font-semibold text-slate-500 mb-1.5">Description: </p>
                                                   <p className="text-sm text-black leading-6 mb-5">{item.description} </p>
                                                   {/* <div className="place_post_date text-xs">
                                                      Mon, 10 Jul 2023
                                                   </div> */}
                                                </div>
                                             </div>

                                          </div>
                                       </div>

                                       <div className="col-span-12 intro-y box lg:col-span-12" >
                                       <DayPlan plan={item.plan} locations={item.locations} fromID={Number(item.fromId)} toID={Number(item.toId)} city={cities} season={season} handleChange={(field,val) => handleDayDetails(Key+1,field,val)} type='edit' />
                                       </div>

                                    </div>
                                    </>
                                    })}
                                    
                                 </div>

                              </Tab.Panel>
                              <Tab.Panel className="p-5 leading-relaxed">
                                 <h1 className="text-2xl mb-2 font-medium leading-none"><b>Inclusions</b></h1>
                                 <div dangerouslySetInnerHTML={{ __html: itineraryData.inclusions }} />
                                 <h1 className="text-2xl mb-2 font-medium leading-none"><b>Exclusions</b></h1>
                                 <div dangerouslySetInnerHTML={{ __html: itineraryData.exclusions }} />
                              </Tab.Panel>
                              <Tab.Panel className="p-5 leading-relaxed">
                              <h1 className="text-2xl mb-2 font-medium leading-none"><b>Cancellation</b></h1>
                                 <div dangerouslySetInnerHTML={{ __html: itineraryData.moreDetails }} />
                              </Tab.Panel>
                           </Tab.Panels>
                        </Tab.Group>
                     </Preview>
                  </div>
               </div>
            </div>

            {/* GALLERY SECTION */}
            { itineraryData.gallery &&  
            <div className="gallery_section">
               <div className="container">
                  <div className="mb-10 md:mx-5 xl:mx-0 xl:px-8">
                     <h2 className="text-2xl font-bold text-black mb-3">Gallery</h2>

                     <div className="grid gap-4 grid-cols-2 mb-7 md:grid md:gap-8 md:grid-cols-4">

                     

                        <Gallery>
                         {_.take(galleryImg, galleryImg.length).map((item, Key) => {
                           return <>
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
                         })} 
                           {/* <Item
                              original={domesticImage01}
                              thumbnail={domesticImage01}
                              width="1024"
                              height="768"
                           >
                              {({ ref, open }) => (
                                 <img
                                    ref={ref}
                                    onClick={open}
                                    alt=""
                                    className="rounded-lg w-full cursor-pointer"
                                    src={domesticImage01}
                                 />
                              )}
                           </Item>
                           <Item
                              original={domesticImage02}
                              thumbnail={domesticImage02}
                              width="1024"
                              height="768"
                           >
                              {({ ref, open }) => (
                                 <img
                                    ref={ref}
                                    onClick={open}
                                    alt=""
                                    className="rounded-lg w-full cursor-pointer"
                                    src={domesticImage02}
                                 />
                              )}
                           </Item>
                           <Item
                              original={domesticImage03}
                              thumbnail={domesticImage03}
                              width="1024"
                              height="768"
                           >
                              {({ ref, open }) => (
                                 <img
                                    ref={ref}
                                    onClick={open}
                                    alt=""
                                    className="rounded-lg w-full cursor-pointer"
                                    src={domesticImage03}
                                 />
                              )}
                           </Item>
                           <Item
                              original={domesticImage04}
                              thumbnail={domesticImage04}
                              width="1024"
                              height="768"
                           >
                              {({ ref, open }) => (
                                 <img
                                    ref={ref}
                                    onClick={open}
                                    alt=""
                                    className="rounded-lg w-full cursor-pointer"
                                    src={domesticImage04}
                                 />
                              )}
                           </Item>
                           <Item
                              original={indianaImage}
                              thumbnail={indianaImage}
                              width="1024"
                              height="768"
                           >
                              {({ ref, open }) => (
                                 <img
                                    ref={ref}
                                    onClick={open}
                                    alt=""
                                    className="rounded-lg w-full cursor-pointer"
                                    src={indianaImage}
                                 />
                              )}
                           </Item>
                           <Item
                              original={usaImage}
                              thumbnail={usaImage}
                              width="1024"
                              height="768"
                           >
                              {({ ref, open }) => (
                                 <img
                                    ref={ref}
                                    onClick={open}
                                    alt=""
                                    className="rounded-lg w-full cursor-pointer"
                                    src={usaImage}
                                 />
                              )}
                           </Item>
                           <Item
                              original={brazilImage}
                              thumbnail={brazilImage}
                              width="1024"
                              height="768"
                           >
                              {({ ref, open }) => (
                                 <img
                                    ref={ref}
                                    onClick={open}
                                    alt=""
                                    className="rounded-lg w-full cursor-pointer"
                                    src={brazilImage}
                                 />
                              )}
                           </Item>
                           <Item
                              original={chinaImage}
                              thumbnail={chinaImage}
                              width="1024"
                              height="768"
                           >
                              {({ ref, open }) => (
                                 <img
                                    ref={ref}
                                    onClick={open}
                                    alt=""
                                    className="rounded-lg w-full cursor-pointer"
                                    src={chinaImage}
                                 />
                              )}
                           </Item> */}
                        </Gallery>


                     </div>

                  </div>
               </div>
            </div>
            }

            <div className="pax_section">
               <div className="container">
                  <div className="mb-10 md:mx-5 xl:mx-0 xl:px-8">
                     <Pax dayDetails={itineraryDetails} season={season} calculate={calculate} handleChange={(p,pItems) => updatePAX(p,pItems)} />
                  </div>
               </div>
            </div>


            {/* Coupon SECTION */}
            {/* <div className="Coupon_section">
               <div className="container">
                  <div className="mb-14">
                     <h2 className="text-2xl font-bold text-black mb-3">Coupon</h2>

                     <div className="grid gap-8 grid-cols-4 mb-7">

                        <div className="relative border border-black border-dashed rounded-lg p-4">
                           <h3 className="text-base font-bold border-black border-b border-dashed mb-5 inline-block text-current">PRODUCT</h3>
                           <p className="text-sm font-medium text-current">Book your holidays with easy <span className="text-sm font-medium text-orange-500">Coupon Codes</span></p>
                           <div className="apply_coupon_area flex my-4 rounded-full border border-slate-400 border-solid">
                              <div className="col-span-12 sm:col-span-6 w-3/4">
                                 <FormInput
                                    id=""
                                    type="text"
                                    placeholder="Have a coupon code?"
                                    className="leading-7 border-0 bg-transparent"
                                 />
                              </div>
                              <Button
                                 variant="primary"
                                 type="button"
                                 className="w-1/4 font-light border-0 bg-transparent text-orange-500"
                              >
                                 Apply
                              </Button>
                           </div>
                        </div>

                        <div className="relative border border-blue-600 border-dashed rounded-lg p-4 bg-blue-200">
                           <div className="flex justify-between">
                              <div>
                                 <h3 className="text-base font-bold border-black border-b border-dashed mb-1 inline-block text-black">GRANDOFFER</h3>
                                 <p className="text-sm font-medium text-black">40% OFF on Tours</p>
                              </div>
                              <div>
                                 <Link className="text-blue-600 font-semibold" to="/">REMOVE</Link>
                              </div>
                           </div>
                           <div className="apply_coupon_area mt-14">
                              <p className="text-sm font-bold text-black">-12,858</p>
                           </div>
                        </div>

                        <div className="relative border border-green-400 border-dashed rounded-lg p-4 bg-green-100">
                           <div className="flex justify-between">
                              <div>
                                 <h3 className="text-base font-bold border-black border-b border-dashed mb-1 inline-block text-black">NOKIDDING CARD</h3>
                                 <p className="text-sm font-medium text-black">5% extra discount than NOKIDDING</p>
                              </div>
                              <div>
                                 <Link className="text-blue-600 font-semibold" to="/">APPLY</Link>
                              </div>
                           </div>
                           <div className="apply_coupon_area mt-14">
                              <p className="text-sm font-bold text-black">-12,858</p>
                           </div>
                        </div>

                        <div className="relative border border-black border-dashed rounded-lg p-4 bg-blue-200">
                           <div className="flex justify-between">
                              <div>
                                 <h3 className="text-base font-bold border-black border-b border-dashed mb-1 inline-block text-black">GRANDOFFER</h3>
                                 <p className="text-sm font-medium text-black">Coupon applied successfully</p>
                              </div>
                              <div>
                                 <Link className="text-blue-600 font-semibold" to="/">REMOVE</Link>
                              </div>
                           </div>
                           <div className="apply_coupon_area mt-14">
                              <p className="text-sm font-bold text-black">-12,858</p>
                           </div>
                        </div>

                     </div>

                  </div>
               </div>
            </div> */}




           {/* FOOTER SECTION */}
           <Footer></Footer>



         </div>

      </>
   );
}

export default Main;
