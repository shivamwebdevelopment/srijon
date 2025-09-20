// @ts-nocheck
import { useState, useRef, useEffect } from "react";
import Lucide from "../../base-components/Lucide";
import Litepicker from "../../base-components/Litepicker";
import Button from "../../base-components/Button";
import { useNavigate } from "react-router-dom";
import { FormInput, FormCheck } from "../../base-components/Form";
import {
  PreviewComponent,
  Preview,
  Source,
  Highlight,
} from "../../base-components/PreviewComponent";
import { Search } from "lucide-react";
import _ from "lodash";
import api from "../../../apiconfig.json";
import axios from "axios";


const SearchBar = ({selectFilterType, selectFilterModel})=>{
   
   const [showDropdown, setShowDropdown] = useState(false);
   const [selected, setSelected] = useState("");
   const [search, setSearch] = useState("");
   const [dateIn, setDateIn] = useState("");
   const [dateOut, setDateOut] = useState("");
   const [destination, setDestination] = useState([]);
   const [nRoom, setNRoom] = useState(1);
   const [orgCity, setOrgCity] = useState('');
   const wrapperRef = useRef(null);
  //  const destination = [
  //   "Nearby",
  //   "Kolkata, West Bengal",
  //   "New Delhi, Delhi",
  //   "North Goa, Goa",
  //   "Darjeeling, West Bengal",
  //   "Jaipur, Rajasthan",
  //   "Noida, Uttar Pradesh",
  // ];

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

   const filteredDestination = destination.filter((city) =>
    city.toLowerCase().includes(search.toLowerCase())
  );

  const handleSelect = (city) => {
    console.log("City:",city);
    setSelected(city);
    setShowDropdown(false);
  };


  const navigate = useNavigate();
  const postSearch = ()=>{
    
      if(selected!=''){
        let cityObj = orgCity.find(val=> val.cityName === selected);
        navigate(`/hotels-search/?id=${btoa(cityObj.id)}&cn=${btoa(cityObj.cityName)}&in=${btoa(dateIn)}&out=${btoa(dateOut)}&g=${btoa(guests)}&r=${btoa(nRoom)}`);
      }else{
        navigate(`/hotels-search/?id=${btoa(0)}&cn=${btoa(0)}&in=${btoa(dateIn)}&out=${btoa(dateOut)}&g=${btoa(guests)}&r=${btoa(nRoom)}`);
      }
    
  }
   //================================================================
    const server = api.API_URL;
    const [resDataType, setResDataType] = useState('');
    //const [resDataCar, setResDataCar] = useState('');
    const fetchData = ()=>{
       
         const res = axios.get(`${server}super-city-master/`).then((response)=> {
           setOrgCity(response.data);
           let res = response.data;
           let cityIdPresent = [];
           res.map((val, key)=>{
             cityIdPresent.push(val.cityName);
           })
           console.log(cityIdPresent);
           setDestination(cityIdPresent);
         })
         .catch(function (error) {
           console.log(error);
           });
    
       
     }

     useEffect(()=>{
        fetchData();
     },[])
   
    return (
        <>
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
                        value={dateIn}
                        onChange={setDateIn}
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
                        value={dateOut}
                        onChange={setDateOut}
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
                <Search onClick={postSearch} className="w-4 h-4" />
              </button>
            </div>
          </div>
        </>
    )


}


export default SearchBar;