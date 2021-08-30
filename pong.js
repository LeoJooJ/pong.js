const canvas = document.getElementById('main-canvas');//creating a variable to canvas object.
const ctx = canvas.getContext('2d');//getting the context of canvas.

/* At the beginning of my code,
 * i decided to declare some empty arrays that will
 * serve as the basic storage structure for the rest of the code
 * in the future.
 */

let global = [];
let players = [];

function createPlayer(x, y) {
//Code to make a player.
    let player = {
        wins: 0,
        color: "black",
        locals: {
            x: x,
            y: y,
            w: 30,
            h: 130
        }
    }
    return player;
}

function createBall() {
//This code make the ball.
    let ball = {
        color: 'black',
        locals: {
            x: 240,
            y: 240,
            w: 20,
            h: 20
        }
    }
    return ball;
}

function initGame() {
//The code of here will run just in the begin of game.

    //In the first lines of this function, I put the game objs in the basic array structure. 
    players['p1'] = createPlayer(100, 185);
    players['p2'] = createPlayer(370, 185);
    global['players'] = players;
    global['ball'] = createBall();

}

function renderGame() {
//Here's goes the game code that will render in screen.
    ctx.clearRect(0, 0, 500, 500);
    
    //Here i finally drew the game objs in the canvas.
    for (let p in players) {
        p = players[p];
        ctx.fillStyle = p.color;
        ctx.fillRect(
            p.locals.x, p.locals.y,
            p.locals.w, p.locals.h
        )
    }

    let ball = global['ball'];
    ctx.fillStyle = ball.color;
    ctx.fillRect(
        ball.locals.x, ball.locals.y,
        ball.locals.w, ball.locals.h
    )
}
initGame();
setInterval(renderGame, 100);