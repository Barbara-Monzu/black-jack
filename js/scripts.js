
// const buttons = document.querySelectorAll('.btn');
const btnLess = document.getElementById('btnLess');
const btnOver = document.getElementById('btnOver');
const btnStart = document.getElementById('btnStart');
const txtLess = document.getElementById('txtLess');

const content = document.getElementById('sectionLanding');
const content2 = document.getElementById('sectionGame');
const content3 = document.getElementById('sectionGood-bye');
 
 
   
  
    // Agregamos un addevent lisener para escucharclick btn "yearsLess", si eres mayor de edad. 
    document.getElementById('btnLess').addEventListener('click', event => {
        //console.log('Escucho el evento btnLess');
        yearsLess();
    });
    document.getElementById('btnOver').addEventListener('click', event => {
        //console.log('Escucho el evento btnOver');
       yearsOver();
    });
    document.getElementById('btnStart').addEventListener('click', event => {
        //console.log('Escucho el evento startGame');
        startGame();
    });
    
    function yearsLess() { //console.log('Escucho el evento btnLess');
        //Eliminamos btn "YearsLess y Btn YearsOver" mediante las propiedades opacity y display block
        btnLess.style.display = "none"; 
        btnLess.style.opacity = "0";
        btnOver.style.display = "none"; 
        btnOver.style.opacity = "0";

        //Mostramos mensaje "contYearsLess" mediante las propiedades opacity y display block
        txtLess.style.display = "block"; 
        txtLess.style.opacity = "1";
        setTimeout(() => {
            //Eliminamos btn "YearsLess y Btn YearsOver" mediante las propiedades opacity y display block
            btnLess.style.display = "block"; 
            btnLess.style.opacity = "1";
            btnOver.style.display = "block"; 
            btnOver.style.opacity = "1";

            //Mostramos mensaje "contYearsLess" mediante las propiedades opacity y display block
            txtLess.style.display = "none"; 
            txtLess.style.opacity = "0";
            
        }, 10000);
        
    }
    // Agregamos un addevent lisener para escucharclick btn "yearsOver", si eres mayor de edad. 
    function yearsOver(){ console.log('Escucho el evento btnOver');
        //Eliminamos "btn YearsLess y Btn YearsOver" mediante las propiedades opacity y display block
        btnLess.style.display = "none"; 
        btnLess.style.opacity = "0";
        btnOver.style.display = "none"; 
        btnOver.style.opacity = "0";

        //Mostramos btn "startGame" mediante las propiedades opacity y display block
        btnStart.style.display = "block"; 
        btnStart.style.opacity = "1";

    }
    // Agregamos un addevent lisener para escucharclick btn "start-game" iniciar partida. 
    function startGame() { //console.log('Escucho el evento startGame');
    //Llamamos a la funcion "goSectionCanvas()" para cambiar a la pantalla de juego y iniciar "ironhack_BlackJAck.init()" mediante el callback de la animacion "goSectionCanvas()""

        goSectionCanvas();

        //Devolvemos los btn a su estado inicial de la Landing
        btnLess.style.display = "block"; 
        btnLess.style.opacity = "1";
        btnOver.style.display = "block"; 
        btnOver.style.opacity = "1";

        //Mostramos mensaje "contYearsLess" mediante las propiedades opacity y display block
        btnStart.style.display = "none"; 
        btnStart.style.opacity = "0";
    }

    
 

//Animacion Sections btnYears
function goSectionCanvas(){
    
    TweenMax.set(content2,{opacity:0,display:"none"});
     
    gsap.timeline()
        .to(content,0.3, {opacity:0,display:"none"})
        .to(content2,1, {opacity:1,display:"block"});
    //,onComplete: startTAbleGame()
    //Descomentarara acceder a la pagina de cierre despues de 10 minutos 
    // setTimeout(() => {
    //     goSectionGoodBye();
    // }, 100000);
}
//Animacion Sections Good Bye
function goSectionGoodBye(){

        TweenMax.set(content3,{opacity:0,display:"none"});
        
        gsap.timeline()
            .to(content2,0.3, {opacity:0,display:"none"})
            .to(content3,1, {opacity:1,display:"flex",onComplete: finalAnimation()});
      
}
function finalAnimation(){
    
    //Añadimos un setTimeout oara que despues de que termine la animacion final o transcurridos X segundos llame a la funcion "goSectionLanding()"" para regresar a la pantalla principal
    const nickGameOver = document.getElementById('nickGameOver');
    let S = [{scale:1.1},{scale:1.02},{scale:1.2}]
      TweenMax.set(nickGameOver,{autoAlpha: 0,scale:3});
      gsap.timeline()
            .to(nickGameOver,0.3, {opacity:0, display:"none"})
            .to(nickGameOver,1, {opacity:1,display:"block"})
            .to(nickGameOver,1,{delay:0.1, autoAlpha:1, scale:1,ease:Elastic.easeOut.config(1.1, .8)}) 
            .to(nickGameOver,0.5,{bezier:{values:S}, ease:Elastic.easeOut})
            .to(nickGameOver,1,{delay:0.5, autoAlpha:1, scale:1,ease:Elastic.easeOut.config(.8, 1.3)})
            .to(nickGameOver,1,{delay:0.5, autoAlpha:1, scale:1,ease:Elastic.easeOut.config(1.3, 1), delay:1, onComplete:finalAnimation2()})
      
    //On complete "final animation vuelve a la pantalla landing"
     
}
function finalAnimation2(){
    
    //Añadimos un setTimeout oara que despues de que termine la animacion final o transcurridos X segundos llame a la funcion "goSectionLanding()"" para regresar a la pantalla principal
    const gameOver = document.getElementById('gameOverId');
    let S = [{scale:1.1},{scale:1.02},{scale:1.2}]
      TweenMax.set(gameOver,{autoAlpha: 0,scale:3});
      
      gsap.timeline()     
            .to(gameOver,0.3, {opacity:0, display:"none"}, "+=1")
            .to(gameOver,1, {opacity:1,display:"block"})
            .to(gameOver,1,{delay:0.1, autoAlpha:1, scale:1,ease:Elastic.easeOut.config(1.1, .8)}) 
            .to(gameOver,0.5,{bezier:{values:S}, ease:Elastic.easeOut})
            .to(gameOver,1,{delay:0.5, autoAlpha:1, scale:1,ease:Elastic.easeOut.config(.8, 1.3)})
            .to(gameOver,1,{delay:0.5, autoAlpha:1, scale:1,ease:Elastic.easeOut.config(1.3, 1)});
       
    //On complete "final animation vuelve a la pantalla landing"
     
}

function goSectionLanding(){

    TweenMax.set(content,{opacity:0,display:"none"});
     
    gsap.timeline()
        .to(content3,0.3, {opacity:0,display:"none"})
        .to(content,1, {opacity:1,display:"block"});
        // window.clearTimeout(intervalId);
}
//Formularion NickName del player- capturamos el nickName y con submit hacemos deaparecer el formulario almacenando la variable Nickname
function clearHandTittle() { console.log('SETER Titulo');
    if(win.style.display === 'block' ){
        TweenMax.set(win,{opacity:1,display:"block"});
        gsap.timeline().to(win, 0.3 ,{opacity:0,display:"none"});
    }
    else if(loose.style.display === 'block' ){   
        TweenMax.set(loose,{opacity:1,display:"block"});
        gsap.timeline().to(loose, 0.3 ,{opacity:0,display:"none"});
    }
    else if(tie.style.display === 'block' ){ 
        TweenMax.set(tie,{opacity:1,display:"block"});
        gsap.timeline().to(tie, 0.3 ,{opacity:0,display:"none"});
    }
}

let nickName='';

document.getElementById('nickForm').addEventListener('click', event => {
    nickName = document.getElementById("input-Nick").value;
    
    formularioNick();   spanNick ();
});
let contForm = document.getElementsByClassName('form-player');
function formularioNick(){
    TweenMax.set(contForm,{opacity:1,display:"block"});
    gsap.timeline().to(contForm, .6 ,{opacity:0,display:"none"});
}

let spanNickname = document.getElementById('spanNickName');
function  spanNick (){
    spanNickname.innerHTML = nickName;
}
//////LANDING TEXT ANIMATION///////  
 

const splitText = (selector) => {
    const elem = document.querySelector(selector);
    const text = elem.innerText;
    const chars = text.split("");
    const charsContainer = document.createElement("div");
    const charsArray = [];
  
    charsContainer.style.position = "relative";
    charsContainer.style.display = "inline-block";
  
    chars.forEach((char) => {
      const charContainer = document.createElement("div");
  
      charContainer.style.position = "relative";
      charContainer.style.display = "inline-block";
      charContainer.innerText = char;
      charsContainer.appendChild(charContainer);
  
      charsArray.push(charContainer);
    });
    // remove current text
    elem.innerHTML = "";
    // append new structure
    elem.appendChild(charsContainer);
  
    return charsArray;
  };
  
  const animate = function (text) {
    const chars = splitText("h1");
    return gsap.from(chars, {
      duration: 0.2,
      y: 100,
      opacity: 0,
      stagger: 0.1,
      delay: 1 
    });
  };
  
  animate("h1");

  ////MOMENTO GANADOR
  const win = document.getElementById('player-win');
  const loose = document.getElementById('dealer-win');
  const tie = document.getElementById('empate');
  const dealerBj = document.getElementById('dealerBj');
  const playerBj = document.getElementById('playerBj');

    function dBlackJack(){
    
        TweenMax.set(dealerBj,{opacity:0,display:"none"});
        
        gsap.timeline()
            .to(dealerBj,1, {opacity:1,display:"block"})
            .to(dealerBj,1, {delay:2, opacity:0,display:"none"});
        //,onComplete: startTAbleGame()
    
    }
    function pBlackJack(){
    
        TweenMax.set(playerBj,{opacity:0,display:"none"});
            
        gsap.timeline()
            .to(playerBj,1, {opacity:1,display:"block"})
            .to(playerBj,1, {delay:2, opacity:0, display:"none"});
        //,onComplete: startTAbleGame()
        
    }
    function playerWin(){
    
        TweenMax.set(win,{opacity:0,display:"none"});
        
        gsap.timeline()
            .to(win,1, {opacity:1,display:"block"})
            .to(win,1, {delay:2, opacity:0,display:"none"});
        //,onComplete: startTAbleGame()
    
    }
    function dealerWin(){
    
        TweenMax.set(loose,{opacity:0,display:"none"});
         
        gsap.timeline()
            .to(loose,1, {opacity:1,display:"block"})
            .to(loose,1, {delay:2, opacity:0,display:"none"});
        //,onComplete: startTAbleGame()
        
    }
    function empate(){
    
        TweenMax.set(tie,{opacity:0,display:"none"});
         
        gsap.timeline()
            .to(tie,1, {opacity:1,display:"block"})
            .to(tie,1, {delay:2, opacity:0,display:"none"});
        //,onComplete: startTAbleGame()
        
    }
  
/// Rotacion fondo
var fondoRotacion = document.getElementById('rotacion-fondo');
TweenMax.to(fondoRotacion, 75, {rotation:"360", ease:Linear.easeNone, repeat:-1});

//Llamada a cargar/ ejecutar App ironhack_blackJack 
//ironhack_blackJack.init(); ////
// function startTAbleGame(){
//     ironhack_blackJack.init();
// }
const bj = document.getElementById('bj');
 function titularBJ(){
    // TweenMax.set(bj,{opacity:0,display:"none"});
         
        gsap.timeline()
            .to(bj,0.3, {opacity:0,display:"none"})
            .to(bj,3, {opacity:1,display:"block"});
 }

 function carcajadaFinal (fuente) {
    const sonido = document.createElement("audio");
    sonido.src = fuente;
    sonido.setAttribute("preload", "auto");
    sonido.setAttribute("controls", "none");
    sonido.style.display = "none"; // <-- oculto
    document.body.appendChild(sonido);
    return sonido;
};