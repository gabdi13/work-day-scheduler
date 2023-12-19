// Displaying the current day in header
var today = dayjs();
$("#currentDay").text(today.format("D MMM YYYY"));

console.log(today)

function saveText(textAreaId) {
    // Get the text from the specified text area
    var text = document.getElementById(textAreaId).value;

    // Use localStorage to save the text
    localStorage.setItem(textAreaId, text);
  }

  // Function to load and display text from local storage
  function loadText() {
    // Loop through each text area
    for (var i = 1; i <= 24; i++) {
      // Create the localStorage key for the current text area
      var key = 'timeBlock' + i;

      // Get the text from localStorage
      var savedText = localStorage.getItem(key);

      // If there is saved text, display it in the corresponding text area
      if (savedText !== null) {
        document.getElementById(key).value = savedText;
      }
    }
  }

  // Call the loadText function to load and display text on page load
  loadText();