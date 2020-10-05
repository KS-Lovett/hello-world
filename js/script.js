class Calculator {
    constructor(prevText, currentText) {
        this.prevText = prevText
        this.currentText = currentText
    }

    clear() {
        this.currentOperand = ''
        this.prevOperand = ''
        this.operation = undefined
    }

    delete() {
        this.currentOperand = this.currentOperand.slice(0, -1)
    }

/*Adds my numbers to the box */
    appendNumber(number) {
        if (number === '.' && this.currentOperand.includes('.')) return
        this.currentOperand = this.currentOperand + number
    }

    chooseOperation(operation) {
        if (this.currentOperand === '') return
        if (this.prevOperand !== '') {
            this.compute()
        }
        this.operation = operation
        this.prevOperand = this.currentOperand
        this.currentOperand = ''
    }

// These are my operations
    compute() {
        let computation 
        const prev = parseFloat(this.prevOperand)
        const current = parseFloat(this.currentOperand)
        if (isNaN(prev) || isNaN(current)) return
        switch (this.operation) {
            case '+':
                computation = prev + current
                break

            case '-':
                computation = prev - current
                break

            case '*':
                computation = prev * current
                break

            case '/':
                computation = prev / current
                break

            case '^':
                computation = Math.pow(prev, current)
                break
            default:
                return
        }
        this.currentOperand = computation
        this.operation = undefined
        this.prevOperand = ''
    }

// This gets the number in the display
    getDisplayNumber(number) {
       const stringNumber = number.toString()
       const integerDigits = parseFloat(stringNumber.split('.')[0])
       const decimalDigits = stringNumber.split('.')[1]
       let integerDisplay
       if (isNaN(integerDigits)) {
           integerDisplay = ''
       } else {
           integerDisplay = integerDigits.toLocaleString('en', {
               maximumFractionDigits: 0 })
           }
           if (decimalDigits != null) {
            return `${integerDisplay}.${decimalDigits}`
           } else {
               return integerDisplay
           }
    }
// Updates the display after the operation
    updateDisplay() {
        this.currentText.innerText = this.getDisplayNumber(this.currentOperand)
        if (this.operation != null) {
        this.prevText.innerText = `${this.getDisplayNumber(this.prevOperand)} ${this.operation}` 
        } else {
            this.prevText.innerText = ''
        }
    }
}

const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const clearButton = document.querySelector('[data-clear]')
const prevText = document.querySelector('[data-previous-operand]')
const currentText = document.querySelector('[data-current-operand]')

const calculator = new Calculator(prevText, currentText)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})


operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})

equalsButton.addEventListener('click', button =>  {
    calculator.compute()
    calculator.updateDisplay()
})

clearButton.addEventListener('click', button =>  {
    calculator.clear()
    calculator.updateDisplay()
})

deleteButton.addEventListener('click', button =>  {
    calculator.clear()
    calculator.updateDisplay()
})
