import React, { Component } from "react";
import axios from "axios";

class GetComponent extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
    };
  }
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        this.setState({ posts: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        {this.state.posts.map((post) => (
          <div key={post.id} className="CardContainer">
            <p>Name: {post.name}</p>
            <p>Email: {post.email}</p>
            <p>Body: {post.body}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default GetComponent;
