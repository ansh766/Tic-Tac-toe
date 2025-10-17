let parent = document.getElementById('board')

let winner = 
[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

const board_arr = new Array(9).fill('E')

let turn = 'O'

function checkwinner(){
       for(let i =0; i<winner.length; i++){
        if(board_arr[winner[i][0]]!='E'&&board_arr[winner[i][0]]==board_arr[winner[i][1]] && board_arr[winner[i][1]]==board_arr[winner[i][2]]){
          return 1;
        }
    }
    return 0
}
function clear(){
    for(let i=0; i<board_arr.length; i++){
        board_arr[i] = 'E';
    }
    
    for(let i=0; i<parent.children.length; i++){
        
        parent.children[i].innerHTML = '';
    }

}
const targetInput = document.querySelector('.target-input');

if (targetInput) {
    console.log('Current target value:', targetInput.value);
    // Ya alert mein dekhna chahte hain
    alert('Target value is: ' + targetInput.value);
} else {
    console.log('Target input not found!');
}
parent.addEventListener('click',(event)=>{
  
    const element = event.target;
     if (!element.hasAttribute('data-index')) return;
    if(event.target.id){}
    const index = parseInt(element.getAttribute('data-index'));
    console.log(index)
    if(element.innerHTML != 'X' &&element.innerHTML != 'O'){
        
    
    if(turn=='O'){
   element.innerHTML = 'O';
   board_arr[index] = 'O';
   if(checkwinner()){
    let winner = document.getElementById('scoreO');
    let count = parseInt(winner.innerHTML);
    count++;
    winner.innerHTML = count;
    setTimeout(clear, 800)
   }
   turn ='X';
    }
    else{
        element.innerHTML = 'X';
        board_arr[index] = 'X';
        if(checkwinner()){
    let winner = document.getElementById('scoreX');
    let count = parseInt(winner.innerHTML);
    count++;
    winner.innerHTML = count;
      setTimeout(clear, 800)
   }
        turn = 'O';
    }
   
   
}

    
})


//me krunga ki ek to ye button kaam krnea nad draw wala and ek target set kre user ki 5 point jaise hi mil jaye tu 
//player jee jayega 