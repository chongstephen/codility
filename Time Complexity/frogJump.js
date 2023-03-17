let target = 85
let fixedJump = 30
let currentPosition = 10




function frogJump(currentPosition, target, fixedJump) {
  return Math.ceil((target - currentPosition) / fixedJump);

}

console.log(frogJump(10,85,30))