document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Show loading state
    const submitButton = this.querySelector('button[type="submit"]');
    const originalButtonText = submitButton.innerHTML;
    submitButton.innerHTML = 'Sending...';
    submitButton.disabled = true;

    // Get form data
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    // Send email using EmailJS
    emailjs.send(
        'YOUR_SERVICE_ID', // Add your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Add your EmailJS template ID
        {
            from_email: email,
            phone_number: phone,
            message: message,
        }
    )
    .then(function(response) {
        // Show success message
        alert('Message sent successfully!');
        
        // Reset form
        document.getElementById('contactForm').reset();
    })
    .catch(function(error) {
        // Show error message
        alert('Failed to send message. Please try again.');
        console.error('EmailJS error:', error);
    })
    .finally(function() {
        // Reset button state
        submitButton.innerHTML = originalButtonText;
        submitButton.disabled = false;
    });
}); 