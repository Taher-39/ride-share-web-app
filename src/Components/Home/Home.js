import React, { useEffect, useState } from 'react';
import ridersData from '../../FakeData/FakeData.json'
import Display from '../Display/Display';
const Home = () => {
    const [riders, setRiders] = useState([])
    useEffect(() => {
        setRiders(ridersData)
        // console.log(riders)
    }, [])
    return (
        <div className="container">
            <div className="row">
                {
                    riders.map(rider => <Display rider={rider} key={rider.id}></Display>)
                }
            </div>
        </div>
    );
};

export default Home;