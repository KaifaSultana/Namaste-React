import React from "react"
import ReactDOM from "react-dom/client"

/*
Header
 - Logo
 - Nav Items
Body
 - Search
 - ResturantContainer
     -ResturantCard
       -Img
       -Name of res,rating,cuisine
Footer
  - CopyRight
  - Links
  - Adderss
  - Contact

*/
const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://img.freepik.com/free-vector/food-shopping-logo-template-design_460848-10299.jpg" alt="logo"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}
const ResturantCard = (props) => {
  const {resData} = props;
  const {cloudinaryImageId,cuisines,costForTwo,avgRating,sla,name} = resData?.info;
    return (
        <div className="res-card">
            <img className="res-logo" src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId} alt="img"/>
            <h4>{name}</h4>
            <h5>{cuisines.join(", ")}</h5>
          
            <h5>{costForTwo}</h5>
            <h5>{avgRating} stars</h5>
            <h5>{sla.deliveryTime} minutes</h5>
        </div>
    )
    
}  

const resObj =  [
        {
          "info": {
            "id": "428270",
            "name": "Cafe Coffee Day",
            "cloudinaryImageId": "b925459fbc1faf59f02f7289eb079a74",
            "locality": "E - Mall",
            "areaName": "Chandni Chawk",
            "costForTwo": "₹300 for two",
            "cuisines": [
              "Beverages",
              "Snacks",
              "Desserts"
            ],
            "avgRating": 4.4,
            "feeDetails": {
              "restaurantId": "428270",
              "fees": [
                {
                  "name": "BASE_DISTANCE",
                  "fee": 2800
                },
                {
                  "name": "BASE_TIME"
                },
                {
                  "name": "ANCILLARY_SURGE_FEE"
                }
              ],
              "totalFee": 2800
            },
            "parentId": "1",
            "avgRatingString": "4.4",
            "totalRatingsString": "50+",
            "sla": {
              "deliveryTime": 28,
              "lastMileTravel": 0.5,
              "serviceability": "SERVICEABLE",
              "slaString": "28 mins",
              "lastMileTravelString": "0.5 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2023-07-26 21:00:00",
              "opened": true
            },
            "badges": {
              "textExtendedBadges": [
                {
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "options available",
                  "fontColor": "#7E808C"
                }
              ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "description": "",
                        "fontColor": "#7E808C",
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "options available"
                      }
                    }
                  ]
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "₹100 OFF",
              "subHeader": "ABOVE ₹159",
              "discountTag": "FLAT DEAL"
            },
            "orderabilityCommunication": {
              "title": {
                
              },
              "subTitle": {
                
              },
              "message": {
                
              },
              "customIcon": {
                
              }
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT"
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/cafe-coffee-day-e-mall-chandni-chawk-kolkata-428270",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "407661",
            "name": "Burger King",
            "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
            "locality": "New Market",
            "areaName": "Esplanade",
            "costForTwo": "₹350 for two",
            "cuisines": [
              "Burgers",
              "American"
            ],
            "avgRating": 4.2,
            "feeDetails": {
              "restaurantId": "407661",
              "fees": [
                {
                  "name": "BASE_DISTANCE",
                  "fee": 2800
                },
                {
                  "name": "BASE_TIME"
                },
                {
                  "name": "ANCILLARY_SURGE_FEE"
                }
              ],
              "totalFee": 2800
            },
            "parentId": "166",
            "avgRatingString": "4.2",
            "totalRatingsString": "10K+",
            "sla": {
              "deliveryTime": 25,
              "lastMileTravel": 1.2,
              "serviceability": "SERVICEABLE",
              "slaString": "25 mins",
              "lastMileTravelString": "1.2 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2023-07-27 03:00:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "₹100 OFF",
              "subHeader": "ABOVE ₹159",
              "discountTag": "FLAT DEAL"
            },
            "orderabilityCommunication": {
              "title": {
                
              },
              "subTitle": {
                
              },
              "message": {
                
              },
              "customIcon": {
                
              }
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT"
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/burger-king-new-market-esplanade-kolkata-407661",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "8912",
            "name": "Subway",
            "cloudinaryImageId": "0bf19a82b109b40c2f5c56d00f071a33",
            "locality": "Park Street",
            "areaName": "Park Street",
            "costForTwo": "₹350 for two",
            "cuisines": [
              "Healthy Food",
              "Salads",
              "Snacks",
              "Desserts",
              "Beverages"
            ],
            "avgRating": 4,
            "feeDetails": {
              "restaurantId": "8912",
              "fees": [
                {
                  "name": "BASE_DISTANCE",
                  "fee": 2800
                },
                {
                  "name": "BASE_TIME"
                },
                {
                  "name": "ANCILLARY_SURGE_FEE"
                }
              ],
              "totalFee": 2800
            },
            "parentId": "2",
            "avgRatingString": "4.0",
            "totalRatingsString": "10K+",
            "sla": {
              "deliveryTime": 28,
              "lastMileTravel": 2.5,
              "serviceability": "SERVICEABLE",
              "slaString": "28 mins",
              "lastMileTravelString": "2.5 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2023-07-27 03:00:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "aggregatedDiscountInfoV2": {
              
            },
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "orderabilityCommunication": {
              "title": {
                
              },
              "subTitle": {
                
              },
              "message": {
                
              },
              "customIcon": {
                
              }
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT"
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/subway-park-street-kolkata-8912",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "285852",
            "name": "Starbucks Coffee",
            "cloudinaryImageId": "4df3497f1460dfd1ecd8125222f6d362",
            "locality": "Park Mansion",
            "areaName": "Taltala",
            "costForTwo": "₹400 for two",
            "cuisines": [
              "Beverages",
              "Cafe",
              "Snacks",
              "Desserts",
              "Bakery",
              "Ice Cream"
            ],
            "avgRating": 4.2,
            "feeDetails": {
              "restaurantId": "285852",
              "fees": [
                {
                  "name": "BASE_DISTANCE",
                  "fee": 2800
                },
                {
                  "name": "BASE_TIME"
                },
                {
                  "name": "ANCILLARY_SURGE_FEE"
                }
              ],
              "totalFee": 2800
            },
            "parentId": "195515",
            "avgRatingString": "4.2",
            "totalRatingsString": "1K+",
            "sla": {
              "deliveryTime": 26,
              "lastMileTravel": 2.5,
              "serviceability": "SERVICEABLE",
              "slaString": "26 mins",
              "lastMileTravelString": "2.5 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2023-07-26 23:59:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "₹100 OFF",
              "subHeader": "ABOVE ₹159",
              "discountTag": "FLAT DEAL"
            },
            "orderabilityCommunication": {
              "title": {
                
              },
              "subTitle": {
                
              },
              "message": {
                
              },
              "customIcon": {
                
              }
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT"
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/starbucks-coffee-park-mansion-taltala-kolkata-285852",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "85639",
            "name": "Mio Amore - The Cake Shop",
            "cloudinaryImageId": "8bf25e6cafe30c7e7c9c8f31f628fe96",
            "areaName": "Park Circus Area",
            "costForTwo": "₹150 for two",
            "cuisines": [
              "Desserts",
              "Bakery",
              "Snacks"
            ],
            "avgRating": 4.3,
            "feeDetails": {
              "restaurantId": "85639",
              "fees": [
                {
                  "name": "BASE_DISTANCE",
                  "fee": 2800
                },
                {
                  "name": "BASE_TIME"
                },
                {
                  "name": "ANCILLARY_SURGE_FEE"
                }
              ],
              "totalFee": 2800
            },
            "parentId": "292958",
            "avgRatingString": "4.3",
            "totalRatingsString": "1K+",
            "sla": {
              "deliveryTime": 22,
              "lastMileTravel": 2.3,
              "serviceability": "SERVICEABLE",
              "slaString": "22 mins",
              "lastMileTravelString": "2.3 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2023-07-26 22:30:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "aggregatedDiscountInfoV2": {
              
            },
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "orderabilityCommunication": {
              "title": {
                
              },
              "subTitle": {
                
              },
              "message": {
                
              },
              "customIcon": {
                
              }
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT"
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/mio-amore-the-cake-shop-park-circus-area-kolkata-85639",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "32302",
            "name": "Keventers - Milkshakes & Desserts",
            "cloudinaryImageId": "f0e94c984813053f46c214f18ce73d59",
            "locality": "Sarat bose road",
            "areaName": "Bhowanipore",
            "costForTwo": "₹200 for two",
            "cuisines": [
              "Beverages",
              "Ice Cream",
              "Desserts",
              "Healthy Food"
            ],
            "avgRating": 4.3,
            "veg": true,
            "feeDetails": {
              "restaurantId": "32302",
              "fees": [
                {
                  "name": "BASE_DISTANCE",
                  "fee": 4000
                },
                {
                  "name": "BASE_TIME"
                },
                {
                  "name": "ANCILLARY_SURGE_FEE"
                }
              ],
              "totalFee": 4000
            },
            "parentId": "268997",
            "avgRatingString": "4.3",
            "totalRatingsString": "10K+",
            "sla": {
              "deliveryTime": 30,
              "lastMileTravel": 4.2,
              "serviceability": "SERVICEABLE",
              "slaString": "30 mins",
              "lastMileTravelString": "4.2 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2023-07-27 05:00:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "₹100 OFF",
              "subHeader": "ABOVE ₹159",
              "discountTag": "FLAT DEAL"
            },
            "orderabilityCommunication": {
              "title": {
                
              },
              "subTitle": {
                
              },
              "message": {
                
              },
              "customIcon": {
                
              }
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT"
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/keventers-milkshakes-and-desserts-sarat-bose-road-bhowanipore-kolkata-32302",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "213121",
            "name": "Wow! Momo",
            "cloudinaryImageId": "0984acc0ed7b914206dbbcb90297becc",
            "locality": "Sealdah Railway Station",
            "areaName": "Burrabazar",
            "costForTwo": "₹200 for two",
            "cuisines": [
              "Tibetan",
              "Chinese",
              "Snacks",
              "Continental",
              "Desserts"
            ],
            "avgRating": 4.3,
            "feeDetails": {
              "restaurantId": "213121",
              "fees": [
                {
                  "name": "BASE_DISTANCE",
                  "fee": 2800
                },
                {
                  "name": "BASE_TIME"
                },
                {
                  "name": "ANCILLARY_SURGE_FEE"
                }
              ],
              "totalFee": 2800
            },
            "parentId": "1776",
            "avgRatingString": "4.3",
            "totalRatingsString": "1K+",
            "sla": {
              "deliveryTime": 29,
              "lastMileTravel": 2,
              "serviceability": "SERVICEABLE",
              "slaString": "29 mins",
              "lastMileTravelString": "2.0 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2023-07-27 02:00:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "₹150 OFF",
              "subHeader": "ABOVE ₹499",
              "discountTag": "FLAT DEAL"
            },
            "orderabilityCommunication": {
              "title": {
                
              },
              "subTitle": {
                
              },
              "message": {
                
              },
              "customIcon": {
                
              }
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT"
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/wow-momo-sealdah-railway-station-burrabazar-kolkata-213121",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "3638",
            "name": "Gupta Brothers -Ballygunge",
            "cloudinaryImageId": "s6osrxqumlqssg6wvu65",
            "locality": "Park Road",
            "areaName": "Ballygunge",
            "costForTwo": "₹300 for two",
            "cuisines": [
              "North Indian",
              "Chinese",
              "Desserts",
              "South Indian",
              "Indian",
              "Chaat",
              "Mexican"
            ],
            "avgRating": 4.3,
            "veg": true,
            "feeDetails": {
              "restaurantId": "3638",
              "fees": [
                {
                  "name": "BASE_DISTANCE",
                  "fee": 4000
                },
                {
                  "name": "BASE_TIME"
                },
                {
                  "name": "ANCILLARY_SURGE_FEE"
                }
              ],
              "totalFee": 4000
            },
            "parentId": "358878",
            "avgRatingString": "4.3",
            "totalRatingsString": "10K+",
            "sla": {
              "deliveryTime": 32,
              "lastMileTravel": 4.7,
              "serviceability": "SERVICEABLE",
              "slaString": "32 mins",
              "lastMileTravelString": "4.7 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2023-07-26 22:30:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "₹100 OFF",
              "subHeader": "ABOVE ₹159",
              "discountTag": "FLAT DEAL"
            },
            "orderabilityCommunication": {
              "title": {
                
              },
              "subTitle": {
                
              },
              "message": {
                
              },
              "customIcon": {
                
              }
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT"
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/gupta-brothers-ballygunge-park-road-ballygunge-kolkata-3638",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "335340",
            "name": "Natural Ice Cream",
            "cloudinaryImageId": "ys8l9grmqa6jkkizmfny",
            "locality": "Salkia Howrah",
            "areaName": "Mali Panchghara",
            "costForTwo": "₹150 for two",
            "cuisines": [
              "Ice Cream",
              "Desserts"
            ],
            "avgRating": 4.4,
            "veg": true,
            "feeDetails": {
              "restaurantId": "335340",
              "fees": [
                {
                  "name": "BASE_DISTANCE",
                  "fee": 4600
                },
                {
                  "name": "BASE_TIME"
                },
                {
                  "name": "ANCILLARY_SURGE_FEE"
                }
              ],
              "totalFee": 4600
            },
            "parentId": "2093",
            "avgRatingString": "4.4",
            "totalRatingsString": "500+",
            "sla": {
              "deliveryTime": 35,
              "lastMileTravel": 5,
              "serviceability": "SERVICEABLE",
              "slaString": "35 mins",
              "lastMileTravelString": "5.0 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2023-07-27 00:00:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "20% OFF",
              "subHeader": "UPTO ₹50"
            },
            "orderabilityCommunication": {
              "title": {
                
              },
              "subTitle": {
                
              },
              "message": {
                
              },
              "customIcon": {
                
              }
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT"
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/natural-ice-cream-salkia-howrah-mali-panchghara-kolkata-335340",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "224455",
            "name": "Sweet Truth - Cake and Desserts",
            "cloudinaryImageId": "3ec8bccd0fc2c6303d7602dd642248d5",
            "locality": "HOWRAH",
            "areaName": "Mali Panchghara",
            "costForTwo": "₹450 for two",
            "cuisines": [
              "Snacks",
              "Bakery",
              "Desserts",
              "Beverages"
            ],
            "avgRating": 4.1,
            "feeDetails": {
              "restaurantId": "224455",
              "fees": [
                {
                  "name": "BASE_DISTANCE",
                  "fee": 4600
                },
                {
                  "name": "BASE_TIME"
                },
                {
                  "name": "ANCILLARY_SURGE_FEE"
                }
              ],
              "totalFee": 4600
            },
            "parentId": "4444",
            "avgRatingString": "4.1",
            "totalRatingsString": "1K+",
            "sla": {
              "deliveryTime": 34,
              "lastMileTravel": 5,
              "serviceability": "SERVICEABLE",
              "slaString": "34 mins",
              "lastMileTravelString": "5.0 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2023-07-27 00:00:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "₹100 OFF",
              "subHeader": "ABOVE ₹159",
              "discountTag": "FLAT DEAL"
            },
            "orderabilityCommunication": {
              "title": {
                
              },
              "subTitle": {
                
              },
              "message": {
                
              },
              "customIcon": {
                
              }
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT"
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/sweet-truth-cake-and-desserts-howrah-mali-panchghara-kolkata-224455",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "324204",
            "name": "LunchBox - Meals and Thalis",
            "cloudinaryImageId": "lyxepeer3tf8kqmt3xbo",
            "locality": "DR SURESH CHANDRA BANERJEE ROAD",
            "areaName": "Beleghata",
            "costForTwo": "₹200 for two",
            "cuisines": [
              "Biryani",
              "North Indian",
              "Punjabi",
              "Healthy Food",
              "Desserts",
              "Beverages"
            ],
            "avgRating": 4.3,
            "feeDetails": {
              "restaurantId": "324204",
              "fees": [
                {
                  "name": "BASE_DISTANCE",
                  "fee": 4600
                },
                {
                  "name": "BASE_TIME"
                },
                {
                  "name": "ANCILLARY_SURGE_FEE"
                }
              ],
              "totalFee": 4600
            },
            "parentId": "4925",
            "avgRatingString": "4.3",
            "totalRatingsString": "1K+",
            "sla": {
              "deliveryTime": 34,
              "lastMileTravel": 5,
              "serviceability": "SERVICEABLE",
              "slaString": "34 mins",
              "lastMileTravelString": "5.0 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2023-07-27 00:00:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "₹100 OFF",
              "subHeader": "ABOVE ₹159",
              "discountTag": "FLAT DEAL"
            },
            "orderabilityCommunication": {
              "title": {
                
              },
              "subTitle": {
                
              },
              "message": {
                
              },
              "customIcon": {
                
              }
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT"
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/lunchbox-meals-and-thalis-dr-suresh-chandra-banerjee-road-beleghata-kolkata-324204",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "8706",
            "name": "The Yellow Straw",
            "cloudinaryImageId": "59f909076a38e4c7f110466f11b75aa8",
            "locality": "Dalhousie Bbd Bagh",
            "areaName": "Lal Bazar",
            "costForTwo": "₹200 for two",
            "cuisines": [
              "Juices",
              "Beverages",
              "Salads",
              "Healthy Food",
              "Ice Cream",
              "Desserts",
              "Snacks",
              "South Indian"
            ],
            "avgRating": 4.4,
            "veg": true,
            "feeDetails": {
              "restaurantId": "8706",
              "fees": [
                {
                  "name": "BASE_DISTANCE",
                  "fee": 2800
                },
                {
                  "name": "BASE_TIME"
                },
                {
                  "name": "ANCILLARY_SURGE_FEE"
                }
              ],
              "totalFee": 2800
            },
            "parentId": "10442",
            "avgRatingString": "4.4",
            "totalRatingsString": "1K+",
            "sla": {
              "deliveryTime": 24,
              "lastMileTravel": 0.9,
              "serviceability": "SERVICEABLE",
              "slaString": "24 mins",
              "lastMileTravelString": "0.9 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2023-07-26 19:00:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "₹100 OFF",
              "subHeader": "ABOVE ₹159",
              "discountTag": "FLAT DEAL"
            },
            "orderabilityCommunication": {
              "title": {
                
              },
              "subTitle": {
                
              },
              "message": {
                
              },
              "customIcon": {
                
              }
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT"
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/the-yellow-straw-dalhousie-bbd-bagh-lal-bazar-kolkata-8706",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "67717",
            "name": "Kookie Jar",
            "cloudinaryImageId": "tg3exxqko24fbnkyizhe",
            "locality": "Opposite FBB",
            "areaName": "Elgin",
            "costForTwo": "₹350 for two",
            "cuisines": [
              "Desserts",
              "Snacks",
              "Bakery"
            ],
            "avgRating": 4.6,
            "feeDetails": {
              "restaurantId": "67717",
              "fees": [
                {
                  "name": "BASE_DISTANCE",
                  "fee": 3400
                },
                {
                  "name": "BASE_TIME"
                },
                {
                  "name": "ANCILLARY_SURGE_FEE"
                }
              ],
              "totalFee": 3400
            },
            "parentId": "5550",
            "avgRatingString": "4.6",
            "totalRatingsString": "10K+",
            "sla": {
              "deliveryTime": 28,
              "lastMileTravel": 3,
              "serviceability": "SERVICEABLE",
              "slaString": "28 mins",
              "lastMileTravelString": "3.0 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2023-07-26 21:30:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "aggregatedDiscountInfoV2": {
              
            },
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "orderabilityCommunication": {
              "title": {
                
              },
              "subTitle": {
                
              },
              "message": {
                
              },
              "customIcon": {
                
              }
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT"
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/kookie-jar-opposite-fbb-elgin-kolkata-67717",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "258968",
            "name": "Machhli Baba Fries",
            "cloudinaryImageId": "pqqqckhvkmfazk9iahv0",
            "locality": "Bentick Street",
            "areaName": "Burrabazar",
            "costForTwo": "₹300 for two",
            "cuisines": [
              "Bengali"
            ],
            "avgRating": 4.3,
            "feeDetails": {
              "restaurantId": "258968",
              "fees": [
                {
                  "name": "BASE_DISTANCE",
                  "fee": 2800
                },
                {
                  "name": "BASE_TIME"
                },
                {
                  "name": "ANCILLARY_SURGE_FEE"
                }
              ],
              "totalFee": 2800
            },
            "parentId": "4413",
            "avgRatingString": "4.3",
            "totalRatingsString": "1K+",
            "sla": {
              "deliveryTime": 34,
              "lastMileTravel": 0.4,
              "serviceability": "SERVICEABLE",
              "slaString": "34 mins",
              "lastMileTravelString": "0.4 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2023-07-27 00:00:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "₹75 OFF",
              "subHeader": "ABOVE ₹299",
              "discountTag": "FLAT DEAL"
            },
            "orderabilityCommunication": {
              "title": {
                
              },
              "subTitle": {
                
              },
              "message": {
                
              },
              "customIcon": {
                
              }
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT"
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/machhli-baba-fries-bentick-street-burrabazar-kolkata-258968",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "54741",
            "name": "Cakes Gariahat",
            "cloudinaryImageId": "otsr1m2octbkcnwxcsiv",
            "areaName": "Gariahat",
            "costForTwo": "₹200 for two",
            "cuisines": [
              "Bakery",
              "Desserts"
            ],
            "avgRating": 4.7,
            "feeDetails": {
              "restaurantId": "54741",
              "fees": [
                {
                  "name": "BASE_DISTANCE",
                  "fee": 5200
                },
                {
                  "name": "BASE_TIME"
                },
                {
                  "name": "ANCILLARY_SURGE_FEE"
                }
              ],
              "totalFee": 5200
            },
            "parentId": "375071",
            "avgRatingString": "4.7",
            "totalRatingsString": "10K+",
            "sla": {
              "deliveryTime": 33,
              "lastMileTravel": 6.2,
              "serviceability": "SERVICEABLE",
              "slaString": "33 mins",
              "lastMileTravelString": "6.2 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2023-07-26 21:00:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "aggregatedDiscountInfoV2": {
              
            },
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "orderabilityCommunication": {
              "title": {
                
              },
              "subTitle": {
                
              },
              "message": {
                
              },
              "customIcon": {
                
              }
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT"
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/cakes-gariahat-gariahat-kolkata-54741",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "25627",
            "name": "Barista Coffee",
            "cloudinaryImageId": "02731f6bd73f982bc74a522edd9c1b01",
            "locality": "Park Street",
            "areaName": "Park Street",
            "costForTwo": "₹350 for two",
            "cuisines": [
              "Beverages",
              "Snacks",
              "Desserts"
            ],
            "avgRating": 4.2,
            "feeDetails": {
              "restaurantId": "25627",
              "fees": [
                {
                  "name": "BASE_DISTANCE",
                  "fee": 3000
                },
                {
                  "name": "BASE_TIME"
                },
                {
                  "name": "ANCILLARY_SURGE_FEE"
                }
              ],
              "totalFee": 3000
            },
            "parentId": "2359",
            "avgRatingString": "4.2",
            "totalRatingsString": "1K+",
            "sla": {
              "deliveryTime": 32,
              "lastMileTravel": 2.5,
              "serviceability": "SERVICEABLE",
              "slaString": "32 mins",
              "lastMileTravelString": "2.5 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2023-07-27 00:00:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "₹100 OFF",
              "subHeader": "ABOVE ₹159",
              "discountTag": "FLAT DEAL"
            },
            "orderabilityCommunication": {
              "title": {
                
              },
              "subTitle": {
                
              },
              "message": {
                
              },
              "customIcon": {
                
              }
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT"
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/barista-coffee-park-street-kolkata-25627",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "19935",
            "name": "Tea Junction",
            "cloudinaryImageId": "hrxkpf3guuqc4hjsqnzb",
            "locality": "BNWCC Hospital",
            "areaName": "Park Street Area",
            "costForTwo": "₹150 for two",
            "cuisines": [
              "Beverages",
              "Snacks",
              "Desserts"
            ],
            "avgRating": 4,
            "feeDetails": {
              "restaurantId": "19935",
              "fees": [
                {
                  "name": "BASE_DISTANCE",
                  "fee": 2800
                },
                {
                  "name": "BASE_TIME"
                },
                {
                  "name": "ANCILLARY_SURGE_FEE"
                }
              ],
              "totalFee": 2800
            },
            "parentId": "4311",
            "avgRatingString": "4.0",
            "totalRatingsString": "1K+",
            "sla": {
              "deliveryTime": 26,
              "lastMileTravel": 2.7,
              "serviceability": "SERVICEABLE",
              "slaString": "26 mins",
              "lastMileTravelString": "2.7 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2023-07-27 05:00:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "₹100 OFF",
              "subHeader": "ABOVE ₹159",
              "discountTag": "FLAT DEAL"
            },
            "orderabilityCommunication": {
              "title": {
                
              },
              "subTitle": {
                
              },
              "message": {
                
              },
              "customIcon": {
                
              }
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT"
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/tea-junction-bnwcc-hospital-park-street-area-kolkata-19935",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "54829",
            "name": "French Loaf",
            "cloudinaryImageId": "rreatzfvslkk7grrcxia",
            "locality": "Salt Lake",
            "areaName": "Salt Lake",
            "costForTwo": "₹400 for two",
            "cuisines": [
              "Fast Food"
            ],
            "avgRating": 4.3,
            "feeDetails": {
              "restaurantId": "54829",
              "fees": [
                {
                  "name": "BASE_DISTANCE",
                  "fee": 5800
                },
                {
                  "name": "BASE_TIME"
                },
                {
                  "name": "ANCILLARY_SURGE_FEE"
                }
              ],
              "totalFee": 5800
            },
            "parentId": "393",
            "avgRatingString": "4.3",
            "totalRatingsString": "5K+",
            "sla": {
              "deliveryTime": 33,
              "lastMileTravel": 7.4,
              "serviceability": "SERVICEABLE",
              "slaString": "33 mins",
              "lastMileTravelString": "7.4 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2023-07-26 21:45:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "₹100 OFF",
              "subHeader": "ABOVE ₹159",
              "discountTag": "FLAT DEAL"
            },
            "orderabilityCommunication": {
              "title": {
                
              },
              "subTitle": {
                
              },
              "message": {
                
              },
              "customIcon": {
                
              }
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT"
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/french-loaf-salt-lake-kolkata-54829",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "58090",
            "name": "Cakes, Phoolbagan",
            "cloudinaryImageId": "qlpywzh0rp3zc7n1qngc",
            "locality": "Beside Ghosh Brothers Sweet",
            "areaName": "Beleghata",
            "costForTwo": "₹200 for two",
            "cuisines": [
              "Bakery",
              "Desserts"
            ],
            "avgRating": 4.5,
            "feeDetails": {
              "restaurantId": "58090",
              "fees": [
                {
                  "name": "BASE_DISTANCE",
                  "fee": 4000
                },
                {
                  "name": "BASE_TIME"
                },
                {
                  "name": "ANCILLARY_SURGE_FEE"
                }
              ],
              "totalFee": 4000
            },
            "parentId": "4861",
            "avgRatingString": "4.5",
            "totalRatingsString": "5K+",
            "sla": {
              "deliveryTime": 29,
              "lastMileTravel": 4.7,
              "serviceability": "SERVICEABLE",
              "slaString": "29 mins",
              "lastMileTravelString": "4.7 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2023-07-26 20:45:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "aggregatedDiscountInfoV2": {
              
            },
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "orderabilityCommunication": {
              "title": {
                
              },
              "subTitle": {
                
              },
              "message": {
                
              },
              "customIcon": {
                
              }
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT"
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/cakes-phoolbagan-beside-ghosh-brothers-sweet-beleghata-kolkata-58090",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "110303",
            "name": "KFC",
            "cloudinaryImageId": "56c9ab92bd79745fd152a30fa2525426",
            "locality": "New Complex",
            "areaName": "Howrah Railway Station",
            "costForTwo": "₹450 for two",
            "cuisines": [
              "Burgers",
              "Biryani",
              "American",
              "Snacks",
              "Fast Food"
            ],
            "avgRating": 4.1,
            "feeDetails": {
              "restaurantId": "110303",
              "fees": [
                {
                  "name": "BASE_DISTANCE",
                  "fee": 3400
                },
                {
                  "name": "BASE_TIME"
                },
                {
                  "name": "ANCILLARY_SURGE_FEE"
                }
              ],
              "totalFee": 3400
            },
            "parentId": "547",
            "avgRatingString": "4.1",
            "totalRatingsString": "1K+",
            "sla": {
              "deliveryTime": 37,
              "lastMileTravel": 3.8,
              "serviceability": "SERVICEABLE",
              "slaString": "37 mins",
              "lastMileTravelString": "3.8 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2023-07-26 23:59:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "20% OFF",
              "subHeader": "UPTO ₹50"
            },
            "orderabilityCommunication": {
              "title": {
                
              },
              "subTitle": {
                
              },
              "message": {
                
              },
              "customIcon": {
                
              }
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT"
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/kfc-new-complex-howrah-railway-station-kolkata-110303",
            "type": "WEBLINK"
          }
        }
      ]

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                {resObj.map(restaurant=><ResturantCard resData={restaurant} key={restaurant?.info.id}/>)}
            
            
            </div>

        </div>
    )
}  

const AppLayout = () => {
    return ( <div className="app">
        <Header/>
        <Body/>
    </div>)
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);