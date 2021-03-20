import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import Api_Key from "./config";
const containerStyle = {
    width: '400px',
    height: '400px'
};

const center = {
    lat: -3.745,
    lng: -38.523
};

function Map() {
    return (
        <LoadScript
            googleMapsApiKey={Api_Key}
        >
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
            >
                { /* Child components, such as markers, info windows, etc. */}
                <></>
            </GoogleMap>
        </LoadScript>
    )
}

export default React.memo(Map)