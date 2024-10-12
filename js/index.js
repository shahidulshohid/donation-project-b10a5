// show the section by history button
document.getElementById("history-btn").addEventListener("click", function () {
  showSectionById("history-section");

  document.getElementById("history-btn").classList.add("bg-[#B4F461]");

  document.getElementById("donation-btn").classList.remove("bg-[#B4F461]");
});


// show the section by donation button
document.getElementById("donation-btn").addEventListener("click", function () {
  document.getElementById("donation-btn").classList.add("bg-[#B4F461]");

  document.getElementById("history-btn").classList.remove("bg-[#B4F461]");

  showSectionById("donation-section");
});


// main balance impliment 
const mainBalance = document.getElementById("main-balance").innerText;
let mainBalanceNumber = parseFloat(mainBalance);
// section button handler of noakhali==============================
document.getElementById("noakhali-btn").addEventListener("click", function () {
  const inputValue = getTextFieldValueById("noakhali-input");

  // inputValue field validation here
  if (
    isNaN(inputValue) ||
    inputValue <= 0 ||
    inputValue === "" ||
    mainBalanceNumber < inputValue
  ) {
    return alert("Invalid Donation Amount");
  } else {
    // madal validation
    document.getElementById("my_modal_1").showModal();
  }


  // noakhali-balance update
  const noakhaliBalance = document.getElementById("noakhali-balance").innerText;
  let noakhaliBalanceNumber = parseFloat(noakhaliBalance);
  noakhaliBalanceNumber += inputValue;
  document.getElementById("noakhali-balance").innerText = noakhaliBalanceNumber;

  // main balance update
  mainBalanceNumber -= inputValue;
  document.getElementById("main-balance").innerText = mainBalanceNumber;

  document.getElementById("noakhali-input").value = "";

  // history section update
  const historyContainer = document.getElementById("history-section");
  const heading = document.getElementById("heading1").innerText;
  const div = document.createElement("div");
  div.classList.add("border-2", "border-gray-100", "p-6", "rounded-xl", "my-5");
  div.innerHTML = `
    <h4 class='text-xl font-bold my-3'>${inputValue} Taka is ${heading}</h4>
    <p> Date :${new Date()} </p>
    `;
  historyContainer.appendChild(div);
});


// section button handler of feni =============================
document.getElementById("feni-btn").addEventListener("click", function () {
  const inputValue = getTextFieldValueById("feni-input");

  // inputValue field validation here
  if (
    isNaN(inputValue) ||
    inputValue <= 0 ||
    inputValue === "" ||
    mainBalanceNumber < inputValue
  ) {
    return alert("Invalid Donation Amount");
  } else {
    // madal validation
    document.getElementById("my_modal_1").showModal();
  }

  // noakhali-balance update
  const feniBalance = document.getElementById("feni-balance").innerText;
  let feniBalanceNumber = parseFloat(feniBalance);
  feniBalanceNumber += inputValue;
  document.getElementById("feni-balance").innerText = feniBalanceNumber;

  // main balance update
  mainBalanceNumber -= inputValue;
  document.getElementById("main-balance").innerText = mainBalanceNumber;

  document.getElementById("feni-input").value = "";

  // history section update
  const historyContainer = document.getElementById("history-section");
  const heading = document.getElementById("heading2").innerText;
  const div = document.createElement("div");
  div.classList.add("border-2", "border-gray-100", "p-6", "rounded-xl", "my-5");
  div.innerHTML = `
    <h4 class='text-xl font-bold my-3'>${inputValue} Taka is ${heading}</h4>
    <p> Date :${new Date()} </p>
    `;
  historyContainer.appendChild(div);
});


// section button handler of Quota Movement  =============================
document.getElementById("quota-btn").addEventListener("click", function () {
  const inputValue = getTextFieldValueById("quota-input");

  // inputValue field validation here
  if (
    isNaN(inputValue) ||
    inputValue <= 0 ||
    inputValue === "" ||
    mainBalanceNumber < inputValue
  ) {
    return alert("Invalid Donation Amount");
  } else {
    // madal validation
    document.getElementById("my_modal_1").showModal();
  }
  // noakhali-balance update
  const quotaBalance = document.getElementById("quota-balance").innerText;
  let quotaBalanceNumber = parseFloat(quotaBalance);
  quotaBalanceNumber += inputValue;
  document.getElementById("quota-balance").innerText = quotaBalanceNumber;

  // main balance update
  mainBalanceNumber -= inputValue;
  document.getElementById("main-balance").innerText = mainBalanceNumber;

  document.getElementById("quota-input").value = "";

  // history section update
  const historyContainer = document.getElementById("history-section");
  const heading = document.getElementById("heading3").innerText;
  const div = document.createElement("div");
  div.classList.add("border-2", "border-gray-100", "p-6", "rounded-xl", "my-5");
  div.innerHTML = `
    <h4 class='text-xl font-bold my-3'>${inputValue} Taka is ${heading}</h4>
    <p> Date :${new Date()} </p>
    `;
  historyContainer.appendChild(div);
});
