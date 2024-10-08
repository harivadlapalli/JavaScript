// Define the array
var array = [10, 50, 30, 25, 35];

// Use querySelector to select the HTML element by class
var displayDiv = document.querySelector('.array-values'); // Selecting the element by class using CSS selector syntax

// Create an HTML list element to display the array values
var list = document.createElement('ul');

// Iterate over the array and create list items
array.forEach(function(i) {
    var listItem = document.createElement('li'); // Create a list item for each array element
    listItem.textContent = i; // Set the text of the list item to the array element
    list.appendChild(listItem); // Append the list item to the list
});

// Append the list to the div
displayDiv.appendChild(list);
