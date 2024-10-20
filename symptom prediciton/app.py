from flask import Flask, render_template, request, jsonify
import numpy as np
import pickle

# Load the model
with open('severity_predictor_model.pkl', 'rb') as f:
    model = pickle.load(f)

# Mapping of disease names to their corresponding numerical values
disease_mapping = {
    'Candidiasis': 0,  # Example mapping; adjust based on your model
    'Basal Cell Carcinoma': 1,
    'Psoriasis': 2,
    'Warts': 3,
    'Molluscum Contagiosum': 4
}

# Mapping of predicted severity to descriptive levels
severity_mapping = {
    0: 'None',    # Adjust these mappings based on your model's output
    1: 'Low',
    2: 'Medium',
    3: 'High'
}

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/predict', methods=['POST'])
def predict():
    disease = request.form['disease']  # Get disease name from form input
    dryness = int(request.form['dryness'])
    redness = int(request.form['redness'])
    swelling = int(request.form['swelling'])
    oozing = int(request.form['oozing'])
    scratching = int(request.form['scratching'])
    thickening = int(request.form['thickening'])

    # Get the corresponding numerical value for the disease
    disease_value = disease_mapping.get(disease)
    
    # Check if disease_value is found
    if disease_value is None:
        return jsonify({'error': 'Invalid disease selected.'}), 400

    # Prepare input data, including the disease numerical value
    input_data = np.array([[dryness, redness, swelling, oozing, scratching, thickening, disease_value]])

    # Predict the severity
    prediction = model.predict(input_data)

    # Map numerical prediction to descriptive severity level
    predicted_severity = severity_mapping.get(int(prediction[0]), 'Unknown')

    return jsonify({
        'disease': disease,
        'predicted_severity': predicted_severity
    })


if __name__ == '__main__':
    app.run(debug=True)
