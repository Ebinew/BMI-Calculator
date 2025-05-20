const form = document.querySelector("form");
//the following usecase would give empty outputs
//const height = parseInt(document.querySelector("#height").value)

form.addEventListener("submit", function(e) {
  e.preventDefault()

  const height = parseInt(document.querySelector("#height").value)
  const weight = parseInt(document.querySelector("#weight").value)
  const result = document.querySelector("#results")

  if (height === "" || height < 0 || isNaN(height)) {
    result.innerHTML = `please enter a valid number`;
  } else
  if (weight === "" || weight < 0 || isNaN(weight)) {
    result.innerHTML = `please enter a valid number`;
  } else {
    const bmi = (weight/ (height**2/10000)).toFixed(2);
    //show the result
    result.innerHTML = `<span>${bmi}</span>`;
  }
})