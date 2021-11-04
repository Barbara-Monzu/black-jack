
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
  buttonHitInst:undefined,
  buttonStandInst:undefined,
  buttonClearInst:undefined,
  buttonBetInst:undefined,
  buttonBetInst:undefined,
  imagebet:undefined,
  // nickName:undefined,


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
    this.createButtons();
    this.createPlayerAmountTotal();
    this.createCoins();
     
    this.createHandDealerCards();
    this.createHandPlayerCards();
  },

  createBackground() {
    this.background = new Background(this.ctx, 0, 0, this.canvasSize.width, this.canvasSize.height, "tapete2.jpg");
  },
  createDealerScoreCards() {
    this.dealerScoreCardsInst = new DealerScore(this.ctx, this.canvasSize.width / 2 - 110,  this.canvasSize.height / 14);
  },
  createPlayerScoreCards() {
    this.playerScoreCardsInst = new PlayerScore(this.ctx, this.canvasSize.width / 2 - 110, this.canvasSize.height - 300);
  },
  createButtons(){
    this.buttonHitInst = new Button(this.ctx, this.canvasSize.width / 6,  this.canvasSize.height - 210, 170, 50, "Buttons/Button_hit.svg")
    this.buttonStandInst = new Button(this.ctx, this.canvasSize.width / 6,  this.canvasSize.height - 130, 170, 50, "Buttons/Button_stand.svg")
    this.buttonClearInst = new Button(this.ctx, this.canvasSize.width / 1.3,  this.canvasSize.height - 130, 170, 50, "Buttons/Button_clear.svg")
    this.buttonBetInst = new Button(this.ctx, this.canvasSize.width / 1.3,  this.canvasSize.height - 210, 170, 50, "Buttons/Button_bet.svg")
    
  },
  createPlayerAmountTotal() {
    this.playerAmountTotalInst = new PlayerAmount(this.ctx, this.canvasSize.width / 1.3  , this.canvasSize.height - 300);
  },
  createCoins(){
    this.coinsInstance = new Coins(this.ctx, this.canvasSize.width / 1.19  , this.canvasSize.height - 355, 80, 80, "coins_1.png")
    // this.coinsInstance3 = new Coins(this.ctx, this.canvasSize.width / 1.2,  this.canvasSize.height / 4, 200, 200, "Buttons/hand.png")
    // this.imagebet = new Image();
    // this.imagebet.src = `img/Red_C.png`;
    

  },
  loadCoinImage (){
    this.imagebet = new Image();
    this.imagebet.src = `img/Red_C.png`;
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
    this.drawButtons();
    this.drawPlayerAmountTotal();
    this.drawCoins();
    this.drawbet();
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
  drawButtons() {
    this.buttonHitInst.draw();
    this.buttonStandInst.draw()
    this.buttonClearInst.draw();
    this.buttonBetInst.draw();
  },
  drawPlayerAmountTotal() {
    this.playerAmountTotalInst.draw(this.playerAmount);
  },
  drawCoins() {
    this.coinsInstance.draw();
  },
  drawbet() {
    if (this.imagebet) {
      this.ctx.drawImage(this.imagebet, this.canvasSize.width / 2, this.canvasSize.height / 2, 100, 100);
    }
    
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
        this.startDealerRound = true; 
      }
      if (event.key === 'n' && !this.goodByeScreen) {
        this.newPlay();
        this.clearScreen();
        clearHandTittle();
      }

    });
    this.ctx.canvas.addEventListener('click', (event) => {
  
      const x = event.clientX;
      const y = event.clientY;
      console.log(x,y)
      if(this.buttonHitInst.clickButtonHit(x, y, this.canvasSize.width / 6,  this.canvasSize.height - 210, 170, 50)){
          if(this.endRound) return;
          this.handPlayerInst.playerHit();
          this.calculateAll();
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
      else if(this.buttonStandInst.clickStandclass(x, y, this.canvasSize.width / 6,  this.canvasSize.height - 130, 170, 50)) {
          this.endRound = true;
          this.startDealerRound = true; 
      }
      else if (this.buttonClearInst.clickClearclass(x, y, this.canvasSize.width / 1.3,  this.canvasSize.height - 130, 170, 50)) {
          this.newPlay();
          this.clearScreen();
          clearHandTittle();
      }
      else if(this.buttonBetInst.clickBetclass(x, y, this.canvasSize.width / 1.3,  this.canvasSize.height - 210, 170, 50)) {
        this.loadCoinImage();
      }

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
    this.imagebet = undefined;
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
    
  }

}