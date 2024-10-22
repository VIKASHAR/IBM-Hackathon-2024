# DermBot - Skin Disease and Severity Prediction Chatbot

DermBot is a chatbot that predicts **both skin diseases and their severity** based on either an image input of the affected area or text describing the symptoms. The project was developed as part of the IBM Hackathon, utilizing IBM Cloud and Watson AI services to build a reliable, scalable, and intelligent chatbot system.

## Features
- Accepts both image and text inputs to analyze symptoms.
- Uses a machine learning model for image classification to predict potential skin diseases.
- **Predicts the severity** of the disease (e.g., mild, moderate, severe) based on the input.
- Leverages natural language processing (NLP) for text-based symptom analysis.
- Designed for future cloud deployment using IBM Cloud and Watson AI services.

## Tech Stack
- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Python, Flask
- **Machine Learning**: TensorFlow/Keras, IBM Watson AI
- **Cloud Services**: IBM Cloud for potential future deployment, IBM Watson AI for image and text analysis

## How It Works
1. **Image Input**: Upload an image of the affected skin area, and DermBot will predict both the potential skin diseases and the severity level (e.g., mild, moderate, severe) using the trained image classification model.
2. **Text Input**: Describe your symptoms, and DermBot will use NLP models to predict potential skin diseases and estimate the severity based on the textual description.

## Dataset for Image and Severity Prediction
![Screenshot 2024-10-20 115135](https://github.com/user-attachments/assets/94560a53-cf13-4d67-813d-2abad4dd6101)

## Training Model using IBM VM
![Screenshot 2024-10-20 114906](https://github.com/user-attachments/assets/696c1b87-e541-4886-981d-c3459ac5e9e7)

## Running the Project Locally
![Screenshot 2024-10-20 090127](https://github.com/user-attachments/assets/d8fc4ea3-8bb0-44b1-ba52-7d9a1d5fc115)

![Screenshot 2024-10-20 090454](https://github.com/user-attachments/assets/75548543-28ba-4bd0-8d5e-eb859d59834f)

### Prerequisites
- Python 3.x
- Flask
- TensorFlow/Keras or PyTorch
- IBM Cloud account (for Watson AI services)
- IBM Watson SDK

### Usage
Upload an image or describe your symptoms in the provided input fields.

DermBot will process the input and provide a prediction for both the skin disease and its severity along with some recommendations.

### Future Enhancements
Cloud Deployment: Deploy the chatbot on IBM Cloud for global accessibility.

Improve the accuracy of image classification models by training on a larger dataset.

Integrate a more advanced NLP model for better text-based predictions.

Add user authentication and history tracking for returning users.
