window.onload = () => {
  const canvasWidth = 900;
  const canvasHeight = 600;
  const blockSize = 30;
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  const widthInBlocks = canvasWidth / blockSize;
  const heightInBlocks = canvasHeight / blockSize;
  const centreX = canvasWidth / 2;
  const centreY = canvasHeight / 2;
  let delay = 100;
  let snakee;
  let applee;
  let score;
  let timeOut;

  class Snake {
    constructor(direction, ...body) {
      this.body = body;
      this.direction = direction;
      this.ateApple = false;
    }

    draw() {
      ctx.save();
      ctx.fillStyle = "#ff0000";
      for (let block of this.body) {
        drawBlock(ctx, block);
      }
      ctx.restore();
    }

    advance() {
      const nextPosition = this.body[0].slice();
      switch (this.direction) {
        case "left":
          nextPosition[0] -= 1;
          break;
        case "right":
          nextPosition[0] += 1;
          break;
        case "down":
          nextPosition[1] += 1;
          break;
        case "up":
          nextPosition[1] -= 1;
          break;
        default:
          throw "invalid direction";
      }
      this.body.unshift(nextPosition);
      if (!this.ateApple) this.body.pop();
      else this.ateApple = false;
    }

    setDirection(newDirection) {
      let allowedDirections;
      switch (this.direction) {
        case "left":
        case "right":
          allowedDirections = ["up", "down"];
          break;
        case "down":
        case "up":
          allowedDirections = ["left", "right"];
          break;
        default:
          throw "invalid direction";
      }
      if (allowedDirections.indexOf(newDirection) > -1) {
        this.direction = newDirection;
      }
    }

    checkCollision() {
      let wallCollision = false;
      let snakeCollision = false;
      const [head, ...rest] = this.body;
      const [snakeX, snakeY] = head;
      const minX = 0;
      const minY = 0;
      const maxX = widthInBlocks - 1;
      const maxY = heightInBlocks - 1;
      const isNotBetweenHorizontalWalls = snakeX < minX || snakeX > maxX;
      const isNotBetweenVerticalWalls = snakeY < minY || snakeY > maxY;

      if (isNotBetweenHorizontalWalls || isNotBetweenVerticalWalls)
        wallCollision = true;

      for (let block of rest) {
        if (snakeX === block[0] && snakeY === block[1]) snakeCollision = true;
      }

      return wallCollision || snakeCollision;
    }

    isEatingApple(appleToEat) {
      const head = this.body[0];
      if (
        head[0] === appleToEat.position[0] &&
        head[1] === appleToEat.position[1]
      )
        return true;
      else return false;
    }
  }

  class Apple {
    constructor(position = [10, 10]) {
      this.position = position;
    }

    draw() {
      const radius = blockSize / 2;
      const x = this.position[0] * blockSize + radius;
      const y = this.position[1] * blockSize + radius;
      ctx.save();
      ctx.fillStyle = "#33cc33";
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2, true);
      ctx.fill();
      ctx.restore();
    }

    setNewPosition() {
      const newX = Math.round(Math.random() * (widthInBlocks - 1));
      const newY = Math.round(Math.random() * (heightInBlocks - 1));
      this.position = [newX, newY];
    }

    isOnSnake(snakeToCheck) {
      let isOnSnake = false;
      for (let block of snakeToCheck.body) {
        if (this.position[0] === block[0] && this.position[1] === block[1]) {
          isOnSnake = true;
        }
      }
      return isOnSnake;
    }
  }

  const init = () => {
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
    canvas.style.border = "30px solid gray";
    canvas.style.margin = "50px auto";
    canvas.style.display = "block";
    canvas.style.backgroundColor = "#ddd";
    document.body.appendChild(canvas);
    launch();
  };

  const launch = () => {
    snakee = new Snake("right", [6, 4], [5, 4], [4, 4], [3, 4], [2, 4]);
    applee = new Apple();
    score = 0;
    clearTimeout(timeOut);
    delay = 100;
    refreshCanvas();
  };

  const refreshCanvas = () => {
    snakee.advance();
    if (snakee.checkCollision()) {
      gameOver();
    } else {
      if (snakee.isEatingApple(applee)) {
        score++;
        snakee.ateApple = true;

        do {
          applee.setNewPosition();
        } while (applee.isOnSnake(snakee));

        if (score % 5 == 0) {
          speedUp();
        }
      }
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);
      drawScore();
      snakee.draw();
      applee.draw();
      timeOut = setTimeout(refreshCanvas, delay);
    }
  };

  const speedUp = () => {
    delay /= 2;
  };

  const gameOver = () => {
    ctx.save();
    ctx.font = "bold 70px sans-serif";
    ctx.fillStyle = "#000";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.strokeStyle = "white";
    ctx.lineWidth = 5;
    ctx.strokeText("Game Over", centreX, centreY - 180);
    ctx.fillText("Game Over", centreX, centreY - 180);
    ctx.font = "bold 30px sans-serif";
    ctx.strokeText(
      "Appuyer sur la touche Espace pour rejouer",
      centreX,
      centreY - 120
    );
    ctx.fillText(
      "Appuyer sur la touche Espace pour rejouer",
      centreX,
      centreY - 120
    );
    ctx.restore();
  };

  const drawScore = () => {
    ctx.save();
    ctx.font = "bold 200px sans-serif";
    ctx.fillStyle = "gray";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(score.toString(), centreX, centreY);
    ctx.restore();
  };

  const drawBlock = (ctx, position) => {
    //destructuring array
    const [x, y] = position;
    ctx.fillRect(x * blockSize, y * blockSize, blockSize, blockSize);
  };

  document.onkeydown = (e) => {
    const key = e.keyCode;
    let newDirection;
    switch (key) {
      case 37:
        newDirection = "left";
        break;
      case 38:
        newDirection = "up";
        break;
      case 39:
        newDirection = "right";
        break;
      case 40:
        newDirection = "down";
        break;
      case 32:
        launch();
        return;
      default:
        return;
    }
    snakee.setDirection(newDirection);
  };

  init();
};
