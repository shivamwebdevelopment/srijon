// @ts-nocheck
import { Link } from "react-router-dom";
import server from "../../../apiconfig.json";
import domesticImage01 from "../../assets/images/d01.jpg";

const InternationalTourSnippet = (props)=>{
    const imgPath = server.FILE_PATH;
    //console.log("Props", props);
    return (
        <>
                                <div
                                    className="sec_height grid gap-4 grid-cols-1 relative cursor-pointer grayscale-0 hover:grayscale rounded-lg bg-cover bg-center bg-no-repeat"
                                    style={{
                                        backgroundImage: `url(${imgPath}${props.data[0].thumbnail})`,
                                    }}
                                >
                                    <Link to="/all-international-tours">
                                        <div className="about_tour_price text-right px-6 absolute bottom-8 right-0 left-0 w-full">
                                            <div className="flex justify-between items-end w-full">
                                                <div>
                                                    {/* <p className="text-sm font-medium text-white">
                                                        {props.data[0].Total} Packages
                                                    </p> */}
                                                </div>
                                                <div>
                                                    <h3 className="text-lg font-semibold text-white">
                                                        International Packages
                                                    </h3>
                                                    <p className="text-xs font-medium text-white">
                                                        {props.data[0].Total} Packages
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
        </>
    )


}


export default InternationalTourSnippet;