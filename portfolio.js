document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');

        // Example of dynamic action on form submission
        console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);

        // Clear the form after submission
        contactForm.reset();
    });
});
