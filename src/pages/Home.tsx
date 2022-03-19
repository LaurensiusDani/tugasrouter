import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
    render () {
        return (
            <>
                <h1>Home</h1>
                <button type="button">info about us
                    <Link to={'/about-us'}> 
                        info about us
                    </Link>
                </button>
                <button type="button">how to contact us
                    <Link to={'/contact-us'}> 
                        how to contact us
                    </Link>
                </button>
            </>
        )
    }
}

export default Home