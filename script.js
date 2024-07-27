
let b=document.querySelectorAll(".box");
let over=document.querySelector(".over");
let n=document.querySelector(".newgame");
let w=document.querySelector(".w");

let to=true;
let t1=true;

let r=document.querySelector(".res");
function resetfun(){
    location.reload();
}
n.addEventListener("click",newgamefun);
function newgamefun(){
    location.reload();
}
for (const box of b) {
    box.addEventListener("click",
        function fun(){
            console.log("button pressed");

            if(to){
                box.innerText="O";
                to=false;
                t1=true;
            }
            else{
                box.innerText="X";
                to=true;
                t1=false;
            }
            box.disabled=true;
            checkwinner();
        }
    )

}
const winmatrix=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8]
]
const checkwinner=()=>{
    for (let windexes of winmatrix ) {
    let i1=b[windexes[0]].innerText;
    let i2=b[windexes[1]].innerText;
    let i3=b[windexes[2]].innerText;
    if(i1!=""&&i2!=""&&i3!=""){
        if(i1==i2&&i2==i3){console.log("Winner is player of ",i1);
            over.style.display="block";
            n.style.display="block";
            w.innerText+=i1;
            b.forEach(button => {
                button.disabled = true;
              });
        }
    }
    }
};