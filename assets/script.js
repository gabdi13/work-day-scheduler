// Displaying the current day in header
var today = dayjs();
$("#currentDay").text(today.format("D MMM YYYY"));

console.log(today)


  // Function to save text to local storage using jQuery
  function saveText(textAreaId) {
    // Get the text from the specified text area using jQuery
    var text = $('#' + textAreaId).val();

    // Use localStorage to save the text
    localStorage.setItem(textAreaId, text);
  }

  // Function to load and display text from local storage using jQuery
  function loadText() {
    // Loop through each text area
    for (var i = 1; i <= 24; i++) {
      // Create the localStorage key for the current text area
      var key = 'timeBlock' + i;

      // Get the text from localStorage using jQuery
      var savedText = localStorage.getItem(key);

      // If there is saved text, display it in the corresponding text area
      if (savedText !== null) {
        $('#' + key).val(savedText);
      }
    }
  }

  // Call the loadText function to load and display text on page load
  loadText();