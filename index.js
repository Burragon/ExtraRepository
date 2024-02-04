function calc() {
  warn("a")
  const CurrentTotal = document.getElementById("total");
  let NewTotal = Number(CurrentTotal.value);
  const Result = NewTotal
  CurrentTotal.textContent = Result
}
