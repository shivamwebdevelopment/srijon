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

function Main() {
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

  // Gallery :: start
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(0);

  const openLightbox = (index) => {
    setActiveImage(index);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  const showNext = () => {
    setActiveImage((prev) => (prev + 1) % images.length);
  };

  const showPrev = () => {
    setActiveImage((prev) => (prev - 1 + images.length) % images.length);
  };

  // Gallery :: end

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

  // Room card Details :: start
  const [isOpen, setIsOpen] = useState(false);
  const [startIndex, setStartIndex] = useState(0);

  const images = [
    "https://cdn.photoswipe.com/photoswipe-demo-images/photos/home-demo/luca-bravo-ny6qxqv_m04-unsplash_snrzpf/luca-bravo-ny6qxqv_m04-unsplash_snrzpf_c_scale,w_2500.jpg",
    "https://cdn.photoswipe.com/photoswipe-demo-images/photos/home-demo/luca-bravo-O453M2Liufs-unsplash_qqt53u/luca-bravo-O453M2Liufs-unsplash_qqt53u_c_scale,w_2500.jpg",
    "https://cdn.photoswipe.com/photoswipe-demo-images/photos/home-demo/luca-bravo-VowIFDxogG4-unsplash_ibrktu/luca-bravo-VowIFDxogG4-unsplash_ibrktu_c_scale,w_2500.jpg",
    "https://cdn.photoswipe.com/photoswipe-demo-images/photos/home-demo/luca-bravo-zAjdgNXsMeg-unsplash_q6zdih/luca-bravo-zAjdgNXsMeg-unsplash_q6zdih_c_scale,w_2500.jpg",
    "https://cdn.photoswipe.com/photoswipe-demo-images/photos/home-demo/luca-bravo-A-fubu9QJxE-unsplash_jxy5p8/luca-bravo-A-fubu9QJxE-unsplash_jxy5p8_c_scale,w_2500.jpg",
  ];

  const settings = {
    initialSlide: startIndex,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };
  // Room card Details :: end

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

  return (
    <>
      {/* HEADER SECTION TWO */}
      {/* <StickyMenu></StickyMenu> */}

      <div className="bg-white overflow-hidden">
        {/* HEADER SECTION */}
        <Header></Header>
        {/* Search Bar:: start */}
        <div className="w-full sticky top-150 z-50">
          {/* Desktop Background */}
          <div className="w-full h-[400px]  bg-fixed md:h-[120px] bg-cover bg-center hidden md:block">
            {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white"></div> */}
          </div>

          {/* Content */}
          <div className="relative md:absolute w-full top-0 left-0 flex flex-col items-center px-4 pt-10 md:pt-2">
            {/* Card Container */}
            <div className="mt-6 w-full max-w-[1230px] bg-white bg-opacity-90 rounded-xl shadow-lg px-4 py-2 md:flex md:justify-center md:items-center  md:space-x-[-10px]">
              {/* Where Input */}
              <div className="flex flex-col md:flex-row items-center w-full md:w-auto p-3 rounded-xl mb-4 md:ml-[-20px] md:mb-0">
                <span className="text-xs text-gray-700 font-bold mb-1 md:mb-0 md:mr-2">
                  Where
                </span>
                <div className="flex items-center justify-center w-full">
                  <Preview>
                    <div
                      ref={wrapperRef}
                      className="relative  border-none w-[250px] md:w-[160px]  mx-auto"
                    >
                      <input
                        type="text"
                        placeholder="Search destination"
                        className="w-full border border-gray-300 h-full rounded text-[14px] px-2 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={selected || search}
                        onFocus={() => setShowDropdown(true)}
                        onChange={(e) => {
                          setSearch(e.target.value);
                          setSelected("");
                        }}
                      />

                      {showDropdown && (
                        <ul className="absolute z-10 bg-white border border-gray-300 rounded mt-1 w-full md:w-[250px] max-h-60 overflow-y-auto shadow-lg">
                          {filteredDestination.length > 0 ? (
                            filteredDestination.map((city, index) => (
                              <li
                                key={index}
                                className="px-4 py-2 text-[12px] hover:bg-blue-100 cursor-pointer"
                                onClick={() => handleSelect(city)}
                              >
                                {city}
                              </li>
                            ))
                          ) : (
                            <li className="px-4 py-2 text-gray-500">
                              No results found
                            </li>
                          )}
                        </ul>
                      )}
                    </div>
                  </Preview>
                </div>
              </div>

              {/* From Input */}
              <div className="flex flex-col md:flex-row items-center w-full md:w-auto p-3 rounded-xl mb-4 md:mb-0">
                <span className="text-xs text-gray-700 font-bold mb-1 md:mb-0 whitespace-nowrap md:mr-2">
                  Check in
                </span>
                <div className="flex items-center justify-center w-full">
                  <Preview>
                    <div className="relative  border-none w-[250px] md:w-[160px]  mx-auto ">
                      <div className="absolute flex items-center justify-center w-12 h-full rounded-l text-black">
                        <Lucide icon="Calendar" className="w-4 h-4" />
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
                        className="text-black rounded py-2 px-9 text-sm"
                      />
                    </div>
                  </Preview>
                </div>
              </div>

              {/* Switch Icon */}
              <div className="hidden md:flex justify-center items-center px-2">
                <Lucide icon="Repeat" className="w-4 h-4 text-gray-400" />
              </div>

              {/* To Input */}
              <div className="flex flex-col md:flex-row items-center w-full md:w-auto p-3 rounded mb-4 md:mb-0">
                <span className="text-xs text-gray-700 font-bold mb-1 whitespace-nowrap md:mb-0 md:mr-2">
                  Check out
                </span>
                <div className="flex items-center justify-center w-full">
                  <Preview>
                    <div className="relative  border-none w-[250px] md:w-[160px]  mx-auto ">
                      <div className="absolute flex items-center justify-center w-12 h-full rounded text-black">
                        <Lucide icon="Calendar" className="w-4 h-4" />
                      </div>
                      <div className="absolute right-0 flex items-center justify-center w-12 h-full rounded text-black">
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
                        className="text-black rounded py-2 px-9 text-sm"
                      />
                    </div>
                  </Preview>
                </div>
              </div>

              {/* Room Dropdown */}
              <div className="flex flex-col md:flex-row items-center w-full md:w-auto p-3 rounded-xl mb-4 md:mb-0">
                <div className="flex items-center justify-center w-full">
                  <Preview>
                    {/* Guests Dropdown */}
                    <div className="relative">
                      <button
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className="w-[250px] md:w-[160px] border p-2 rounded flex justify-between items-center"
                      >
                        <span>
                          {guests.adults +
                            guests.children +
                            guests.infants +
                            guests.pets}{" "}
                          guest
                          {guests.adults +
                            guests.children +
                            guests.infants +
                            guests.pets !==
                            1 && "s"}
                        </span>
                        {/* <span>{isDropdownOpen ? "▲" : "▼"}</span> */}
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
                      </button>

                      {isDropdownOpen && (
                        <div className="absolute z-10 bg-white w-[200px]  border mt-2 rounded-lg shadow-lg p-4 space-y-4">
                          {["adults", "children", "infants", "pets"].map(
                            (type) => (
                              <div
                                key={type}
                                className="flex justify-between items-center"
                              >
                                <div className="capitalize">{type}</div>
                                <div className="flex items-center space-x-2">
                                  <button
                                    onClick={() => decrement(type)}
                                    className="border p-1 rounded-full w-8 h-8 flex items-center justify-center"
                                  >
                                    -
                                  </button>
                                  <span>{guests[type]}</span>
                                  <button
                                    onClick={() => increment(type)}
                                    className="border p-1 rounded-full w-8 h-8 flex items-center justify-center"
                                  >
                                    +
                                  </button>
                                </div>
                              </div>
                            )
                          )}

                          <p className="text-xs text-gray-500 mt-2">
                            Maximum 6 guests. Pets are allowed up to 2.
                          </p>

                          <button
                            onClick={() => setIsDropdownOpen(false)}
                            className="text-sm text-blue-600 mt-4 underline"
                          >
                            Close
                          </button>
                        </div>
                      )}
                    </div>
                  </Preview>
                </div>
              </div>

              {/* Room Dropdown */}
              <div className="flex pr-8 flex-col md:flex-row items-center w-full md:w-auto p-3 rounded-xl mb-4 md:mb-0">
                <span className="text-xs text-gray-700 font-bold mb-1 md:mb-0 md:mr-2">
                  Room
                </span>
                <div className="flex items-center justify-center w-full">
                  <Preview>
                    <div className="flex items-center w-full  mr-[-1px]">
                      {/* <FaBed className="w-4 h-4 mr-2 text-gray-600" /> */}
                      <select className="text-sm text-black bg-transparent focus:outline-none w-full border-none outline-none">
                        <option>1 Room</option>
                        <option>2 Room</option>
                        <option>3 Room</option>
                      </select>
                    </div>
                  </Preview>
                </div>
              </div>

              {/* Search Button */}
              <button className="bg-[#F97316] hover:bg-black text-white text-sm justify-center font-semibold px-3 py-2  rounded-full flex items-center w-full md:w-auto">
                <Search className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
        {/* Search Bar:: end */}

        {/* Service Information Details :: start */}
        <div className="container px-4 md:px-4 py-3">
          <div className="flex flex-col lg:flex-row gap-6 p-4 shadow-xl rounded-lg border">
            {/* Left Content */}
            <div className="flex-1">
              {/* Gallery Start */}
              <div className="w-full">
                {!isMobile ? (
                  <div className="grid grid-cols-[65%_35%] gap-2 h-[100%]">
                    <div className="w-full h-[460px]   flex-grow-2  ">
                      <img
                        src={images[0]}
                        alt="Main"
                        onClick={() => openLightbox(0)}
                        className="w-full h-full object-cover   rounded-lg cursor-pointer border-2"
                      />
                    </div>
                    <div className="grid relative grid-cols-1 flex-grow-1 col-span-1 gap-2 md:max-w-full  h-[400]">
                      {images.slice(1, 3).map((img, index) => (
                        <img
                          key={index}
                          src={img}
                          onClick={() => openLightbox(index + 1)}
                          alt={`Gallery ${index + 2}`}
                          className="w-full  h-full object-cover rounded-lg cursor-pointer border-2"
                        />
                      ))}
                      <button
                        onClick={() => openLightbox(0)}
                        className="absolute bottom-2 bg-[#F97313] hover:bg-[#000000] right-2 text-white  text-[16px] px-4 py-2 rounded-md font-500"
                      >
                        Show all photos
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="relative overflow-hidden w-full h-80">
                    <img
                      src={images[current]}
                      alt={`Slide ${current + 1}`}
                      onClick={() => openLightbox(current)}
                      className="w-full h-full object-cover rounded-lg cursor-pointer"
                    />
                    <button
                      onClick={prevSlide}
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow"
                    >
                      ‹
                    </button>
                    <button
                      onClick={nextSlide}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow"
                    >
                      ›
                    </button>
                  </div>
                )}

                {isLightboxOpen && (
                  <div
                    className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center"
                    onClick={closeLightbox}
                  >
                    <div
                      className="relative max-w-[90%] max-h-[90%]"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <img
                        src={images[activeImage]}
                        alt={`Fullscreen ${activeImage}`}
                        className="object-contain max-h-[90vh] rounded-lg"
                      />
                      <button
                        onClick={closeLightbox}
                        className="absolute top-2 right-2 text-white text-3xl font-bold"
                      >
                        ✕
                      </button>
                      <button
                        onClick={showPrev}
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white text-5xl"
                      >
                        ‹
                      </button>
                      <button
                        onClick={showNext}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white text-5xl"
                      >
                        ›
                      </button>
                      <div className="absolute top-2 left-2 text-white text-sm">
                        {activeImage + 1} / {images.length}
                      </div>
                    </div>
                  </div>
                )}
              </div>
              {/* Gallery End */}

              <h2 className="text-2xl font-semibold mt-4">Delhi, India</h2>
              <p className="text-gray-600 border-b pb-4">
                6 guests · 2 bedrooms · 2 beds · 2 bathrooms
              </p>

              {/* Host Info */}
              <div className="flex items-center space-x-4 border-b py-4">
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Host"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h2 className="font-semibold">Hosted by Sangeeta</h2>
                  <p className="text-gray-500 text-sm">3 years hosting</p>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-4 border-b py-4">
                <div className="flex items-start space-x-3">
                  <FaDoorOpen className="text-2xl" />
                  <div>
                    <h3 className="font-semibold">Self check-in</h3>
                    <p className="text-gray-500 text-sm">
                      You can check in with the building staff.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <FaSwimmingPool className="text-2xl" />
                  <div>
                    <h3 className="font-semibold">Dive right in</h3>
                    <p className="text-gray-500 text-sm">
                      This is one of the few places in the area with a pool.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <FaCalendarCheck className="text-2xl" />
                  <div>
                    <h3 className="font-semibold">
                      Free cancellation for 48 hours
                    </h3>
                    <p className="text-gray-500 text-sm">
                      Get a full refund if you change your mind.
                    </p>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="text-sm border-b space-y-4 py-4 text-gray-700">
                <p className="text-justify">
                  {isExpanded ? fullText : fullText.slice(0, 150) + "..."}
                </p>
                <button
                  onClick={toggleDescription}
                  className="bg-primary text-white text-[14px] font-medium px-6 py-2 rounded-md mt-3 hover:bg-primary-dark transition"
                >
                  {isExpanded ? "Less show" : "Show more"}
                </button>
              </div>

              {/* Place Offers */}
              <div className="text-sm  py-4">
                <h2 className="text-2xl font-semibold">Amenities</h2>

                <div className="py-4 grid sm:grid-cols-2 grid-cols-1 text-gray-700 gap-6">
                  <div className="flex items-end space-x-3">
                    <ImSpoonKnife className="text-[21px]" />
                    <h3 className="text-[16px]">Kitchen </h3>
                  </div>
                  <div className="flex items-end space-x-3">
                    <FaWifi className="text-[21px]" />
                    <h3 className="text-[16px]">Wifi </h3>
                  </div>
                </div>

                <button
                  onClick={() => setShowModal(true)}
                  className="bg-primary text-white text-[14px] font-medium px-6 py-2 rounded-md mt-3"
                >
                  Show all 17 amenities
                </button>

                {showModal && (
                  <div
                    id="overlay"
                    onClick={handleClickOutside}
                    className="fixed inset-[-60px] z-50 bg-black bg-opacity-50 flex items-center justify-center"
                  >
                    <div className="bg-white w-full max-w-[70%] mx-auto md:max-w-2xl max-h-[100vh] rounded-2xl p-6 overflow-y-auto relative shadow-xl">
                      <button
                        onClick={() => setShowModal(false)}
                        className="absolute top-4 right-4 text-2xl font-bold text-gray-600 hover:text-black"
                      >
                        ✕
                      </button>

                      <h2 className="text-xl font-semibold mb-4">
                        What this place offers
                      </h2>

                      <div className="py-4 grid sm:grid-cols-2 grid-cols-1 text-gray-700 gap-6">
                        <div className="flex items-end space-x-3">
                          <ImSpoonKnife className="text-[21px]" />
                          <h3 className="text-[16px]">Kitchen </h3>
                        </div>
                        <div className="flex items-end space-x-3">
                          <FaWifi className="text-[21px]" />
                          <h3 className="text-[16px]">Wifi </h3>
                        </div>
                        <div className="flex items-end space-x-3">
                          <RiHomeGearFill className="text-[21px]" />
                          <h3 className="text-[16px]">Dedicated workspace </h3>
                        </div>
                        <div className="flex items-end space-x-3">
                          <FaParking className="text-[21px]" />
                          <h3 className="text-[16px]">
                            Free parking on premises{" "}
                          </h3>
                        </div>
                        <div className="flex items-end space-x-3">
                          <FaSwimmingPool className="text-[21px]" />
                          <h3 className="text-[16px]">Pool </h3>
                        </div>
                        <div className="flex items-end space-x-3">
                          <MdOutlinePets className="text-[21px]" />
                          <h3 className="text-[16px]">Pets allowed </h3>
                        </div>
                        <div className="flex items-end space-x-3">
                          <BsTvFill className="text-[21px]" />
                          <h3 className="text-[16px]">TV </h3>
                        </div>
                        <div className="flex items-end space-x-3">
                          <PiSecurityCameraFill className="text-[21px]" />
                          <h3 className="text-[16px]">
                            Exterior security cameras
                          </h3>
                        </div>
                        <div className="flex items-end space-x-3">
                          <RiAlarmWarningFill className="text-[21px]" />
                          <h3 className="text-[16px]">
                            Carbon monoxide alarm{" "}
                          </h3>
                        </div>
                        <div className="flex items-end space-x-3">
                          <GiRingingAlarm className="text-[21px]" />
                          <h3 className="text-[16px]">Smoke alarm </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              {/* Phone form :: start */}
              {/* <div className="bg-[#fff2e9] rounded-md p-4 my-4 sm:p-6 border  shadow-sm">
                <h2 className="font-bold text-base sm:text-lg mb-4">
                  Login to unlock deals & manage your bookings!
                </h2>

                <form className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                  <label className="text-sm font-medium min-w-[100px]">
                    Mobile Number
                  </label>

                  <div className="flex items-center w-full sm:max-w-xs bg-white rounded-md border border-gray-300 overflow-hidden">
                    <span className="px-3 text-gray-600 bg-white">+91</span>
                    <input
                      type="tel"
                      placeholder="Enter number"
                      className="flex-1 py-2 px-2 outline-none text-sm"
                    />
                  </div>

                  <button
                    type="submit"
                    className="text-sm font-bold bg-white text-blue-500 border border-blue-300 hover:bg-blue-50 px-4 py-2 rounded-md whitespace-nowrap"
                  >
                    LOGIN NOW
                  </button>
                </form>
              </div> */}
              {/* Phone form :: end */}
            </div>

            {/* Right Content */}
            <div className="w-full lg:w-1/3">
              {/* Check-in/Check-out Date */}
              <div className="p-4 border rounded-xl shadow-sm mb-4">
                <h3 className="text-xl font-semibold mb-4 text-center">
                  House Rules
                </h3>
                <div className="flex justify-between items-start">
                  <p className="border border-gray border-b-2 rounded-md px-3 py-1">
                    <strong> Check In :</strong> 3:00 pm
                  </p>
                  <p className="border border-gray border-b-2 rounded-md px-3 py-1">
                    <strong> Check Out :</strong> 11:00 am
                  </p>
                </div>

                {/* check-in/check-out */}
              </div>

              {/* Add dates for prices :: start */}
              <div className="p-4 border rounded-xl shadow-sm mb-4">
                <h3 className="text-xl font-semibold mb-4">
                  Add dates for prices
                </h3>

                {/* Dates Section */}
                <div className="grid grid-cols-2 gap-2 mb-4">
                  <div>
                    {/* date-time :: start */}
                    <div className="form_field_area mx-0 relative">
                      <label className="block text-xs font-bold mb-1 mx-auto text-center">
                        Check-in
                      </label>
                      <Preview>
                        <div className="relative w-fit sm:w-40 mx-auto">
                          <div className="absolute flex items-center justify-center w-12 h-full rounded-l text-black">
                            <Lucide icon="Calendar" className="w-4 h-4" />
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
                            className="text-black rounded-sm py-2 px-9 text-sm"
                          />
                        </div>
                      </Preview>
                    </div>
                  </div>
                  <div>
                    {/* date-time :: start */}
                    <div className="form_field_area mx-0 relative">
                      <label className="block text-xs font-bold mb-1 mx-auto text-center">
                        Checkout
                      </label>
                      <Preview>
                        <div className="relative w-fit sm:w-40 mx-auto">
                          <div className="absolute flex items-center justify-center w-12 h-full rounded-l text-black">
                            <Lucide icon="Calendar" className="w-4 h-4" />
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
                            className="text-black rounded-sm py-2 px-9 text-sm"
                          />
                        </div>
                      </Preview>
                    </div>
                    {/* date-time :: end */}
                  </div>
                </div>

                {/* Guests Dropdown */}
                <div className="relative">
                  <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="w-full border p-2 rounded flex justify-between items-center"
                  >
                    <span>
                      {guests.adults +
                        guests.children +
                        guests.infants +
                        guests.pets}{" "}
                      guest
                      {guests.adults +
                        guests.children +
                        guests.infants +
                        guests.pets !==
                        1 && "s"}
                    </span>
                    <span>{isDropdownOpen ? "▲" : "▼"}</span>
                  </button>

                  {isDropdownOpen && (
                    <div className="absolute z-10 bg-white w-full border mt-2 rounded-lg shadow-lg p-4 space-y-4">
                      {["adults", "children", "infants", "pets"].map((type) => (
                        <div
                          key={type}
                          className="flex justify-between items-center"
                        >
                          <div className="capitalize">{type}</div>
                          <div className="flex items-center space-x-2">
                            <button
                              onClick={() => decrement(type)}
                              className="border p-1 rounded-full w-8 h-8 flex items-center justify-center"
                            >
                              -
                            </button>
                            <span>{guests[type]}</span>
                            <button
                              onClick={() => increment(type)}
                              className="border p-1 rounded-full w-8 h-8 flex items-center justify-center"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      ))}

                      <p className="text-xs text-gray-500 mt-2">
                        Maximum 6 guests. Pets are allowed up to 2.
                      </p>

                      <button
                        onClick={() => setIsDropdownOpen(false)}
                        className="text-sm text-blue-600 mt-4 underline"
                      >
                        Close
                      </button>
                    </div>
                  )}
                </div>

                {/* Check Availability Button */}
                <button
                  variant="primary"
                  className="w-full bg-[#F97313] hover:bg-[#000000] text-white py-2 rounded-lg mt-4"
                >
                  Check availability
                </button>
              </div>
            </div>
          </div>

          {/* Rooms Card Details :: start */}
          <div className="mx-auto my-10 p-4 shadow-xl rounded-lg border ">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-4">
              {/* Left Column - Image Gallery */}
              <div
                className="relative border rounded-lg overflow-hidden cursor-pointer"
                onClick={() => {
                  setIsOpen(true);
                  setStartIndex(0);
                }}
              >
                <img
                  src={images[0]}
                  alt="Room"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 bottom-2 left-4 bg-[#f97316] text-white font-bold  px-4 pt-1 pb-4 w-fit rounded-full  h-[30px]  ">
                  {images.length} Photos →
                </div>
                {/* Deluxe Room size details :: start */}
                <div className="space-y-4 py-4 px-4">
                  <h3 className="text-[21px] font-semibold">Deluxe Room</h3>
                  <div className="flex items-center space-x-3">
                    <RiCustomSize className="text-xl" />
                    <div>
                      <p className="text-gray-500 text-sm">
                        205 sq.ft (19 sq.mt)
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <RiGalleryView className="text-xl" />
                    <div>
                      <p className="text-gray-500 text-sm">City View</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FaShower className="text-xl" />
                    <div>
                      <p className="text-gray-500 text-sm">1 Bathroom</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FaBed className="text-xl" />
                    <div>
                      <p className="text-gray-500 text-sm">King Bed</p>
                    </div>
                  </div>
                </div>
                {/* Deluxe Room size details :: end */}
              </div>

              {/* Right Column - Booking Options */}
              <div className="flex flex-col  gap-4">
                {/* Room Only */}
                <div className="border flex-grow rounded-lg p-4 flex flex-col md:flex-row justify-between">
                  <div>
                    <h2 className="font-semibold text-lg">Room Only</h2>
                    <ul className="text-sm mt-2 list-disc ml-4">
                      <li>No meals included</li>
                      <li>15% longstay discount included</li>
                      <li>Non-Refundable</li>
                    </ul>
                    <button className="text-blue-600 text-sm mt-2 underline">
                      More Details
                    </button>
                  </div>
                  <div className="text-right mt-4 md:mt-0">
                    <p className="line-through text-gray-400 text-sm">₹2,874</p>
                    <p className="text-2xl font-bold">₹1,829</p>
                    <p className="text-sm text-gray-600">+₹397 Taxes & Fees</p>
                    <button className="mt-2 bg-primary text-white px-4 py-2 rounded">
                      BOOK NOW
                    </button>
                  </div>
                </div>

                {/* Room with Breakfast */}
                <div className="border flex-grow rounded-lg p-4 flex flex-col md:flex-row justify-between">
                  <div>
                    <h2 className="font-semibold text-lg">
                      Room with Breakfast
                    </h2>
                    <ul className="text-sm mt-2 list-disc ml-4">
                      <li>Breakfast</li>
                      <li>15% longstay discount included</li>
                      <li>Non-Refundable</li>
                    </ul>
                    <button className="text-blue-600 text-sm mt-2 underline">
                      More Details
                    </button>
                  </div>
                  <div className="text-right mt-4 md:mt-0">
                    <p className="line-through text-gray-400 text-sm">₹3,059</p>
                    <p className="text-2xl font-bold">₹1,946</p>
                    <p className="text-sm text-gray-600">+₹422 Taxes & Fees</p>
                    <button className="mt-2 bg-primary text-white px-4 py-2 rounded">
                      BOOK NOW
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Popup Gallery */}
            {isOpen && (
              <div
                className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
                onClick={() => setIsOpen(false)} // Close when clicking backdrop
              >
                <div
                  className="relative w-11/12 md:w-2/3 lg:w-1/2"
                  onClick={(e) => e.stopPropagation()} // Prevent backdrop close when clicking image
                >
                  {/* Close Button */}
                  <button
                    className="absolute top-2 right-2 text-white text-2xl z-50"
                    onClick={() => setIsOpen(false)}
                  >
                    ✕
                  </button>

                  {/* Image Slider */}
                  <Slider {...settings}>
                    {images.map((img, idx) => (
                      <div key={idx}>
                        <img
                          src={img}
                          alt={`Slide ${idx}`}
                          className="w-full h-[70vh] object-contain"
                        />
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
            )}
          </div>
          {/* Rooms Card Details :: end */}

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
                  <p className="text-gray-700">This is nice place to visit..</p>
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

        {/* Compare card :: start */}
        <div className="container mx-auto px-4 py-6">
          {/* Header with arrows */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Similar Properties </h2>
            <div className="hidden md:flex gap-2">
              <button
                onClick={() => scroll("left")}
                className="p-2 bg-gray-200 rounded-full"
              >
                ◀
              </button>
              <button
                onClick={() => scroll("right")}
                className="p-2 bg-gray-200 rounded-full"
              >
                ▶
              </button>
            </div>
          </div>

          <div className="flex md:grid md:grid-cols-[250px_1fr] gap-4">
            {/* Fixed first card (desktop) */}
            <div
              className="hidden shadow-md border md:block rounded-xl overflow-hidden cursor-pointer"
              onClick={() => setPopup(hotels[0])}
            >
              <img
                src={hotels[0].img}
                alt=""
                className="w-full h-40 object-cover "
              />
              <div className="p-3 text-center">
                <h3 className="font-semibold ">{hotels[0].name}</h3>
                <div className="flex my-3  justify-center items-center space-x-1 mb-1">
                  <FaStar className="text-yellow-400" />
                  <FaStar className="text-yellow-400" />
                  <FaStar className="text-yellow-400" />
                  <FaStar className="text-yellow-400" />
                </div>
                <p className="text-lg font-bold  text-gray-600">
                  {hotels[0].price}
                </p>

                <button className="bg-primary mb-4 text-white text-[13px] font-medium px-4 py-1 rounded-full mt-3">
                  Select Stay
                </button>
                <p className="text-yellow-500 border-t py-2 flex justify-center items-center gap-1">
                  {hotels[0].rating} <FaStar className="text-yellow-400" />
                  Excellent
                </p>
                <p className="text-gray-500 font-semibold border-t py-2 flex justify-center items-center gap-1">
                  Hotel
                </p>
                <p className="text-gray-500 font-semibold border-t py-2 flex justify-center items-center gap-1">
                  Hotel
                </p>
                <p className="text-gray-500 font-semibold border-t py-2 flex justify-center items-center gap-1">
                  Distance
                </p>
                <p className="text-gray-500 font-semibold border-t py-2 flex justify-center items-center gap-1">
                  Free Cancellation
                </p>
                <p className="text-gray-500  border-t py-2 flex justify-center items-center gap-1">
                  Free Breakfast Available at Higher Price
                </p>
              </div>
            </div>

            {/* Scrollable cards */}
            <div
              ref={scrollRef}
              className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory md:overflow-hidden"
              style={{ scrollBehavior: "smooth" }}
            >
              {hotels.slice(1).map((hotel) => (
                <div
                  key={hotel.id}
                  className="w-full border md:min-w-[250px] md:max-w-[250px] flex-shrink-0 rounded-xl overflow-hidden cursor-pointer snap-start"
                  onClick={() => setPopup(hotel)}
                >
                  <img
                    src={hotel.img}
                    alt=""
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-3 text-center">
                    <h3 className="font-semibold">{hotel.name}</h3>
                    <div className="flex my-3  justify-center items-center space-x-1 mb-1">
                      <FaStar className="text-yellow-400" />
                      <FaStar className="text-yellow-400" />
                      <FaStar className="text-yellow-400" />
                      <FaStar className="text-yellow-400" />
                    </div>
                    <p className="text-lg font-bold text-gray-600 ">
                      {hotel.price}
                    </p>

                    <button className="bg-primary mb-4 text-white text-[13px] font-medium px-4 py-1 rounded-full mt-3">
                      Select Stay
                    </button>
                    <p className="text-yellow-500 border-t py-2 flex justify-center items-center gap-1">
                      {hotel.rating} <FaStar className="text-yellow-400" />
                      Excellent
                    </p>
                    <p className="text-gray-500 font-semibold border-t py-2 flex justify-center items-center gap-1">
                      Hotel
                    </p>
                    <p className="text-gray-500 font-semibold border-t py-2 flex justify-center items-center gap-1">
                      Hotel
                    </p>
                    <p className="text-gray-500 font-semibold border-t py-2 flex justify-center items-center gap-1">
                      Distance
                    </p>
                    <p className="text-gray-500 font-semibold border-t py-2 flex justify-center items-center gap-1">
                      Free Cancellation
                    </p>
                    <p className="text-gray-500  border-t py-2 flex justify-center items-center gap-1">
                      Free Breakfast Available at Higher Price
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Popup */}
          {popup && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="popup-content bg-white rounded-xl shadow-lg max-w-md w-full overflow-hidden relative">
                <button
                  className="absolute top-2 right-2 bg-gray-200 rounded-full p-1"
                  onClick={() => setPopup(null)}
                >
                  ✕
                </button>
                <img
                  src={popup.img}
                  alt=""
                  className="w-full h-56 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-lg font-bold">{popup.name}</h2>
                  <p className="text-gray-600">{popup.price}</p>
                  <p className="text-yellow-500">⭐ {popup.rating}</p>
                </div>
              </div>
            </div>
          )}
        </div>
        {/* Compare card :: end */}

        {/* FOOTER SECTION */}
        <Footer></Footer>
      </div>
    </>
  );
}

export default Main;
