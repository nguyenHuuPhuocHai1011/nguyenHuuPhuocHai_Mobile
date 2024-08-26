function mathAve(score1, score2, score3){
    return (score1 + score2 + score3)/3;
}

function compareTeam(){
    
    let dolphinsScores = [96, 108, 89];
    let koalasScores = [88, 91, 110];

    const dolphinsAve = mathAve(...dolphinsScores);
    const koalaAve = mathAve(...koalasScores);

    console.log(`Data 1: Dolphins Average: ${dolphinsAve.toFixed(2)}, Koala Average: ${koalaAve.toFixed(2)}`)
    findWinner(dolphinsAve, koalaAve);

    let dolphinsBonus1 = [97, 112, 101];
    let koalasBonus1 = [109, 95, 123];

    const dolphinsBonusAve1 = mathAve(...dolphinsBonus1);
    const koalasBonusAve1 = mathAve(...koalasBonus1);

    console.log(`Data 2:  Dolphins Average: ${dolphinsBonusAve1.toFixed(2)}, Koala Average: ${koalasBonusAve1.toFixed(2)}`)
    findWinner(dolphinsBonusAve1, koalasBonusAve1);

    let dolphinsBonus2 = [97, 112, 101];
    let koalasBonus2 = [109, 95, 106];

    const dolphinsBonusAve2 = mathAve(...dolphinsBonus2);
    const koalasBonusAve2 = mathAve(...koalasBonus2);

    console.log(`Data 2:  Dolphins Average: ${dolphinsBonusAve2.toFixed(2)}, Koala Average: ${koalasBonusAve2.toFixed(2)}`)
    findWinner(dolphinsBonusAve2, koalasBonusAve2);

}

function findWinner(dolphinsAve, koalaAve){
    const min = 100;

    if(dolphinsAve > koalaAve && dolphinsAve >= min){
        console.log(`Dolphins win with a average score is ${dolphinsAve}!`);
    }else if(koalaAve > dolphinsAve && koalaAve >= min){
        console.log(`Koalas win with a average score is ${koalaAve}!`)
    }else{
        console.log(`No team wins!`)
    }

}