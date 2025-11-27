import express from "express"
import cors from "cors"
import postRoute from "./routes/postRoute.js"


const app = express();

let PORT = 8080;
app.use(cors({
  origin: '*',  // or '*' or specific origin
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
})
)

app.use(express.json())

app.use("/api/posts", postRoute)

app.listen(PORT, () => {
  console.log(`Server is running at${PORT}`)
})