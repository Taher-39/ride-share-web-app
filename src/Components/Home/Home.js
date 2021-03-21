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
        <div className="home align-items-center d-flex">
            <div className="container main-body">
                <h1 className="text-center pt-2 text-light">Choose your ride partner</h1>
                <div className="row">
                    {
                        riders.map(rider => <Display rider={rider} key={rider.id}></Display>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;