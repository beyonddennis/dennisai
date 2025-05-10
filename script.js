// script.js
document.addEventListener('DOMContentLoaded', function() {
 const userInput = document.getElementById('user-input');
 const sendButton = document.getElementById('send-button');
 const chatLog = document.getElementById('chat-log');

 sendButton.addEventListener('click', function() {
 const messageText = userInput.value;
 if (messageText.trim() !== '') {
 // Display user message
 displayMessage(messageText, 'user');

 // Send message to Gemini and display response
 getGeminiResponse(messageText);

 // Clear input field
 userInput.value = '';
 }
 });

 // Function to display message in chat log
 function displayMessage(message, sender) {
 const messageElement = document.createElement('div');
 messageElement.classList.add('message', sender);
 messageElement.textContent = message;
 chatLog.appendChild(messageElement);
 chatLog.scrollTop = chatLog.scrollHeight; // Scroll to bottom
 }

 // Function to get response from Gemini (replace with actual API call)
 async function getGeminiResponse(message) {
 // Simulate Gemini response after a short delay
 setTimeout(() => {
 const geminiResponse = `This is a simulated response from Gemini for: ${message}`;
 displayMessage(geminiResponse, 'gemini');
 }, 500);
 }
});
