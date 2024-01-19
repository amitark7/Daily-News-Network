const express = require("express");
const dotenv = require("dotenv");
const cors=require('cors')

const app = express();
app.use(express.json())
app.use(cors())
dotenv.config();

app.post("/news", async (req, res) => {
  const {country,category}=req.body

  try {
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${process.env.API_KEY}&pagesize=100`
    );
    const data=await response.json()
    // console.log();
    res.status(200).json(data)
  } catch (error) {
    console.log(error);
  }
});

app.post("/search", async (req, res) => {
  const {search}=req.body
  const response = await fetch(
    `https://newsapi.org/v2/top-headlines?q=${search}&apiKey=${process.env.API_KEY}`
  );
  const data=await response.json()
  res.status(200).json(data)
});

app.get("/", (req, res) => {
  res.send("Hey There I m Existed !");
});

app.listen(process.env.PORT, () => {
  console.log(`App Running on http://localhost:${process.env.PORT}`);
});
