console.log('script.js loaded');

document.querySelector('#btnLoad').addEventListener('click' , ()=> {

    // if(document.querySelector('#dinoName') !== null ){

    //     document.querySelector('#dinoName').remove();
    // } 

    if(document.querySelector('#dinoImage') !== null ){

        document.querySelector('#dinoImage').remove();
    } 

    getDinoName();
    getDinoImage();

}) ; 


async function getDinoName(){
    const response  = await fetch('/dinoname') ; 
    const data = await response.json();
    let dinoName = data[0].join(' ') ;  
    console.log(dinoName);
    document.querySelector('#dinoName').textContent = dinoName ;

}

async function getDinoImage(){
    const response  = await fetch('/dinoImage') ; 
    const data = await response.json();
    let dinoImage = data.value[Math.floor(Math.random() * data.value.length)].thumbnailUrl ;  
    console.log(dinoImage);


    
    var img = document.createElement("img"); 
    img.id="dinoImage" ; 
    img.src = dinoImage ; 
    var src = document.querySelector('#dinoImagee') ; 
    src.appendChild(img) ; 

  



}