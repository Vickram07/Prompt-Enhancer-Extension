import KEY from "./config.js";

const inputEl = document.getElementById("input");
const outputEl = document.getElementById("output");
const copyBtn = document.getElementById("copy");

document.querySelectorAll("button[data-preset]").forEach((btn) => {
  btn.addEventListener("click", async () => {
    const preset = btn.dataset.preset;
    const userPrompt = inputEl.value.trim();
    if (!userPrompt) {
      alert("Enter a prompt first!");
      return;
    }

    const enhanced = await enhancePrompt(userPrompt, preset);
    outputEl.value = enhanced;
  });
});

copyBtn.addEventListener("click", () => {
  outputEl.select();
  document.execCommand("copy");
  alert("Copied to clipboard!");
});

async function enhancePrompt(prompt, preset) {
  let instruction = "";
  if (preset === "creative") {
    instruction = "Expand this prompt with imaginative details:";
  } else if (preset === "concise") {
    instruction = "Rewrite this prompt concisely:";
  } else if (preset === "exam") {
    instruction = "Transform this prompt into formal academic exam style:";
  }

  const response = await fetch(
    "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=" + KEY,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: `${instruction} ${prompt}` }] }]
      })
    }
  );

  const data = await response.json();
  return data?.candidates?.[0]?.content?.parts?.[0]?.text || "Error: no response";
}