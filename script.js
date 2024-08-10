
const clearResult =() => {
    document.calculatorForm.result.value = '0';
}

const deleteLastCharacter = () => {
    let currentValue = document.calculatorForm.result.value;
    document.calculatorForm.result.value = currentValue.slice(0, -1);
}

const checkValue = (userDigit)=>{
    let currentValue = document.calculatorForm.result.value;
    if (currentValue === '0') {
        document.calculatorForm.result.value = userDigit;
    } else {
        document.calculatorForm.result.value += userDigit;
    }
}

const operators = (op) =>{
    let currentValue = document.calculatorForm.result.value;
    if (currentValue !== '' && !isNaN(currentValue[currentValue.length - 1])) {
        document.calculatorForm.result.value += op;
    }
}
const appendDecimal = () =>{
    let currentValue = document.calculatorForm.result.value;
    if (!currentValue.includes('.')) {
        document.calculatorForm.result.value += '.';
    }
}
const calculateResult = () =>{
    let calcResult = document.calculatorForm.result.value;

    try {
        let result = eval(calcResult)
        if (isNaN(result) || !isFinite(result)) {
            throw new Error('Invalid calcResult')
        }
        document.calculatorForm.result.value = result.toString()

    } catch (error) {
        console.error('Error:', error.message)
        alert('Por favor, verifique sua entrada.')
    }
}
