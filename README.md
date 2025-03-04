

# NestWorth 🏡💰
A Machine Learning-powered Housing Price Prediction System

📌 Overview
NestWorth is a web-based housing price prediction system that leverages Machine Learning to estimate home prices based on various factors. It provides users with an easy-to-use interface to predict prices using real estate data from Bengaluru.

🚀 Features
Predict house prices based on input parameters.
Machine Learning model integration using a trained model in Python.
Flask backend for handling predictions and API requests.
HTML, CSS, JavaScript frontend for a user-friendly experience.
🏗️ Project Structure

```plaintext
NestWorth/
├── frontend/                   # React frontend
│   ├── public/                 # Static files
│   ├── src/
│   │   ├── components/         # Reusable UI components (e.g., Header, PropertyForm)
│   │   ├── pages/              # Main pages (e.g., HomePage, ResultsPage)
│   │   ├── App.js              # Main App component
│   │   ├── index.js            # Entry point
│   ├── package.json            # React dependencies and scripts
│
├── backend/                    # Flask backend
│   ├── app/
│   │   ├── __init__.py         # Initialize Flask app
│   │   ├── routes.py           # Define API endpoints
│   │   ├── models.py           # Define any data models (if needed)
│   ├── config.py               # Flask configuration (e.g., for database or API settings)
│   ├── requirements.txt        # Python dependencies
│   ├── run.py                  # Run the Flask server
│
├── README.md                   # Project documentation

