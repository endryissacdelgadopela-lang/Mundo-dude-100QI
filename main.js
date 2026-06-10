let coins = Number(localStorage.getItem("coins")) || 100;
let diamonds = Number(localStorage.getItem("diamonds")) || 100;
let health = 100;

function saveGame(){
 localStorage.setItem("coins",coins);
 localStorage.setItem("diamonds",diamonds);
}

function updateUI(){

 const coinsText=document.getElementById("coins");
 const diamondsText=document.getElementById("diamonds");

 if(coinsText) coinsText.innerText=coins;
 if(diamondsText) diamondsText.innerText=diamonds;

 const hudCoins=document.getElementById("hudCoins");
 const hudDiamonds=document.getElementById("hudDiamonds");

 if(hudCoins) hudCoins.innerText="💰 "+coins;
 if(hudDiamonds) hudDiamonds.innerText="💎 "+diamonds;

}

updateUI();

document.getElementById("playBtn").onclick=()=>{

 document.getElementById("mainMenu").style.display="none";
 document.getElementById("hud").style.display="block";

};

document.getElementById("shopBtn").onclick=()=>{
 document.getElementById("shopPanel").style.display="block";
};

document.getElementById("closeShop").onclick=()=>{
 document.getElementById("shopPanel").style.display="none";
};

document.getElementById("houseBtn").onclick=()=>{
 document.getElementById("housePanel").style.display="block";
};

document.getElementById("closeHouse").onclick=()=>{
 document.getElementById("housePanel").style.display="none";
};

document.getElementById("menuOpen").onclick=()=>{
 document.getElementById("gameMenu").style.display="block";
};

document.getElementById("closeMenu").onclick=()=>{
 document.getElementById("gameMenu").style.display="none";
};

document.getElementById("loginCreator").onclick=()=>{

 const pass=document.getElementById("creatorPassword").value;

 if(pass==="Coins"){

  document.getElementById("creatorLogin").style.display="none";
  document.getElementById("creatorPanel").style.display="block";

 }else{

  alert("Contraseña incorrecta");

 }

};

document.getElementById("addCoinsBtn").onclick=()=>{

 coins+=1000;
 saveGame();
 updateUI();

};

document.getElementById("addDiamondsBtn").onclick=()=>{

 diamonds+=1000;
 saveGame();
 updateUI();

};

const scene = new THREE.Scene();

scene.background = new THREE.Color(0x87ceeb);

const camera = new THREE.PerspectiveCamera(
75,
window.innerWidth/window.innerHeight,
0.1,
1000
);

const renderer = new THREE.WebGLRenderer({
canvas:document.getElementById("gameCanvas"),
antialias:true
});

renderer.setSize(
window.innerWidth,
window.innerHeight
);

const light = new THREE.DirectionalLight(
0xffffff,
1
);

light.position.set(10,20,10);

scene.add(light);

scene.add(
new THREE.AmbientLight(
0xffffff,
0.7
)
);

const ground = new THREE.Mesh(

new THREE.PlaneGeometry(
500,
500
),

new THREE.MeshStandardMaterial({
color:0x44aa44
})

);

ground.rotation.x=-Math.PI/2;

scene.add(ground);

/* PERSONAJE CON TU IMAGEN */

const texture =
new THREE.TextureLoader().load(
"player.png"
);

const player =
new THREE.Sprite(

new THREE.SpriteMaterial({
map:texture
})

);

player.scale.set(
5,
6,
1
);

player.position.set(
0,
3,
0
);

scene.add(player);

camera.position.set(
0,
8,
10
);

let up=false;
let down=false;
let left=false;
let right=false;

document.getElementById("upBtn").ontouchstart=()=>up=true;
document.getElementById("upBtn").ontouchend=()=>up=false;

document.getElementById("downBtn").ontouchstart=()=>down=true;
document.getElementById("downBtn").ontouchend=()=>down=false;

document.getElementById("leftBtn").ontouchstart=()=>left=true;
document.getElementById("leftBtn").ontouchend=()=>left=false;

document.getElementById("rightBtn").ontouchstart=()=>right=true;
document.getElementById("rightBtn").ontouchend=()=>right=false;

function animate(){

 requestAnimationFrame(animate);

 if(up) player.position.z-=0.15;
 if(down) player.position.z+=0.15;
 if(left) player.position.x-=0.15;
 if(right) player.position.x+=0.15;

 camera.position.x=player.position.x;
 camera.position.z=player.position.z+10;

 camera.lookAt(
  player.position
 );

 renderer.render(
  scene,
  camera
 );

}

animate();
