// 20. Valid Parentheses
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

//     Open brackets must be closed by the same type of brackets.
//     Open brackets must be closed in the correct order.

// Example 1:

// Input: s = "()"
// Output: true

// Example 2:

// Input: s = "()[]{}"
// Output: true

// Example 3:

// Input: s = "(]"
// Output: false

// Constraints:

//     1 <= s.length <= 104
//     s consists of parentheses only '()[]{}'.

function isValid(s: string): boolean {
  let ch,
    stack = [];

  for (let i = 0, il = s.length; i < il; i++) {
    ch = s.charAt(i);

    if (["(", "[", "{"].includes(ch)) {
      stack.push(ch);
    } else {
      switch (ch) {
        case ")":
          if (stack.pop() != "(") return false;
          break;
        case "]":
          if (stack.pop() != "[") return false;
          break;
        case "}":
          if (stack.pop() != "{") return false;
          break;
      }
    }
  }

  return stack.length === 0;
  // return stack.length <= 0;
  // return !(stack.length > 0);
}

console.log(isValid("([)]"));
console.log(isValid("(]"));
console.log(isValid("()[]{}"));
console.log(isValid("()(({{{{({[()]})}}}}))"));

console.log(isValid("["));
console.log(isValid("}"));

// var isValid = function (s: string) {
//   let stack = [],
//     ch,
//     i;
//   for (i = 0; i < s.length; i++) {
//     ch = s.charAt(i);

//     /*
// 		Check push conditions
// 		*/
//     if (ch == "(" || ch == "[" || ch == "{") {
//       stack.push(ch);
//     } else {
//       switch (ch) {
//         /*
// 				Check pop conditions
// 				*/
//         case ")":
//           /*
// 					notEqual to '('
// 					*/
//           if (stack.pop() != "(") {
//             return false;
//           }
//           break;
//         /*
// 				notEqual to '['
// 				*/
//         case "]":
//           if (stack.pop() != "[") {
//             return false;
//           }
//           break;
//         /*
// 				notEqual to '}'
// 				*/
//         case "}":
//           if (stack.pop() != "{") {
//             return false;
//           }
//           break;
//       }
//     }
//   }

//   /*
// 	check the whether is empty or not
// 	*/
//   return stack.length > 0 ? false : true;
// };

// import Stack from "./stack.ts";

// function isValid(s: string): boolean {
//   const stack = new Stack();
//   const curlyStack = new Stack();
//   const squareStack = new Stack();

//   for (let i = 0; i < s.length; i++) {
//     let char: string = s.charAt(i);

//     if (char === "(") stack.push(char);
//     else if (char === ")") {
//       if (stack.isEmpty()) return false;
//       stack.pop();
//     } else if (char === "{") curlyStack.push(char);
//     else if (char === "}") {
//       if (curlyStack.isEmpty()) return false;
//       curlyStack.pop();
//     } else if (char === "[") squareStack.push(char);
//     else if (char === "]") {
//       if (squareStack.isEmpty()) return false;
//       squareStack.pop();
//     }
//   }

//   // console.log(stack.getBuffer());
//   // console.log(`curlyStack.isEmpty()`, curlyStack.isEmpty());

//   return stack.isEmpty() && curlyStack.isEmpty() && squareStack.isEmpty();
// }
