import React, { useEffect, useState } from 'react';
import ridersData from '../../FakeData/FakeData.json'
import Display from '../Display/Display';
import './Home.css';

const Home = () => {
    const [riders, setRiders] = useState([])
    useEffect(() => {
        setRiders(ridersData)
    }, [])
    return (
        <div className="container main-body">
            <div className="row">
                {
                    riders.map(rider => <Display rider={rider} key={rider.id}></Display>)
                }
            </div>
        </div>
    );
};

export default Home;