class PlayerAmount {
    constructor(ctx, posX, posY) {
      this.ctx = ctx
      this.pos = {
        x: posX,
        y: posY
      }
      this.playerAmount = 1000;
    }
  
    draw(playerAmountTotalInst) {
      this.ctx.font = '48px roboto';
      this.ctx.fillStyle =  'red';
      this.ctx.fillText(this.playerAmount + "€ Amount.", this.pos.x, this.pos.y);
  
      this.sumPlayerCards(playerAmountTotalInst);
    }
  
    sumPlayerCards(playerAmountTotalInst) {
      this.playerAmount += playerAmountTotalInst; 
    }
  }