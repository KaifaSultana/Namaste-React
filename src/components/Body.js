import ResturantCard from "./ResturantCard";
import resObj from "../utils/mockData";
import { useEffect, useState } from "react";
const Body = () => {
    const [resObj1,setResObj] = useState(resObj)
    useEffect(
        () => {fetchData()},[]
        );
        const fetchData = async () =>{
            const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.588446991640815&lng=88.4896222874522&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
            const json = await data.json();
            console.log(json);
            setResObj(json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants)
        }
        
    return (
        // <div className="body">
        //     <div className="filter">
        //         <button className="filter-btn" onClick={() => {
        //             const filteredList = resObj.filter(
        //                 (res) =>res.info.avgRating > 4.5
        //             )
        //             setResObj(filteredList);
        //             console.log(resObj);
        //         }}>Top rated Resturants</button>
        
        //     </div>
        //     <div className="res-container">
        //         {resObj1?.map(restaurant=><ResturantCard resData={restaurant} key={restaurant?.info.id}/>)}
            
            
        //     </div>

        // </div>
    )
}  
export default Body;
//checking git working or not