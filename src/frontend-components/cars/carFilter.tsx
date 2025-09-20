// @ts-nocheck
import { useState, useRef, useEffect } from "react";
import Lucide from "../../base-components/Lucide";
import { useNavigate } from "react-router-dom";
import { FormInput, FormCheck } from "../../base-components/Form";
import _ from "lodash";
import api from "../../../apiconfig.json";
import axios from "axios";


const carFilter = ({selectFilterType, selectFilterModel})=>{
    const server = api.API_URL;
    const [resDataType, setResDataType] = useState('');
    const [resDataCar, setResDataCar] = useState('');
    const fetchData = ()=>{
       
         const res = axios.get(`${server}super-transport-master/front/get-car-filter/`).then((response)=> {
           console.log("Data:123",response.data);
           setResDataType(response.data.carTypeData);
           setResDataCar(response.data.carData); 
         })
         .catch(function (error) {
           console.log(error);
           });
    
       
     }

     useEffect(()=>{
        fetchData();
     },[])
   
     //console.log(resData);
    return (
        <>
           <div className="review_sidebar_wrap p-8 rounded-lg bg-white border-slate-200 border-solid border shadow-lg">
                              <h2 className="text-2xl font-bold text-center pb-6">Select Filters</h2>
                              <div className="mb-6">
                                 <ul>
                                    <li><label className="text-base font-bold text-left pb-3 block">Cab Type</label></li>
                                    { resDataType.length >0 ?
                                       _.take(resDataType, resDataType.length).map((item, Key) => (
                                          <>
                                             <li className="flex justify-between pb-3 mb-3 border-b border-inherit border-solid">
                                                <FormCheck className="mt-0">
                                                    <FormCheck.Input
                                                    name="carType"
                                                    id="checkbox-switch-1"
                                                    type="radio"
                                                    value=""
                                                    onClick={(e)=>selectFilterType(e.target.checked?`${item.typeId}`:'')}
                                                    />
                                                    <FormCheck.Label htmlFor="checkbox-switch-1">
                                                     {item.transportType}
                                                    </FormCheck.Label>
                                                </FormCheck>
                                                <span className="text-sm text-orange-500 font-medium">({item.noOfCars})</span>
                                             </li>
                                          </>
                                       ))
                                 :'No Record Found' }
                                 </ul>
                              </div>
                              <div className="mb-6">
                                 <ul>
                                    <li><label className="text-base font-bold text-left pb-3 block">Fuel Type</label></li>
                                    <li className="flex justify-between pb-3 mb-3 border-b border-inherit border-solid">
                                       <FormCheck className="mt-0">
                                          <FormCheck.Input
                                          name="carType"
                                          id="checkbox-switch-5"
                                          type="radio"
                                          value=""
                                          />
                                          <FormCheck.Label htmlFor="checkbox-switch-5">
                                          DIESEL
                                          </FormCheck.Label>
                                       </FormCheck>
                                       {/* <span className="text-sm text-orange-500 font-medium">(1)</span> */}
                                    </li>
                                 </ul>
                              </div>
                              <div>
                                 <ul>
                                    <li><label className="text-base font-bold text-left pb-3 block">Cab Model</label></li>
                                    { resDataCar.length >0 ?
                                       _.take(resDataCar, resDataCar.length).map((item, Key) => (
                                          <>
                                             <li className="flex justify-between pb-3 mb-3 border-b border-inherit border-solid">
                                                <FormCheck className="mt-0">
                                                   <FormCheck.Input
                                                   name="carType"
                                                   id="checkbox-switch-6"
                                                   type="radio"
                                                   value=""
                                                   className="radio"
                                                   onClick={(e)=>selectFilterModel(e.target.checked?`${_.trim(item.transportName)}`:'')}
                                                   />
                                                   <FormCheck.Label htmlFor="checkbox-switch-6">
                                                    {item.transportName}
                                                   </FormCheck.Label>
                                                </FormCheck>
                                                <span className="text-sm text-orange-500 font-medium">({item.noOfCars})</span>
                                             </li>
                                          </>
                                       ))
                                 :'No Record Found' }
                                 </ul>
                              </div>
                </div>
        </>
    )


}


export default carFilter;