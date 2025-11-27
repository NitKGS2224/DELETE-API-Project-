import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function PostList() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  const fetchPosts = async () => {
    const res = await fetch("http://localhost:8080/api/posts");
    const data = await res.json();
    setPosts(data.posts);
  };

  const handleDelete = async (id) => {
    await fetch(`http://localhost:8080/api/posts/${id}`, { method: "DELETE" });
    fetchPosts();
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <h2>All Posts</h2>
      {posts.length === 0 && <p>No posts yet</p>}
      {posts.map((p) => (
        <div
          key={p.id}
          style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}
        >
          <h3>{p.title}</h3>
          <p>{p.description}</p>
          <button onClick={() => navigate(`/edit/${p.id}`)}>Edit</button>
          <button onClick={() => handleDelete(p.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default PostList;
