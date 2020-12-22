//var answer = document.getElementById("answer")
var tellerAnswer = ["yes", "no", "maybe", "ask again later", "answer unclear"]

function fortune(){
  let randomAnswer = tellerAnswer[Math.floor(Math.random()*tellerAnswer.length)]
  document.getElementById("answer").innerHTML = randomAnswer
}

//fortune()

//function myReset(){
  //window.location.reload()
//}

//myReset()