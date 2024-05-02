

// Local Storage Functions
export function setLocalStorage( data ) {
    localStorage.setItem("site_data_cache", JSON.stringify( data ) );
}

export function getLocalStorage() {
    const data = localStorage.getItem( 'site_data_cache' );
    const dataArray = JSON.parse( data );
    return dataArray;
}
// END

