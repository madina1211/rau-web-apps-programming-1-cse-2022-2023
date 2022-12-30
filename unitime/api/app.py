from flask import Flask, request
from flask_cors import CORS
import json 

from courses import Course
from trades import Trade
from data import connect, get_all_courses

coursesdb = [
    Course(name="Course 1", url="https://www.coursera.org/learn/financial-markets-global", path_to_image="D:\\Luchici - Web Apps 1 - 2022 - 2023\\rau-web-apps-programming-1-cse-2022-2023\\unitime\\assets\\course1.jpg"),
    Course(name="Course 2", url="https://www.coursera.org/learn/financial-markets-global", path_to_image="D:\\Luchici - Web Apps 1 - 2022 - 2023\\rau-web-apps-programming-1-cse-2022-2023\\unitime\\assets\\course2.jpg"),
    Course(name="Course 3", url="https://www.coursera.org/learn/financial-markets-global", path_to_image="D:\\Luchici - Web Apps 1 - 2022 - 2023\\rau-web-apps-programming-1-cse-2022-2023\\unitime\\assets\\course1.jpg"),
    Course(name="Course 4", url="https://www.coursera.org/learn/financial-markets-global", path_to_image="D:\\Luchici - Web Apps 1 - 2022 - 2023\\rau-web-apps-programming-1-cse-2022-2023\\unitime\\assets\\course2.jpg"),
    Course(name="Course 5", url="https://www.coursera.org/learn/financial-markets-global", path_to_image="D:\\Luchici - Web Apps 1 - 2022 - 2023\\rau-web-apps-programming-1-cse-2022-2023\\unitime\\assets\\course1.jpg"),
    Course(name="Course 6", url="https://www.coursera.org/learn/financial-markets-global", path_to_image="D:\\Luchici - Web Apps 1 - 2022 - 2023\\rau-web-apps-programming-1-cse-2022-2023\\unitime\\assets\\course2.jpg")

]

tradesdb = [
    Trade(name="Trade 1", url="https://www.coursera.org/learn/financial-markets-global", path_to_image="D:\\Luchici - Web Apps 1 - 2022 - 2023\\rau-web-apps-programming-1-cse-2022-2023\\unitime\\assets\\course1.jpg"),
    Trade(name="Trade 2", url="https://www.coursera.org/learn/financial-markets-global", path_to_image="D:\\Luchici - Web Apps 1 - 2022 - 2023\\rau-web-apps-programming-1-cse-2022-2023\\unitime\\assets\\course2.jpg"),
    Trade(name="Trade 1", url="https://www.coursera.org/learn/financial-markets-global", path_to_image="D:\\Luchici - Web Apps 1 - 2022 - 2023\\rau-web-apps-programming-1-cse-2022-2023\\unitime\\assets\\course1.jpg"),
    Trade(name="Trade 2", url="https://www.coursera.org/learn/financial-markets-global", path_to_image="D:\\Luchici - Web Apps 1 - 2022 - 2023\\rau-web-apps-programming-1-cse-2022-2023\\unitime\\assets\\course2.jpg")
]

app = Flask("unitime")
CORS(app)

@app.route("/api/v1/courses", methods=["GET", "POST"])
def courses():
    if request.method == "GET":
        try:
            conn = connect()
            courses = get_all_courses(conn)

            response = []
            for course in courses:
                course_dict = course.to_dict()
                response.append(course_dict)
            
            conn.close()
            
            return json.dumps(response), 200 
        except Exception as e:
            error_message = {"error": "Failed to get courses."}
            return json.dumps(error_message), 500

    if request.method == "POST":
        data = request.json 
        new_course_name = data.get("name", "Unknown")
        new_course_url = data.get("url", None)
        new_course_image = data.get("image", None)

        if new_course_url is None:
            response = {"error": "Invalid course URL provided. Try again with a valid URL."}
            return json.dumps(response), 400

        new_course = Course(name=new_course_name, url=new_course_url, path_to_image=new_course_image)
        coursesdb.append(new_course)
        return "", 204

@app.route("/api/v1/trades", methods=["GET", "POST"])
def trades():
    if request.method == "GET":
        response = []
        for trade in tradesdb: 
            trade_dict = trade.to_dict()
            response.append(trade_dict) 
        return json.dumps(response), 200

    if request.method == "POST":
        data = request.json
        new_trade_name = data.get("name", "Unkown")
        new_trade_url = data.get("url", None)
        new_trade_image = data.get("image", None)

        if new_trade_url is None or new_trade_image is None:
            response = {"error": "Invalid trade details. Please try again with correct data."}
            return json.dumps(response), 400
        
        trade = Trade(new_trade_name, new_trade_url, new_trade_image)
        tradesdb.append(trade)
        return "", 204


if __name__ == "__main__":
    app.run(debug=True)