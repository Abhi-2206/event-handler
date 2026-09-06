const express = require('express')

const app = express()

let events = [
  {
    id: "101",
    title: "tekron",
    description: "this is a tekron event"
  },
  {
    id: "201",
    title: "blood donation camp",
    description:"this is a blood donation camp"
  }
];

app.get("/events", (req, res) => {
  res.json(events)
})

app.delete("/events/:id", (req, res) => {
  const id = req.params.id

  const eventToDelete = events.find((event) => event.id === id);

  if (eventToDelete === undefined) {
    res.status(404).json({ message: "Event does not exist" })


  }

  events = events.filter((events) => events.id !== id)

  res.status(204).send()






})



app.listen(3000, () => {
  console.log("server started on port:3000")


})
