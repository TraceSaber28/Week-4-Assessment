const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, getRandomFortune, deleteFortune, getAllFortunes, addFortune, updateFortune} = require('./controller')

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getRandomFortune)
app.get("/api/all-fortunes", getAllFortunes)
app.delete("/api/all-fortunes/:id", deleteFortune)
app.post('/api/all-fortunes', addFortune)
app.put("/api/all-fortunes/:id", updateFortune)

app.listen(4000, () => console.log("Server running on 4000"));
