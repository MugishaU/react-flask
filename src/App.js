import React from "react";
import "./styles/App.css";
class App extends React.Component {
  state = {};

  componentDidMount() {
    fetch('http://localhost:5000/')
    .then(r => r.json())
    .then(data => this.setState({server:data}))
  }

  render() {
    return (
      <>
        <h1>New React App</h1>
        <h2>Happy Coding</h2>
        <h3>Message from the backend: {this.state.server}</h3>
      </>
    );
  }
}
export default App;
