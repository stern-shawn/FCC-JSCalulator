// Vars. Use result to store results of caluclations, display to hold the value
// of inputs as they're being formed, and ans if the user is using the
// temporary store functionality of the Ans button. isClear tells us whether to
// append values to a growing input, or to start from scratch...
var ans = "";
var display = "";
var isClear = false;

$(document).ready(function() {
  $('.button').click(function() {
    // Get the button being clicked and store its value
    var input = $(this).attr('value');
    console.log("Input is: " + input);

    // Parse to see if it is a value or operator to be added to the string,
    // or if we need to perform a function.
    // We can use the inverse of isNaN to check for numeric inputs
    if(!isNaN(input) || input === "+" || input === "-" || input === "*" || input === "/" || input === "%" || input === ".") {
      // TODO: Prevent redundant insertions of multiple decimals...
      if (isClear === true) {
        // Reset the screen value
        isClear = false;
        display = input;
        $('#result').val(display);
      } else {
        // Append to the screen instead
        display += input;
        $('#result').val(display);
      }
    } else if (input === "AC") {
      // Clear everything
      isClear = true;
      display = "";
      result = "";
      $('#result').val(display);
    } else if (input === "CE") {
      // For some reason these jokers treat CE as a delete key...
      // If isClear is true, we don't really need to do anything, let's just have a check here to save time
      if (!isClear) {
        // Remove latest entry...
        display = display.slice(0, -1);
        $('#result').val(display);
      }
    } else if (input === "Ans") {
      // Use the 'Ans' key to recall the last calculated value and tack onto the current input
      display += ans.toString();
      $('#result').val(display);
      isClear = false;
    } else if (input === "=") {
      // Leverage the eval() function to do the math for us
      display = eval(display);
      console.log(display);
      // Keep decimal values relatively short
      // if (display.indexOf('.') > 0) {
      //   console.log("Decimal point at... " + display.indexOf('.'));
      // }
      $('#result').val(display);
      isClear = true;
      ans = display;
    }
  });

  // Toggle telp text using .toggle instead of .hasClass/.addClass/.removeClass
  $('#helper').click(function() {
    $('.hints').toggle(350);
  });
});
