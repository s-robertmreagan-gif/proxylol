```js id="z18qaf"
import express from "express";
import cors from "cors";

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("Proxy backend running");
});

app.get("/fetch", async (req, res) => {

  const url = req.query.url;

  if (!url) {
    return res.status(400).send("Missing URL");
  }

  try {

    const response = await fetch(url);

    const text = await response.text();

    res.send(text);

  } catch (err) {

    res.status(500).send("Error fetching site");
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
```
