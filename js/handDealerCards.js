class handDealerCards {
    constructor(ctx, posX, posY, width, height, imageName) {
      this.ctx = ctx
  
      this.pos = {
        x: posX,
        y: posY,
        initialY: posY
      }
  
      this.size = {
        width: width,
        height: height
      }

      this.imageInstance = undefined
      this.imageName = imageName

      this.init()
    }
  
    init() {
      this.imageInstance = new Image()
      this.imageInstance.src = `img/${this.imageName}`
    }
  
  
    draw() {
      
    }
  

  }