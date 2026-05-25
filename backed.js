const express = require("express");
const axios = require("axios");

const app = express();

app.get("/proxy", async (req, res) => {
  try {
    const target = req.query.url;

    const response = await axios.get(target);

    res.send(response.data);
  } catch (err) {
    res.send("Error loading site.");
  }
});

app.listen(3000, () => {
  console.log("Proxy running on port 3000");
});
