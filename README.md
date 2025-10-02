# Prompt Enhancer Extension v1.0 🚀

A lightweight **browser extension** that helps you **improve and reframe prompts** for AI tools.  
It provides ready-to-use **presets** (creative, concise, exam) that automatically enhance your input prompt before sending it to an LLM.

---

## 📛 Badges

![Gemini API](https://img.shields.io/badge/Powered%20by-Gemini_API-orange?logo=google)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow?logo=javascript)
![Node.js](https://img.shields.io/badge/Node.js-18+-brightgreen?logo=node.js)
![Chrome Extension](https://img.shields.io/badge/Chrome-Extension-blue?logo=googlechrome)
![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/vickramv)

---

## 🎥 Demo

![Digit Recognizer Demo](media/demo.gif)

*(Above: a screen recording of the Tkinter GUI, saved as a GIF for GitHub preview.)*

---

## ✨ Features
- 🔹 **Multiple Presets** – Creative, Concise, and Exam modes
- 🔹 **One-Click Enhancement** – Transform prompts instantly
- 🔹 **Custom API Key** – Uses your Gemini API key
- 🔹 **Lightweight UI** – Simple popup interface

---

## 📂 Project Structure
```
prompt-enhancer-extension/
├── extension/       # Core browser extension
│   ├── manifest.json
│   ├── background.js
│   ├── config.js
│   ├── popup.html
│   ├── popup.js
│   └── popup.css
├── backend/         # Backend logic (Node.js)
│   ├── server.js
│   ├── package.json
│   └── package-lock.json
├── .gitignore
├── LICENSE
├── README.md
├── CONTRIBUTING.md
└── CHANGELOG.md
```

---

## 🔑 Setting up Gemini API Key

1. Go to [Google AI Studio](https://makersuite.google.com/app/apikey).  
2. Sign in with your Google account.  
3. Click **Create API Key**.  
4. Copy the generated key.  

Now configure the extension:  
Open `extension/config.js` and replace:
```js
const KEY = "YOUR_REAL_GEMINI_API_KEY_HERE";
```

⚠️ **Important:** Do not share your real API key publicly.

---

## 🔧 Installation

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/prompt-enhancer-extension.git
cd prompt-enhancer-extension
```

### 2. Install Backend Dependencies
```bash
cd backend
npm install
```

### 3. Load the Extension in Chrome/Edge
1. Open `chrome://extensions/`  
2. Enable **Developer mode**  
3. Click **Load unpacked**  
4. Select the `extension/` folder  

---

## 🎮 Usage
1. Click the extension icon in your browser.  
2. Enter a prompt in the popup input field.  
3. Select a **preset**:  
   - **Creative** – Expands your prompt with imaginative detail  
   - **Concise** – Makes your prompt short and clear  
   - **Exam** – Rewrites your prompt in formal academic style  
4. Copy and paste the enhanced prompt into your AI tool.  

---

## 🤝 Contributing
See [CONTRIBUTING.md](CONTRIBUTING.md).  

---

## 📜 License
This project is licensed under the [MIT License](LICENSE).

---

## 🙌 Author
👨‍💻 Developed by **Vickram V**  
🔗 [LinkedIn Profile](https://www.linkedin.com/in/vickramv)

---
