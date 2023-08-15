import Juego from "./juego.js"

const config = {
    type: Phaser.AUTO,
    width: 1600,
    height: 1200,
    scale: {
      mode: Phaser.Scale.FIT,
      autoCenter: Phaser.Scale.CENTER_BOTH,
      min: {
        width: 800,
        height: 600,
      },
      max: {
        width: 1600,
        height: 1200,
      },
    },
    physics: {
      default: "arcade",
      arcade: {
        gravity: { y: 200 },
        debug: false,
      },
    },
   
    scene: [Juego]
  };
  
  // Create a new Phaser game instance
  window.game = new Phaser.Game(config);