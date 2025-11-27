import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import CreatePost from "./components/CreatePost.jsx";
import PostList from "./components/PostList.jsx";
import EditPost from "./components/EditPost.jsx";
import Success from "./components/Success.jsx";

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav style={{ textAlign: "center", margin: "10px" }}>
          <Link to="/">Home</Link>
          <Link to="/create">Create</Link>
        </nav>

        <Routes>
          <Route path="/" element={<PostList />} />
          <Route path="/create" element={<CreatePost />} />
          <Route path="/edit/:id" element={<EditPost />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
