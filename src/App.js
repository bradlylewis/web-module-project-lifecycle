import React from "react";
import FollowersList from './components/FollowersList';
import axios from "axios";
import './App.css';

class App extends React.Component {
  constructor() {
    console.log("Constructor Invoked!");
    super();
    this.state = {
      gitData: []
    }
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
        <div className="user-card">
          <h1>Github Project</h1>
          <img src={this.state.gitData.avatar_url} alt="alt"/>
          <h2>Username: {this.state.gitData.login}</h2>
          <h2>Id: {this.state.gitData.id}</h2>
        </div>
        <FollowersList/>
      </div>
    )
  }
}
export default App;