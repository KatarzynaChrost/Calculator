const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')

numberButtons.forEach(numberButton => {
  numberButton.addEventListener("click", () => {
    if (numberButton.innerText == "." && currentOperandTextElement.innerText.indexOf(".") != -1) return

    if (numberButton.innerText == "0" && currentOperandTextElement.innerText == "0") return

    if (currentOperandTextElement.innerText == "0" && numberButton.innerText !== ".") {
      currentOperandTextElement.innerText = ""
    }

    currentOperandTextElement.innerHTML += numberButton.innerText
  })
});

operationButtons.forEach(operationButton => {
  operationButton.addEventListener("click", () => {
    if (!currentOperandTextElement.innerText) {
      previousOperandTextElement.innerText = previousOperandTextElement.innerText.substring(0, previousOperandTextElement.innerText.length-1) + operationButton.innerText
    }

    previousOperandTextElement.innerText = eval(previousOperandTextElement.innerText + currentOperandTextElement.innerText) + operationButton.innerText;
    currentOperandTextElement.innerText = ""
  })
});

allClearButton.addEventListener("click", () => {
  previousOperandTextElement.innerText = "";
  currentOperandTextElement.innerText = ""
})

deleteButton.addEventListener("click", () => {
  currentOperandTextElement.innerText = currentOperandTextElement.innerText.substring(0, currentOperandTextElement.innerText.length-1)
})

equalsButton.addEventListener("click", () => {
  if (!previousOperandTextElement.innerText) return

  currentOperandTextElement.innerText = eval(previousOperandTextElement.innerText + currentOperandTextElement.innerText);
  previousOperandTextElement.innerText = ""
})