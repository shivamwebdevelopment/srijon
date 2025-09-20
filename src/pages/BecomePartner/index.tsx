// @ts-nocheck
import DarkModeSwitcher from "../../components/DarkModeSwitcher";
import MainColorSwitcher from "../../components/MainColorSwitcher";
import logoUrl from "../../assets/images/logo.svg";
import illustrationUrl from "../../assets/images/illustration.svg";
import {
    FormInput,
    FormInline,
    FormSelect,
    FormLabel,
    FormHelp,
    FormCheck,
    InputGroup,
    FormSwitch,
    FormTextarea,
} from "../../base-components/Form";
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
import { Menu, Dialog } from "../../base-components/Headless";
import Litepicker from "../../base-components/Litepicker";
import Button from "../../base-components/Button";
import Lucide from "../../base-components/Lucide";
import { useState, useRef, useEffect } from "react";

import server from "../../../apiconfig.json";
import axios from "axios";

import Header from "../../frontend-components/layout/header";
import StickyMenu from "../../frontend-components/layout/stickyMenu";
import Footer from "../../frontend-components/layout/footer";
import Notification from "../../base-components/Notification";
import Table from "../../base-components/Table";
import './becomePartner.css'

import TinySlider, {
    TinySliderElement,
} from "../../base-components/TinySlider";

const marginArrowStyle = {
    right: -25,
    top: 20,
};
import Toastify from "toastify-js";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

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
    }, [refresh]);

    const [currentTab, setCurrentTab] = useState("tab_1");

    const [cityId, setcityId] = useState("");
    const [stateId, setstateId] = useState("0");
    const [isActive, setisActive] = useState("Y");
    const [vendorType, setvendorType] = useState("");
    const [visitFrom, setvisitFrom] = useState("");

    const [personalInfo, setPersonalInfo] = useState(true)
    const [addressInfo, setAddressInfo] = useState(true)
    const [bankInfo, setBankInfo] = useState(true)

    const [allCities, setAllCities] = useState([])
    const [allStates, setAllStates] = useState([])

    const [formRes, setFormRes] = useState([])

    const [panCard, setPanCard] = useState()
    const [adharF, setAdharF] = useState()
    const [adharB, setAdharB] = useState()
    const [bankStat, setBankStat] = useState()
    const [tradeLisence, setTradeLisence] = useState()

    useEffect(() => {
        getCities()
    }, [stateId]);

    useEffect(() => {
        getStates()
    }, []);

    const getCities = async () => {
        const API_URL = server.API_URL + "super-city-master/allcities";
        let body = { state_id: stateId }

        await axios
            .post(API_URL, body)
            .then((response) => {
                console.log(response.data);
                setAllCities(response.data);
            })
            .catch((error) => {
                console.error("Error:", error.message);
                setAllCities([])
            });
    };

    const getStates = async () => {
        const API_URL = server.API_URL + "super-state-master/allstates";
        let body = { country_id: '0' }

        await axios
            .post(API_URL, body)
            .then((response) => {
                console.log(response.data);
                setAllStates(response.data);
            })
            .catch((error) => {
                console.error("Error:", error.message);
                setAllStates([])
            });
    };

    const schema = yup
        .object({
            vName: yup.string().required("Name is a required field").min(2),
            contactPerson: yup.string().required("Name is a required field").min(2),
            vEmail: yup.string().required("Name is a required field").min(2),
            vMobile: yup.string().required("Name is a required field").min(2),
            vPan: yup.string().required("Name is a required field").min(2),
            vAddress: yup.string().required("Name is a required field").min(2),
            vPincode: yup.string().required("Name is a required field").min(2),
            vAccountName: yup.string().required("Name is a required field").min(2),
            vBankName: yup.string().required("Name is a required field").min(2),
            vBranch: yup.string().required("Name is a required field").min(2)
        })
        .required();

    const {
        register,
        getValues,
        trigger,
        formState: { errors },
        reset,
        handleSubmit,
    } = useForm({
        mode: "onChange",
        resolver: yupResolver(schema),
    });

    const onSubmitDocs = async (docFile, fileType) => {
        const URL = `${server.API_URL}${server.API_ENDPOINT.VENDOR}/upload-image`;

        var formData = new FormData();

        formData.append('id', formRes['id']);
        formData.append('fileType', fileType);
        formData.append('thumbnail', docFile);

        await axios
            .post(URL, formData)
            .then((response) => {
                if (response.data.msg === 'Data Updated Succesfully') {
                    reset(formData);

                    const successEl = document
                        .querySelectorAll("#success-notification-content")[0]
                        .cloneNode(true) as HTMLElement;
                    successEl.classList.remove("hidden");
                    Toastify({
                        node: successEl,
                        duration: 3000,
                        newWindow: true,
                        close: true,
                        gravity: "top",
                        position: "right",
                        stopOnFocus: true,
                    }).showToast();

                    setCurrentTab('tab_0')
                }
            })
            .catch((error) => {
                console.error("Error:", error.message);
            });
    }

    const onSubmit = async (event: React.ChangeEvent<HTMLFormElement>) => {
        event.preventDefault();
        const result = await trigger();

        if (!result) {
            const failedEl = document
                .querySelectorAll("#failed-notification-content")[0]
                .cloneNode(true) as HTMLElement;
            failedEl.classList.remove("hidden");
            Toastify({
                node: failedEl,
                duration: 3000,
                newWindow: true,
                close: true,
                gravity: "top",
                position: "right",
                stopOnFocus: true,
            }).showToast();
        } else {
            let formData = {
                vName: getValues("vName"),
                contactPerson: getValues("contactPerson"),
                vEmail: getValues("vEmail"),
                vAlternateEmail: getValues("vAlternateEmail"),
                vMobile: getValues("vMobile"),
                vAlternateNo: getValues("vAlternateNo"),
                vPan: getValues("vPan"),
                vGSTNNo: getValues("vGSTNNo"),
                vWhatsapp: getValues("vWhatsapp"),
                vSkype: getValues("vSkype"),
                vAddress: getValues("vAddress"),
                vPincode: getValues("vPincode"),
                cityId: cityId,
                stateId: stateId,
                vMICR: getValues("vMICR"),
                vIFSC: getValues("vIFSC"),
                vACNO: getValues("vACNO"),
                vBranch: getValues("vBranch"),
                vBankName: getValues("vBankName"),
                vAccountName: getValues("vAccountName"),
                gMapLocation: getValues("gMapLocation"),
                vWebsite: getValues("vWebsite"),
                visitFrom: visitFrom,
                isActive: isActive,
                registerAgent: getValues("registerAgent"),
                vType: vendorType,
            };

            const URL = `${server.API_URL}${server.API_ENDPOINT.VENDOR}`;

            await axios
                .post(URL, formData)
                .then((response) => {
                    if (response.data.msg === 'Data Created Succesfully') {
                        reset(formData);

                        setFormRes(response.data.post)

                        const successEl = document
                            .querySelectorAll("#success-notification-content")[0]
                            .cloneNode(true) as HTMLElement;
                        successEl.classList.remove("hidden");
                        Toastify({
                            node: successEl,
                            duration: 3000,
                            newWindow: true,
                            close: true,
                            gravity: "top",
                            position: "right",
                            stopOnFocus: true,
                        }).showToast();

                        setCurrentTab('tab_0')
                    }
                })
                .catch((error) => {
                    console.error("Error:", error.message);
                });
        }
    };

    return (
        <>
            {/* <StickyMenu></StickyMenu> */}
            <div className="bg-white overflow-hidden relative">
                {/* HEADER SECTION */}
                <Header></Header>

                {currentTab === "tab_1" ? (
                    <div style={{ display: "flex", justifyContent: "center", alignItems: 'center', width: '100%' }}>
                        <div className="m-0 p-5" style={{ minHeight: '90vh', width: '80%' }}>
                            <form className="validate-form m-0 p-0" style={{ width: '100%' }} onSubmit={onSubmit}>
                                <div className="col-span-11 intro-y 2xl:col-span-9 m-0 p-0">
                                    {/* BEGIN: Personal Information */}
                                    <div className="intro-y box m-0 p-0">
                                        <div className="p-5 border rounded-md border-slate-200/60 dark:border-darkmode-400">
                                            <div className="flex items-center pb-5 text-base font-medium border-b border-slate-200/60 dark:border-darkmode-400">
                                                {
                                                    personalInfo === true
                                                        ? <Lucide
                                                            icon="ChevronDown"
                                                            className="w-4 h-4 mr-2 cursor-pointer"
                                                            onClick={() => setPersonalInfo(false)}
                                                        />
                                                        : <Lucide
                                                            icon="ChevronUp"
                                                            className="w-4 h-4 mr-2 cursor-pointer"
                                                            onClick={() => setPersonalInfo(true)}
                                                        />
                                                }
                                                {" "}
                                                Personal Information
                                            </div>

                                            {
                                                personalInfo === true
                                                    ? <div className="form-grid-wrapper">
                                                        <div className="form-grid-inner">
                                                            <FormInline className="flex-col items-start pt-5 mt-5 xl:flex-col first:mt-0 first:pt-0">
                                                                <FormLabel className="xl:w-full xl:!mr-10">
                                                                    <div className="form-label">
                                                                        <div className="font-medium">
                                                                            COMPANY / FIRM / HOTEL / OWNER NAME
                                                                        </div>
                                                                        <div className="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md">
                                                                            Required
                                                                        </div>
                                                                    </div>
                                                                    <div className="form-hint-2"></div>
                                                                </FormLabel>
                                                                <div className="flex-1 w-full mt-3 xl:mt-0">
                                                                    <FormInput
                                                                        {...register("vName")}
                                                                        id="vName"
                                                                        type="text"
                                                                        placeholder="COMPANY / FIRM / HOTEL / OWNER NAME"
                                                                    />
                                                                    <FormHelp className="text-right">
                                                                        Maximum character 0/70
                                                                    </FormHelp>
                                                                </div>
                                                            </FormInline>
                                                        </div>
                                                        <div className="form-grid-inner">
                                                            <FormInline className="flex-col items-start pt-5 mt-5 xl:flex-col first:mt-0 first:pt-0">
                                                                <FormLabel className="xl:w-full xl:!mr-10">
                                                                    <div className="form-label">
                                                                        <div className="font-medium">
                                                                            CONTACT
                                                                            PERSON
                                                                        </div>
                                                                        <div className="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md">
                                                                            Required
                                                                        </div>
                                                                    </div>
                                                                    <div className="form-hint-2"></div>
                                                                </FormLabel>
                                                                <div className="flex-1 w-full mt-3 xl:mt-0">
                                                                    <FormInput
                                                                        {...register(
                                                                            "contactPerson"
                                                                        )}
                                                                        id="contactPerson"
                                                                        type="text"
                                                                        placeholder="Contact Person"
                                                                    />
                                                                    <FormHelp className="text-right">
                                                                        Maximum character
                                                                        0/30
                                                                    </FormHelp>
                                                                </div>
                                                            </FormInline>
                                                        </div>
                                                        <div className="form-grid-inner">
                                                            <FormInline className="flex-col items-start pt-5 mt-5 xl:flex-col first:mt-0 first:pt-0">
                                                                <FormLabel className="xl:w-full xl:!mr-10">
                                                                    <div className="form-label">
                                                                        <div className="font-medium">
                                                                            EMAIL
                                                                        </div>
                                                                        <div className="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md">
                                                                            Required
                                                                        </div>
                                                                    </div>
                                                                    <div className="form-hint-2"></div>
                                                                </FormLabel>
                                                                <div className="flex-1 w-full mt-3 xl:mt-0">
                                                                    <FormInput
                                                                        {...register(
                                                                            "vEmail"
                                                                        )}
                                                                        id="vEmail"
                                                                        type="text"
                                                                        placeholder="Email"
                                                                    />
                                                                    <FormHelp className="text-right">
                                                                        Maximum character
                                                                        0/30
                                                                    </FormHelp>
                                                                </div>
                                                            </FormInline>
                                                        </div>
                                                        <div className="form-grid-inner">
                                                            <FormInline className="flex-col items-start pt-5 mt-5 xl:flex-col first:mt-0 first:pt-0">
                                                                <FormLabel className="xl:w-full xl:!mr-10">
                                                                    <div className="form-label">
                                                                        <div className="font-medium">
                                                                            ALTERNATIVE
                                                                            EMAIL
                                                                        </div>
                                                                    </div>
                                                                    <div className="form-hint-2"></div>
                                                                </FormLabel>
                                                                <div className="flex-1 w-full mt-3 xl:mt-0">
                                                                    <FormInput
                                                                        {...register(
                                                                            "vAlternateEmail"
                                                                        )}
                                                                        id="vAlternateEmail"
                                                                        type="text"
                                                                        placeholder="Alternative Email"
                                                                    />
                                                                    <FormHelp className="text-right">
                                                                        Maximum character
                                                                        0/30
                                                                    </FormHelp>
                                                                </div>
                                                            </FormInline>
                                                        </div>
                                                        <div className="form-grid-inner">
                                                            <FormInline className="flex-col items-start pt-5 mt-5 xl:flex-col first:mt-0 first:pt-0">
                                                                <FormLabel className="xl:w-full xl:!mr-10">
                                                                    <div className="form-label">
                                                                        <div className="font-medium">
                                                                            MOBILE NO
                                                                        </div>
                                                                        <div className="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md">
                                                                            Required
                                                                        </div>
                                                                    </div>
                                                                    <div className="form-hint-2"></div>
                                                                </FormLabel>
                                                                <div className="flex-1 w-full mt-3 xl:mt-0">
                                                                    <FormInput
                                                                        {...register(
                                                                            "vMobile"
                                                                        )}
                                                                        id="vMobile"
                                                                        type="text"
                                                                        placeholder="Mobile"
                                                                    />
                                                                    <FormHelp className="text-right">
                                                                        Maximum character
                                                                        0/15
                                                                    </FormHelp>
                                                                </div>
                                                            </FormInline>
                                                        </div>
                                                        <div className="form-grid-inner">
                                                            <FormInline className="flex-col items-start pt-5 mt-5 xl:flex-col first:mt-0 first:pt-0">
                                                                <FormLabel className="xl:w-full xl:!mr-10">
                                                                    <div className="form-label">
                                                                        <div className="font-medium">
                                                                            ALTERNATIVE
                                                                            MOBILE NO
                                                                        </div>
                                                                    </div>
                                                                    <div className="form-hint-2"></div>
                                                                </FormLabel>
                                                                <div className="flex-1 w-full mt-3 xl:mt-0">
                                                                    <FormInput
                                                                        {...register(
                                                                            "vAlternateNo"
                                                                        )}
                                                                        id="vAlternateNo"
                                                                        type="text"
                                                                        placeholder="Alternate No"
                                                                    />
                                                                    <FormHelp className="text-right">
                                                                        Maximum character
                                                                        0/15
                                                                    </FormHelp>
                                                                </div>
                                                            </FormInline>
                                                        </div>
                                                        <div className="form-grid-inner">
                                                            <FormInline className="flex-col items-start pt-5 mt-5 xl:flex-col first:mt-0 first:pt-0">
                                                                <FormLabel className="xl:w-full xl:!mr-10">
                                                                    <div className="form-label">
                                                                        <div className="font-medium">
                                                                            PAN NO
                                                                        </div>
                                                                        <div className="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md">
                                                                            Required
                                                                        </div>
                                                                    </div>
                                                                    <div className="form-hint-2"></div>
                                                                </FormLabel>
                                                                <div className="flex-1 w-full mt-3 xl:mt-0">
                                                                    <FormInput
                                                                        {...register(
                                                                            "vPan"
                                                                        )}
                                                                        id="vPan"
                                                                        type="text"
                                                                        placeholder="Pan Number"
                                                                    />
                                                                    <FormHelp className="text-right">
                                                                        Maximum character
                                                                        0/15
                                                                    </FormHelp>
                                                                </div>
                                                            </FormInline>
                                                        </div>
                                                        <div className="form-grid-inner">
                                                            <FormInline className="flex-col items-start pt-5 mt-5 xl:flex-col first:mt-0 first:pt-0">
                                                                <FormLabel className="xl:w-full xl:!mr-10">
                                                                    <div className="form-label">
                                                                        <div className="font-medium">
                                                                            GSTN NO
                                                                        </div>
                                                                    </div>
                                                                    <div className="form-hint-2"></div>
                                                                </FormLabel>
                                                                <div className="flex-1 w-full mt-3 xl:mt-0">
                                                                    <FormInput
                                                                        {...register(
                                                                            "vGSTNNo"
                                                                        )}
                                                                        id="vGSTNNo"
                                                                        type="text"
                                                                        placeholder="GSTN No"
                                                                    />
                                                                    <FormHelp className="text-right">
                                                                        Maximum character
                                                                        0/15
                                                                    </FormHelp>
                                                                </div>
                                                            </FormInline>
                                                        </div>

                                                        <div className="form-grid-inner">
                                                            <FormInline className="flex-col items-start pt-5 mt-5 xl:flex-col first:mt-0 first:pt-0">
                                                                <FormLabel className="xl:w-full xl:!mr-10">
                                                                    <div className="form-label">
                                                                        <div className="font-medium">
                                                                            WahtsApp No
                                                                        </div>
                                                                    </div>
                                                                    <div className="form-hint-2"></div>
                                                                </FormLabel>
                                                                <div className="flex-1 w-full mt-3 xl:mt-0">
                                                                    <FormInput
                                                                        {...register(
                                                                            "vWhatsapp"
                                                                        )}
                                                                        id="vWhatsapp"
                                                                        type="text"
                                                                        placeholder="WahtsApp No"
                                                                    />
                                                                    <FormHelp className="text-right">
                                                                        Maximum character
                                                                        0/15
                                                                    </FormHelp>
                                                                </div>
                                                            </FormInline>
                                                        </div>
                                                        <div className="form-grid-inner">
                                                            <FormInline className="flex-col items-start pt-5 mt-5 xl:flex-col first:mt-0 first:pt-0">
                                                                <FormLabel className="xl:w-full xl:!mr-10">
                                                                    <div className="form-label">
                                                                        <div className="font-medium">
                                                                            SKYPE
                                                                        </div>
                                                                    </div>
                                                                    <div className="form-hint-2"></div>
                                                                </FormLabel>
                                                                <div className="flex-1 w-full mt-3 xl:mt-0">
                                                                    <FormInput
                                                                        {...register(
                                                                            "vSkype"
                                                                        )}
                                                                        id="vSkype"
                                                                        type="text"
                                                                        placeholder="Skype"
                                                                    />
                                                                    <FormHelp className="text-right">
                                                                        Maximum character
                                                                        0/15
                                                                    </FormHelp>
                                                                </div>
                                                            </FormInline>
                                                        </div>
                                                    </div>
                                                    : null
                                            }
                                        </div>
                                    </div>
                                    {/* END: Personal Information */}

                                    {/* BEGIN: Address and Location */}
                                    <div className="p-5 mt-5 intro-y box">
                                        <div className="p-5 border rounded-md border-slate-200/60 dark:border-darkmode-400">
                                            <div className="flex items-center pb-5 text-base font-medium border-b border-slate-200/60 dark:border-darkmode-400">
                                                {
                                                    addressInfo === true
                                                        ? <Lucide
                                                            icon="ChevronDown"
                                                            className="w-4 h-4 mr-2 cursor-pointer"
                                                            onClick={() => setAddressInfo(false)}
                                                        />
                                                        : <Lucide
                                                            icon="ChevronUp"
                                                            className="w-4 h-4 mr-2 cursor-pointer"
                                                            onClick={() => setAddressInfo(true)}
                                                        />
                                                }
                                                {" "}
                                                Address and Location
                                            </div>

                                            {
                                                addressInfo === true
                                                    ? <div className="form-grid-wrapper">
                                                        <div className="form-grid-inner">
                                                            <FormInline className="flex-col items-start pt-5 mt-5 xl:flex-col first:mt-0 first:pt-0">
                                                                <FormLabel className="xl:w-64 xl:!mr-10">
                                                                    <div className="form-label">
                                                                        <div className="font-medium">
                                                                            STATE
                                                                        </div>
                                                                        <div className="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md">
                                                                            Required
                                                                        </div>
                                                                    </div>
                                                                    <div className="form-hint-2"></div>
                                                                </FormLabel>
                                                                <div className="flex-1 w-full mt-3 xl:mt-0">
                                                                    <FormSelect
                                                                        {...register(
                                                                            "stateId"
                                                                        )}
                                                                        onChange={(e) =>
                                                                            setstateId(
                                                                                e.target
                                                                                    .value
                                                                            )
                                                                        }
                                                                        id="stateId"
                                                                        placeholder="State"
                                                                    >
                                                                        <option value="">Select State</option>
                                                                        {
                                                                            allStates.map((C) => {
                                                                                return (
                                                                                    <option value={C.id}>{C.stateName}</option>
                                                                                )
                                                                            })
                                                                        }
                                                                    </FormSelect>
                                                                </div>
                                                            </FormInline>
                                                        </div>
                                                        <div className="form-grid-inner">
                                                            <FormInline className="flex-col items-start pt-5 mt-5 xl:flex-col first:mt-0 first:pt-0">
                                                                <FormLabel className="xl:w-64 xl:!mr-10">
                                                                    <div className="form-label">
                                                                        <div className="font-medium">
                                                                            CITY
                                                                        </div>
                                                                        <div className="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md">
                                                                            Required
                                                                        </div>
                                                                    </div>
                                                                    <div className="form-hint-2"></div>
                                                                </FormLabel>
                                                                <div className="flex-1 w-full mt-3 xl:mt-0">
                                                                    <FormSelect
                                                                        {...register(
                                                                            "cityId"
                                                                        )}
                                                                        value={cityId}
                                                                        onChange={(e) =>
                                                                            setcityId(
                                                                                e.target
                                                                                    .value
                                                                            )
                                                                        }
                                                                        id="cityId"
                                                                        placeholder="City"
                                                                    >
                                                                        <option value="">Select City</option>
                                                                        {
                                                                            allCities.map((C) => {
                                                                                return (
                                                                                    <option value={C['id']}>{C['cityName']}</option>
                                                                                )
                                                                            })
                                                                        }
                                                                    </FormSelect>
                                                                </div>
                                                            </FormInline>
                                                        </div>
                                                        <div className="form-grid-inner">
                                                            <FormInline className="flex-col items-start pt-5 mt-5 xl:flex-col first:mt-0 first:pt-0">
                                                                <FormLabel className="xl:w-64 xl:!mr-10">
                                                                    <div className="text-left">
                                                                        <div className="form-label">
                                                                            <div className="font-medium">
                                                                                PINCODE
                                                                            </div>
                                                                            <div className="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md">
                                                                                Required
                                                                            </div>
                                                                        </div>
                                                                        <div className="form-hint-2"></div>
                                                                    </div>
                                                                </FormLabel>
                                                                <div className="flex-1 w-full mt-3 xl:mt-0">
                                                                    <FormInput
                                                                        {...register(
                                                                            "vPincode"
                                                                        )}
                                                                        id="vPincode"
                                                                        type="text"
                                                                        placeholder="Pincode"
                                                                    />
                                                                    <FormHelp className="text-right">
                                                                        Maximum character
                                                                        0/15
                                                                    </FormHelp>
                                                                </div>
                                                            </FormInline>
                                                        </div>
                                                        <div className="form-grid-inner">
                                                            <FormInline className="flex-col items-start pt-5 mt-5 xl:flex-col first:mt-0 first:pt-0">
                                                                <FormLabel className="xl:w-full xl:!mr-10">
                                                                    <div className="form-label">
                                                                        <div className="font-medium">
                                                                            Address
                                                                        </div>
                                                                        <div className="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md">
                                                                            Required
                                                                        </div>
                                                                    </div>
                                                                    <div className="form-hint-2"></div>
                                                                </FormLabel>
                                                                <div className="flex-1 w-full mt-3 xl:mt-0">
                                                                    <FormTextarea
                                                                        {...register(
                                                                            "vAddress"
                                                                        )}
                                                                        rows="5"
                                                                        id="vAddress"
                                                                        placeholder="Address"
                                                                    />
                                                                    <FormHelp className="text-right">
                                                                        Maximum character
                                                                        0/200
                                                                    </FormHelp>
                                                                </div>
                                                            </FormInline>
                                                        </div>
                                                        <div className="form-grid-inner">
                                                            <FormInline className="flex-col items-start pt-5 mt-5 xl:flex-col first:mt-0 first:pt-0">
                                                                <FormLabel className="xl:w-64 xl:!mr-10">
                                                                    <div className="form-label">
                                                                        <div className="font-medium">
                                                                            WEBSITE
                                                                        </div>
                                                                    </div>
                                                                    <div className="form-hint-2"></div>
                                                                </FormLabel>
                                                                <div className="flex-1 w-full mt-3 xl:mt-0">
                                                                    <FormInput
                                                                        {...register(
                                                                            "vWebsite"
                                                                        )}
                                                                        id="vWebsite"
                                                                        type="text"
                                                                        placeholder="Website Url"
                                                                    />
                                                                    <FormHelp className="text-right">
                                                                        Maximum character
                                                                        0/15
                                                                    </FormHelp>
                                                                </div>
                                                            </FormInline>
                                                        </div>
                                                        <div className="form-grid-inner">
                                                            <FormInline className="flex-col items-start pt-5 mt-5 xl:flex-col first:mt-0 first:pt-0">
                                                                <FormLabel className="xl:w-64 xl:!mr-10">
                                                                    <div className="form-label">
                                                                        <div className="font-medium">
                                                                            LOCATION
                                                                        </div>
                                                                    </div>
                                                                    <div className="form-hint-2"></div>
                                                                </FormLabel>
                                                                <div className="flex-1 w-full mt-3 xl:mt-0">
                                                                    <FormInput
                                                                        {...register(
                                                                            "gMapLocation"
                                                                        )}
                                                                        id="gMapLocation"
                                                                        type="text"
                                                                        placeholder="Longitude and Latitude"
                                                                    />
                                                                    <FormHelp className="text-right">
                                                                        Maximum character
                                                                        0/30
                                                                    </FormHelp>
                                                                </div>
                                                            </FormInline>
                                                        </div>
                                                    </div>
                                                    : null
                                            }
                                        </div>
                                    </div>
                                    {/* END: Address and location */}

                                    {/* BEGIN: Bank Info */}
                                    <div className="p-5 mt-5 intro-y box">
                                        <div className="p-5 border rounded-md border-slate-200/60 dark:border-darkmode-400">
                                            <div className="flex items-center pb-5 text-base font-medium border-b border-slate-200/60 dark:border-darkmode-400">
                                                {
                                                    bankInfo === true
                                                        ? <Lucide
                                                            icon="ChevronDown"
                                                            className="w-4 h-4 mr-2 cursor-pointer"
                                                            onClick={() => setBankInfo(false)}
                                                        />
                                                        : <Lucide
                                                            icon="ChevronUp"
                                                            className="w-4 h-4 mr-2 cursor-pointer"
                                                            onClick={() => setBankInfo(true)}
                                                        />
                                                }
                                                {" "}
                                                Bank Account Information
                                            </div>

                                            {
                                                bankInfo === true
                                                    ? <div className="form-grid-wrapper">
                                                        <div className="form-grid-inner">
                                                            <FormInline className="flex-col items-start pt-5 mt-5 xl:flex-col first:mt-0 first:pt-0">
                                                                <FormLabel className="xl:w-64 xl:!mr-10">
                                                                    <div className="form-label">
                                                                        <div className="font-medium">
                                                                            ACCOUNT NAME
                                                                        </div>
                                                                        <div className="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md">
                                                                            Required
                                                                        </div>
                                                                    </div>
                                                                    <div className="form-hint-2"></div>
                                                                </FormLabel>
                                                                <div className="flex-1 w-full mt-3 xl:mt-0">
                                                                    <FormInput
                                                                        {...register(
                                                                            "vAccountName"
                                                                        )}
                                                                        id="vPincode"
                                                                        type="text"
                                                                        placeholder="Account Name"
                                                                    />
                                                                    <FormHelp className="text-right">
                                                                        Maximum character
                                                                        0/15
                                                                    </FormHelp>
                                                                </div>
                                                            </FormInline>
                                                        </div>

                                                        <div className="form-grid-inner">
                                                            <FormInline className="flex-col items-start pt-5 mt-5 xl:flex-col first:mt-0 first:pt-0">
                                                                <FormLabel className="xl:w-64 xl:!mr-10">
                                                                    <div className="form-label">
                                                                        <div className="font-medium">
                                                                            BANK NAME
                                                                        </div>
                                                                        <div className="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md">
                                                                            Required
                                                                        </div>
                                                                    </div>
                                                                    <div className="form-hint-2"></div>
                                                                </FormLabel>
                                                                <div className="flex-1 w-full mt-3 xl:mt-0">
                                                                    <FormInput
                                                                        {...register(
                                                                            "vBankName"
                                                                        )}
                                                                        id="vWebsite"
                                                                        type="text"
                                                                        placeholder="Bank Name"
                                                                    />
                                                                </div>
                                                            </FormInline>
                                                        </div>

                                                        <div className="form-grid-inner">
                                                            <FormInline className="flex-col items-start pt-5 mt-5 xl:flex-col first:mt-0 first:pt-0">
                                                                <FormLabel className="xl:w-64 xl:!mr-10">
                                                                    <div className="form-label">
                                                                        <div className="font-medium">
                                                                            BRANCH
                                                                        </div>
                                                                        <div className="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md">
                                                                            Required
                                                                        </div>
                                                                    </div>
                                                                    <div className="form-hint-2"></div>
                                                                </FormLabel>
                                                                <div className="flex-1 w-full mt-3 xl:mt-0">
                                                                    <FormInput
                                                                        {...register(
                                                                            "vBranch"
                                                                        )}
                                                                        id="vWebsite"
                                                                        type="text"
                                                                        placeholder="Branch Name"
                                                                    />
                                                                </div>
                                                            </FormInline>
                                                        </div>

                                                        <div className="form-grid-inner">
                                                            <FormInline className="flex-col items-start pt-5 mt-5 xl:flex-col first:mt-0 first:pt-0">
                                                                <FormLabel className="xl:w-64 xl:!mr-10">
                                                                    <div className="form-label">
                                                                        <div className="font-medium">
                                                                            A/C NO
                                                                        </div>
                                                                    </div>
                                                                    <div className="form-hint-2"></div>
                                                                </FormLabel>
                                                                <div className="flex-1 w-full mt-3 xl:mt-0">
                                                                    <FormInput
                                                                        {...register(
                                                                            "vACNO"
                                                                        )}
                                                                        id="vWebsite"
                                                                        type="text"
                                                                        placeholder="Account Number"
                                                                    />
                                                                    <FormHelp className="text-right">
                                                                        Maximum character
                                                                        0/15
                                                                    </FormHelp>
                                                                </div>
                                                            </FormInline>
                                                        </div>

                                                        <div className="form-grid-inner">
                                                            <FormInline className="flex-col items-start pt-5 mt-5 xl:flex-col first:mt-0 first:pt-0">
                                                                <FormLabel className="xl:w-64 xl:!mr-10">
                                                                    <div className="form-label">
                                                                        <div className="font-medium">
                                                                            IFSC- CODE
                                                                        </div>
                                                                    </div>
                                                                    <div className="form-hint-2"></div>
                                                                </FormLabel>
                                                                <div className="flex-1 w-full mt-3 xl:mt-0">
                                                                    <FormInput
                                                                        {...register(
                                                                            "vIFSC"
                                                                        )}
                                                                        id="gMapLocation"
                                                                        type="text"
                                                                        placeholder="IFSC"
                                                                    />
                                                                    <FormHelp className="text-right">
                                                                        Maximum character
                                                                        0/30
                                                                    </FormHelp>
                                                                </div>
                                                            </FormInline>
                                                        </div>

                                                        <div className="form-grid-inner">
                                                            <FormInline className="flex-col items-start pt-5 mt-5 xl:flex-col first:mt-0 first:pt-0">
                                                                <FormLabel className="xl:w-64 xl:!mr-10">
                                                                    <div className="form-label">
                                                                        <div className="font-medium">
                                                                            MICR
                                                                        </div>
                                                                    </div>
                                                                    <div className="form-hint-2"></div>
                                                                </FormLabel>
                                                                <div className="flex-1 w-full mt-3 xl:mt-0">
                                                                    <FormInput
                                                                        {...register(
                                                                            "vMICR"
                                                                        )}
                                                                        id="gMapLocation"
                                                                        type="text"
                                                                        placeholder="MICR"
                                                                    />
                                                                    <FormHelp className="text-right">
                                                                        Maximum character
                                                                        0/30
                                                                    </FormHelp>
                                                                </div>
                                                            </FormInline>
                                                        </div>
                                                    </div>
                                                    : null
                                            }
                                        </div>
                                    </div>

                                    <div className="flex flex-col justify-end gap-2 mt-5 md:flex-row">
                                        <Button
                                            variant="primary"
                                            type="submit"
                                            className="w-full py-3 md:w-52 border-0"
                                            style={{ backgroundColor: '#f97316' }}
                                        >
                                            Save
                                        </Button>
                                        <Link to="/">
                                            <Button
                                                type="button"
                                                className="w-full py-3 border-slate-300 dark:border-darkmode-400 text-slate-500 md:w-52"
                                            >
                                                Cancel
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                ) : (
                    <div style={{ display: "flex", justifyContent: "center", alignItems: 'center', width: '100%' }}>
                        <div className="m-0 p-5" style={{ minHeight: '90vh', width: '80%' }}>

                            {/* BEGIN: Documnet Upload */}
                            <div className="p-5 mt-5 intro-y box">
                                <div className="p-5 border rounded-md border-slate-200/60 dark:border-darkmode-400">
                                    <div className="flex items-center pb-5 text-base font-medium border-b border-slate-200/60 dark:border-darkmode-400">
                                        <Lucide icon="ChevronDown" className="w-4 h-4 mr-2" /> Upload Documents
                                    </div>
                                    <div className="mt-5">
                                        <FormInline className="flex-col items-start pt-2 mt-2 xl:flex-col first:mt-0 first:pt-0">
                                            <FormLabel className="xl:w-64 xl:!mr-10">
                                                <div className="text-left mb-5">
                                                    <div className="flex items-center">
                                                        <div className="font-medium">Upload Pan Card</div>
                                                    </div>
                                                </div>
                                            </FormLabel>
                                            <div className="flex-1 w-full mt-3 xl:mt-0">
                                                <div className="relative py-10 pl-5 pr-5 rounded-md xl:pr-10 bg-slate-50 dark:bg-transparent dark:border">
                                                    <div>
                                                        <div className="mt-5 xl:ml-20 xl:pl-5 xl:pr-20 first:mt-0">
                                                            {/* <Button
                                                                variant="outline-primary"
                                                                className="w-full border-dashed"
                                                            >
                                                                <Lucide icon="Plus" className="w-4 h-4 mr-2" />Upload
                                                            </Button> */}
                                                            <FormInput
                                                                id="choose-files"
                                                                type="file"
                                                                name="choose-files"
                                                                onChange={(e) => {
                                                                    onSubmitDocs(e.target.files[0], 'pan');
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </FormInline>
                                        <FormInline className="flex-col items-start pt-2 mt-2 xl:flex-col first:mt-0 first:pt-0">
                                            <FormLabel className="xl:w-64 xl:!mr-10">
                                                <div className="text-left mb-5">
                                                    <div className="flex items-center">
                                                        <div className="font-medium">Upload Adhar Card Front</div>
                                                    </div>
                                                </div>
                                            </FormLabel>
                                            <div className="flex-1 w-full mt-3 xl:mt-0">
                                                <div className="relative py-10 pl-5 pr-5 rounded-md xl:pr-10 bg-slate-50 dark:bg-transparent dark:border">
                                                    <div>
                                                        <div className="mt-5 xl:ml-20 xl:pl-5 xl:pr-20 first:mt-0">
                                                            {/* <Button
                                                                variant="outline-primary"
                                                                className="w-full border-dashed"
                                                            >
                                                                <Lucide icon="Plus" className="w-4 h-4 mr-2" />Upload
                                                            </Button> */}
                                                            <FormInput
                                                                id="choose-files"
                                                                type="file"
                                                                name="choose-files"
                                                                onChange={(e) => {
                                                                    onSubmitDocs(e.target.files[0], 'aadhaarF');
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </FormInline>
                                        <FormInline className="flex-col items-start pt-2 mt-2 xl:flex-col first:mt-0 first:pt-0">
                                            <FormLabel className="xl:w-64 xl:!mr-10">
                                                <div className="text-left mb-5">
                                                    <div className="flex items-center">
                                                        <div className="font-medium">Upload Adhar Card Back</div>
                                                    </div>
                                                </div>
                                            </FormLabel>
                                            <div className="flex-1 w-full mt-3 xl:mt-0">
                                                <div className="relative py-10 pl-5 pr-5 rounded-md xl:pr-10 bg-slate-50 dark:bg-transparent dark:border">
                                                    <div>
                                                        <div className="mt-5 xl:ml-20 xl:pl-5 xl:pr-20 first:mt-0">
                                                            {/* <Button
                                                                variant="outline-primary"
                                                                className="w-full border-dashed"
                                                            >
                                                                <Lucide icon="Plus" className="w-4 h-4 mr-2" />Upload
                                                            </Button> */}
                                                            <FormInput
                                                                id="choose-files"
                                                                type="file"
                                                                name="choose-files"
                                                                onChange={(e) => {
                                                                    onSubmitDocs(e.target.files[0], 'aadhaarB');
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </FormInline>
                                        <FormInline className="flex-col items-start pt-2 mt-2 xl:flex-col first:mt-0 first:pt-0">
                                            <FormLabel className="xl:w-64 xl:!mr-10">
                                                <div className="text-left mb-5">
                                                    <div className="flex items-center">
                                                        <div className="font-medium">Upload Cancel Cheque</div>
                                                    </div>
                                                </div>
                                            </FormLabel>
                                            <div className="flex-1 w-full mt-3 xl:mt-0">
                                                <div className="relative py-10 pl-5 pr-5 rounded-md xl:pr-10 bg-slate-50 dark:bg-transparent dark:border">
                                                    <div>
                                                        <div className="mt-5 xl:ml-20 xl:pl-5 xl:pr-20 first:mt-0">
                                                            {/* <Button
                                                                variant="outline-primary"
                                                                className="w-full border-dashed"
                                                            >
                                                                <Lucide icon="Plus" className="w-4 h-4 mr-2" />Upload
                                                            </Button> */}
                                                            <FormInput
                                                                id="choose-files"
                                                                type="file"
                                                                name="choose-files"
                                                                onChange={(e) => {
                                                                    onSubmitDocs(e.target.files[0], 'cancelC');
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </FormInline>
                                        <FormInline className="flex-col items-start pt-2 mt-2 xl:flex-col first:mt-0 first:pt-0">
                                            <FormLabel className="xl:w-64 xl:!mr-10">
                                                <div className="text-left mb-5">
                                                    <div className="flex items-center">
                                                        <div className="font-medium">Upload Bank Statement</div>
                                                    </div>
                                                </div>
                                            </FormLabel>
                                            <div className="flex-1 w-full mt-3 xl:mt-0">
                                                <div className="relative py-10 pl-5 pr-5 rounded-md xl:pr-10 bg-slate-50 dark:bg-transparent dark:border">
                                                    <div>
                                                        <div className="mt-5 xl:ml-20 xl:pl-5 xl:pr-20 first:mt-0">
                                                            {/* <Button
                                                                variant="outline-primary"
                                                                className="w-full border-dashed"
                                                            >
                                                                <Lucide icon="Plus" className="w-4 h-4 mr-2" />Upload
                                                            </Button> */}
                                                            <FormInput
                                                                id="choose-files"
                                                                type="file"
                                                                name="choose-files"
                                                                onChange={(e) => {
                                                                    onSubmitDocs(e.target.files[0], 'bankStat');
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </FormInline>
                                        <FormInline className="flex-col items-start pt-2 mt-2 xl:flex-col first:mt-0 first:pt-0">
                                            <FormLabel className="xl:w-64 xl:!mr-10">
                                                <div className="text-left mb-5">
                                                    <div className="flex items-center">
                                                        <div className="font-medium">Upload GST</div>
                                                    </div>
                                                </div>
                                            </FormLabel>
                                            <div className="flex-1 w-full mt-3 xl:mt-0">
                                                <div className="relative py-10 pl-5 pr-5 rounded-md xl:pr-10 bg-slate-50 dark:bg-transparent dark:border">
                                                    <div>
                                                        <div className="mt-5 xl:ml-20 xl:pl-5 xl:pr-20 first:mt-0">
                                                            {/* <Button
                                                                variant="outline-primary"
                                                                className="w-full border-dashed"
                                                            >
                                                                <Lucide icon="Plus" className="w-4 h-4 mr-2" />Upload
                                                            </Button> */}
                                                            <FormInput
                                                                id="choose-files"
                                                                type="file"
                                                                name="choose-files"
                                                                onChange={(e) => {
                                                                    onSubmitDocs(e.target.files[0], 'gstn');
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </FormInline>
                                        <FormInline className="flex-col items-start pt-2 mt-2 xl:flex-col first:mt-0 first:pt-0">
                                            <FormLabel className="xl:w-64 xl:!mr-10">
                                                <div className="text-left mb-5">
                                                    <div className="flex items-center">
                                                        <div className="font-medium">Upload Trading License</div>
                                                    </div>
                                                </div>
                                            </FormLabel>
                                            <div className="flex-1 w-full mt-3 xl:mt-0">
                                                <div className="relative py-10 pl-5 pr-5 rounded-md xl:pr-10 bg-slate-50 dark:bg-transparent dark:border">
                                                    <div>
                                                        <div className="mt-5 xl:ml-20 xl:pl-5 xl:pr-20 first:mt-0">
                                                            {/* <Button
                                                                variant="outline-primary"
                                                                className="w-full border-dashed"
                                                            >
                                                                <Lucide icon="Plus" className="w-4 h-4 mr-2" />Upload
                                                            </Button> */}
                                                            <FormInput
                                                                id="choose-files"
                                                                type="file"
                                                                name="choose-files"
                                                                onChange={(e) => {
                                                                    onSubmitDocs(e.target.files[0], 'tradeL');
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </FormInline>
                                        <FormInline className="flex-col items-start pt-2 mt-2 xl:flex-col first:mt-0 first:pt-0">
                                            <FormLabel className="xl:w-64 xl:!mr-10">
                                                <div className="text-left mb-5">
                                                    <div className="flex items-center">
                                                        <div className="font-medium">Upload Office Picture</div>
                                                    </div>
                                                </div>
                                            </FormLabel>
                                            <div className="flex-1 w-full mt-3 xl:mt-0">
                                                <div className="relative py-10 pl-5 pr-5 rounded-md xl:pr-10 bg-slate-50 dark:bg-transparent dark:border">
                                                    <div>
                                                        <div className="mt-5 xl:ml-20 xl:pl-5 xl:pr-20 first:mt-0">
                                                            {/* <Button
                                                                variant="outline-primary"
                                                                className="w-full border-dashed"
                                                            >
                                                                <Lucide icon="Plus" className="w-4 h-4 mr-2" />Upload
                                                            </Button> */}
                                                            <FormInput
                                                                id="choose-files"
                                                                type="file"
                                                                name="choose-files"
                                                                onChange={(e) => {
                                                                    onSubmitDocs(e.target.files[0], 'officeP');
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </FormInline>
                                    </div>
                                </div>
                            </div>
                            {/* END:  Documnet Upload */}

                            <div className="flex flex-col justify-end gap-2 mt-5 md:flex-row">
                                <Link to="/">
                                    <Button
                                        variant="primary"
                                        type="submit"
                                        className="w-full py-3 md:w-52 border-0"
                                        style={{ backgroundColor: '#f97316' }}
                                    >
                                        Done
                                    </Button>
                                </Link>
                                <Link to="/">
                                    <Button
                                        type="button"
                                        className="w-full py-3 border-slate-300 dark:border-darkmode-400 text-slate-500 md:w-52"
                                    >
                                        Upload Later
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                )}

                {/* BEGIN: Success Notification Content */}
                <Notification
                    id="success-notification-content"
                    className="flex hidden"
                >
                    <Lucide
                        icon="CheckCircle"
                        className="text-success"
                    />
                    <div className="ml-4 mr-4">
                        <div className="font-medium">
                            Data updated successfully!
                        </div>
                    </div>
                </Notification>
                {/* END: Success Notification Content */}
                {/* BEGIN: Failed Notification Content */}
                <Notification
                    id="failed-notification-content"
                    className="flex hidden"
                >
                    <Lucide icon="XCircle" className="text-danger" />
                    <div className="ml-4 mr-4">
                        <div className="font-medium">
                            Data updation failed!
                        </div>
                        <div className="mt-1 text-slate-500">
                            Please check the fileld form.
                        </div>
                    </div>
                </Notification>
                {/* END: Failed Notification Content */}

                {/* FOOTER SECTION */}
                <Footer></Footer>
            </div>
        </>
    );
}

export default Main;
