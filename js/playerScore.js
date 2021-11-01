class PlayerScore {
    constructor(ctx, posX, posY) {
      this.ctx = ctx
      this.pos = {
        x: posX,
        y: posY
      }
     
    }
  
    draw( playerScoreCardsInst) {
      this.ctx.font = '48px roboto';
      this.ctx.fillStyle =  'red';
      this.ctx.fillText(playerScoreCardsInst + " hand.", this.pos.x, this.pos.y);
  
    }
  
 
  }