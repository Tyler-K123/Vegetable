let output1 = document.getElementById("output1");
let output2 = document.getElementById("output2");
let output3 = document.getElementById("output3");
let output4 = document.getElementById("output4");
let answer1 = document.getElementById("color");
let answer2 = document.getElementById("tomato");
let answer3 = document.getElementById("seeds");
let answer4 = document.getElementById("carrot");

document.getElementById("button").addEventListener("click", checkAnswer);

function checkAnswer() {
  let color = document.getElementById("color").value.toLowerCase();
  let tomato = document.getElementById("tomato").value.toLowerCase();
  let seeds = document.getElementById("seeds").value.toLowerCase();
  let carrot = document.getElementById("carrot").value.toLowerCase();

  if (color === "green") {
    value1 = 1;
    output1.innerHTML = `correct`;
    answer1.className = "lime";
  } else {
    value1 = 0;
    output1.innerHTML = `wrong`;
    answer1.className = "red";
  }

  if (tomato === "fruit") {
    value2 = 1;
    output2.innerHTML = `correct`;
    answer2.className = "lime";
  } else {
    value2 = 0;
    output2.innerHTML = `wrong`;
    answer2.className = "red";
  }

  if (seeds === "no") {
    value3 = 1;
    output3.innerHTML = `correct`;
    answer3.className = "lime";
  } else {
    value3 = 0;
    output3.innerHTML = `wrong`;
    answer3.className = "red";
  }

  if (
    carrot === "85" ||
    carrot === "86" ||
    carrot === "87" ||
    carrot === "88" ||
    carrot === "89" ||
    carrot === "90"
  ) {
    value4 = 1;
    output4.innerHTML = `correct`;
    answer4.className = "lime";
  } else {
    value4 = 0;
    output4.innerHTML = `wrong`;
    answer4.className = "red";
  }

  let marks = value1 + value2 + value3 + value4;
  let score = ((value1 + value2 + value3 + value4) * 100) / 4;

  if (marks === 0) {
    document.getElementById("marks").innerHTML = `${marks}/4 (${score}%) `;
  } else if (marks === 1) {
    document.getElementById("marks").innerHTML = `${marks}/4 (${score}%) `;
  } else if (marks === 2) {
    document.getElementById("marks").innerHTML = `${marks}/4 (${score}%) `;
  } else if (marks === 3) {
    document.getElementById("marks").innerHTML = `${marks}/4 (${score}%) `;
  } else if (marks === 4) {
    document.getElementById("marks").innerHTML = `${marks}/4 (${score}%) `;
  }
}
