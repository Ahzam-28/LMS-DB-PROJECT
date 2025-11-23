# 📚 PARHAI WARHAI - Learning Management System

<div align="center">

![Version](https://img.shields.io/badge/version-1.0.0-blue?style=flat-square&color=ff3232)
![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)
![Status](https://img.shields.io/badge/status-Active-success?style=flat-square&color=00ff00)
![Python](https://img.shields.io/badge/Python-3.8+-blue?style=flat-square&logo=python)
![React](https://img.shields.io/badge/React-18+-blue?style=flat-square&logo=react)
![Django](https://img.shields.io/badge/Django-4.0+-darkgreen?style=flat-square&logo=django)

**A modern, interactive Learning Management System built with React & Django**

[Features](#-features) • [Getting Started](#-getting-started) • [Tech Stack](#-tech-stack) • [Project Structure](#-project-structure) • [Contributing](#-contributing)

</div>

---

## 🎯 Overview

**PARHAI WARHAI** is a comprehensive Learning Management System that empowers educators and learners. Students can discover and enroll in courses, access multimedia content, take quizzes, and track their progress. Teachers can create and manage courses, upload lessons with attachments, create assessments, and monitor student performance—all in a sleek, dark-themed interface.

```
┌─────────────────────────────────────────────────────┐
│        🌟 PARHAI WARHAI - LMS Platform 🌟          │
├─────────────────────────────────────────────────────┤
│                                                     │
│  👨‍🎓 Students                 👨‍🏫 Teachers            │
│  ✓ Browse Courses           ✓ Create Courses      │
│  ✓ Enroll in Classes        ✓ Add Lessons         │
│  ✓ Track Progress           ✓ Create Quizzes      │
│  ✓ Take Assessments         ✓ Manage Enrollment   │
│  ✓ View Results             ✓ View Analytics      │
│                                                     │
└─────────────────────────────────────────────────────┘
```

---

## ✨ Features

### 🎓 For Students
- 🔍 **Course Discovery** - Browse and search thousands of courses
- 📚 **Organized Learning** - Lessons structured by categories
- 🎬 **Multimedia Content** - Video lessons and downloadable files
- 📊 **Progress Tracking** - Visual progress bars and completion status
- 🧪 **Interactive Quizzes** - MCQ-based assessments with instant scoring
- 💳 **Secure Enrollment** - Safe payment processing with OTP verification
- ⭐ **Teacher Profiles** - Learn about instructors before enrolling

### 👨‍🏫 For Teachers
- ➕ **Easy Course Creation** - Intuitive course setup wizard
- 📝 **Lesson Management** - Organize lessons by categories
- 📤 **File Attachments** - Upload PDF, documents, and resources
- 🎥 **Video Integration** - Embed video lessons
- ✅ **Quiz Builder** - Create multiple-choice question banks
- 👥 **Student Management** - Track enrollments and progress
- 📈 **Analytics** - View course statistics and student performance

### 🔐 Security & Authentication
- 🔑 **JWT Authentication** - Secure token-based auth
- 🔒 **OTP Verification** - Two-factor authentication for payments
- 🛡️ **Password Security** - Hashed passwords with bcrypt
- 🔐 **Role-Based Access** - Different features for Students & Teachers

---

## 🚀 Quick Start

### Prerequisites
- **Python 3.8+**
- **Node.js 14+** & **npm**
- **SQLite3** (or PostgreSQL for production)
- **Git**

### Installation

#### 1️⃣ Clone the Repository
```bash
git clone https://github.com/Ahzam-28/LMS-DB-PROJECT.git
cd LMS-DB-PROJECT
```

#### 2️⃣ Backend Setup (Django)
```bash
# Navigate to backend
cd lms_api

# Create virtual environment
python -m venv venv

# Activate virtual environment
# On Windows:
venv\Scripts\activate
# On macOS/Linux:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Run migrations
python manage.py migrate

# Create superuser (admin)
python manage.py createsuperuser

# Start development server
python manage.py runserver
```

Backend will run on: **http://localhost:8000**

#### 3️⃣ Frontend Setup (React)
```bash
# Navigate to frontend (in a new terminal)
cd frontend

# Install dependencies
npm install

# Start development server
npm start
```

Frontend will run on: **http://localhost:3000**

### 🧪 Running Tests
```bash
# Backend tests
cd lms_api
python manage.py test

# Frontend tests
cd frontend
npm test
```

---

## 📚 Tech Stack

### Frontend
| Technology | Purpose |
|-----------|---------|
| **React 18** | UI Library & Components |
| **React Router v6** | Client-side Routing |
| **Axios** | HTTP Client |
| **CSS3** | Styling & Animations |
| **FontAwesome** | Icons & Symbols |

### Backend
| Technology | Purpose |
|-----------|---------|
| **Django 4.0+** | Web Framework |
| **Django REST Framework** | API Development |
| **SQLite/PostgreSQL** | Database |
| **JWT (PyJWT)** | Authentication |
| **Pillow** | Image Processing |
| **python-decouple** | Environment Variables |

### Design & UX
- 🎨 **Dark Theme** - Vanta black with red accents (#0a0a0a, #ff3232)
- ✨ **Modern UI** - Glassmorphism effects, smooth animations
- 📱 **Responsive** - Works on desktop, tablet, and mobile
- 🎭 **Accessibility** - WCAG compliant color contrast

---

## 📁 Project Structure

```
LMS-DB-PROJECT/
│
├── 📱 frontend/                    # React Application
│   ├── public/                     # Static assets
│   ├── src/
│   │   ├── components/             # React components
│   │   │   ├── Dashboard.js/.css   # User dashboard
│   │   │   ├── CourseDetail.js/.css # Course page
│   │   │   ├── CourseEnrollment.js # Course listing
│   │   │   ├── Quiz.js/.css        # Quiz interface
│   │   │   ├── TeacherProfile.js   # Teacher profiles
│   │   │   ├── Navbar.js/.css      # Navigation
│   │   │   ├── HomePage.js/.css    # Landing page
│   │   │   ├── Login.js            # Authentication
│   │   │   └── Register.js         # User signup
│   │   ├── App.js                  # Main app component
│   │   ├── api.js                  # API configuration
│   │   └── index.js                # React entry point
│   └── package.json                # Dependencies
│
├── 🔧 lms_api/                     # Django Backend
│   ├── main/                       # Main app
│   │   ├── models.py               # Database models
│   │   ├── views.py                # API endpoints
│   │   ├── serializers.py          # Data serializers
│   │   ├── urls.py                 # URL routing
│   │   ├── otp_service.py          # OTP logic
│   │   ├── admin.py                # Admin panel
│   │   └── migrations/             # Database migrations
│   ├── lms_api/
│   │   ├── settings.py             # Project config
│   │   ├── urls.py                 # Main URLs
│   │   ├── wsgi.py                 # WSGI config
│   │   └── asgi.py                 # ASGI config
│   ├── manage.py                   # Django CLI
│   ├── db.sqlite3                  # Database
│   └── requirements.txt            # Python dependencies
│
├── 📖 PROJECT_DOCUMENTATION.md     # Detailed documentation
├── ❓ FAQ.md                       # Frequently asked questions
└── 📄 README.md                    # This file
```

---

## 🔄 Data Flow

### User Registration & Login
```
User Input (Form) 
    ↓
Register.js / Login.js (Frontend)
    ↓
api.js (HTTP Request)
    ↓
Django Backend (/api/register/ or /api/login/)
    ↓
models.py (Database Check/Create)
    ↓
JWT Token Generated
    ↓
Token Stored in localStorage (Frontend)
    ↓
Redirected to Dashboard
```

### Course Enrollment
```
Student Browses Courses (CourseEnrollment.js)
    ↓
Selects Course → CourseDetail.js
    ↓
Clicks "Enroll Now"
    ↓
Payment Processing
    ↓
OTP Verification (via otp_service.py)
    ↓
Enrollment Record Created in Database
    ↓
Student Gets Access to Course Content
```

### Quiz & Assessment
```
Teacher Creates Quiz (CourseDetail.js)
    ↓
Adds Questions & Answers
    ↓
Student Takes Quiz (Quiz.js)
    ↓
Submits Answers
    ↓
Backend Calculates Score (views.py)
    ↓
Grade Assigned & Stored in Database
    ↓
Results Displayed to Student
```

---

## 🔌 API Endpoints

### Authentication
```
POST   /api/register/              - Register new user
POST   /api/login/                 - Login user
POST   /api/send-otp/              - Send OTP code
POST   /api/verify-otp/            - Verify OTP
```

### Users & Profiles
```
GET    /api/user/                  - Get all users
GET    /api/user/{id}/             - Get user details
POST   /api/user/                  - Create user
PATCH  /api/user/{id}/             - Update user
DELETE /api/user/{id}/             - Delete user
```

### Courses
```
GET    /api/course/                - List all courses
GET    /api/course/{id}/           - Get course details
POST   /api/course/                - Create course (teacher)
PATCH  /api/course/{id}/           - Update course
DELETE /api/course/{id}/           - Delete course
```

### Lessons
```
GET    /api/lesson/                - List lessons
POST   /api/lesson/                - Create lesson
PATCH  /api/lesson/{id}/           - Update lesson
DELETE /api/lesson/{id}/           - Delete lesson
```

### Quizzes & Results
```
GET    /api/quiz/                  - List quizzes
POST   /api/quiz/                  - Create quiz
POST   /api/quiz-result/           - Submit quiz answers
GET    /api/quiz-result/{id}/      - Get quiz results
```

### Enrollment
```
GET    /api/enrollment/            - List enrollments
POST   /api/enrollment/            - Enroll in course
DELETE /api/enrollment/{id}/       - Unenroll from course
```

### Payments
```
GET    /api/payment/               - List payments
POST   /api/payment/               - Process payment
```

---

## 🎨 Styling & Design

### Color Palette
```
🖤 Vanta Black Background:    #0a0a0a → #1a1a1a
🔴 Red Accent:               #ff3232 → #ff0000
⚪ Text Primary:             #ffffff
🔘 Text Secondary:           #c0c0c0
💚 Progress Indicator:       #00ff00
```

### Design System
- **Layout**: CSS Grid (1fr 300px for 2-column)
- **Effects**: Glassmorphism, Gradients, Shadows
- **Animations**: Floating, Pulsing, Shimmer effects
- **Typography**: 
  - H1: 2.5rem (headings)
  - H5: 1.5rem (subheadings)
  - Body: 1rem (default text)
  - Buttons: 1.05rem (interactive elements)

---

## 🛠️ Development

### Environment Variables

Create `.env` file in `lms_api/` directory:
```env
SECRET_KEY=your-secret-key-here
DEBUG=True
ALLOWED_HOSTS=localhost,127.0.0.1
DATABASE_URL=sqlite:///db.sqlite3
JWT_SECRET=your-jwt-secret
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_HOST_USER=your-email@gmail.com
EMAIL_HOST_PASSWORD=your-app-password
```

### Making Changes

1. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes**
   - Update files as needed
   - Follow code style guidelines
   - Test thoroughly

3. **Commit changes**
   ```bash
   git add .
   git commit -m "Add: Brief description of changes"
   ```

4. **Push to repository**
   ```bash
   git push origin feature/your-feature-name
   ```

5. **Create Pull Request**
   - Describe your changes
   - Reference related issues
   - Request review

---

## 📊 Database Schema

### Core Models
- **CustomUser** - Extended user model with username, email
- **Student** - Student profile (extends CustomUser)
- **Teacher** - Teacher profile with expertise (extends CustomUser)
- **Course** - Course information with pricing
- **LessonCategory** - Organize lessons within courses
- **Lesson** - Individual lessons with content & video
- **LessonFile** - Attachments to lessons
- **Quiz** - Assessment per lesson category
- **Question** - Quiz questions (MCQ format)
- **Answer** - Answer options for questions
- **Result** - Student quiz scores & grades
- **Enrollment** - Student-Course relationship
- **Payment** - Transaction records
- **OTP** - One-time passwords for verification

---

## 🐛 Troubleshooting

### Backend Issues

**Port 8000 already in use:**
```bash
# Windows
netstat -ano | findstr :8000
taskkill /PID <PID> /F

# macOS/Linux
lsof -i :8000
kill -9 <PID>
```

**Database migration errors:**
```bash
python manage.py migrate --fake-initial
python manage.py migrate
```

### Frontend Issues

**Node modules not installing:**
```bash
rm -rf node_modules package-lock.json
npm install
```

**CORS errors:**
- Check `settings.py` CORS configuration
- Ensure backend is running on correct port
- Verify `api.js` has correct backend URL

---

## 📖 Documentation

- 📘 **[PROJECT_DOCUMENTATION.md](PROJECT_DOCUMENTATION.md)** - Complete technical documentation
- ❓ **[FAQ.md](FAQ.md)** - Frequently asked questions
- 🔗 **[API Documentation](#-api-endpoints)** - API endpoint reference

---

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create your feature branch** (`git checkout -b feature/AmazingFeature`)
3. **Commit your changes** (`git commit -m 'Add some AmazingFeature'`)
4. **Push to the branch** (`git push origin feature/AmazingFeature`)
5. **Open a Pull Request**

### Coding Standards
- Follow PEP 8 for Python code
- Use ES6+ for JavaScript
- Add comments for complex logic
- Write meaningful commit messages

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Ahsan Ahzam Ali**
- 📧 Email: [Your Email]
- 🐙 GitHub: [@Ahzam-28](https://github.com/Ahzam-28)
- 💼 Portfolio: [Your Portfolio URL]

---

## 🙏 Acknowledgments

- Django & Django REST Framework teams
- React community for amazing tools
- All contributors and users

---

## 📞 Support

Have questions or issues? 

- 📖 Check [FAQ.md](FAQ.md) for common questions
- 📚 Read [PROJECT_DOCUMENTATION.md](PROJECT_DOCUMENTATION.md) for detailed info
- 🐛 Open an [Issue](https://github.com/Ahzam-28/LMS-DB-PROJECT/issues) on GitHub
- 💬 Contact: [Your Contact Info]

---

<div align="center">

### ⭐ If you found this project helpful, please star it! ⭐

**Made with ❤️ by Ahsan Ahzam Ali**

[⬆ back to top](#-parhai-warhai---learning-management-system)

</div>
