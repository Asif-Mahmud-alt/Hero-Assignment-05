const heartBtn = document.querySelectorAll(".heart");
const HeartCountField = document.getElementById("heart-count-field");
for (btn of heartBtn) {
  btn.addEventListener("click", function () {
    console.log("btn clicked");
    let count = parseInt(HeartCountField.innerText);
    count++;
    HeartCountField.innerText = count;
  });
}
