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

      this.handDealer =[];
      this.handDealerImages =[];
      this.init()
     
    }
  
    init() {
      
      if(deckCards.length >= 2) {
        this.handDealerImages.push(new Image());
        this.handDealerImages[0].src = deckCards[1].src;

        this.handDealer.push(deckCards[1]);
        deckCards.splice(1, 1);
        
      }
      else {
         deckCards = [...deckCopy];
         suffleDeck(deckCards);
         barajar();

         this.handDealerImages.push(new Image());
        this.handDealerImages[0].src = deckCards[1].src;
      
        this.handDealer.push(deckCards[1]);
        deckCards.splice(1, 1);
      }
      
      
      

    }
  
  
    draw() {
      // this.ctx.drawImage(this.imageInstanceFirstCard, this.pos.x, this.pos.y, this.size.width, this.size.height);
      for (let i= 0; i < this.handDealer.length; i++){ 
       
      
        this.ctx.drawImage(this.handDealerImages[i], this.pos.x +50 * i, this.pos.y, this.size.width, this.size.height); 
 
      }
    }
    calculateHandDealer() {
      
      this.handValue = 0
       this.handDealer.forEach(elm => {  
  
         if(elm.value  === 11 && this.handValue +11 > 21){
          this.handValue += 1;
         } else {this.handValue += elm.value;}
       });

      return this.handValue;
        
    }
     
    dealerHit() {
      
      let extraerCard;
      deckCards.length >= 1 && (extraerCard = deckCards.shift());
      deckCards.length === 0 && (deckCards = [...deckCopy]);
     
      this.handDealer.push(extraerCard);
      this.handDealerImages.push(new Image());
      this.handDealerImages[this.handDealerImages.length -1].src = extraerCard.src

    }
    destroyDealerHand() {
      delete this.handDealer;
      delete this.handDealerImages
    }

  }