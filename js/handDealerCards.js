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
      this.handDealerImages =[];
      this.init()
      //console.log('mazo HandDealer size ' ,this.handDealer);
    }
  
    init() {
      // this.imageInstanceFirstCard = new Image();
      // this.imageInstanceFirstCard.src = this.imageFirstCard;
      // this.handDealer.push(deckCards[1]);
      // deckCards.splice(1, 1);

      this.handDealerImages.push(new Image());
      this.handDealerImages[0].src = deckCards[1].src;

      // this.handDealer.push(deckCards[1]);
      // deckCards.splice(1, 1);

      if(deckCards.length >= 3) {
        this.handDealer.push(deckCards[1]);
        deckCards.splice(1, 1);
      }
      deckCards.length === 0 && (deckCards = [...deckCopy]);

    }
  
  
    draw() {
      // this.ctx.drawImage(this.imageInstanceFirstCard, this.pos.x, this.pos.y, this.size.width, this.size.height);
      for (let i= 0; i < this.handDealer.length; i++){ 
        //console.log('dentro del for del dealer!!!')
      
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
    
      //console.log('valor DealerHAnd',this.handValue);
      return this.handValue;
        
    }
     
    dealerHit() {
      // console.log(deckCards)
      // this.handDealer.push(deckCards.shift());
      // this.calculateHandDealer();
      // let extraerCard = deckCards.shift();
      // this.handDealer.push(extraerCard);
      
      let extraerCard;
      deckCards.length >= 1 && (extraerCard = deckCards.shift());
      deckCards.length === 0 && (deckCards = [...deckCopy]);
      this.handDealer.push(extraerCard);
      this.handDealerImages.push(new Image());
      this.handDealerImages[this.handDealerImages.length -1].src = extraerCard.src
      //console.log('Hit Dealer ON',this.handPlayer);
      
    }
    destroyDealerHand() {
      delete this.handDealer;
      delete this.handDealerImages
    }

  }