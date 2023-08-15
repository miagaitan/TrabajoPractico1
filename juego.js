export default class Juego extends Phaser.Scene {
    constructor() {
        super("Juego");
    }
    init (){
        this.score = 0
    }

    preload () {
        this.load.image("Bar", "./assets/images/barra.png");
        this.load.image("Ball", "./assets/images/pelota.png");
        this.load.image("Obstacle", "./assets/images/obstaculo.png");
        this.load.image("Fondo", "./assets/images/fondo.jpg");
        
    }

    create () {

      const randomColor = Phaser.Display.Color.RandomRGB();
      this.cameras.main.setBackgroundColor(randomColor);

        this.ball = this.physics.add.image(800, 0, "Ball");
        this.ball.setCollideWorldBounds(true);
        this.ball.setScale(0.7);
        this.ball.setCircle(57, 0, 0)
        this.ball.setBounce(1);
        this.ballVelocity = 200;
        this.ball.setVelocity(this.ballVelocity, this.ballVelocity);

        this.bar = this.physics.add.image(800, 1000, "Bar");
        this.bar.setCollideWorldBounds(true);
        this.bar.setScale(0.5);
        this.bar.setImmovable();
        this.bar.body.allowGravity = false;
        this.physics.add.overlap(this.ball, this.bar)

  this.physics.add.collider(
    this.ball,
    this.bar,
    this.bouceBall,
    null,
    this
  );

  this.obstacle = this.physics.add.staticGroup ();


  this.physics.add.collider(
    this.ball,
    this.obstacle
  );

        this.cursors = this.input.keyboard.createCursorKeys();

        this.score = 0;
    this.scoreText = this.add.text(100, 40,  "Score: " + this.score, {
      fontSize: "50px",
      fontStyle: "bold",
      fill: "#ffffff",
      stroke: "#000000",
    strokeThickness: 6,

    
      

    });

    this.level = 1;
      this.levelText = this.add.text(1250, 40, "Level: " + this.level, {
    fontSize: "50px",
      fontStyle: "bold",
      fill: "#ffffff",
      stroke: "#000000",
    strokeThickness: 6,
      
      
    }); }

    nextLevel () {
    this.level++;
    this.levelText.setText("Level: " + this.level);

    this.ballVelocity = this.ballVelocity * 1.1;
    this.bar.setPosition(800, 1000);
    this.ball.setPosition(800, 0);
    this.ball.setVelocity(this.ballVelocity, this.ballVelocity);
    this.score = 0;
    this.scoreText.setText("Score: " + this.score);
    
    const randomColor = Phaser.Display.Color.RandomRGB();
      this.cameras.main.setBackgroundColor(randomColor);

      let randomObstaclex = Phaser.Math.Between(100, 1400);
    let randomObstacley = Phaser.Math.Between(200, 500);
    let randomObstacleScale = Phaser.Math.Between(0.9, 1);
  
      this.obstacle.create(randomObstaclex, randomObstacley, "Obstacle").setScale(randomObstacleScale).refreshBody();

    
    }

    update () {
        if (this.cursors.left.isDown) {
            this.bar.setVelocityX(-280);
          }
          
          else if (this.cursors.right.isDown) {
            this.bar.setVelocityX(280);
          }
          else {
            this.bar.setVelocityX(0);

            
          }
        if (this.score >= 10) {
          this.nextLevel ();


        }
        if (this.level >=20) {
          this.Win();
      }
    }
    Win() {
      this.add.text(600, 500, "You win!", {
        fontSize: '80px',
        fill: '#ffffff',
        align: "center",
    });
    this.ball.disableBody(true, true);
    this.bar.disableBody(true, true);
    }  

    bouceBall (ball, bar) {
        this.score += 1;
        this.scoreText.setText ("Score: " + this.score);
    }
    }
  
