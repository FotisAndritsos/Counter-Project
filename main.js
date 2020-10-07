const disNum = document.getElementById('dis-num');
const btn = document.querySelector('.btn');
let yo = 0;
 let cnt = () =>{
    
   let lol  = btn.dataset.id;
   switch (lol) {
    case "sub-btn":
      yo --;
      disNum.textContent = yo;
       break;
      
    case "add-btn":
        yo ++;
        disNum.textContent = yo;
        console.log(disNum);
      break;
      case "res-btn":
        yo = 0;
        disNum.textContent = yo;
      break;
      default:
    yo= 0;
    disNum.textContent = yo;
  }
  
}
btn.addEventListener('click',cnt);
