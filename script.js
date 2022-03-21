function calculateFinance() {
    let scan = document.getElementById('form01')

    let income = Number(scan.elements[0].value);
    let rent = Number(scan.elements[1].value);
    let credit = Number(scan.elements[2].value);
    let vitals = Number(scan.elements[3].value);
    let spendingRatio = Number(scan.elements[4].value);

    let outcomes = Number(Math.round(rent + credit + vitals));
    let moneyLeft = Number(Math.round(income - outcomes));

    let spend = Number(Math.round(moneyLeft * spendingRatio / 100));
    let invest = Number(Math.round((moneyLeft - spend) * 0.4));
    let save = Number(Math.round((moneyLeft - spend) * 0.6));

    document.getElementById('income').innerHTML = '$' + income;
    document.getElementById('rent').innerHTML = '$' + rent;
    document.getElementById('credit').innerHTML = '$' + credit;
    document.getElementById('vitals').innerHTML = '$' + vitals;
    document.getElementById('total').innerHTML = '$' + outcomes;
    document.getElementById('money-left').innerHTML = '$' + moneyLeft;
    document.getElementById('spending').innerHTML = '$' + spend;
    document.getElementById('percent-spend').innerHTML = spendingRatio + '%';
    document.getElementById('invest').innerHTML = '$' + invest;
    document.getElementById('percent-invest').innerHTML = Math.round((100 - spendingRatio) * 0.4) + '%';
    document.getElementById('saves').innerHTML = '$' + save;
    document.getElementById('percent-save').innerHTML = Math.round((100 - spendingRatio) * 0.6) + '%';

}
