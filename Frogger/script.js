

var a;
var leftCar = new Image();
leftCar.src =  "resources/left car.png";

var rightCar = new Image();
rightCar.src =  "resources/right car.png";

var frog = new Image();
frog.src =  "resources/frog.png";

var log = new Image();
log.src =  "resources/log.png";

var rightFrog = new Image();
rightFrog.src =  "resources/frog.png";

var leftFrog = new Image();
leftFrog.src =  "resources/frog.png";

var middleFrog = new Image();
middleFrog.src =  "resources/frog.png";

var pictRightArray = [];
var pictLeftArray = [];
var pictRightArray2 = [];
var leftLogs = [];
var rightLogs = [];
var frogGuy;

var carAmount;
var carAmount2;
var carAmount3;
var logAmount;
var frogAmount;
var level = 1;

var lives = 3;
var score = 0;
var numFinishedFrogs = 0;

var rightLogCollision = false;
var leftLogCollision = false;
var waterCollision = false;

function initialize() {

    carAmount = 1.5;
    carAmount2 = 1;
    carAmount3 = 2;

    logAmount = 1;
    frogAmount = 30;
    pictRightArray.push(createImage("resources/right car.png","Car",0,575,50,50));
    pictRightArray.push(createImage("resources/right car.png","Car",300,575,50,50));

    pictLeftArray.push(createImage("resources/left car.png","Car",150,500,50,50));
    pictLeftArray.push(createImage("resources/left car.png","Car",500,500,50,50));

    pictRightArray2.push(createImage("resources/right car.png","Car",100,425,50,50));
    pictRightArray2.push(createImage("resources/right car.png","Car",400,425,50,50));


    rightLogs.push(createImage("resources/log.png","Log",0,300,100,25));
    rightLogs.push(createImage("resources/log.png","Log",150,300,100,25));
    rightLogs.push(createImage("resources/log.png","Log",300,300,100,25));
    rightLogs.push(createImage("resources/log.png","Log",450,300,100,25));

    rightLogs.push(createImage("resources/log.png","Log",0,175,100,25));
    rightLogs.push(createImage("resources/log.png","Log",150,175,100,25));
    rightLogs.push(createImage("resources/log.png","Log",300,175,100,25));
    rightLogs.push(createImage("resources/log.png","Log",450,175,100,25));

    rightLogs.push(createImage("resources/log.png","Log",50,240,100,25));
    rightLogs.push(createImage("resources/log.png","Log",275,240,100,25));
    rightLogs.push(createImage("resources/log.png","Log",500,240,100,25));

    rightLogs.push(createImage("resources/log.png","Log",50,100,100,25));
    rightLogs.push(createImage("resources/log.png","Log",275,100,100,25));
    rightLogs.push(createImage("resources/log.png","Log",500,100,100,25));

    frogGuy = (createImage(frog.src,"Frog",230,650,50,50));


    drawBackground();
    drawYellowLines();
    drawWater();
    drawFinish();
    drawSnake();

    var ctx = document.getElementById("myCanvas").getContext("2d");

    for(i=0;i<pictRightArray.length;i++){
        ctx.drawImage(pictRightArray[i],pictRightArray[i].left,pictRightArray[i].top,pictRightArray[i].width,pictRightArray[i].height);
    }
    for(i=0;i<pictLeftArray.length;i++){
        ctx.drawImage(pictLeftArray[i],pictLeftArray[i].left,pictLeftArray[i].top,pictLeftArray[i].width,pictLeftArray[i].height);
    }
    for(i=0;i<pictRightArray2.length;i++){
        ctx.drawImage(pictRightArray2[i],pictRightArray2[i].left,pictRightArray2[i].top,pictRightArray2[i].width,pictRightArray2[i].height);
    }
    for(i=0;i<rightLogs.length;i++){
        ctx.drawImage(rightLogs[i],rightLogs[i].left,rightLogs[i].top,rightLogs[i].width,rightLogs[i].height);
    }

    for(i=0;i<leftLogs.length;i++){
        ctx.drawImage(leftLogs[i],leftLogs[i].left,leftLogs[i].top,leftLogs[i].width,leftLogs[i].height);
    }


    ctx.drawImage(frogGuy,frogGuy.left,frogGuy.top,frogGuy.width,frogGuy.height);
    blackSide();
    drawPowerUpBlackSide();
    highestLevel();
    highScore();
    drawLives();
    currentScore();


}
var createImage = function(src,title,xcoord,ycoord,wNum,hNum) {
    var img = new Image();
    img.src = src;
    img.alt = title;
    img.title = title;
    img.left = xcoord;
    img.top = ycoord;
    img.width = wNum;
    img.height = hNum;

    return img;
};
waterX = 0;
waterY = 0;
waterWidth = 500;
waterHeight = 330;
function drawWater(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.fillStyle = "#0000FF";
    ctx.fillRect(waterX,waterY,waterWidth,waterHeight);
}



function startAnimation() {
    animate();
}

function stopAnimation() {
    cancelAnimationFrame(a);
}

function animate() {
    a = requestAnimationFrame(animate);
    drawBackground();
    drawYellowLines();
    drawLevelName();
    drawWater();
    drawRightCars();
    drawLeftCars();
    drawRightLogs();
    drawFinish();
    drawFrogGuy();
    drawPowerUp();
    drawSnake();
    blackSide();
    drawPowerUpBlackSide();
    highestLevel();
    highScore();
    currentScore();
    drawLives();
    checkCollision();
    checkCarWallCollision();
    powerUpCollision();
    checkLogCollision();
    snakeWallCollision();
    checkFinish();
    checkFrogSnakeCollision();
    checkLogToFrogCollision();
    checkFrogWallCollisionWhileLog();
    checkWinner();
    drawFinishedFrogs();
    changeLvl();

}

var snake = new Image();
snake.src =  "resources/snake.png";
var snakeX = -100;
var snakeY = 350;
var snakeW = 70;
var snakeH = 30;
var snakeAmount = 2.5;

function drawYellowLines(){

    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.fillStyle = "#FFFF00";
    for(i=0;i<1000;i+=100){
        ctx.fillRect(i,565,15,5)
    }

    for(i=0;i<1000;i+=100){
        ctx.fillRect(i,490,15,5)
    }

    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(0,635,650,15)
    ctx.fillRect(0,395,650,15)


}


function drawSnake(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    if(level > 1){
        ctx.drawImage(snake,snakeX,snakeY,snakeW,snakeH);
        snakeX+=snakeAmount;

    }
}

function snakeWallCollision(){
    if(snakeX > 650){
        snakeX = -100
    }
}

function drawLevelName(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.font = "30px Arial";
    ctx.fillStyle = "#000000";
    ctx.fillText("Level " + level ,200,375);
}

function drawBackground() {
    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.fillStyle = "#AAAAAA";
    ctx.fillRect(0,0,window.innerWidth,window.innerHeight);

    ctx.fillStyle = "#00FF00";
    ctx.fillRect(0,320,500,80);

    ctx.fillStyle = "#00FF00";
    ctx.fillRect(0,650,500,50);



}

var hearts = new Image();
hearts.src =  "resources/heart.png";

function drawLives(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    if(lives === 3){
        ctx.drawImage(hearts,530,75,30,30);
        ctx.drawImage(hearts,565,75,30,30);
        ctx.drawImage(hearts,600,75,30,30);
    }
    else if(lives === 2){
        ctx.drawImage(hearts,530,75,30,30);
        ctx.drawImage(hearts,565,75,30,30);
    }
    else if(lives === 1){
        ctx.drawImage(hearts,530,75,30,30);
    }
    else if(lives > 3){
        ctx.drawImage(hearts,545,75,30,30);
        ctx.font = "30px Arial";
        ctx.fillStyle = "#FFFFFF";
        ctx.fillText("x" + lives ,580,100);
    }
}

var lFinishX = 0;
var lFinishY = 0;
var lFinishW = 100;
var lFinishH = 75;

var mFinishX = 200;
var mFinishY = 0;
var mFinishW = 100;
var mFinishH = 75;

var rFinishX = 400;
var rFinishY = 0;
var rFinishW = 100;
var rFinishH = 75;

var changeLevel = false;

function checkWinner(){

    if(numFinishedFrogs === 3){
        changeLevel = true;
        frogGuy.left = 225;
        frogGuy.top = 650;
        numFinishedFrogs = 0;


    }
}

function drawPowerUpBlackSide(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.drawImage(hearts,525,315,30,30);
    ctx.drawImage(speed,525,270,30,30);

    ctx.font = "15px Arial";
    ctx.fillStyle = "#FFFFFF";
    ctx.fillText("Speed Up",560,290);
    ctx.fillText("Extra Life",565,335);
    ctx.fillStyle = "#FF0000";
    ctx.fillText("Power Ups",540,245);
}

var extraRightCar = 0;
var extraLeftCar = 0;

var speed = new Image();
speed.src =  "resources/lightning.png";
var speedX = Math.floor((Math.random() * 470) + 1);
var speedY = Math.floor((Math.random() * 670) + 1);
var speedW = 40;
var speedH = 40;

var exLife = new Image();
exLife.src =  "resources/heart.png";
var exLifeX = Math.floor((Math.random() * 470) + 1);
var exLifeY = Math.floor((Math.random() * 670) + 1);
var exLifeW = 40;
var exLifeH = 40;

var randomPower = Math.floor((Math.random() * 10) + 1);

function drawPowerUp(){
    var ctx = document.getElementById("myCanvas").getContext("2d");


    var remainder = randomPower % 2;
    if(remainder === 0){
        ctx.drawImage(speed,speedX,speedY,speedW,speedH);
    }
    else{
        ctx.drawImage(exLife,exLifeX,exLifeY,exLifeW,exLifeH);
    }





}

function powerUpCollision(){
    if(frogGuy.top < speedY + speedH && frogGuy.left < speedX + speedW && frogGuy.left + frogGuy.width > speedX && frogGuy.top + frogGuy.height > speedY){
        frogAmount+=20;
        speedX = -100;
    }

    else if(frogGuy.top < exLifeY + exLifeH && frogGuy.left < exLifeX + exLifeW && frogGuy.left + frogGuy.width > exLifeX && frogGuy.top + frogGuy.height > exLifeY){
        lives++;
        exLifeX = -100;
    }
}


function changeLvl(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    if(changeLevel === true){
        carAmount+=0.5;
        carAmount2+=0.5;
        carAmount3+=0.5;
        logAmount++;
        frogAmount = 30;
        speedX = Math.floor((Math.random() * 470) + 1);
        speedY = Math.floor((Math.random() * 670) + 1);
        exLifeX = Math.floor((Math.random() * 470) + 1);
        exLifeY = Math.floor((Math.random() * 670) + 1);
        randomPower = Math.floor((Math.random() * 10) + 1);
        level++;
        for(i=0;i<3;i++){
            frogFinish[i] = false;
        }

        ctx.fillRect(30,10,50,50);
        ctx.fillRect(230,10,50,50);
        ctx.fillRect(430,10,50,50);

        extraRightCar+=100;
        extraLeftCar+= 250;

        var randomLog = Math.floor((Math.random() * 14) + 1);

        pictRightArray.push(createImage("resources/right car.png","Car",extraRightCar,575,50,50));
        pictLeftArray.push(createImage("resources/left car.png","Car",extraLeftCar,500,50,50));
        rightLogs.splice(randomLog,1);


        changeLevel = false;

    }
}

var high = 0;

function highestLevel(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    if(level > high){
        high = level
    }
    ctx.font = "15px Arial";
    ctx.fillStyle = "#FFFFFF";
    ctx.fillText("Top Level: " + high ,540,30);
}

var highS = 0;

function highScore(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    if(score > highS){
        highS = score
    }
    ctx.font = "15px Arial";
    ctx.fillStyle = "#FFFFFF";
    ctx.fillText("Highscore: " + highS ,530,160);
}

function currentScore(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.font = "15px Arial";
    ctx.fillStyle = "#FFFFFF";
    ctx.fillText("Score: " + score ,540,200);
}

function restartGame(){
    var ctx = document.getElementById("myCanvas").getContext("2d");

    frogGuy.left = 225;
    frogGuy.top = 650;
    ctx.drawImage(frogGuy,frogGuy.left,frogGuy.top,frogGuy.width,frogGuy.height);
    score = 0;
    lives = 3;
    carAmount = 1.5;
    carAmount2 = 1;
    carAmount3 = 2;
    logAmount = 1;
    frogAmount = 30;
    speedX = Math.floor((Math.random() * 470) + 1);
    speedY = Math.floor((Math.random() * 670) + 1);
    exLifeX = Math.floor((Math.random() * 470) + 1);
    exLifeY = Math.floor((Math.random() * 670) + 1);
    randomPower = Math.floor((Math.random() * 10) + 1);
    frogFinish[0] = false;
    frogFinish[1] = false;
    frogFinish[2] = false;
    level = 1;

    ctx.fillRect(30,10,50,50);
    ctx.fillRect(230,10,50,50);
    ctx.fillRect(430,10,50,50);

    extraLeftCar = 0;
    extraRightCar = 0;
    pictLeftArray = [];
    pictRightArray = [];
    rightLogs = [];


    initialize();

    changeLevel = false;
}

function drawFinish(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.fillStyle = "#00FF00";
    ctx.fillRect(lFinishX,lFinishY,lFinishW,lFinishH);

    ctx.fillStyle = "#00FF00";
    ctx.fillRect(mFinishX,mFinishY,mFinishW,mFinishH);

    ctx.fillStyle = "#00FF00";
    ctx.fillRect(rFinishX,rFinishY,rFinishW,rFinishH);
}

function drawFinishedFrogs(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    if(frogFinish[0]=== true){
        ctx.drawImage(leftFrog,30,10,50,50);
    }
    if(frogFinish[1]=== true){
        ctx.drawImage(leftFrog,230,10,50,50);
    }
    if(frogFinish[2]=== true){
        ctx.drawImage(leftFrog,430,10,50,50);
    }
}

var frogFinish = [false,false,false];
function checkFinish() {
    var ctx = document.getElementById("myCanvas").getContext("2d");

    if(frogGuy.top < rFinishY + rFinishH && frogGuy.left < rFinishX + rFinishW && frogGuy.left + frogGuy.width > rFinishX && frogGuy.top + frogGuy.height > rFinishY && waterCollision === true){
        waterCollision = false;
        if(frogFinish[2]=== false) {
            score += 100;
            numFinishedFrogs++;
            frogFinish[2] = true;
            frogGuy.left = 225;
            frogGuy.top = 650;
        }
        else{
            frogGuy.left = 225;
            frogGuy.top = 650;
        }

    }

    if(frogGuy.top < lFinishY + lFinishH && frogGuy.left < lFinishX + lFinishW && frogGuy.left + frogGuy.width > lFinishX && frogGuy.top + frogGuy.height > lFinishY && waterCollision === true){
        waterCollision = false;
        if(frogFinish[0]=== false) {
            score += 100;
            numFinishedFrogs++;
            frogFinish[0] = true;
            frogGuy.left = 225;
            frogGuy.top = 650;
        }
        else{
            frogGuy.left = 225;
            frogGuy.top = 650;
        }

    }

    if(frogGuy.top < mFinishY + mFinishH && frogGuy.left < mFinishX + mFinishW && frogGuy.left + frogGuy.width > mFinishX && frogGuy.top + frogGuy.height > mFinishY && waterCollision === true){
        waterCollision = false;
        if(frogFinish[1]=== false) {
            score += 100;
            numFinishedFrogs++;
            frogFinish[1] = true;
            frogGuy.left = 225;
            frogGuy.top = 650;
        }
        else{
            frogGuy.left = 225;
            frogGuy.top = 650;
        }

    }

}


function checkCarWallCollision(){
    for(i=0;i<pictRightArray.length;i++) {
        if (pictRightArray[i].left >= 500) {
            pictRightArray[i].left = -100
        }
    }

    for(i=0;i<pictRightArray2.length;i++) {
        if (pictRightArray2[i].left >= 500) {
            pictRightArray2[i].left = -100
        }
    }

    for(i=0;i<pictLeftArray.length;i++) {
        if (pictLeftArray[i].left + pictLeftArray[i].width <= 0) {
            pictLeftArray[i].left = 600
        }
    }
}

function drawRightCars(){
    var ctx = document.getElementById("myCanvas").getContext("2d");

    for(i=0;i<pictRightArray.length;i++){
        ctx.drawImage(pictRightArray[i],pictRightArray[i].left,pictRightArray[i].top,pictRightArray[i].width,pictRightArray[i].height);
        pictRightArray[i].left += carAmount;

    }

    for(i=0;i<pictRightArray2.length;i++){
        ctx.drawImage(pictRightArray2[i],pictRightArray2[i].left,pictRightArray2[i].top,pictRightArray2[i].width,pictRightArray2[i].height);
        pictRightArray2[i].left += carAmount3;

    }

}

function drawLeftCars(){

    var ctx = document.getElementById("myCanvas").getContext("2d");
    for(i=0;i<pictLeftArray.length;i++){
        ctx.drawImage(pictLeftArray[i],pictLeftArray[i].left,pictLeftArray[i].top,pictLeftArray[i].width,pictLeftArray[i].height);
        pictLeftArray[i].left -= carAmount2;

    }
}

function drawFrogGuy(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.drawImage(frogGuy,frogGuy.left,frogGuy.top,frogGuy.width,frogGuy.height)
}

var playerContinue;

function subtractLives(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    lives--;

    if(lives === 0){

        playerContinue = prompt("Would you like to continue?(Yes/No)");

        if(playerContinue === "No") {


            frogGuy.left = 225;
            frogGuy.top = 650;
            score = 0;
            lives = 3;
            carAmount = 1.5;
            carAmount2 = 1;
            carAmount3 = 2;
            logAmount = 1;
            frogFinish[0] = false;
            frogFinish[1] = false;
            frogFinish[2] = false;
            level = 1;
            frogAmount = 30;
            speedX = Math.floor((Math.random() * 470) + 1);
            speedY = Math.floor((Math.random() * 670) + 1);
            exLifeX = Math.floor((Math.random() * 470) + 1);
            exLifeY = Math.floor((Math.random() * 670) + 1);
            randomPower = Math.floor((Math.random() * 10) + 1);
            ctx.fillRect(30, 10, 50, 50);
            ctx.fillRect(230, 10, 50, 50);
            ctx.fillRect(430, 10, 50, 50);

            changeLevel = false;

            extraLeftCar = 0;
            extraRightCar = 0;
            pictLeftArray = [];
            pictRightArray = [];
            rightLogs = [];
            leftLogs = [];

            initialize();

            ctx.font = "50px Arial";
            ctx.fillStyle = "#FF0000";
            ctx.fillText("Game Over", 130, 205);

        }
        else if(playerContinue === "Yes"){

            frogGuy.left = 225;
            frogGuy.top = 650;
            speedX = Math.floor((Math.random() * 470) + 1);
            speedY = Math.floor((Math.random() * 670) + 1);
            exLifeX = Math.floor((Math.random() * 470) + 1);
            exLifeY = Math.floor((Math.random() * 670) + 1);
            randomPower = Math.floor((Math.random() * 10) + 1);
            score = 0;
            document.getElementById('score').innerHTML = score;
            lives = 3;

        }

    }
}

function drawRightLogs(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    for(i=0;i<rightLogs.length;i++){
        ctx.drawImage(rightLogs[i],rightLogs[i].left,rightLogs[i].top,rightLogs[i].width,rightLogs[i].height);
        rightLogs[i].left += logAmount;
    }

}


function checkLogCollision(){
    for(i=0;i<rightLogs.length;i++) {
        if (rightLogs[i].left >= 500) {
            rightLogs[i].left = -100
        }
    }

    for(i=0;i<leftLogs.length;i++) {
        if (leftLogs[i].left + leftLogs[i].width <= 0) {
            leftLogs[i].left = 600
        }
    }
}



var logCollision = false;
var waterBoolean = false;

function checkCollision(){
    for(i=0;i<pictRightArray.length;i++) {
        if (frogGuy.left + frogGuy.width > pictRightArray[i].left && frogGuy.left < pictRightArray[i].left + pictRightArray[i].width && frogGuy.top < pictRightArray[i].top + pictRightArray[i].height && frogGuy.top + frogGuy.height > pictRightArray[i].top) {
            frogGuy.left = 225;
            frogGuy.top = 650;
            subtractLives();
        }

    }
    for(i=0;i<pictRightArray2.length;i++) {
        if (frogGuy.left + frogGuy.width > pictRightArray2[i].left && frogGuy.left < pictRightArray2[i].left + pictRightArray2[i].width && frogGuy.top < pictRightArray2[i].top + pictRightArray2[i].height && frogGuy.top + frogGuy.height > pictRightArray2[i].top) {
            frogGuy.left = 225;
            frogGuy.top = 650;
            subtractLives();
        }

    }
    for(i=0;i<pictLeftArray.length;i++) {
        if (frogGuy.left + frogGuy.width > pictLeftArray[i].left && frogGuy.left < pictLeftArray[i].left + pictLeftArray[i].width && frogGuy.top < pictLeftArray[i].top + pictLeftArray[i].height && frogGuy.top + frogGuy.height > pictLeftArray[i].top) {
            frogGuy.left = 225;
            frogGuy.top = 650;
            subtractLives();
        }
    }

    for(i=0;i<rightLogs.length;i++) {

        logCollision = false;

        if(frogGuy.left + frogGuy.width > rightLogs[i].left && frogGuy.left < rightLogs[i].left + rightLogs[i].width && frogGuy.top < rightLogs[i].top + rightLogs[i].height && frogGuy.top + frogGuy.height > rightLogs[i].top) {
           logCollision = true;
            i = rightLogs.length;
        }
        else{}

    }

    if(logCollision === true){
        rightLogCollision = true;

    }


        waterBoolean = false;
        if(frogGuy.left + frogGuy.width > waterX && frogGuy.left < waterX + waterWidth && frogGuy.top < waterY + waterHeight && frogGuy.top + frogGuy.height > waterY) {
            waterCollision = true;
        }
        else{
            waterCollision = false;
        }




}

function checkFrogSnakeCollision(){
    if(snakeX < frogGuy.left + frogGuy.width && snakeX + snakeW > frogGuy.left && snakeY < frogGuy.top + frogGuy.height && snakeY + snakeH > frogGuy.top){
        frogGuy.left = 225;
        frogGuy.top = 650;
        subtractLives();
    }
}

function checkFrogWallCollisionWhileLog(){
    if(logCollision === true && waterCollision === true){
        if(frogGuy.left + frogGuy.width > 500){
            frogGuy.left = 225;
            frogGuy.top = 650;
            subtractLives();

        }
        if(frogGuy.left < 0){
            frogGuy.left = 225;
            frogGuy.top = 650;
            subtractLives();

        }

    }
}

function blackSide(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.fillStyle = "#000000";
    ctx.fillRect(500,0,150,800);
}

function checkLogToFrogCollision(){

    if(waterCollision === true && rightLogCollision === false){
        frogGuy.left = 225;
        frogGuy.top = 650;
        subtractLives();
    }

    else if(rightLogCollision === true && waterCollision === true){
        rightLogCollision = false;
        frogGuy.left += logAmount;
        drawFrogGuy();
    }

    else if(leftLogCollision === true && waterCollision === true){
        frogGuy.left -= logAmount;
        drawFrogGuy();
    }


}

$(document).keydown(function(event) {
    var keycode = (event.keyCode ? event.keyCode : event.which);

    if (keycode == 27) {
        stopAnimation();
    }
    if (keycode == 87 && frogGuy.top >= 0) {
        if(logCollision === true && waterCollision === true){
            frogGuy.top -= 70;
        }
        else {
            frogGuy.top -= frogAmount;
        }
    }
    if (keycode == 65 && frogGuy.left >= 10) {
        frogGuy.left -= frogAmount;
    }
    if (keycode == 68 && frogGuy.left + frogGuy.width < 500) {
        frogGuy.left += frogAmount;
    }
    if (keycode == 83 && frogGuy.top + frogGuy.height < 700) {
        if(logCollision === true && waterCollision === true){
            frogGuy.top += 70;
        }
        else {
            frogGuy.top += frogAmount;
        }
    }
    if (keycode == 13) {
        startAnimation();
    }
});
