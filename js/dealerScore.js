class DealerScore {
    constructor(ctx, posX, posY) {
      this.ctx = ctx
      this.pos = {
        x: posX,
        y: posY
      }
  
    }
  
    draw(dealerScoreCardsInst) { 
      this.ctx.font = 'lighter 34px Cheltenham-Std';
      this.ctx.fillStyle =  '#b4171e';
      this.ctx.fillText(dealerScoreCardsInst + " Dealer hand", this.pos.x, this.pos.y);
      //this.ctx.strokeText(dealerScoreCardsInst + " Dealer hand", this.pos.x, this.pos.y);
    }
  

  }