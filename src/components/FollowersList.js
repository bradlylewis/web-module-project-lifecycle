import React from "react";
import axios from "axios";


//Class definition
class FollowersList extends React.Component{
    state = {
        gitterFollowers: []
    }
    componentDidMount() {
        axios
        .get("https://api.github.com/users/bradlylewis/followers")
        .then(res => {
            this.setState({
                // ...this.state,
                gitterFollowers: res.data  
            })
            console.log("FOLLOWERS>>>", res.data);
        })
        .catch((err) => {
            console.log(err);
        })
    }

    render() {
        return(
           
            <div className = "myCard">
                <div className = "card" >My followers are:</div>
                {this.state.gitterFollowers.map(follower => {
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