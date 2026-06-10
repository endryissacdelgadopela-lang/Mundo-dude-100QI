let coins =
Number(localStorage.getItem("coins")) || 100;

let diamonds =
Number(localStorage.getItem("diamonds")) || 100;

updateUI();

function saveData(){

localStorage.setItem(
"coins",
coins
);

localStorage.setItem(
"diamonds",
diamonds
);

}

function updateUI(){

document.getElementById(
"coins"
).innerText = coins;

document.getElementById(
"diamonds"
).innerText = diamonds;

const moneyHud =
document.getElementById("moneyHud");

if(moneyHud){

moneyHud.innerText =
"💰 " + coins;

}

const diamondHud =
document.getElementById("diamondHud");

if(diamondHud){

diamondHud.innerText =
"💎 " + diamonds;

}

}

function addCoins(){

coins += 100;

saveData();

updateUI();

}

function addDiamonds(){

diamonds += 100;

saveData();

updateUI();

}

function playGame(){

document.getElementById(
"menu"
).style.display="none";

document.getElementById(
"hud"
).style.display="block";

document.getElementById(
"joystick"
).style.display="block";

}

function toggleGameMenu(){

const menu =
document.getElementById(
"gameMenu"
);

if(menu.style.display==="block"){

menu.style.display="none";

}else{

menu.style.display="block";

}

}

function openShop(){

alert(
"Tienda próximamente"
);

}

function openCharacter(){

alert(
"Personalización próximamente"
);

}

function openHouse(){

alert(
"Casas próximamente"
);

}
