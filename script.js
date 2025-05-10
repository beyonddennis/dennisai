document.addEventListener('DOMContentLoaded', function() {
    const chatLog = document.getElementById('chat-log');
    const userInput = document.getElementById('user-input');
    const sendButton = document.getElementById('send-button');

    sendButton.addEventListener('click', function() {
        const message = userInput.value;
        if (message.trim() !== '') {
            displayMessage('user', message);
            userInput.value = '';

            // Simulate Gemini AI response
            setTimeout(function() {
                displayMessage('gemini', 'This is a placeholder response from Gemini AI.');
            }, 500);
        }
    });

    function displayMessage(sender, message) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message');
        messageElement.classList.add(sender);
        messageElement.textContent = `${sender}: ${message}`;
        chatLog.appendChild(messageElement);
        chatLog.scrollTop = chatLog.scrollHeight; // Scroll to bottom
    }
});