const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

function checkWinner(aveDolphins, aveKoalas){
    if( aveDolphins >= 2 * aveKoalas){
        console.log(`Dolphins win (${aveDolphins} vs ${aveKoalas})`);
        document.getElementById('result').innerText = `Dolphins win (${aveDolphins} vs ${aveKoalas})`;
    }else if(aveKoalas >= 2 * aveDolphins){
        console.log(`Koalas win (${aveKoalas} vs ${aveDolphins})`);
        document.getElementById('result').innerText = `Koalas win (${aveKoalas} vs ${aveDolphins})`;
    }else{
        console.log('No team wins!');
                document.getElementById('result').innerText = 'No team wins!';
    }
}

function resultTeam(){

    const dolphinsAvg1 = calcAverage(44, 23, 71);
    const koalasAvg1 = calcAverage(65, 54, 49);
    console.log(`Data 1: Dolphins Average: ${dolphinsAvg1}, Koalas Average: ${koalasAvg1}`);
    checkWinner(dolphinsAvg1, koalasAvg1);

    const dolphinsAvg2 = calcAverage(85, 54, 41);
    const koalasAvg2 = calcAverage(23, 34, 27);
    console.log(`Data 2: Dolphins Average: ${dolphinsAvg2}, Koalas Average: ${koalasAvg2}`);
    checkWinner(dolphinsAvg2, koalasAvg2);


}