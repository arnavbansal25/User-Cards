import React, { Component } from 'react';
import Header from './HeaderComponent';
import Loader from './LoaderComponent';
import UserCards from './UserCardsComponent';
import axios from 'axios';

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loader: false,
            user_data: []
        }
    }

    render() {
        const getUsers = () => {
            this.setState({ loader: true });
           axios
                .get("https://reqres.in/api/users?page=1")
                .then((response) => {
                    // console.log(response);
                    this.setState({ user_data: response.data.data });
                    setTimeout(function () {
                        this.setState({ loader: false });
                    }.bind(this), 500);
                })
                .catch((error) => {
                    console.log(error);
                });
        }

        return (
            <div>
                <Header btnClick={getUsers} />

                {this.state.loader ? <Loader /> : <UserCards users={this.state.user_data} />}
            </div>
        );
    }
}

export default Main;
