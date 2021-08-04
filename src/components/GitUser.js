import React from "react";
import '../styles/GitUser.css'

class GitUser extends React.Component{
    componentDidMount() {
        console.log("GitUser did mount!")
    }
    render() {
        const { user } = this.props;
        return(
           
            <div className="user user-container">
                <div className="user user-card" >
                    <img className='user user-img' src={user.avatar_url} alt='alt'/>
                    <div className='user user-details'>
                        <div className='detail'>{user.login}</div>
                        <div className='detail'><a href={user.html_url}>Github</a></div>
                        <div className='detail'><a href={user.followers_url}>Followers</a></div>
                        <div className='detail'><a href={user.following_url}>Following</a></div>

                    </div>
                </div>
                
            </div>
        )

    }

}

export default GitUser;