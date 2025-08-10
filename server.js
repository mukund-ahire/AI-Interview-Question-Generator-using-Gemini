import express from "express";
import dotenv from "dotenv";
import fetch from "node-fetch";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.post("/api/generate", async (req, res) => {
  const { role, level, type, count } = req.body;

  if (!role) return res.status(400).json({ error: "Role is required" });

  const GEMINI_ENDPOINT = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${process.env.GOOGLE_API_KEY}`;

  const prompt = `
Generate a JSON array of ${count} interview questions and model answers
for a ${level} level ${role}, focusing on ${type} questions.

Format the output exactly as:
[
  { "question": "Question 1 text?", "answer": "Answer 1 text." },
  { "question": "Question 2 text?", "answer": "Answer 2 text." },
  ...
]
No extra text or explanation.
`;

  try {
    const response = await fetch(GEMINI_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }]
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      return res.status(response.status).json({ error: errorText });
    }

    let rawText = (await response.json())?.candidates?.[0]?.content?.parts?.[0]?.text || "";

    // Clean markdown code fences if present
    rawText = rawText.trim();
    if (rawText.startsWith("```")) {
      rawText = rawText.replace(/^```json?\s*/, '').replace(/```$/, '');
    }

    // Remove trailing commas before closing brackets/braces
    rawText = rawText.replace(/,\s*([}\]])/g, '$1');

    let questions = [];
    try {
      questions = JSON.parse(rawText);
    } catch (e) {
      return res.status(500).json({ error: "Failed to parse JSON from AI output.", raw: rawText });
    }

    res.json({ questions });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

// Serve index.html on any unmatched route (optional)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
