function scorecalculator () {
 
    const stundentGrades = {
 Math:85,
English:78,
Science:89,
History:90,
Art:95,
};

let totalScore = 0;
let subjectCount = 0;


for(let subject in stundentGrades){
 totalScore += stundentGrades[subject];
subjectCount++;
}

const averageGrade = totalScore / subjectCount;

const resultDiv = document.getElementById('p');
resultDiv.innerHTML = ` The average grade is <span style="color: green;">${averageGrade.toFixed(2)}</span>.`;





}

let  click = document.getElementById("button")
click.addEventListener('click', () => {
    scorecalculator();
})


