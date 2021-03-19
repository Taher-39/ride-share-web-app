import React from 'react';
import { useHistory } from 'react-router';
import './Display.css'
const Display = (props) => {
    const { vehiclePhoto, riderName, id } = props.rider;
    const history = useHistory();
    const handleRide = (id) => {
        history.push(`/display/${id}`)
    }
    return (
        <div className="col-md-3 col-sm-4 col-xm-6 d-flex justify-content-center">
            <div onClick={() => handleRide(id)} className="displayStyle">
                <div>
                    <img src={vehiclePhoto} alt="" width="100%" />
                    <h3>{riderName}</h3>
                </div>
            </div>
        </div>
    );
};

export default Display;