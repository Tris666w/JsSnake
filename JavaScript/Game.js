//------------------
//    IMPORTS
//------------------
import { MoveSpeed } from './Snake.js'
import { IsSnakeSelfIntersecting, GetSnakeHead } from './Snake.js';
import { Initialize as InitializeSnake, Update as UpdateSnake, Render as RenderSnake, GetSnakeSize } from './Snake.js';
import { Initialize as InitializeFood, Update as UpdateFood, Render as RenderFood } from './Food.js';
import { Initialize as InitializeGrid, IsPosOutsidegrid } from './Grid.js';

//------------------
//   VARIABLES
//------------------
var lastRenderTime = 0
var game = document.getElementById("game-board")
var gameOver = false

//------------------
//    FUNCTIONS
//------------------
function GameLoop() {

    //Initialize all components of the game
    Initialize();

    //Start the actual loop for playing the game
    window.requestAnimationFrame(FrameLoop)
}

//Request once to start the loop
window.requestAnimationFrame(GameLoop)

function FrameLoop(currentTime) {
    if (gameOver) {
        if (confirm("You lost. Press ok to restart.0\nScore was " + (GetSnakeSize() - 1).toString())) {
            window.location = '/'
        }
        return
    }

    //Ask the browser to animate a new frame
    window.requestAnimationFrame(FrameLoop)

    //Calculate the time since the last frame
    const deltaT = (currentTime - lastRenderTime) / 1000

    //Only continue if enough time has passed
    //return exits the function
    if (deltaT < 1 / MoveSpeed) return

    lastRenderTime = currentTime

    Update()
    Render()
}


function Initialize() {
    InitializeGrid();
    InitializeSnake();
    InitializeFood();
}

function Update() {
    UpdateSnake();
    UpdateFood();
    CheckForSnakeDeath()
}

function Render() {
    //Reset screen
    game.innerHTML = '';
    RenderSnake(game);
    RenderFood(game);

}

function CheckForSnakeDeath() {
    //If the snake head is outside the grid or the snake hit itself
    //The game ends
    gameOver = IsPosOutsidegrid(GetSnakeHead()) || IsSnakeSelfIntersecting()
}