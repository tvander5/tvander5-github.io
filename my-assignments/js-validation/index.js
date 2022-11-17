const containers = document.querySelectorAll(".container")

// Helper functions from stack overflow
function isAlphabetic(str) {
  if (typeof str != "string") return false
  return /^[a-zA-Z]+$/.test(str);
}

function isNumeric(str) {
  if (typeof str != "string") return false 
  return /^\d+$/.test(str);
}

function isAlphanumeric(str) {
  if (typeof str != "string") return false 
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
    let text = String(input.value)
    let minLength = input.minLength
    let classList = input.classList

    let errCount = inputErrors.length
    // Log errors
    if (classList.contains("required") && text.length <= 0) {
      // Required field was left blank
      inputErrors.push([index, "Required fields must have a value that is not empty or whitespace."])
      input.placeholder = "required.."
    } else if (classList.contains("required") || text.length > 0) {
      text = text.trim()
      if (text.length < minLength) {
        // Field does not have enough characters
        inputErrors.push([index,"Required_size field lengths must exactly match the minlength attribute of that field."])
        input.placeholder = "x >= " + String(minLength)
      } else if (classList.contains("alphabetic") && !isAlphabetic(text)) {
        // Field is not alphabetic
        inputErrors.push([index,"Alphabetic fields must be a series of alphabetic characters."])
        input.placeholder = "abc.."
      } else if (classList.contains("numeric") && !isNumeric(text)) {
        // Field is not numeric
        inputErrors.push([index,"Numeric field must be a series of numbers."])
        input.placeholder = "123.."
      } else if (classList.contains("username") && text.length < 8){
        // Username is not at least 8 characters
        inputErrors.push([index,"Username fields must contain at least 8 characters."])
        input.placeholder = "x >= 8"
      } else if (classList.contains("username") && !isAlphanumeric(text)){
        // Username is not alphanumeric
        inputErrors.push([index,"Username fields must contain only alphanumeric characters."])
        input.placeholder = "abc123.."
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
      // This is just to make it obvious which input
      // is throwing an error (mainly for debugging)
      // purposes.
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
            // Log each error
            let err = inputErrors[0]

            // Get the first field that had an error
            let errName = String(err[0]+1)

            // Create an error message
            // The spans are just for css
            let errMsg = "<span class=\"errorItem\">[ FIELD "+errName+" ]</span> "
            errMsg += err[1]

            // Check if their are more errors
            if (inputErrors.length > 1) {
              errMsg += " <span>[ and " + (inputErrors.length-1)
              if (inputErrors.length > 2) {
                errMsg += " more errors ]</span>"
              } else {
                errMsg += " more error ]</span>"
              }
            }

            // Display the error message
            errorDiv.innerHTML = "<div>"+errMsg+"</div>"

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