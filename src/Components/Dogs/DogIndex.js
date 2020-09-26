import React, { Component } from "react";
import{Button} from 'reactstrap'

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
        <Button color="info" onClick={this.fetchImage}>New Dog </Button>
        <br />   <br />
        <img  style={{ width: '30rem', border: "5px solid black"}} src={this.state.imgUrl} alt="Cute Dog" />
      </div>
    );
  }
}
