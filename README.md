# 🎓 PARHAI WARHAI
## Learning Management System (LMS)

![Version](https://img.shields.io/badge/Version-1.0.0-blueviolet)
![Backend](https://img.shields.io/badge/Backend-Django-success)
![Frontend](https://img.shields.io/badge/Frontend-React-blue)
![Database](https://img.shields.io/badge/Database-SQLite-lightgrey)
![License](https://img.shields.io/badge/License-MIT-yellow)

---

## 📌 Project Overview

**PARHAI WARHAI** is a full-stack **Learning Management System (LMS)** designed to provide a seamless online education experience.  
Students can enroll in courses, access lessons, attempt quizzes, and track their learning progress.  
Teachers can create and manage courses, upload lesson materials, and assess students through quizzes.

The system is built using a **modern technology stack**, secured with **JWT authentication** and **OTP-based payment verification**, and features a clean **dark-themed user interface**.

---

## 🛠️ Technology Stack

### 🌐 Frontend
- React.js
- React Router
- CSS3 (Dark Theme & Light Theme UI)

### ⚙️ Backend
- Django
- Django REST Framework
- JWT Authentication

### 🗄️ Database
- SQLite

---

## 👥 Target Audience

### 🎓 Students
- Browse and enroll in courses
- Access lessons and learning files
- Attempt quizzes
- Track progress

### 👨‍🏫 Teachers
- Create and manage courses
- Upload lessons and materials
- Create quizzes
- Monitor student performance

### 🛡️ Administrators
- Manage users and roles
- Monitor system operations
- Configure platform settings

---

## 🔍 Project Scope

### ✅ Included Features
- User registration and authentication (Student / Teacher)
- Course creation, management, and enrollment
- Lesson organization with multimedia support
- Quiz creation with automatic grading
- Student progress tracking
- Payment processing (Credit Card, Easypaisa, Bank Transfer)
- OTP verification for secure payments
- User dashboards
- Teacher profile viewing
- Fully responsive design

---

## 📋 Functional Requirements

- User registration with role selection
- Secure login using JWT
- Course creation, editing, and deletion
- Lesson and file management
- Quiz creation and participation
- Free and paid course enrollment
- OTP-secured payment system
- Progress tracking and reporting
- Separate dashboards for students and teachers

---

## ⚙️ Non-Functional Requirements

- Page load time under 3 seconds
- Support for 100+ concurrent users
- HTTPS-secured data transmission
- Password hashing using bcrypt
- JWT expiration after 24 hours
- SQL injection prevention
- 99% system uptime
- Responsive UI for all devices
- High-contrast dark theme
- Creamy light theme
- Modular and scalable architecture

---

## 🗂️ ER Diagram (Overview)
```
CustomUser
├── Student
└── Teacher
└── Course
├── Enrollment
├── Payment
├── LessonCategory
│ └── Lesson
│ └── LessonFile
└── Quiz
├── Question
│ └── Answer
└── Result
OTP

```

---

## 🧮 Database Design

- Fully normalized (**Third Normal Form - 3NF**)
- Consists of **15 relational tables**
- Ensures data consistency and integrity
- Optimized for scalability and maintainability

### Tables
1. CustomUser  
2. Student  
3. Teacher  
4. Category  
5. Course  
6. LessonCategory  
7. Lesson  
8. LessonFile  
9. Enrollment  
10. Quiz  
11. Question  
12. Answer  
13. Result  
14. Payment  
15. OTP  

---

# 🚀 How to Run the Project

## 🔧 Backend (Django)


### Step 1: Navigate to the backend folder
```
pip install -r requirements.txt
```
### Step 2: Run the Django server
```
python manage.py runserver
```
## 🌐 Frontend (React)

### Step 3: Navigate to the frontend folder
```
npm install
```
### Step 4: Start the frontend server
```
npm start
```
Open your browser and visit:
```
http://localhost:3000
```
## 🏆 Key Achievements
Complete LMS with student and teacher portals

Secure authentication and payment system

Dark-themed and Light-themed responsive UI

RESTful API with 32+ endpoints

Properly normalized database design

Clean and modular project structure

## 🔮 Future Enhancements
Real-time chat system

Advanced analytics and reports

Mobile applications

Gamification features

Cloud deployment

## 📚 References
React: https://react.dev

Django: https://www.djangoproject.com/

Django REST Framework: https://www.django-rest-framework.org/

SQLite: https://www.sqlite.org/

JWT: https://jwt.io/

## 🔗 Project Repository
GitHub: https://github.com/Ahzam-28/LMS-DB-PROJECT

License: MIT

Version: 1.0.0

## 👨‍💻 Authors
- Ahsan Faizan

- Ahzam Hassan

- Ali Samad
