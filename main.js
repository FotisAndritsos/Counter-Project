const disNum = document.getElementById('dis-num');
const btns = document.querySelectorAll('.btn');

let yo = 0;
 

btns.forEach(function(btn){
    btn.addEventListener('click',function(){
        const  lol = btn.getAttribute("data-id");
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
    });
});