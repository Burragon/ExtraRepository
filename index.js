function calc() {
  const CurrentTotal = document.getElementById("total");
  let NewTotal = Number(CurrentTotal.value);
  console.log(NewTotal)
  const Result = (NewTotal + 1)
  CurrentTotal.textContent = Result.toString();
}
