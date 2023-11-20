const PORT = 8000;
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
require('dotenv').config();

const OpenAI = require("openai");
const openai = new OpenAI(process.env.OPENAI_API_KEY);

app.post("/images", async (req, res) => {
    try {
        const response = await openai.images.generate({
            prompt: req.body.message,
            n: 1,  
            size: "1024x1024",
        });

        res.send(response.data);

    } catch (error) {
        console.error(error);
        res.status(500).send("Failed to create image");
    }
});

app.listen(PORT, () => console.log("Your server is running on PORT " + PORT));
