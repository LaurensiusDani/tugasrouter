import React from 'react';

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
            </>
        )
    }
}

export default Home