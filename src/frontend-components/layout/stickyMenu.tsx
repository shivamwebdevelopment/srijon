// @ts-nocheck
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Lucide from "../../base-components/Lucide";

import siteLogo from "../../assets/images/logo.png";
import privateIconBlack from "../../assets/images/private_icon_black.png";
import flightIconBlack from "../../assets/images/flight_icon_black.png";
//import onlyFlightIconBlack from "../../assets/images/plain_icon_black.png";
import longStayIconBlack from "../../assets/images/long_stay_icon_black.png";
import activityIconBlack from "../../assets/images/activities_icon_black.png";
import packageTourIconOr from "../../assets/images/package_tour_icon_or.png";
import hotelIconBlack from "../../assets/images/hotel_icon_black.png";
import menuIcon from "../../assets/images/menu-icon.png";
//import privateIconBlack from "../../assets/images/private_icon_black.png";
//import flightIconBlack from "../../assets/images/flight_icon_black.png";
//import onlyFlightIconBlack from "../../assets/images/plain_icon_black.png";
//import longStayIconBlack from "../../assets/images/long_stay_icon_black.png";
//import activityIconBlack from "../../assets/images/activities_icon_black.png";
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
//import packageTourIconOr from "../../assets/images/package_tour_icon_or.png";

const StickyMenu = () => {
  const [superlargeModalSizePreview, setSuperlargeModalSizePreview] =
    useState(false);
  //=============Sticky Code ====================
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  const listenToScroll = () => {
    let heightToHideFrom = 400;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    //setHeight(winScroll);

    if (winScroll > heightToHideFrom) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  //===========Sticky Code End====================
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);

  const showMobileMenu = () => {
    setIsMobileMenuVisible(!isMobileMenuVisible);
    // console.log(isMobileMenuVisible, "sdsdsds");
  };

  const logoutFunction = () => {
    localStorage.removeItem("customerData");
    localStorage.removeItem("login");
    window.location.href = "/";
  };

  return (
    <>
      <div className="mobile_menu_section">
        <div className="mobile_menu" onClick={showMobileMenu}>
          <img alt="menuIcon" className="" src={menuIcon} />
        </div>
        {isMobileMenuVisible && (
          <div className="header_mid_sticky pt-0 w-full">
            <div className="booking_type_section mb-0">
              <ul className="grid grid-cols-1 gap-2">
                <li className="active">
                  <Link
                    className="text-sm font-semibold text-black mx-4 flex justify-center items-center md:mx-8 xl:mx-2 lg:mx-2"
                    to="/all-package-tours"
                  >
                    <img
                      alt="packageTourIconOr"
                      className="mb-1.5 mr-1.5"
                      src={packageTourIconOr}
                    />
                    Package Tour
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-sm font-semibold text-black mx-4 flex justify-center items-center md:mx-8 xl:mx-2 lg:mx-2"
                    to="/home-stay"
                  >
                    <img
                      alt="privateIconBlack"
                      className="mb-1.5 mr-1.5"
                      src={privateIconBlack}
                    />
                    Home Stay
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-sm font-semibold text-black mx-4 flex justify-center items-center md:mx-8 xl:mx-2 lg:mx-2"
                    to="/hotels"
                  >
                    <img
                      alt="hotelIconBlack"
                      className="mb-1.5 mr-1.5"
                      src={hotelIconBlack}
                    />
                    Hotel
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-sm font-semibold text-black mx-4 flex justify-center items-center md:mx-8 xl:mx-2 lg:mx-2"
                    to="/"
                  >
                    <img
                      alt="carIconOr"
                      className="mb-1.5 mr-1.5"
                      src={carIconOr}
                    />
                    Car
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-sm font-semibold text-black mx-4 flex justify-center items-center md:mx-8 xl:mx-2 lg:mx-2"
                    to="/"
                  >
                    <img
                      alt="busIconOr"
                      className="mb-1.5 mr-1.5"
                      src={busIconOr}
                    />
                    Bus
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-sm font-semibold text-black mx-4 flex justify-center items-center md:mx-8 xl:mx-2 lg:mx-2"
                    to="/"
                  >
                    <img
                      alt="activityIconBlack"
                      className="mb-1.5 mr-1.5"
                      src={activityIconBlack}
                    />
                    Activity
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-sm text-base font-semibold text-black mx-4 flex justify-center items-center md:mx-8 xl:mx-2 lg:mx-2"
                    to="/"
                  >
                    <img
                      alt="trainIconOr"
                      className="mb-1.5 mr-1.5"
                      src={trainIconOr}
                    />
                    Train
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-sm font-semibold text-black mx-4 flex justify-center items-center md:mx-8 xl:mx-2 lg:mx-2"
                    to="/"
                  >
                    <img
                      alt="flightIconBlack"
                      className="mb-1.5 mr-1.5"
                      src={flightIconBlack}
                    />
                    Flight
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
      {isVisible && (
        <div className="header_section_sticky sticky top-0 z-30 bg-white flex-initial px-2 py-3 md:flex-initial md:px-8 lg:flex">
          <div className="mobile_menu_section">
            <div className="mobile_menu" onClick={showMobileMenu}>
              <img alt="menuIcon" className="" src={menuIcon} />
            </div>
            {isMobileMenuVisible && (
              <div className="header_mid_sticky pt-0 w-full">
                <div className="booking_type_section mb-0">
                  <ul className="grid grid-cols-1 gap-2">
                    <li className="active">
                      <Link
                        className="text-sm font-semibold text-black mx-4 flex justify-center items-center md:mx-8 xl:mx-2 lg:mx-2"
                        to="/all-package-tours"
                      >
                        <img
                          alt="packageTourIconOr"
                          className="mb-1.5 mr-1.5"
                          src={packageTourIconOr}
                        />
                        Package Tour
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-sm font-semibold text-black mx-4 flex justify-center items-center md:mx-8 xl:mx-2 lg:mx-2"
                        to="/home-stay"
                      >
                        <img
                          alt="privateIconBlack"
                          className="mb-1.5 mr-1.5"
                          src={privateIconBlack}
                        />
                        Home Stay
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-sm font-semibold text-black mx-4 flex justify-center items-center md:mx-8 xl:mx-2 lg:mx-2"
                        to="/hotels"
                      >
                        <img
                          alt="hotelIconBlack"
                          className="mb-1.5 mr-1.5"
                          src={hotelIconBlack}
                        />
                        Hotel
                      </Link>
                    </li>

                    <li>
                      <Link
                        className="text-sm font-semibold text-black mx-4 flex justify-center items-center md:mx-8 xl:mx-2 lg:mx-2"
                        to="/"
                      >
                        <img
                          alt="carIconOr"
                          className="mb-1.5 mr-1.5"
                          src={carIconOr}
                        />
                        Car
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-sm font-semibold text-black mx-4 flex justify-center items-center md:mx-8 xl:mx-2 lg:mx-2"
                        to="/"
                      >
                        <img
                          alt="busIconOr"
                          className="mb-1.5 mr-1.5"
                          src={busIconOr}
                        />
                        Bus
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-sm font-semibold text-black mx-4 flex justify-center items-center md:mx-8 xl:mx-2 lg:mx-2"
                        to="/"
                      >
                        <img
                          alt="activityIconBlack"
                          className="mb-1.5 mr-1.5"
                          src={activityIconBlack}
                        />
                        Activity
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-sm text-base font-semibold text-black mx-4 flex justify-center items-center md:mx-8 xl:mx-2 lg:mx-2"
                        to="/"
                      >
                        <img
                          alt="trainIconOr"
                          className="mb-1.5 mr-1.5"
                          src={trainIconOr}
                        />
                        Train
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-sm font-semibold text-black mx-4 flex justify-center items-center md:mx-8 xl:mx-2 lg:mx-2"
                        to="/"
                      >
                        <img
                          alt="flightIconBlack"
                          className="mb-1.5 mr-1.5"
                          src={flightIconBlack}
                        />
                        Flight
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          <div className="logo_area text-center mb-4 w-1/5 md:w-full md:text-left md:mb-0 lg:w-2/12">
            <Link to="/">
              <img
                alt="Logo"
                className="inline-block w-24 md:block md:my-0 md:mx-auto lg:my-0 lg:mx-0"
                src={siteLogo}
              />
            </Link>
          </div>

          <div className="header_mid_sticky pt-0 w-full md:w-full lg:w-4/5 xl:pt-2.5">
            <div className="booking_type_section mb-0">
              <ul className="flex justify-center items-center">
                <li className="active">
                  <Link
                    className="text-sm font-semibold text-black mx-4 px-4 flex justify-center items-center md:mx-8 xl:mx-2 lg:mx-2"
                    to="/all-package-tours"
                  >
                    <img
                      alt="packageTourIconOr"
                      className="mb-1.5 mr-1.5"
                      src={packageTourIconOr}
                    />
                    Package Tour
                  </Link>
                </li>
                <li className="hidden xl:block">
                  <Link
                    className="text-sm font-semibold text-black mx-4 px-4 flex justify-center items-center md:mx-8 xl:mx-2 lg:mx-2"
                    to="/hotels"
                  >
                    <img
                      alt="hotelIconBlack"
                      className="mb-1.5 mr-1.5"
                      src={hotelIconBlack}
                    />
                    Hotel
                  </Link>
                </li>
                <li className="hidden xl:block">
                  <Link
                    className="text-sm font-semibold text-black mx-4 px-4 flex justify-center items-center md:mx-8 xl:mx-2 lg:mx-2"
                    to="/home-stay"
                  >
                    <img
                      alt="privateIconBlack"
                      className="mb-1.5 mr-1.5"
                      src={privateIconBlack}
                    />
                    Home Stay
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-sm font-semibold text-black mx-4 px-4 flex justify-center items-center md:mx-8 xl:mx-2 lg:mx-2"
                    to="/cars"
                  >
                    <img
                      alt="carIconOr"
                      className="mb-1.5 mr-1.5"
                      src={carIconOr}
                    />
                    Car
                  </Link>
                </li>
                <li className="hidden xl:block">
                  <Link
                    className="text-sm font-semibold text-black mx-4 px-4 flex justify-center items-center md:mx-8 xl:mx-2 lg:mx-2"
                    to="/bus"
                  >
                    <img
                      alt="busIconOr"
                      className="mb-1.5 mr-1.5"
                      src={busIconOr}
                    />
                    Bus
                  </Link>
                </li>
                <li className="hidden xl:block">
                  <Link
                    className="text-sm font-semibold text-black mx-4 px-4 flex justify-center items-center md:mx-8 xl:mx-2 lg:mx-2"
                    to="/"
                  >
                    <img
                      alt="activityIconBlack"
                      className="mb-1.5 mr-1.5"
                      src={activityIconBlack}
                    />
                    Activity
                  </Link>
                </li>
                <li className="hidden xl:block">
                  <Link
                    className="text-sm text-base font-semibold text-black mx-4 px-4 flex justify-center items-center md:mx-8 xl:mx-2 lg:mx-2"
                    to="/"
                  >
                    <img
                      alt="trainIconOr"
                      className="mb-1.5 mr-1.5"
                      src={trainIconOr}
                    />
                    Train
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-sm font-semibold text-black mx-4 px-4 flex justify-center items-center md:mx-8 xl:mx-2 lg:mx-2"
                    to="/"
                  >
                    <img
                      alt="flightIconBlack"
                      className="mb-1.5 mr-1.5"
                      src={flightIconBlack}
                    />
                    Flight
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="header_right_area w-full md:w-full md:mt-4 lg:w-1/5">
            <div className="header_right_top flex justify-end py-0">
              <div className="account_section ml-4 md:ml-6">
                {localStorage.getItem("login") === undefined ||
                localStorage.getItem("login") === null ||
                localStorage.getItem("login") === "false" ? (
                  <Link
                    className="bg-orange-500 rounded-lg text-sm font-medium text-white px-2 py-2 flex items-center  hover:bg-black md:pl-3 md:pr-4"
                    as="a"
                    href="#"
                    variant="primary"
                    onClick={(event: React.MouseEvent) => {
                      event.preventDefault();
                      setLoginModal(true);
                    }}
                  >
                    {/* <Lucide icon="PhoneCall" className="text-lime-600 mx-auto text-black" /> */}
                    <Lucide icon="User" className="block mx-auto mr-2" />
                    Sign In / Create Account
                  </Link>
                ) : null}

                <div style={{ color: "#f97316" }}>
                  {localStorage.getItem("customerData") !== null ? (
                    <>
                      <p
                        style={{ cursor: "pointer" }}
                        onClick={() => (window.location.href = "/profile")}
                      >
                        {
                          JSON.parse(localStorage.getItem("customerData"))[
                            "cName"
                          ]
                        }
                      </p>
                      <p
                        style={{ cursor: "pointer" }}
                        onClick={() => logoutFunction()}
                      >
                        Logout
                      </p>
                    </>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default StickyMenu;
