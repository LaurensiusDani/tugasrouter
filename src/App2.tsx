import React from 'react';
import { Router, Switch } from 'react-router-dom';

import User2 from './pages/user2'

import './App.css';

class App extends React.Component {
    componentDidMount() {

    }
    
    componentDidUpdate() {

    }

    componentWillUnmount() {

    }

    render() {
        return(
            <Switch>
                <Route exact path={'/user2' component={User2}}
            </Switch>
        )
    }
}

export default App