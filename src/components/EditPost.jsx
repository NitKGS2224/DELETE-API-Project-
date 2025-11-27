import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function EditPost() {
  const [post, setPost] = useState({
    title: "",
    description: "",
  });
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    fetch("http://localhost:8080/api/posts")
      .then((res) => res.json())
      .then((data) => {
        const existing = data.posts.find((prev) => prev.id === Number(id));
        if (existing) {
          setPost(existing);
        }
      });
  }, [id]);

  const handleUpdate = async (type) => {
    const method = type === "put" ? "PUT" : "PATCH";
    await fetch(`http://localhost:8080/api/posts/${id}`, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(post),
    });
    navigate("/");
  };

  return (
    <div>
      <h3>Edits page </h3>

      <input
        type="text"
        value={post.title}
        onChange={(event) => {
          setPost({ ...post, title: event.target.value });
          
        }}
      />
<br /><br /><br />

<textarea name="description" 
value={post.description}
onChange={(event=>{
  setPost({...post , description:event.target.value})
})}
></textarea>

<button onClick={()=> 
  handleUpdate("put")
}>Replace</button>

<button onClick={()=>
  handleUpdate("patch")
}>Update</button>

    </div>
  );
}
