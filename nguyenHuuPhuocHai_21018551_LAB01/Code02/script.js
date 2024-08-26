function mathBMI(mass, height){
    return mass / (height * height);
}

function comperaBMI(){
    const markMass = parseFloat(document.getElementById('markMass').value);
    const markHeight = parseFloat(document.getElementById('markHeight').value);
    const johnMass = parseFloat(document.getElementById('johnMass').value);
    const johnHeight = parseFloat(document.getElementById('johnHeight').value);

    const markBMI = mathBMI(markMass, markHeight);
    const johnBMI = mathBMI(johnMass, johnHeight);

    let resultMessage = '';
    if(markBMI > johnBMI){
        resultMessage = `Mark's BMI (${markBMI.toFixed(2)}) is higher than John's BMI (${johnBMI.toFixed(2)})!`;
    } else if(markBMI < johnBMI){
        resultMessage = `John's BMI (${johnBMI.toFixed(2)}) is higher than Mark's BMI (${markBMI.toFixed(2)})!`;
    } else {
        resultMessage = `Mark's BMI (${markBMI.toFixed(2)}) is equal to John's BMI (${johnBMI.toFixed(2)})!`;
    }

    document.getElementById('result').innerText = resultMessage;

    console.log(resultMessage);
    
}