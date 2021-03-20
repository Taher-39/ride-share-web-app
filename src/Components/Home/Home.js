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
        <div className="home">
            <div className="container main-body">
                <h4 className="text-center pt-3 text-light">Choose your ride partner</h4>
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