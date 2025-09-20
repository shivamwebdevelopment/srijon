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

import { Link, useParams } from "react-router-dom";
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
import { useState, useRef, useEffect } from "react";

import callApi from "../../frontend-components/utility/function";

import {
   FormSelect
} from "../../base-components/Form";

import TinySlider, {
   TinySliderElement,
} from "../../base-components/TinySlider";

import ItinerarySnippetLarge from "../../frontend-components/home/itinerarySnippetLarge";
import Header from "../../frontend-components/layout/header";
import StickyMenu from "../../frontend-components/layout/stickyMenu";
import HomeBanner from "../../frontend-components/layout/banner";
import Footer from "../../frontend-components/layout/footer";
import server from "../../../apiconfig.json";


const marginTopMinus = {
   top: -9,
};
const marginArrowStyle = {
   right: -25,
   top: 20,
};


function Main() {

   const API = server.API_URL;
   const params = useParams();
   const id = params.id;
   const stateName = _.startCase(_.join(_.split(params.stateName,"-"), " "));
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
   const [isLoading, setisLoading] = useState(true);
   const [itiData, setItidata] = useState({});
   const getItineraryData = ()=>{
      const data = callApi(API, "GET", `super-itinerary-master/itinerary-by-state/${id}`, '').then((result)=>{
         setItidata(result.data);
      })
   }

   useEffect(()=>{
      getItineraryData(); 
      setisLoading(false);
   },[]);

   //console.log(itidata);
   if(isLoading){
      return <div>Loading.....</div>
   }

   return (
      <>
         {/* HEADER SECTION TWO */}
         <StickyMenu></StickyMenu>

         <div className="bg-white overflow-hidden">



            {/* HEADER SECTION */}
            <Header></Header>

            {/* BANNER SECTION */}
            <HomeBanner></HomeBanner>


            {/* TRIP BY DESTINATION SECTION */}
            <div className="trip_by_destination_section my-14">
               <div className="container">
                  <h2 className="text-3xl font-bold text-black text-center mb-8">All {stateName} Tour</h2>

                  <div className="trip_by_destination_list">
                     <div className="grid gap-x-8 gap-y-4 grid-cols-1 mb-8 md:grid-cols-3">
                     {_.take(itiData, itiData.length).map((item, Key) => (
                        <>
                           <ItinerarySnippetLarge data={item}></ItinerarySnippetLarge>
                        </>
                     ))}                      
                     </div>
                  </div>

                  {/* <div className="view_more text-center mt-8">
                     <Link className="bg-orange-500 rounded-full text-base font-normal text-white px-7 py-2 inline-block hover:bg-black" to="/">Load More</Link>
                  </div> */}

               </div>
            </div>



            {/* FOOTER SECTION */}
            <Footer></Footer>



         </div>

      </>
   );
}

export default Main;
