// Value currently being input/result of hitting "="
var display = ""
// Short term storage tied to the "Ans" button for recalls
var ans = ""
// Store previous input to prevent inserting duplicate decimals and operators
var prevInput = ""

$(document).ready(function() {
  $('.button').click(function() {
    // Get the button being clicked and store its value
    var input = $(this).attr('value')
    // console.log("Input is: " + input)

    // Parse to see if it is a value or operator to be added to the string,
    // or if we need to perform a function.
    // We can use the inverse of isNaN to check for numeric inputs.
    // If input isn't numeric, prevent duplicates by checking previous input
    if(!isNaN(input) || ((input === "+" || input === "-" || input === "*" || input === "/" || input === "%" || input === ".") && (input !== prevInput))) {
      display += input
      prevInput = input
    } else if (input === "AC") {
      // Clear everything
      display = ""
      prevInput = "AC"
    } else if (input === "CE") {
      // Remove latest entry...
      display = display.slice(0, -1)
      prevInput = "CE"
    } else if (input === "Ans") {
      // Use the 'Ans' key to recall the last calculated value and tack onto the current input
      display += ans.toString()
      prevInput = "Ans"
    } else if (input === "=") {
      // Leverage the eval() function to do the math for us
      // Slice can only be done on arrays or strings. Convert to string, too.
      // This was causing a problem where CE didn't work after "=" because
      // at that point display was a number, not a string because of eval()...
      display = eval(display).toString()
      ans = display
      prevInput = "="
    }
    
    $('#result').val(display)
  })

  // Toggle telp text using .toggle instead of the old
  // .hasClass/.addClass/.removeClass combo when I was just starting out
  $('#helper').click(function() {
    $('.hints').toggle(350)
  })
})
