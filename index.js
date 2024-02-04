function calc() {
  const CurrentTotal = document.getElementById("total");
  let NewTotal = CurrentTotal.value;
  const Result = (NewTotal + 1)
  CurrentTotal.textContent = toString(Result);
}
