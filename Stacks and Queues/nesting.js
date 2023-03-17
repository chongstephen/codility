function nesting(str) {
  let stack = [];
  for (let i = 0; i < str.length; i++) {
      let c = str.charAt(i);
      if (c == '(') {
          stack.push(c);
      } else if (c == ')') {
          if (stack.length == 0 || stack.pop() != '(') {
              return 0;
          }
      }
  }
  if(stack.length === 0) {
    return 1
  } else {
    return 0
  }
}