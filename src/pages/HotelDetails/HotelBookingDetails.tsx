// @ts-nocheck
import { motion } from "framer-motion";
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

import { FormSelect } from "../../base-components/Form";

import TinySlider, {
  TinySliderElement,
} from "../../base-components/TinySlider";

//===========FrontEnd Componenets=======================

import Header from "../../frontend-components/layout/header";
import StickyMenu from "../../frontend-components/layout/stickyMenu";
import Footer from "../../frontend-components/layout/footer";
import server from "../../../apiconfig.json";
import {
  FaDoorOpen,
  FaSwimmingPool,
  FaCalendarCheck,
  FaParking,
} from "react-icons/fa";
import { FaSchool, FaBriefcase, FaStar, FaHeart } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { ImSpoonKnife } from "react-icons/im";
import { PiSecurityCameraFill } from "react-icons/pi";
import { FaWifi } from "react-icons/fa6";
import { RiHomeGearFill } from "react-icons/ri";
import { MdOutlinePets } from "react-icons/md";
import { BsTvFill } from "react-icons/bs";
import { RiAlarmWarningFill } from "react-icons/ri";
import { GiRingingAlarm } from "react-icons/gi";
import { FaCircle } from "react-icons/fa";
import { Search } from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { RiCustomSize } from "react-icons/ri";
import { RiGalleryView } from "react-icons/ri";
import { FaShower } from "react-icons/fa6";
import { FaBed } from "react-icons/fa6";
import { FaInfoCircle } from "react-icons/fa";

//===========FrontEnd Componenets End====================

const marginTopMinus = {
  top: -9,
};
const marginArrowStyle = {
  right: -25,
  top: 20,
};

import "photoswipe/dist/photoswipe.css";

import { Gallery, Item } from "react-photoswipe-gallery";

import DayPlan from "../../elements/dayPlan";
import Pax from "../../elements/pax";

import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";

// Gallery Functioning::start

// import React, { useState, useEffect } from "react";

const images = [
  "https://cdn.photoswipe.com/photoswipe-demo-images/photos/home-demo/luca-bravo-ny6qxqv_m04-unsplash_snrzpf/luca-bravo-ny6qxqv_m04-unsplash_snrzpf_c_scale,w_2500.jpg",
  "https://cdn.photoswipe.com/photoswipe-demo-images/photos/home-demo/luca-bravo-O453M2Liufs-unsplash_qqt53u/luca-bravo-O453M2Liufs-unsplash_qqt53u_c_scale,w_2500.jpg",
  "https://cdn.photoswipe.com/photoswipe-demo-images/photos/home-demo/luca-bravo-VowIFDxogG4-unsplash_ibrktu/luca-bravo-VowIFDxogG4-unsplash_ibrktu_c_scale,w_2500.jpg",
  "https://cdn.photoswipe.com/photoswipe-demo-images/photos/home-demo/luca-bravo-zAjdgNXsMeg-unsplash_q6zdih/luca-bravo-zAjdgNXsMeg-unsplash_q6zdih_c_scale,w_2500.jpg",
  "https://cdn.photoswipe.com/photoswipe-demo-images/photos/home-demo/luca-bravo-A-fubu9QJxE-unsplash_jxy5p8/luca-bravo-A-fubu9QJxE-unsplash_jxy5p8_c_scale,w_2500.jpg",
  "https://a0.muscache.com/im/pictures/hosting/Hosting-1346147961467201760/original/1720e6f6-3b97-4e60-960f-c3684f1bdb7f.jpeg?im_w=1200",
];

// Compare cards :: start
const hotels = [
  {
    id: 1,
    name: "Hotel Grand Palace",
    price: "₹3,499",
    rating: 4.5,
    img: "https://cdn.photoswipe.com/photoswipe-demo-images/photos/home-demo/luca-bravo-O453M2Liufs-unsplash_qqt53u/luca-bravo-O453M2Liufs-unsplash_qqt53u_c_scale,w_2500.jpg",
  },
  {
    id: 2,
    name: "Sea View Resort",
    price: "₹4,200",
    rating: 4.2,
    img: "https://cdn.photoswipe.com/photoswipe-demo-images/photos/home-demo/luca-bravo-VowIFDxogG4-unsplash_ibrktu/luca-bravo-VowIFDxogG4-unsplash_ibrktu_c_scale,w_2500.jpg",
  },
  {
    id: 3,
    name: "Mountain Retreat",
    price: "₹2,999",
    rating: 4.7,
    img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    name: "City Lights Inn",
    price: "₹3,800",
    rating: 4.0,
    img: "https://images.unsplash.com/photo-1539634262233-7c0b48ab9503?q=80&w=1125&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    name: "Lakeview Lodge",
    price: "₹5,100",
    rating: 4.8,
    img: "https://images.unsplash.com/photo-1552083375-1447ce886485?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    name: "Sunset Paradise Hotel",
    price: "₹4,899",
    rating: 4.6,
    img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 7,
    name: "Royal Orchid Stay",
    price: "₹6,250",
    rating: 4.9,
    img: "https://images.unsplash.com/photo-1470115636492-6d2b56f9146d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 8,
    name: "Palm Springs Resort",
    price: "₹4,050",
    rating: 4.3,
    img: "https://plus.unsplash.com/premium_photo-1690576837112-f897ce619358?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 9,
    name: "Blue Lagoon Hotel",
    price: "₹5,499",
    rating: 4.7,
    img: "https://images.unsplash.com/photo-1489171078254-c3365d6e359f?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 10,
    name: "Green Valley Inn",
    price: "₹3,250",
    rating: 4.4,
    img: "https://images.unsplash.com/photo-1679809092618-ac2acee080d1?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

// Compare cards :: end

const HotelBookingDetails = () => {
  // Breadcrumb :: start
  const CUST_ID = 1234;
  const [changesMade, setChangesMade] = useState(0);
  const navigate = useNavigate();

  const API = server.API_URL;
  const imgPath = server.FILE_PATH;
  const params = useParams();
  const id = params.id;
  console.log({ id });
  const [isLoading, setisLoading] = useState(true);
  const [date, setDate] = useState("");
  const [daterange, setDaterange] = useState("");
  const [datepickerModalPreview, setDatepickerModalPreview] = useState(false);
  const cancelButtonRef = useRef(null);

  // Breadcrumb :: end

  // Search Destination Input form  :: start
  const [showDropdown, setShowDropdown] = useState(false);
  const [selected, setSelected] = useState("");
  const [search, setSearch] = useState("");
  const wrapperRef = useRef(null);

  const destination = [
    "Nearby",
    "Kolkata, West Bengal",
    "New Delhi, Delhi",
    "North Goa, Goa",
    "Darjeeling, West Bengal",
    "Jaipur, Rajasthan",
    "Noida, Uttar Pradesh",
  ];

  const filteredDestination = destination.filter((city) =>
    city.toLowerCase().includes(search.toLowerCase())
  );

  const handleSelect = (city) => {
    setSelected(city);
    setShowDropdown(false);
  };

  // Close dropdown when clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Search Destination Input form  :: end

  const [isMobile, setIsMobile] = useState(false);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  // Mobile functionality :: end

  //   Service informaiton details :: start
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [guests, setGuests] = useState({
    adults: 1,
    children: 0,
    infants: 0,
    pets: 0,
  });

  const increment = (key) => {
    if (guests[key] < 5) {
      setGuests({ ...guests, [key]: guests[key] + 1 });
    }
  };

  const decrement = (key) => {
    if (guests[key] > 0) {
      setGuests({ ...guests, [key]: guests[key] - 1 });
    }
  };
  //   Service informaiton details :: end

  // Show Modal :: start :: Amenities modal
  const [showModal, setShowModal] = useState(false);

  const handleClickOutside = (e) => {
    if (e.target.id === "overlay") {
      setShowModal(false);
    }
  };

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showModal]);
  // Show Modal :: end :: Amenities modal

  // Show Modal :: start :: Review-rating modal
  const [rateModal, setRateModal] = useState(false);

  const rateClickOutside = (e) => {
    if (e.target.id === "outside") {
      setRateModal(false);
    }
  };

  useEffect(() => {
    if (rateModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [rateModal]);
  // Show Modal :: end :: Review-rating modal

  // INCLUSIONS Modal :: start :: Review-rating modal
  const [inclusionModal, setInclusionModal] = useState(false);

  const inclusionClickOutside = (e) => {
    if (e.target.id === "outside1") {
      setInclusionModal(false);
    }
  };

  useEffect(() => {
    if (inclusionModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [inclusionModal]);
  // INCLUSIONS Modal :: end :: Review-rating modal

  // EXCLUSIONS Modal :: start :: Review-rating modal
  const [exclusionModal, setExclusionModal] = useState(false);

  const exclusionClickOutside = (e) => {
    if (e.target.id === "outside2") {
      setExclusionModal(false);
    }
  };

  useEffect(() => {
    if (exclusionModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [exclusionModal]);
  // EXCLUSIONS Modal :: end :: Review-rating modal

  // CANCELLATION Modal :: start :: Review-rating modal
  const [cancellationModal, setCancellationModal] = useState(false);

  const cancellationClickOutside = (e) => {
    if (e.target.id === "outside3") {
      setCancellationModal(false);
    }
  };

  useEffect(() => {
    if (cancellationModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [cancellationModal]);
  // CANCELLATION Modal :: end :: Review-rating modal

  // Rating Form :: start

  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [reviews, setReviews] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (rating && name && comment) {
      const newReview = {
        rating,
        name,
        comment,
      };
      setReviews([newReview, ...reviews]);
      setRating(0);
      setName("");
      setComment("");
    }
  };

  // Rating Form :: end

  // Show more description :: start
  const [isExpanded, setIsExpanded] = useState(false);
  const fullText = `About this space Gangtok is the capital of the state of Sikkim. It takes about 4.5 hours to reach one place from the other by Car or Bus. Today, travelers embarking on a journey of Sikkim discover a mystical wonderland of spectacular natural beauty. For all adventure-seekers, Sikkim would definitely be nothing less than paradise for you. Sikkim shares its border with Nepal in the west and Bhutan in the east, with the Tibetan plateau rising from its northern border. It was once a Himalayan monarchy and part of the fabled Silk Route to China . Buddhist monasteries, trekking trails and mountain views of Darjeeling will surely mesmerize you. Organic, Green and Pollution Free State . Checkout our best rates and much more at pocket-friendly prices for Sikkim tour packages . The space Discover a haven of simple elegance. This brand 3500 sq.ft offers a serene escape with thoughtfully curated details, creating a space that is both stylish and effortlessly comfortable. Experience refined living in the heart of Sikkim. The scenery from the balconies includes a stunning view of the valley and Kitchen Gardens with home grown organic vegetables and trees to accentuate your peaceful stay. From Traditional "Thangkas" to genuine Oil Paintings by a local experienced painter to Vintage Handmade carpets. We are all about creating a feel for our customers. You won't find a better value for your stay. Guest access Entire apartment is accessible by guests. Other things to note Booking is really recommended if your requirement is for a serviced hotel with as close to hotel like feeling. We got you covered.`;

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };
  // Show more description :: end

  // Compare Cards :: start
  const [popup, setPopup] = useState(null);
  const scrollRef = useRef(null);

  // Close popup when clicking outside
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (popup && !e.target.closest(".popup-content")) {
        setPopup(null);
      }
    };
    window.addEventListener("click", handleOutsideClick);
    return () => window.removeEventListener("click", handleOutsideClick);
  }, [popup]);

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: dir === "left" ? -250 : 250,
        behavior: "smooth",
      });
    }
  };

  // Compare Cards :: end

  // Travellor form :: start
  // Static sample travellers
  const [travellers, setTravellers] = useState([
    { fname: "John", lname: "Doe", gender: "Male", dob: "1990-01-01" },
    { fname: "Jane", lname: "Smith", gender: "Female", dob: "1992-05-12" },
  ]);

  // Popup state
  const [showPopup, setShowPopup] = useState(false);

  // New traveller form data
  const [newTraveller, setNewTraveller] = useState({
    fname: "",
    lname: "",
    gender: "",
    dob: "",
  });

  // Remove traveller
  const removeTraveller = (index) => {
    const updated = [...travellers];
    updated.splice(index, 1);
    setTravellers(updated);
  };

  // Add new traveller
  const addTraveller = () => {
    if (newTraveller.fname && newTraveller.lname) {
      setTravellers([...travellers, newTraveller]);
      setNewTraveller({ fname: "", lname: "", gender: "", dob: "" });
      setShowPopup(false);
    }
  };
  // Travellor form :: end

  return (
    <>
      {/* HEADER SECTION TWO */}
      <StickyMenu></StickyMenu>

      <div className="bg-white overflow-hidden">
        {/* HEADER SECTION */}
        <Header></Header>

        {/* Service Information Details :: start */}
        <div className="container sm:mt-6 px-4 md:px-4 py-3">
          <div className="flex flex-col mb-4 lg:flex-row gap-6 p-4 shadow-xl rounded-lg border">
            {/* Left Content */}
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row justify-between items-start gap-3 border-b pb-4">
                <div className="left">
                  <h2 className="text-xl sm:text-2xl font-semibold">
                    Elements by Rosetta
                  </h2>
                  <div className="flex items-center space-x-1 my-2 sm:my-3">
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                  </div>
                  <p className="text-gray-600 text-[12px] sm:text-[14px] leading-[13px] sm:leading-[16px] ">
                    H NO.474/B BLOCK A, LANGOTTEM, SALCETE, NEAR VARCA GLORIA
                    CHURCH, VARCA, SOUTH GOA
                  </p>
                </div>
                <div className="right">
                  <img
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Host"
                    className="w-[100px] h-[100px] rounded-sm object-cover"
                  />
                </div>
              </div>

              {/* Search Bar:: start */}
              <div className="flex flex-col md:flex-row justify-between border-b">
                {/* Check In */}
                <div className="p-4 flex-1 border-b md:border-b-0 md:border-r">
                  <p className="text-sm">CHECK IN</p>
                  <p className="text-lg font-bold">
                    Sat <span className="text-black">16 Aug</span> 2025
                  </p>
                  <p className="text-sm text-gray-500">2:30 PM</p>
                </div>

                {/* Night Count */}
                <div className="p-4 flex items-center justify-center border-b md:border-b-0 md:border-r bg-gray-100">
                  <span className="px-3 py-1 text-xs font-semibold rounded-full bg-gray-200">
                    1 NIGHT
                  </span>
                </div>

                {/* Check Out */}
                <div className="p-4 flex-1 border-b md:border-b-0 md:border-r">
                  <p className="text-sm">CHECK OUT</p>
                  <p className="text-lg font-bold">
                    Sun <span className="text-black">17 Aug</span> 2025
                  </p>
                  <p className="text-sm text-gray-500">11:30 AM</p>
                </div>

                {/* Guest Info */}
                <div className="p-4 flex items-center justify-center">
                  <p className="text-sm font-semibold">
                    1 Night | 2 Adults | 1 Room
                  </p>
                </div>
              </div>
              {/* Search Bar:: end */}

              {/* Room Card Details: start */}
              <div className="w-full max-w-6xl mx-auto mt-6">
                {/* Hotel-Deluxe  */}
                <div className="grid grid-cols-1 my-4  md:grid-cols-3 border rounded-md ">
                  {/* Card A */}
                  <div className=" p-4">
                    <img
                      src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="Host"
                      className="w-full h-full rounded-sm object-cover"
                    />
                  </div>

                  {/* Card B */}
                  <div className="border-x px-4 sm:p-4 ">
                    <h2 className="text-lg font-bold">Robusta Deluxe</h2>
                    <p className="text-sm text-gray-500 mt-1">2 Adults</p>

                    {/* Inclusions */}
                    <ul className="mt-3 space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        🍽 Room with Breakfast
                      </li>
                      <li className="flex items-center gap-2">
                        💆 Complimentary 1 session of 15 mins couple's Massage
                      </li>
                      <li className="flex items-center gap-2">
                        ☕ Complimentary Hi-Tea
                      </li>
                      <li className="flex items-center gap-2">
                        💰 20% off on session of Spa
                      </li>
                    </ul>
                  </div>

                  {/* Card C */}
                  <div className=" p-4">
                    <h3 className="text-sm font-bold">Non-Refundable</h3>
                    <p className="text-xs text-gray-500">
                      Refund is not applicable for this booking
                    </p>
                    <a
                      href="#"
                      className="text-blue-500 text-xs font-semibold hover:underline"
                    >
                      Cancellation policy details
                    </a>
                  </div>
                </div>
                {/* Hotel-Premium  */}
                <div className="grid grid-cols-1 my-4  md:grid-cols-3 border rounded-md ">
                  {/* Card A */}
                  <div className=" p-4">
                    <img
                      src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="Host"
                      className="w-full h-full rounded-sm object-cover"
                    />
                  </div>

                  {/* Card B */}
                  <div className="border-x px-4 sm:p-4 ">
                    <h2 className="text-lg font-bold">Robusta Premium</h2>
                    <p className="text-sm text-gray-500 mt-1">2 Adults</p>

                    {/* Inclusions */}
                    <ul className="mt-3 space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        🍽 Room with Breakfast
                      </li>
                      <li className="flex items-center gap-2">
                        💆 Complimentary 1 session of 15 mins couple's Massage
                      </li>
                      <li className="flex items-center gap-2">
                        ☕ Complimentary Hi-Tea
                      </li>
                      <li className="flex items-center gap-2">
                        💰 20% off on session of Spa
                      </li>
                    </ul>
                  </div>

                  {/* Card C */}
                  <div className=" p-4">
                    <h3 className="text-sm font-bold">Non-Refundable</h3>
                    <p className="text-xs text-gray-500">
                      Refund is not applicable for this booking
                    </p>
                    <a
                      href="#"
                      className="text-blue-500 text-xs font-semibold hover:underline"
                    >
                      Cancellation policy details
                    </a>
                  </div>
                </div>
              </div>
              {/* Room Card Details: end */}

              {/* Travellor Details Form with popup :: start */}
              <div className="container mx-auto p-4 sm:p-6">
                {/* Travellers Section */}
                <h2 className="text-lg sm:text-xl font-bold text-black">
                  {travellers.length} Travellers
                </h2>

                <div className="pb-3 mt-4">
                  {travellers.map((t, idx) => (
                    <div
                      key={idx}
                      className="shadow-md rounded-lg p-4 my-2 border border-slate-200 text-sm sm:text-base"
                    >
                      <span className="font-semibold">
                        {t.fname} {t.lname}
                      </span>
                      <br />
                      <span>{t.gender}</span>
                      <br />
                      <span className="font-semibold">D.O.B:</span>{" "}
                      <span>{t.dob}</span>
                      <br />
                      <button
                        onClick={() => removeTraveller(idx)}
                        className="text-orange-500 text-xs sm:text-sm mt-2"
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                </div>

                {/* Add Traveller Button */}
                <div className="bg-orange-50 py-3 px-4 flex items-center cursor-pointer hover:bg-orange-100 rounded-md">
                  <span
                    onClick={() => setShowPopup(true)}
                    className="text-base sm:text-lg text-black font-medium"
                  >
                    + Add Traveller{" "}
                    <span className="text-orange-500 text-xs">
                      Traveller {travellers.length + 1}
                    </span>
                  </span>
                </div>

                {/* Popup Modal */}
                {showPopup && (
                  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50 p-2">
                    <div className="bg-white p-6 rounded-lg w-full max-w-md sm:w-96 shadow-lg">
                      <h3 className="text-lg sm:text-xl font-bold mb-4">
                        Add Traveller
                      </h3>

                      <input
                        type="text"
                        placeholder="First Name"
                        value={newTraveller.fname}
                        onChange={(e) =>
                          setNewTraveller({
                            ...newTraveller,
                            fname: e.target.value,
                          })
                        }
                        className="w-full border p-2 mb-2 rounded text-sm sm:text-base"
                      />
                      <input
                        type="text"
                        placeholder="Last Name"
                        value={newTraveller.lname}
                        onChange={(e) =>
                          setNewTraveller({
                            ...newTraveller,
                            lname: e.target.value,
                          })
                        }
                        className="w-full border p-2 mb-2 rounded text-sm sm:text-base"
                      />
                      <select
                        value={newTraveller.gender}
                        onChange={(e) =>
                          setNewTraveller({
                            ...newTraveller,
                            gender: e.target.value,
                          })
                        }
                        className="w-full border p-2 mb-2 rounded text-sm sm:text-base"
                      >
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                      </select>
                      <input
                        type="date"
                        value={newTraveller.dob}
                        onChange={(e) =>
                          setNewTraveller({
                            ...newTraveller,
                            dob: e.target.value,
                          })
                        }
                        className="w-full border p-2 mb-2 rounded text-sm sm:text-base"
                      />

                      <div className="flex justify-end gap-3 mt-4">
                        <button
                          onClick={() => setShowPopup(false)}
                          className="px-3 sm:px-4 py-2 border rounded text-gray-600 hover:bg-gray-100 text-sm sm:text-base"
                        >
                          Close
                        </button>
                        <button
                          onClick={addTraveller}
                          className="px-3 sm:px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 text-sm sm:text-base"
                        >
                          Add
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* Contact Details */}
                <div className="mt-8 mb-4">
                  <h2 className="text-lg sm:text-2xl font-bold text-black">
                    Please enter contact details
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 mt-4">
                    <input
                      type="email"
                      placeholder="Email"
                      className="col-span-4 border p-2 rounded text-sm sm:text-base"
                    />
                    <select className="col-span-4 border p-2 rounded text-sm sm:text-base">
                      <option value="91">+91</option>
                      <option value="033">+033</option>
                      <option value="123">+123</option>
                    </select>
                    <input
                      type="text"
                      placeholder="Mobile"
                      className="col-span-4 border p-2 rounded text-sm sm:text-base"
                    />
                  </div>
                </div>

                {/* GST Details */}
                <div className="mt-8 mb-4">
                  <h2 className="text-lg sm:text-2xl font-bold text-black">
                    Please enter GST details
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 mt-4">
                    <select className="col-span-4 border p-2 rounded text-sm sm:text-base">
                      <option>Delhi</option>
                      <option>Mumbai</option>
                      <option>Bangalore</option>
                    </select>
                    <select className="col-span-4 border p-2 rounded text-sm sm:text-base">
                      <option>Maharashtra</option>
                      <option>Karnataka</option>
                      <option>UP</option>
                    </select>
                    <input
                      type="text"
                      placeholder="Address"
                      className="col-span-4 border p-2 rounded text-sm sm:text-base"
                    />
                  </div>
                </div>

                {/* Special Requests */}
                <div className="mt-8 mb-4">
                  <h2 className="text-lg sm:text-2xl font-bold text-black">
                    Special Requests
                  </h2>
                  <input
                    type="text"
                    placeholder="Special Requests"
                    className="w-full border p-2 rounded mt-3 text-sm sm:text-base"
                  />
                </div>
              </div>

              {/* Travellor Details Form with popup :: end */}
              {/* Important Information */}
              <div className="bg-white rounded-lg shadow-md p-5">
                <h2 className="font-bold text-lg mb-3">
                  Important information
                </h2>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm">
                  <li>Restaurant services are non-operational.</li>
                  <li>Primary Guest should be atleast 18 years of age.</li>
                  <li>
                    Passport, Aadhaar, Driving License and Govt. ID are accepted
                    as ID proof(s)
                  </li>
                  <li>Pets are not allowed</li>
                </ul>
                <button className="mt-3 text-blue-600 hover:underline text-sm font-medium">
                  View More
                </button>
              </div>

              {/* Proceeding, term & condition */}

              <div className="my-4 mx-2 flex items-center space-x-2 text-sm text-gray-700">
                <input
                  type="checkbox"
                  className="w-4 h-4 border-gray-400 rounded"
                />
                <p>
                  By proceeding, I agree to MakeMyTrip’s{" "}
                  <a href="#" className="text-blue-600 hover:underline">
                    User Agreement
                  </a>
                  ,{" "}
                  <a href="#" className="text-blue-600 hover:underline">
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a
                    onClick={() => setCancellationModal(true)}
                    href="#"
                    className="text-blue-600 hover:underline"
                  >
                    Cancellation & Property Booking Policies
                  </a>
                  .
                </p>
              </div>

              {/* Review:: start */}
              <div className=" border-t border-b mb-2 p-5 w-[100%] ">
                <h2 className="text-xl font-semibold mb-4">No reviews (yet)</h2>
                <div>
                  <p className="">
                    <div className=" pb-4">
                      <div className="flex items-center space-x-1 mb-1">
                        <FaStar className="text-yellow-400" />
                        <FaStar className="text-yellow-400" />
                        <FaStar className="text-yellow-400" />
                        <FaStar className="text-yellow-400" />
                      </div>
                      <p className="font-semibold text-gray-800">Shivam</p>
                      <p className="text-gray-700">
                        This is nice place to visit..
                      </p>
                      <button
                        onClick={() => setRateModal(true)}
                        className="bg-primary text-white text-[14px] font-medium px-6 py-2 rounded-md mt-3"
                      >
                        Show more
                      </button>
                    </div>
                  </p>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="w-full lg:w-1/3">
              {/* Price Breakup */}
              <div className="mb-4 bg-white/80 backdrop-blur-md rounded-md shadow-lg p-3 sm:p-5 border border-gray-100  transition duration-300">
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Price Breakup
                </h2>

                {/* Row 1 */}
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <p className="text-gray-800 font-medium">
                      1 Room x 1 Night
                    </p>
                    <p className="text-sm text-gray-500">Base Price</p>
                  </div>
                  <p className="text-gray-900 font-semibold">₹ 11,000</p>
                </div>

                {/* Row 2 */}
                <div className="flex justify-between items-center mb-3">
                  <p className="text-green-600 font-semibold flex items-center">
                    Total Discount
                    <span
                      className="ml-1 text-gray-400 cursor-pointer"
                      title="Discount Info"
                    >
                      ⓘ
                    </span>
                  </p>
                  <p className="text-green-600 font-bold">₹ 1,870</p>
                </div>

                {/* Row 3 */}
                <div className="flex justify-between items-center mb-3">
                  <p className="text-gray-800 font-medium">
                    Price after Discount
                  </p>
                  <p className="text-gray-800 font-semibold">₹ 9,130</p>
                </div>

                {/* Row 4 */}
                <div className="flex justify-between items-center mb-3">
                  <p className="text-gray-800 font-medium flex items-center">
                    Hotel Taxes
                    <span
                      className="ml-1 text-gray-400 cursor-pointer"
                      title="Tax Info"
                    >
                      ⓘ
                    </span>
                  </p>
                  <p className="text-gray-800 font-semibold">₹ 1,643</p>
                </div>

                <hr className="my-3 border-gray-200" />

                {/* Total Amount */}
                <div className="flex justify-between items-center">
                  <p className="text-gray-900 font-extrabold text-sm  sm:text-lg">
                    Total Amount to be paid
                  </p>
                  <p className="text-blue-600 font-extrabold text-sm sm:text-lg">
                    ₹ 10,773
                  </p>
                </div>
              </div>

              {/* Coupon Codes */}
              <div className="bg-white/80 backdrop-blur-md rounded-md shadow-lg p-3 sm:p-5 border border-gray-100 hover:shadow-xl transition duration-300">
                <h2 className="text-xl font-bold text-gray-900 mb-3">
                  Coupon Codes
                </h2>
                <p className="text-sm text-gray-500 mb-4">
                  No coupon codes applicable for this property.
                </p>
                <div className="bg-yellow-100 text-yellow-900 text-sm p-3 rounded-lg mb-4 shadow-sm border border-yellow-200">
                  MMT Gift Cards can be applied at payment step
                </div>
                <div className="flex">
                  <input
                    type="text"
                    placeholder="Have a Coupon Code?"
                    className="flex-grow border border-gray-300 rounded-l-full px-4 py-2 text-sm focus:outline-none focus:border-blue-400"
                  />
                  <button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-5 rounded-r-full transition duration-300">
                    →
                  </button>
                </div>
              </div>

              {/* Pay Now Button */}
              <button className="bg-primary w-full text-white sm:text-[21px] text-[18px] font-medium px-6 sm:py-4 py-3 rounded-md mt-3">
                PAY NOW
              </button>
            </div>
          </div>

          {/* Review:: end */}
          {/* Rating Form with Rating review data :: modal popup :: start */}

          {rateModal && (
            <div
              id="outside"
              onClick={rateClickOutside}
              className="fixed inset-[-60px] z-50 bg-black bg-opacity-50 flex items-center justify-center"
            >
              <div className="bg-white w-full max-w-[70%] mx-auto md:max-w-2xl max-h-[100vh] rounded-2xl p-6 overflow-y-auto relative shadow-xl">
                <button
                  onClick={() => setRateModal(false)}
                  className="absolute top-4 right-4 text-2xl font-bold text-gray-600 hover:text-black"
                >
                  ✕
                </button>

                <h2 className="text-xl font-semibold  text-center">
                  Customer reviews
                </h2>

                {/* Rating form with data :: start */}
                <div className="p-4 md:p-4 max-w-xl mx-auto">
                  <div className="bg-white py-4 rounded-xl ">
                    <div className="flex justify-center mb-4">
                      {[...Array(5)].map((_, index) => {
                        const starValue = index + 1;
                        return (
                          <label key={index}>
                            <input
                              type="radio"
                              name="rating"
                              className="hidden"
                              value={starValue}
                              onClick={() => setRating(starValue)}
                            />
                            <FaStar
                              className={`cursor-pointer text-3xl transition-colors duration-200 ${
                                starValue <= (hover || rating)
                                  ? "text-yellow-400"
                                  : "text-gray-300"
                              }`}
                              onMouseEnter={() => setHover(starValue)}
                              onMouseLeave={() => setHover(0)}
                            />
                          </label>
                        );
                      })}
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <input
                        type="text"
                        className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring focus:border-blue-400"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                      <textarea
                        className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring focus:border-blue-400 resize-none h-28"
                        placeholder="Your opinion..."
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                      ></textarea>

                      <div className="flex gap-4">
                        <button
                          type="submit"
                          className="bg-[#F97313] text-white px-5 py-2 rounded-md hover:bg-[#000000] transition"
                        >
                          Submit
                        </button>
                        <button
                          type="reset"
                          className="text-blue-600 hover:underline"
                          onClick={() => {
                            setRating(0);
                            setName("");
                            setComment("");
                          }}
                        >
                          Cancel
                        </button>
                      </div>
                    </form>
                  </div>

                  <hr />

                  {/* Display Reviews */}
                  <div className="mt-8 space-y-6">
                    {reviews.map((rev, index) => (
                      <div key={index} className="border-b pb-4">
                        <div className="flex items-center space-x-1 mb-1">
                          {[...Array(rev.rating)].map((_, i) => (
                            <FaStar key={i} className="text-yellow-400" />
                          ))}
                        </div>
                        <p className="font-semibold text-gray-800">
                          {rev.name}
                        </p>
                        <p className="text-gray-700">{rev.comment}</p>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Rating form with data :: end */}
              </div>
            </div>
          )}
          {/* Rating Form with Rating review data :: modal popup :: end */}
        </div>
        {/* Service Information Details :: end */}

        {/* Map :: start */}
        <div className="container mb-10 p-6 w-[100%]">
          <div className="h-[500px] ">
            <iframe
              className="h-[500px] w-[100%]"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3642.2011100822037!2d88.2555848!3d24.094422100000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f97d7a72034f09%3A0xf4395d84deb96c47!2sSingdha%20Srijon%20Tours%20Private%20Limited!5e0!3m2!1sen!2sin!4v1746715828443!5m2!1sen!2sin"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        {/* Map :: end */}

        {/* Things to know :: start */}
        <div className="container  mb-10 p-6 w-[100%] ">
          <h2 className="text-[26px] font-medium mb-6 border-t pt-[50px]">
            Things to know
          </h2>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-6 md:gap-16">
            {/* column 1 :: INCLUSIONS */}
            <div className="leading-8  md:leading-10">
              <h3 className="text-[18px] font-medium text-[#000]">
                INCLUSIONS
              </h3>
              {/* <ul>
                <li className="text-[16px]">Check-in after 3:00 pm</li>
                <li className="text-[16px]">Checkout before 11:00 am</li>
                <li className="text-[16px]">6 guests maximum</li>
              </ul> */}
              <button
                onClick={() => setInclusionModal(true)}
                className="text-black font-semibold  flex items-center"
              >
                Show more
              </button>

              {inclusionModal && (
                <div
                  id="outside1"
                  onClick={inclusionClickOutside}
                  className="fixed inset-[-60px] z-50 bg-black bg-opacity-50 flex items-center justify-center"
                >
                  <div className="bg-white w-full max-w-[70%] mx-auto md:max-w-4xl max-h-[90vh] rounded-2xl p-6 overflow-y-auto relative shadow-xl">
                    <button
                      onClick={() => setInclusionModal(false)}
                      className="absolute top-4 right-4 text-2xl font-bold text-gray-600 hover:text-black"
                    >
                      ✕
                    </button>

                    {/* <h2 className="text-xl font-semibold mb-4">INCLUSIONS</h2> */}

                    <div className="space-y-3">
                      <h2 className="text-2xl font-bold text-gray-800 mb-4">
                        Inclusions
                      </h2>
                      <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li className="flex items-start gap-2">
                          <span className="text-orange-500 text-xl">✔</span>5
                          Nights Hotel accommodation in the hotels listed, or
                          similar.
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-orange-500 text-xl">✔</span>
                          Breakfast, Lunch, Evening Snacks, and Dinner – Cooked
                          by
                          <span className="font-semibold text-gray-900">
                            Singdha Srijon Tours Private Limited
                          </span>
                          (Veg or Non-Veg)
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-orange-500 text-xl">✔</span>
                          MAPI Plan (Breakfast and Dinner) for those who opt for
                          an upgrade in better hotels.
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-orange-500 text-xl">✔</span>
                          Sightseeing as mentioned in the itinerary.
                        </li>
                      </ul>
                    </div>

                    {/* Divider */}
                    <div className="border-t border-gray-300 my-6"></div>

                    {/* Road Transport */}
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-orange-600">
                        ROAD TRANSPORT
                      </h3>
                      <p className="text-gray-700">
                        All Transfers & Sightseeings by Car, Bus, Traveller, or
                        Coaster Bus.
                      </p>
                    </div>

                    {/* Our Specialty */}
                    <div className="space-y-2 mt-4">
                      <h3 className="text-lg font-semibold text-orange-600">
                        OUR SPECIALTY
                      </h3>
                      <p className="text-gray-700">
                        Tour Manager or tour leader will be present throughout
                        the tour for each group.
                      </p>
                    </div>

                    {/* Divider */}
                    <div className="border-t border-gray-300 my-6"></div>

                    {/* Note Section */}
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-orange-600">
                        NOTE
                      </h3>
                      <p className="text-gray-700">
                        It is compulsory for the Shillong, Guwahati tour to
                        carry an original Photo ID card (Driving License / Voter
                        ID / Passport) with 02 Xerox copies. Passengers opting
                        for any other vehicle will not get any extra facility.
                        They must stay in touch and follow the tour manager’s
                        instructions as per Company’s decision. Usage of
                        vehicles is subject to local rules & passengers must be
                        on time for meals.
                      </p>
                    </div>

                    {/* Travel Tips */}
                    <div className="space-y-2 mt-4">
                      <h3 className="text-lg font-semibold text-orange-600">
                        TRAVEL TIPS FOR SHILLONG, GUWAHATI
                      </h3>
                      <p className="text-gray-700">
                        Guests are requested to carry towels & dry clothes for
                        river rafting. Also carry your regular basic medicines &
                        basic first aid kit with you.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
            {/* column 2 :: EXCLUSIONS */}
            <div className="leading-8  md:leading-10">
              <h3 className="text-[18px] font-medium text-[#000]">
                EXCLUSIONS
              </h3>

              <button
                onClick={() => setExclusionModal(true)}
                className="text-black font-semibold flex items-center"
              >
                Show more
              </button>

              {exclusionModal && (
                <div
                  id="outside2"
                  onClick={exclusionClickOutside}
                  className="fixed inset-[-60px] z-50 bg-black bg-opacity-50 flex items-center justify-center"
                >
                  <div className="bg-white w-full max-w-[70%] mx-auto md:max-w-4xl max-h-[90vh] rounded-2xl p-6 overflow-y-auto relative shadow-xl">
                    <button
                      onClick={() => setExclusionModal(false)}
                      className="absolute top-4 right-4 text-2xl font-bold text-gray-600 hover:text-black"
                    >
                      ✕
                    </button>

                    <div className="space-y-3">
                      <h2 className="text-2xl font-bold text-gray-800 mb-4">
                        Exclusions
                      </h2>
                      <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li className="flex items-start gap-2">
                          <span className="text-orange-500 text-xl">✔</span>5
                          Travel Ticket Fares.
                        </li>

                        <li className="flex items-start gap-2">
                          <span className="text-orange-500 text-xl">✔</span>
                          Booking of an Extra Car.
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-orange-500 text-xl">✔</span>
                          Visit any Place not included in the Package.
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-orange-500 text-xl">✔</span>
                          GST or Tax on the Tour Package Price.
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-orange-500 text-xl">✔</span>
                          Travel Insurance Fees.
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-orange-500 text-xl">✔</span>
                          Any kind of Self-expenses.
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-orange-500 text-xl">✔</span>
                          Items of Personal Nature i.e. Tips, Porterage, Room
                          Service, Laundry, Mineral Water, Phone Calls,
                          Additional Sightseeing Tours And Excursions are Not
                          Included In The Itinerary.
                        </li>
                      </ul>
                    </div>

                    {/* Divider */}
                    <div className="border-t border-gray-300 my-6"></div>

                    {/* Road Transport */}
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-orange-600">
                        IMPORTANT NOTE FOR FOREIGNERS
                      </h3>

                      <li className="flex items-start gap-2">
                        <span className="text-orange-500 text-xl">✔</span>
                        Extra Charge might be taken for Foreigners.
                      </li>
                    </div>
                  </div>
                </div>
              )}
            </div>
            {/* column 3 :: CANCELLATION */}
            <div className="leading-8  md:leading-10">
              <h3 className="text-[18px] font-medium text-[#000]">
                CANCELLATION
              </h3>
              {/* <ul>
                <li className="text-[16px]">
                  Add your trip dates to get the cancellation details for this
                  stay.
                </li>
              </ul> */}
              <button
                onClick={() => setCancellationModal(true)}
                className="text-black font-semibold  flex items-center"
              >
                Show more
              </button>

              {cancellationModal && (
                <div
                  id="outside3"
                  onClick={cancellationClickOutside}
                  className="fixed inset-[-60px] z-50 bg-black bg-opacity-50 flex items-center justify-center"
                >
                  <div className="bg-white w-full max-w-[70%] mx-auto md:max-w-4xl max-h-[90vh] rounded-2xl p-6 overflow-y-auto relative shadow-xl">
                    <button
                      onClick={() => setCancellationModal(false)}
                      className="absolute top-4 right-4 text-2xl font-bold text-gray-600 hover:text-black"
                    >
                      ✕
                    </button>

                    <div className="space-y-3">
                      <h2 className="text-2xl font-bold text-gray-800 mb-4">
                        Cancellation
                      </h2>

                      <div className="space-y-2">
                        <h3 className="text-lg font-semibold text-orange-600">
                          Our Hotels:
                        </h3>

                        <li className="flex items-start gap-2 ">
                          <span className="text-orange-500 text-xl">✔</span>
                          We will provide the Hotel Status during the journey
                          itself. However, we may change the same in case of any
                          unavoidable circumstances. Also, the passengers are
                          requested to Check in and Check out at the Exact
                          Timing provided by the Hotels. Any kind of indulgence
                          with the Hotel Manager or Staff won’t be entertained.
                        </li>
                      </div>

                      <div className="space-y-2">
                        <h3 className="text-lg font-semibold text-orange-600">
                          Our Bus:
                        </h3>

                        <li className="flex items-start gap-2">
                          <span className="text-orange-500 text-xl">✔</span>
                          Passengers will be provided with Seats on a First come
                          first basis. However, they can change the Seats with
                          any of the Co-passengers. Also, the Journeys will
                          happen in Non-A.C Buses. In case of any accidents, we
                          won’t be entertaining any refunds.
                        </li>
                      </div>

                      <div className="space-y-2">
                        <h3 className="text-lg font-semibold text-orange-600">
                          Our Food:
                        </h3>

                        <li className="flex items-start gap-2">
                          <span className="text-orange-500 text-xl">✔</span>
                          We will provide you with the best quality Veg /
                          Non-Veg Foods during the whole trip, cooked by our
                          Chef / Hotel. The Food will include Breakfast, Dinner,
                          Evening Snacks and Lunch. There will be some light
                          foods for Children too.
                        </li>
                      </div>

                      <div className="space-y-2">
                        <h3 className="text-lg font-semibold text-orange-600">
                          Luggage:
                        </h3>

                        <li className="flex items-start gap-2">
                          <span className="text-orange-500 text-xl">✔</span>
                          During the entire tour (Except for the train journey)
                          our staff will be at your service to carry your
                          luggage, but at the same time we are not responsible
                          for the theft or damage to your luggage, no claims are
                          to be made.
                        </li>
                      </div>

                      <div className="space-y-2">
                        <h3 className="text-lg font-semibold text-orange-600">
                          Our Tour Manager:
                        </h3>

                        <li className="flex items-start gap-2">
                          <span className="text-orange-500 text-xl">✔</span>
                          We advise you to co-operate with our manager in all
                          respect to make your tour really enjoyable. Allotment
                          of rooms, and selection of the daily food menu, are
                          the duty of the tour manager and passengers should not
                          interfere in these matters. Passengers indulging in
                          unwanted hindrance, in the smooth operation of the
                          tour, or quarreling with the manager or other
                          passengers, shall be asked to leave the tour at that
                          spot, and shall not be given any refund for the same.
                        </li>
                      </div>

                      <div className="space-y-2">
                        <h3 className="text-lg font-semibold text-orange-600">
                          Unavoidable Circumstances:
                        </h3>

                        <li className="flex items-start gap-2">
                          <span className="text-orange-500 text-xl">✔</span>
                          If due to reasons beyond our control like riots,
                          flood, political unrest, bandhs, accidents or any
                          other natural or man-made calamities, the program of
                          the tour has to be changed or extended, the additional
                          expenditure for the same will have to be borne by the
                          passengers. If any passenger, have to leave the tour
                          mid-way, due to any reasons like the death of a
                          relative, or illness, or any other reasons, there
                          shall be no refund for the remaining portion of the
                          tour.
                          <br />
                          Passengers are advised against carrying expensive
                          jewelry, cameras, etc. on the tour and if they bring
                          them on the tour, it shall be at their own risk, we
                          shall in no way be responsible for the theft or
                          damage. If due to reasons beyond our control, we have
                          to cancel some sight-seeing places, there shall be no
                          refund for the same. If a tour is canceled on our part
                          then the cost and responsibility of organizing the new
                          tour will be of the passengers only. Any dispute will
                          be subject to Berhampore Jurisdiction.
                        </li>
                      </div>

                      <div className="space-y-2">
                        <h3 className="text-lg font-semibold text-orange-600">
                          Things not included in the Tour Cost:
                        </h3>

                        <li className="flex items-start gap-2">
                          <span className="text-orange-500 text-xl">✔</span>
                          Personal expenses like service tax, tips, cold drinks,
                          horse riding, boating, laundry, cable car rides, room
                          heater, taxi fare, mineral water, personal things,
                          insurance, and additional expenses after accidents, we
                          do not take it for granted that all passengers who
                          join the tour have read this terms and conditions and
                          agree to the same.
                        </li>
                      </div>

                      <div className="space-y-2">
                        <h3 className="text-lg font-semibold text-orange-600">
                          Complaints during the Tour:
                        </h3>

                        <li className="flex items-start gap-2">
                          <span className="text-orange-500 text-xl">✔</span>
                          If the passengers have any complaints regarding our
                          services like hotel, bus, train, etc. are advised to
                          inform our office, immediately by phone/fax so that
                          the same can be readdressed on the spot, no complaints
                          or refund for the same be entertained after reaching
                          Berhampore.
                        </li>
                      </div>

                      <div className="space-y-2">
                        <h3 className="text-lg font-semibold text-orange-600">
                          Booking & Cancellations:
                        </h3>
                        <li className="flex  items-start gap-2">
                          <span className="text-orange-500 text-xl">✔</span>
                          You can confirm your booking of our tour by paying a
                          deposit of Rs. 3000/- per person (if any higher class
                          on train or air is required the difference should also
                          be paid in advance) out of this Rs. 3000/- is
                          non-refundable and non-transferable.
                          <br />
                          The balance payment shall be paid 15 days prior to the
                          departure of the tour. Balance payment by Cheque will
                          be accepted 15 days prior to the departure of the
                          tour. If anybody fails to pay the balance amount
                          before 15 days, he shall be deemed as canceled and the
                          deposit shall not be refunded. If we cancel the tour,
                          then we shall refund the amount. But if we are forced
                          to cancel the tour due to natural calamities like
                          floods, riots, bandhs, strikes, etc. then we shall
                          refund the tour cost after deducting 10% as our
                          service charge for making the necessary arrangements
                          for your tour.
                          <br />
                          All the bank charges for credit card transactions will
                          have to be borne by the customer.
                          <br />
                          If the passenger wants to cancel the tour he shall
                          have to make a written application to our office and
                          we shall refund the tour cost after deducting
                          cancellation charges as under:
                        </li>
                        <ul className="list-disc list-inside flex flex-col space-y-2 text-gray-700">
                          <li className="flex items-start gap-2">
                            <span className="text-orange-500 text-xl">✔</span>
                            Before 30 days of tour departure Rs. 3000/- per
                            person
                          </li>

                          <li className="flex items-start gap-2">
                            <span className="text-orange-500 text-xl">✔</span>
                            Between 15 to 30 days 20% of the tour cost
                          </li>

                          <li className="flex items-start gap-2">
                            <span className="text-orange-500 text-xl">✔</span>
                            Between 10 to 15 days 40% of the tour cost
                          </li>

                          <li className="flex items-start gap-2">
                            <span className="text-orange-500 text-xl">✔</span>
                            Between 05 to 10 days 70% of the tour cost
                          </li>

                          <li className="flex items-start gap-2">
                            <span className="text-orange-500 text-xl">✔</span>
                            Within 05 days 100% of the tour cost
                          </li>
                        </ul>

                        <li className="flex items-start gap-2">
                          <span className="text-orange-500 text-xl">✔</span>
                          Please Deposit your cash/cheque in the name of SINGDHA
                          SRIJON TOURS PRIVATE LIMITED. Fixed-rate. Service tax
                          extra.
                          <br />
                          The bank charges for credit card transactions are
                          non-refundable in case of cancellation of tour booking
                          by any party.
                          <br />
                          The verdict of passengers who have experienced our
                          tour, hotel wise, taste of food and our service which
                          are our main assets.
                        </li>
                      </div>

                      <div className="space-y-2">
                        <h3 className="text-lg font-semibold text-orange-600">
                          Online bookings:
                        </h3>

                        <li className="flex items-start gap-2">
                          <span className="text-orange-500 text-xl">✔</span>
                          SINGDHA SRIJON TOURS PRIVATE LIMITED has made this
                          facility available to you as a value-added service.
                          Using this service, you can make your online
                          booking/booking request for booking various services
                          offered by SRIJON TOURS & TRAVELS. Your booking
                          request will be processed for confirmation of prices
                          and availability of services requested by you. Only on
                          confirmation to you about the prices and availability
                          SINGDHA SRIJON TOURS PRIVATE LIMITED will be bound to
                          provide you the requested services subject however to
                          you making full payment and complying with the
                          relevant terms and conditions. Any correspondence with
                          you prior to SINGDHA SRIJON TOURS PRIVATE LIMITED
                          aforesaid confirmation, will not be treated as any
                          acceptance of your request.
                          <br />
                          The online booking of the products and services made
                          available through this website is subject to
                          availability and solely at the discretion of SINGDHA
                          SRIJON TOURS PRIVATE LIMITED and/or its respective
                          suppliers. Please ensure that all information given by
                          you while booking is correct. For security reasons and
                          to be able to advise you of any developments affecting
                          your travel we need to be able to contact you by
                          telephone and email and to have your correct address
                          on record. If any or all of these contact details are
                          not correctly given by you, we reserve the right to
                          cancel the transaction at your risk and cost.
                        </li>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        {/* Things to know :: end */}

        {/* FOOTER SECTION */}
        <Footer></Footer>
      </div>
    </>
  );
};

export default HotelBookingDetails;
