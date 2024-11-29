// Function to handle form validation and display the message
function validateForm(event) {
    event.preventDefault(); // Prevent default form submission behavior

    const name = document.getElementById("name").value;
    const age = parseInt(document.getElementById("age").value);
    let message = "";

    // Determine the message based on the user's age
    if (age >= 0 && age <= 18) {
        message = `${name}, dear, this is the perfect time for you to focus on your studies and enjoy playing sports. Take good care of your health—it's the foundation for a bright future!`;
    } else if (age >= 18 && age <= 24) {
        message = `${name}, you're standing at the crossroads of possibility! Whether you're pursuing higher education, securing a job, or exploring the entrepreneurial world, this is your chance to carve a path filled with purpose and ambition. Remember to think carefully, act decisively, and seek wisdom from those who have walked before you. Lead by example, and be a guide to your younger generation. Cherish your family and elders—your strength is in the bonds you nurture. And above all, don’t ever give up on yourself. Believe deeply in *you*, because you have what it takes to achieve greatness!`;
    } else if (age >= 25 && age <= 40) {
        message = `${name}, this is the time to plan wisely! If you’re already working, make sure to manage your finances carefully. Try to avoid unnecessary debts, and if you have any, aim to clear them as soon as possible. Live happily and stay focused on building a fulfilling life. And remember: never give up on yourself and always believe in *you*!`;
    } else if (age > 40) {
        message = `${name}, you've come a long way! Now is the time to think about your retirement and create beautiful memories with your life partner. Take good care of yourself and enjoy every precious moment ahead.`;
    } else {
        message = "Please enter a valid age!";
    }

    // Display the message and hide the form and header
    document.getElementById("message").innerText = message;
    document.getElementById("inputForm").style.display = "none";
    document.getElementById("formHeader").style.display = "none";
}

// Add event listener to the form
document.getElementById("inputForm").addEventListener("submit", validateForm);
