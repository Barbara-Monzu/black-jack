class PlayerScore {
    constructor(ctx, posX, posY) {
      this.ctx = ctx
      this.pos = {
        x: posX,
        y: posY
      }
      this.playerScoreCards = 0;
    }
  
    draw( playerScoreCardsInst) {
      this.ctx.font = '48px roboto';
      this.ctx.fillStyle =  'red';
      this.ctx.fillText(this.playerScoreCards + " hand.", this.pos.x, this.pos.y);
  
      this.sumPlayerCards(playerScoreCardsInst);
    }
  
    sumPlayerCards(playerScoreCardsInst) {
      this.playerScoreCards += playerScoreCardsInst; 
    }
  }