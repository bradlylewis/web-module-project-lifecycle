import React from "react";
import User from "./components/User"
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
    .get("https://api.github.com/users/bradlylewis/")
    .then(res => {
        this.setState({
          ...this.state,
          gitData: res.data  
          })
        console.log("FOLLOWERS>>>", res.data);
    })
    .catch((err) => {
        console.log(err);
    })
}

  render() {
    return(
      <div className = "gitClass">
        <h1> Git On Outta Here!</h1>
        <User/>
        <FollowersList/>
      </div>
    )
  }
}
export default App;