import axios from "axios";
import React, { Component } from "react";

class PostComponent extends Component {
  constructor() {
    super();
    this.state = {
      postId: "1",
      id: "",
      name: "",
      email: "",
      body: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("https://jsonplaceholder.typicode.com/posts", this.state)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="ID"
            name="id"
            onChange={this.handleChange}
            value={this.state.id}
          ></input>
        </div>

        <div>
          <input
            type="text"
            placeholder="name"
            name="name"
            onChange={this.handleChange}
            value={this.state.name}
          ></input>
        </div>

        <div>
          <input
            type="text"
            placeholder="Email"
            name="email"
            onChange={this.handleChange}
            value={this.state.email}
          ></input>
        </div>

        <div>
          <input
            type="text"
            placeholder="Comment"
            name="body"
            onChange={this.handleChange}
            value={this.state.body}
          ></input>
        </div>

        <button>Submit</button>
      </form>
    );
  }
}

export default PostComponent;
