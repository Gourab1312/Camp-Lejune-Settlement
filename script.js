document.getElementById("question1YesBtn").onclick = function () {
  document.getElementById("question1").style.display = "none";
  document.getElementById("question2").style.display = "block";
};

document.getElementById("question2NoBtn").onclick = function () {
  document.getElementById("question2").style.display = "none";
  document.getElementById("question3").style.display = "block";
};

document.getElementById("question3NoBtn").onclick = function () {

    document.getElementById("question3").style.display = "none";
    document.getElementById("reviewing-answers").style.display = "block";

  setTimeout(()=>{
    document.getElementById("reviewing-answers").style.display = "none";
    document.getElementById("matching").style.display = "block";
  },2000);

  const thirdSetTimeout = setTimeout(()=>{
    document.getElementById("matching").style.display = "none";
    document.getElementById("confirming").style.display = "block";
  },2000);

//   thirdSetTimeout();
//   clearTimeout(thirdSetTimeout);

  const fourthSetTimeout = setTimeout(()=>{
    document.getElementById("confirming").style.display = "none";
    document.getElementById("call").style.display = "block";
  },2000);

  fourthSetTimeout();
  clearTimeout(fourthSetTimeout);
};
