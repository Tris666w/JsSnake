//------------------
//    VARIABLES
//------------------
var inputDirection = { x: 1, y: 0 }

//------------------
//    FUNCTIONS
//------------------
window.addEventListener('keydown', e => {
    switch (e.key) {
        case 'ArrowUp':
            if (inputDirection.y == 1) break;
            inputDirection = { x: 0, y: -1 }
            break
        case 'ArrowDown':
            if (inputDirection.y == -1) break;
            inputDirection = { x: 0, y: 1 }
            break
        case 'ArrowLeft':
            if (inputDirection.x == 1) break;
            inputDirection = { x: -1, y: 0 }
            break
        case 'ArrowRight':
            if (inputDirection.x == -1) break;
            inputDirection = { x: 1, y: 0 }
            break
    }
})


//------------------
//    FUNCTIONS
//------------------
export function GetInputDirection() {
    return inputDirection;
}