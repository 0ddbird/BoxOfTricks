import sys
import math

# Auto-generated code below aims at helping you parse
# the standard input according to the problem statement.

a = int(input())
b = int(input())
c = int(input())

a,b,c = list(map(lambda a: -a if a%2==1 else a, [a,b,c]))
print(a+b+c)