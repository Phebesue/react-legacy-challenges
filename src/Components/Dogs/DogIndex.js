import React, { Component } from "react";

export default class DogIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgUrl: "",
    };
  }

  fetchImage = () => {
    console.log("Fetching Image");
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        this.setState({
          imgUrl: json.message,
        });
      })
      .catch(function (err) {
        console.log(err);
      });
  };
  componentDidMount() {
    this.fetchImage();
  }

  render() {
    return (
      <div>
        <img src={this.state.imgUrl} alt="Cute Dog" />
        <br />
        <button onClick={this.fetchImage}>New Dog </button>
      </div>
    );
  }
}
