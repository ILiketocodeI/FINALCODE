var character
var person
var enemy
var exitDoor
var celebrate
var getKeyAnimation
var deathAnimation
var personWalk
var personAnimation
var centerCollisionFlag = true;
var Code = 0;
var Counter = 0;
var exitCode = "";
var winningPattern = ",2,3,4,1"
var Code1Image
var Code2Image
var Code3Image
var Code4Image
var backgroundMusic
var SoundEffect
var WallGroup

function preload() {

  person = loadAnimation("PlayerCharacterTest.png")



  personAnimation = loadAnimation("PlayerCharacterWalkTest.png", "PlayerCharacterWalkTest.png",
    "PlayerCharacterWalkTest.png", "PlayerCharacterTest.png", "PlayerCharacterTest.png",
    "PlayerCharacterTest.png", "PlayerCharacterWalkTwoTest.png", "PlayerCharacterWalkTwoTest.png",
    "PlayerCharacterWalkTwoTest.png", "PlayerCharacterTest.png", "PlayerCharacterTest.png",
    "PlayerCharacterTest.png")

  enemy = loadImage("Enemy.png")
  exitDoor = loadImage("ExitDoor.png")
  celebrate = loadImage("PlayerCharacterCelebrate.png")
  deathAnimation = loadImage("PlayerCharacterDeath.png")

  Code1Image = loadImage("Code1.png")
  Code2Image = loadImage("Code2.png")
  Code3Image = loadImage("Code3.png")
  Code4Image = loadImage("Code4.png")

  backgroundMusic = loadSound("Background Music.mp3")
  SoundEffect = loadSound("Pop Sound.mp3")

}


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  WallGroup = new Group()

  backgroundMusic.play()
  backgroundMusic.setVolume(0.3)
  character = createSprite(100, 100, 10, 10)
  character.scale = 0.17
  character.addAnimation("Up", personAnimation)
  character.addAnimation("person", person)

  character.changeAnimation("person", person)

  character.setCollider("rectangle", 0, 0, 200, 400)

  exitDoor = createSprite(100, 100, 30, 60)

  wall1 = createSprite(140, 150, 20, 500)
  wall1.shapeColor = ("green")
  WallGroup.add(wall1)
  wall2 = createSprite(50, 150, 20, 1300)
  wall2.shapeColor = ("green")
  WallGroup.add(wall2)
  wall3 = createSprite(380, 390, 500, 20)
  wall3.shapeColor = ("green")
  WallGroup.add(wall3)
  wall4 = createSprite(380, 490, 500, 20)
  wall4.shapeColor = ("green")
  WallGroup.add(wall4)
  wall5 = createSprite(140, 590, 20, 200)
  wall5.shapeColor = ("green")
  WallGroup.add(wall5)
  wall6 = createSprite(380, 690, 500, 20)
  wall6.shapeColor = ("green")
  WallGroup.add(wall6)
  wall7 = createSprite(340, 790, 580, 20)
  wall7.shapeColor = ("green")
  WallGroup.add(wall7)
  wall8 = createSprite(620, 300, 20, 160)
  wall8.shapeColor = ("green")
  WallGroup.add(wall8)
  wall9 = createSprite(450, 230, 350, 20)
  wall9.shapeColor = ("green")
  WallGroup.add(wall9)
  wall10 = createSprite(285, 160, 20, 140)
  wall10.shapeColor = ("green")
  WallGroup.add(wall10)
  wall11 = createSprite(450, 100, 350, 20)
  wall11.shapeColor = ("green")
  WallGroup.add(wall11)
  wall12 = createSprite(620, 600, 20, 200)
  wall12.shapeColor = ("green")
  WallGroup.add(wall12)
  wall13 = createSprite(615, 52, 20, 105)
  wall13.shapeColor = ("green")
  WallGroup.add(wall13)
  wall14 = createSprite(750, 52, 20, 105)
  wall14.shapeColor = ("green")
  WallGroup.add(wall14)
  wall15 = createSprite(915, 100, 350, 20)
  wall15.shapeColor = ("green")
  WallGroup.add(wall15)
  wall16 = createSprite(683, 100, 155, 20)
  wall16.shapeColor = ("black")
  WallGroup.add(wall16)
  wall17 = createSprite(1300, 100, 700, 20)
  wall17.shapeColor = ("green")
  WallGroup.add(wall17)
  wall18 = createSprite(1640, 300, 20, 400)
  wall18.shapeColor = ("green")
  WallGroup.add(wall18)
  wall19 = createSprite(1300, 230, 400, 20)
  wall19.shapeColor = ("green")
  WallGroup.add(wall19)
  wall20 = createSprite(1640, 600, 20, 400)
  wall20.shapeColor = ("green")
  WallGroup.add(wall20)
  wall21 = createSprite(1500, 420, 20, 400)
  wall21.shapeColor = ("green")
  WallGroup.add(wall21)
  wall22 = createSprite(1100, 420, 20, 400)
  wall22.shapeColor = ("green")
  WallGroup.add(wall22)
  wall23 = createSprite(1300, 610, 400, 20)
  wall23.shapeColor = ("green")
  WallGroup.add(wall23)
  wall24 = createSprite(1130, 790, 1020, 20)
  wall24.shapeColor = ("green")
  WallGroup.add(wall24)

  generator = createSprite(850, 450, 50, 50)
  generator.shapeColor = ("grey")

  wall16barrier = createSprite(683, 101, 170, 20)
  wall16barrier.visible = false;

  button1 = createSprite(100, 750, 40, 40)
  button1.shapeColor = ("blue")
  button1.visible = false;

  button2 = createSprite(330, 170, 40, 40)
  button2.shapeColor = ("blue")
  button2.visible = false;

  button3 = createSprite(1590, 150, 40, 40)
  button3.shapeColor = ("blue")
  button3.visible = false;

  button4 = createSprite(1590, 750, 40, 40)
  button4.shapeColor = ("blue")
  button4.visible = false;

  lazer1 = createSprite(1450, 420, 20, 360)
  lazer1.shapeColor = ("red")
  lazer1.visible = false;

  lazer2 = createSprite(1400, 420, 20, 360)
  lazer2.shapeColor = ("red")
  lazer2.visible = false;

  lazer3 = createSprite(1350, 420, 20, 360)
  lazer3.shapeColor = ("red")
  lazer3.visible = false;

  lazer4 = createSprite(1300, 420, 20, 360)
  lazer4.shapeColor = ("red")
  lazer4.visible = false;

  CodeInput1 = createSprite(1150, 300, 50, 50)
  CodeInput1.shapeColor = ("red")
  CodeInput2 = createSprite(1220, 300, 50, 50)
  CodeInput2.shapeColor = ("yellow")
  CodeInput3 = createSprite(1150, 550, 50, 50)
  CodeInput3.shapeColor = ("purple")
  CodeInput4 = createSprite(1220, 550, 50, 50)
  CodeInput4.shapeColor = ("orange")

  CodeInput1.visible = false;
  CodeInput2.visible = false;
  CodeInput3.visible = false;
  CodeInput4.visible = false;

  Code1 = createSprite(90, 250, 40, 40)
  Code1.addImage(Code1Image)
  Code1.scale = 0.2
  Code1.visible = false;
  Code2 = createSprite(330, 750, 40, 40)
  Code2.addImage(Code2Image)
  Code2.scale = 0.2
  Code2.visible = false;
  Code3 = createSprite(1000, 500, 40, 40)
  Code3.addImage(Code3Image)
  Code3.scale = 0.2
  Code3.visible = false;
  Code4 = createSprite(1580, 400, 40, 40)
  Code4.addImage(Code4Image)
  Code4.scale = 0.2
  Code4.visible = false;

}





function draw() {

  background("white")

  character.changeAnimation("person", person)
  if (keyDown("up")) {
    character.position.y -= 4
    character.changeAnimation("Up", personAnimation)
  } else if (keyDown("down")) {
    character.position.y += 4
    character.changeAnimation("Up", personAnimation)
  }

  if (keyDown("left")) {
    character.position.x -= 4
    character.changeAnimation("Up", personAnimation)
  } else if (keyDown("right")) {
    character.position.x += 4
    character.changeAnimation("Up", personAnimation)
  }




  character.collide(wall1)
  character.collide(wall2)
  character.collide(wall3)
  character.collide(wall4)
  character.collide(wall5)
  character.collide(wall6)
  character.collide(wall7)
  character.collide(wall8)
  character.collide(wall9)
  character.collide(wall10)
  character.collide(wall11)
  character.collide(wall12)
  character.collide(wall13)
  character.collide(wall14)
  character.collide(wall15)
  character.collide(wall16)
  character.collide(wall17)
  character.collide(wall18)
  character.collide(wall19)
  character.collide(wall20)
  character.collide(wall21)
  character.collide(wall22)
  character.collide(wall23)
  character.collide(wall24)















  if (character.collide(wall16barrier)) {
    character.position.y += 20

  }

  if (character.collide(generator)) {
    SoundEffect.play()
    generator.position.x = windowWidth + 200
    generator.remove()
    centerCollisionFlag = false;

    button1.visible = true;
    button2.visible = true;
    button3.visible = true;
    button4.visible = true;

    wall21.visible = false;
    wall21.setCollider("rectangle", 0, 0, 0, 0)

    lazer1.visible = true;
    lazer2.visible = true;
    lazer3.visible = true;
    lazer4.visible = true;

    CodeInput1.visible = true;
    CodeInput2.visible = true;
    CodeInput3.visible = true;
    CodeInput4.visible = true;

    enemy1 = createSprite(500, 200, 20, 20)
    enemy2 = createSprite(80, 400, 20, 20)
    enemy3 = createSprite(1200, 700, 20, 20)
    enemy4 = createSprite(500, 460, 20, 20)
    enemy5 = createSprite(80, 700, 20, 20)
    enemy6 = createSprite(1400, 740, 20, 20)
    enemy7 = createSprite(500, 200, 20, 20)
    enemy8 = createSprite(340, 130, 20, 20)
    enemy9 = createSprite(1000, 250, 20, 20)
    enemy10 = createSprite(650, 310, 20, 20)
    enemy11 = createSprite(80, 400, 20, 20)
    enemy12 = createSprite(1500, 700, 20, 20)

    
    enemy1.velocity.y = 3
    WallGroup.collide(enemy1,invertVelocity)

  }


  if (centerCollisionFlag) {

    text("𝑺𝒑𝒂𝒘𝒏 𝑩𝒖𝒕𝒕𝒐𝒏𝒔", 810, 400)
    text("▼", 845, 415)
  }



  if (character.collide(button1)) {

    SoundEffect.play()
    button1.setCollider("rectangle", 0, 0, 0, 0)
    button1.remove()
    button1.visible = false;
    lazer1.setCollider("rectangle", 0, 0, 0, 0)
    lazer1.remove()


    Code++


  }

  if (character.collide(button2)) {
    SoundEffect.play()
    button2.setCollider("rectangle", 0, 0, 0, 0)
    button2.remove()
    button2.visible = false;
    lazer2.setCollider("rectangle", 0, 0, 0, 0)
    lazer2.remove()


    Code++


  }

  if (character.collide(button3)) {
    SoundEffect.play()
    button3.setCollider("rectangle", 0, 0, 0, 0)
    button3.remove()
    button3.visible = false;
    lazer3.setCollider("rectangle", 0, 0, 0, 0)
    lazer3.remove()


    Code++


  }

  if (character.collide(button4)) {
    SoundEffect.play()
    button4.setCollider("rectangle", 0, 0, 0, 0)
    button4.remove()
    button4.visible = false;
    lazer4.setCollider("rectangle", 0, 0, 0, 0)

    lazer4.remove()


    Code++


  }


  if (Code == 4) {
    if (button1.visible || button2.visible || button3.visilble || button4.visible) {
      Code = 3;

    } else {
      Code1.visible = true;
      Code2.visible = true;
      Code3.visible = true;
      Code4.visible = true;

    }

  }

  if (character.collide(CodeInput1)) {
    SoundEffect.play()
    CodeInput1.setCollider("rectangle", 0, 0, 0, 0)
    CodeInput1.remove()
    exitCode = exitCode + ",1"

    Counter++

  }

  if (character.collide(CodeInput2)) {
    SoundEffect.play()
    CodeInput2.setCollider("rectangle", 0, 0, 0, 0)
    CodeInput2.remove()
    exitCode = exitCode + ",2"
    Counter++

  }

  if (character.collide(CodeInput3)) {
    SoundEffect.play()
    CodeInput3.setCollider("rectangle", 0, 0, 0, 0)
    CodeInput3.remove()
    exitCode = exitCode + ",3"
    Counter++

  }

  if (character.collide(CodeInput4)) {
    SoundEffect.play()
    CodeInput4.setCollider("rectangle", 0, 0, 0, 0)
    CodeInput4.remove()
    exitCode = exitCode + ",4"
    Counter++

  }

  if (Counter == 4) {

    if (exitCode == winningPattern) {
      wall16.setCollider("rectangle", 0, 0, 0, 0)
      wall16.remove()
      wall16barrier.setCollider("rectangle", 0, 0, 0, 0)
    }



  }






  drawSprites()

}


function invertVelocity(spriteA,spriteB){
  spriteB.velocity.x = -spriteB.velocity.x 
  spriteB.velocity.y = -spriteB.velocity.y
  console.log("check")
}


