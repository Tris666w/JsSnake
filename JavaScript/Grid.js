//------------------
//    IMPORTS
//------------------

//------------------
//    VARIABLES
//------------------
var GridSize

//------------------
//    FUNCTIONS
//------------------
export function Initialize() {
    GridSize = 21
}

export function GetRandomGridPos() {
    return {
        x: Math.floor(Math.random() * GridSize) + 1,
        y: Math.floor(Math.random() * GridSize) + 1
    }
}

export function IsPosOutsidegrid(position) {
    return (
        position.x < 1 || position.x > GridSize ||
        position.y < 1 || position.y > GridSize
    )
}