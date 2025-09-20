// @ts-nocheck
import { useState, useRef, useEffect } from "react";
import Lucide from "../../base-components/Lucide";
import { useNavigate } from "react-router-dom";
import { FormInput, FormCheck } from "../../base-components/Form";
import _ from "lodash";
import api from "../../../apiconfig.json";
import axios from "axios";


const activityFilter = ({selectFilterType, selectFilterModel})=>{
    const server = api.API_URL;
    const [resDataType, setResDataType] = useState('');
    //const [resDataCar, setResDataCar] = useState('');
    const fetchData = ()=>{
       
         const res = axios.get(`${server}super-activity-master/front/get-activity-filter/`).then((response)=> {
           console.log("Data:123",response.data.activityData);
           setResDataType(response.data.activityData);
            
         })
         .catch(function (error) {
           console.log(error);
           });
    
       
     }

     useEffect(()=>{
        fetchData();
     },[])
   
     console.log(resDataType);
    return (
        <>
           <div className="review_sidebar_wrap p-8 rounded-lg bg-white border-slate-200 border-solid border shadow-lg">
                              <h2 className="text-2xl font-bold text-center pb-6">Select Filters</h2>
                              <div className="mb-6">
                                 <ul>
                                    <li><label className="text-base font-bold text-left pb-3 block">Activity Type</label></li>
                                    { resDataType && resDataType.length >0 ?
                                       _.take(resDataType, resDataType.length).map((item, Key) => (
                                          <>
                                             <li className="flex justify-between pb-3 mb-3 border-b border-inherit border-solid">
                                                <FormCheck className="mt-0">
                                                    <FormCheck.Input
                                                    name="activityType"
                                                    id="checkbox-switch-1"
                                                    type="radio"
                                                    value=""
                                                    onClick={(e)=>selectFilterType(e.target.checked?`${item.activityType}`:'')}
                                                    />
                                                    <FormCheck.Label htmlFor="checkbox-switch-1">
                                                     {item.activityType}
                                                    </FormCheck.Label>
                                                </FormCheck>
                                                <span className="text-sm text-orange-500 font-medium">({item.noOfActivity})</span>
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


export default activityFilter;