import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreatePost() {
  const [createPost, setCreatePost] = useState({
    title: "",
    description: "",
  });
  const navigate = useNavigate();

  const handleCreatePost = async (e) => {
    e.preventDefault;

    try {
      const response = await fetch("http://localhost:8080/api/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(createPost),
      });
      const data = await response.json();

      if (data.success) {
        alert(data.message);
        navigate("/success");
      } else console.error("Server error");
    } catch (error) {
      console.error("Server error")
    }
  };

  return (
    <div>
      <h3>Create Post</h3>
      <form onSubmit={handleCreatePost}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={createPost.title}
          onChange={(e) =>
            setCreatePost({ ...createPost, title: e.target.value })
          }
        />
        <textarea 
          type="text"
          name="title"
          placeholder="Description"
          value={createPost.description}
          onChange={(e) =>
            setCreatePost({ ...createPost, description: e.target.value })
          }
        />

        <button type="submit">login</button>
      </form>
    </div>
  );
}
