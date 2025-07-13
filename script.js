const grades = {
    "A+": 13,
    "A": 12,
    "A-": 11,
    "B+": 10,
    "B": 9,
    "B-": 8,
    "C+": 7,
    "C": 6,
    "C-": 5,
    "D+": 4,
    "D": 3,
    "D-": 2,
    "F": 1
};

function outcomeCalc(total) {
    const totalPointsDiv = document.getElementById('totalPoints');
    const outcomeDiv = document.getElementById('outcome');
    const resultDiv = document.getElementById('result');
    
    totalPointsDiv.textContent = `Total points: ${total}`;
    
    // greater than or equal to 21
    if (total >= 21) {
        outcomeDiv.textContent = "HARD SELL!";
        outcomeDiv.className = "outcome hard-sell";
        resultDiv.className = "result show hard-sell";
    }
    // greater than 18 but less than 21
    else if (18 < total && total < 21) {
        outcomeDiv.textContent = "GRAY AREA! (Sell at your own risk)";
        outcomeDiv.className = "outcome gray-area";
        resultDiv.className = "result show gray-area";
    }
    // less than 18
    else if (total < 18) {
        outcomeDiv.textContent = "SEND THE HOUSE!";
        outcomeDiv.className = "outcome send-house";
        resultDiv.className = "result show send-house";
    }
}

function gradeCalc(gradeDict, grade1, grade2, grade3) {
    // convert grade inputs to upper
    grade1 = grade1.toUpperCase();
    grade2 = grade2.toUpperCase();
    grade3 = grade3.toUpperCase();
    
    // extract grade number equivalents from input_dict
    const number1 = gradeDict[grade1] || 0;
    const number2 = grade2 ? gradeDict[grade2] || 0 : 0;
    const number3 = grade3 ? gradeDict[grade3] || 0 : 0;
    
    // sum numbers
    const gradeTotal = number1 + number2 + number3;
    
    // calculate outcome
    outcomeCalc(gradeTotal);
}

document.getElementById('gradeForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const grade1 = document.getElementById('grade1').value;
    const grade2 = document.getElementById('grade2').value;
    const grade3 = document.getElementById('grade3').value;
    
    if (!grade1) {
        alert('Please select at least one grade value!');
        return;
    }
    
    gradeCalc(grades, grade1, grade2, grade3);
});

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('gradeForm').reset();
    document.getElementById('result').className = "result";
    document.getElementById('outcome').textContent = "";
    document.getElementById('totalPoints').textContent = "";
});

window.onload = function() {
    document.getElementById('gradeForm').reset();
};
