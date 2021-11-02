class DealerScore {
    constructor(ctx, posX, posY) {
      this.ctx = ctx
      this.pos = {
        x: posX,
        y: posY
      }
  
    }
  
    draw(dealerScoreCardsInst) {
      this.ctx.font = '48px roboto';
      this.ctx.fillStyle =  'white';
      this.ctx.fillText(dealerScoreCardsInst + " Dealer hand.", this.pos.x, this.pos.y);
  
    }
  

  }