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

// call alert secton

const callerCoin = document.getElementById("caller-coin");
const callHistory = document.getElementById("call-history");
const clearHistory = document.getElementById("clear-history");
document
  .getElementById("call-emergency")
  .addEventListener("click", function () {
    if (callerCoin.innerText > 0) {
      alert(" calling National Emergency 999...");
      let availablveCoin = parseInt(callerCoin.innerText) - 20;
      callerCoin.innerText = availablveCoin;

      const li = document.createElement("li");
      li.classList.add(
        "flex",
        "justify-between",
        "items-center",
        "bg-[#C0C0C0]",
        "p-2",
        "rounded-[10px]",
        "mt-2"
      );

      const now = new Date();
      const onlyDate = now.toLocaleTimeString();

      li.innerHTML =
        "<span>" +
        "জাতীয় জরুরি সেবা<br/>999" +
        "</span>" +
        "<span>" +
        onlyDate +
        "</span>";

      callHistory.appendChild(li);

      clearHistory.addEventListener("click", function () {
        callHistory.innerHTML = "";
      });
    } else alert("you have not enough coin to call.you need minimum 20 coins");
  });

document.getElementById("Police").addEventListener("click", function () {
  if (callerCoin.innerText > 0) {
    alert(" calling National Emergency 999...");
    let availablveCoin = parseInt(callerCoin.innerText) - 20;
    callerCoin.innerText = availablveCoin;

    const li = document.createElement("li");
    li.classList.add(
      "flex",
      "justify-between",
      "items-center",
      "bg-[#C0C0C0]",
      "p-2",
      "rounded-[10px]",
      "mt-2"
    );

    const now = new Date();
    const onlyDate = now.toLocaleTimeString();

    li.innerHTML =
      "<span>" +
      "জাতীয় জরুরি সেবা<br/>999" +
      "</span>" +
      "<span>" +
      onlyDate +
      "</span>";

    callHistory.appendChild(li);

    clearHistory.addEventListener("click", function () {
      callHistory.innerHTML = "";
    });
  } else alert("you have not enough coin to call.you need minimum 20 coins");
});

document.getElementById("Ambulance").addEventListener("click", function () {
  if (callerCoin.innerText > 0) {
    alert(" calling National Emergency 999...");
    let availablveCoin = parseInt(callerCoin.innerText) - 20;
    callerCoin.innerText = availablveCoin;

    const li = document.createElement("li");
    li.classList.add(
      "flex",
      "justify-between",
      "items-center",
      "bg-[#C0C0C0]",
      "p-2",
      "rounded-[10px]",
      "mt-2"
    );

    const now = new Date();
    const onlyDate = now.toLocaleTimeString();

    li.innerHTML =
      "<span>" +
      "জাতীয় জরুরি সেবা<br/>999" +
      "</span>" +
      "<span>" +
      onlyDate +
      "</span>";

    callHistory.appendChild(li);

    clearHistory.addEventListener("click", function () {
      callHistory.innerHTML = "";
    });
  } else alert("you have not enough coin to call.you need minimum 20 coins");
});

document
  .getElementById("Women-Child-Helpline")
  .addEventListener("click", function () {
    if (callerCoin.innerText > 0) {
      alert(" calling National Emergency 999...");
      let availablveCoin = parseInt(callerCoin.innerText) - 20;
      callerCoin.innerText = availablveCoin;

      const li = document.createElement("li");
      li.classList.add(
        "flex",
        "justify-between",
        "items-center",
        "bg-[#C0C0C0]",
        "p-2",
        "rounded-[10px]",
        "mt-2"
      );

      const now = new Date();
      const onlyDate = now.toLocaleTimeString();

      li.innerHTML =
        "<span>" +
        "জাতীয় জরুরি সেবা<br/>999" +
        "</span>" +
        "<span>" +
        onlyDate +
        "</span>";

      callHistory.appendChild(li);

      clearHistory.addEventListener("click", function () {
        callHistory.innerHTML = "";
      });
    } else alert("you have not enough coin to call.you need minimum 20 coins");
  });

document
  .getElementById("Anti-Corruption")
  .addEventListener("click", function () {
    if (callerCoin.innerText > 0) {
      alert(" calling National Emergency 999...");
      let availablveCoin = parseInt(callerCoin.innerText) - 20;
      callerCoin.innerText = availablveCoin;

      const li = document.createElement("li");
      li.classList.add(
        "flex",
        "justify-between",
        "items-center",
        "bg-[#C0C0C0]",
        "p-2",
        "rounded-[10px]",
        "mt-2"
      );

      const now = new Date();
      const onlyDate = now.toLocaleTimeString();

      li.innerHTML =
        "<span>" +
        "জাতীয় জরুরি সেবা<br/>999" +
        "</span>" +
        "<span>" +
        onlyDate +
        "</span>";

      callHistory.appendChild(li);

      clearHistory.addEventListener("click", function () {
        callHistory.innerHTML = "";
      });
    } else alert("you have not enough coin to call.you need minimum 20 coins");
  });

document
  .getElementById("Electricity-Outage")
  .addEventListener("click", function () {
    if (callerCoin.innerText > 0) {
      alert(" calling National Emergency 999...");
      let availablveCoin = parseInt(callerCoin.innerText) - 20;
      callerCoin.innerText = availablveCoin;

      const li = document.createElement("li");
      li.classList.add(
        "flex",
        "justify-between",
        "items-center",
        "bg-[#C0C0C0]",
        "p-2",
        "rounded-[10px]",
        "mt-2"
      );

      const now = new Date();
      const onlyDate = now.toLocaleTimeString();

      li.innerHTML =
        "<span>" +
        "জাতীয় জরুরি সেবা<br/>999" +
        "</span>" +
        "<span>" +
        onlyDate +
        "</span>";

      callHistory.appendChild(li);

      clearHistory.addEventListener("click", function () {
        callHistory.innerHTML = "";
      });
    } else alert("you have not enough coin to call.you need minimum 20 coins");
  });

document.getElementById("Brac").addEventListener("click", function () {
  if (callerCoin.innerText > 0) {
    alert(" calling National Emergency 999...");
    let availablveCoin = parseInt(callerCoin.innerText) - 20;
    callerCoin.innerText = availablveCoin;

    const li = document.createElement("li");
    li.classList.add(
      "flex",
      "justify-between",
      "items-center",
      "bg-[#C0C0C0]",
      "p-2",
      "rounded-[10px]",
      "mt-2"
    );

    const now = new Date();
    const onlyDate = now.toLocaleTimeString();

    li.innerHTML =
      "<span>" +
      "জাতীয় জরুরি সেবা<br/>999" +
      "</span>" +
      "<span>" +
      onlyDate +
      "</span>";

    callHistory.appendChild(li);

    clearHistory.addEventListener("click", function () {
      callHistory.innerHTML = "";
    });
  } else alert("you have not enough coin to call.you need minimum 20 coins");
});

document
  .getElementById("Bangladesh Railway")
  .addEventListener("click", function () {
    if (callerCoin.innerText > 0) {
      alert(" calling National Emergency 999...");
      let availablveCoin = parseInt(callerCoin.innerText) - 20;
      callerCoin.innerText = availablveCoin;

      const li = document.createElement("li");
      li.classList.add(
        "flex",
        "justify-between",
        "items-center",
        "bg-[#C0C0C0]",
        "p-2",
        "rounded-[10px]",
        "mt-2"
      );

      const now = new Date();
      const onlyDate = now.toLocaleTimeString();

      li.innerHTML =
        "<span>" +
        "জাতীয় জরুরি সেবা<br/>999" +
        "</span>" +
        "<span>" +
        onlyDate +
        "</span>";

      callHistory.appendChild(li);

      clearHistory.addEventListener("click", function () {
        callHistory.innerHTML = "";
      });
    } else alert("you have not enough coin to call.you need minimum 20 coins");
  });

document.getElementById("Fire-Service").addEventListener("click", function () {
  if (callerCoin.innerText > 0) {
    alert(" calling National Emergency 999...");
    let availablveCoin = parseInt(callerCoin.innerText) - 20;
    callerCoin.innerText = availablveCoin;

    const li = document.createElement("li");
    li.classList.add(
      "flex",
      "justify-between",
      "items-center",
      "bg-[#C0C0C0]",
      "p-2",
      "rounded-[10px]",
      "mt-2"
    );

    const now = new Date();
    const onlyDate = now.toLocaleTimeString();

    li.innerHTML =
      "<span>" +
      "জাতীয় জরুরি সেবা<br/>999" +
      "</span>" +
      "<span>" +
      onlyDate +
      "</span>";

    callHistory.appendChild(li);

    clearHistory.addEventListener("click", function () {
      callHistory.innerHTML = "";
    });
  } else alert("you have not enough coin to call.you need minimum 20 coins");
});
