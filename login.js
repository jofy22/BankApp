function login(event) {
    // Prevent form from submitting
    event.preventDefault();

    // Get the input values from the form
    const username = acno.value;
    const password = upass.value;

    // Check if the username exists in localStorage
    if (localStorage.getItem(username)) {
        // Retrieve the stored user object
        const storedUser = JSON.parse(localStorage.getItem(username));

        if (storedUser.password === password) {
            localStorage.setItem('currentUser', JSON.stringify(storedUser));
            alert("Login successful!"); 
            window.location= './home.html';
        } else {
            alert("Incorrect password, please try again.");
        }
    } else {
        alert("User does not exist. Please register.");
    }
}
