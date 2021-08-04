import React from "react";
import axios from "axios";

class FollowersList extends React.Component{
    state = {
        gitFollowers: []
    }
    componentDidMount() {
        axios
        .get("https://api.github.com/users/bradlylewis/followers")
        .then(res => {
            this.setState({
                ...this.state,
                gitFollowers: res.data  
            })
            console.log("FOLLOWERS>>>", res.data);
        })
        .catch((err) => {
            console.log(err);
        })
    }

    render() {
        return(
           
            <div className = "follower-container">
                <div className = "follower-card" >My followers are:</div>
                {this.state.gitFollowers.map(follower => {
                return (
                    <div className = "card">
                        <img className = "image" src={follower.avatar_url} alt = "alt"/>
                        <div>{follower.login}</div>
                        <div>{follower.id}</div>
                    </div>
                )})}
            </div>
        )

    }

}

export default FollowersList;