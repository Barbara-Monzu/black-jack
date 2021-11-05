class PlayerAmount {
    constructor(ctx, posX, posY) {
      this.ctx = ctx
      this.pos = {
        x: posX,
        y: posY
      }

    }
  
    draw(playerAmountTotalInst) {
      this.ctx.font = 'lighter 34px Cheltenham-Std';
      this.ctx.fillStyle =  'white';
      this.ctx.fillText(playerAmountTotalInst + " €", this.pos.x, this.pos.y);
      this.ctx.strokeText(playerAmountTotalInst + " €", this.pos.x, this.pos.y);
     
    }
  
  }

  class Coins {
    constructor(ctx, posX, posY, width, height, imageCoins) {
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
        this.imageCoins = imageCoins;
        this.init()
      }
      init() {
        this.imageInstance = new Image()
        this.imageInstance.src = `img/${this.imageCoins}`
      }
      draw() {
        this.ctx.drawImage(this.imageInstance, this.pos.x, this.pos.y, this.size.width, this.size.height)
      }
    }