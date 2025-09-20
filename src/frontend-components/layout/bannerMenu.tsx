// @ts-nocheck
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Lucide from "../../base-components/Lucide";

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

const BannerMenuMenu = () => {
   
    return (
        <>
            <div className="booking_type_section mb-5">
                           <ul className="flex justify-center items-center">
                              <li>
                                 <Link className="text-sm font-semibold text-white mx-4 px-4 flex justify-center items-center md:mx-8 xl:mx-2 lg:mx-2" to="/all-package-tours">
                                    <img
                                       alt="packageTourIcon"
                                       className="mb-1.5 mr-1.5"
                                       src={packageTourIcon}
                                    />
                                    Package Tour
                                 </Link>
                              </li>
                              <li className="active">
                                 <Link className="text-sm font-semibold text-white mx-4 px-4 flex justify-center items-center md:mx-8 xl:mx-2 lg:mx-2" to="/hotels">
                                    <img
                                       alt="hotelIcon"
                                       className="mb-1.5 mr-1.5"
                                       src={hotelIcon}
                                    />
                                    Hotel
                                 </Link>
                              </li>
                              <li className="hidden xl:block">
                                 <Link className="text-sm font-semibold text-white mx-4 px-4 flex justify-center items-center md:mx-8 xl:mx-2 lg:mx-2" to="/home-stay">
                                    <img
                                       alt="privateIcon"
                                       className="mb-1.5 mr-1.5"
                                       src={privateIcon}
                                    />
                                    Home Stay
                                 </Link>
                              </li>
                              <li>
                                 <Link className="text-sm font-semibold text-white mx-4 px-4 flex justify-center items-center md:mx-8 xl:mx-2 lg:mx-2" to="/cars">
                                    <img
                                       alt="carIcon"
                                       className="mb-1.5 mr-1.5"
                                       src={carIcon}
                                    />
                                    Car
                                 </Link>
                              </li>
                              <li className="hidden xl:block">
                                 <Link className="text-sm font-semibold text-white mx-4 px-4 flex justify-center items-center md:mx-8 xl:mx-2 lg:mx-2" to="/bus">
                                    <img
                                       alt="busIcon"
                                       className="mb-1.5 mr-1.5"
                                       src={busIcon}
                                    />
                                    Bus
                                 </Link>
                              </li>
                              
                              <li className="hidden xl:block">
                                 <Link className="text-sm font-semibold text-white mx-4 px-4 flex justify-center items-center md:mx-8 xl:mx-2 lg:mx-2" to="/activies">
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
                           </ul>
                        </div>
        </>
    );
};

export default BannerMenuMenu;
