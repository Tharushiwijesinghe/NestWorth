# NestWorth

**Predict home prices using key property features**

This repository contains the source code for the NestWorth website. The tech stack includes:
- **Flask** for the backend
- **React** for frontend styling

## Project Structure

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

