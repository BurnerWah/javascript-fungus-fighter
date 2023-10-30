// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
// let fungusHP = 100;
let fungusHP = 100
let playerAP = 100

function onReady() {
  console.log("Ready to go!")

  // Make sure you check the index.html file!
  // There are lots of buttons and things ready for you to hook into here!

  // 🧠 Remember
  // - Handle events that ->
  // - Updates state which is ->
  // - Rendered to the DOM
}

function attack(apCost, damage) {
  playerAP -= apCost
  fungusHP -= damage
  if (playerAP < 0) {
    playerAP = 0
  }
  if (fungusHP < 0) {
    fungusHP = 0
  }
  console.log(`Player AP: ${playerAP}, Fungus HP: ${fungusHP}`)
}

function arcaneScepter() {
  attack(12, 14)
}

function entangle() {
  attack(23, 9)
}

function dragonBlade() {
  attack(38, 47)
}

function starFire() {
  attack(33, 25)
}

onReady()
