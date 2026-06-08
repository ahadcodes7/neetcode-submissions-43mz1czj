class Solution:
    def evalRPN(self, tokens: List[str]) -> int:
        stack = []

        for c in tokens:
            if c == "+":
                stack.append(stack.pop() + stack.pop())
            elif c == "*":
                stack.append(stack.pop() * stack.pop())
            elif c == "-":
                f = stack.pop()
                s = stack.pop()
                stack.append(s - f)
            elif c == "/":
                f = stack.pop()
                s = stack.pop()
                stack.append(int(s / f))
            else:
                stack.append(int(c))
        
        return stack.pop()