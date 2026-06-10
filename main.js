let coins =
Number(localStorage.getItem("coins")) || 100;

let diamonds =
Number(localStorage.getItem("diamonds")) || 100;

let health =
Number(localStorage.getItem("health")) || 100;

function saveGame(){

localStorage.setItem(
"coins",
coins
);

localStorage.setItem(
"diamonds",
diamonds
);

localStorage.setItem(
"health",
health
);

}

function updateUI(){

document.getElementById(
"coins"
).innerText = coins;

document.getElementById(
"diamonds"
).innerText = diamonds;

document.getElementById(
"hudCoins"
).innerText =
"💰 " + coins;

document.getElementById(
"hudDiamonds"
).innerText =
"💎 " + diamonds;

document.getElementById(
"playerHealth"
).innerText =
"❤️ " + health;

}

updateUI();

const playBtn =
document.getElementById(
"playBtn"
);

playBtn.onclick = () => {

document.getElementById(
"mainMenu"
).style.display =
"none";

document.getElementById(
"hud"
).style.display =
"block";

};

const menuOpen =
document.getElementById(
"menuOpen"
);

menuOpen.onclick = () => {

document.getElementById(
"gameMenu"
).style.display =
"block";

};

document.getElementById(
"closeMenu"
).onclick = () => {

document.getElementById(
"gameMenu"
).style.display =
"none";

};

document.getElementById(
"shopBtn"
).onclick = () => {

document.getElementById(
"shopPanel"
).style.display =
"block";

};

document.getElementById(
"closeShop"
).onclick = () => {

document.getElementById(
"shopPanel"
).style.display =
"none";

};

document.getElementById(
"houseBtn"
).onclick = () => {

document.getElementById(
"housePanel"
).style.display =
"block";

};

document.getElementById(
"closeHouse"
).onclick = () => {

document.getElementById(
"housePanel"
).style.display =
"none";

};

document.getElementById(
"settingsBtn"
).onclick = () => {

document.getElementById(
"creatorLogin"
).style.display =
"block";

};

document.getElementById(
"closeCreator"
).onclick = () => {

document.getElementById(
"creatorLogin"
).style.display =
"none";

};

document.getElementById(
"loginCreator"
).onclick = () => {

const pass =
document.getElementById(
"creatorPassword"
).value;

if(pass === "Coins"){

document.getElementById(
"creatorLogin"
).style.display =
"none";

document.getElementById(
"creatorPanel"
).style.display =
"block";

}else{

alert(
"Contraseña incorrecta"
);

}

};

document.getElementById(
"closeCreatorPanel"
).onclick = () => {

document.getElementById(
"creatorPanel"
).style.display =
"none";

};

document.getElementById(
"addCoinsBtn"
).onclick = () => {

coins += 1000;

saveGame();

updateUI();

};

document.getElementById(
"addDiamondsBtn"
).onclick = () => {

diamonds += 1000;

saveGame();

updateUI();

};

document.getElementById(
"healBtn"
).onclick = () => {

health = 100;

saveGame();

updateUI();

};

document.getElementById(
"unlockBtn"
).onclick = () => {

alert(
"Todo desbloqueado"
);

};

document.getElementById(
"customBtn"
).onclick = () => {

alert(
"Personalización próximamente"
);

};

const canvas =
document.getElementById(
"gameCanvas"
);

const scene =
new THREE.Scene();

scene.background =
new THREE.Color(
0x87ceeb
);

const camera =
new THREE.PerspectiveCamera(
75,
window.innerWidth /
window.innerHeight,
0.1,
1000
);

const renderer =
new THREE.WebGLRenderer({
canvas:canvas,
antialias:true
});

renderer.setSize(
window.innerWidth,
window.innerHeight
);

const light =
new THREE.DirectionalLight(
0xffffff,
1
);

light.position.set(
5,
10,
5
);

scene.add(light);

const ambient =
new THREE.AmbientLight(
0xffffff,
0.7
);

scene.add(ambient);

const ground =
new THREE.Mesh(

new THREE.PlaneGeometry(
500,
500
),

new THREE.MeshStandardMaterial({

color:0x3cb043

})

);

ground.rotation.x =
-Math.PI/2;

scene.add(
ground
);

const player =
new THREE.Mesh(

new THREE.CapsuleGeometry(
0.5,
1,
4,
8
),

new THREE.MeshStandardMaterial({

color:0x0066ff

})

);

player.position.y = 1;

scene.add(
player
);

camera.position.set(
0,
5,
8
);

let moveUp=false;
let moveDown=false;
let moveLeft=false;
let moveRight=false;

document.getElementById(
"upBtn"
).ontouchstart=()=>{
moveUp=true;
};

document.getElementById(
"upBtn"
).ontouchend=()=>{
moveUp=false;
};

document.getElementById(
"downBtn"
).ontouchstart=()=>{
moveDown=true;
};

document.getElementById(
"downBtn"
).ontouchend=()=>{
moveDown=false;
};

document.getElementById(
"leftBtn"
).ontouchstart=()=>{
moveLeft=true;
};

document.getElementById(
"leftBtn"
).ontouchend=()=>{
moveLeft=false;
};

document.getElementById(
"rightBtn"
).ontouchstart=()=>{
moveRight=true;
};

document.getElementById(
"rightBtn"
).ontouchend=()=>{
moveRight=false;
};

function animate(){

requestAnimationFrame(
animate
);

if(moveUp)
player.position.z -= 0.12;

if(moveDown)
player.position.z += 0.12;

if(moveLeft)
player.position.x -= 0.12;

if(moveRight)
player.position.x += 0.12;

camera.position.x =
player.position.x;

camera.position.z =
player.position.z + 8;

camera.lookAt(
player.position
);

renderer.render(
scene,
camera
);

}

animate();

window.addEventListener(
"resize",
()=>{

camera.aspect=
window.innerWidth/
window.innerHeight;

camera.updateProjectionMatrix();

renderer.setSize(
window.innerWidth,
window.innerHeight
);

}
);
