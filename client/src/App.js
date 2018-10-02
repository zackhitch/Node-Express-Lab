import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    this.getPosts();
  }

  getPosts() {
    axios
      .get('http://localhost:8088/api/posts')
      .then(response => {
        console.log(response.data);
        this.setState({ posts: response.data });
      })
      .catch(err => {
        console.log(`Error: `, err);
      });
  }

  render() {
    return (
      <div className="App">
        <header>Node Express Frontend</header>
        {this.state.posts.map(post => (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.contents}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
