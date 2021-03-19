import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { userContext } from '../../App';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const {id} = useParams()
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        {/* <Link to={`/display/:${id}`}>Destination</Link> */}
                        <Link to='/display/:1'>Destination</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/login">LogIn</Link>
                    </li>
                    <li>
                        <button id="link" onClick={() => setLoggedInUser({})}>Sign Out</button>
                    </li>
                </ul>

                <hr />
            </nav>
        </div>
    );
};

export default Header;