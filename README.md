#  PulseNews - Full Stack News Application

A full-stack news web application built using React.js (Frontend) and Flask + MySQL (Backend).  
Users can read latest news, search topics, and save bookmarks which are stored in a database.

---

##  Features

###  Frontend (React)
-  Live news from API  
-  Search news (Enter + Button)  
-  Category filtering (Sports, Technology, India, Politics)  
-  Infinite Scroll  
-  Dark Mode  
-  Skeleton Loading UI  
-  Back to Top button  
-  Responsive UI  

###  Backend (Flask + MySQL)
-  Save bookmarks  
-  Fetch bookmarks  
-  Delete bookmarks  
-  REST API  

---

##  Tech Stack

**Frontend:**
- React.js  
- JavaScript  
- CSS  

**Backend:**
- Python (Flask)  

**Database:**
- MySQL  

---

##  Project Structure 
news-pulse-react/
│
├── src/ # React frontend
├── public/
├── package.json
│
├── backend/ # Flask backend
│ └── app.py


---

##  Installation & Setup

### 1️ Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/pulse-news-fullstack.git
cd pulse-news-fullstack

## Frontend Setup
npm install
npm start

## Backend Setup
cd backend
pip install flask flask-cors mysql-connector-python
python app.py

=> Runs on: http://127.0.0.1:5000

 ## Database Setup (MySql)
 CREATE DATABASE news_app;

USE news_app;

CREATE TABLE bookmarks (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title TEXT,
    url TEXT
);

##API Setup
Get API key from: https://newsapi.org
Replace in App.js:
const API_KEY = "YOUR_API_KEY";

## Future Improvements
 Login / Signup
 Like & comment system
 Deployment

 👩 Author

Niharika Pathak