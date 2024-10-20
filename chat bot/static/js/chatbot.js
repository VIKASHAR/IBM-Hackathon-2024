// Handle form submission for chat
document.getElementById('chat-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const question = this.user_question.value;

    // Hide the cards once the chat starts
    document.getElementById('card-container').style.display = 'none';

    // Display the chat history container
    const chatHistory = document.getElementById('chat-history');
    chatHistory.style.display = 'block';

    // Add user question to the chat history
    const userMessage = document.createElement('div');
    userMessage.classList.add('chat-message', 'user-message');
    userMessage.innerHTML = `<strong>You:</strong> ${question}`; // Bold "You"
    chatHistory.appendChild(userMessage);

    fetch('/chat', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `user_question=${encodeURIComponent(question)}` // Fixed syntax here
    })
    .then(response => response.json())
    .then(data => {
        // Add bot response to the chat history
        const botMessage = document.createElement('div');
        botMessage.classList.add('chat-message', 'bot-message');
        botMessage.innerHTML = `<strong>DermBot:</strong> ${data.response ? data.response : 'No response from the server.'}`; // Bold "DermBot"
        chatHistory.appendChild(botMessage);
        
        // Scroll to the bottom of the chat history
        chatHistory.scrollTop = chatHistory.scrollHeight;
    })
    .catch(error => console.error('Error:', error));

    // Clear the input field after sending
    this.user_question.value = '';
});

// Handle image upload prediction
document.getElementById('file-upload').addEventListener('change', function(e) {
    const formData = new FormData();
    formData.append('file', this.files[0]);

    fetch('/predict', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('prediction-result').innerText =
            data.prediction ? `Prediction: ${data.prediction}` : `Error: ${data.error}`; // Fixed syntax here
    })
    .catch(error => console.error('Error:', error));
});
