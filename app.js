let jerk = {
  name: "Shkreli",
  health: 100,
  hits: 0,
}

let player = {
  money: 150,
  // status: {
  //   rich: <div img="https://www.loopevo.com/assets/images/if-you-want-to-be-rich-you-need-to-desire-it-a-lot.jpg"></div>,
  //   average: <img src="https://s1.ibtimes.com/sites/www.ibtimes.com/files/styles/lg/public/2016/06/21/gettyimages-83412771.jpg" />,
  //   poor: <img src="https://patrioticmillionaires.org/wp-content/uploads/shutterstock_1218328411-800x533.jpg" />
  // }
}

var suckerPunch = {
  name: "sucker-punch",
  modifier: "free hit",
  description: "Take that, jerk!"
}

var lawyer = {
  name: "lawer",
  modifier: -50,
  description: "Shkreli took you to court..."
}


function slap() {
  jerk.health--;
  player.money--;
  jerk.hits++;
  update();
}

function punch() {
  jerk.health -= 5;
  player.money -= 7;
  jerk.hits++;
  update();
}

function kick() {
  jerk.health -= 10;
  player.money -= 15;
  jerk.hits++;
  update();
}

let healthElem = document.getElementById("health")
let hitsElem = document.getElementById("hits")
let moneyElem = document.getElementById("money")

function update() {
  healthElem.textContent = jerk.health.toString();
  hitsElem.textContent = jerk.hits.toString();
  moneyElem.textContent = player.money.toString();
  if (player.money > 60)
    document.getElementById("player-pic").src = "https://www.loopevo.com/assets/images/if-you-want-to-be-rich-you-need-to-desire-it-a-lot.jpg";
  if (player.money <= 60)
    document.getElementById("player-pic").src = "https://s1.ibtimes.com/sites/www.ibtimes.com/files/styles/lg/public/2016/06/21/gettyimages-83412771.jpg";
  if (player.money <= 25)
    document.getElementById("player-pic").src = "https://patrioticmillionaires.org/wp-content/uploads/shutterstock_1218328411-800x533.jpg";
  if (player.money > 25 && player.money < 60)
    document.getElementById("player-pic").src = "https://s1.ibtimes.com/sites/www.ibtimes.com/files/styles/lg/public/2016/06/21/gettyimages-83412771.jpg";
}

function earnMoney() {
  player.money += 10;
  jerk.health += 8;
  update();
}