class HandPlayerCards {
    constructor(ctx, posX, posY, width, height) {
      this.ctx = ctx;
  
      this.pos = {
        x: posX,
        y: posY,
        initialY: posY
      }
  
      this.size = {
        width: width,
        height: height
      }
      this.handValue = 0;

      this.imageInstanceFirstCard = undefined;
      this.imageFirstCard = deckCards[0].src;
      this.valueFirstCard = deckCards[0].value;
      this.nameFirstCard = deckCards[0].name;

      this.imageInstanceSecondCard = undefined;
      this.imageSecondCard = deckCards[2].src;
      this.valueSecondCard = deckCards[2].value;
      //console.log(this.valueFirstCard)
      //console.log(this.valueSecondCard)
      this.nameSecondCard = deckCards[2].name;

      this.imageNewCard = undefined;
      this.imageNewCard3 = deckCards[0].src;
      this.valueNewCard = deckCards[0].value;
      this.nameNewCard = deckCards[0].name;

      this.handPlayer =[];

      this.handPlayerImages =[];
      this.init();
      //console.log('mazo HandPlayer size ' ,this.handPlayer);
      console.log('handPlayer', this.handPlayer )
    }
  
    init() {
      // this.imageInstanceFirstCard = new Image();
      // this.imageInstanceFirstCard.src = this.imageFirstCard;

      // this.imageInstanceSecondCard = new Image();
      // this.imageInstanceSecondCard.src = this.imageSecondCard;
      
      this.handPlayerImages.push(new Image());
      this.handPlayerImages[0].src = deckCards[0].src;
      this.handPlayerImages.push(new Image());
      this.handPlayerImages[1].src = deckCards[2].src;

    
      this.handPlayer.push(deckCards[0]);
      this.handPlayer.push(deckCards[2]);
      deckCards.splice(2, 1);
      deckCards.splice(0, 1);
    }
     
  
    draw() {
       
      // this.ctx.drawImage(this.imageInstanceFirstCard, this.pos.x, this.pos.y, this.size.width, this.size.height);
      // this.ctx.drawImage(this.imageInstanceSecondCard, this.pos.x +50, this.pos.y +10, this.size.width, this.size.height);
      // this.imageNewCard && this.ctx.drawImage(this.imageNewCard, this.pos.x +100, this.pos.y, this.size.width, this.size.height);
      for (let i= 0; i < this.handPlayer.length; i++){ 
        //console.log('dentro del for Pleayer!!!')
        this.ctx.drawImage(this.handPlayerImages[i], this.pos.x +50 * i, this.pos.y, this.size.width, this.size.height); 

      }
         
    }
    
    // createPlayerCard() {
    //   this.imageNewCard = new Image();
    //   this.imageNewCard.src = deckCards[0].src; 
    //   //this.handPlayer.push(deckCards[0]);
    //   // this.obstacles.push(new Image(this.ctx, this.canvasSize.width, this.canvasSize.height - 80, 40, 80, 5))
    // }

    calculateHandPlayer() {
      
      this.handValue = 0;
       this.handPlayer.forEach(playerCards => {  
         this.handValue += playerCards.value;
       });
    
      //console.log('valor playerHand',this.handValue);
      return this.handValue;
        
    }

    playerHit() {
      console.log(deckCards)
      let extraerCard = deckCards.shift();
      this.handPlayer.push(extraerCard);
      this.handPlayerImages.push(new Image());
      this.handPlayerImages[this.handPlayerImages.length -1].src = extraerCard.src
      // this.calculateHandPlayer();
      //this.createPlayerCard();
     
      //console.log('Hit Player ON',this.handPlayer);
      
    }
    stand (){

    }
    double (){;

    }
  

  }