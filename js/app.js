 
const ironhack_blackJack = {
    name: 'ironhack Black Jack app',
    description: 'Black JAck game',
    version: '1.0.0',
    authors: 'Bárbara Monzú & Fernando Cardona',
    license: undefined,
    repository: undefined,
    ctx: undefined,
    canvasDOM: undefined,
    canvasSize: { width: undefined, height: undefined },
    background: undefined,
    dealerScoreCards:0,
    dealerScoreCardsInst: undefined,
    playerScoreCards:0,
    playerScoreCardsInst:undefined,
    playerAmount:1000,
    playerAmountTotalInst:undefined,
   
  
    init() {
      this.setContext();
      this.setDimensions();
      this.createAll();
       
      this.setListeners();
      this.start(); 
    },
  
    setContext() {
      this.canvasDOM = document.querySelector("#canvasGame");
      this.ctx = this.canvasDOM.getContext("2d");
      //console.log('Hemos entrado a setContex');
    },
  
    setDimensions() {
      this.canvasSize.width = window.innerWidth;
      this.canvasSize.height = window.innerHeight;
  
      this.canvasDOM.setAttribute("width", this.canvasSize.width);
      this.canvasDOM.setAttribute("height", this.canvasSize.height);
        //console.log('Hemos entrado a setDimensions');
    },
  
    start() {//console.log('Hemos entrado a start');
      
      this.drawAll();
      
    if (this.isAmountPlayer() === 0) {
        this.gameOver();
      }
    },
    createAll() {
      this.createBackground();
      this.createDealerScoreCards();
      this.createPlayerScoreCards();
      this.createPlayerAmountTotal();
    },
  
    createBackground() {
      this.background = new Background(this.ctx, 0, 0, this.canvasSize.width, this.canvasSize.height, "bgTapiz.svg");
    },
    createDealerScoreCards() {
      this.dealerScoreCardsInst = new DealerScore(this.ctx, 100, 100);
    },
    createPlayerScoreCards() {
      this.playerScoreCardsInst = new PlayerScore(this.ctx, 100, 500);
    },
    createPlayerAmountTotal() {
      this.playerAmountTotalInst = new PlayerAmount(this.ctx, 100, 550);
    },
    drawAll() {
      this.drawBackground();
      this.drawDealerScoreCards();
      this.drawPlayerScoreCards();
      this.drawPlayerAmountTotal();
    },
  
    drawBackground() {
      this.background.draw();
    },
    drawDealerScoreCards() {
      this.dealerScoreCardsInst.draw(this.dealerScoreCards);
    },
    drawPlayerScoreCards() {
      this.playerScoreCardsInst.draw(this.playerScoreCards);
    },
    drawPlayerAmountTotal() {
      this.playerAmountTotalInst.draw(this.playerAmount);
    },
    setListeners() { //Aqui debemos poner los eventos onClick de los botones del canvas
      document.onClick = e => {
        // console.log("La tecla: ", e.key)
        
        // //Versión con operador ternario
        // e.key === 'ArrowLeft' ? this.ball.moveLeft() : null
        // e.key === 'ArrowRight' ? this.ball.moveRight() : null
      }
    },
  
    clearScreen() {
      this.ctx.clearRect(0, 0, this.canvasSize.width, this.canvasSize.height);
    },
    isAmountPlayer() {
        //Check amount player
    },
    gameOver() {
        //Llamamos a la funcion goSectionGoodBye() para cambiar a la pantalla de cierre.
        goSectionGoodBye();
    }
  }