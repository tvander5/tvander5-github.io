const getInputValue = (name) => {
    return document.getElementById(name).value
}
let result = document.getElementById("result")
document.getElementById("submit-btn").addEventListener("click", () => {
    let num1 = Number(getInputValue("number1"))
    let num2 = Number(getInputValue("number2"))

    let operator = getInputValue("operator")
    if (operator == "+") {
        result.innerText = (num1 + num2)
    } else if (operator == "-") {
        result.innerText = (num1 - num2)
    } else if (operator == "/") {
        if (num2 != 0) {
            result.innerText = (num1 / num2)
        } else {
            result.innerText = "Cannot divide '" + String(num1) + "'' by zero."
        }
    } else if (operator == "x" || operator == "*") {
        result.innerText = (num1 * num2)
    } else if (operator == "%") {
        result.innerText = (num1 % num2)
    } else {
        result.innerText = "Invalid operator '" + operator + "' Ex. (+, -, /, x, %)."
    }
})