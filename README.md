

# NestWorth 🏡💰
A Machine Learning-powered Housing Price Prediction System

📌 Overview

NestWorth is a web-based housing price prediction system that leverages Machine Learning to estimate home prices based on various factors. It provides users with an easy-to-use interface to predict prices using real estate data from Bengaluru.

🚀 Features

house prices based on input parameters.
Machine Learning model integration using a trained model in Python.
Flask backend for handling predictions and API requests.
HTML, CSS, JavaScript frontend for a user-friendly experience.

🏗️ Project Structure

```plaintext
NestWorth/
│── client/            # Frontend (HTML, CSS, JS)
│   ├── css/           # Stylesheets
│   ├── js/            # JavaScript files
│   ├── images/        # Images used in UI
│   ├── index.html     # Homepage
│   ├── estimate.html  # Price estimation page
│
│── model/             # Machine Learning models
│   ├── Data/          # Raw dataset
│   ├── house_pricing.ipynb  # Jupyter notebook for training
│
│── server/            # Backend using Flask
│   ├── artifacts/     # Trained model & metadata
│   ├── server.py      # Main Flask API
│
│── README.md          # Project documentation
