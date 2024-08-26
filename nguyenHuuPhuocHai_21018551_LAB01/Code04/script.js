function tip(){
    const bill = parseFloat(document.getElementById('bill').value);
    const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
    const total = tip + bill;

    const resultMessage = `The bill was ${bill}, the tip was ${tip.toFixed(2)} and the total value ${total.toFixed(2)}.`;
    document.getElementById(`result`).innerText = resultMessage;
    console.log(resultMessage);
}