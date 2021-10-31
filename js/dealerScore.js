class DealerScore {
    constructor(ctx, posX, posY) {
      this.ctx = ctx
      this.pos = {
        x: posX,
        y: posY
      }
      this.dealerScoreCards = 0;
    }
  
    draw(dealerScoreCardsInst) {
      this.ctx.font = '48px roboto';
      this.ctx.fillStyle =  'white';
      this.ctx.fillText(this.dealerScoreCards + " hand.", this.pos.x, this.pos.y);
  
      this.sumDealerCards(dealerScoreCardsInst);
    }
  
    sumDealerCards(dealerScoreCardsInst) {
      this.dealerScoreCards += dealerScoreCardsInst; 
    }
  }