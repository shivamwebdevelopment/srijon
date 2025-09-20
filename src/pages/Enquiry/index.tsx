// @ts-nocheck
import { FormInput, FormCheck, FormSelect } from "../../base-components/Form";

import { Link } from "react-router-dom";
import siteLogo from "../../assets/images/logo.png";

import hotelIconBlack from "../../assets/images/hotel_icon_black.png";
import privateIconBlack from "../../assets/images/private_icon_black.png";
import flightIconBlack from "../../assets/images/flight_icon_black.png";
import onlyFlightIconBlack from "../../assets/images/plain_icon_black.png";
import longStayIconBlack from "../../assets/images/long_stay_icon_black.png";
import activityIconBlack from "../../assets/images/activities_icon_black.png";
import Litepicker from "../../base-components/Litepicker";

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

import { Tab } from "../../base-components/Headless";

//===========FrontEnd Componenets=======================
import ItinerarySnippetLarge from "../../frontend-components/home/itinerarySnippetLarge";
import DomesticTourSnippet from "../../frontend-components/home/domesticTourSnippet";
import Header from "../../frontend-components/layout/header";
import HomeBanner from "../../frontend-components/layout/banner";
import Footer from "../../frontend-components/layout/footer";
//===========FrontEnd Componenets End====================

import {
    PreviewComponent,
    Preview,
    Source,
    Highlight,
} from "../../base-components/PreviewComponent";
import { FormLabel, FormSwitch } from "../../base-components/Form";
import { Menu, Dialog } from "../../base-components/Headless";
import Button from "../../base-components/Button";
import Lucide from "../../base-components/Lucide";
import { useState, useRef, useEffect } from "react";
import TinySlider, {
    TinySliderElement,
} from "../../base-components/TinySlider";

import server from "../../../apiconfig.json";

import axios from "axios";

const Enquiry = () => {
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

    const [superlargeModalSizePreview, setSuperlargeModalSizePreview] =
        useState(false);
    const sendButtonRef = useRef(null);

    const [countryList, setCountryList] = useState(null);

    //=============Sticky Code ====================
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        fetch("./all_countries.json")
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setCountryList(data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });

        if (localStorage.getItem("customerData") === null) {
            setCid(0);
        } else {
            setCid(JSON.parse(localStorage.getItem("customerData"))["id"]);
        }

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

    const [cId, setCid] = useState();

    const [leadDate, setLeadDate] = useState("");
    const [leadTourToDeparture, setLeadTourToDeparture] = useState();
    const [leadDateInterested, setLeadDateInterested] = useState("");
    const [leadNoOfTourist, setLeadNoOfTourist] = useState();
    const [leadAddress, setLeadAddress] = useState();
    const [leadCountry, setLeadCountry] = useState();
    const [leadState, setLeadState] = useState();
    const [leadCity, setLeadCity] = useState();
    const [leadPincode, setLeadPincode] = useState();
    const [leadTelephoneResidence, setLeadTelephoneResidence] = useState();
    const [leadTelephoneOffice, setLeadTelephoneOffice] = useState();
    const [leadMobile, setLeadMobile] = useState();
    const [leadEmail, setLeadEmail] = useState();
    const [leadTouristFirstName, setLeadTouristFirstName] = useState();
    const [leadTouristLastName, setLeadTouristLastName] = useState();
    const [leadAge, setLeadAge] = useState();
    const [leadNearByOffice, setLeadNearByOffice] = useState();
    const [leadAuthorizeToContact, setLeadAuthorizeToContact] = useState();

    const saveCwl = () => {
        const API_URL = server.API_URL + "customer-lead-web";

        const postData = {
            customerId: cId,
            date: leadDate,
            tour_to_departure: leadTourToDeparture,
            date_interested: leadDateInterested,
            no_of_tourist: leadNoOfTourist,
            address: leadAddress,
            country: leadCountry,
            state: leadState,
            city: leadCity,
            pincode: leadPincode,
            telephone_residence: leadTelephoneResidence,
            telephone_office: leadTelephoneOffice,
            mobile: leadMobile,
            email: leadEmail,
            tourist_first_name: leadTouristFirstName,
            tourist_last_name: leadTouristLastName,
            age: leadAge,
            near_by_office: leadNearByOffice,
            authorize_to_contact: leadAuthorizeToContact,
        };

        console.log({ API_URL, postData });

        axios
            .post(API_URL, postData)
            .then((response) => {
                console.log({ response });

                if (response.data.msg === "Data Created Succesfully") {
                    console.log({ response });
                } else {
                    console.log({ response });
                }
            })
            .catch((error) => {
                console.error("Error:", error.message);
            });
    };

    return (
        <>
            {/* HEADER SECTION TWO */}

            {isVisible && (
                <div className="header_section_sticky sticky top-0 z-30 bg-white flex-initial px-2 py-3 bg-white md:flex-initial md:px-8 lg:flex">
                    <div className="logo_area text-center mb-4 w-full md:w-full md:text-left md:mb-0 lg:w-1/5">
                        <Link to="/">
                            <img
                                alt="Logo"
                                className="inline-block w-24 md:block md:my-0 md:mx-auto lg:my-0 lg:mx-0"
                                src={siteLogo}
                            />
                        </Link>
                    </div>

                    <div className="header_mid_sticky pt-2.5 w-full md:w-full lg:w-3/5">
                        <div className="booking_type_section mb-0">
                            <ul className="grid grid-cols-2 gap-0 md:grid-cols-6 lg:grid-cols-6 lg:grid-cols-0">
                                <li className="active">
                                    <Link
                                        className="text-base font-semibold text-black mx-4 flex justify-center items-center md:mx-8 xl:mx-2 lg:mx-2"
                                        to="/"
                                    >
                                        <img
                                            alt="privateIconBlack"
                                            className="mb-1.5 mr-1.5"
                                            src={privateIconBlack}
                                        />
                                        Hotels & Homes
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="text-base font-semibold text-black mx-4 flex justify-center items-center md:mx-8 xl:mx-2 lg:mx-2"
                                        to="/"
                                    >
                                        <img
                                            alt="privateIconBlack"
                                            className="mb-1.5 mr-1.5"
                                            src={privateIconBlack}
                                        />
                                        Private Stays
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="text-base font-semibold text-black mx-4 flex justify-center items-center md:mx-8 xl:mx-2 lg:mx-2"
                                        to="/"
                                    >
                                        <img
                                            alt="flightIconBlack"
                                            className="mb-1.5 mr-1.5"
                                            src={flightIconBlack}
                                        />
                                        Flight & Hotels
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="text-base font-semibold text-black mx-4 flex justify-center items-center md:mx-8 xl:mx-2 lg:mx-2"
                                        to="/"
                                    >
                                        <img
                                            alt="onlyFlightIconBlack"
                                            className="mb-1.5 mr-1.5"
                                            src={onlyFlightIconBlack}
                                        />
                                        Only Flights
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="text-base font-semibold text-black mx-4 flex justify-center items-center md:mx-8 xl:mx-2 lg:mx-2"
                                        to="/"
                                    >
                                        <img
                                            alt="longStayIconBlack"
                                            className="mb-1.5 mr-1.5"
                                            src={longStayIconBlack}
                                        />
                                        Long Stays
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="text-base font-semibold text-black mx-4 flex justify-center items-center md:mx-8 xl:mx-2 lg:mx-2"
                                        to="/"
                                    >
                                        <img
                                            alt="activityIconBlack"
                                            className="mb-1.5 mr-1.5"
                                            src={activityIconBlack}
                                        />
                                        Activities
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="header_right_area w-full md:w-full md:mt-4 lg:w-1/5">
                        <div className="header_right_top flex justify-end py-0">
                            <div className="account_section ml-4 md:ml-6">
                                <Link
                                    className="bg-orange-500 rounded-lg text-sm font-medium text-white px-2 py-2 flex  hover:bg-black md:pl-3 md:pr-4"
                                    as="a"
                                    href="#"
                                    variant="primary"
                                    onClick={(event: React.MouseEvent) => {
                                        event.preventDefault();
                                        setSuperlargeModalSizePreview(true);
                                    }}
                                >
                                    {/* <Lucide icon="PhoneCall" className="text-lime-600 mx-auto text-black" /> */}
                                    <Lucide
                                        icon="User"
                                        className="block mx-auto mr-2"
                                    />
                                    Sign In / Create Account
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <div className="bg-white overflow-hidden relative">
                {/* HEADER SECTION */}
                <Header></Header>

                {/* BANNER SECTION */}
                <HomeBanner></HomeBanner>

                {/* ENQUIRY SECTION */}
                <div className="trip_by_destination_section mb-14 md:mb-8 md:p-4 lg:p-4 lg:mb-14">
                    <div className="container">
                        <h2 className="text-3xl font-bold text-black text-center mb-3">
                            FILL UP THE FORM BELOW
                        </h2>
                        <p className="text-sm font-medium text-neutral-500 text-center mb-6">
                            World's leading tour and travels Booking
                            website,Over 20,000 packages worldwide.
                        </p>

                        <div className="trip_by_destination_list">
                            <div className="grid gap-x-8 gap-y-4 grid-cols-1 mb-8 md:grid-cols-4">
                                <div>
                                    <p className="mb-2 text-start">Date</p>
                                    <div className="form_field_area relative">
                                        <Preview>
                                            <div className="col-span-12 sm:col-span-6">
                                                <div className="absolute flex items-center justify-center w-12 h-full rounded-l text-black">
                                                    <Lucide
                                                        icon="Calendar"
                                                        className="w-4 h-4"
                                                    />
                                                </div>
                                                <div className="absolute right-0 flex items-center justify-center w-12 h-full rounded-l text-black">
                                                    <svg
                                                        width="12"
                                                        height="8"
                                                        viewBox="0 0 12 8"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M10.8755 1.72962L6.29255 7.1651C6.23799 7.22962 6.17888 7.27542 6.11523 7.30252C6.05158 7.32962 5.98338 7.34295 5.91064 7.34252C5.83789 7.34252 5.76969 7.32919 5.70604 7.30252C5.64239 7.27585 5.58328 7.23005 5.52873 7.1651L0.932151 1.72962C0.804847 1.57909 0.741195 1.39091 0.741195 1.16511C0.741195 0.939303 0.809394 0.745755 0.945791 0.584465C1.08219 0.423175 1.24132 0.34253 1.42318 0.34253C1.60504 0.34253 1.76417 0.423175 1.90057 0.584465L5.91064 5.32639L9.92071 0.584465C10.048 0.433927 10.205 0.358658 10.3915 0.358658C10.5781 0.358658 10.7395 0.439303 10.8755 0.600593C11.0119 0.761883 11.0801 0.950055 11.0801 1.16511C11.0801 1.38016 11.0119 1.56833 10.8755 1.72962Z"
                                                            fill="black"
                                                        />
                                                    </svg>
                                                </div>
                                                <Litepicker
                                                    value={leadDate}
                                                    onChange={setLeadDate}
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
                                                    className="text-black py-3 px-9 text-sm"
                                                />
                                            </div>
                                        </Preview>
                                    </div>
                                </div>

                                <div>
                                    <FormLabel htmlFor="regular-form-1">
                                        Tour to Departure
                                    </FormLabel>
                                    <FormInput
                                        id="regular-form-1"
                                        type="text"
                                        placeholder="Input text"
                                        onChange={(e) =>
                                            setLeadTourToDeparture(
                                                e.target.value
                                            )
                                        }
                                    />
                                </div>

                                <div>
                                    <p className="mb-2 text-start">
                                        Date Interested
                                    </p>
                                    <div className="form_field_area relative">
                                        <Preview>
                                            <div className="col-span-12 sm:col-span-6">
                                                <div className="absolute flex items-center justify-center w-12 h-full rounded-l text-black">
                                                    <Lucide
                                                        icon="Calendar"
                                                        className="w-4 h-4"
                                                    />
                                                </div>
                                                <div className="absolute right-0 flex items-center justify-center w-12 h-full rounded-l text-black">
                                                    <svg
                                                        width="12"
                                                        height="8"
                                                        viewBox="0 0 12 8"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M10.8755 1.72962L6.29255 7.1651C6.23799 7.22962 6.17888 7.27542 6.11523 7.30252C6.05158 7.32962 5.98338 7.34295 5.91064 7.34252C5.83789 7.34252 5.76969 7.32919 5.70604 7.30252C5.64239 7.27585 5.58328 7.23005 5.52873 7.1651L0.932151 1.72962C0.804847 1.57909 0.741195 1.39091 0.741195 1.16511C0.741195 0.939303 0.809394 0.745755 0.945791 0.584465C1.08219 0.423175 1.24132 0.34253 1.42318 0.34253C1.60504 0.34253 1.76417 0.423175 1.90057 0.584465L5.91064 5.32639L9.92071 0.584465C10.048 0.433927 10.205 0.358658 10.3915 0.358658C10.5781 0.358658 10.7395 0.439303 10.8755 0.600593C11.0119 0.761883 11.0801 0.950055 11.0801 1.16511C11.0801 1.38016 11.0119 1.56833 10.8755 1.72962Z"
                                                            fill="black"
                                                        />
                                                    </svg>
                                                </div>
                                                <Litepicker
                                                    value={leadDateInterested}
                                                    onChange={
                                                        setLeadDateInterested
                                                    }
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
                                                    className="text-black py-3 px-9 text-sm"
                                                />
                                            </div>
                                        </Preview>
                                    </div>
                                </div>
                                <div>
                                    <FormLabel htmlFor="regular-form-1">
                                        No of Tourist
                                    </FormLabel>
                                    <FormInput
                                        id="regular-form-1"
                                        type="text"
                                        placeholder="Input text"
                                        onChange={(e) =>
                                            setLeadNoOfTourist(e.target.value)
                                        }
                                    />
                                </div>
                                <div>
                                    <FormLabel htmlFor="regular-form-1">
                                        Address
                                    </FormLabel>
                                    <FormInput
                                        id="regular-form-1"
                                        type="text"
                                        placeholder="Input text"
                                        onChange={(e) =>
                                            setLeadAddress(e.target.value)
                                        }
                                    />
                                </div>
                                <div>
                                    <FormLabel htmlFor="regular-form-1">
                                        Country
                                    </FormLabel>
                                    <FormSelect
                                        className="leading-7"
                                        aria-label="Default select example"
                                        onChange={(e) =>
                                            setLeadCountry(e.target.value)
                                        }
                                    >
                                        <option>Choose Country</option>
                                        {countryList !== null
                                            ? countryList.map((C) => {
                                                  return (
                                                      <option>{C.name}</option>
                                                  );
                                              })
                                            : null}
                                    </FormSelect>
                                </div>
                                <div>
                                    <FormLabel htmlFor="regular-form-1">
                                        State
                                    </FormLabel>
                                    <FormInput
                                        id="regular-form-1"
                                        type="text"
                                        placeholder="Input text"
                                        onChange={(e) =>
                                            setLeadState(e.target.value)
                                        }
                                    />
                                </div>
                                <div>
                                    <FormLabel htmlFor="regular-form-1">
                                        City
                                    </FormLabel>
                                    <FormInput
                                        id="regular-form-1"
                                        type="text"
                                        placeholder="Input text"
                                        onChange={(e) =>
                                            setLeadCity(e.target.value)
                                        }
                                    />
                                </div>
                                <div>
                                    <FormLabel htmlFor="regular-form-1">
                                        Pincode
                                    </FormLabel>
                                    <FormInput
                                        id="regular-form-1"
                                        type="text"
                                        placeholder="Input text"
                                        onChange={(e) =>
                                            setLeadPincode(e.target.value)
                                        }
                                    />
                                </div>
                                <div>
                                    <FormLabel htmlFor="regular-form-1">
                                        Telephone (Resi.)
                                    </FormLabel>
                                    <FormInput
                                        id="regular-form-1"
                                        type="text"
                                        placeholder="Input text"
                                        onChange={(e) =>
                                            setLeadTelephoneResidence(
                                                e.target.value
                                            )
                                        }
                                    />
                                </div>
                                <div>
                                    <FormLabel htmlFor="regular-form-1">
                                        Telephone (Off.)
                                    </FormLabel>
                                    <FormInput
                                        id="regular-form-1"
                                        type="text"
                                        placeholder="Input text"
                                        onChange={(e) =>
                                            setLeadTelephoneOffice(
                                                e.target.value
                                            )
                                        }
                                    />
                                </div>
                                <div>
                                    <FormLabel htmlFor="regular-form-1">
                                        Mobile
                                    </FormLabel>
                                    <FormInput
                                        id="regular-form-1"
                                        type="text"
                                        placeholder="Input text"
                                        onChange={(e) =>
                                            setLeadMobile(e.target.value)
                                        }
                                    />
                                </div>
                                <div>
                                    <FormLabel htmlFor="regular-form-1">
                                        Email
                                    </FormLabel>
                                    <FormInput
                                        id="regular-form-1"
                                        type="text"
                                        placeholder="Input text"
                                        onChange={(e) =>
                                            setLeadEmail(e.target.value)
                                        }
                                    />
                                </div>
                                <div>
                                    <FormLabel htmlFor="regular-form-1">
                                        Tourist First Name
                                    </FormLabel>
                                    <FormInput
                                        id="regular-form-1"
                                        type="text"
                                        placeholder="Input text"
                                        onChange={(e) =>
                                            setLeadTouristFirstName(
                                                e.target.value
                                            )
                                        }
                                    />
                                </div>
                                <div>
                                    <FormLabel htmlFor="regular-form-1">
                                        Tourist Last Name
                                    </FormLabel>
                                    <FormInput
                                        id="regular-form-1"
                                        type="text"
                                        placeholder="Input text"
                                        onChange={(e) =>
                                            setLeadTouristLastName(
                                                e.target.value
                                            )
                                        }
                                    />
                                </div>
                                <div>
                                    <FormLabel htmlFor="regular-form-1">
                                        Age
                                    </FormLabel>
                                    <FormInput
                                        id="regular-form-1"
                                        type="text"
                                        placeholder="Input text"
                                        onChange={(e) =>
                                            setLeadAge(e.target.value)
                                        }
                                    />
                                </div>
                                <div>
                                    <FormLabel htmlFor="regular-form-1">
                                        Near By Office
                                    </FormLabel>
                                    <FormSelect
                                        onChange={(e) =>
                                            setLeadNearByOffice(e.target.value)
                                        }
                                    >
                                        <option value="Head Office">
                                            Head Office
                                        </option>
                                        <option value="Krishnanagar">
                                            Krishnanagar
                                        </option>
                                        <option value="Malda">Malda</option>
                                        <option value="Siliguri">
                                            Siliguri
                                        </option>
                                        <option value="Kolkata">Kolkata</option>
                                        <option value="Bankura">Bankura</option>
                                        <option value="Delhi">Delhi</option>
                                        <option value="Rajasthan">
                                            Rajasthan
                                        </option>
                                        <option value="Puri">Puri</option>
                                        <option value="Mumbai">Mumbai</option>
                                    </FormSelect>
                                </div>
                            </div>
                            <div>
                                <FormCheck className="mt-2">
                                    <FormCheck.Input
                                        id="checkbox-switch-1"
                                        type="checkbox"
                                        value=""
                                        onClick={(e) =>
                                            setLeadAuthorizeToContact(true)
                                        }
                                    />
                                    <FormCheck.Label htmlFor="checkbox-switch-1">
                                        I Authorize Singdha Srijon Tours Pvt.
                                        Ltd. to contact me
                                    </FormCheck.Label>
                                </FormCheck>
                            </div>
                        </div>

                        <div className="view_more text-center mt-8">
                            {/* <Link
                                className="bg-orange-500 rounded-full text-base font-normal text-white px-7 py-2 inline-block hover:bg-black"
                                to="/all-package-tours"
                            >
                                Submit
                            </Link> */}
                            <Button
                                variant="primary"
                                type="button"
                                className="w-[25%] bg-orange-500 text-sm leading-7 font-light border-0"
                                // ref={sendButtonRef}
                                onClick={() => saveCwl()}
                            >
                                Save
                            </Button>
                        </div>
                    </div>
                </div>
                {/* FOOTER SECTION */}
                <Footer></Footer>
            </div>
        </>
    );
};

export default Enquiry;
