import express from "express"
import cors from "cors"
import mongoose from "mongoose"

const app = express()
const port = 8080

app.use(cors({
  origin: "http://localhost:5173"
}))

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/messageDB", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
}).then(() => {
  app.listen(port, () => console.log("Server started at port " + port))
}).catch(err => {
  console.error("Database connection error:", err)
})

const messageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  }
})

const Message = mongoose.model("Message", messageSchema, "messages")

app.post('/saveData', (req, res) => {
  const dataToSave = new Message(req.body)
  // console.log(dataToSave)
  dataToSave.save()
    .then(() => res.json("Data Submitted"))
    .catch(err => {
      console.error("Error saving data:", err)
      res.status(500).json("Error saving data")
    })
})

app.get("/showData", async (req, res) => {
  try {
    const savedData = await Message.find()
    res.json(savedData)
  } catch (err) {
    console.error("Error fetching data:", err)
    res.status(500).json("Error fetching data")
  }
})
