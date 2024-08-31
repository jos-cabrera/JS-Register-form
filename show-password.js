document.addEventListener('DOMContentLoaded', () => {
    const passwordInput = document.getElementById('password');
    const toggleButton = document.getElementById('show-password');

    toggleButton.addEventListener('click', (event) => {
        // Prevent any default action such as form submission
        event.preventDefault();

        // Toggle the type attribute between 'password' and 'text'
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
        } else {
            passwordInput.type = 'password';
        }
    });
});
