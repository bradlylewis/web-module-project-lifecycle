import React from "react";
import axios from "axios";
import '../styles/FollowersList.css'


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
           
            <div className="follower-container">
                {this.state.gitFollowers.map(follower => {
                return (
                    <div key={follower.id} className="follower-card">
                        <img className="follower-image" src={follower.avatar_url} alt = "alt"/>
                        <div className='follower-content'>
                            <div className='follower-detail'>Username: {follower.login}</div>
                            <div className='follower-detail'>{follower.html_url}</div>
                        </div>
                    </div>
                )})}
            </div>
        )

    }

}

export default FollowersList;