<<<<<<< HEAD
const clickText=document.querySelector("div.doonge_text:first-child h1");



function handleClick(){
    const clickClass="clicked";
    if(clickText.classList.contains(clickClass)){       
        clickText.className="";
    }else{
        clickText.className=clickClass;
       
    }
}

function handleTitleClick(){  // it's same toggle
    const clickClass="clicked";
    if(clickText.classList.contains(clickClass)){
        clickText.classList.remove(clickClass);
    }else{
        clickText.classList.add(clickClass);    
    }
}

 function handleTitleClicktoggle() {
     clickText.classList.toggle("clicked");
}

//clickText.addEventListener("click",handleTitleClick);
//console.dir(clickText);
=======
const clickText=document.querySelector("div.doonge_text:first-child h1");



function handleClick(){
    const clickClass="clicked";
    if(clickText.classList.contains(clickClass)){       
        clickText.className="";
    }else{
        clickText.className=clickClass;
       
    }
}

function handleTitleClick(){  // it's same toggle
    const clickClass="clicked";
    if(clickText.classList.contains(clickClass)){
        clickText.classList.remove(clickClass);
    }else{
        clickText.classList.add(clickClass);    
    }
}

 function handleTitleClicktoggle() {
     clickText.classList.toggle("clicked");
}

//clickText.addEventListener("click",handleTitleClick);
//console.dir(clickText);
>>>>>>> 99ecc99a36667509343d287205c39ecc27375a76
clickText.addEventListener("onmoseover",handleTitleover);