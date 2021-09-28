// Il computer deve generare 16 numeri casuali tra 1 e 100.
// In seguito deve chiedere all’utente di inserire un numero alla volta,
// sempre compreso tra 1 e 100.

// Se il numero è presente nella lista dei numeri generati, la partita termina,
// altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o
// raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il
// numero di volte che l’utente ha inserito un numero consentito.

// BONUS: all’inizio il software richiede anche una difficoltà all’utente che
// cambia il range di numeri casuali.
// Con difficoltà 0=> tra 1 e 100, con difficoltà 1 => tra 1 e 80, con difficoltà
//2=> tra 1 e 50

// const range = setInitialDifficultyLevel()
// const arrayCasualsNumbers = number_of_bombs(range)

// campoMinato(range, arrayCasualsNumbers)

// All functions

function campoMinato(range, arrayCasualsNumbers) {
  console.log(arrayCasualsNumbers)

  const userInputNumbers = []

  while (arrayCasualsNumbers.includes(userNumber) === false) {
    var userNumber = parseInt(prompt("inserisci un numero tra 1 e " + range))

    while (userInputNumbers.includes(userNumber) === false) {
      userInputNumbers.push(userNumber)
    }
    console.log(userInputNumbers)

    if (arrayCasualsNumbers.includes(userNumber)) {
      alert("numero trovato " + userNumber)
      // alert("il tuo punteggio è " + (counter - 1))
      alert("il tuo punteggio è " + (userInputNumbers.length - 1))
    }
  }
}

function number_of_bombs(range) {
  // initial empty array for storing bombs
  const arrayCasualsNumbers = []

  while (arrayCasualsNumbers.length < 16) {
    const casualNumber = Math.floor(Math.random() * range + 1)
    if (arrayCasualsNumbers.includes(casualNumber) === false) {
      arrayCasualsNumbers.push(casualNumber)
    }
  }
  return arrayCasualsNumbers
}

function setInitialDifficultyLevel() {
  // initial flag
  let valid = false

  while (!valid) {
    var difficulty = parseInt(prompt("inserisci un numero compreso tra 0 e 2"))
    if (difficulty === 1 || difficulty === 0 || difficulty === 2) {
      valid = true
    }
  }
  console.log(difficulty)

  var range

  if (difficulty === 0) {
    range = 100
  } else if (difficulty === 1) {
    range = 80
  } else if (difficulty === 2) {
    range = 50
  }

  return range
}

function grid(range) {
  const container = document.createElement("div.container")
  // creating rows on range
  for (let index = 1; index <= range / 10; index++) {
    const row = document.createElement("div")
    row.classList.add("row")

    document.body.querySelector(".container").appendChild(row)
    // and creating column here (always ten column)
    for (let j = 0; j < 10; j++) {
      const box = document.createElement("div")
      box.classList.add("box")

      row.appendChild(box)
    }
  }
  document.body.appendChild(container)
}

grid(100)

// chissà perchè non funziona
// function test() {
//   const allRows = document.querySelectorAll(".rows")
//   console.log(allRows)
// }

const allDivBoxes = Array.from(document.querySelectorAll(".box"))
const bombs_to_distribute = shuffleBombs(bombs_array(100))
console.log(bombs_to_distribute)

for (let index = 0; index < bombs_to_distribute.length; index++) {
  let element = bombs_to_distribute[index]
  console.log(element)

  for (let j = 0; j < allDivBoxes.length; j++) {
    let currentBox = allDivBoxes[j]
    currentBox.dataset.safeOrNot = element
  }
}

function bombs_array(range) {
  const allBombs = []
  for (let index = 0; index < 16; index++) {
    allBombs.push("bomb")
  }
  const safeDiv = []
  for (let index = 0; index < range - 16; index++) {
    safeDiv.push("safe")
  }
  const finalArray = allBombs.concat(safeDiv)
  // console.log(finalArray)

  return finalArray
}

bombs_array(100)

function shuffleBombs(array) {
  let counter = array.length

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter)

    // Decrease counter by 1
    counter--

    // And swap the last element with it
    let temp = array[counter]
    array[counter] = array[index]
    array[index] = temp
  }

  return array
}
