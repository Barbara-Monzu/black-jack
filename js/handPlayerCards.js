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

      this.handPlayer =[];

      this.handPlayerImages =[];
      this.init();
    
    }
  
    init() {
      
      if(deckCards.length >= 3) {
        this.handPlayerImages.push(new Image());
        this.handPlayerImages[0].src = deckCards[0].src;
        this.handPlayerImages.push(new Image());
        this.handPlayerImages[1].src = deckCards[2].src;

        this.handPlayer.push(deckCards[0]);
        this.handPlayer.push(deckCards[2]);
        deckCards.splice(2, 1);
        deckCards.splice(0, 1);
      }
      else {
        deckCards = [...deckCopy];
        suffleDeck(deckCards);

        this.handPlayerImages.push(new Image());
        this.handPlayerImages[0].src = deckCards[0].src;
        this.handPlayerImages.push(new Image());
        this.handPlayerImages[1].src = deckCards[2].src;

        this.handPlayer.push(deckCards[0]);
        this.handPlayer.push(deckCards[2]);
        deckCards.splice(2, 1);
        deckCards.splice(0, 1);
      }
    }
     
  
    draw() {
       
      for (let i= 0; i < this.handPlayer.length; i++){ 
        this.ctx.drawImage(this.handPlayerImages[i], this.pos.x +50 * i, this.pos.y, this.size.width, this.size.height); 
      }
         
    }
    
    calculateHandPlayer() {
      
      this.handValue = 0;
      this.handPlayer.forEach(playerCards => {
        if(playerCards.value  === 11 && this.handValue +11 > 21){
         this.handValue += 1;
        } else {this.handValue += playerCards.value;}
      });

      return this.handValue;
        
    }

    playerHit() {
     
      
      let extraerCard;
      deckCards.length >= 1 && (extraerCard = deckCards.shift());
      deckCards.length === 0 && (deckCards = [...deckCopy]);
     
      this.handPlayer.push(extraerCard);
      this.handPlayerImages.push(new Image());
      this.handPlayerImages[this.handPlayerImages.length -1].src = extraerCard.src

    }
    stand (){

    }
    double (){;

    }
    destroyPlayerHand() {
      delete this.handPlayer;
      delete this.handPlayerImages;
    }
     
  }

  class Button {
    constructor(ctx, posX, posY, width, height, imageButton) {
        this.ctx = ctx
        this.pos = {
          x: posX,
          y: posY
        }
        this.size = {
          width: width,
          height: height
        }
        this.imageInstance = undefined,
        this.imageButton = imageButton;
        this.imagebet = undefined,
        this.init()
      }
      init() {
        this.imageInstance = new Image()
        this.imageInstance.src = `img/${this.imageButton}`
      }
      draw() {
        this.ctx.drawImage(this.imageInstance, this.pos.x, this.pos.y, this.size.width, this.size.height)
      }
      clickButtonHit(pointX,pointY,rectX,rectY,rectWidth,rectHeight) {
        if (rectX <= pointX && rectX + rectWidth >= pointX && rectY <= pointY && rectY + rectHeight >= pointY){
         
          return true;
        }
      }
      clickBetclass(pointX,pointY,rectX,rectY,rectWidth,rectHeight) {
          if (rectX <= pointX && rectX + rectWidth >= pointX && rectY <= pointY && rectY + rectHeight >= pointY) {
            
            return true;
          }
      }
      clickStandclass(pointX,pointY,rectX,rectY,rectWidth,rectHeight) {
          if (rectX <= pointX && rectX + rectWidth >= pointX && rectY <= pointY && rectY + rectHeight >= pointY) {
           
            return true;
          }
      }
      clickClearclass(pointX,pointY,rectX,rectY,rectWidth,rectHeight) {
          if (rectX <= pointX && rectX + rectWidth >= pointX && rectY <= pointY && rectY + rectHeight >= pointY) {
          
            return true;
          }
      }
       
      
    }