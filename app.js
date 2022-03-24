alert(`Welcome to 'Guess the Number'. I will think of a number from 1 to 10, and you will try to guess the correct number. The one I thought about. Just for clarification.`)

var human = 0

var comp = 0

do {
    var cnumber = (Math.floor(Math.random() * 10) + 1)

    var pnumber = (prompt(`Great! What number am I thinking of?`))

    if (cnumber == pnumber) {
        human++
        alert(`Very good. You guessed ${pnumber}, and I guessed ${cnumber}. Total so far is Human: ${human} and Computer: ${comp}.`)
    } else {
        comp++
        alert(`Not good. You guessed ${pnumber}, and I guessed ${cnumber}. Total so far is Human: ${human} and Computer: ${comp}.`)
    }
    var ask = prompt(`Do you want to continue? Say 'y' for Yes, and 'n' for no.`)
} while (ask == "y")

if (comp > human) {
    alert(`I won! The final score is Human: ${human}; Computer: ${comp}`)
} else {
    alert(`You won! The final score is Human: ${human}; Computer: ${comp}`)
}