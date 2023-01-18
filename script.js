let data = "";
let buttons = document.querySelectorAll('.button');


Array.from(buttons).forEach((items)=>{
   items.addEventListener("click",(e) =>{

    console.log(e.target);
    if( e.target.innerHTML== '='){
        data = eval(data);
        document.querySelector('input').value= data;

    }
    else if( e.target.innerHTML == 'C'){
        data ="";
        document.querySelector('input').value= data;
    }
    else{
        data = data + e.target.innerHTML;
        document.querySelector('input').value= data;
    }

    
   })
})




