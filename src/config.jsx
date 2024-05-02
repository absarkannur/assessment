//
let api_url = "";

if( process.env.NODE_ENV === "production" ) {
    api_url  = "//universities.hipolabs.com/search?country=United%20Arab%20Emirates";
    
} else if ( process.env.NODE_ENV === "development" ) {
    api_url  = "//universities.hipolabs.com/search?country=United%20Arab%20Emirates";

}

export default api_url;