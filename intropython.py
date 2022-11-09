a = 1
b = 1.2
c = "This is a string"
d = 'This is another string'
e = f"This is a string with a variable value {a}"
g = """This is a multi-line
string."""

# +, -, *, /
h = a + b
i = a * b

# >, >=, <, =<, ==, != 
j = a == b
k = a == a 

# and, or, not 
# a and (b or c)
# in 
# a in <list>

print(a)
print(h)
print(k)

# list 
l = [1, 2, 3, 10, 'this is a list', 'This is another list', [1, 2, 3, 4]]
print(l[0])
print(l[-1])

l[1] = "New value"
print(l)
print(l.index(3))

# tuples 
t = (1, 2, 3, 4, 5)
# t[1] = 10

u = (1, 2, ['a', 'c'])
u[-1][0] = 'd'
print(u)

# dictionaries 
d1 = {
    "name": "CSE",
    "year": 3,
    "address": {
        "city": "Bucharest",
        "country": "Romania"
    },
    "grades": [10, 10, 10, 10]
}
print(d1["name"])
print(d1["grades"])

d1["year"] = 2022

d1["address"]["city"] = "Buc"
print(d1["address"])

print(d1.get("grades", []))
print(list(d1.items()))
print(list(d1.values()))
print(list(d1.keys()))

a = 10
if a > 0:
    print(a)
else:
    print('a is less than 0.')

a = -1
if a > 0:
    print(a)
elif a < 0:
    print('a is less than 0.')
else:
    print('a is zero.')

for el in l:
    print(el)
    print("--")

l2 = list(l)
for i in range(len(l)):
    l[i] = -1
    print(l[i])
print(l)
print(l2)

n =10
while n > 0:
    print(n)
    print('//')
    n = n - 1

def my_function():
    print("My function!")

my_function()

def my_function_with_parameters(param1, param2="Default"):
    print(f'First param (param1) value is {param1}.')
    print(f'Second param (param2) value is {param2}.')

my_function_with_parameters(10)
my_function_with_parameters(a, b)
my_function_with_parameters(param1=a, param2=c)
my_function_with_parameters(param2=c, param1=a)

f = lambda x: x + 1
print(f(2))

my_function_with_parameters(f)

def sum(n):
    s = 0
    for i in range(n+1):
        s = s + i
    return s

print(sum(10))