const donateBtns = document.querySelectorAll('.donate-btn')

//handle main balance
const updateBalance = (amountBalance) => {
  const navbarBalance = parseFloat(document.getElementById('balance').innerText)
  const remainingBalance = navbarBalance - amountBalance;
  document.getElementById('balance').innerText = remainingBalance.toFixed(2)
}

// the work of history button 
const addToDonationHistory = (amountBalance, cardTitle) => {
  const historyContainer = document.getElementById('history-container')
  const historyEntry = document.createElement('div')
  historyEntry.classList.add('border', 'p-4', 'rounded-lg', 'shadow-sm')
  historyEntry.innerHTML = `
  <h3 class='font-semibold'>Title: ${cardTitle}</h3>
  <p>Donation Amount: ${amountBalance}</p>
  <p>${new Date().toLocaleString()}</p>
  `;
  historyContainer.appendChild(historyEntry)
  
}

// handle donate 
const handleDonate = (button) => {
  const cartElement = button.closest('.card')
  const amountBalance = parseFloat(cartElement.querySelector('.input').value)
  // validation here 
  const navbarBalance = parseFloat(document.getElementById('balance').innerText)
  if(isNaN(amountBalance) || amountBalance <= 0 || navbarBalance < amountBalance){
    alert('Please give valid input')
  }
  // call update function 
  updateBalance(amountBalance)
  // all card balance 
  const cardBalance = parseFloat(cartElement.querySelector('.card-balance').innerText)
  const newCardBalance = cardBalance + amountBalance
  cartElement.querySelector('.card-balance').innerText = newCardBalance.toFixed(2)

  // this is for addToDonationHistory function 
  const cardTitle = cartElement.querySelector('.card-title').innerText
  addToDonationHistory(amountBalance, cardTitle)

  cartElement.querySelector('.input').value = ''
  document.getElementById('show-modal-btn').showModal()

}

// handle button 
donateBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    handleDonate(e.target)
  })
})

// functionality of history btn 
document.getElementById('show-history-btn').addEventListener('click', ()=> {
  document.getElementById('show-donation-btn').classList.remove('bg-[#B4F461]')
  document.getElementById('show-history-btn').classList.add('bg-[#B4F461]')
  document.getElementById('donation-container').classList.add('hidden')
  document.getElementById('history-container').classList.remove('hidden')
})

//functionality of donation btn
document.getElementById('show-donation-btn').addEventListener('click', () => {
  document.getElementById('show-donation-btn').classList.add('bg-[#B4F461]')
  document.getElementById('show-history-btn').classList.remove('bg-[#B4F461]')
  document.getElementById('donation-container').classList.remove('hidden')
  document.getElementById('history-container').classList.add('hidden')
})