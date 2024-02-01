 //js//

 console.log("wellcome to tictactoe");
 let music=new Audio('/assects/music.mp3');
 let audioTurn=new Audio('/assects/ting.mp3');
 let turn="x";
 let isgameover=false

//function to chanhe the trun:
const changeTurn= ()=>{
 return turn === "x"? "0":"x";
}

//fuction to check the win:
const checkwin=()=>{


     //win logic:
     let boxtext=document.getElementsByClassName('boxtext');
let wins=[
 [0,1,2],
 [3,4,5],
 [6,7,8],
 [0,3,6],
 [1,4,7],
 [2,5,8],
 [0,4,8],
 [2,4,6],
];
wins.forEach(e=>{
 if((boxtext[e[0]].innerText=== boxtext[e[1]].innerText) && 
 (boxtext[e[2]].innerText===boxtext[e[1]].innerText) && (boxtext[e
 [0]].innerText!=="")){


     e.forEach(index=>{
         document.getElementsByClassName('box')[index].style.backgroundColor="green"
     })

     document.querySelector(".info").innerText= boxtext[e[0]].
     innerText + "Won";
     isgameover=true;

     document.querySelector('.imgbox').getElementsByTagName('img')
     [0].style.width="80px"

 }
})

}
//game logic:

let boxes=document.getElementsByClassName('box');
Array.from(boxes).forEach(element=>{

let boxtext=element.querySelector('.boxtext')
element.addEventListener('click', ()=>{
 if(boxtext.innerText=== ""){
     boxtext.innerText=turn;
     turn=changeTurn();
     audioTurn.play();
     checkwin();
     if(!isgameover){
     document.getElementsByClassName('info')[0].
     innerText="Turn for:"+turn;

 }

 }
})
})

//reset button logic:

document.getElementById('reset').addEventListener("click",()=>{
 let boxtexts=document.querySelectorAll('.boxtext');
 Array.from(boxtexts).forEach(element=>{
     element.innerText=""
 });


 let boxes=document.querySelectorAll('.box');
 for (let i=0;i<boxes.length;i++)
 boxes[i].style.backgroundColor=""
 turn="x"
 isgameover=false
 document.getElementsByClassName('info')[0].
     innerText="Turn for:"+turn;
     document.querySelector('.imgbox').getElementsByTagName('img')
     [0].style.width="0px"
})
