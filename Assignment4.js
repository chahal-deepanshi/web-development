const main = document.getElementById("form1");
const name = document.getElementById("name");
const address = document.getElementById("address");
const course = document.getElementById("course");
const b1 = document.getElementById("btn1");
const card = document.getElementById("card");
const n = document.getElementById("n");
const a = document.getElementById("a");
const c = document.getElementById("c");

b1.onclick = function () {
  const gender = document.querySelector('input[name="gender"]:checked');

  // Optional: check if gender is selected
  if (!gender) {
    alert("Please select a gender!");
    return;
  }

  main.style.display = "none";
  alert("Form submitted successfully!");
  n.innerHTML = name.value;
  a.innerHTML = address.value;
  c.innerHTML = course.value;
  card.style.display = "block";
};