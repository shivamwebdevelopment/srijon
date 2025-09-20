// @ts-nocheck
import Lucide from "../../base-components/Lucide";
import { useNavigate } from "react-router-dom";
import _ from "lodash";
import server from "../../../apiconfig.json";
import uploadImg from "../../assets/images/upload.jpg";

const ItinerarySnippetLarge = (props)=>{
   const imgPath = server.FILE_PATH;
   const navigate = useNavigate();
   const pax = JSON.parse(props.data.pax);
   let paxTC = [0,0,0,0];
      if(pax.length > 4){
          paxTC = _.split(pax[4], ",");
      }
   const urlTourName = _.replace(props.data.tourName,/\s/g, "-");
   const highlights = _.split(props.data.highlightsCSV, ",");
 
    return (
        <>
            <div className="w-full rounded-md mx-0 md:mx-1 lg:mx-1" onClick={()=>navigate(`/details/${props.data.id}/${urlTourName}`)}>
                           <div className="trip_by_destination_list_img rounded-t-lg bg-cover h-72 bg-center bg-no-repeat" style={{ backgroundImage: `url(${imgPath}${props.data.thumbnail})` }}>
                              <div
                                 className='flex items-center justify-center'>
                                 <div className="overflow-hidden cursor-pointer relative group w-full h-72">
                                    <div className="package_duration absolute top-7 right-0 bg-black py-2 px-6">
                                       <span className="text-white">{props.data.totalDays-1} Nights {props.data.totalDays} Days</span>
                                    </div>
                                    <div
                                       className="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/100 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-0 text-white flex items-end">
                                       <div className="pt-2">
                                       {highlights.length > 0 ?
                                    <div
                                        className="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                                        <div className="font-bold text-xl">Highlighted place</div>

                                        <div className="opacity-100 text-sm ">
                                        <ul className="pb-16">
                                        {_.take(highlights, highlights.length).map((item, Key) => (
                                                   <>
                                                      <li className="w-2/4 float-left mb-2 flex"><Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> {item}</li>
                                                   </>
                                                ))}
                                            {/* <li className="w-2/4 float-left mb-2 flex">
                                                <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Lachen
                                            </li>
                                            <li className="w-2/4 float-left mb-2 flex">
                                                <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Lachung
                                            </li>
                                            <li className="w-2/4 float-left mb-2 flex">
                                                <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Gurudongmar lake
                                            </li>
                                            <li className="w-2/4 float-left mb-2 flex">
                                                <Lucide icon="ChevronRight" className="w-5 h-5 pr-0.5" /> Matnitop
                                            </li> */}
                                        </ul>
                                        </div>
                                    </div>
                                    : ''}
                                       </div>
                                    </div>
                                    &nbsp;
                                 </div>
                              </div>
                           </div>
                           <div className="trip_by_destination_list_vont rounded-b-lg bg-black px-4 flex justify-between items-center">
                              {/* <p className="text-white text-base py-3 w-3/4 lg:text-sm xl:text-base">{_.startCase(_.toLower(props.data.tourName))}</p> */}
                              <p className="text-white text-base py-3 w-3/4 lg:text-sm xl:text-base">{props.data.tourName}</p>
                              <div className="w-1/4">
                                 <p className="text-white text-base text-right">₹ <span className="text-2xl font-semibold text-orange-500 lg:text-sm xl:text-xl 2xl:text-2xl">{_.round((4*pax[1] + pax[2] + Number(paxTC[1]))/8)}</span></p>
                              </div>
                           </div>
            </div>
        </>
    )


}


export default ItinerarySnippetLarge;