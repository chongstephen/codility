//if properly nested return 1 else 0

//check to see if there are matching brackets

//we can do a hash map and see if any pairs are not there

// hash = {
//   '{': '}',
//   '[': ']',
//   '(': ')'
// }

function brackets(str){
  const map = {
    "(" : ")",
    "[" : "]",
    "{" : "}"
}
const stack = [];

for(let char of str) {
  if(map[char]){
    stack.push(map[char])
  } else if(stack.length > 0 && stack[stack.length - 1] === char) {
    stack.pop()
  } else {
    return false
  }
}
return stack.length === 0;
}


// working solution
// function brackets(str){
//   const stack = [];

//   for (let i = 0; i < str.length; i++) {
//     const char = str[i];

//     if (char === '(' || char === '[' || char === '{') {
//       stack.push(char);
//     } else {
//       if (stack.length === 0) {
//         return 0;
//       }

//       const top = stack.pop();

//       if ((top === '(' && char !== ')') ||
//           (top === '[' && char !== ']') ||
//           (top === '{' && char !== '}')) {
//         return 0;
//       }
//     }
//   }

//   return stack.length === 0 ? 1 : 0;
// }