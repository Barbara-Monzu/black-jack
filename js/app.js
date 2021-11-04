
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
  dealerScoreCards: 0,
  dealerScoreCardsInst: undefined,
  playerScoreCards: 0,
  playerScoreCardsInst: undefined,
  INITIAL_PLAYER_AMOUNT: 300,
  playerAmount: undefined,
  playerAmountTotalInst: undefined,
  handDealerCards: [],
  handDealerCardsInst: undefined,
  handPlayerCards: [],
  handPlayerCardsInst: undefined,
  intervalId:undefined,
  FPS: 30,
  framesCounter: 0,
  secondsCounter: 0,

  init() {
    this.setContext();
    this.setDimensions();
    suffleDeck(deckCards);
    this.createAll();
    this.calculateAll();
    this.playerAmount = this.INITIAL_PLAYER_AMOUNT;

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
    this.intervalId = setInterval(() => {
      if (this.framesCounter !== 0 && this.framesCounter % (this.FPS * 1) === 0) {
        // if(condition) something;
        // else somethingElse;

        // condition ? something : somethingElse;

        // condition && something
        // condition || somethingElse

        this.startDealerRound && this.dropDealerCards();
      }

      this.drawAll();
      this.calculateAll();

      //falla funcion GAME OVER POR k esta en el bucle 
      if (this.playerAmount <= 0) {
        this.gameOver();
      }

      this.framesCounter++;
    }, 1000 / this.FPS)

     
  },
  createAll() {
    this.createBackground();
    this.createDealerScoreCards();
    this.createPlayerScoreCards();
    this.createPlayerAmountTotal();
    this.createHandDealerCards();
    this.createHandPlayerCards();
  },

  createBackground() {
    this.background = new Background(this.ctx, 0, 0, this.canvasSize.width, this.canvasSize.height, "tapete2.jpg");
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
  createHandDealerCards() {
    this.handDealerInst = new HandDealerCards(this.ctx, this.canvasSize.width / 2 - 50,  this.canvasSize.height / 10,this.canvasSize.height / 8, this.canvasSize.height / 6);
  },
  createHandPlayerCards() {
    this.handPlayerInst = new HandPlayerCards(this.ctx, this.canvasSize.width / 2 - 50, this.canvasSize.height - 260, this.canvasSize.height / 8, this.canvasSize.height / 6);
  },
  drawAll() {
    this.ctx.clearRect(0, 0, this.canvasSize.width, this.canvasSize.height)
    this.drawBackground();
    this.drawDealerScoreCards();
    this.drawPlayerScoreCards();
    this.drawPlayerAmountTotal();
    this.drawHandDealerCards();
    this.drawHandPlayerCards();
    // this.handPlayerInst.drawNewPlayerCard();
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
  drawHandDealerCards() {
    this.handDealerInst.draw();
  },
  drawHandPlayerCards() {
    this.handPlayerInst.draw();

  },
  calculateAll() {
    
    this.playerScoreCards = this.handPlayerInst.calculateHandPlayer();
    this.dealerScoreCards = this.handDealerInst.calculateHandDealer();
    if(this.playerScoreCards === 21 && this.handPlayerInst.handPlayer.length === 2 && !this.endRound) {
      pBlackJack(); 
      this.endRound = true;
      this.playerAmount += 100;
    }
    this.endRound && !this.dealerEndRound && this.compareCards();
    
  },
  compareCards(){
    // if(this.dealerScoreCards === 21 && this.handDealerInst.handDealer.length  === 2) {
    //   dBlackJack();
    //   this.dealerEndRound = true;
    //   this.playerAmount -= 100;
    // }
    if(this.handDealerInst.handDealer.length === 2 && this.dealerScoreCards === 21 ) { 
      dBlackJack();
      this.dealerEndRound = true; 
      this.playerAmount -= 100;
      console.log('this.handDealerInst.handDealer.length - 1 === 2 && this.dealerScoreCards === 21 YOU LOSE');
    }
    else if(this.playerScoreCards === 21 && this.handDealerInst.handDealer.length === 2 && this.dealerScoreCards === 21 ) { 
      dBlackJack();
      this.dealerEndRound = true; 
      this.playerAmount -= 100;
      console.log('this.playerScoreCards === 21 && this.handDealerInst.handDealer.length - 1 === 2 && this.dealerScoreCards === 21 YOU LOSE');
    } 
    else if(this.dealerScoreCards === 21 ){ 
      dealerWin();
      this.dealerEndRound = true;
      this.playerAmount -= 100;
      console.log('dealerScoreCards === 21 YOU LOSE');
    }   
    else if(this.dealerScoreCards>21 ){ 
      playerWin(); 
      this.dealerEndRound = true;
      this.playerAmount += 100;
      console.log('dealerScoreCards > 21 PLAYER WIN');
    }                
    else if(this.dealerScoreCards === this.playerScoreCards && this.dealerStand){
       empate(); 
       this.dealerEndRound = true;
       console.log('this.dealerScoreCards === this.playerScoreCards EMPATE')
    }
    else if(this.playerScoreCards < 21 && this.dealerScoreCards < 21 && this.dealerScoreCards > this.playerScoreCards && this.dealerStand){
      dealerWin();
      this.dealerEndRound = true;
      this.playerAmount -= 100;
      console.log('this.dealerScoreCards <21 && this.dealerScoreCards > this.playerScoreCards')
      }
    else if(this.playerScoreCards < 21 && this.dealerScoreCards < 21 && this.dealerScoreCards < this.playerScoreCards && this.dealerStand){
      playerWin();
      this.dealerEndRound = true;
      this.playerAmount += 100;
      console.log(this.dealerScoreCards, this.playerScoreCards, 'this.dealerScoreCards <21 && this.dealerScoreCards > this.playerScoreCards')
    }

  },
  setListeners() { //Aqui debemos poner los eventos onClick de los botones del canvas
    document.addEventListener('keydown', (event) => { //evento 'hit pedir carta'

      if (event.key === ' ' && !this.goodByeScreen) {
        if(this.endRound) return;
        this.handPlayerInst.playerHit();
        this.calculateAll();
        //this.playerScoreCards = this.handPlayerInst.calculateHandPlayer();
        //Condiciones de comparacion del player.
        if(this.playerScoreCards === 21 && this.handPlayerInst.handPlayer.length === 2) {
          pBlackJack(); 
          this.endRound = true;
          this.playerAmount += 100;
        }
        else if(this.playerScoreCards > 21) { 
          dealerWin();
          this.endRound = true;

          this.playerAmount -= 100;
          console.log('this.playerScoreCards > 21 YOU LOSE');
        }
        else if(this.playerScoreCards === 21 ) { 
          playerWin();
          this.endRound = true;
          this.playerAmount += 100;
          console.log('this.playerScoreCards === 21 YOU LOSE');
        }
         
      }

      if (event.key === 's' && !this.goodByeScreen) {
       
        this.endRound = true;
        //console.log('hand Player stand', this.handplayerImages)
        
          // for (let index = 0; index < 24; index++) {
              
          //   this.handDealerInst.dealerHit();  
            
          //   let cards = this.handDealerInst.calculateHandDealer();
          //   if(cards>17) {  
          //     this.compareCards();       
          //     return;       
          //   };
            
          // }
        this.startDealerRound = true;
        
        
      }
      if (event.key === 'n' && !this.goodByeScreen) {
        this.newPlay();
        this.clearScreen();
        clearHandTittle();
        //this.newPlay();
      }
      
      // if (event.key === 'q') {

      //   //this.handDealerInst.dealerHit();
      //   //console.log('hand Dealer images', this.handDealerImages)
      // }
    });
  },
  dropDealerCards(){
      this.handDealerInst.dealerHit();  
            
      let cards = this.handDealerInst.calculateHandDealer();
      if(cards>17) {  
        this.startDealerRound = false; 
        this.dealerStand = true;
        //this.compareCards();    
      };
  },
  clearScreen() {
    // this.ctx.clearRect(0, 0, this.canvasSize.width, this.canvasSize.height);
    //this.init();
    suffleDeck(deckCards);
    this.endRound = false;
    this.dealerEndRound =false;
    this.dealerStand = false;

    this.handPlayerInst.destroyPlayerHand();
    this.handDealerInst.destroyDealerHand();
    this.createDealerScoreCards();
    this.createPlayerScoreCards();
    this.createHandDealerCards();
    this.createHandPlayerCards();

    this.start();
  },

  isAmountPlayer() {
    //Check amount player
  },
  newPlay() {
    clearInterval(this.intervalId);
    console.log('estoy limpiando el intervalo this.intervalId');
  },
  gameOver() {
    //Llamamos a la funcion goSectionGoodBye() para cambiar a la pantalla de cierre.
    this.goodByeScreen = true;
    goSectionGoodBye();
    this.newPlay();
    setTimeout(() => {
      goSectionLanding();
      this.goodByeScreen = false;
      this.playerAmount = this.INITIAL_PLAYER_AMOUNT;
      deckCards = [...deckCopy];
      this.clearScreen();
    }, 6000);
    // clearInterval(this.intervalId);
    console.log('llama desde GAME OVER');
  }

}