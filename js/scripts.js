
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
        console.log('Escucho el evento btnLess');
        yearsLess();
    });
    document.getElementById('btnOver').addEventListener('click', event => {
        console.log('Escucho el evento btnOver');
       yearsOver();
    });
    document.getElementById('btnStart').addEventListener('click', event => {
        console.log('Escucho el evento startGame');
        startGame();
    });
    
    function yearsLess() { console.log('Escucho el evento btnLess');
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
    function startGame() { console.log('Escucho el evento startGame');
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
    setTimeout(() => {
        goSectionGoodBye();
    }, 100000);
}
//Animacion Sections Good Bye
function goSectionGoodBye(){

        TweenMax.set(content3,{opacity:0,display:"none"});
        
        gsap.timeline()
            .to(content2,0.3, {opacity:0,display:"none"})
            .to(content3,1, {opacity:1,display:"block",onComplete: finalAnimation()});
      
}
function finalAnimation(){
    
    //Añadimos un setTimeout oara que despues de que termine la animacion final o transcurridos X segundos llame a la funcion "goSectionLanding()"" para regresar a la pantalla principal

    //On complete "final animation vuelve a la pantalla landing"
    setTimeout(() => {
        goSectionLanding();
    }, 30000);

    function goSectionLanding(){

        TweenMax.set(content,{opacity:0,display:"none"});
         
        gsap.timeline()
            .to(content3,0.3, {opacity:0,display:"none"})
            .to(content,1, {opacity:1,display:"block"});
            
    }
     
}
//Formularion NickName del player- capturamos el nickName y con submit hacemos deaparecer el formulario almacenando la variable Nickname


let nickName = document.querySelector("input").value;
document.getElementById('nickForm').addEventListener('click', event => {
    
    formularioNick();
});
let contForm = document.getElementsByClassName('form-player');
function formularioNick(){
    TweenMax.set(contForm,{opacity:1,display:"block"});
    gsap.timeline().to(contForm, .6 ,{opacity:0,display:"none"});
}
    
    




//Llamada a cargar/ ejecutar App ironhack_blackJack 
ironhack_blackJack.init(); 
// function startTAbleGame(){
//     ironhack_blackJack.init();
// }
 