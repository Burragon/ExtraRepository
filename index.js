function calc() {
  const CurrentTotal = document.getElementById("total");
  let NewTotal = Number(CurrentTotal.value);
  const Result = NewTotal + 1;
  CurrentTotal.textContent = Result.toLocaleString(undefined,{style:"currency",currency:"USD"};
}
