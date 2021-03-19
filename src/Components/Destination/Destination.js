import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Map from '../../images/Map.png'
import ridersData from '../../FakeData/FakeData.json'

const Destination = () => {
    const { id } = useParams()
    const [destination, setDestination] = useState({})
    useEffect(() => {
        setDestination(ridersData)
    }, [])
    return (
        <div className="container mt-4">
            <div className="row col-sm-12 justify-content-center d-flex">
                <div className="search-bar bg-secondary p-4">
                    <h4>Id {id}</h4>
                    <form action="">
                        <h5>Pick From</h5>
                        <input className="form-control mb-2" type="text" name="pick-from" id="" placeholder="Start destination" required />
                        <h5>Pick To</h5>
                        <input className="form-control mb-2" type="text" name="pick-to" id="" placeholder="End destination" required />
                        <input className="form-control mb-5 btn btn-info" type="submit" value="Search" />
                    </form>
                </div>
                <div className="text-center ml-5">
                    <img src={Map} width="100%" height="75%" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Destination;