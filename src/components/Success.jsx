import React from "react";
import { Link } from "react-router-dom";

function Success() {
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2> Post Created Successfully!</h2>
      <Link to="/">Go Back to Posts</Link>
    </div>
  );
}

export default Success;
