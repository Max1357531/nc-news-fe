# 📰 EchoPress  
*A full-stack news discussion platform with article voting, commenting, and responsive design — powered by a custom backend and modern React frontend.*



## 🚀 Live Demo

🔗 [Frontend on Vercel](https://nc-news-fe-vercel.vercel.app/)  
🔗 [Backend API Repository](https://github.com/Max1357531/nc-news)

> 🕐 **Note**: The backend is hosted on [Render](https://render.com/), which may take ~60 seconds to spin up after inactivity. Please allow time for the backend to wake before interacting with the site.



## ✅ Key Features

- 🧾 **News Feed with Commenting & Voting**  
  Browse news articles, upvote them, and join the discussion with comments.

- 🔄 **Real-Time Updates**  
  Pages reflect user actions like voting and commenting without needing to refresh.

- 🌙 **Dark & Light Mode**  
  Seamlessly switch between themes with distinct styling and interaction cues.

- 📱 **Fully Responsive Design**  
  Optimized for desktop and mobile — hover interactions enhance usability.

- 🌐 **RESTful Backend API**  
  Articles, users, topics, and comments are served via a custom Express API.



## 🛠️ Tech Stack

### 🧩 Frontend

| React | Axios | JavaScript |
|-------|-------|------------|
| ![](https://github.com/user-attachments/assets/a15e0bed-06b9-42c4-acf2-e8c28a667f2d) | ![](https://github.com/user-attachments/assets/5484bab1-886c-4573-8407-e2341479bbfc) | ![](https://github.com/user-attachments/assets/22da575e-7d98-43c4-ac35-d3fb71c2a317) |

### 🗄️ Backend

| Express.js | PostgreSQL | Jest | JavaScript |
|------------|------------|------|------------|
| ![](https://github.com/user-attachments/assets/cfbbecf7-a132-4e26-8ea9-fe9d80954260) | ![](https://github.com/user-attachments/assets/7f7c3b91-279b-45ee-9861-c6c083537ca6) | ![](https://github.com/user-attachments/assets/e59932d6-a1a9-4345-8b6c-69ba0e2cc98c) | ![](https://github.com/user-attachments/assets/22da575e-7d98-43c4-ac35-d3fb71c2a317) |



## 💡 Design Decisions

### 🗃️ Backend Architecture

The relational database contains four core tables:

- `users`
- `articles`
- `topics`
- `comments`

These are joined and queried via REST endpoints following standard HTTP conventions.

![Database Schema](./assets/diagram.png)


### 🎨 Color Scheme

Dark and light themes are designed with visual clarity in mind:

- **Link colors** differentiate navigation between pages.
- **Action colors** indicate interactivity (e.g., voting or commenting).

| Dark Mode | Light Mode |
|-----------|------------|
| ![](./assets/Dark.png) | ![](./assets/Light.png) |



### 📱 Responsive Layout

Custom responsive views adapt based on screen size. On the **Topics** page, recent article thumbnails are displayed as a grid. Hovering reveals contextual information.

| Before Hover | On Hover |
|--------------|----------|
| ![](./assets/PreHover.png) | ![](./assets/OnHover.png) |



## 🧠 Coding Principles

- 🔁 **Component Reusability** — Built modular React components to minimize repetition and maximize readability
- 🗂️ **Separation of Concerns** — API interactions are isolated in service modules
- 🌐 **RESTful Architecture** — Follows predictable and consistent URL structure and HTTP methods
- ⚙️ **CI/CD Friendly** — Fully deployable via free hosting platforms (Render + Vercel)
- 🧪 **Test-Driven Backend** — All backend routes covered by unit and integration tests using Jest

---

## 🧪 Testing

The backend API is covered with:

- ✅ Unit Tests for individual controllers
- ✅ Integration Tests for route handling
- ✅ Error Handling Tests to catch bad requests

Tested using: **Jest**, **Supertest**

---

## 💻 How To Run
First clone the repo:
```
git clone https://github.com/Max1357531/nc-news-fe
```
Next, navigate to the repo and install dependencies:
```
cd nc-news-fe
npm install
```
To run the app locally:
```
npm run dev
```
Open http://localhost:3000 to view it in the browser
