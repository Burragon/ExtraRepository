function calc() {
  alert("clicked")
  const CurrentTotal = document.getElementById("total");
  let NewTotal = Number(CurrentTotal.value);
  const Result = NewTotal
  CurrentTotal.textContent = Result
}
