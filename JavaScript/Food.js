//------------------
//    IMPORTS
//------------------
import { OnSnake, ExpandSnake } from "./Snake.js"
import { GetRandomGridPos } from "./Grid.js"

//------------------
//    VARIABLES
//------------------
var food = { x: 0, y: 0 }
var GrowthRate = 1

//------------------
//    FUNCTIONS
//------------------
export function Initialize() {
    food = GetNewFoodPos();
}

export function Update() {
    if (OnSnake(food)) {
        ExpandSnake(GrowthRate)
        food = GetNewFoodPos()
    }
}

export function Render(gameBoard) {
    var foodElement = document.createElement('div')
    foodElement.style.gridRowStart = food.y
    foodElement.style.gridColumnStart = food.x
    foodElement.classList.add('food')
    gameBoard.appendChild(foodElement)
}

function GetNewFoodPos() {
    var newFoodPos
    while (newFoodPos == null || OnSnake(newFoodPos)) {
        newFoodPos = GetRandomGridPos();
    }
    return newFoodPos;
}