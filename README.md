# 🎙️ DynVoiceAssist

> A real-time AI voice assistant with an animated orb UI — speak to it, and it answers back intelligently using live data up to today.

---

## ✨ Features

- 🎤 **Voice Input** — Speak naturally using your browser's Web Speech API
- 🔊 **Voice Output** — Responses are read aloud in real time
- 🧠 **Powered by Anthropic Claude** — One of the most advanced AI models available
- 🌐 **Real-Time Knowledge** — Answers questions with up-to-date information
- 💫 **Animated Orb UI** — A sleek, pulsing orb that reacts to your voice
- ⚡ **Fast Response** — Low-latency backend via Node.js + Express

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | HTML, CSS, JavaScript |
| Voice | Web Speech API (STT + TTS) |
| Backend | Node.js, Express.js |
| AI Model | Anthropic Claude (via API) |
| Environment | dotenv |
| Dev Tool | Nodemon |

---

## 🚀 Getting Started

### Prerequisites
- Node.js v18+
- An Anthropic API key → [console.anthropic.com](https://console.anthropic.com)

### Installation

```bash
# Clone the repo
git clone https://github.com/Vickyscorpz/DynVoiceAssist.git
cd DynVoiceAssist

# Install dependencies
npm install

# Create your environment file
cp .env.example .env
# Add your API key inside .env
```

### Environment Variables

Create a `.env` file in the root:

```env
ANTHROPIC_API_KEY=your_api_key_here
PORT=3000
```

### Run the App

```bash
npm start
```

Then open your browser at `http://localhost:3000`

---

## 🎯 How It Works

```
User speaks → Web Speech API (STT)
           → Express backend
           → Anthropic Claude API
           → Response text
           → Web Speech API (TTS)
           → User hears the answer
```

---

## 📁 Project Structure

```
DynVoiceAssist/
├── backend/
│   └── server.js          # Express server + Claude API integration
├── frontend/
│   ├── index.html         # Landing page
│   ├── assistant.html     # Main voice assistant UI
│   ├── features.html      # Features page
│   ├── main.js            # Voice logic (STT/TTS)
│   └── style.css          # Animated orb styles
├── .env                   # API keys (not committed)
├── .gitignore
└── package.json
```

---

## 🔮 Upcoming Features

- [ ] Conversation history / memory
- [ ] Multi-language support
- [ ] Deploy on Render / Vercel
- [ ] Custom wake word detection

---

## 👤 Author

**Vickyscorpz**
- GitHub: [@Vickyscorpz](https://github.com/Vickyscorpz)
- College: St. Joseph's College of Engineering, Chennai

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

> *"Talk to the future."* 🚀
