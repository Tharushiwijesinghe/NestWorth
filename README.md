# NestWorth
#Predict home price using some features
#This repository contains the source code for a NestWorth website. The stack includes Flask for the backend, Bootstrap/CSS for styling for frontend.
#This is my project structure
home-pricing-project/
├── backend/                   # Backend project (Flask)
│   ├── app.py                 # Main application file
│   ├── config.py              # Configuration file (e.g., database settings)
│   ├── models/                # Folder for database models
│   │   └── property.py        # Property model (size, location, bedrooms)
│   ├── views/                 # Views to handle requests and responses
│   │   └── estimate.py        # Endpoint for estimating home prices
│   ├── utils/                 # Utility functions for backend
│   │   └── calculations.py    # Calculations and logic for price estimation
│   ├── serializers/           # Serializers for API responses
│   │   └── property_serializer.py  # Serializer for property data
│   ├── tasks/                 # Asynchronous tasks (e.g., ML predictions)
│   │   └── prediction_task.py # Task for processing model predictions
│   ├── static/                # Static files (CSS, JS, images)
│   ├── templates/             # HTML templates for Flask views
│   │   ├── index.html         # Home page with property input form
│   │   └── results.html       # Page displaying estimated price
│   ├── .env                   # Environment variables (e.g., API keys, secrets)
│   └── requirements.txt       # Project dependencies
│
├── frontend/                  # Frontend assets (HTML/CSS/JavaScript)
│   ├── css/
│   │   └── main.css           # Custom styles
│   ├── js/
│   │   └── main.js            # Custom JavaScript files
│   └── index.html             # Frontend entry point
│
├── ml_model/                  # Folder for machine learning model
│   ├── model.pkl              # Serialized machine learning model
│   ├── preprocess.py          # Data preprocessing for model input
│   └── predict.py             # Prediction script for estimating prices
│
└── README.md                  # Project documentation

 
