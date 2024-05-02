//
import axios from "axios";
import api_url from "@/config";

export const handleDataCollection = () => {
    return new Promise(function (resolve, reject) {
        axios({
            method: 'get',
            url: api_url,
            responseType: 'json'
        }).then(function ( res ) {
            resolve( res );

        }).catch(function (err) {
            reject( err );
            
        });

    });
}