let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector(".reset");

let turn =true;
const winpat=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
const resetgame=()=>{
    turn=true;
    enabbuttons();
    let bartext=document.querySelector(".bar");
    bartext.innerText="Tic Tac Toe";

}


boxes.forEach((box)=>{
    box.addEventListener("click",()=>
    {
        if(turn)
        {
            box.innerText="O";
            turn=false;
        }
        else{
            box.innerText="X";
            turn=true;
        }
        box.disabled=true;
        console.log("box was clicked")
        checkwin();
    });
});
// making function for disable buttons
const disbuttons=()=>{
    for( let box of boxes){
        box.disabled=true;
    }
} 
// function for enable boxes
const enabbuttons=()=>{
    for(box of boxes)
    {
        box.disabled=false;
        box.innerText="";
    }
}
const checkwin=()=>
{
    for(let pat of winpat )
    {
        // console.log(pat[0],pat[1],pat[2]);
        let pos1val=boxes[pat[0]].innerText;
        let pos2val=boxes[pat[1]].innerText;
        let pos3val=boxes[pat[2]].innerText;
        if(pos1val !=""&& pos2val !=""&& pos3val!="")
        {
            if(pos1val===pos2val&&pos2val===pos3val)
            {
                console.log("winner",pos1val);
               let wintext=document.querySelector(".bar");
               wintext.innerHTML= `Winner is ${pos1val} `;
               disbuttons();

            }
        }
    }
}
//reset
let reset=document.querySelector(".reset");
reset.addEventListener("click",resetgame);