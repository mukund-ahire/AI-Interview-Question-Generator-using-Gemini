# 🚀 AI Interview Question Generator

Welcome to the **AI Interview Question Generator** — a sleek web app that crafts tailored interview questions **and model answers** for any job role and experience level using the power of **Google Gemini** AI!

---

## 💡 What It Does

This app generates *custom interview flashcards* — combining behavioral and technical questions — so you can:

- Prepare smarter for interviews 🎯  
- Practice with instant model answers 💬  
- Explore questions tailored to any job role and level 👩‍💻👨‍💼  

It’s like having a personal AI interviewer at your fingertips!

---

## 🎨 Features

- **Customizable inputs:** Choose job role, seniority (Junior, Mid, Senior), and question type (Technical, Behavioral, Mixed)  
- **Flashcard UI:** Click to flip questions and answers for engaging practice  
- **Copy all questions:** Easily copy all flashcards content to your clipboard  
- **Responsive Design:** Looks great on desktop, tablet, and mobile  
- **Powered by Google Gemini:** Cutting-edge AI generates high-quality, relevant content  

---

## 🚀 How to Run Locally

1. Clone this repo:
   ```bash
   https://github.com/mukund-ahire/AI-Interview-Question-Generator-using-Gemini.git
   cd AI-Interview-Question-Generator-using-Gemini
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Add your Google Gemini API key in a `.env` file:

   ```
   GOOGLE_API_KEY=YOUR_GOOGLE_API_KEY_HERE
   ```

4. Start the server:

   ```bash
   node server.js
   ```

5. Open your browser and navigate to `http://localhost:3000`

---

## 🧩 Tech Stack

* **Frontend:** HTML, CSS (modern gradients & animations), Vanilla JS (flashcard interactivity)
* **Backend:** Node.js + Express.js serving static frontend + API proxy
* **AI Integration:** Google Gemini generative language model (via REST API)
* **Environment:** dotenv for managing secrets securely

---

## 💬 How It Works

When you enter a job role, level, and question type, the app sends a prompt to Google Gemini asking it to generate a clean JSON array of questions and answers. The backend processes this and returns the data, which is then rendered as interactive flashcards on the frontend.

---

## 🎯 Why This Project?

Interview prep can be tough and time-consuming — this app saves time by quickly generating focused, relevant questions tailored to your goals. It’s a perfect companion for anyone looking to sharpen their interview skills with AI assistance!

---

## 🙌 Contributions & Feedback

Feel free to fork, suggest features, or open issues!
Your feedback and contributions help make this project better for everyone.

---

## 📜 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

## 🤖 Demo Screenshot

![Demo screenshot](https://github.com/mukund-ahire/AI-Interview-Question-Generator-using-Gemini/blob/4c8e27f2c1efca5b892a7abd8d5ebe5042396aa0/Screenshot%202025-08-10%20at%203.17.25%E2%80%AFPM.png)  <!-- Add your screenshot here -->

---

Thanks for stopping by!
Happy interviewing! 🚀🎉

---

*Made with ❤️ and Mukund Ahire*
