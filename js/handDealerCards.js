class HandDealerCards {
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
      
      this.imageFirstCard = deckCards[1].src;
      this.valueFirstCard = deckCards[1].value;
      this.nameFirstCard = deckCards[1].name;


      this.handDealer =[];
      this.init()
      //console.log('mazo HandDealer size ' ,this.handDealer);
    }
  
    init() {
      this.imageInstanceFirstCard = new Image();
      this.imageInstanceFirstCard.src = this.imageFirstCard;
      this.handDealer.push(deckCards[1]);
      deckCards.splice(1, 1);
    }
  
  
    draw() {
      this.ctx.drawImage(this.imageInstanceFirstCard, this.pos.x, this.pos.y, this.size.width, this.size.height);
      
    }
    calculateHandDealer() {
      
      this.handValue = 0
       this.handDealer.forEach(DealerCards => {  
         this.handValue += DealerCards.value;
       });
    
      //console.log(this.handValue);
      return this.handValue;
        
    }
    Hit() {
      console.log(deckCards)
      this.handDealer.push(deckCards.shift());
      this.calculateHandDealer();
      
    }
    stand (){

    }

  }