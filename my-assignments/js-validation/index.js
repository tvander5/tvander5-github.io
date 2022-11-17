const containers = document.querySelectorAll(".container")

// Helper functions from stack overflow
function isAlphabetic(str) {
  if (typeof str != "string") return false
  return /^[a-zA-Z]+$/.test(str);
}

function isNumeric(str) {
  return /^\d+$/.test(str);
}

function isAlphanumeric(str) {
  return /^[a-z0-9]+$/gi.test(str);
}

function isDate(str) {
  if (typeof str != "string") return false 
  return /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/.test(str)
}

function isPhoneNumber(str) {
  if (typeof str != "string") return false 
  return /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(str)
}
// End helper

// Get the errors from desired form
function getFormErrors(inputArray) {
  let inputErrors = [];

  // Check to make sure each input has the
  // required data to submit
  inputArray.forEach((input, index) => {
    // Trim the string to get rid of extra
    // whitespace
    let text = String(input.value).trim()
    let minLength = input.getAttribute("minlength")
    if (minLength == null) {
      minLength = -1
    } else {
      minLength = Number(minLength)
    }
    let classList = input.classList

    let errCount = inputErrors.length
    // Log errors
    console.log(classList, text.length, minLength)
    if (classList.contains("required") && text.length <= 0) {
      // Required field was left blank
      inputErrors.push([index, "Required fields must have a value that is not empty or whitespace."])
      input.placeholder = "required.."
    } else if (classList.contains("required") || classList.contains("required_size") || text.length > 0) {
      if (classList.contains("numeric") && !isNumeric(text)) {
        // Field is not numeric
        inputErrors.push([index,"Numeric field must be a series of numbers."])
        input.placeholder = "123.."
      } else if (classList.contains("alphabetic") && !isAlphabetic(text)) {
        // Field is not alphabetic
        inputErrors.push([index,"Alphabetic fields must be a series of alphabetic characters."])
        input.placeholder = "abc.."
      } else if (classList.contains("username") && !isAlphanumeric(text)){
        // Username is not alphanumeric
        inputErrors.push([index,"Username fields must contain only alphanumeric characters."])
        input.placeholder = "abc123.."
      } else if (classList.contains("username") && (text.length < 8 || text.length < minLength)){
        // Username is not at least 8 characters
        inputErrors.push([index,"Username fields must contain at least 8 characters."])
        input.placeholder = "x >= 8"
      } else if (classList.contains("required_size") && text.length < minLength) {
        // Field does not have enough characters
        inputErrors.push([index,"Required_size field lengths must exactly match the minlength attribute of that field."])
        input.placeholder = "x >= " + String(minLength)
      } else if (classList.contains("date") && !isDate(text)){
        // Date does not have the correct format
        inputErrors.push([index,"Date fields must match the format of XX/XX/XXXX."])
        input.placeholder = "xx/xx/xxxx"
      } else if (classList.contains("phone") && !isPhoneNumber(text)){
        // Phone number does not have the correct format
        inputErrors.push([index,"Phone fields must match the format of XXX-XXX-XXXX."])
        input.placeholder = "xxx-xxx-xxxx"
      }
    }

    // New errors were added
    if (errCount !== inputErrors.length) {
      // Empty the field so the placeholder will show
      input.value = ""
    }
  })

  return inputErrors
}

// Go through each container element (if there aren't
// any, nothing will happen)
containers.forEach(element => {
  const form = element.querySelector("form")
  const errorDiv = element.querySelector(".errors")

  // Check if the container has a form
  if (form) {
    let inputs = form.querySelectorAll("input")
    let otherInputs = [] // Everything but the submit button
    let submit

    // Locate submit button
    inputs.forEach(input => {
      if (input.type == "submit") {
        submit = input
      } else {
        otherInputs.push(input)
      }
    });

    // If there is a submit button
    if (submit) {
      const onClick = (event)=>{
        // Check for errors on submit
        let inputErrors = getFormErrors(otherInputs);

        // If no errors
        if (inputErrors.length > 0) {
          if (errorDiv) {

            // Create an error message
            let errMsg = ""
            inputErrors.forEach(err => {
              errMsg +="<li>"+err[1]+"</li>"
            });

            // Display the error message
            errorDiv.innerHTML = "<ul>"+errMsg+"</ul>"

            // Don't allow refresh if their are errors
            event.preventDefault()
          }
        }
      }


      // Add submit listener
      submit.addEventListener("click", onClick)
    }
  }
});