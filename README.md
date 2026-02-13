# MERN GPT Project
A web-based interface that allows users to send questions to a backend server, which is configured to interact with a GPT-style API. This project demonstrates basic frontend-to-backend communication using Express, EJS, and the Fetch API.

## 🚀 Features

Responsive UI: A clean interface built with EJS and CSS.
Asynchronous Communication: Uses fetch to send data without refreshing the page.
RESTful Routing: Organized backend structure using Express Routers.
JSON Parsing: Handles data exchange via body-parser middleware.

## 🛠️ Tech Stack

Frontend: EJS (Embedded JavaScript templates), CSS, Vanilla JavaScript.
Backend: Node.js, Express.js.
Middleware: Body-Parser.

## 📂 Project Structure

<img width="773" height="397" alt="image" src="https://github.com/user-attachments/assets/8504358b-a30c-4f3f-af30-cc913a6205c5" />

## ⚙️ Getting Started

Prerequisites
Node.js (v14 or higher recommended)
npm (Node Package Manager)

Installation
Clone the repository:
git clone https://github.com/sakshi24-parashar/mern.git
cd mern

Install dependencies:
npm install

Configure API Keys:
Ensure your API keys are correctly placed in the key.txt file located in the root directory.

Running the Project
Start the server:
node main.js

Access the app:
Open your browser and navigate to http://localhost:3000

## 📖 Usage

Type your question into the input field on the home page.
Click the Send button.
The application will send a POST request to the /gpt endpoint.
The server processes the request and sends back a response, which is then displayed on the screen.

## 🤝 Contributing
Contributions, issues, and feature requests are welcome! Feel free to check the issues page if you want to contribute.
