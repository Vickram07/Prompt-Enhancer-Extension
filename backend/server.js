import express from "express";
import fetch from "node-fetch";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

app.post("/enhance", async (req, res) => {
  const { prompt, preset } = req.body;

  let instruction = "";
  if (preset === "creative") {
    instruction = "Expand this prompt with imaginative details:";
  } else if (preset === "concise") {
    instruction = "Rewrite this prompt concisely:";
  } else if (preset === "exam") {
    instruction = "Transform this prompt into formal academic exam style:";
  }

  try {
    const response = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=" + GEMINI_API_KEY,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: `${instruction} ${prompt}` }] }]
        })
      }
    );

    const data = await response.json();
    res.json({ result: data?.candidates?.[0]?.content?.parts?.[0]?.text || "Error: no response" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Something went wrong" });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));