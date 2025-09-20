// @ts-nocheck
import DarkModeSwitcher from "../../components/DarkModeSwitcher";
import MainColorSwitcher from "../../components/MainColorSwitcher";
import logoUrl from "../../assets/images/logo.svg";
import illustrationUrl from "../../assets/images/illustration.svg";
import { FormInput, FormCheck } from "../../base-components/Form";
import clsx from "clsx";

// import SideMenu from "../../layouts/SideMenu";
// import SimpleMenu from "../../layouts/SideMenu";
// import TopMenu from "../../layouts/SideMenu";

import TopBar from "../../components/TopBar";

import { Link } from "react-router-dom";

import bannerImage from "../../assets/images/banner.png";





import domesticImage01 from "../../assets/images/d01.jpg";
import domesticImage02 from "../../assets/images/d02.jpg";
import domesticImage03 from "../../assets/images/d03.jpg";
import domesticImage04 from "../../assets/images/d04.jpg";


import internationalImage01 from "../../assets/images/i01.jpg";




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
import BannerMenu from "../../frontend-components/layout/bannerMenu";
import StickyMenu from "../../frontend-components/layout/stickyMenu";
import HomeBanner from "../../frontend-components/layout/banner";
import Footer from "../../frontend-components/layout/footer";
import api from "../../../apiconfig.json";
import axios from "axios";
import Pagination from "../../components/CustomComponents/paginations";
import _ from "lodash";
import HomeStayListingSnippet from "../../frontend-components/homeStay/homeStayListingSnippet";
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';

const marginArrowStyle = {
   right: -25,
   top: 20,
};


 


function Main() {
   const server = api.API_URL;
   const [date, setDate] = useState("");
   // const [daterange, setDaterange] = useState("");
   // const [datepickerModalPreview, setDatepickerModalPreview] = useState(false);
   // const cancelButtonRef = useRef(null);

   // This for slider
   /*
   const importantNotesRef = useRef<TinySliderElement>();
   const prevImportantNotes = () => {
      importantNotesRef.current?.tns.goTo("prev");
   };
   const nextImportantNotes = () => {
      importantNotesRef.current?.tns.goTo("next");
   };

   const [superlargeModalSizePreview, setSuperlargeModalSizePreview] = useState(false);
   const sendButtonRef = useRef(null); */
   //==============Fetch Data======================
const [resData, setResData] = useState('');
const [searchStr, setSearchStr] = useState('');
const [dataPerPage, setDataPerPage] = useState(200);
const [pageNo, setPageNo] = useState(0);
const [currentPage, setCurrentPage] = useState(1);
const [npage, setnpage] = useState(0);
const recordPerPage = dataPerPage;
const lastIndex = currentPage * recordPerPage;
const firstIndex = lastIndex - recordPerPage; 
const numbers = [...Array(npage +1).keys()].slice(1);

   //===============Search Fields===================

 const getSearchStr = (str)=>{
   setSearchStr(str);
   if(str.length >2){
     fetchData(str,dataPerPage,pageNo);
   }
   
 }
 
 const deleteSearchData = ()=>{
   setSearchStr('');
   setCurrentPage(1);
   fetchData('',dataPerPage,pageNo);
 }
 
 //==============Pagination============================
 
 // const handleDataPerPage = (val)=>{
 //   setDataPerPage(val);
 //   console.log(val);
 //   fetchData(searchStr,val,pageNo);
 // }
 const prePage = ()=>{}
 const nextPage = ()=>{}
 const changeCPage = ()=>{}
 
   const fetchData = (value='',limit=200,pageNo=0)=>{
 
      const dataStr = `?search=${value}`;
      const dataLimit = `&limit=${limit}`;
      const dataPageNo = `&sLimit=${pageNo*limit}`;
     
       const res = axios.get(`${server}vendor-hotel-master/front/get-all-homestay/ ${dataStr}${dataLimit}${dataPageNo}`).then((response)=> {
         console.log("Data: ",response.data.data);
         setResData(response.data.data); 
         //console.log("Re:", Math.ceil(response.data.count[0].countData/recordPerPage));
         setnpage(response.data.count[0].countData)
         //console.log("Length: ",response.data.data.length);
         //console.log(resData); 
         //console.log("No Of Page:", npage);
       })
       .catch(function (error) {
         console.log(error);
         });
  
     
   }
 
   const handlePage = (page)=>{
     console.log(page);
     setCurrentPage(page+1);
     fetchData(searchStr,dataPerPage,page);
   }
 
   useEffect(()=>{
         fetchData();
     },[]);



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

                        <h1 className="text-center text-2xl font-bold text-white pb-5 md:text-4xl md:pb-6 lg:text-5xl">HOTEL</h1>
                        <p className="text-center text-sm font-medium text-white pb-8 w-full my-0 mx-auto md:text-base md:w-3/6">Experience our various exciting packages and make your hotel reservations. Find vacation packages also and search cheap hotels and events.</p>

                        <BannerMenu ></BannerMenu>


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

                        <h1 className="text-center text-2xl font-bold text-white pb-5 md:text-4xl md:pb-6 lg:text-5xl">HOTEL</h1>
                        <p className="text-center text-sm font-medium text-white pb-8 w-full my-0 mx-auto md:text-base md:w-3/6">Experience our various exciting packages and make your hotel reservations. Find vacation packages also and search cheap hotels and events.</p>

                        <BannerMenu ></BannerMenu>


                     </div>

                  </div>
               </div>
            </div>
            </MobileView>

            {/* ABOUT CONTENT SECTION */}
            <div className="tour_details_section">
               <div className="container">
                  <div className="my-12 md:mx-6 xl:mx-0 xl:px-8">

                     <div className="flex">
                              {/* FILTTER SECTION */}
                                 <div className="w-1/4 pr-8">
                                       <div className="review_sidebar_wrap p-8 rounded-lg bg-white border-slate-200 border-solid border shadow-lg">
                                          <h2 className="text-2xl font-bold text-center pb-6">Select Filters</h2>
                                          <div className="mb-6">
                                             <ul>
                                                <li><label className="text-base font-bold text-left pb-3 block">Suggested For You</label></li>
                                                <li className="flex justify-between pb-3 mb-3 border-b border-inherit border-solid">
                                                   <FormCheck className="mt-0">
                                                      <FormCheck.Input
                                                      id="checkbox-switch-1"
                                                      type="checkbox"
                                                      value=""
                                                      />
                                                      <FormCheck.Label htmlFor="checkbox-switch-1">
                                                      Last Minute Deals
                                                      </FormCheck.Label>
                                                   </FormCheck>
                                                   {/* <span className="text-sm text-orange-500 font-medium">(1)</span> */}
                                                </li>
                                                <li className="flex justify-between pb-3 mb-3 border-b border-inherit border-solid">
                                                   <FormCheck className="mt-0">
                                                      <FormCheck.Input
                                                      id="checkbox-switch-2"
                                                      type="checkbox"
                                                      value=""
                                                      />
                                                      <FormCheck.Label htmlFor="checkbox-switch-2">
                                                      5 Star
                                                      </FormCheck.Label>
                                                   </FormCheck>
                                                   {/* <span className="text-sm text-orange-500 font-medium">(1)</span> */}
                                                </li>
                                                <li className="flex justify-between pb-3 mb-3 border-b border-inherit border-solid">
                                                   <FormCheck className="mt-0">
                                                      <FormCheck.Input
                                                      id="checkbox-switch-3"
                                                      type="checkbox"
                                                      value=""
                                                      />
                                                      <FormCheck.Label htmlFor="checkbox-switch-3">
                                                      North Goa
                                                      </FormCheck.Label>
                                                   </FormCheck>
                                                   {/* <span className="text-sm text-orange-500 font-medium">(1)</span> */}
                                                </li>
                                             </ul>
                                          </div>
                                          <div>
                                             <ul>
                                                <li><label className="text-base font-bold text-left pb-3 block">Price per night</label></li>
                                                <li className="flex justify-between pb-3 mb-3 border-b border-inherit border-solid">
                                                   <FormCheck className="mt-0">
                                                      <FormCheck.Input
                                                      id="checkbox-switch-6"
                                                      type="checkbox"
                                                      value=""
                                                      />
                                                      <FormCheck.Label htmlFor="checkbox-switch-6">
                                                      ₹ 0 - ₹ 2500
                                                      </FormCheck.Label>
                                                   </FormCheck>
                                                   {/* <span className="text-sm text-orange-500 font-medium">(1)</span> */}
                                                </li>
                                                <li className="flex justify-between pb-3 mb-3 border-b border-inherit border-solid">
                                                   <FormCheck className="mt-0">
                                                      <FormCheck.Input
                                                      id="checkbox-switch-7"
                                                      type="checkbox"
                                                      value=""
                                                      />
                                                      <FormCheck.Label htmlFor="checkbox-switch-7">
                                                      ₹ 2500 - ₹ 5000
                                                      </FormCheck.Label>
                                                   </FormCheck>
                                                   {/* <span className="text-sm text-orange-500 font-medium">(1)</span> */}
                                                </li>
                                             </ul>
                                          </div>
                                          <div className="mb-6">
                                             <ul>
                                                <li><label className="text-base font-bold text-left pb-3 block">Star Category</label></li>
                                               
                                                <li className="flex justify-between pb-3 mb-3 border-b border-inherit border-solid">
                                                   <FormCheck className="mt-0">
                                                      <FormCheck.Input
                                                      id="checkbox-switch-5"
                                                      type="checkbox"
                                                      value=""
                                                      />
                                                      <FormCheck.Label htmlFor="checkbox-switch-5">
                                                      1 Star
                                                      </FormCheck.Label>
                                                   </FormCheck>
                                                   {/* <span className="text-sm text-orange-500 font-medium">(1)</span> */}
                                                </li>
                                                <li className="flex justify-between pb-3 mb-3 border-b border-inherit border-solid">
                                                   <FormCheck className="mt-0">
                                                      <FormCheck.Input
                                                      id="checkbox-switch-5"
                                                      type="checkbox"
                                                      value=""
                                                      />
                                                      <FormCheck.Label htmlFor="checkbox-switch-5">
                                                      2 Star
                                                      </FormCheck.Label>
                                                   </FormCheck>
                                                   {/* <span className="text-sm text-orange-500 font-medium">(1)</span> */}
                                                </li>
                                                <li className="flex justify-between pb-3 mb-3 border-b border-inherit border-solid">
                                                   <FormCheck className="mt-0">
                                                      <FormCheck.Input
                                                      id="checkbox-switch-5"
                                                      type="checkbox"
                                                      value=""
                                                      />
                                                      <FormCheck.Label htmlFor="checkbox-switch-5">
                                                      3 Star
                                                      </FormCheck.Label>
                                                   </FormCheck>
                                                   {/* <span className="text-sm text-orange-500 font-medium">(1)</span> */}
                                                </li>
                                                <li className="flex justify-between pb-3 mb-3 border-b border-inherit border-solid">
                                                   <FormCheck className="mt-0">
                                                      <FormCheck.Input
                                                      id="checkbox-switch-5"
                                                      type="checkbox"
                                                      value=""
                                                      />
                                                      <FormCheck.Label htmlFor="checkbox-switch-5">
                                                      4 Star
                                                      </FormCheck.Label>
                                                   </FormCheck>
                                                   {/* <span className="text-sm text-orange-500 font-medium">(1)</span> */}
                                                </li>
                                                <li className="flex justify-between pb-3 mb-3 border-b border-inherit border-solid">
                                                   <FormCheck className="mt-0">
                                                      <FormCheck.Input
                                                      id="checkbox-switch-5"
                                                      type="checkbox"
                                                      value=""
                                                      />
                                                      <FormCheck.Label htmlFor="checkbox-switch-5">
                                                      5 Star
                                                      </FormCheck.Label>
                                                   </FormCheck>
                                                   {/* <span className="text-sm text-orange-500 font-medium">(1)</span> */}
                                                </li>
                                                <li className="flex justify-between pb-3 mb-3 border-b border-inherit border-solid">
                                                   <FormCheck className="mt-0">
                                                      <FormCheck.Input
                                                      id="checkbox-switch-5"
                                                      type="checkbox"
                                                      value=""
                                                      />
                                                      <FormCheck.Label htmlFor="checkbox-switch-5">
                                                      6 Star
                                                      </FormCheck.Label>
                                                   </FormCheck>
                                                   {/* <span className="text-sm text-orange-500 font-medium">(1)</span> */}
                                                </li>
                                                <li className="flex justify-between pb-3 mb-3 border-b border-inherit border-solid">
                                                   <FormCheck className="mt-0">
                                                      <FormCheck.Input
                                                      id="checkbox-switch-5"
                                                      type="checkbox"
                                                      value=""
                                                      />
                                                      <FormCheck.Label htmlFor="checkbox-switch-5">
                                                      7 Star
                                                      </FormCheck.Label>
                                                   </FormCheck>
                                                   {/* <span className="text-sm text-orange-500 font-medium">(1)</span> */}
                                                </li>
                                                <li className="flex justify-between pb-3 mb-3 border-b border-inherit border-solid">
                                                   <FormCheck className="mt-0">
                                                      <FormCheck.Input
                                                      id="checkbox-switch-5"
                                                      type="checkbox"
                                                      value=""
                                                      />
                                                      <FormCheck.Label htmlFor="checkbox-switch-5">
                                                      Standard
                                                      </FormCheck.Label>
                                                   </FormCheck>
                                                   {/* <span className="text-sm text-orange-500 font-medium">(1)</span> */}
                                                </li>
                                                <li className="flex justify-between pb-3 mb-3 border-b border-inherit border-solid">
                                                   <FormCheck className="mt-0">
                                                      <FormCheck.Input
                                                      id="checkbox-switch-5"
                                                      type="checkbox"
                                                      value=""
                                                      />
                                                      <FormCheck.Label htmlFor="checkbox-switch-5">
                                                      Delux
                                                      </FormCheck.Label>
                                                   </FormCheck>
                                                   {/* <span className="text-sm text-orange-500 font-medium">(1)</span> */}
                                                </li>
                                                <li className="flex justify-between pb-3 mb-3 border-b border-inherit border-solid">
                                                   <FormCheck className="mt-0">
                                                      <FormCheck.Input
                                                      id="checkbox-switch-5"
                                                      type="checkbox"
                                                      value=""
                                                      />
                                                      <FormCheck.Label htmlFor="checkbox-switch-5">
                                                      Super Delux
                                                      </FormCheck.Label>
                                                   </FormCheck>
                                                   {/* <span className="text-sm text-orange-500 font-medium">(1)</span> */}
                                                </li>

                                             </ul>
                                          </div>
                                       </div>
                                 </div>
                              {/* FILTTER SECTION END */}

                           <div className="w-3/4">
                                 {/* SEARCH SECTION */}
                                    <div className="review_main_wrap p-4 rounded-lg bg-white border-slate-200 border-solid border shadow-lg mb-4">
                                          <div className="flex justify-between items-center">
                                             <div>
                                                <h3 className="text-[18px] font-semibold pb-1">Change Dates and Guest(s)</h3>
                                                <p className="text-sm text-orange-500">Check-in: 3 PM | Check-out: 11 AM</p>
                                             </div>
                                             <div>
                                                <div className="form_area pt-0">
                                                   <form>

                                                      <div className="form_container flex justify-center align-center">


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
                                                                     className="text-black rounded-full py-2 px-9 text-sm"
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
                                                                     className="text-black rounded-full py-2 px-9 text-sm"
                                                                  />
                                                               </div>
                                                            </Preview>
                                                         </div>

                                                         <div className="form_field_area mx-2 relative">
                                                            <Preview>
                                                               <div className="relative w-52 mx-auto">
                                                                  <div className="absolute flex items-center justify-center w-12 h-full rounded-l text-black">
                                                                     <Lucide icon="Calendar" className="w-4 h-4" />
                                                                  </div>
                                                                  <FormSelect
                                                                     className="pl-10 sm:mr-2 text-black rounded-full py-2 px-9 text-sm"
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
                                                            <div className="form_field_area mt-0">
                                                               <input className="text-sm font-medium uppercase bg-orange-500 py-2 px-10 rounded-full text-white hover:bg-black cursor-pointer" type="submit" value="SEARCH" />
                                                            </div>
                                                         </div>


                                                      </div>
                                                      
                                                   </form>
                                                </div>
                                             </div>
                                          </div>
                                    </div>
                                 {/* SEARCH SECTION END */}
                                 
                                 {/* MAIN CONTENT SECTION */}
                                       <div className="review_main_wrap p-8 rounded-lg bg-white border-slate-200 border-solid border shadow-lg">
                                          <div className="p-0">

                                             { resData.length >0 ?
                                                _.take(resData, resData.length).map((item, Key) => (
                                                   <>
                                                      <HomeStayListingSnippet data={item}></HomeStayListingSnippet>
                                                   </>
                                                ))
                                             :'No Record Found' }
                                          </div>
                                          <Pagination
                                             totalPosts={npage}
                                             postsPerPage={dataPerPage}
                                             setCurrentPage={setCurrentPage}
                                             currentPage={currentPage}
                                             handlePage={handlePage}
                                          />
                                       </div>
                                 {/* MAIN CONTENT SECTION  END*/}
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
