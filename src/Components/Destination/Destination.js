import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Map from '../../images/Map.png'
import ridersData from '../../FakeData/FakeData.json'

const Destination = () => {
    const {id} = useParams()
    const [destination, setDestination] = useState({})
    // const { vehicleName } = destination[id]
    useEffect(() => {
        setDestination(ridersData)
    }, [])
    // console.log(destination.id)
    return (
        <div className="container">
            <div className="row">
                <div>
                    <h4>ID: {id}</h4>
                    <form action="">
                        <input type="text" name="" id="" placeholder="Start destination" />
                        <br/>
                        <input type="text" name="" id="" placeholder="End destination" />
                        <br/>
                        <input type="submit" value="Search"/>
                    </form>
                </div>
                <div>
                    <img src={Map} width="50%" alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Destination;