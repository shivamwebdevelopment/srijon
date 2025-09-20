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

import { FormSelect } from "../../base-components/Form";

import server from "../../../apiconfig.json";
import axios from "axios";

import Header from "../../frontend-components/layout/header";
import StickyMenu from "../../frontend-components/layout/stickyMenu";
import Footer from "../../frontend-components/layout/footer";

import TinySlider, {
    TinySliderElement,
} from "../../base-components/TinySlider";

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

    const [superlargeModalSizePreview, setSuperlargeModalSizePreview] =
        useState(false);
    const sendButtonRef = useRef(null);

    const [editModal, setEditModal] = useState(false);
    const [editRes, setEditRes] = useState(false);
    const editButtonRef = useRef(null);

    const [changePassword, setChangePassword] = useState(false);
    const changePasswordButtonRef = useRef(null);

    const [addTraveller, setAddTraveller] = useState(false);
    const setTravellerButtonRef = useRef(null);

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
        console.log(isMobileMenuVisible, "sdsdsds");
    };

    let loggedin =
        localStorage.getItem("login") === undefined ||
            localStorage.getItem("login") === null ||
            localStorage.getItem("login") === "false"
            ? false
            : true;

    const logoutFunction = () => {
        localStorage.removeItem("customerData");
        localStorage.removeItem("login");
        window.location.href = "/";
    };

    const [cCompany, setCCompany] = useState("");
    const [cId, setCId] = useState(false);
    const [cName, setCName] = useState(false);
    const [cEmail, setCEmail] = useState(false);
    const [cMobile, setCMobile] = useState(false);
    const [cPassword, setCPassword] = useState(false);
    const [cPasswordV, setCPasswordV] = useState(false);
    const [cPasswordN, setCPasswordN] = useState(false);
    const [cPasswordR, setCPasswordR] = useState(false);
    const [cType, setCType] = useState("B2C");
    const [cDob, setCDob] = useState(false);
    const [cWhatsapp, setCWhatsapp] = useState(false);
    const [cSkype, setCSkype] = useState(false);
    const [cAnniversaryDate, setCAnniversaryDate] = useState(false);
    const [cMaritalStatus, setCMaritalStatus] = useState(false);
    const [cVisitFrom, setCVisitFrom] = useState("web");
    const [cIsActive, setCIsActive] = useState("Y");
    const [cRegisterAgent, setCRegisterAgent] = useState("self");
    const [cAddedBy, setCAddedBy] = useState("1");
    const [profilePicture, setProfilePicture] = useState("");

    const [allTravellers, setAllTravellers] = useState();

    const [tName, setTName] = useState(false);
    const [tEmail, setTEmail] = useState(false);
    const [tGender, setTGender] = useState(false);
    const [tPhone, setTPhone] = useState(false);
    const [tDob, setTDob] = useState("");
    const [tRelation, setTRelation] = useState(false);
    const [tPassportNumber, setTPassportNumber] = useState(false);
    const [tPassportIssueCountry, setTPassportIssueCountry] = useState(false);
    const [tPassportIssueDate, setTPassportIssueDate] = useState("");

    const [refresh, setRefresh] = useState(0);

    const [countryList, setCountryList] = useState(null);

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

        viewCustomerData();
        viewTravellerData();
    }, [refresh]);

    const updateUser = () => {
        const API_URL =
            server.API_URL +
            "customer-master/" +
            JSON.parse(localStorage.getItem("customerData")).id;

        const postData = {
            cCompanyName: cCompany,
            cName: cName,
            cEmail: cEmail,
            cMobile: cMobile,
            cType: cType,
            cDob: cDob,
            cWhatsapp: cWhatsapp,
            cSkype: cSkype,
            cAniversaryDate: cMaritalStatus === "Y" ? cAnniversaryDate : "",
            isMarried: cMaritalStatus,
            visitFrom: cVisitFrom,
            isActive: cIsActive,
            registerAgent: cRegisterAgent,
            addedBy: cAddedBy,
        };

        axios
            .patch(API_URL, postData)
            .then((response) => {
                console.log({ API_URL, response });
                if (response.data.msg === "Customer Updated Succesfully") {
                    setRefresh(refresh + 1);
                    setEditModal(false);
                } else {
                    console.log(response.data.msg);
                    setEditRes(response.data.msg);
                }
            })
            .catch((error) => {
                console.error("Error:", error.message);
            });
    };

    const changeUserPassword = () => {
        if (
            cPasswordV === false ||
            cPasswordN === false ||
            cPasswordR === false
        ) {
            setEditRes("data missing");
        } else if (cPasswordV !== cPassword) {
            setEditRes("old password not matched with new one");
        } else if (cPasswordN !== cPasswordR) {
            setEditRes("new password and confirm new password should be same");
        } else {
            updateUserPassword();
        }
    };

    const updateUserPassword = () => {
        const API_URL =
            server.API_URL + "customer-master/update-customer-password";

        const postData = {
            customer_id: cId,
            new_password: cPasswordN,
        };

        axios
            .post(API_URL, postData)
            .then((response) => {
                console.log({ API_URL, response });
                if (response.data.msg === "Password Updated Succesfully") {
                    console.log(response.data);
                    setChangePassword(false);
                    logoutFunction();
                } else {
                    console.log(response.data);
                }
            })
            .catch((error) => {
                console.error("Error:", error.message);
            });
    };

    const dpFileInputRef = useRef(null);

    const [repoObj, setRepoObj] = useState({});

    const handleButtonClick = () => {
        dpFileInputRef.current.click();
    };

    const handleFileChange = async (e) => {
        console.log(e.target.files[0]);

        var formData = new FormData();

        formData.append(
            "customer_id",
            JSON.parse(localStorage.getItem("customerData"))["id"]
        );
        formData.append("profile_picture", e.target.files[0]);

        const api_url = server.API_URL + "customer-master/update-customer-dp";

        const { data } = await axios.post(`${api_url}`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });

        console.log(data);
    };

    const insertTravellerData = async () => {
        const api_url = server.API_URL + "customer-member-master";

        let postData = {
            customerId: cId,
            memName: tName,
            memMobile: tPhone,
            memEmail: tEmail,
            memDob: tDob,
            memGender: tGender,
            relation: tRelation,
            memPassportNo: tPassportNumber,
            memPassportIssuedDate: tPassportIssueDate,
            memPassportIssuedCountry: tPassportIssueCountry,
            isActive: "Y",
        };

        console.log(api_url, postData);

        await axios
            .post(api_url, postData)
            .then((response) => {
                console.log({ api_url, response });
                if (response.data.msg === "Data Created Succesfully") {
                    console.log(response.data);
                    setAddTraveller(false);
                } else {
                    console.log(response.data);
                }
            })
            .catch((error) => {
                console.error("Error:", error.message);
            });
    };

    const viewCustomerData = async () => {
        const api_url =
            server.API_URL +
            "customer-master/" +
            JSON.parse(localStorage.getItem("customerData"))["id"];

        const { data } = await axios.post(`${api_url}`);

        localStorage.setItem("customerData", JSON.stringify(data));

        setCId(JSON.parse(localStorage.getItem("customerData"))["id"]);
        setCCompany(data["cCompanyName"]);
        setCName(data["cName"]);
        setCEmail(data["cEmail"]);
        setCMobile(data["cMobile"]);
        setCPassword(data["cPassword"]);
        setCDob(data["cDob"] === null ? "" : data["cDob"]);
        setCWhatsapp(data["cWhatsapp"]);
        setCSkype(data["cSkype"]);
        setCAnniversaryDate(
            data["cAniversaryDate"] === null ? "" : data["cAniversaryDate"]
        );
        setCMaritalStatus(data["isMarried"]);
        setProfilePicture(data["cProfilePicture"]);
    };

    const viewTravellerData = async () => {
        const api_url =
            server.API_URL +
            "customer-member-master/find-by-customer/" + 
            JSON.parse(localStorage.getItem("customerData"))["id"];

        const { data } = await axios.post(`${api_url}`);

        console.log("memUrl:",data);
        setAllTravellers(data);
    };

    return (
        <>
            {/* <StickyMenu></StickyMenu> */}

            <div className="bg-white overflow-hidden relative">
                {/* HEADER SECTION */}
                <Header></Header>

                {/* BANNER SECTION */}
                {/* <div
                    className="banner_section relative bg-cover bg-bottom"
                    style={{ backgroundImage: `url(${bannerImage})` }}
                >
                    <div className="banner_content py-10 w-full h-full md:py-10 lg:py-20">
                        <div className="container flex justify-center items-center h-full">
                            <div className="relative">
                                <h1 className="text-center text-2xl font-bold text-white pb-5 md:text-4xl md:pb-6 lg:text-5xl">
                                    My Profile
                                </h1>
                                <p className="text-center text-sm font-medium text-white pb-8 w-full my-0 mx-auto md:text-base md:w-3/6">
                                    Experience our various exciting packages and
                                    make your hotel reservations. Find vacation
                                    packages also and search cheap hotels and
                                    events.
                                </p>

                                <div className="booking_type_section mb-5">
                                    <ul className="flex justify-center items-center">
                                        <li className="active">
                                            <Link
                                                className="text-sm font-semibold text-white mx-4 px-4 flex justify-center items-center md:mx-8 xl:mx-2 lg:mx-2"
                                                to="/"
                                            >
                                                <img
                                                    alt="packageTourIcon"
                                                    className="mb-1.5 mr-1.5"
                                                    src={packageTourIcon}
                                                />
                                                Package Tour
                                            </Link>
                                        </li>
                                        <li className="hidden xl:block">
                                            <Link
                                                className="text-sm font-semibold text-white mx-4 px-4 flex justify-center items-center md:mx-8 xl:mx-2 lg:mx-2"
                                                to="/"
                                            >
                                                <img
                                                    alt="hotelIcon"
                                                    className="mb-1.5 mr-1.5"
                                                    src={hotelIcon}
                                                />
                                                Hotel
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                className="text-sm font-semibold text-white mx-4 px-4 flex justify-center items-center md:mx-8 xl:mx-2 lg:mx-2"
                                                to="/"
                                            >
                                                <img
                                                    alt="flightIcon"
                                                    className="mb-1.5 mr-1.5"
                                                    src={flightIcon}
                                                />
                                                Flight
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                className="text-sm font-semibold text-white mx-4 px-4 flex justify-center items-center md:mx-8 xl:mx-2 lg:mx-2"
                                                to="/"
                                            >
                                                <img
                                                    alt="carIcon"
                                                    className="mb-1.5 mr-1.5"
                                                    src={carIcon}
                                                />
                                                Car
                                            </Link>
                                        </li>
                                        <li className="hidden xl:block">
                                            <Link
                                                className="text-sm font-semibold text-white mx-4 px-4 flex justify-center items-center md:mx-8 xl:mx-2 lg:mx-2"
                                                to="/"
                                            >
                                                <img
                                                    alt="busIcon"
                                                    className="mb-1.5 mr-1.5"
                                                    src={busIcon}
                                                />
                                                Bus
                                            </Link>
                                        </li>
                                        <li className="hidden xl:block">
                                            <Link
                                                className="text-sm font-semibold text-white mx-4 px-4 flex justify-center items-center md:mx-8 xl:mx-2 lg:mx-2"
                                                to="/"
                                            >
                                                <img
                                                    alt="privateIcon"
                                                    className="mb-1.5 mr-1.5"
                                                    src={privateIcon}
                                                />
                                                Home Stay
                                            </Link>
                                        </li>
                                        <li className="hidden xl:block">
                                            <Link
                                                className="text-sm font-semibold text-white mx-4 px-4 flex justify-center items-center md:mx-8 xl:mx-2 lg:mx-2"
                                                to="/"
                                            >
                                                <img
                                                    alt="activityIcon"
                                                    className="mb-1.5 mr-1.5"
                                                    src={activityIcon}
                                                />
                                                Activity
                                            </Link>
                                        </li>
                                        <li className="hidden xl:block">
                                            <Link
                                                className="text-sm font-semibold text-white mx-4 px-4 flex justify-center items-center md:mx-8 xl:mx-2 lg:mx-2"
                                                to="/"
                                            >
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
                </div> */}

                {/* ABOUT CONTENT SECTION */}
                <div className="about_section py-10 overflow-hidden px-4 xl:px-0">
                    <div className="container">
                        <div className="flex">
                            <div className="my_profile_left mx-8 px-4 py-6 bg-slate-50 rounded-lg w-1/4">
                                <div className="profile_photo_section">
                                    <div className="profile_img relative flex justify-center items-center mx-auto my-0 w-48 h-48 bg-orange-200 rounded-full">
                                        {profilePicture === "" ? (
                                            <img
                                                src={`${server.API_URL}images/customerDp/test_user_dp.jpg`}
                                                alt="profile picture"
                                                style={{ borderRadius: "50%" }}
                                            />
                                        ) : (
                                            <img
                                                src={`${server.API_URL}images/customerDp/${profilePicture}`}
                                                alt="profile picture"
                                                style={{ borderRadius: "50%" }}
                                            />
                                        )}

                                        <FormInput
                                            ref={dpFileInputRef}
                                            id="choose-file"
                                            type="file"
                                            name="choose-file"
                                            onChange={handleFileChange}
                                            style={{ display: "none" }}
                                        />

                                        <div
                                            className="edit_profile_pic"
                                            onClick={() => handleButtonClick()}
                                        >
                                            <Lucide icon="Edit2" className="" />
                                        </div>
                                    </div>
                                    <div className="profile_name text-center py-4">
                                        <h3 className="text-xl font-semibold">
                                            {loggedin === true ? cName : ""}
                                        </h3>
                                        <p className="text-orange-600">
                                            PERSONAL PROFILE
                                        </p>
                                    </div>
                                    <div className="profile_menu">
                                        <ul>
                                            <li className="active_item">
                                                <a
                                                    className="px-6 py-4 flex justify-start items-center font-semibold text-sm"
                                                    href="#"
                                                >
                                                    <Lucide
                                                        icon="User"
                                                        className=""
                                                    />{" "}
                                                    Profile
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="px-6 py-4 flex justify-start items-center font-semibold text-sm"
                                                    href="#loginDetail"
                                                >
                                                    <Lucide
                                                        icon="LogIn"
                                                        className=""
                                                    />{" "}
                                                    Login Details
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="px-6 py-4 flex justify-start items-center font-semibold text-sm"
                                                    href="#saveTravellers"
                                                >
                                                    <Lucide
                                                        icon="Users"
                                                        className=""
                                                    />{" "}
                                                    Save Travellers
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="px-6 py-4 flex justify-start items-center font-semibold text-sm"
                                                    href="#"
                                                    onClick={() =>
                                                        logoutFunction()
                                                    }
                                                >
                                                    <Lucide
                                                        icon="LogOut"
                                                        className=""
                                                    />{" "}
                                                    Logout
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="w-3/4">
                                <div className="my_profile_right mx-8 p-6 bg-slate-50 rounded-lg mb-10">
                                    <div className="flex justify-between items-center mb-3">
                                        <div className="my_profile_title_sec">
                                            <h3 className="text-3xl font-semibold pb-2 text-black">
                                                Profile
                                            </h3>
                                            <p className="text-base pb-2 text-black">
                                                Basic info, for a faster booking
                                                experience
                                            </p>
                                        </div>
                                        <div className="my_profile_edit_sec">
                                            <div className="rounded-full border border-slate-300 px-4 py-2">
                                                <span>
                                                    <Link
                                                        className="text-base font-semibold text-blue-500 cursor-pointer flex hover:text-black"
                                                        onClick={(
                                                            event: React.MouseEvent
                                                        ) => {
                                                            event.preventDefault();
                                                            setEditModal(true);
                                                        }}
                                                    >
                                                        <Lucide
                                                            icon="Edit2"
                                                            className=""
                                                        />{" "}
                                                        Edit
                                                    </Link>
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="profile_details_list">
                                        <div className="flex border-b-2 pt-4 pb-2">
                                            <div className="label_box w-1/4 text-sm pb-2 text-black">
                                                Company Name
                                            </div>
                                            <div className="label_details_box w-3/4 text-sm font-semibold pb-2 text-blue-500 cursor-pointer hover:text-black">
                                                {loggedin === true
                                                    ? cCompany
                                                    : ""}
                                            </div>
                                        </div>
                                        <div className="flex border-b-2 pt-4 pb-2">
                                            <div className="label_box w-1/4 text-sm pb-2 text-black">
                                                NAME
                                            </div>
                                            <div className="label_details_box w-3/4 text-sm font-semibold pb-2 text-black">
                                                {loggedin === true ? cName : ""}
                                            </div>
                                        </div>
                                        <div className="flex border-b-2 pt-4 pb-2">
                                            <div className="label_box w-1/4 text-sm pb-2 text-black">
                                                MOBILE
                                            </div>
                                            <div className="label_details_box w-3/4 text-sm font-semibold pb-2 text-blue-500 cursor-pointer hover:text-black">
                                                {loggedin === true
                                                    ? cMobile
                                                    : ""}
                                            </div>
                                        </div>
                                        <div className="flex border-b-2 pt-4 pb-2">
                                            <div className="label_box w-1/4 text-sm pb-2 text-black">
                                                BIRTHDAY
                                            </div>
                                            <div className="label_details_box w-3/4 text-sm font-semibold pb-2 text-blue-500 cursor-pointer hover:text-black">
                                                {loggedin === true ? cDob : ""}
                                            </div>
                                        </div>
                                        <div className="flex border-b-2 pt-4 pb-2">
                                            <div className="label_box w-1/4 text-sm pb-2 text-black">
                                                WHATSAPP
                                            </div>
                                            <div className="label_details_box w-3/4 text-sm font-semibold pb-2 text-blue-500 cursor-pointer hover:text-black">
                                                {loggedin === true
                                                    ? cWhatsapp
                                                    : ""}
                                            </div>
                                        </div>
                                        <div className="flex border-b-2 pt-4 pb-2">
                                            <div className="label_box w-1/4 text-sm pb-2 text-black">
                                                Skype
                                            </div>
                                            <div className="label_details_box w-3/4 text-sm font-semibold pb-2 text-blue-500 cursor-pointer hover:text-black">
                                                {loggedin === true
                                                    ? cSkype
                                                    : ""}
                                            </div>
                                        </div>
                                        <div className="flex border-b-2 pt-4 pb-2">
                                            <div className="label_box w-1/4 text-sm pb-2 text-black">
                                                MARITAL STATUS
                                            </div>
                                            <div className="label_details_box w-3/4 text-sm font-semibold pb-2 text-blue-500 cursor-pointer hover:text-black">
                                                {loggedin === true
                                                    ? cMaritalStatus === "Y"
                                                        ? "Married"
                                                        : "Single"
                                                    : ""}
                                            </div>
                                        </div>

                                        {loggedin === true ? (
                                            cMaritalStatus === "Y" ? (
                                                <div className="flex border-b-2 pt-4 pb-2">
                                                    <div className="label_box w-1/4 text-sm pb-2 text-black">
                                                        Aniversary Date
                                                    </div>
                                                    <div className="label_details_box w-3/4 text-sm font-semibold pb-2 text-blue-500 cursor-pointer hover:text-black">
                                                        {loggedin === true
                                                            ? cAnniversaryDate
                                                            : ""}
                                                    </div>
                                                </div>
                                            ) : null
                                        ) : null}

                                        {/* <div className="flex border-b-2 pt-4 pb-2">
                                            <div className="label_box w-1/4 text-sm pb-2 text-black">
                                                PINCODE
                                            </div>
                                            <div className="label_details_box w-3/4 text-sm font-semibold pb-2 text-blue-500 cursor-pointer hover:text-black">
                                                + Add
                                            </div>
                                        </div>
                                        <div className="flex border-b-2 pt-4 pb-2">
                                            <div className="label_box w-1/4 text-sm pb-2 text-black">
                                                STATE
                                            </div>
                                            <div className="label_details_box w-3/4 text-sm font-semibold pb-2 text-blue-500 cursor-pointer hover:text-black">
                                                + Add
                                            </div>
                                        </div> */}
                                    </div>
                                </div>

                                <div
                                    className="my_profile_right mx-8 p-6 bg-slate-50 rounded-lg mb-10"
                                    id="loginDetail"
                                >
                                    <div className="flex justify-between items-center mb-3">
                                        <div className="my_profile_title_sec">
                                            <h3 className="text-3xl font-semibold pb-2 text-black">
                                                Login Details
                                            </h3>
                                            <p className="text-base pb-2 text-black">
                                                Manage your email address mobile
                                                number and password
                                            </p>
                                        </div>
                                    </div>

                                    <div className="profile_details_list">
                                        <div className="flex border-b-2 pt-4 pb-2">
                                            <div className="label_box w-1/4 text-sm pb-2 text-black">
                                                MOBILE NUMBER
                                            </div>
                                            <div className="label_details_box w-3/4 text-sm font-semibold pb-2 text-black">
                                                {loggedin === true
                                                    ? cMobile
                                                    : ""}
                                            </div>
                                        </div>
                                        <div className="flex border-b-2 pt-4 pb-2">
                                            <div className="label_box w-1/4 text-sm pb-2 text-black">
                                                EMAIL ID
                                            </div>
                                            <div className="label_details_box w-3/4 text-sm font-semibold pb-2 text-black">
                                                {loggedin === true
                                                    ? cEmail
                                                    : ""}
                                            </div>
                                        </div>
                                        <div className="flex border-b-2 pt-4 pb-2">
                                            <div className="label_box w-1/4 text-sm pb-2 text-black">
                                                PASSWORD
                                            </div>
                                            <div className="label_details_box w-2/4 text-sm font-semibold pb-2 text-black">
                                                {loggedin === true
                                                    ? cPassword
                                                    : ""}
                                            </div>
                                            <div className="label_details_box w-1/4 text-sm font-semibold pb-2 text-blue-500 cursor-pointer text-right hover:text-black">
                                                <Link
                                                    className="text-base font-semibold text-blue-500 cursor-pointer hover:text-black"
                                                    onClick={(
                                                        event: React.MouseEvent
                                                    ) => {
                                                        event.preventDefault();
                                                        setChangePassword(true);
                                                    }}
                                                >
                                                    Change Password
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div
                                    className="my_profile_right mx-8 p-6 bg-slate-50 rounded-lg mb-10"
                                    id="saveTravellers"
                                >
                                    <div className="flex justify-between items-center mb-3">
                                        <div className="my_profile_title_sec">
                                            <h3 className="text-3xl font-semibold pb-2 text-black">
                                                Save Traveller(s)
                                            </h3>
                                            <p className="text-base pb-2 text-black">
                                                You have{" "}
                                                {allTravellers !== undefined
                                                    ? allTravellers.resData
                                                        .length
                                                    : 0}{" "}
                                                Traveller(s)
                                            </p>
                                        </div>
                                        <div className="my_profile_edit_sec">
                                            <div className="rounded-full border border-slate-300 px-4 py-2">
                                                <span>
                                                    <Link
                                                        className="text-base font-semibold text-blue-500 cursor-pointer flex hover:text-black"
                                                        onClick={(
                                                            event: React.MouseEvent
                                                        ) => {
                                                            event.preventDefault();
                                                            setAddTraveller(
                                                                true
                                                            );
                                                        }}
                                                    >
                                                        <Lucide
                                                            icon="Edit2"
                                                            className=""
                                                        />{" "}
                                                        Add Traveller
                                                    </Link>
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="profile_details_list">
                                        <div className="d-flex">
                                            {allTravellers !== undefined
                                                ? allTravellers.resData.map(
                                                    (T, i) => {
                                                        return (
                                                            <div
                                                                className="text-sm font-semibold p-4 mb-2 text-black"
                                                                style={{
                                                                    backgroundColor:
                                                                        "#e4e4ed",
                                                                    borderRadius:
                                                                        "10px",
                                                                }}
                                                            >
                                                                {"["}
                                                                {i + 1}
                                                                {"] "}
                                                                {
                                                                    T.memName
                                                                }{" "}
                                                                <span className="font-normal">
                                                                    (
                                                                    {
                                                                        T.memGender
                                                                    }
                                                                    )
                                                                </span>
                                                                {" - "}
                                                                <span className="font-normal">
                                                                    {
                                                                        T.memEmail
                                                                    }
                                                                </span>
                                                            </div>
                                                        );
                                                    }
                                                )
                                                : "no traveller added"}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* FOOTER SECTION */}
                <Footer></Footer>

                {/* REGISTRATION EDIT */}

                {/* BEGIN: Modal Size */}

                <PreviewComponent className="mt-0 intro-y box">
                    <div className="p-0">
                        <Preview>
                            <Dialog
                                size="xl"
                                open={editModal}
                                onClose={() => {
                                    setEditModal(false);
                                }}
                            >
                                <Dialog.Panel className="p-0 text-center">
                                    <div className="">
                                        <div className="w-full p-2">
                                            <Dialog.Description>
                                                <div className="registration_box">
                                                    <div className="flex justify-center relative">
                                                        <h2 className="pb-8 text-black text-2xl font-medium">
                                                            Edit Profile
                                                        </h2>
                                                        <Button
                                                            type="button"
                                                            variant="outline-secondary"
                                                            onClick={() => {
                                                                setEditModal(
                                                                    false
                                                                );
                                                            }}
                                                            className="p-0 border-0 absolute top-0 right-0"
                                                        >
                                                            <Lucide
                                                                icon="XCircle"
                                                                className="block mx-auto"
                                                            />
                                                        </Button>
                                                    </div>

                                                    <div className="grid grid-cols-12 gap-4 gap-y-3">
                                                        <div className="col-span-12 sm:col-span-6">
                                                            <p className="mb-2 text-start">
                                                                Your Company
                                                            </p>
                                                            <FormInput
                                                                id=""
                                                                type="text"
                                                                placeholder="Your Company*"
                                                                className="leading-7"
                                                                onChange={(e) =>
                                                                    setCCompany(
                                                                        e.target
                                                                            .value
                                                                    )
                                                                }
                                                                value={cCompany}
                                                            />
                                                        </div>
                                                        <div className="col-span-12 sm:col-span-6">
                                                            <p className="mb-2 text-start">
                                                                Your Name
                                                            </p>
                                                            <FormInput
                                                                id=""
                                                                type="text"
                                                                placeholder="Your Name*"
                                                                className="leading-7"
                                                                onChange={(e) =>
                                                                    setCName(
                                                                        e.target
                                                                            .value
                                                                    )
                                                                }
                                                                value={cName}
                                                            />
                                                        </div>
                                                        <div className="col-span-12 sm:col-span-6">
                                                            <p className="mb-2 text-start">
                                                                Your Email
                                                            </p>
                                                            <FormInput
                                                                id=""
                                                                type="email"
                                                                placeholder="Your Email*"
                                                                className="leading-7"
                                                                onChange={(e) =>
                                                                    setCEmail(
                                                                        e.target
                                                                            .value
                                                                    )
                                                                }
                                                                value={cEmail}
                                                            />
                                                        </div>
                                                        <div className="col-span-12 sm:col-span-6">
                                                            <p className="mb-2 text-start">
                                                                Your Mobile
                                                            </p>
                                                            <FormInput
                                                                id=""
                                                                type="text"
                                                                placeholder="Your Mobile*"
                                                                className="leading-7"
                                                                onChange={(e) =>
                                                                    setCMobile(
                                                                        e.target
                                                                            .value
                                                                    )
                                                                }
                                                                value={cMobile}
                                                            />
                                                        </div>
                                                        <div className="col-span-12 sm:col-span-6">
                                                            <p className="mb-2 text-start">
                                                                Your Whatsapp
                                                            </p>
                                                            <FormInput
                                                                id=""
                                                                type="text"
                                                                placeholder="Your Mobile*"
                                                                className="leading-7"
                                                                onChange={(e) =>
                                                                    setCWhatsapp(
                                                                        e.target
                                                                            .value
                                                                    )
                                                                }
                                                                value={
                                                                    cWhatsapp
                                                                }
                                                            />
                                                        </div>
                                                        <div className="col-span-12 sm:col-span-6">
                                                            <p className="mb-2 text-start">
                                                                Your DOB
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
                                                                            value={
                                                                                cDob
                                                                            }
                                                                            onChange={
                                                                                setCDob
                                                                            }
                                                                            options={{
                                                                                autoApply:
                                                                                    false,
                                                                                showWeekNumbers:
                                                                                    true,
                                                                                dropdowns:
                                                                                {
                                                                                    minYear: 1990,
                                                                                    maxYear:
                                                                                        null,
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
                                                        {/* <div className="col-span-12 sm:col-span-6">
                                                            <FormSelect
                                                                className="leading-7"
                                                                aria-label="Default select example"
                                                            >
                                                                <option>
                                                                    Gender
                                                                </option>
                                                                <option>
                                                                    Male
                                                                </option>
                                                                <option>
                                                                    Female
                                                                </option>
                                                            </FormSelect>
                                                        </div> */}
                                                        <div className="col-span-12 sm:col-span-6">
                                                            <p className="mb-2 text-start">
                                                                Your Marital
                                                                Status
                                                            </p>
                                                            <FormSelect
                                                                className="leading-7"
                                                                aria-label="Default select example"
                                                                onChange={(e) =>
                                                                    setCMaritalStatus(
                                                                        e.target
                                                                            .value
                                                                    )
                                                                }
                                                            >
                                                                <option>
                                                                    Marital
                                                                    Status
                                                                </option>
                                                                <option value="Y">
                                                                    Married
                                                                </option>
                                                                <option value="N">
                                                                    Single
                                                                </option>
                                                            </FormSelect>
                                                        </div>
                                                        <div className="col-span-12 sm:col-span-6">
                                                            {cMaritalStatus ===
                                                                "Y" ? (
                                                                <>
                                                                    <p className="mb-2 text-start">
                                                                        Your
                                                                        Marriage
                                                                        Anniversary
                                                                        Date
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
                                                                                    value={
                                                                                        cAnniversaryDate
                                                                                    }
                                                                                    onChange={
                                                                                        setCAnniversaryDate
                                                                                    }
                                                                                    options={{
                                                                                        autoApply:
                                                                                            false,
                                                                                        showWeekNumbers:
                                                                                            true,
                                                                                        dropdowns:
                                                                                        {
                                                                                            minYear: 1990,
                                                                                            maxYear:
                                                                                                null,
                                                                                            months: true,
                                                                                            years: true,
                                                                                        },
                                                                                    }}
                                                                                    className="text-black py-3 px-9 text-sm"
                                                                                />
                                                                            </div>
                                                                        </Preview>
                                                                    </div>
                                                                </>
                                                            ) : null}
                                                        </div>
                                                        {/* <div className="col-span-12 sm:col-span-6">
                                                            <FormSelect
                                                                className="leading-7"
                                                                aria-label="Default select example"
                                                            >
                                                                <option>
                                                                    State
                                                                </option>
                                                                <option>
                                                                    India
                                                                </option>
                                                                <option>
                                                                    Bangladesh
                                                                </option>
                                                            </FormSelect>
                                                        </div> */}
                                                    </div>

                                                    <div className="grid grid-cols-1 mt-4 gap-4 gap-y-3">
                                                        <Button
                                                            variant="primary"
                                                            type="button"
                                                            className="w-full bg-orange-500 text-sm leading-7 font-light border-0"
                                                            // ref={editButtonRef}
                                                            onClick={() =>
                                                                updateUser()
                                                            }
                                                        >
                                                            Save
                                                        </Button>
                                                    </div>
                                                </div>
                                            </Dialog.Description>
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Dialog>
                        </Preview>
                    </div>
                </PreviewComponent>

                {/* END: Modal Size */}

                {/* CHANGE PASSWORD */}

                {/* BEGIN: Modal Size */}

                <PreviewComponent className="mt-0 intro-y box">
                    <div className="p-0">
                        <Preview>
                            <Dialog
                                size="xl"
                                open={changePassword}
                                onClose={() => {
                                    setChangePassword(false);
                                }}
                            >
                                <Dialog.Panel className="p-0 text-center">
                                    <div className="">
                                        <div className="w-full p-2">
                                            <Dialog.Description>
                                                <div className="registration_box">
                                                    <div className="flex justify-center relative">
                                                        <h2 className="pb-8 text-black text-2xl font-medium">
                                                            Change Password?
                                                        </h2>
                                                        <Button
                                                            type="button"
                                                            variant="outline-secondary"
                                                            onClick={() => {
                                                                setChangePassword(
                                                                    false
                                                                );
                                                            }}
                                                            className="p-0 border-0 absolute top-0 right-0"
                                                        >
                                                            <Lucide
                                                                icon="XCircle"
                                                                className="block mx-auto"
                                                            />
                                                        </Button>
                                                    </div>

                                                    <div className="grid grid-cols-6 gap-4 gap-y-3">
                                                        <div className="col-span-12 sm:col-span-6">
                                                            <p className="mb-2 text-start">
                                                                Old Password
                                                            </p>
                                                            <FormInput
                                                                id=""
                                                                type="password"
                                                                placeholder="Old Password*"
                                                                className="leading-7"
                                                                onChange={(e) =>
                                                                    setCPasswordV(
                                                                        e.target
                                                                            .value
                                                                    )
                                                                }
                                                            />
                                                        </div>

                                                        <div className="col-span-12 sm:col-span-6">
                                                            <p className="mb-2 text-start">
                                                                New Password
                                                            </p>
                                                            <FormInput
                                                                id=""
                                                                type="password"
                                                                placeholder="New Password*"
                                                                className="leading-7"
                                                                onChange={(e) =>
                                                                    setCPasswordN(
                                                                        e.target
                                                                            .value
                                                                    )
                                                                }
                                                            />
                                                        </div>

                                                        <div className="col-span-12 sm:col-span-6">
                                                            <p className="mb-2 text-start">
                                                                Confirm New
                                                                Password
                                                            </p>
                                                            <FormInput
                                                                id=""
                                                                type="password"
                                                                placeholder="Confirm New Password*"
                                                                className="leading-7"
                                                                onChange={(e) =>
                                                                    setCPasswordR(
                                                                        e.target
                                                                            .value
                                                                    )
                                                                }
                                                            />
                                                        </div>
                                                    </div>

                                                    {editRes !== false ||
                                                        setEditRes !== null ||
                                                        setEditRes !== undefined ? (
                                                        <div
                                                            className="mt-3 mb-2"
                                                            style={{
                                                                color: "red",
                                                            }}
                                                        >
                                                            {editRes}
                                                        </div>
                                                    ) : null}

                                                    <div className="grid grid-cols-1 mt-4 gap-4 gap-y-3">
                                                        <Button
                                                            variant="primary"
                                                            type="button"
                                                            className="w-full bg-orange-500 text-sm leading-7 font-light border-0"
                                                            onClick={() =>
                                                                changeUserPassword()
                                                            }
                                                        >
                                                            Change Password
                                                        </Button>
                                                    </div>
                                                </div>
                                            </Dialog.Description>
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Dialog>
                        </Preview>
                    </div>
                </PreviewComponent>

                {/* END: Modal Size */}

                {/* Add Traveller EDIT */}

                {/* BEGIN: Modal Size */}

                <PreviewComponent className="mt-0 intro-y box">
                    <div className="p-0">
                        <Preview>
                            <Dialog
                                size="xl"
                                open={addTraveller}
                                onClose={() => {
                                    setAddTraveller(false);
                                }}
                            >
                                <Dialog.Panel className="p-0 text-center">
                                    <div className="">
                                        <div className="w-full p-2">
                                            <Dialog.Description>
                                                <div className="registration_box">
                                                    <div className="flex justify-center relative">
                                                        <h2 className="pb-8 text-black text-2xl font-medium">
                                                            Add Traveller’s Info
                                                        </h2>
                                                        <Button
                                                            type="button"
                                                            variant="outline-secondary"
                                                            onClick={() => {
                                                                setAddTraveller(
                                                                    false
                                                                );
                                                            }}
                                                            className="p-0 border-0 absolute top-0 right-0"
                                                        >
                                                            <Lucide
                                                                icon="XCircle"
                                                                className="block mx-auto"
                                                            />
                                                        </Button>
                                                    </div>

                                                    <div className="text-left pb-6">
                                                        <h3 className="text-black text-xl font-medium">
                                                            Basic Information
                                                        </h3>
                                                        <p>
                                                            Basic info, like
                                                            your email and
                                                            number that you use
                                                            on Personal Profile
                                                        </p>
                                                    </div>

                                                    <div className="grid grid-cols-12 gap-4 gap-y-3">
                                                        <div className="col-span-12 sm:col-span-6">
                                                            <p className="mb-2 text-start">
                                                                Traveller's Name
                                                            </p>
                                                            <FormInput
                                                                id=""
                                                                type="text"
                                                                placeholder="Traveller'sName*"
                                                                className="leading-7"
                                                                onChange={(e) =>
                                                                    setTName(
                                                                        e.target
                                                                            .value
                                                                    )
                                                                }
                                                            />
                                                        </div>
                                                        <div className="col-span-12 sm:col-span-6">
                                                            <p className="mb-2 text-start">
                                                                Traveller's
                                                                Gender
                                                            </p>
                                                            <FormSelect
                                                                className="leading-7"
                                                                aria-label="Default select example"
                                                                onChange={(e) =>
                                                                    setTGender(
                                                                        e.target
                                                                            .value
                                                                    )
                                                                }
                                                            >
                                                                <option>
                                                                    Gender
                                                                </option>
                                                                <option>
                                                                    Male
                                                                </option>
                                                                <option>
                                                                    Female
                                                                </option>
                                                            </FormSelect>
                                                        </div>
                                                        <div className="col-span-12 sm:col-span-6">
                                                            <p className="mb-2 text-start">
                                                                Traveller's
                                                                Email
                                                            </p>
                                                            <FormInput
                                                                id=""
                                                                type="email"
                                                                placeholder="Traveller's Email*"
                                                                className="leading-7"
                                                                onChange={(e) =>
                                                                    setTEmail(
                                                                        e.target
                                                                            .value
                                                                    )
                                                                }
                                                            />
                                                        </div>
                                                        <div className="col-span-12 sm:col-span-6">
                                                            <p className="mb-2 text-start">
                                                                Traveller's
                                                                Phone
                                                            </p>
                                                            <FormInput
                                                                id=""
                                                                type="number"
                                                                placeholder="Traveller's Phone*"
                                                                className="leading-7"
                                                                onChange={(e) =>
                                                                    setTPhone(
                                                                        e.target
                                                                            .value
                                                                    )
                                                                }
                                                            />
                                                        </div>

                                                        <div className="col-span-12 sm:col-span-6">
                                                            <p className="mb-2 text-start">
                                                                Traveller's DOB
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
                                                                            value={
                                                                                tDob
                                                                            }
                                                                            onChange={
                                                                                setTDob
                                                                            }
                                                                            options={{
                                                                                autoApply:
                                                                                    false,
                                                                                showWeekNumbers:
                                                                                    true,
                                                                                dropdowns:
                                                                                {
                                                                                    minYear: 1990,
                                                                                    maxYear:
                                                                                        null,
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

                                                        <div className="col-span-12 sm:col-span-6">
                                                            <p className="mb-2 text-start">
                                                                Customer's
                                                                Relation with
                                                                Traveller
                                                            </p>
                                                            <FormInput
                                                                id=""
                                                                type="text"
                                                                placeholder="Relation"
                                                                className="leading-7"
                                                                onChange={(e) =>
                                                                    setTRelation(
                                                                        e.target
                                                                            .value
                                                                    )
                                                                }
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="text-left pb-6 mt-10">
                                                        <h3 className="text-black text-xl font-medium">
                                                            Passport Details
                                                        </h3>
                                                        <p>
                                                            Add your Passport
                                                            details for a faster
                                                            flight booking
                                                            experience
                                                        </p>
                                                    </div>

                                                    <div className="grid grid-cols-12 gap-4 gap-y-3">
                                                        <div className="col-span-12 sm:col-span-6">
                                                            <p className="mb-2 text-start">
                                                                Traveller's
                                                                Passport Number
                                                            </p>
                                                            <FormInput
                                                                id=""
                                                                type="text"
                                                                placeholder="Passport Number*"
                                                                className="leading-7"
                                                                onChange={(e) =>
                                                                    setTPassportNumber(
                                                                        e.target
                                                                            .value
                                                                    )
                                                                }
                                                            />
                                                        </div>

                                                        <div className="col-span-12 sm:col-span-6">
                                                            <p className="mb-2 text-start">
                                                                Traveller's
                                                                Passport Issued
                                                                Country
                                                            </p>
                                                            <FormSelect
                                                                className="leading-7"
                                                                aria-label="Default select example"
                                                                onChange={(e) =>
                                                                    setTPassportIssueCountry(
                                                                        e.target
                                                                            .value
                                                                    )
                                                                }
                                                            >
                                                                <option>
                                                                    Choose
                                                                    Country
                                                                </option>
                                                                {countryList !==
                                                                    null
                                                                    ? countryList.map(
                                                                        (
                                                                            C
                                                                        ) => {
                                                                            return (
                                                                                <option>
                                                                                    {
                                                                                        C.name
                                                                                    }
                                                                                </option>
                                                                            );
                                                                        }
                                                                    )
                                                                    : null}
                                                            </FormSelect>
                                                        </div>

                                                        <div className="col-span-12 sm:col-span-6">
                                                            <p className="mb-2 text-start">
                                                                Traveller's
                                                                Passport Issued
                                                                Date
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
                                                                            value={
                                                                                tPassportIssueDate
                                                                            }
                                                                            onChange={
                                                                                setTPassportIssueDate
                                                                            }
                                                                            options={{
                                                                                autoApply:
                                                                                    false,
                                                                                showWeekNumbers:
                                                                                    true,
                                                                                dropdowns:
                                                                                {
                                                                                    minYear: 1990,
                                                                                    maxYear:
                                                                                        null,
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
                                                    </div>

                                                    <div className="grid grid-cols-1 mt-4 gap-4 gap-y-3">
                                                        <Button
                                                            variant="primary"
                                                            type="button"
                                                            className="w-full bg-orange-500 text-sm leading-7 font-light border-0"
                                                            onClick={() =>
                                                                insertTravellerData()
                                                            }
                                                        >
                                                            Save Traveller
                                                        </Button>
                                                    </div>
                                                </div>
                                            </Dialog.Description>
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Dialog>
                        </Preview>
                    </div>
                </PreviewComponent>

                {/* END: Modal Size */}
            </div>
        </>
    );
}

export default Main;
