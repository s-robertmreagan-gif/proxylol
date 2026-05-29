const express = require("express");
const fetch = require("node-fetch");
const path = require("path");

const app = express();

app.use(express.static("public"));

app.get("/proxy", async (req, res) => {
    const url = req.query.url;

    if (!url) {
        return res.status(400).send("Missing URL");
    }

    try {
        const response = await fetch(url);
        const data = await response.text();

        res.send(data);
    } catch (err) {
        console.error(err);
        res.status(500).send("Proxy error");
    }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
