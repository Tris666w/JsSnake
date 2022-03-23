//------------------
//    IMPORTS
//------------------
import { GetInputDirection } from "./input.js";

//------------------
//    VARIABLES
//------------------
export var MoveSpeed = 5;
var snakeBody = []
var newSegments = 0

//------------------
//    FUNCTIONS
//------------------
export function Initialize() {
    snakeBody.push({ x: 5, y: 5 })
}

export function Update() {
    AddNewSegments();
    for (let i = snakeBody.length - 2; i >= 0; i--) {
        snakeBody[i + 1] = { ...snakeBody[i] }
    }

    var inputDir = GetInputDirection()

    snakeBody[0].x += inputDir.x;
    snakeBody[0].y += inputDir.y;

}

export function Render(gameBoard) {
    for (let index = 0; index < snakeBody.length; index++) {
        var snakeElement = document.createElement('div')
        snakeElement.style.gridRowStart = snakeBody[index].y
        snakeElement.style.gridColumnStart = snakeBody[index].x
        snakeElement.classList.add(GetCorrectClass(index))
        gameBoard.appendChild(snakeElement)
    }
}

export function GetSnakeSize() {
    return snakeBody.length;
}

function GetCorrectClass(index) {
    if (index == 0)
        return "snakeHead"
    else return "snake"

}


export function ExpandSnake(amount) {
    newSegments += amount
}

export function OnSnake(position, { ignoreHead = false } = {}) {
    return snakeBody.some((segment, index) => {
        if (ignoreHead && index === 0) return false
        return ArePositionsEqual(segment, position)
    })
}

export function GetSnakeHead() {
    return snakeBody[0]
}

export function IsSnakeSelfIntersecting() {
    return OnSnake(snakeBody[0], { ignoreHead: true })
}

function ArePositionsEqual(pos1, pos2) {
    return pos1.x === pos2.x && pos1.y === pos2.y
}

function AddNewSegments() {
    for (let i = 0; i < newSegments; i++) {
        snakeBody.push({ ...snakeBody[snakeBody.length - 1] })
    }

    newSegments = 0
}