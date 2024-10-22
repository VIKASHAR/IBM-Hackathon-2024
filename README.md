# Skin Disease Prediction Chatbot

This project is a chatbot that predicts skin diseases based on either an image input of the affected area or text describing the symptoms. The project was developed as part of the IBM Hackathon, utilizing IBM Cloud and Watson AI services to build a reliable, scalable, and intelligent chatbot system.

## Features
- Accepts both image and text inputs to analyze symptoms.
- Uses a machine learning model for image classification to predict potential skin diseases.
- Leverages natural language processing (NLP) for text-based symptom analysis.
- Deployed using IBM Cloud and integrated with IBM Watson AI services for image recognition and NLP tasks.

## Tech Stack
- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Python, Flask
- **Machine Learning**: TensorFlow/Keras, IBM Watson AI
- **Cloud Services**: IBM Cloud for deployment, IBM Watson AI for image and text analysis
- **Database**: IBM Cloud Databases (optional for storing user inputs and predictions)

## How It Works
1. **Image Input**: Upload an image of the affected skin area, and the chatbot will predict potential skin diseases using the trained image classification model.
2. **Text Input**: Describe your symptoms, and the chatbot will use NLP models to predict potential skin diseases based on your description.

## Running the Project Locally

### Prerequisites
- Python 3.x
- Flask
- TensorFlow/Keras or PyTorch
- IBM Cloud account (for Watson AI services)
- IBM Watson SDK

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/skin-disease-prediction-chatbot.git
   cd skin-disease-prediction-chatbot
