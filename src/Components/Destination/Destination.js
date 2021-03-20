import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Map from '../../images/Map.png'
import ridersData from '../../FakeData/FakeData.json'
import './Destination.css'
const Destination = () => {
    // debugger;
    const [path, setPath] = useState(false)
    const [searchResult, setSearchResult] = useState({
        pickForm: "",
        pickTo: ""
    })
    
    const { id } = useParams()
    const [destination, setDestination] = useState({})
    useEffect(() => {
        setDestination(ridersData[id - 1])
    }, [])
    
    //handle blur 
    const handleBlur = (e) =>{

        const newSearchResult = {...searchResult}
        newSearchResult[e.target.name] = e.target.value;
        setSearchResult(newSearchResult)
    }
    //handle submit
    const handleSubmit = ( e ) => {
        e.preventDefault()
    }
    return (
        <div>
        <div className="container mt-4">
            <div className="row col-sm-12 justify-content-center d-fle">
                <div className="search-bar bg-secondary p-4">
                    
                    <form onSubmit={handleSubmit}>
                    {path ?
                        <div>
                            <div className="btn btn-info pl-5 pr-5">
                                <p>{searchResult.pickFrom}</p>⇩
                                <p>{searchResult.pickTo}</p>
                            </div>
                            <div>
                                <div className="row justify-content-around d-fle bg-light mt-3 rounded py-2">
                                    <div><img src={destination.vehiclePhoto} alt="" width="50px" /></div>
                                    <div>{destination.riderName}</div>
                                    <div>👨‍👨‍👦‍👦{destination.vehicleDetails}</div>
                                    <div>${destination.Cost}</div>
                                </div>
                                <div className="row justify-content-around d-fle bg-light mt-3 rounded py-2">
                                    <div><img src={destination.vehiclePhoto} alt="" width="50px" /></div>
                                    <div>{destination.riderName}</div>
                                    <div>👨‍👨‍👦‍👦{destination.vehicleDetails}</div>
                                    <div>${destination.Cost}</div>
                                </div>
                                <div className="row justify-content-around d-fle bg-light mt-3 rounded py-2">
                                    <div><img src={destination.vehiclePhoto} alt="" width="50px" /></div>
                                    <div>{destination.riderName}</div>
                                    <div>👨‍👨‍👦‍👦{destination.vehicleDetails}</div>
                                    <div>${destination.Cost}</div>
                                </div>
                            </div>
                        </div>
                    : <div>
                            <h4>Id {id}</h4>
                            <h5>Pick From</h5>
                            <input onBlur={handleBlur} className="form-control mb-2" type="text" name="pickFrom" id="" placeholder="Start destination" required />
                                <h5>Pick To</h5>
                            <input onBlur={handleBlur} className="form-control mb-2" type="text" name="pickTo" id="" placeholder="End destination" required />
                            <input onClick={() => setPath(!path)} className="form-control mb-5 btn btn-info" type="submit" value="Search" />
                       </div>  
                    }    
                    </form>
                </div>
                <div className="text-center ml-5 mt-3 map">
                    <img src={Map} width="100%" min-height="80%" alt="" />
                </div>
            </div>
        </div>
            <footer className="container-fluid bg-info footer text-center mt-5">
                <p className="pt-4 text-light">Copyright © 2021 by Abu Taher. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Destination;