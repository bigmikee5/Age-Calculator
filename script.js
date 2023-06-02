const userInput = document.getElementById("date");
userInput.max = new Date().toISOString().split("T")[0];

const result = document.getElementById("result");

function calculateAge() {
  let birthDate = new Date(userInput.value);

  let birthDay = birthDate.getDate();
  let birthMonth = birthDate.getMonth() + 1;
  let birthYear = birthDate.getFullYear();

  let today = new Date();

  let currentDay = today.getDate();
  let currentMonth = today.getMonth() + 1;
  let currentYear = today.getFullYear();

  let ageDay, ageMonth, ageYear;

  ageYear = currentYear - birthYear;

  if (currentMonth >= birthMonth) {
    ageMonth = currentMonth - birthMonth;
  } else {
    ageYear--;
    ageMonth = 12 + currentMonth - birthMonth;
  }

  if (currentDay >= birthDay) {
    ageDay = currentDay - birthDay;
  } else {
    ageMonth--;
    ageDay = getDaysInMonth(birthYear, birthMonth) + currentDay - birthDay;
  }
  if (ageMonth < 0) {
    ageMonth = 11;
    ageYear--;
  }
  result.innerHTML = `You are <span>${ageYear}</span> years, <span>${ageMonth}</span> months and <span>${ageDay}</span> days old`;
}

function getDaysInMonth(year, month) {
  return new Date(year, month, 0).getDate();
}
