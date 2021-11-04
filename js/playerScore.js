class PlayerScore {
    constructor(ctx, posX, posY) {
      this.ctx = ctx
      this.pos = {
        x: posX,
        y: posY
      }
     
    }
  
    draw( playerScoreCardsInst) {
      this.ctx.font = 'lighter 34px Cheltenham-Std';
      this.ctx.fillStyle =  'white';
      this.ctx.fillText(playerScoreCardsInst + " " + `${nickName}` + " hand", this.pos.x, this.pos.y);
      this.ctx.strokeText(playerScoreCardsInst + " " + `${nickName}` + " hand", this.pos.x, this.pos.y);
    }
  
 
  }