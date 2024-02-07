// This is a sample JavaScript file

// Function to change the color of the description text on click
function changeTextColor() {
    var description = document.querySelector('.description');
    description.style.color = getRandomColor();
}

// Function to generate a random color
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Example usage of the function
document.addEventListener('DOMContentLoaded', function() {
    var description = document.querySelector('.description');
    description.addEventListener('click', changeTextColor);
});
