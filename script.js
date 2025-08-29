const heartBtn = document.querySelectorAll(".heart");
const HeartCountField = document.getElementById("heart-count-field");
for (btn of heartBtn) {
  btn.addEventListener("click", function () {
    let count = parseInt(HeartCountField.innerText);
    count++;
    HeartCountField.innerText = count;
  });
}

// copy section functionilites

const copyBtn = document.querySelectorAll(".copy-btn");
const copyCountField = document.getElementById("copy-count-field");

for (btn of copyBtn) {
  btn.addEventListener("click", function () {
    let copyNumber = this.getAttribute("copy-number");
    navigator.clipboard.writeText(copyNumber);
    alert("copied:" + copyNumber);
    let count = parseInt(copyCountField.innerText);
    count++;
    copyCountField.innerText = count;
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
    alert(" calling Police 999...");
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
      "<span>" + "পুলিশ<br/>999" + "</span>" + "<span>" + onlyDate + "</span>";

    callHistory.appendChild(li);

    clearHistory.addEventListener("click", function () {
      callHistory.innerHTML = "";
    });
  } else alert("you have not enough coin to call.you need minimum 20 coins");
});

document.getElementById("Ambulance").addEventListener("click", function () {
  if (callerCoin.innerText > 0) {
    alert(" calling Ambulance 1994-999999...");
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
      "অ্যাম্বুলেন্স<br/>1994-999999" +
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
      alert(" calling Women & Child Helpline 109...");
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
        "নারী ও শিশু সহায়তা<br/>109" +
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
      alert(" calling Anti Corruption 106...");
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
        "<span>" + "দুদক<br/>106" + "</span>" + "<span>" + onlyDate + "</span>";

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
      alert(" calling Electricity Outage 16216...");
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
        "বিদ্যুৎ বিভ্রাট<br/>16216" +
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
    alert(" calling Brac 16445...");
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
      "ব্র্যাক<br/>16445" +
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
  .getElementById("Bangladesh-Railway")
  .addEventListener("click", function () {
    if (callerCoin.innerText > 0) {
      alert(" calling Bangladesh Railway 163...");
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
        "বাংলাদেশ রেলওয়ে<br/>163" +
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
    alert(" calling Fire Service 999...");
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
      "ফায়ার সার্ভিস<br/>999" +
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
