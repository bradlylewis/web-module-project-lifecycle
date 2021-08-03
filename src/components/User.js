import React from "react";
import axios from "axios";

class User extends React.Component {
    state = {
        gitterInfo: []
    }

    
    componentDidMount() {
        axios
        .get("https://api.github.com/users/bradlylewis")
        .then(res => {
            this.setState({
                ...this.state,
                gitterInfo:res.data
            })
        })

        //Log any errors
        .catch((err) =>{
            console.log(err);
        })
    }
    render() {
        return(
            <div className = "gitClass">
                <div className = "gitClass">
                    <h2> GitHub username: {this.state.gitterInfo.login} </h2>
                </div>

                <div className = "gitClass">
                    <h2> GitHub username: {this.state.gitterInfo.id} </h2>
                    <p>Git USERS </p>
                </div>
            </div>
        )
    }
}

export default User;