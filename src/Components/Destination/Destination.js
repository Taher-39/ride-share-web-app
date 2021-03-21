import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import MapImg from '../../images/Map.png'
import ridersData from '../../FakeData/FakeData.json'
import './Destination.css';
import Map from '../Map/Map';
const Destination = () => {
    const [path, setPath] = useState(false)
    const [searchResult, setSearchResult] = useState({
        pickForm: "",
        pickTo: ""
    })
    
    const { id } = useParams()
    const [destination, setDestination] = useState({})
    const { vehicleDetails1, vehicleDetails2, vehicleDetails3, 
        Cost1, Cost2, Cost3, riderName, vehiclePhoto } = destination;
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
            <div className="row col-md-12 justify-content-center d-fle">
                <div className="search-bar bg-secondary p-4">
                    
                    <form onSubmit={handleSubmit}>
                    {path ?
                        <div>
                            <div className="btn btn-info px-5">
                                <p>{searchResult.pickFrom}</p>⇩
                                <p>{searchResult.pickTo}</p>
                            </div>
                            <div>
                                <div className="row justify-content-around d-fle bg-light mt-3 rounded py-2">
                                    <div><img src={vehiclePhoto} alt="" width="50px" /></div>
                                    <div>{riderName}</div>
                                    <div>👨‍👨‍👦‍👦{vehicleDetails1}</div>
                                    <div>${Cost1}</div>
                                </div>
                                <div className="row justify-content-around d-fle bg-light mt-3 rounded py-2">
                                    <div><img src={vehiclePhoto} alt="" width="50px" /></div>
                                    <div>{riderName}</div>
                                    <div>👨‍👨‍{vehicleDetails2}</div>
                                    <div>${Cost2}</div>
                                </div>
                                <div className="row justify-content-around d-fle bg-light mt-3 rounded py-2">
                                    <div><img src={vehiclePhoto} alt="" width="50px" /></div>
                                    <div>{riderName}</div>
                                    <div>👨‍{vehicleDetails3}</div>
                                    <div>${Cost3}</div>
                                </div>
                            </div>
                        </div>
                    : <div>
                            <h5>Pick From</h5>
                            <input onBlur={handleBlur} className="form-control mb-2" type="text" name="pickFrom" id="" placeholder="Start destination" required />
                                <h5>Pick To</h5>
                            <input onBlur={handleBlur} className="form-control mb-2" type="text" name="pickTo" id="" placeholder="End destination" required />
                            <input onClick={() => setPath(!path)} className="form-control mb-5 btn btn-info" type="submit" value="Search" />
                       </div>  
                    }    
                    </form>
                </div>
                <div className="text-center pl-4 pt-3 map">
                    <img src={MapImg} width="80%" min-height="80%" alt="" />
                    {/* <Map width="100%" min-height="80%"></Map> */}
                </div>
            </div>
        </div>
            <footer className="container-fluid bg-info footer text-center mt-5 mb-0">
                <p className="pt-4 text-light">Copyright © 2021 by Abu Taher. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Destination;