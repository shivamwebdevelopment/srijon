import { useRoutes } from "react-router-dom";
// import SideMenu from "../layouts/SideMenu";
// import SimpleMenu from "../layouts/SimpleMenu";
// import TopMenu from "../layouts/TopMenu";
// import DashboardOverview1 from "../pages/DashboardOverview1";
// import DashboardOverview2 from "../pages/DashboardOverview2";
// import DashboardOverview3 from "../pages/DashboardOverview3";
// import DashboardOverview4 from "../pages/DashboardOverview4";
// import Categories from "../pages/Categories";
// import AddProduct from "../pages/AddProduct";
// import ProductList from "../pages/ProductList";
// import ProductGrid from "../pages/ProductGrid";
// import TransactionList from "../pages/TransactionList";
// import TransactionDetail from "../pages/TransactionDetail";
// import SellerList from "../pages/SellerList";
// import SellerDetail from "../pages/SellerDetail";
// import Reviews from "../pages/Reviews";
// import Inbox from "../pages/Inbox";
// import FileManager from "../pages/FileManager";
// import PointOfSale from "../pages/PointOfSale";
// import Chat from "../pages/Chat";
// import Post from "../pages/Post";
// import Calendar from "../pages/Calendar";
// import CrudDataList from "../pages/CrudDataList";
// import CrudForm from "../pages/CrudForm";
// import UsersLayout1 from "../pages/UsersLayout1";
// import UsersLayout2 from "../pages/UsersLayout2";
// import UsersLayout3 from "../pages/UsersLayout3";
// import ProfileOverview1 from "../pages/ProfileOverview1";
// import ProfileOverview2 from "../pages/ProfileOverview2";
// import ProfileOverview3 from "../pages/ProfileOverview3";
// import WizardLayout1 from "../pages/WizardLayout1";
// import WizardLayout2 from "../pages/WizardLayout2";
// import WizardLayout3 from "../pages/WizardLayout3";
// import BlogLayout1 from "../pages/BlogLayout1";
// import BlogLayout2 from "../pages/BlogLayout2";
// import BlogLayout3 from "../pages/BlogLayout3";
// import PricingLayout1 from "../pages/PricingLayout1";
// import PricingLayout2 from "../pages/PricingLayout2";
// import InvoiceLayout1 from "../pages/InvoiceLayout1";
// import InvoiceLayout2 from "../pages/InvoiceLayout2";
// import FaqLayout1 from "../pages/FaqLayout1";
// import FaqLayout2 from "../pages/FaqLayout2";
// import FaqLayout3 from "../pages/FaqLayout3";
// import Login from "../pages/Login";
// import Register from "../pages/Register";
// import ErrorPage from "../pages/ErrorPage";
// import UpdateProfile from "../pages/UpdateProfile";
// import ChangePassword from "../pages/ChangePassword";
// import RegularTable from "../pages/RegularTable";
// import Tabulator from "../pages/Tabulator";
// import Modal from "../pages/Modal";
// import Slideover from "../pages/Slideover";
// import Notification from "../pages/Notification";
// import Tab from "../pages/Tab";
// import Accordion from "../pages/Accordion";
// import Button from "../pages/Button";
// import Alert from "../pages/Alert";
// import ProgressBar from "../pages/ProgressBar";
// import Tooltip from "../pages/Tooltip";
// import Dropdown from "../pages/Dropdown";
// import Typography from "../pages/Typography";
// import Icon from "../pages/Icon";
// import LoadingIcon from "../pages/LoadingIcon";
// import RegularForm from "../pages/RegularForm";
// import Datepicker from "../pages/Datepicker";
// import TomSelect from "../pages/TomSelect";
// import FileUpload from "../pages/FileUpload";
// import WysiwygEditor from "../pages/WysiwygEditor";
// import Validation from "../pages/Validation";
// import Chart from "../pages/Chart";
// import Slider from "../pages/Slider";
// import ImageZoom from "../pages/ImageZoom";

import HomeDesign from "../pages/Home";
import Home from "../pages/Home/home";
import AboutUs from "../pages/About/";
import ContactUs from "../pages/ContactUs/";
import TourListing from "../pages/TourListing";
import DomesticTour from "../pages/TourListing/domesticTour";
import InternationalTour from "../pages/TourListing/internationalTour";
import Enquiry from "../pages/Enquiry";
import StickyHome from "../pages/Home/sticky";
import TourDetails from "../pages/TourDetails";
import ReviewPackage from "../pages/ReviewPackage";
import MyProfile from "../pages/MyProfile";
import BecomePartner from "../pages/BecomePartner";
import HotelListing from "../pages/HotelListing";
import HotelSearch from "../pages/HotelListing/hotelSearch";
import CarListing from "../pages/CarListing";
import BusListing from "../pages/BusListing";
import HomeSaty from "../pages/HomeStayListing";
import ActivityListing from "../pages/ActivityListing";
import ActivityDetails from "../pages/ActivityDetails";
import TopActivity from "../pages/TopActivity";
import HotelDetails from "../pages/HotelDetails";
import HotelBookingDetails from "../pages/HotelDetails/HotelBookingDetails";
import HotelDetailsNew from "../pages/HotelDetails/Newindex";
import HotelHome from "../pages/Home/hotel";
import BusBooking from "../pages/BusBooking";
import BusSeatBooking from "../pages/BusSeatBooking";
import CarSeatBooking from "../pages/CarSeatBooking";

function Router() {
  const routes = [
    {
      path: "/",
      element: <HomeDesign />,
    },
    {
      path: "/about-us",
      element: <AboutUs />,
    },
    {
      path: "/contact-us",
      element: <ContactUs />,
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/details/:id/:name",
      element: <TourDetails />,
    },
    {
      path: "/review-details/:id/:name",
      element: <ReviewPackage />,
    },
    {
      path: "/hotel-booking-details",
      element: <HotelBookingDetails />,
    },
    {
      path: "/all-package-tours",
      element: <TourListing />,
    },
    {
      path: "/all-package-tours/:id/:stateName",
      element: <DomesticTour />,
    },
    {
      path: "/all-international-tours",
      element: <InternationalTour />,
    },
    {
      path: "/hotels",
      element: <HotelListing />,
    },
    {
      path: "/hotels-search",
      element: <HotelSearch />,
    },
    {
      path: "/hotels-new",
      element: <HotelHome />,
    },
    {
      path: "/hotel-details/:id/:name",
      element: <HotelDetails />,
    },
    {
      path: "/hotel-details-new/:id/:name",
      element: <HotelDetailsNew />,
    },
    {
      path: "/home-stay",
      element: <HomeSaty />,
    },
    {
      path: "/cars",
      element: <CarListing />,
    },
    {
      path: "/cars/:type",
      element: <CarListing />,
    },
    {
      path: "/bus",
      element: <BusListing />,
    },
    {
      path: "/bus-booking",
      element: <BusBooking />,
    },
    {
      path: "/bus-seat-booking",
      element: <BusSeatBooking />,
    },
    {
      path: "/car-seat-booking",
      element: <CarSeatBooking />,
    },
    {
      path: "/activities",
      element: <ActivityListing />,
    },
    {
      path: "/activity-details",
      element: <ActivityDetails />,
    },
    {
      path: "/top-activity",
      element: <TopActivity />,
    },
    {
      path: "/enquiry",
      element: <Enquiry />,
    },
    {
      path: "/sticky",
      element: <StickyHome />,
    },
    {
      path: "/profile",
      element: <MyProfile />,
    },
    {
      path: "/become-partner",
      element: <BecomePartner />,
    },
    // {
    //   path: "/register",
    //   element: <Register />,
    // },
    // {
    //   path: "/error-page",
    //   element: <ErrorPage />,
    // },
    // {
    //   path: "*",
    //   element: <ErrorPage />,
    // },
  ];

  return useRoutes(routes);
}

export default Router;
