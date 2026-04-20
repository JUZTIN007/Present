function start(){
    window.location.href = "story.html";
}

/* TEXT FLOW */
let texts = [
`There was a time…

we stopped talking.

No reason.
Just silence.`,

`But somehow…

we came back.

Not the same…

better.`
];

let index = 0;

function next(){
    if(index < texts.length){
        document.getElementById("text").innerText = texts[index];
        index++;
    } else {
        window.location.href = "final.html";
    }
}

/* AUTO START MUSIC */
document.addEventListener("click",()=>{
    let m = document.getElementById("music");
    if(m) m.play();
},{once:true});
