# Job/Internship Application Tracker

A comprehensive application to track job and internship applications, built with the MERN stack.

## Features

- 🔐 Authentication with JWT and Role-based access control
- 📝 Add, update, and delete job applications
- 🔍 Filter applications by status (Applied, Interviewed, Rejected)
- 📄 Resume upload and management
- 📓 Interview notes and feedback
- 📊 Data visualization using Recharts
- 🤖 ML-powered job recommendations
- 🌐 Web scraping for job listings

## Tech Stack

### Frontend
- React + Vite
- Redux Toolkit for state management
- Material-UI for components
- Recharts for data visualization
- Axios for API calls

### Backend
- Node.js + Express
- MongoDB for database
- JWT for authentication
- Multer for file uploads
- Python for web scraping and ML

## Project Structure

```
job-tracker/
├── client/                 # Frontend React application
├── server/                 # Backend Node.js application
├── python-scripts/         # Python scripts for web scraping and ML
└── README.md
```

## Setup Instructions

### Prerequisites
- Node.js (v16 or higher)
- MongoDB
- Python 3.8+
- npm or yarn

### Installation

1. Clone the repository
2. Install frontend dependencies:
   ```bash
   cd client
   npm install
   ```

3. Install backend dependencies:
   ```bash
   cd server
   npm install
   ```

4. Install Python dependencies:
   ```bash
   cd python-scripts
   pip install -r requirements.txt
   ```

5. Set up environment variables:
   - Create `.env` files in both client and server directories
   - Add necessary environment variables (see .env.example files)

### Running the Application

1. Start the backend server:
   ```bash
   cd server
   npm run dev
   ```

2. Start the frontend development server:
   ```bash
   cd client
   npm run dev
   ```

3. Run Python scripts (when needed):
   ```bash
   cd python-scripts
   python scraper.py
   ```

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request 
