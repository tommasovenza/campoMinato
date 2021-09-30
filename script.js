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

const range = setInitialDifficultyLevel()

grid(range)

// chissà perchè non funziona
// function test() {
//   const allRows = document.querySelectorAll(".rows")
//   console.log(allRows)
// }

const allDivBoxes = Array.from(document.querySelectorAll(".box"))
const bombs_to_distribute = shuffleBombs(bombs_array(range))
console.log(bombs_to_distribute)

// non bisogna fare un ciclo dentro al ciclo, ma fare tutto allo stesso tempo

allDivBoxes.forEach((div, index) => {
  const classToPrint = bombs_to_distribute[index]
  // console.log(div, classToPrint)

  div.classList.add(classToPrint)
})

let counter = 0
// logica programma
allDivBoxes.forEach((box) => {
  box.addEventListener("click", () => {
    // controllo la classe assegnata al box
    if (box.classList.contains("bomb")) {
      box.classList.add("red")
      alert("sei saltato in aria")
      alert("il tuo punteggio è " + counter)
      reveal(allDivBoxes)
    } else {
      box.classList.add("green")
    }

    counter++
    // se la classe è safe posso andare avanti nel gioco --> coloro la casella di verde
    // se la classe è bomb sono saltato in aria --> coloro la casella di rosso e scrivo hai perso
  })
})

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

// bombs_array(100)

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

function loopingThroughBombs(array) {
  for (let index = 0; index < array.length; index++) {
    // let element = ""
    element = array[index]

    return element
  }
}

// loopingThroughBombs(bombs_to_distribute)

function reveal(array) {
  array.forEach((el) => {
    if (el.classList.contains("bomb")) {
      el.classList.add("red")
    } else {
      el.classList.add("green")
    }
  })
}

/* 

i miei errori e come l'avevo pensata, facendo un ciclo dentro ad un altro ciclo

*/

// for (let index = 0; index < bombs_to_distribute.length; index++) {
//   let element = bombs_to_distribute[index]
//   console.log(element)

//   for (let j = 0; j < allDivBoxes.length; j++) {
//     let currentBox = allDivBoxes[j]
//     currentBox.dataset.safeOrNot = element
//   }
// }

// for (let index = 0; index < allDivBoxes.length; index++) {
//   const currentDiv = allDivBoxes[index]
//   // currentDiv.classList.add(loopingThroughBombs(bombs_to_distribute))
//   currentDiv.dataset.test = loopingThroughBombs(bombs_to_distribute)
// }
