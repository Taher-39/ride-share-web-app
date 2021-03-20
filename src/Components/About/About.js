import React from 'react';

const About = () => {
    return (
        <div className="text-center container mt-3">
            <div className="border rounded p-3 mb-3">
                <h4>MOVE SAFELY</h4>
                <p>Your safety while traveling is ensured with an emergency alert button and live ride tracking feature.</p>
            </div>
            <div className="border rounded p-3 mb-3">
                <h4>LIVE PREVIEW</h4>
                <p>See the list of available vehicle models along with a picture and choose your ride before the trip request.  </p>
            </div><div className="border rounded p-3 mb-3">
                <h4>GRAB FREE TRIP</h4>
                <p>Ride to get an exclusive free trip every week before anyone grabs it.</p>
            </div><div className="border rounded p-3 mb-3">
                <h4>PLAY TO WIN</h4>
                <p>Stuck in traffic, bored! Play our racing game while traveling & get a discount of up to 100% on your destination fare.</p>
            </div>
        </div>
    );
};

export default About;