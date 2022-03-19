import React from "react";
import { Link, RouteComponentProps } from "react-router-dom";

interface IUserParams{
    userId: string;
}

interface IProps extends RouteComponentProps<IUserParams> {}
interface IState {
    ctr: number;
}

class User extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);

        this.state = {
            ctr: 0,
        }
    }

    componentDidMount() {
        console.log("hanya sekali")
    }

    componentDidUpdate() {
        console.log("setiap state/props berubah", this.state.ctr)
    }

    componentWillUnmount() {
        console.log("saat component ini di hancurkan di apus dari DOM")
    }

    render() { //secara otomatis pasti public
        const { userId } = this.props.match.params;
        console.log("render")
        return (
            <>
                <h1>User here: {userId}</h1>
                <h5>{this.state.ctr}</h5>(
                <button type='button' onClick={this.clickMe}>click me</button>
                <button type='button'>
                    <Link to={'./about-us'}>
                        info about us
                    </Link>
                </button>
            </>
        )
    }

    clickMe = () => {
        this.setState({ctr: this.state.ctr + 1})
    }
}

export default User;