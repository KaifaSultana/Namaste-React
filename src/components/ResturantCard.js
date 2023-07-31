import { CDN_URL } from "../utils/contants";
const ResturantCard = (props) => {
    const {resData} = props;
    const {cloudinaryImageId,cuisines,costForTwo,avgRating,sla,name} = resData?.info;
      return (
          <div className="res-card">
              <img className="res-logo" src={CDN_URL+cloudinaryImageId} alt="img"/>
              <h4>{name}</h4>
              <h5>{cuisines.join(", ")}</h5>
            
              <h5>{costForTwo}</h5>
              <h5>{avgRating} stars</h5>
              <h5>{sla.deliveryTime} minutes</h5>
          </div>
      )
      
  }  
  export default ResturantCard;