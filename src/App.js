import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar.component.js";
import PostsList from "./components/postsList.component";
import EditPost from "./components/editPost.component";
import CreatePost from "./components/createPost.component";
import CreateUser from "./components/createUser.component";

function App() {
  return (
    <Router>
      <Navbar />
      <br />
      <Route path="/" exact component={PostsList} />
      <Route path="/edit/:id" component={EditPost} />
      <Route path="/create" component={CreatePost} />
      <Route path="/user" component={CreateUser} />
    </Router>
  );
}

export default App;
