from flask import Flask, request
import json 

from oop import Student

app = Flask("myFristApp")

studentsdb = [Student("Andrei"), Student("Liviu")]

@app.route('/', methods=["GET"])
def home():
    response = "<h1>Welcome to my page</h1>"
    return response, 200

@app.route('/hello', methods=["GET"])
def hello():
    student = Student(name="Andrei")
    response = f"<h1>Welcome to my page</h1><p>My name is {student.name}</p>"
    return response, 200

@app.route('/students', methods=["GET", "POST"])
def students():
    if request.method == "GET":
        response = []
        for student in studentsdb:
            student_dict = student.to_dict()
            response.append(student_dict)
        return json.dumps(response), 200

    if request.method == "POST":
        response = {"message": "User created successfully."}
        return json.dumps(response), 200 

if __name__ == "__main__":
    app.run(debug=True)