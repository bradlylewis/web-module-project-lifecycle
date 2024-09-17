import React from "react";
import FollowersList from './components/FollowersList';
import GitUser from './components/GitUser'
import axios from "axios";
import './App.css';

class App extends React.Component {
  state = {
  gitData: []
  }
  componentDidMount() {
    console.log("CDM Invoked!");
    axios
    .get("https://api.github.com/users/bradlylewis")
    .then(res => {
        this.setState({
          ...this.state,
          gitData: res.data  
          })
        console.log(res.data);
    })
    .catch((err) => {
        console.log(err);
    })
}

  render() {
    return(
      <div className="app-container">
        <div className="header">
          {this.state !== null ? (<GitUser user={this.state.gitData} />) : (<div>Loading</div>)}
        </div>
        <FollowersList/>
      </div>
    )
  }
}
export default App;