const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const message = document.querySelector(".message")
const closedCookie = document.querySelector("#closedCookie")
const btnAnotherCookie = document.querySelector("#btnAnotherCookie")

let messages = [
  `Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.`,
  `Pare de procurar eternamente; a felicidade está bem ao seu lado`,
  `Você passará por algumas experiências maravilhosas`,
  `Você e sua mulher terão uma vida feliz`,
  `Seus princípios valem mais para você do que dinheiro ou sucesso`,
]
let messagesLength = messages.length

closedCookie.addEventListener("click", toggleCard)
btnAnotherCookie.addEventListener("click", toggleCard)

function toggleCard() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")

  message.querySelector("p").innerText = messages[getRandom()]
}

function getRandom() {
  return Math.round(Math.random() * (messagesLength - 1))
}
