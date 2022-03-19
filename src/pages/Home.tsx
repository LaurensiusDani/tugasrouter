import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import {
    HomeButtonInfo, 
    Container, 
    Row,
} from '../styles/Home';

interface Istate {
    ctr: number;
}

class Home extends React.Component<RouteComponentProps, Istate>{
    constructor(props: any) {
        super(props);

        this.state = {
            ctr: 0,
        }
    }

    public handleClickBtn = () => {
        // this.props.history.push('/about-us')
        this.setState({ctr: this.state.ctr + 1 });
    }

    render() {
        const isEven = this.state.ctr % 2 === 0; //true atau false
        return (
            <Container>
                <Row>
                    <h1>Home</h1>
                    <HomeButtonInfo
                        isEven={isEven}
                        onClick={this.handleClickBtn}
                    >
                        About-us
                    </HomeButtonInfo>
                </Row>
            </Container>
        )
    }
}

export default Home