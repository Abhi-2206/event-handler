const express = require('express')

const app = express()

const events = [
  {
    id: "1",
    title: "tekron",
    description: "this is a tekron event"
  },
  {
    id: "2",
    title: "blood donation camp",
    description:"this is a blood donation camp"
  }
];

app.get("/events", (req, res) => {
  res.json(events)
})




app.listen(3000, () => {
  console.log("server started on port:3000")


})
