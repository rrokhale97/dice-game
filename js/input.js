const btn = document.querySelector(".submit");

btn.addEventListener("click", function () {
  var player1 = document.getElementById("input1").value;
  var player2 = document.getElementById("input2").value;
  var totalScore = document.getElementById("score").value;

  if (player1 === "" || player2 === "" || totalScore < 10 || totalScore > 100) {
    console.log("name is missing");
  } else {
    sessionStorage.setItem("player1", player1);
    sessionStorage.setItem("player2", player2);
    sessionStorage.setItem("totalScore", totalScore);
    location.href = "./game.html";
  }
});
