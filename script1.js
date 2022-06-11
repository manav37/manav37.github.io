console.log("Welcome to Tic Tac Toe")
let music = new Audio("music.mp3") /*background music*/
let audioTurn = new Audio("ting.mp3") /*music when turn changes(X TO O or O to X)*/
let gameover = new Audio("win.mp3") /*music when game is over*/
let turn = "X"/*initially turn is of X*/
let isgameover = false;
let c=0;
// Function to change the turn
const changeTurn = ()=>{ 
    return turn === "X"? "0": "X"
}

// Function to check for a win
const checkWin = ()=>{
    let boxtext = document.getElementsByClassName('boxtext'); /*get all boxtext*/
    let wins = [  /*all possibilities of winning*/
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    for(let i=0;i<8;i++){
        let arr=wins[i];
        if((boxtext[arr[0]].innerText===boxtext[arr[1]].innerText) && (boxtext[arr[1]].innerText===boxtext[arr[2]].innerText) && boxtext[arr[0]].innerText!==""){
            document.querySelector('.info').innerText = boxtext[arr[0]].innerText + " Won"
            isgameover = true
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
            if(arr[0]===0 && arr[1]===1 && arr[2]===2){
                document.querySelector(".strike").style.width="100%"
                document.querySelector(".strike").style.height="4px"
                document.querySelector(".strike").style.top="16%";

                gameover.play();
                break;
               

            }

            else if(arr[0]===3 && arr[1]===4 && arr[2]===5){
                document.querySelector(".strike").style.width="100%"
                document.querySelector(".strike").style.height="4px"
                document.querySelector(".strike").style.top="49%";

                gameover.play();
                break;

                
            }
            else if(arr[0]===6 && arr[1]===7 && arr[2]===8){
                document.querySelector(".strike").style.width="100%"
                document.querySelector(".strike").style.height="4px"
                document.querySelector(".strike").style.top="82%";
                gameover.play();
                break;
                
            }
            else if(arr[0]===0 && arr[1]===3 && arr[2]===6){
                document.querySelector(".strike").style.height="100%"
                document.querySelector(".strike").style.width="4px"
                document.querySelector(".strike").style.left="16%"
                gameover.play();
                break;
                
            }
            else if(arr[0]===1 && arr[1]===4 && arr[2]===7){
                console.log(c);
                document.querySelector(".strike").style.height="100%"
                document.querySelector(".strike").style.width="4px"
                document.querySelector(".strike").style.left="49.5%"
                gameover.play();
                break;
                
            }
            else if(arr[0]===2 && arr[1]===5 && arr[2]===8){
                document.querySelector(".strike").style.height="100%"
                document.querySelector(".strike").style.width="4px"
                document.querySelector(".strike").style.left="83%";
                gameover.play();
                break;
            }
            else if(arr[0]===0 && arr[1]===4 && arr[2]===8){
                document.querySelector(".strike").style.width="90%"
                document.querySelector(".strike").style.height="4px"
                document.querySelector(".strike").style.top="50%";
                document.querySelector(".strike").style.left="5%";
                document.querySelector(".strike").style.transform="skewY(45deg)";
                gameover.play();
                break;
               
            }
            else if(arr[0]===2 && arr[1]===4 && arr[2]===6){

                document.querySelector(".strike").style.width="90%"
                document.querySelector(".strike").style.height="4px"
                document.querySelector(".strike").style.top="50%";
                document.querySelector(".strike").style.left="5%";
                document.querySelector(".strike").style.transform="skewY(-45deg)";
                gameover.play();
                break;
                
            }
        }
    }
    if(isgameover){
        
        return;
    }
}

// Game Logic
// music.play()
let boxes = document.getElementsByClassName("box");  /*we r adding click listener to each box*/
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext'); /*to get the span element whose content we have to change*/
    element.addEventListener('click', ()=>{ /*we have to apply event listener on div not on span element bcoz boxtext is empty so there is no span element right now span is visible when we press and X or 0 appears, so element.eventListener hai not boxtext.eventListener*/
        if(boxtext.innerText === ''){ /*innerText returns the text content of the element, if it is empty means we have to add turn(X OR 0)*/ 
            boxtext.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();

            if (!isgameover){
                document.getElementsByClassName("info")[0].innerText  = "Turn for " + turn; /*info class contains whose turn it is*/
            }
            else{
                
                return;
            }

        }
    })
    if(isgameover){
        
        return;
    }
})




// Add onclick listener to reset button
reset.addEventListener('click', ()=>{
    let boxtexts = document.querySelectorAll('.boxtext'); /*on clicking reset we want content of all boxtext(X AND 0) to become empty*/
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    });
    turn = "X"; /*turn gets reset to initial value(X)*/
    isgameover = false /*game will start again*/
    
    document.getElementsByClassName("info")[0].innerText  = "Turn for " + turn; /*Turn for X will be displayed again*/
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px" /*image will disappear again*/
    document.querySelector('.strike').style.height="0";
    document.querySelector('.strike').style.width="0";
})

