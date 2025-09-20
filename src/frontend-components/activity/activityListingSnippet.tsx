// @ts-nocheck
import Lucide from "../../base-components/Lucide";
import { useNavigate } from "react-router-dom";
import _ from "lodash";
import server from "../../../apiconfig.json";
import CarListIcon from "../../assets/images/car_list_icon.png";
import KMIcon from "../../assets/images/km_icon.png";
import FuelIcon from "../../assets/images/fuel_icon.png";
import CarCancelIcon from "../../assets/images/car_cancel.png";

const activityListingSnippet = (props)=>{
   const imgPath = server.FILE_PATH + 'activity/';
   const navigate = useNavigate();
   //const content = JSON.parse(props.data.content);
   
    return (
        <>
            <div className="car_listing_box border-b border-inherit border-solid pb-6 mb-6">
                                     <div className="flex justify-between">
                                        <div className="w-3/12 mr-4 flex justify-start items-center">
                                          <img
                                             alt="CarListIcon"
                                             className=""
                                             src={`${imgPath}${props.data.mainImg}`}
                                          />
                                        </div>
                                        <div className="w-7/12">
                                          <h2 className="text-2xl font-bold pb-4">{props.data.activityName} - <span className="text-base text-orange-500 font-medium">{props.data.activityType}</span></h2>
                                          <h3 className="text-lg font-bold pb-2">{props.data.cityName}({`${props.data.startTime} to ${props.data.endTime}`} )</h3>
                                          <ul>
                                             <li className="flex justify-start items-center pb-2">
                                                <img
                                                   alt="KMIcon"
                                                   className="mr-2"
                                                   src={KMIcon}
                                                />
                                                <p className="text-sm font-medium pr-16">Guide Fees</p>
                                                <span className="text-sm font-medium pl-2">{(props.data.guideFee==''?'Not Required':`Rs. ${props.data.guideFee}`)}</span>
                                             </li>
                                             <li className="flex justify-start items-center pb-2">
                                             <img
                                                   alt="FuelIcon"
                                                   className="mr-2"
                                                   src={FuelIcon}
                                                />
                                                <p className="text-sm font-medium pr-20">Kids Fees</p>
                                                <span className="text-sm font-medium pl-1">{(props.data.kidFee==''?'Not Required':`Rs. ${props.data.kidFee}`)}</span>
                                             </li>
                                             <li className="flex justify-start items-center pb-2">
                                             <img
                                                   alt="CarCancelIcon"
                                                   className="mr-2"
                                                   src={CarCancelIcon}
                                                />
                                                <p className="text-sm font-medium pr-16">Cancellation</p>
                                                <span className="text-sm font-medium"><span className="text-xs font-normal text-orange-500">Free</span>  till 6 hours of departure</span>
                                             </li>
                                          </ul>
                                        </div>
                                        <div className="w-3/12 text-right">
                                          <p className="text-sm font-normal text-orange-500 pb-0">13% off</p>
                                          <h2  className="text-3xl font-bold pb-0">₹{props.data.price}</h2>
                                          <p className="text-sm font-medium pb-4">Onwards</p>
                                          <a className="bg-orange-500 rounded-full text-sm font-medium text-white px-8 py-2 hover:bg-black" href="/">Book Now</a>
                                        </div>
                                     </div>
                                 </div>
        </>
    )


}


export default activityListingSnippet;