
document.getElementById("calculate").addEventListener("click", function () {
  const dobInput = document.getElementById("dob").value;
  const dobDate = new Date(dobInput);
  const today = new Date();

  // Calculation
  const years = today.getFullYear() - dobDate.getFullYear();
  const months = today.getMonth() - dobDate.getMonth();

 
  if (today.getDate() < dobDate.getDate()) {
    months--;
  }

  const resultElement = document.getElementById("result");

  if (months < 0) {
    years--;
    months = 12 + months;
    resultElement.innerHTML = `Age: ${years} years and ${months} months`;
  } else {
    resultElement.innerHTML = `Age: ${years} years and ${months} months`;
  }
});