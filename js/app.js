
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


  init() {
    this.setContext();
    this.setDimensions();
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
    setInterval(() => {
      this.calculateAll();
      this.drawAll();
    }, 1000 / 30)

    if (this.isAmountPlayer() === 0) {
      this.gameOver();
    }
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
  createHandDealerCards() {
    this.handDealerInst = new HandDealerCards(this.ctx, this.canvasSize.width / 2 - 50,  this.canvasSize.height / 10,this.canvasSize.height / 10, this.canvasSize.height / 6);
  },
  createHandPlayerCards() {
    this.handPlayerInst = new HandPlayerCards(this.ctx, this.canvasSize.width / 2 - 50, this.canvasSize.height - 240, this.canvasSize.height / 10, this.canvasSize.height / 6);
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
    this.playerScoreCards = this.handPlayerInst.calculateHandPlayer();
    this.dealerScoreCards = this.handDealerInst.calculateHandDealer();
  },

  setListeners() { //Aqui debemos poner los eventos onClick de los botones del canvas
    document.addEventListener('keydown', (event) => { //evento 'hit pedir carta'

      if (event.key === ' ') {

        this.handPlayerInst.hit();
         

        console.log(this.deckCards)
      }

    });
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