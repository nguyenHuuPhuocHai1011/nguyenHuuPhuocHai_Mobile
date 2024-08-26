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

    const markHigherBMI = markBMI > johnBMI;

    document.getElementById('result').innerText = 
        `Mark's BMI = ${markBMI.toFixed(2)}, John's BMI = ${johnBMI.toFixed(2)}. Is Mark's BMI higher? ${markHigherBMI}`;

    console.log(`Mark's BMI = ${markBMI.toFixed(2)}, John's BMI = ${johnBMI.toFixed(2)}. Is Mark's BMI higher? ${markHigherBMI}`);
}