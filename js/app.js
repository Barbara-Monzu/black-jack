
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
  playerAmount: 1000,
  playerAmountTotalInst: undefined,
  handDealerCards: [],
  handDealerCardsInst: undefined,
  handPlayerCards: [],
  handPlayerCardsInst: undefined,
  intervalId:undefined,


  init() {
    this.setContext();
    this.setDimensions();
    suffleDeck(deckCards);
    this.createAll();
    this.calculateAll();
  


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
      
      this.drawAll();
      this.calculateAll();
    
      if (this.playerAmount <= 0) {
        this.gameOver();
      }
    }, 1000 / 30)

     
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
    this.background = new Background(this.ctx, 0, 0, this.canvasSize.width, this.canvasSize.height, "tapete2.jpeg");
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
    console.log('calc')
    this.playerScoreCards = this.handPlayerInst.calculateHandPlayer();
    this.dealerScoreCards = this.handDealerInst.calculateHandDealer();
    this.compareCards()
  },
  compareCards(){
    if(this.dealerEndRound) return
    //console.log('hola', this.dealerScoreCards)
    if(this.dealerScoreCards === 21 && this.handDealerInst.handDealer.length - 1 === 2) {
      dBlackJack();
      this.dealerEndRound = true;
      this.playerAmount -= 100;
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
    else if(this.playerScoreCards === 21 && this.handDealerInst.handDealer.length - 1 === 2 && this.dealerScoreCards === 21 ) { 
      dealerWin();
      this.dealerEndRound = true; 
      this.playerAmount -= 100;
      console.log('this.playerScoreCards === 21 YOU LOSE');
    }                
    else if(this.dealerScoreCards === this.playerScoreCards){
       empate(); 
       this.dealerEndRound = true;
       console.log('this.dealerScoreCards === this.playerScoreCards EMPATE')
      }
  },
  setListeners() { //Aqui debemos poner los eventos onClick de los botones del canvas
    document.addEventListener('keydown', (event) => { //evento 'hit pedir carta'

      if (event.key === ' ') {
        if(this.endRound) return;
        this.handPlayerInst.playerHit();
        this.calculateAll();
        //Condiciones de comparacion del player.
        if(this.playerScoreCards === 21 && this.handPlayerInst.handPlayer.length - 1 === 2) {
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

      if (event.key === 's') {
       
        this.endRound = true;
        //console.log('hand Player stand', this.handplayerImages)
        
          for (let index = 0; index < 24; index++) {
              
            this.handDealerInst.dealerHit();  
            
            let cards = this.handDealerInst.calculateHandDealer();
            if(cards>17) {  
              this.compareCards();       
              return;       
            };
            
          }

        
      }
      if (event.key === 'n') {
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

  clearScreen() {
    // this.ctx.clearRect(0, 0, this.canvasSize.width, this.canvasSize.height);
    //this.init();
    this.newPlay();
    suffleDeck(deckCards);
    this.endRound = false;
    this.dealerEndRound =false;

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
    goSectionGoodBye();
  }

}