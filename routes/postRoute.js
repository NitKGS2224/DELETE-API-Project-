import { Router } from "express";
const router = Router();

// Temporary in-memory "database"
let posts = [];
let idCounter = 1;

// POST - Create
router.post("/", (req, res) => {
  const { title, description } = req.body;
  if (!title || !description)
    return res.status(400).json({ success: false, message: "All fields required" });

  const newPost = { id: idCounter++, title, description };
  posts.push(newPost);
  res.json({ success: true, message: "Post created!", post: newPost });
}); 

// GET - Read all
router.get("/", (req, res) => {
  res.json({ success: true, posts });
});

// PUT - Replace entire post
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;
  const index = posts.findIndex(p => p.id === Number(id));
  if (index === -1)
    return res.status(404).json({ success: false, message: "Post not found" });

  posts[index] = { id: Number(id), title, description };
  res.json({ success: true, message: "Post replaced", post: posts[index] });
});

// PATCH - Update partial
router.patch("/:id", (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;
  const post = posts.find(p => p.id === Number(id)); 
  if (!post)
    return res.status(404).json({ success: false, message: "Post not found" });

  if (title) post.title = title;
  if (description) post.description = description;
  res.json({ success: true, message: "Post updated", post });
});

// DELETE - Remove
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  posts = posts.filter(p => p.id !== Number(id));
  res.json({ success: true, message: "Post deleted" });
});

export default router;
