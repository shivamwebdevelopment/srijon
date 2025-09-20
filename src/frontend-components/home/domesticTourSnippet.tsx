// @ts-nocheck
import { Link } from "react-router-dom";
import server from "../../../apiconfig.json";
import domesticImage01 from "../../assets/images/d01.jpg";
import _ from "lodash";

const DomesticTourSnippet = (props)=>{
    console.log("Domestic: ",props.data)
    const stateNameStr = _.join(_.split(_.toLower(props.data.stateName)," "), "-");

    const imgPath = server.FILE_PATH;
    return (
        <>
        <Link to={`/all-package-tours/${props.data.stateId}/${stateNameStr}`}>
            <div className="relative cursor-pointer grayscale-0 hover:grayscale rounded-lg bg-cover h-64 bg-center bg-no-repeat" style={{ backgroundImage: `url(${imgPath}${props.data.thumbnail})` }}>
                
                    <div className="about_tour_price text-right absolute bottom-5 right-2.5">
                    <h3 className="text-lg font-semibold text-white">{props.data.stateName}</h3>
                    <p className="text-xs font-medium text-white">{props.data.Total} Package Tour</p>
                    </div>
            </div>
        </Link>
        </>
    )


}


export default DomesticTourSnippet;