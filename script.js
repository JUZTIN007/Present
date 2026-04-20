/* PAGE NAV */
function start(){
    window.location.href = "story.html";
}

/* TEXT STORY */
let texts = [
`There was a time…

we stopped talking.

No warning.

Just silence.`,

`But somehow…

we found our way back.

Not the same…

better.`
];

let index = 0;

/* NEXT */
function next(){
    let el = document.getElementById("text");

    if(index < texts.length){
        typeText(el, texts[index]);
        index++;
    } else {
        window.location.href = "final.html";
    }
}

/* TYPING EFFECT */
function typeText(el, text, speed=40){
    let i=0;
    el.innerHTML="";
    let int=setInterval(()=>{
        el.innerHTML += text.charAt(i);
        i++;
        if(i>=text.length) clearInterval(int);
    },speed);
}

/* MUSIC */
document.addEventListener("click", ()=>{
    let m = document.getElementById("music");
    if(m) m.play();
},{once:true});

/* 3D SCENE */
let scene, camera, renderer, stars;

function init3D(){
    if(!document.getElementById("canvas-container")) return;

    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight,0.1,1000);
    renderer = new THREE.WebGLRenderer({alpha:true});
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById("canvas-container").appendChild(renderer.domElement);

    const geometry = new THREE.BufferGeometry();
    let vertices=[];

    for(let i=0;i<3000;i++){
        vertices.push((Math.random()-0.5)*2000);
        vertices.push((Math.random()-0.5)*2000);
        vertices.push((Math.random()-0.5)*2000);
    }

    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices,3));
    stars = new THREE.Points(geometry,new THREE.PointsMaterial({size:1}));

    scene.add(stars);

    camera.position.z = 5;

    animate();
}

function animate(){
    requestAnimationFrame(animate);

    stars.position.z += 1;
    if(stars.position.z > 500) stars.position.z = 0;

    renderer.render(scene, camera);
}

/* LOAD */
window.onload = ()=>{
    let el = document.getElementById("text");

    if(el){
        typeText(el, texts[0]);
        index = 1;
    }

    init3D();
};
