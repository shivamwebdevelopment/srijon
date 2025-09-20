// @ts-nocheck
import Lucide from "../../base-components/Lucide";
import { useNavigate } from "react-router-dom";
import _ from "lodash";
import server from "../../../apiconfig.json";
import domesticImage01 from "../../assets/images/d01.jpg";
import domesticImage02 from "../../assets/images/d02.jpg";
import domesticImage03 from "../../assets/images/d03.jpg";
import domesticImage04 from "../../assets/images/d04.jpg";

const HomeStayListingSnippet = (props)=>{
    const imgPath = server.FILE_PATH + 'hotel/';
   const navigate = useNavigate();
   //const content = JSON.parse(props.data.content);
   const urlHotelName = _.replace(props.data.hotelName,/\s/g, "-");
   let mealPlan = ''; 
   if(props.data.isAP=='Y'){ mealPlan += 'AP, '}
   if(props.data.isCP=='Y'){ mealPlan += 'CP, '}
   if(props.data.isEP=='Y'){ mealPlan += 'EP, '}
   if(props.data.isMAP=='Y'){ mealPlan += 'MAP,'}
   mealPlan = mealPlan.substring(0, mealPlan.length - 1);
    return (
        <>
             <div className="hotel_listing_box border-b border-inherit border-solid pb-6 mb-6">
                                                <div className="flex">
                                                   <div className="w-3/12 ">
                                                      <div className="">
                                                         {/* <Preview> */}
                                                         <div className="pb-0 mx-0">
                                                            {/* <TinySlider
                                                               options={{
                                                               mode: "gallery",
                                                               controls: true,
                                                               nav: true,
                                                               speed: 500,
                                                               }}
                                                            > */}
                                                               <div className="h-44 px-2">
                                                               <div className="h-full overflow-hidden rounded-md image-fit">
                                                                  <img
                                                                     alt="domesticImage01"
                                                                     className=""
                                                                     src={`${imgPath}${props.data.mainImg}`}
                                                                  />
                                                               </div>
                                                               </div>
                                                            {/* </TinySlider> */}
                                                         </div>
                                                         {/* </Preview> */}
                                                      </div>
                                                   </div>
                                                   <div className="w-6/12 pl-8">
                                                      <h2 className="text-2xl font-bold pb-4">{props.data.hotelName}</h2>
                                                      <div className="flex">
                                                         <h3 className="text-base font-medium pb-2 mr-1"><span className="text-orange-500">Checkin: </span> {props.data.checkInTimeH}:{props.data.checkInTimeM} |</h3>
                                                         <h3 className="text-base font-medium pb-2"><span className="text-orange-500">Checkout: </span> {props.data.checkOutTimeH}:{props.data.checkOutTimeM}</h3>
                                                      </div>
                                                      <p className="text-sm font-medium flex mb-2"><Lucide icon="Check" className="text-orange-500" /> Free Cancellation till 3 hrs before check in</p>
                                                      <p className="text-sm font-medium flex mb-2"><Lucide icon="Check" className="text-orange-500" /> Breakfast Included</p>
                                                      <p className="text-sm font-medium flex mb-2"><Lucide icon="Check" className="text-orange-500" /> 
                                                         Meal Plan : <span className="text-sm text-orange-500">&nbsp;{mealPlan}</span> 
                                                      </p>
                                                      <p className="text-sm text-orange-500">{props.data.starRating} { props.data.starRating <= 7 ?"Star": ''}  {props.data.hotelType} | {props.data.cityName}</p>
                                                   </div>
                                                   <div className="w-3/12 text-right">
                                                      <p className="text-sm font-normal text-orange-500 pb-0">13% off</p>
                                                      <h2  className="text-3xl font-bold pb-0">₹{props.data.minRoomRentSeasonAC?props.data.minRoomRentSeasonAC:0}</h2>
                                                      {/* <p className="text-sm font-medium pb-0">+ ₹ 750 taxes & fees</p> */}
                                                      <p className="text-sm font-medium pb-0">₹{props.data.minRoomRentSeasonNonAC?props.data.minRoomRentSeasonNonAC:0} Non Ac </p>
                                                      <p className="text-sm font-medium text-orange-500 pb-4">Per Night</p>
                                                      <a className="bg-orange-500 rounded-full text-sm font-medium text-white px-8 py-2 hover:bg-black cursor-pointer" onClick={()=>navigate(`/hotel-details/${props.data.id}/${urlHotelName}`)}>Book Now</a>
                                                   </div>
                                                </div>
             </div>
        </>
    )


}


export default HomeStayListingSnippet;