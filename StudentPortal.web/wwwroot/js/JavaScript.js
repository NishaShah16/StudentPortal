function validateForm() {
    let isValid = true;

    // Get form fields
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();

    // Clear previous error messages
    document.getElementById('nameError').innerText = '';
    document.getElementById('emailError').innerText = '';
    document.getElementById('phoneError').innerText = '';

    // Name validation
    if (name === "") {
        document.getElementById('nameError').innerText = 'Name is required';
        isValid = false;
    }

    // Email validation (simple pattern check)
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        document.getElementById('emailError').innerText = 'Enter a valid email address';
        isValid = false;
    }

    // Phone validation (basic numeric check, modify for more specific validation if needed)
    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone)) {
        document.getElementById('phoneError').innerText = 'Enter a valid 10-digit phone number';
        isValid = false;
    }

    return isValid; // Prevent form submission if validation fails
}
