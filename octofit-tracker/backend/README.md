# OctoFit Tracker Backend

## Overview
The OctoFit Tracker is a fitness application designed to help users track their activities, manage teams, and receive personalized workout suggestions. This README provides instructions for setting up and running the backend of the application.

## Project Structure
The backend of the OctoFit Tracker app follows the structure below:

```
octofit-tracker/
├── backend/
│   ├── venv/                  # Python virtual environment
│   ├── octofit_tracker/       # Django application
│   │   ├── manage.py          # Command-line utility for administrative tasks
│   │   ├── settings.py        # Configuration settings for the Django app
│   │   ├── urls.py            # URL patterns for the Django app
│   │   └── wsgi.py            # WSGI entry point for the application
│   ├── requirements.txt        # Required Python packages
└── frontend/                  # Frontend application (not covered in this README)
```

## Setup Instructions

### Prerequisites
- Python 3.x
- pip (Python package installer)
- MongoDB (for database management)

### Creating the Virtual Environment
To create a Python virtual environment, run the following command:

```bash
python3 -m venv octofit-tracker/backend/venv
```

### Activating the Virtual Environment
Activate the virtual environment using:

```bash
source octofit-tracker/backend/venv/bin/activate
```

### Installing Required Packages
Install the required Python packages by running:

```bash
pip install -r octofit-tracker/backend/requirements.txt
```

### Running the Application
To run the Django application, use the following command:

```bash
python octofit_tracker/manage.py runserver
```

### Checking MongoDB Service
To check if the MongoDB service is running, use:

```bash
ps aux | grep mongod
```

## Additional Information
For more details on the frontend setup and usage, please refer to the frontend README located in the `frontend/` directory.